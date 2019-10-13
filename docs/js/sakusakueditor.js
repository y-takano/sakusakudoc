'use strict'

//-----------------------------------------------
//  コントロール ／ ビュー層
//-----------------------------------------------

// Aceエディタの管理オブジェクト
class SakuEditor {
	
	constructor(text) {
		this.editor = ace.edit("editor");
		//this.editor.getSession().setUseWorker(true);
		this.editor.getSession().setUseWrapMode(true);
		this.editor.setDisplayIndentGuides(true);
		this.editor.setHighlightGutterLine(true);
		this.editor.$blockScrolling = Infinity;
		
		this.type = null;
		this.liveId = null;
		this.changed = false;
		this.setWrapPoint(70);
		this.setMode('adoc');
		this.fontFamily = 'monospace';
		this.setFontSize(12);
		this.setTheme("ace/theme/twilight");
		
		/*
		this.editor.getSession().on('changeScrollTop',function(scroll){
			// カーソル位置
			var cursor = this.editor.selection.getCursor();
			// 総行数
			var rows = this.editor.session.getLength();
			var viewer = select('#Previewer');
			viewer.scrollTop = (viewer.scrollHeight-viewer.clientHeight)*cursor.row/rows;
		});
		*/
		
		// ドキュメントの変更を監視する
		const self = this;
		const isPolling = function() {
			return self.liveId ? true : false;
		};
		this.editor.on('focus', function() {
			if (!isPolling()) {
				self.editor.getSession().on("change" , function(e) {
					self.changed = true;
				});
				self.liveId = setInterval(function() {
					if (self.changed) {
						self.changed = false;
						if (self.liveId) {
							ctrl.preview();
						}
					}
				}, 1000);
			}
		});
		// 監視を止める
		this.editor.on('blur', function() {
			if (isPolling()) {
				clearInterval(self.liveId);
				self.liveId = null;
				self.editor.getSession().on("change" , function(e){});
			}
		});
		
		this.editor.session.setValue(text);
	}
	
	setMode(type) {
		switch (type) {
			case 'adoc':
				this.type = 'adoc';
				this.editor.session.setMode("ace/mode/asciidoc");
				break;
			case 'markd':
				this.type = 'markdown';
				this.editor.session.setMode("ace/mode/markdown");
				break;
			default:
				console.error('unknown type:' + type);
				break;
		}
	}
	
	getMode() {
		return this.type;
	}
	
	setWrapPoint(point) {
		this.editor.setPrintMarginColumn(point);
		this.editor.getSession().setWrapLimitRange(
				this.editor.getPrintMarginColumn(),
				this.editor.getPrintMarginColumn()
			);
	}
	
	setTheme(themeName) {
		this.editor.setTheme(themeName);
	}
	
	setFontSize(size) {
		const s = size + 'pt';
		this.editor.setOptions({
			//enableBasicAutocompletion: true,
			//enableSnippets: true,
			//enableLiveAutocompletion: true
			fontFamily: this.fontFamily,
			fontSize: s
		});
		this.fontSize = s;
	}
	
	setFontFamily(fontFamilyName) {
		this.editor.setOptions({
			fontFamily: fontFamilyName,
			fontSize: this.fontSize
		});
		this.fontFamily = fontFamilyName;
	}
	
	read() {
		return this.editor.session.getValue();
	}
	
	dispose() {
		self.liveId = null;
		this.editor.on('focus', function() {});
		this.editor.on('blur', function() {});
		this.editor.getSession().on("change" , function(e) {});
	}
}


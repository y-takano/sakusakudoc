'use strict'

//-----------------------------------------------
//  コントロール ／ ビュー層
//-----------------------------------------------

// マークアップ言語パーサ・コンパイラの管理オブジェクト
class SakuViewer {
	
	constructor() {
		this.docstring = '';
		this.safe = false;
		this.liveId = null;
		this.changed = false;
		this.selectAllFromPreview = function(selector) {
			return select('#Previewer').contentWindow.document.querySelectorAll(selector);
		};
	}
	
	setSafeMode(safeMode) {
		this.safe = safeMode ? true : false;
	}
	
	isSafeMode() {
		return this.safe ? true : false;
	}
	
	setLiveMode(liveMode) {
		const self = this;
		if (liveMode) {
			this.liveId = setInterval(function() {
				if (self.changed) {
					self._flush();
					self.changed = false;
				}
			}, 500);
		} else if(this.isLiveMode()) {
			clearInterval(this.liveId);
			this.liveId = null;
			this.changed = false;
		}
	}
	
	isLiveMode() {
		return this.liveId ? true : false;
	}
	
	convertHTMLSource(indoc) {
		return this._cnv(indoc);
	}
	
	write(indoc) {
		try {
			this.docstring = this._cnv(indoc);
			if (this.isLiveMode()) {
				this.changed = true;
			} else {
				this._flush();
			}
		} catch(e) {
			console.error(e);
		}
	}
	
	dispose() {
		this.setLiveMode(false);
		this.docstring = '<html></html>';
		const doc = select('#Previewer').contentDocument;
		doc.open();
		doc.write('<html></html>');
		doc.close();
		//doc.location.reload(false);
	}
}

// Asciidoc用のサブクラス
class AdcViewer extends SakuViewer {

	constructor() {
		super();
		this.convertor = Asciidoctor();
		const plantuml = AsciidoctorPlantuml;
		plantuml.register(this.convertor.Extensions);
		const registry = this.convertor.Extensions.create();
		plantuml.register(registry);
	}
	
	_cnv(indoc) {
		return this.convertor.convert(indoc,{ 'header_footer': true, 'attributes': { 'showtitle': true, 'icons': 'font' } })
						.replace('<link rel="stylesheet" href="./asciidoctor.css">', asdCss);
		//this.convertor.load(indoc, {});
		//return DOMPurify.sanitize(
		//		self.convertor.convert(indoc,{ 'header_footer': true, 'attributes': { 'showtitle': true, 'icons': 'font' } })
		//				.replace('<link rel="stylesheet" href="./asciidoctor.css">', asdCss)
		//	);
	}
	
	_flush() {
		const html = select('#Previewer').contentWindow.document.documentElement;
		// フッタの出力日時を削ってから比較
		if (this.docstring.slice(0,-68) != html.innerHTML.slice(0,-68)) {
			if (0 < select('#Previewer').contentDocument.body.innerHTML.length) {
				select('#Previewer').contentDocument.body.innerHTML = DOMPurify.sanitize(this.docstring);
				//const str = this.docstring;
				//select('#Previewer').contentDocument.body.outerHTML = str.slice(str.indexOf('<body'), str.indexOf('</body>')) + '</body>';
			} else {
				const doc = select('#Previewer').contentDocument;
				doc.open();
				doc.write(this.docstring);
				doc.close();
			}
			var l = this.selectAllFromPreview("a");
			for (var i=0; i<l.length; i++) {
				l[i].style["pointer-events"] = "none";
			}
		}
	}
}

// Markdown用のサブクラス
class MkdViewer extends SakuViewer {
	
	constructor() {
		super();
	}
	
	_cnv(indoc) {
		return marked(indoc);
	}
	
	_flush() {
		const html = select('#Previewer').contentWindow.document.documentElement;
		//const doc = select('#Previewer').contentDocument.body.innerHTML = DOMPurify.sanitize(this.docstring);
		
		if (0 < select('#Previewer').contentDocument.body.innerHTML.length) {
			select('#Previewer').contentDocument.body.innerHTML = DOMPurify.sanitize(this.docstring);
		
		} else {
			let outdoc = '<html><head>';
			outdoc += markdCss;
			outdoc += '</head><body>';
			outdoc += this.docstring;
			outdoc += '</body></html>';
			const doc = select('#Previewer').contentDocument;
			doc.open();
			doc.write(outdoc);
			doc.close();
		}
		var l = this.selectAllFromPreview("a");
		for (var i=0; i<l.length; i++) {
			l[i].style["pointer-events"] = "none";
		}
	}
}

// markdjsのハイライトオプションにhighlightjsを設定
(function() {
	hljs.initHighlightingOnLoad();
	marked.setOptions({
		highlight: function(code) {
			return hljs.highlightAuto(code).value;
		}
	});
})();

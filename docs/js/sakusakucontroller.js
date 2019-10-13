'use strict'

//-----------------------------------------------
//  コントロール層
//-----------------------------------------------

// コントローラ
class SakuCtrl {
	
	constructor() {
		const self = this;
		async function getWorkspace() {
			self.workspace = await Workspace.getInstance();
			self.defalutFolder = self.workspace.getDefault();
			self.defalutFile = self.defalutFolder.get(0);
			
			// タイトル表示を更新
			select('.title').value = self.editFileName;
			let lastidx = self.editFileName.lastIndexOf('.');
			lastidx = 10 < lastidx ? 10 : lastidx;
			document.title = self.editFileName.slice(0,lastidx) + ' - sakusakudoc';
			
			// エディタ初期化
			self.editor = new SakuEditor(self.editFileText);
			const lang = select('#language');
			lang.value = self.editFileName.slice(-3) == '.md' ? 'markd' : 'adoc';
			self.changeEditorOption(lang);
		}
		getWorkspace();
	}
	
	// プレビュー更新
	preview() {
		const self = this;
		// iframe要素内のaタグを無効にする(リンク先が不正になってしまうため)
		//setTimeout(function() {
		//	const indoc = self.editor.read();
		//	self.viewer.write(indoc);
		//	self.tid = setInterval(self.invalidateLink, 1000);
		//}, 1000);
		new Promise(function(resolve, reject) {
			self.viewer.write(self.editor.read());
		}).catch((e) => {
			console.log('error:', e);
		});
	}
	
	set editFileName(name) {
		this.defalutFile.name = name;
	}
	
	get editFileName() {
		return this.defalutFile.name;
	}
	
	set editFileText(text) {
		this.defalutFile.text = text;
	}
	
	get editFileText() {
		return this.defalutFile.text;
	}
	
	save() {
		this.editFileText = this.editor.read();
		this.workspace.save();
	}
	
	// 編集ファイル名の変更
	rename() {
		// ファイル名更新
		const filenames = selectAll('.filename-editing');
		let oldFileName = null;
		let newFileName = null;
		for (let name of filenames) {
			if (this.editFileName != name.value) {
				newFileName = name.value;
				oldFileName = this.editFileName;
				break;
			}
		}
		if (newFileName) {
			// 禁止文字が1文字あれば戻す
			if (newFileName.match( /^.*[(\\|/|:|\*|?|\"|<|>|\|)].*$/ )) {
				newFileName = oldFileName;
			}
			// 関連する画面項目を更新
			for (let name of filenames) {
				if (newFileName != name.value) {
					name.value = newFileName;
				}
			}
			this.editFileName = newFileName;
			// タイトル表示を更新
			let lastidx = this.editFileName.lastIndexOf('.');
			lastidx = 10 < lastidx ? 10 : lastidx;
			document.title = this.editFileName.slice(0,lastidx) + ' - sakusakudoc';
		}
	}
	
	// EditModeの切り替え
	toggleEditMode() {
		const self = this;
		const editArea = select('.EditArea').classList;
		new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(self.hideFAB());
			}, 450);
				
		}).then(() => {
			const icon = select('#edit-mode');
			let newText;
			// エディタ非表示
			if (icon.innerText == 'aspect_ratio') {
				newText = 'edit';
				editArea.remove('Show');
				editArea.add('Hide');
				// プレビューア非表示の場合は表示
				if (!self.viewer.isLiveMode()) {
					self.toggleLiveMode();
				}
			
			// エディタ表示
			} else {
				newText = 'aspect_ratio';
				editArea.remove('Hide');
				editArea.add('Show');
				
			}
			setTimeout(function() {
				icon.innerText = newText;
				self.showFAB();
			}, 200);
		}).catch((e) => {
			console.log('error:', e);
		});
	}
	
	// LiveModeの切り替え
	toggleLiveMode() {
		const icon = select('#live-mode').classList;
		const previewArea = select('.PreviewArea').classList;
		if (icon.contains('toggle-on')) {
			icon.remove('toggle-on');
			icon.add('toggle-off');
			previewArea.remove('Show');
			previewArea.add('Hide');
			this.viewer.setLiveMode(false);
			
		} else {
			icon.remove('toggle-off');
			icon.add('toggle-on');
			previewArea.remove('Hide');
			previewArea.add('Show');
			this.viewer.setLiveMode(true);
			
		}
	}
	
	// Documentsバーの切り替え
	toggleDocuments() {
		const docsbar = select('#documents').classList;
		if (docsbar.contains('Hide500') || docsbar.contains('HideNow')) {
			docsbar.remove('Hide500');
			docsbar.remove('HideNow');
			docsbar.add('Show500');
		} else {
			docsbar.remove('Show500');
			docsbar.add('Hide500');
		}
	}
	
	// サイドメニュー表示(非表示はCSSで処理）
	showSideMenu() {
		document.location.href = "#g_menu";
		const self = this;
		setTimeout(function() {
			self.hideFAB();
		}, 250);
	}
	
	// FAB非表示
	hideFAB() {
		for(var fab of selectAll('.FAB')) {
			if (fab.classList.contains('ShowFAB')) {
				fab.classList.remove('ShowFAB');
			}
			if (fab.classList.contains('ripple')) {
				fab.classList.remove('ripple');
			}
			if(!fab.classList.contains('HideFAB')) {
				fab.classList.add('HideFAB');
			}
		}
	}
	
	// FAB表示
	showFAB() {
		for(var fab of selectAll('.FAB')) {
			if (fab.classList.contains('HideFAB')) {
				fab.classList.remove('HideFAB');
			}
			if (!fab.classList.contains('ShowFAB')) {
				fab.classList.add('ShowFAB');
			}
			if (!fab.classList.contains('ripple')) {
				fab.classList.add('ripple');
			}
		}
	}
	
	// HTMLダウンロード
	export() {
		// ダウンロードしたいコンテンツ、MIMEType、ファイル名
		var content  = this.viewer.convertHTMLSource(this.editor.read());
		var mimeType = 'text/plain';
		const idx = this.editFileName.lastIndexOf('.');
		var name  = this.editFileName.slice(0, 0<idx ? idx : this.editFileName.length) + ".html";

		// BOMは文字化け対策
		var bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
		var blob = new Blob([bom, content], {type : mimeType});

		var a = document.createElement('a');
		a.download = name;
		a.target   = '_blank';

		if (window.navigator.msSaveBlob) {
		  // for IE
		  window.navigator.msSaveBlob(blob, name)
		}
		else if (window.URL && window.URL.createObjectURL) {
		  // for Firefox
		  a.href = window.URL.createObjectURL(blob);
		  document.body.appendChild(a);
		  a.click();
		  document.body.removeChild(a);
		}
		else if (window.webkitURL && window.webkitURL.createObject) {
		  // for Chrome
		  a.href = window.webkitURL.createObjectURL(blob);
		  a.click();
		}
		else {
		  // for Safari
		  window.open('data:' + mimeType + ';base64,' + window.Base64.encode(content), '_blank');
		}
	}
	
	// エディタオプション
	changeEditorOption(element) {
		const value = select('#' + element.id).value;
		switch (element.id) {
			
			// 対象言語の切り替え
			case 'language':
				let fileNameExtAfter, imgSrc;
				if (value == 'adoc') {
					fileNameExtAfter = '.adoc';
					imgSrc = 'img/adoc.png';
				} else if (value == 'markd') {
					fileNameExtAfter = '.md';
					imgSrc = 'img/markd.png';
				}
				const mode = this.editor.getMode();
				if (value == 'adoc' && mode == 'adoc' && !this.viewer) {
					const text = this.editor.read();
					this.viewer = new AdcViewer;
					this.editor = new SakuEditor(text);

				} else if (value == 'adoc' && mode == 'markdown') {
					const text = initValue;
					if (this.viewer) {
						this.viewer.dispose();
					}
					this.viewer = new AdcViewer;
					this.editor.dispose();
					this.editor = new SakuEditor(text);
				} else if (value == 'markd' && mode == 'adoc') {
					const text = initValue2;
					if (this.viewer) {
						this.viewer.dispose();
					}
					this.viewer = new MkdViewer;
					this.editor.dispose();
					this.editor = new SakuEditor(text);
				}
				// ファイル名更新
				const title = select('.title');
				for (const textInput of selectAll('.filename-editing')) {
					textInput.value = title.value.slice(0, title.value.lastIndexOf('.')) + fileNameExtAfter;
				}
				// アイコン更新
				const icons = selectAll('.icon-editing');
				for (let icon of icons) {
					icon.src = imgSrc;
					icon.hidden = false;
				}
				// エディタ更新
				this.editor.setMode(value);
				// ビューア更新
				this.viewer.setLiveMode(true);
				// プレビュー表示
				this.preview();
				this.viewer.setSafeMode(true);
				break;
				
			// フォントの切り替え
			case 'font-family':
				// エディタ更新
				this.editor.setFontFamily(value);
				break;
			case 'font-size':
				// エディタ更新
				this.editor.setFontSize(value);
				break;
				
			// 折り返し位置の切り替え
			case 'wrap-pt':
				// エディタ更新
				this.editor.setWrapPoint(value);
				break;
			
			// テーマの切り替え
			case 'ace-theme':
				// エディタ更新
				this.editor.setTheme(value);
				break;
				
			default:
				break;
		}
	}
	
	reset() {
		this.viewer.dispose();
		this.editor.dispose();
		this.workspace = Workspace.init();
		setTimeout(function() {
			document.location.href = '#';
			document.location.reload(false);
		},1000);
	}
}

// コントローラのアクセサ
const ctrl = new SakuCtrl;


'use strict'

// ショートカット
const select = function(selector) {
	return document.querySelector(selector);
};
const selectAll = function(selector) {
	return document.querySelectorAll(selector);
};

//-----------------------------------------------
//  モデル層
//-----------------------------------------------

// ドキュメントファイル
class SakuDoc {
	
	constructor(name, text) {
		if (!name) {
			throw Error('ファイル名を指定してください');
		}
		this.name = name;
		this.text = text ? text : '';
	}
	
	set name(name) {
		this._name = name;
	}
	
	get name() {
		return this._name;
	}
	
	set text(text) {
		this._text = text;
	}
	
	get text() {
		return this._text;
	}
}

// フォルダ
class SakuFolder {
	
	constructor(name, files) {
		if (!name) {
			throw Error('フォルダ名を指定してください');
		}
		this.name = name;
		this._files = [];
		if (files) {
			for (const f of files) {
				this._files.push(new SakuDoc(f._name, f._text));
			}
		}
	}
	
	set name(name) {
		this._name = name;
	}
	
	get name() {
		return this._name;
	}
	
	add(file) {
		this._files.push(file);
	}
	
	get(idx) {
		return this._files[0];
	}

	isDefault() {
		return this.name == '__default__';
	}
}

// ワークスペース
class Workspace {
	
	constructor(folders) {
		this._folders = [];
		if (folders) {
			for (const f of folders) {
				this._folders.push(new SakuFolder(f._name, f._files));
			}
		}
	}
	
	static getInstance() {
		return new Promise((resolve, reject) => {
			// IndexedDBからワークスペースを取得
			sakusakudb.simpleMapper().get('workspace', (value) => {
				let self = null;
				// 取得成功
				if (value) {
					self = new Workspace(value._folders);
				// 初回取り出し
				} else {
					self = Workspace.init();
				}
				resolve(self);
			});
		}).catch((e) => {
			console.log();
		});
	}
	
	static init() {
		const ws = new Workspace();
		
		// テンプレートを作成
		const folder = new SakuFolder('__default__');
		folder.add(new SakuDoc('無題のドキュメント.adoc', initValue));
		ws.add(folder);
		ws.save();
		
		return ws;
	}
	
	add(folder) {
		this._folders.push(folder);
	}
	
	// IndexedDBを上書き
	save() {
		sakusakudb.simpleMapper().put('workspace', this);
	}
	
	getDefault() {
		for (const f of this._folders) {
			if (f.isDefault()) {
				return f;
			}
		}
		return null;
	}
}


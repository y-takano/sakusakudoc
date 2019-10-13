
var sakusakudb = (function() {
	
	// 標準実装のオブジェクトが存在しない場合のダミーを作っておく
	var console = console || window.top.console;
	if (!console) {
		console = {
			log : function(arg) {
				// NOP
			}
		};
	}
	
	// polyfill
	var JSON = JSON || window.top.JSON;
	if (!JSON) {
		JSON = {
			parse: function(sJSON) { return eval('(' + sJSON + ')'); },
			stringify: (function () {
				var toString = Object.prototype.toString;
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var isArray = Array.isArray || function (a) { return toString.call(a) === '[object Array]'; };
				var escMap = {'"': '\\"', '\\': '\\\\', '\b': '\\b', '\f': '\\f', '\n': '\\n', '\r': '\\r', '\t': '\\t'};
				var escFunc = function (m) { return escMap[m] || '\\u' + (m.charCodeAt(0) + 0x10000).toString(16).substr(1); };
				var escRE = /[\\"\u0000-\u001F\u2028\u2029]/g;
				return function stringify(value) {
					if (value == null) {
						return 'null';
					} else if (typeof value === 'number') {
						return isFinite(value) ? value.toString() : 'null';
					} else if (typeof value === 'boolean') {
						return value.toString();
					} else if (typeof value === 'object') {
						if (typeof value.toJSON === 'function') {
							return stringify(value.toJSON());
						} else if (isArray(value)) {
							var res = '[';
							for (var i = 0; i < value.length; i++)
								res += (i ? ', ' : '') + stringify(value[i]);
							return res + ']';
						} else if (toString.call(value) === '[object Object]') {
							var tmp = [];
							for (var k in value) {
								// in case "hasOwnProperty" has been shadowed
								if (hasOwnProperty.call(value, k))
									tmp.push(stringify(k) + ': ' + stringify(value[k]));
							}
							return '{' + tmp.join(', ') + '}';
						}
					}
					return '"' + value.toString().replace(escRE, escFunc) + '"';
				};
			})()
		};
	}
	
	// Indexed DataBase APIオブジェクト
	var IndexedDBAPI = indexedDB || mozIndexedDB || msIndexedDB || webkitIndexedDB ||
			window.top.indexedDB || window.top.mozIndexedDB ||
			window.top.msIndexedDB || window.top.webkitIndexedDB;
	
	// 動作環境チェック
	if (!IndexedDBAPI) {
		console.log("Indexed DataBase API非対応環境です");
		
		// 非対応環境の場合はnullを返す
		return null;
	}
	
	// 定数
	var METHOD_LIST = {
		CONNECT : "connect",
		CLEAR : "clear",
		PUT : "put",
		GET : "get",
		DELETE : "delete"
	};
	
	// DB名は固定制限とする
	var DATABASE_NAME = 'key_value_strDB';
	
	// DBVersionは固定制限とする
	var DATABASE_VERSION = 1;
	
	// インターフェースの実装
	var impl = function(storename) {
		
		// store名
		this.storeName = storename ? storename : 'ormapping_store';
		
		// エラーハンドラ(デフォルト実装: コンソールログ出力)
		this.errorHandler = function(method, event) {
			try {
				console.log(method + 'に失敗しました');
				console.log(event);
			} catch(e) {
				//NOP
			}
		};

		// DB
		var db = null;
		
		// エラーハンドラ
		var errHandler = function(method, event, onerror) {
			console.log('Indexed DataBaseの処理に失敗しました');
			// フック呼び出し(個別)
			if (onerror) {
				try {
					onerror(method, event);
				} catch(e) {
					// NOP
				}
			}
			// フック呼び出し(汎用)
			try {
				this.errorHandler(method, event);
			} catch(e) {
				console.log(e);
			} finally {
				if (db) {
					try {
						db.close();
					} catch(e) {
						//NOP
					}
				}
			}
		};
		
		// DB接続
		this.open = function(onsuccess, onerror) {
		
			// dataStore作成関数
			var storeName = this.storeName;
			var createStore = function(event) {
				if (db) return;
				db = event.target.result;
				
				if (db.objectStoreNames.length != 1 || db.version < DATABASE_VERSION) {
					//IndexedDBAPI.deleteDatabase(DATABASE_NAME);
					db.createObjectStore(storeName, { keyPath: 'key'});
				}
				if (onsuccess) {
					try {
						onsuccess(METHOD_LIST.CONNECT, event);
					} catch(e) {
						console.log(e);
					}
				}
			}
			var request = IndexedDBAPI.open(DATABASE_NAME, DATABASE_VERSION);
			request.onsuccess = createStore;
			request.onupgradeneeded = createStore;
			request.onerror = function(event) {
				errHandler(METHOD_LIST.CONNECT, event, onerror);
			}
		};

		this.putValue = function(key, value, onsuccess, onerror) {
			if (!db) {
				console.log('データベースに接続されていません。処理を中断しました。');
				return;
			}
			if (!key || !value) {
				console.log('keyまたはvalueが指定されていません。処理を中断しました。');
				return;
			}
			var transaction = db.transaction([this.storeName], 'readwrite');
			if (onsuccess) {
				transaction.oncomplete = function(event) {
					onsuccess(METHOD_LIST.PUT, event);
				};
			}
			if (onerror) {
				transaction.onerror = function(event) {
					errHandler(METHOD_LIST.PUT, event, onerror);
				};
			}
			var store = transaction.objectStore(this.storeName);
			store.put({key: key, value: value});
		};
		
		this.putJSON = function(key, value, onsuccess, onerror) {
			this.putValue(key, JSON.stringify(value), onsuccess, onerror);
		};
		
		this.getValue = function(key, onsuccess, onerror) {
			if (!db) {
				console.log('データベースに接続されていません。処理を中断しました。');
				return;
			}
			if (!key) {
				console.log('keyが指定されていません。処理を中断しました。');
				return;
			}
			var transaction = db.transaction([this.storeName], 'readwrite');
			var objectStore = transaction.objectStore(this.storeName);
			var request = objectStore.get(key);
			if (onsuccess) {
				request.onsuccess = function(event) {
					var value = event.target.result ? event.target.result.value : undefined;
					onsuccess(value, METHOD_LIST.GET, event);
				};
			}
			if (onerror) {
				request.onerror = function(event) {
					errHandler(METHOD_LIST.GET, event, onerror);
				};
			}
		};
		
		this.getJSON = function(key, onsuccess, onerror) {
			var f = function(value, method, event) {
				if (value) {
					value = JSON.parse(value);
				}
				if (onsuccess) {
					onsuccess(value, method, event);
				}
			};
			this.getValue(key, f, onerror);
		};
		
		this.delete = function(key, onsuccess, onerror) {
			if (!db) {
				console.log('データベースに接続されていません。処理を中断しました。');
				return;
			}
			if (!key) {
				console.log('keyが指定されていません。処理を中断しました。');
				return;
			}
			var transaction = db.transaction([this.storeName], 'readwrite');
			var objectStore = transaction.objectStore(this.storeName);
			var request = objectStore.delete(key);
			if (onsuccess) {
				request.onsuccess = function(event) {
					onsuccess(METHOD_LIST.DELETE, event);
				};
			}
			if (onerror) {
				request.onerror = function(event) {
					errHandler(METHOD_LIST.DELETE, event, onerror);
				};
			}
		};
		
		this.clear = function(onsuccess, onerror) {
			if (!db) {
				console.log('データベースに接続されていません。処理を中断しました。');
				return;
			}
			var transaction = db.transaction([this.storeName], 'readwrite');
			var objectStore = transaction.objectStore(this.storeName);
			var request = objectStore.clear();
			if (onsuccess) {
				request.onsuccess = function(event) {
					onsuccess(METHOD_LIST.CLEAR, event);
				};
			}
			if (onerror) {
				request.onerror = function(event) {
					errHandler(METHOD_LIST.CLEAR, event, onerror);
				};
			}
		};
	};
	
	// DB削除メソッド
	impl.deleteDatabase = function() {
		IndexedDBAPI.deleteDatabase(DATABASE_NAME);
	};
	
	// ユーザアクセス側のインターフェースオブジェクト
	var outside = {};
	
	// 定数をオブジェクトに関連付け
	outside.METHOD = METHOD_LIST;
	
	// 単純利用専用のオブジェクトを生成する
	var singleton = new impl();
	singleton.open();
	
	// 単純利用のショートカットメソッドを定義
	outside.simpleMapper = function() {
		var apiWrapper = function() {};
		apiWrapper.prototype = {
			put : function(key, value, onsuccess, onerror) {
				singleton.putValue(key, value, onsuccess, onerror);
			},
			get : function(key, onsuccess, onerror) {
				singleton.getValue(key, onsuccess, onerror);
			},
			deleteDB : function() {
				impl.deleteDatabase();
			}
		};
		return new apiWrapper();
	};
	
	// ビルダ取得メソッドを定義
	outside.configure = function() {
		var builder = function() {
			this.userAPI = new impl();
		};
		builder.prototype = {
 			setStoreName : function(name) {
				userAPI.storeName = name;
				return this;
			},
			setOnerror : function(hook) {
				userAPI.errorHandler = hook;
				return this;
			},
			build : function() {
				return this.userAPI;
			}
		};
		return new builder();
	};
	
	// インターフェースを復帰
	return outside;
})();

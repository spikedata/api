(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('fs'), require('path')) :
	typeof define === 'function' && define.amd ? define(['fs', 'path'], factory) :
	(global = global || self, global.SpikeApi = factory(global.null, global.null));
}(this, (function (fs, path) { 'use strict';

	fs = fs && fs.hasOwnProperty('default') ? fs['default'] : fs;
	path = path && path.hasOwnProperty('default') ? path['default'] : path;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n['default'] || n;
	}

	const url = "/accounts";
	const swagger = {
	  tags: ["Web"],
	  method: "post",
	  summary: "List all accounts & balances held by user",
	  operationId: "accounts"
	};
	const shapes = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: "accounts",
	  outputs: {
	    success: ["accounts/success"],
	    error: [// general & web
	    "error/common/dev/authorization", "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/site/input-validation-failed", "error/site/internal", "error/site/site-change-detected", "error/site/site-unreachable", "error/site/site-unresponsive"]
	  }
	};
	var accounts = {
	  url,
	  swagger,
	  shapes
	};

	const url$1 = "/estatement";
	const swagger$1 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "Branded statement (free to download)",
	  operationId: "estatement"
	};
	const shapes$1 = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: "estatement",
	  outputs: {
	    success: "file/success",
	    error: [// general & web
	    "error/common/dev/authorization", "error/common/dev/function-not-supported-on-site", "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/site/bank-blocked", "error/site/captcha", "error/site/input-validation-failed", "error/site/internal", "error/site/no-statements-available", "error/site/site-change-detected", "error/site/site-maintenance", "error/site/site-unreachable", "error/site/site-unresponsive"]
	  }
	};
	var estatement = {
	  url: url$1,
	  swagger: swagger$1,
	  shapes: shapes$1
	};

	const url$2 = "/login";
	const swagger$2 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "Initiate a session by logging in to an internet banking account",
	  operationId: "login"
	};
	const shapes$2 = {
	  inputs: "login",
	  outputs: {
	    success: "login/success",
	    interim: ["login/interim-input-abs-pass", "login/interim-input-std-otp", "login/interim-wait-cap-2fa"],
	    error: [// general & web
	    "error/common/access/exceeded-max-concurrent-requests", "error/common/access/insufficient-credit", "error/common/dev/authorization", "error/common/dev/invalid-inputs", "error/common/exception", "error/fnb/online-banking-legal-documentation", "error/site/bank-blocked", "error/site/captcha", "error/site/input-validation-failed", "error/site/internal", "error/site/login-failed", "error/site/ok-got-it", "error/site/site-change-detected", "error/site/site-maintenance", "error/site/site-unreachable", "error/site/site-unresponsive"]
	  }
	};
	var login = {
	  url: url$2,
	  swagger: swagger$2,
	  shapes: shapes$2
	};

	const url$3 = "/login-interim-input";
	const swagger$3 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "2nd step in a 2-step login process where user input is required - e.g. STD OTP & ABS pass",
	  operationId: "login"
	};
	const shapes$3 = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: ["login-interim-input/abs-pass", "login-interim-input/std-otp"],
	  outputs: {
	    success: "login-interim-input/success",
	    error: [// general & web
	    "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/fnb/online-banking-legal-documentation", "error/site/bank-blocked", "error/site/captcha", "error/site/input-validation-failed", "error/site/internal", "error/site/login-failed", "error/site/ok-got-it", "error/site/site-change-detected", "error/site/site-maintenance", "error/site/site-unreachable", "error/site/site-unresponsive", "error/user/denied", "error/user/took-too-long"]
	  }
	};
	var loginInterimInput = {
	  url: url$3,
	  swagger: swagger$3,
	  shapes: shapes$3
	};

	const url$4 = "/login-interim-wait";
	const swagger$4 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "2nd step in a 2-step login process where user input is NOT required - e.g. CAP wait",
	  operationId: "login"
	};
	const shapes$4 = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: "login-interim-wait",
	  outputs: {
	    success: "login-interim-wait/success",
	    error: [// general & web
	    "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/fnb/online-banking-legal-documentation", "error/site/bank-blocked", "error/site/captcha", "error/site/input-validation-failed", "error/site/internal", "error/site/login-failed", "error/site/ok-got-it", "error/site/site-change-detected", "error/site/site-maintenance", "error/site/site-unreachable", "error/site/site-unresponsive", "error/user/denied", "error/user/took-too-long"]
	  }
	};
	var loginInterimWait = {
	  url: url$4,
	  swagger: swagger$4,
	  shapes: shapes$4
	};

	const url$5 = "/statements";
	const swagger$5 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "Archived history statement (some banks may charge)",
	  operationId: "statements"
	};
	const shapes$5 = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: "statements",
	  outputs: {
	    success: ["file/success"],
	    error: [// general & web
	    "error/common/dev/authorization", "error/common/dev/function-not-supported-on-site", "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/fnb/statements-disabled", "error/site/bank-blocked", "error/site/input-validation-failed", "error/site/internal", "error/site/no-statements-available", "error/site/site-change-detected", "error/site/site-maintenance", "error/site/site-unreachable", "error/site/site-unresponsive"]
	  }
	};
	var statements = {
	  url: url$5,
	  swagger: swagger$5,
	  shapes: shapes$5
	};

	const url$6 = "/transactions";
	const swagger$6 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "Up to 90 days transaction history",
	  operationId: "transactions"
	};
	const shapes$6 = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: "transactions",
	  outputs: {
	    success: "transactions/success",
	    error: [// general & web
	    "error/common/dev/authorization", "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/site/bank-blocked", "error/site/input-validation-failed", "error/site/internal", "error/site/no-transactions-over-period", "error/site/site-change-detected", "error/site/site-maintenance", "error/site/site-unreachable", "error/site/site-unresponsive"]
	  }
	};
	var transactions = {
	  url: url$6,
	  swagger: swagger$6,
	  shapes: shapes$6
	};

	const url$7 = "/close";
	const swagger$7 = {
	  tags: ["Web"],
	  method: "post",
	  summary: "Close an open session",
	  operationId: "close"
	};
	const shapes$7 = {
	  // NOTE: don't use "client-gw" || "gw-client" prefixes - breaks $refs in swagger
	  inputs: "close",
	  outputs: {
	    success: ["close/success"],
	    error: [// general & web
	    "error/common/dev/authorization", "error/common/dev/invalid-inputs", "error/common/dev/sent-another-request-after-final-response", "error/common/exception", "error/common/session-in-use", "error/common/session-timed-out", "error/site/input-validation-failed", "error/site/internal", "error/site/site-change-detected", "error/site/site-unreachable", "error/site/site-unresponsive"]
	  }
	};
	var close = {
	  url: url$7,
	  swagger: swagger$7,
	  shapes: shapes$7
	};

	const url$8 = "/pdf";
	const swagger$8 = {
	  tags: ["Utilities"],
	  method: "post",
	  summary: "Parse a pdf statement and return transactions and account holder info",
	  description: "Note - does not require login",
	  operationId: "pdf"
	};
	const shapes$8 = {
	  inputs: "pdf",
	  outputs: {
	    // keep in sync with $/spike-db/src/lib/pdfReviewSystem.js: codeToParseResultState - see $/spike-pdf/test/spikeApiEnums.js
	    success: ["pdf/success/bank-statement-no-balance", "pdf/success/bank-statement-normal", "pdf/success/credit-card-breakdown-multi-user", "pdf/success/credit-card-breakdown", "pdf/success/credit-card-simple"],
	    error: [// general
	    "error/common/access/exceeded-max-concurrent-requests", "error/common/access/insufficient-credit", "error/common/dev/authorization", "error/common/dev/invalid-inputs", "error/common/exception", // pdf specific
	    "pdf/fail/auto-detect", "pdf/fail/file-not-found", "pdf/fail/pdf-read-exception", "pdf/fail/invalid-pdf-exception", "pdf/fail/password-incorrect", "pdf/fail/password-required", "pdf/fail/image-pdf", "pdf/fail/image-pdf-with-ocr", "pdf/fail/pdf-js-error", "pdf/fail/pdf-js-exception", "pdf/fail/unknown-pdf", "pdf/fail/multiple-matching-parsers", "pdf/fail/unknown-exception", "pdf/fail/failed-to-extract-statement-date", "pdf/fail/failed-to-extract-credit-breakdown", "pdf/fail/invalid-data-extracted"]
	  },
	  additional: {// enums,
	    // schemas
	  }
	};
	var pdf = {
	  url: url$8,
	  swagger: swagger$8,
	  shapes: shapes$8
	};

	const url$9 = "/csv";
	const swagger$9 = {
	  tags: ["Utilities"],
	  method: "post",
	  summary: "Parse a csv statement and return transactions and account holder info",
	  description: "Note - does not require login",
	  operationId: "csv"
	};
	const shapes$9 = {
	  inputs: "csv",
	  outputs: {
	    // keep in sync with $/spike-db/src/lib/pdfReviewSystem.js: codeToParseResultState - see $/spike-csv/test/spikeApiEnums.js
	    success: ["csv/success/bank-statement"],
	    error: [// general
	    "error/common/access/exceeded-max-concurrent-requests", "error/common/access/insufficient-credit", "error/common/dev/authorization", "error/common/dev/invalid-inputs", "error/common/exception", // csv specific
	    "csv/fail/unknown-csv", "csv/fail/multiple-matching-parsers", "csv/fail/unknown-exception", "csv/fail/invalid-data-extracted"]
	  },
	  additional: {// enums,
	    // schemas
	  }
	};
	var csv = {
	  url: url$9,
	  swagger: swagger$9,
	  shapes: shapes$9
	};

	function check(func) {
	  if (this[func]) {
	    return true;
	  } else {
	    const funcs = Object.keys(this).filter(x => x !== "check").join("\n");
	    console.error(`invalid function, valid options = \n${funcs}`);
	    return false;
	  }
	}

	var FN = {
	  accounts,
	  estatement,
	  login,
	  "login-interim-input": loginInterimInput,
	  "login-interim-wait": loginInterimWait,
	  statements,
	  transactions,
	  close,
	  pdf,
	  csv,
	  check
	};

	const _server = "https://api-v6.spikedata.co.za";
	const url$a = {
	  // web
	  accounts: _server + FN["accounts"].url,
	  estatement: _server + FN["estatement"].url,
	  login: _server + FN["login"].url,
	  "login-interim-input": _server + FN["login-interim-input"].url,
	  "login-interim-wait": _server + FN["login-interim-wait"].url,
	  statements: _server + FN["statements"].url,
	  transactions: _server + FN["transactions"].url,
	  close: _server + FN["close"].url,
	  // pdf
	  pdf: _server + FN["pdf"].url,
	  csv: _server + FN["csv"].url
	};
	function changeServer(server) {
	  // web
	  url$a.accounts = server + FN["accounts"].url;
	  url$a.estatement = server + FN["estatement"].url;
	  url$a.login = server + FN["login"].url;
	  url$a["login-interim-input"] = server + FN["login-interim-input"].url;
	  url$a["login-interim-wait"] = server + FN["login-interim-wait"].url;
	  url$a.statements = server + FN["statements"].url;
	  url$a.transactions = server + FN["transactions"].url;
	  url$a.close = server + FN["close"].url; // pdf

	  url$a.pdf = _server + FN["pdf"].url;
	  url$a.csv = _server + FN["csv"].url;
	}

	var config = /*#__PURE__*/Object.freeze({
		__proto__: null,
		url: url$a,
		changeServer: changeServer
	});

	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
	class ShapeNotFoundError extends Error {
	  constructor(code) {
	    super("Shape code does not exist: " + code); // Maintains proper stack trace for where our error was thrown (only available on V8)

	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, ShapeNotFoundError);
	    }

	    this.name = "ShapeNotFoundError";
	    this.code = code;
	  }

	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	var _listCacheClear = listCacheClear;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	var eq_1 = eq;

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq_1(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	var _assocIndexOf = assocIndexOf;

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	var _listCacheDelete = listCacheDelete;

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	var _listCacheGet = listCacheGet;

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return _assocIndexOf(this.__data__, key) > -1;
	}

	var _listCacheHas = listCacheHas;

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = _assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	var _listCacheSet = listCacheSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = _listCacheClear;
	ListCache.prototype['delete'] = _listCacheDelete;
	ListCache.prototype.get = _listCacheGet;
	ListCache.prototype.has = _listCacheHas;
	ListCache.prototype.set = _listCacheSet;

	var _ListCache = ListCache;

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new _ListCache;
	  this.size = 0;
	}

	var _stackClear = stackClear;

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	var _stackDelete = stackDelete;

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	var _stackGet = stackGet;

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	var _stackHas = stackHas;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var isObject_1 = isObject;

	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject_1(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = _baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}

	var isFunction_1 = isFunction;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = _root['__core-js_shared__'];

	var _coreJsData = coreJsData;

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	var _isMasked = isMasked;

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	var _toSource = toSource;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto$1 = Function.prototype,
	    objectProto$2 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$1 = funcProto$1.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject_1(value) || _isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(_toSource(value));
	}

	var _baseIsNative = baseIsNative;

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	var _getValue = getValue;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = _getValue(object, key);
	  return _baseIsNative(value) ? value : undefined;
	}

	var _getNative = getNative;

	/* Built-in method references that are verified to be native. */
	var Map = _getNative(_root, 'Map');

	var _Map = Map;

	/* Built-in method references that are verified to be native. */
	var nativeCreate = _getNative(Object, 'create');

	var _nativeCreate = nativeCreate;

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
	  this.size = 0;
	}

	var _hashClear = hashClear;

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _hashDelete = hashDelete;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto$3 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (_nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
	}

	var _hashGet = hashGet;

	/** Used for built-in method references. */
	var objectProto$4 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
	}

	var _hashHas = hashHas;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
	  return this;
	}

	var _hashSet = hashSet;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = _hashClear;
	Hash.prototype['delete'] = _hashDelete;
	Hash.prototype.get = _hashGet;
	Hash.prototype.has = _hashHas;
	Hash.prototype.set = _hashSet;

	var _Hash = Hash;

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new _Hash,
	    'map': new (_Map || _ListCache),
	    'string': new _Hash
	  };
	}

	var _mapCacheClear = mapCacheClear;

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	var _isKeyable = isKeyable;

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return _isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	var _getMapData = getMapData;

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = _getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	var _mapCacheDelete = mapCacheDelete;

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return _getMapData(this, key).get(key);
	}

	var _mapCacheGet = mapCacheGet;

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return _getMapData(this, key).has(key);
	}

	var _mapCacheHas = mapCacheHas;

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = _getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	var _mapCacheSet = mapCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = _mapCacheClear;
	MapCache.prototype['delete'] = _mapCacheDelete;
	MapCache.prototype.get = _mapCacheGet;
	MapCache.prototype.has = _mapCacheHas;
	MapCache.prototype.set = _mapCacheSet;

	var _MapCache = MapCache;

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof _ListCache) {
	    var pairs = data.__data__;
	    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new _MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	var _stackSet = stackSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new _ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = _stackClear;
	Stack.prototype['delete'] = _stackDelete;
	Stack.prototype.get = _stackGet;
	Stack.prototype.has = _stackHas;
	Stack.prototype.set = _stackSet;

	var _Stack = Stack;

	var defineProperty = (function() {
	  try {
	    var func = _getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());

	var _defineProperty = defineProperty;

	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && _defineProperty) {
	    _defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}

	var _baseAssignValue = baseAssignValue;

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq_1(object[key], value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignMergeValue = assignMergeValue;

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	var _createBaseFor = createBaseFor;

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = _createBaseFor();

	var _baseFor = baseFor;

	var _cloneBuffer = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
	});

	/** Built-in value references. */
	var Uint8Array = _root.Uint8Array;

	var _Uint8Array = Uint8Array;

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
	  return result;
	}

	var _cloneArrayBuffer = cloneArrayBuffer;

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	var _cloneTypedArray = cloneTypedArray;

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	var _copyArray = copyArray;

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject_1(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());

	var _baseCreate = baseCreate;

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	var _overArg = overArg;

	/** Built-in value references. */
	var getPrototype = _overArg(Object.getPrototypeOf, Object);

	var _getPrototype = getPrototype;

	/** Used for built-in method references. */
	var objectProto$5 = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

	  return value === proto;
	}

	var _isPrototype = isPrototype;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !_isPrototype(object))
	    ? _baseCreate(_getPrototype(object))
	    : {};
	}

	var _initCloneObject = initCloneObject;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
	}

	var _baseIsArguments = baseIsArguments;

	/** Used for built-in method references. */
	var objectProto$6 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
	  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};

	var isArguments_1 = isArguments;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	var isLength_1 = isLength;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength_1(value.length) && !isFunction_1(value);
	}

	var isArrayLike_1 = isArrayLike;

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike_1(value) && isArrayLike_1(value);
	}

	var isArrayLikeObject_1 = isArrayLikeObject;

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	var stubFalse_1 = stubFalse;

	var isBuffer_1 = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? _root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse_1;

	module.exports = isBuffer;
	});

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto$2 = Function.prototype,
	    objectProto$7 = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString$2 = funcProto$2.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString$2.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = _getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString$2.call(Ctor) == objectCtorString;
	}

	var isPlainObject_1 = isPlainObject;

	/** `Object#toString` result references. */
	var argsTag$1 = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag$1 = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag$1 = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike_1(value) &&
	    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
	}

	var _baseIsTypedArray = baseIsTypedArray;

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	var _baseUnary = baseUnary;

	var _nodeUtil = createCommonjsModule(function (module, exports) {
	/** Detect free variable `exports`. */
	var freeExports =  exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && _freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
	});

	/* Node.js helper references. */
	var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

	var isTypedArray_1 = isTypedArray;

	/**
	 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function safeGet(object, key) {
	  if (key === 'constructor' && typeof object[key] === 'function') {
	    return;
	  }

	  if (key == '__proto__') {
	    return;
	  }

	  return object[key];
	}

	var _safeGet = safeGet;

	/** Used for built-in method references. */
	var objectProto$8 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    _baseAssignValue(object, key, value);
	  }
	}

	var _assignValue = assignValue;

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      _baseAssignValue(object, key, newValue);
	    } else {
	      _assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}

	var _copyObject = copyObject;

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	var _baseTimes = baseTimes;

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER$1 = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  var type = typeof value;
	  length = length == null ? MAX_SAFE_INTEGER$1 : length;

	  return !!length &&
	    (type == 'number' ||
	      (type != 'symbol' && reIsUint.test(value))) &&
	        (value > -1 && value % 1 == 0 && value < length);
	}

	var _isIndex = isIndex;

	/** Used for built-in method references. */
	var objectProto$9 = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray_1(value),
	      isArg = !isArr && isArguments_1(value),
	      isBuff = !isArr && !isArg && isBuffer_1(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? _baseTimes(value.length, String) : [],
	      length = result.length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty$7.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           _isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _arrayLikeKeys = arrayLikeKeys;

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _nativeKeysIn = nativeKeysIn;

	/** Used for built-in method references. */
	var objectProto$a = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject_1(object)) {
	    return _nativeKeysIn(object);
	  }
	  var isProto = _isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeysIn = baseKeysIn;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn$1(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
	}

	var keysIn_1 = keysIn$1;

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return _copyObject(value, keysIn_1(value));
	}

	var toPlainObject_1 = toPlainObject;

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = _safeGet(object, key),
	      srcValue = _safeGet(source, key),
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    _assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    var isArr = isArray_1(srcValue),
	        isBuff = !isArr && isBuffer_1(srcValue),
	        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

	    newValue = srcValue;
	    if (isArr || isBuff || isTyped) {
	      if (isArray_1(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject_1(objValue)) {
	        newValue = _copyArray(objValue);
	      }
	      else if (isBuff) {
	        isCommon = false;
	        newValue = _cloneBuffer(srcValue, true);
	      }
	      else if (isTyped) {
	        isCommon = false;
	        newValue = _cloneTypedArray(srcValue, true);
	      }
	      else {
	        newValue = [];
	      }
	    }
	    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
	      newValue = objValue;
	      if (isArguments_1(objValue)) {
	        newValue = toPlainObject_1(objValue);
	      }
	      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
	        newValue = _initCloneObject(srcValue);
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    stack.set(srcValue, newValue);
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	    stack['delete'](srcValue);
	  }
	  _assignMergeValue(object, key, newValue);
	}

	var _baseMergeDeep = baseMergeDeep;

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  _baseFor(source, function(srcValue, key) {
	    stack || (stack = new _Stack);
	    if (isObject_1(srcValue)) {
	      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      _assignMergeValue(object, key, newValue);
	    }
	  }, keysIn_1);
	}

	var _baseMerge = baseMerge;

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	var identity_1 = identity;

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	var _apply = apply;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * A specialized version of `baseRest` which transforms the rest array.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @param {Function} transform The rest array transform.
	 * @returns {Function} Returns the new function.
	 */
	function overRest(func, start, transform) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = transform(array);
	    return _apply(func, this, otherArgs);
	  };
	}

	var _overRest = overRest;

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new constant function.
	 * @example
	 *
	 * var objects = _.times(2, _.constant({ 'a': 1 }));
	 *
	 * console.log(objects);
	 * // => [{ 'a': 1 }, { 'a': 1 }]
	 *
	 * console.log(objects[0] === objects[1]);
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	var constant_1 = constant;

	/**
	 * The base implementation of `setToString` without support for hot loop shorting.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
	  return _defineProperty(func, 'toString', {
	    'configurable': true,
	    'enumerable': false,
	    'value': constant_1(string),
	    'writable': true
	  });
	};

	var _baseSetToString = baseSetToString;

	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800,
	    HOT_SPAN = 16;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeNow = Date.now;

	/**
	 * Creates a function that'll short out and invoke `identity` instead
	 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	 * milliseconds.
	 *
	 * @private
	 * @param {Function} func The function to restrict.
	 * @returns {Function} Returns the new shortable function.
	 */
	function shortOut(func) {
	  var count = 0,
	      lastCalled = 0;

	  return function() {
	    var stamp = nativeNow(),
	        remaining = HOT_SPAN - (stamp - lastCalled);

	    lastCalled = stamp;
	    if (remaining > 0) {
	      if (++count >= HOT_COUNT) {
	        return arguments[0];
	      }
	    } else {
	      count = 0;
	    }
	    return func.apply(undefined, arguments);
	  };
	}

	var _shortOut = shortOut;

	/**
	 * Sets the `toString` method of `func` to return `string`.
	 *
	 * @private
	 * @param {Function} func The function to modify.
	 * @param {Function} string The `toString` result.
	 * @returns {Function} Returns `func`.
	 */
	var setToString = _shortOut(_baseSetToString);

	var _setToString = setToString;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  return _setToString(_overRest(func, start, identity_1), func + '');
	}

	var _baseRest = baseRest;

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject_1(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike_1(object) && _isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq_1(object[index], value);
	  }
	  return false;
	}

	var _isIterateeCall = isIterateeCall;

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return _baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	var _createAssigner = createAssigner;

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively. Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = {
	 *   'a': [{ 'b': 2 }, { 'd': 4 }]
	 * };
	 *
	 * var other = {
	 *   'a': [{ 'c': 3 }, { 'e': 5 }]
	 * };
	 *
	 * _.merge(object, other);
	 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	 */
	var merge = _createAssigner(function(object, source, srcIndex) {
	  _baseMerge(object, source, srcIndex);
	});

	var merge_1 = merge;

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	var _arrayEach = arrayEach;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = _overArg(Object.keys, Object);

	var _nativeKeys = nativeKeys;

	/** Used for built-in method references. */
	var objectProto$b = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$9 = objectProto$b.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!_isPrototype(object)) {
	    return _nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	var _baseKeys = baseKeys;

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
	}

	var keys_1 = keys;

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && _copyObject(source, keys_1(source), object);
	}

	var _baseAssign = baseAssign;

	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && _copyObject(source, keysIn_1(source), object);
	}

	var _baseAssignIn = baseAssignIn;

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];

	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}

	var _arrayFilter = arrayFilter;

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	var stubArray_1 = stubArray;

	/** Used for built-in method references. */
	var objectProto$c = Object.prototype;

	/** Built-in value references. */
	var propertyIsEnumerable$1 = objectProto$c.propertyIsEnumerable;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable$1.call(object, symbol);
	  });
	};

	var _getSymbols = getSymbols;

	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return _copyObject(source, _getSymbols(source), object);
	}

	var _copySymbols = copySymbols;

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	var _arrayPush = arrayPush;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
	  var result = [];
	  while (object) {
	    _arrayPush(result, _getSymbols(object));
	    object = _getPrototype(object);
	  }
	  return result;
	};

	var _getSymbolsIn = getSymbolsIn;

	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return _copyObject(source, _getSymbolsIn(source), object);
	}

	var _copySymbolsIn = copySymbolsIn;

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
	}

	var _baseGetAllKeys = baseGetAllKeys;

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return _baseGetAllKeys(object, keys_1, _getSymbols);
	}

	var _getAllKeys = getAllKeys;

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
	}

	var _getAllKeysIn = getAllKeysIn;

	/* Built-in method references that are verified to be native. */
	var DataView = _getNative(_root, 'DataView');

	var _DataView = DataView;

	/* Built-in method references that are verified to be native. */
	var Promise$1 = _getNative(_root, 'Promise');

	var _Promise = Promise$1;

	/* Built-in method references that are verified to be native. */
	var Set = _getNative(_root, 'Set');

	var _Set = Set;

	/* Built-in method references that are verified to be native. */
	var WeakMap = _getNative(_root, 'WeakMap');

	var _WeakMap = WeakMap;

	/** `Object#toString` result references. */
	var mapTag$1 = '[object Map]',
	    objectTag$2 = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag$1 = '[object Set]',
	    weakMapTag$1 = '[object WeakMap]';

	var dataViewTag$1 = '[object DataView]';

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = _toSource(_DataView),
	    mapCtorString = _toSource(_Map),
	    promiseCtorString = _toSource(_Promise),
	    setCtorString = _toSource(_Set),
	    weakMapCtorString = _toSource(_WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = _baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
	    (_Map && getTag(new _Map) != mapTag$1) ||
	    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
	    (_Set && getTag(new _Set) != setTag$1) ||
	    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
	  getTag = function(value) {
	    var result = _baseGetTag(value),
	        Ctor = result == objectTag$2 ? value.constructor : undefined,
	        ctorString = Ctor ? _toSource(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag$1;
	        case mapCtorString: return mapTag$1;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag$1;
	        case weakMapCtorString: return weakMapTag$1;
	      }
	    }
	    return result;
	  };
	}

	var _getTag = getTag;

	/** Used for built-in method references. */
	var objectProto$d = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty$a = objectProto$d.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = new array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty$a.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	var _initCloneArray = initCloneArray;

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	var _cloneDataView = cloneDataView;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	var _cloneRegExp = cloneRegExp;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	var _cloneSymbol = cloneSymbol;

	/** `Object#toString` result references. */
	var boolTag$1 = '[object Boolean]',
	    dateTag$1 = '[object Date]',
	    mapTag$2 = '[object Map]',
	    numberTag$1 = '[object Number]',
	    regexpTag$1 = '[object RegExp]',
	    setTag$2 = '[object Set]',
	    stringTag$1 = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag$1 = '[object ArrayBuffer]',
	    dataViewTag$2 = '[object DataView]',
	    float32Tag$1 = '[object Float32Array]',
	    float64Tag$1 = '[object Float64Array]',
	    int8Tag$1 = '[object Int8Array]',
	    int16Tag$1 = '[object Int16Array]',
	    int32Tag$1 = '[object Int32Array]',
	    uint8Tag$1 = '[object Uint8Array]',
	    uint8ClampedTag$1 = '[object Uint8ClampedArray]',
	    uint16Tag$1 = '[object Uint16Array]',
	    uint32Tag$1 = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag$1:
	      return _cloneArrayBuffer(object);

	    case boolTag$1:
	    case dateTag$1:
	      return new Ctor(+object);

	    case dataViewTag$2:
	      return _cloneDataView(object, isDeep);

	    case float32Tag$1: case float64Tag$1:
	    case int8Tag$1: case int16Tag$1: case int32Tag$1:
	    case uint8Tag$1: case uint8ClampedTag$1: case uint16Tag$1: case uint32Tag$1:
	      return _cloneTypedArray(object, isDeep);

	    case mapTag$2:
	      return new Ctor;

	    case numberTag$1:
	    case stringTag$1:
	      return new Ctor(object);

	    case regexpTag$1:
	      return _cloneRegExp(object);

	    case setTag$2:
	      return new Ctor;

	    case symbolTag:
	      return _cloneSymbol(object);
	  }
	}

	var _initCloneByTag = initCloneByTag;

	/** `Object#toString` result references. */
	var mapTag$3 = '[object Map]';

	/**
	 * The base implementation of `_.isMap` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 */
	function baseIsMap(value) {
	  return isObjectLike_1(value) && _getTag(value) == mapTag$3;
	}

	var _baseIsMap = baseIsMap;

	/* Node.js helper references. */
	var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

	/**
	 * Checks if `value` is classified as a `Map` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	 * @example
	 *
	 * _.isMap(new Map);
	 * // => true
	 *
	 * _.isMap(new WeakMap);
	 * // => false
	 */
	var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

	var isMap_1 = isMap;

	/** `Object#toString` result references. */
	var setTag$3 = '[object Set]';

	/**
	 * The base implementation of `_.isSet` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 */
	function baseIsSet(value) {
	  return isObjectLike_1(value) && _getTag(value) == setTag$3;
	}

	var _baseIsSet = baseIsSet;

	/* Node.js helper references. */
	var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

	/**
	 * Checks if `value` is classified as a `Set` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	 * @example
	 *
	 * _.isSet(new Set);
	 * // => true
	 *
	 * _.isSet(new WeakSet);
	 * // => false
	 */
	var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

	var isSet_1 = isSet;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;

	/** `Object#toString` result references. */
	var argsTag$2 = '[object Arguments]',
	    arrayTag$1 = '[object Array]',
	    boolTag$2 = '[object Boolean]',
	    dateTag$2 = '[object Date]',
	    errorTag$1 = '[object Error]',
	    funcTag$2 = '[object Function]',
	    genTag$1 = '[object GeneratorFunction]',
	    mapTag$4 = '[object Map]',
	    numberTag$2 = '[object Number]',
	    objectTag$3 = '[object Object]',
	    regexpTag$2 = '[object RegExp]',
	    setTag$4 = '[object Set]',
	    stringTag$2 = '[object String]',
	    symbolTag$1 = '[object Symbol]',
	    weakMapTag$2 = '[object WeakMap]';

	var arrayBufferTag$2 = '[object ArrayBuffer]',
	    dataViewTag$3 = '[object DataView]',
	    float32Tag$2 = '[object Float32Array]',
	    float64Tag$2 = '[object Float64Array]',
	    int8Tag$2 = '[object Int8Array]',
	    int16Tag$2 = '[object Int16Array]',
	    int32Tag$2 = '[object Int32Array]',
	    uint8Tag$2 = '[object Uint8Array]',
	    uint8ClampedTag$2 = '[object Uint8ClampedArray]',
	    uint16Tag$2 = '[object Uint16Array]',
	    uint32Tag$2 = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] =
	cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] =
	cloneableTags[boolTag$2] = cloneableTags[dateTag$2] =
	cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] =
	cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] =
	cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] =
	cloneableTags[numberTag$2] = cloneableTags[objectTag$3] =
	cloneableTags[regexpTag$2] = cloneableTags[setTag$4] =
	cloneableTags[stringTag$2] = cloneableTags[symbolTag$1] =
	cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] =
	cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
	cloneableTags[errorTag$1] = cloneableTags[funcTag$2] =
	cloneableTags[weakMapTag$2] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;

	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject_1(value)) {
	    return value;
	  }
	  var isArr = isArray_1(value);
	  if (isArr) {
	    result = _initCloneArray(value);
	    if (!isDeep) {
	      return _copyArray(value, result);
	    }
	  } else {
	    var tag = _getTag(value),
	        isFunc = tag == funcTag$2 || tag == genTag$1;

	    if (isBuffer_1(value)) {
	      return _cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag$3 || tag == argsTag$2 || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? _copySymbolsIn(value, _baseAssignIn(result, value))
	          : _copySymbols(value, _baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = _initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new _Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (isSet_1(value)) {
	    value.forEach(function(subValue) {
	      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
	    });
	  } else if (isMap_1(value)) {
	    value.forEach(function(subValue, key) {
	      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
	    });
	  }

	  var keysFunc = isFull
	    ? (isFlat ? _getAllKeysIn : _getAllKeys)
	    : (isFlat ? keysIn : keys_1);

	  var props = isArr ? undefined : keysFunc(value);
	  _arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}

	var _baseClone = baseClone;

	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG$1 = 1,
	    CLONE_SYMBOLS_FLAG$1 = 4;

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
	}

	var cloneDeep_1 = cloneDeep;

	// Can't use lodash-es - build/main won't work = used for tests
	function mergeObjectsMutate(base, overrides) {
	  // NOTE: mutates base
	  // NOTE: works for base=array, i.e. will mutate base = overrides, and return overrides
	  return merge_1(base, overrides);
	}
	function mergeObjectsClone(base, overrides) {
	  // NOTE: don't mutate base
	  if (Array.isArray(base)) {
	    if (!Array.isArray(overrides)) {
	      throw new Error("can't mergeObjectsClone array with non-array");
	    }

	    return merge_1([], base, overrides);
	  }

	  return merge_1({}, base, overrides);
	}
	function clone(a) {
	  return cloneDeep_1(a);
	}

	var object = /*#__PURE__*/Object.freeze({
		__proto__: null,
		mergeObjectsMutate: mergeObjectsMutate,
		mergeObjectsClone: mergeObjectsClone,
		clone: clone
	});

	/**
	 * NOTE:
	 * Composer consists of { sessionId, final? }
	 * see ./compose.md
	 */


	var code = "client-gw/composer/basic";
	var not_a_shape = true;
	var composedSchema = {
	  type: "object",
	  properties: {
	    sessionId: {
	      required: true,
	      type: "string",
	      format: "uuidV4"
	    },
	    final: {
	      required: true,
	      type: "boolean"
	    }
	  }
	};

	var compose = function (sessionIdRequired, finalRequired, additionalSchema) {
	  let composedSchema;

	  if (additionalSchema) {
	    composedSchema = object.mergeObjectsClone(this.composedSchema, {
	      properties: additionalSchema
	    });
	  } else {
	    composedSchema = object.clone(this.composedSchema);
	  }

	  composedSchema.properties.sessionId.required = sessionIdRequired;
	  composedSchema.properties.final.required = finalRequired;
	  return composedSchema;
	}; // create data that will be sent over bchan to lambda
	//  - translate from "client-gw/*" (bchan shapes) to "gw-lambda/bchan/composer"


	var decompose = function (shape, instance) {
	  // EXAMPLE client-gw bchan instances and marshalled results:
	  //  - accounts = { sessionId: "xx", final: false } => no data
	  //    => { final: false, code: "accounts", data: undefined }
	  //  - transactions = { sessionId: "xx", final: true, numDays: 90, accountNumber: "1234567890" }
	  //    => { final: true, code: "transactions", data: { numDays: 90, accountNumber: "1234567890" } }
	  // ALGORITHM:
	  //  - clone instance and remove composer fields { sessionId, final }
	  //  - all remaining fields are .data
	  let code = shape.code; // instance.code only exists on ./codeData composed shapes - not basic composed shapes

	  let clone = Object.assign({}, instance); // shallow clone is fine

	  delete clone.sessionId;
	  delete clone.final;
	  return {
	    code,
	    data: clone
	  };
	};

	var basic = {
		code: code,
		not_a_shape: not_a_shape,
		composedSchema: composedSchema,
		compose: compose,
		decompose: decompose
	};

	var clientGwComposerBasic = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': basic,
		__moduleExports: basic,
		code: code,
		not_a_shape: not_a_shape,
		composedSchema: composedSchema,
		compose: compose,
		decompose: decompose
	});

	var codeData = createCommonjsModule(function (module, exports) {
	/**
	 * NOTE:
	 * This composer includes basic fields + extra fields: { code, data }
	 * see ./compose.md
	 */


	exports.code = "client-gw/composer/codeData";
	exports.not_a_shape = true; //#region validate

	exports.composedSchema = {
	  type: "object",
	  properties: {
	    sessionId: {
	      required: true,
	      type: "string",
	      format: "uuidV4"
	    },
	    final: {
	      required: true,
	      type: "boolean"
	    },
	    code: {
	      required: true,
	      type: "string"
	    },
	    data: {
	      required: true
	    }
	  }
	};

	exports.compose = function (sessionIdRequired, finalRequired, codeRequired, dataSchema, additionalSchema) {
	  let composedSchema = basic.compose.call(exports, sessionIdRequired, finalRequired, additionalSchema);
	  composedSchema.properties.code.required = codeRequired;

	  if (dataSchema) {
	    composedSchema.properties.data = dataSchema;
	  } else {
	    delete composedSchema.properties.data;
	  }

	  return composedSchema;
	}; // returns { code, data } that will be sent over bchan to lambda


	exports.decompose = function (shape, instance) {
	  // EXAMPLE:
	  //  - "login-interim-input/abs-pass":
	  //    client-gw: { sessionId, final?, code, data }
	  //    gw-lambda: { final, code, data }
	  // ALGORITHM:
	  //  - simply take .code & .data from instance
	  return {
	    code: instance.code,
	    data: instance.data
	  };
	};
	});
	var codeData_1 = codeData.code;
	var codeData_2 = codeData.not_a_shape;
	var codeData_3 = codeData.composedSchema;
	var codeData_4 = codeData.compose;
	var codeData_5 = codeData.decompose;

	var clientGwComposerCodeData = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': codeData,
		__moduleExports: codeData,
		code: codeData_1,
		not_a_shape: codeData_2,
		composedSchema: codeData_3,
		compose: codeData_4,
		decompose: codeData_5
	});

	function isString(x) {
	  return typeof x === "string" || x instanceof String;
	}

	const nameKey = "__name";
	const Enum = {
	  equal(x, y) {
	    // convert x,y to numbers
	    try {
	      if (!Number.isInteger(x)) {
	        x = this.fromString(x);
	      }

	      if (!Number.isInteger(y)) {
	        y = this.fromString(y);
	      }
	    } catch (e) {
	      return false;
	    }

	    return x === y;
	  },

	  toString(x) {
	    if (x === undefined) {
	      return x;
	    }

	    if (isString(x)) {
	      return x;
	    }

	    const all = Object.entries(this);

	    for (const a of all) {
	      if (a[1] === x) {
	        return a[0];
	      }
	    }

	    throw new Error(this[nameKey] + ".toString invalid value: " + x);
	  },

	  fromString(x) {
	    if (x === undefined) {
	      return x;
	    }

	    if (Number.isInteger(x)) {
	      return x;
	    }

	    const all = Object.entries(this);

	    for (const a of all) {
	      if (a[0] === x) {
	        return a[1];
	      }
	    }

	    throw new Error(this[nameKey] + ".fromString invalid key: " + x);
	  },

	  keys() {
	    return Object.entries(this).filter(x => x[0] !== nameKey) //.filter(x => Number.isInteger(x[1]))
	    .map(x => x[0]);
	  },

	  values() {
	    // return Object.values(this).filter(Number.isInteger);
	    return Object.entries(this).filter(x => x[0] !== nameKey) //.filter(x => Number.isInteger(x[1]))
	    .map(x => x[1]);
	  },

	  validKey(k) {
	    return this.hasOwnProperty(k);
	  },

	  validValue(v) {
	    return this.values().indexOf(v) !== -1;
	  }

	};
	function createEnum(name, keyValues) {
	  if (Object.keys(keyValues).indexOf(nameKey) !== -1) {
	    throw new Error(`createEnum(${name}) contains reserved key: ${nameKey}`);
	  }

	  const e = Object.create(Enum);
	  e[nameKey] = name;
	  return Object.assign(e, keyValues);
	}

	const TYPES = createEnum("TYPES", {
	  NOTSET: 0,
	  INPUTS: 1,
	  // FN response
	  SUCCESS: 2,
	  INTERIM: 3,
	  // various errors - from FN or from plumbing
	  ERROR: 4
	});
	const BLAME = createEnum("BLAME", {
	  NOTSET: 0,
	  SPIKE: 1,
	  SITE: 2,
	  USER: 3,
	  CLIENT: 4
	});

	const Sites = createEnum("Sites", {
	  "ABS.0": 1,
	  "CAP.0": 2,
	  "FNB.0": 3,
	  "NED.0": 4,
	  "RMB.0": 5,
	  "STD.2018-01": 6
	}); // NOTE: could probably use Object.values() like below inside ./function/index.ts?
	// const exclude = [FN.login.url, FN["login-interim-input"].url, FN["login-interim-wait"].url];
	// const allObjectives = Object.values(FN).filter((x) => exclude.indexOf(x.url) === -1);
	// const noStatements = allObjectives.filter((x) => x.url !== FN.statements.url);

	const allObjectives = [FN.accounts, FN.estatement, FN.statements, FN.transactions, FN.close];
	const noStatements = [FN.accounts, FN.estatement, // FN.statements,
	FN.transactions, FN.close];
	const SiteToFunction = {
	  "ABS.0": allObjectives,
	  "CAP.0": noStatements,
	  "FNB.0": allObjectives,
	  "NED.0": noStatements,
	  "RMB.0": allObjectives,
	  "STD.2018-01": noStatements
	};
	const isSupported = function (site, fn) {
	  if (Sites.validKey(site)) {
	    return SiteToFunction[site].indexOf(fn) !== -1;
	  } else {
	    throw new Error("Unknown site: " + site);
	  }
	};
	const Bank = {
	  ABS: {
	    code: "ABS",
	    name: "ABSA"
	  },
	  BID: {
	    code: "BID",
	    name: "Bidvest"
	  },
	  CAP: {
	    code: "CAP",
	    name: "Capitec"
	  },
	  DEA: {
	    code: "DEA",
	    name: "Document Exchange Association"
	  },
	  DIS: {
	    code: "DIS",
	    name: "Discovery"
	  },
	  FNB: {
	    code: "FNB",
	    name: "FNB"
	  },
	  INV: {
	    code: "INV",
	    name: "Investec"
	  },
	  NED: {
	    code: "NED",
	    name: "Nedbank"
	  },
	  RMB: {
	    code: "RMB",
	    name: "RMB"
	  },
	  SAS: {
	    code: "SAS",
	    name: "Safin"
	  },
	  STD: {
	    code: "STD",
	    name: "Standard Bank"
	  },
	  TYM: {
	    code: "TYM",
	    name: "TYME"
	  }
	};
	const SiteToBankName = {
	  "ABS.0": Bank.ABS.name,
	  "CAP.0": Bank.CAP.name,
	  "FNB.0": Bank.FNB.name,
	  "NED.0": Bank.NED.name,
	  "RMB.0": Bank.RMB.name,
	  "STD.2018-01": Bank.STD.name
	};
	const SiteMeta = {
	  "ABS.0": {
	    created: "2018-01-01"
	  },
	  "CAP.0": {
	    created: "2018-01-01"
	  },
	  "FNB.0": {
	    created: "2018-01-01"
	  },
	  "NED.0": {
	    created: "2018-01-01"
	  },
	  "RMB.0": {
	    created: "2018-01-01"
	  },
	  "STD.2018-01": {
	    created: "2018-01-01"
	  }
	};
	const bankToSite = {
	  ABSA: "ABS.0",
	  CAPITEC: "CAP.0",
	  FNB: "FNB.0",
	  NEDBANK: "NED.0",
	  RMB: "RMB.0",
	  STANDARDBANK: "STD.2018-01"
	}; //#endregion
	//#region pdf

	const PdfType = createEnum("PdfType", {
	  BANK: 0,
	  INSURANCE: 1
	}); // Documents expected values - not an enum
	// see $/spike-pdf/tools/docs/add-new-parser.md

	const PdfParser = {
	  bankStatementsNormal: ["ABSA_ACTIVESAVE_ALL_0", "ABSA_CHEQUEACCOUNT_EMAIL_0", "ABSA_CHEQUEACCOUNT_WEB_0", "ABSA_ESTATEMENT_WEB_0", "BIDVEST_BUSINESSDEBITCARD_EMAIL_0", "BIDVEST_BUSINESS_EMAIL_0", "BIDVEST_BUSINESS_EMAIL_201902", "BIDVEST_BUSINESS_GPO_EMAIL", "BIDVEST_BUSINESS_WEB_0", "CAPITEC_ESTATEMENT_WEB_0", "DEA_ALL_0", "FNB_FLEXI_ALL_0", "FNB_RETAIL_ALL_0", "FNB_TRANSACTIONHISTORYDOWNLOAD_WEB_0", "INVESTEC_BANKACCOUNT", "INVESTEC_CALLACCOUNT", "NEDBANK_ALL_EMAIL_0", "NEDBANK_ALL_EMAIL_201711", "NEDBANK_BUSINESS", "NEDBANK_BUSINESS_201911", "NEDBANK_ESTATEMENT_WEB_0", "RMB_RETAIL_ALL_0", "SASFIN", "STANDARDBANK_ALL_EMAIL_0", "STANDARDBANK_COPYSTATEMENT", "STANDARDBANK_CURRENTACCOUNT", "STANDARDBANK_CUSTOMSTATEMENT_WEB_0", "STANDARDBANK_ESTATEMENT_WEB_0", "STANDARDBANK_STATEMENT2", "STANDARDBANK_STATEMENT3", "STANDARDBANK_STATEMENT4", "TYME"],
	  bankStatementsNoBalance: ["NEDBANK_ACCBAL_WEB"],
	  creditCardBreakdown: ["ABSA_CREDITCARD_EMAIL_0", "NEDBANK_CREDITCARD"],
	  creditCardBreakdownMultiUser: ["STANDARDBANK_CREDITCARD"],
	  creditCardSimple: ["DISCOVERY_0", "DISCOVERY_CREDITCARD_ALL_0", "FNB_CREDITCARD_ALL_0", "RMB_CREDITCARD_ALL_0"],
	  insurance: ["LIBERTY_LIFE_COVER_ANNIVERSARY_LETTER", "LIBERTY_LIFE_COVER_POLICY_DOC", "OUTSURANCE_2017", "OUTSURANCE_ALL", "SANLAM", "SANTAM_ALL", "SANTAM_OTHER"],
	  other: ["SARS_PAYROLLTAXES_WEB_0"]
	};
	const PdfParserAll = Object.keys(PdfParser).reduce((arr, k) => {
	  arr = arr.concat(PdfParser[k]);
	  return arr;
	}, []); // console.log(PdfParserAll);
	//#endregion
	//#region csv
	// Documents expected values - not an enum
	// see $/spike-csv/tools/doc.js

	const CsvParser = {
	  bankStatementsNormal: ["ABS1", "CAP1"]
	};
	const CsvParserAll = Object.keys(CsvParser).reduce((arr, k) => {
	  arr = arr.concat(CsvParser[k]);
	  return arr;
	}, []); // console.log(CsvParserAll);
	//#endregion
	//#region internal

	const Channel = createEnum("Channel", {
	  Lchan: 1,
	  Bchan: 2
	});
	const LogLevel = createEnum("LogLevel", {
	  None: 0,
	  Full: 1,
	  Sanitized: 1,
	  CodeType: 2
	}); //#endregion

	var enums = /*#__PURE__*/Object.freeze({
		__proto__: null,
		TYPES: TYPES,
		BLAME: BLAME,
		FN: FN,
		Sites: Sites,
		SiteToFunction: SiteToFunction,
		isSupported: isSupported,
		Bank: Bank,
		SiteToBankName: SiteToBankName,
		SiteMeta: SiteMeta,
		bankToSite: bankToSite,
		PdfType: PdfType,
		PdfParser: PdfParser,
		PdfParserAll: PdfParserAll,
		CsvParser: CsvParser,
		CsvParserAll: CsvParserAll,
		Channel: Channel,
		LogLevel: LogLevel
	});

	var uri_all = createCommonjsModule(function (module, exports) {
	/** @license URI.js v4.2.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
	(function (global, factory) {
		 factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	function merge() {
	    for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
	        sets[_key] = arguments[_key];
	    }

	    if (sets.length > 1) {
	        sets[0] = sets[0].slice(0, -1);
	        var xl = sets.length - 1;
	        for (var x = 1; x < xl; ++x) {
	            sets[x] = sets[x].slice(1, -1);
	        }
	        sets[xl] = sets[xl].slice(1);
	        return sets.join('');
	    } else {
	        return sets[0];
	    }
	}
	function subexp(str) {
	    return "(?:" + str + ")";
	}
	function typeOf(o) {
	    return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
	}
	function toUpperCase(str) {
	    return str.toUpperCase();
	}
	function toArray(obj) {
	    return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
	}
	function assign(target, source) {
	    var obj = target;
	    if (source) {
	        for (var key in source) {
	            obj[key] = source[key];
	        }
	    }
	    return obj;
	}

	function buildExps(isIRI) {
	    var ALPHA$$ = "[A-Za-z]",
	        DIGIT$$ = "[0-9]",
	        HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
	        PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
	        //expanded
	    GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
	        SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
	        RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
	        UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
	        //subset, excludes bidi control characters
	    IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
	        //subset
	    UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$),
	        SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"),
	        USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"),
	        DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
	        //relaxed parsing rules
	    IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
	        H16$ = subexp(HEXDIG$$ + "{1,4}"),
	        LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
	        IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
	        //                           6( h16 ":" ) ls32
	    IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
	        //                      "::" 5( h16 ":" ) ls32
	    IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
	        //[               h16 ] "::" 4( h16 ":" ) ls32
	    IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
	        //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
	    IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
	        //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
	    IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
	        //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
	    IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
	        //[ *4( h16 ":" ) h16 ] "::"              ls32
	    IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
	        //[ *5( h16 ":" ) h16 ] "::"              h16
	    IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
	        //[ *6( h16 ":" ) h16 ] "::"
	    IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
	        ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"),
	        //RFC 6874, with relaxed parsing rules
	    IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"),
	        //RFC 6874
	    REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"),
	        PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")),
	        SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"),
	        QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
	    return {
	        NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
	        NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
	        NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
	        ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
	        UNRESERVED: new RegExp(UNRESERVED$$, "g"),
	        OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
	        PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
	        IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
	        IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
	    };
	}
	var URI_PROTOCOL = buildExps(false);

	var IRI_PROTOCOL = buildExps(true);

	var slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _e = undefined;

	    try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);

	        if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;
	      _e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }

	    return _arr;
	  }

	  return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();













	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

	/** Highest positive signed 32-bit float value */

	var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	var base = 36;
	var tMin = 1;
	var tMax = 26;
	var skew = 38;
	var damp = 700;
	var initialBias = 72;
	var initialN = 128; // 0x80
	var delimiter = '-'; // '\x2D'

	/** Regular expressions */
	var regexPunycode = /^xn--/;
	var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
	var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

	/** Error messages */
	var errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	};

	/** Convenience shortcuts */
	var baseMinusTMin = base - tMin;
	var floor = Math.floor;
	var stringFromCharCode = String.fromCharCode;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error$1(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var result = [];
		var length = array.length;
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		while (counter < length) {
			var value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// It's a high surrogate, and there is a next character.
				var extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// Low surrogate.
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// It's an unmatched surrogate; only append this code unit, in case the
					// next code unit is the high surrogate of a surrogate pair.
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	var ucs2encode = function ucs2encode(array) {
		return String.fromCodePoint.apply(String, toConsumableArray(array));
	};

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	var basicToDigit = function basicToDigit(codePoint) {
		if (codePoint - 0x30 < 0x0A) {
			return codePoint - 0x16;
		}
		if (codePoint - 0x41 < 0x1A) {
			return codePoint - 0x41;
		}
		if (codePoint - 0x61 < 0x1A) {
			return codePoint - 0x61;
		}
		return base;
	};

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	var digitToBasic = function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	};

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	var adapt = function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	};

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	var decode = function decode(input) {
		// Don't use UCS-2.
		var output = [];
		var inputLength = input.length;
		var i = 0;
		var n = initialN;
		var bias = initialBias;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		var basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (var j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error$1('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			var oldi = i;
			for (var w = 1, k = base;; /* no condition */k += base) {

				if (index >= inputLength) {
					error$1('invalid-input');
				}

				var digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error$1('overflow');
				}

				i += digit * w;
				var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

				if (digit < t) {
					break;
				}

				var baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error$1('overflow');
				}

				w *= baseMinusT;
			}

			var out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error$1('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output.
			output.splice(i++, 0, n);
		}

		return String.fromCodePoint.apply(String, output);
	};

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	var encode = function encode(input) {
		var output = [];

		// Convert the input in UCS-2 to an array of Unicode code points.
		input = ucs2decode(input);

		// Cache the length.
		var inputLength = input.length;

		// Initialize the state.
		var n = initialN;
		var delta = 0;
		var bias = initialBias;

		// Handle the basic code points.
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _currentValue2 = _step.value;

				if (_currentValue2 < 0x80) {
					output.push(stringFromCharCode(_currentValue2));
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var basicLength = output.length;
		var handledCPCount = basicLength;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string with a delimiter unless it's empty.
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			var m = maxInt;
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var currentValue = _step2.value;

					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow.
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			var handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error$1('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _currentValue = _step3.value;

					if (_currentValue < n && ++delta > maxInt) {
						error$1('overflow');
					}
					if (_currentValue == n) {
						// Represent delta as a generalized variable-length integer.
						var q = delta;
						for (var k = base;; /* no condition */k += base) {
							var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) {
								break;
							}
							var qMinusT = q - t;
							var baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			++delta;
			++n;
		}
		return output.join('');
	};

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	var toUnicode = function toUnicode(input) {
		return mapDomain(input, function (string) {
			return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
		});
	};

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	var toASCII = function toASCII(input) {
		return mapDomain(input, function (string) {
			return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
		});
	};

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	var punycode = {
		/**
	  * A string representing the current Punycode.js version number.
	  * @memberOf punycode
	  * @type String
	  */
		'version': '2.1.0',
		/**
	  * An object of methods to convert from JavaScript's internal character
	  * representation (UCS-2) to Unicode code points, and back.
	  * @see <https://mathiasbynens.be/notes/javascript-encoding>
	  * @memberOf punycode
	  * @type Object
	  */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/**
	 * URI.js
	 *
	 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
	 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
	 * @see http://github.com/garycourt/uri-js
	 */
	/**
	 * Copyright 2011 Gary Court. All rights reserved.
	 *
	 * Redistribution and use in source and binary forms, with or without modification, are
	 * permitted provided that the following conditions are met:
	 *
	 *    1. Redistributions of source code must retain the above copyright notice, this list of
	 *       conditions and the following disclaimer.
	 *
	 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
	 *       of conditions and the following disclaimer in the documentation and/or other materials
	 *       provided with the distribution.
	 *
	 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
	 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
	 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
	 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
	 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
	 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
	 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 * The views and conclusions contained in the software and documentation are those of the
	 * authors and should not be interpreted as representing official policies, either expressed
	 * or implied, of Gary Court.
	 */
	var SCHEMES = {};
	function pctEncChar(chr) {
	    var c = chr.charCodeAt(0);
	    var e = void 0;
	    if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
	    return e;
	}
	function pctDecChars(str) {
	    var newStr = "";
	    var i = 0;
	    var il = str.length;
	    while (i < il) {
	        var c = parseInt(str.substr(i + 1, 2), 16);
	        if (c < 128) {
	            newStr += String.fromCharCode(c);
	            i += 3;
	        } else if (c >= 194 && c < 224) {
	            if (il - i >= 6) {
	                var c2 = parseInt(str.substr(i + 4, 2), 16);
	                newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
	            } else {
	                newStr += str.substr(i, 6);
	            }
	            i += 6;
	        } else if (c >= 224) {
	            if (il - i >= 9) {
	                var _c = parseInt(str.substr(i + 4, 2), 16);
	                var c3 = parseInt(str.substr(i + 7, 2), 16);
	                newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
	            } else {
	                newStr += str.substr(i, 9);
	            }
	            i += 9;
	        } else {
	            newStr += str.substr(i, 3);
	            i += 3;
	        }
	    }
	    return newStr;
	}
	function _normalizeComponentEncoding(components, protocol) {
	    function decodeUnreserved(str) {
	        var decStr = pctDecChars(str);
	        return !decStr.match(protocol.UNRESERVED) ? str : decStr;
	    }
	    if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
	    if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
	    return components;
	}

	function _stripLeadingZeros(str) {
	    return str.replace(/^0*(.*)/, "$1") || "0";
	}
	function _normalizeIPv4(host, protocol) {
	    var matches = host.match(protocol.IPV4ADDRESS) || [];

	    var _matches = slicedToArray(matches, 2),
	        address = _matches[1];

	    if (address) {
	        return address.split(".").map(_stripLeadingZeros).join(".");
	    } else {
	        return host;
	    }
	}
	function _normalizeIPv6(host, protocol) {
	    var matches = host.match(protocol.IPV6ADDRESS) || [];

	    var _matches2 = slicedToArray(matches, 3),
	        address = _matches2[1],
	        zone = _matches2[2];

	    if (address) {
	        var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
	            _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
	            last = _address$toLowerCase$2[0],
	            first = _address$toLowerCase$2[1];

	        var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
	        var lastFields = last.split(":").map(_stripLeadingZeros);
	        var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
	        var fieldCount = isLastFieldIPv4Address ? 7 : 8;
	        var lastFieldsStart = lastFields.length - fieldCount;
	        var fields = Array(fieldCount);
	        for (var x = 0; x < fieldCount; ++x) {
	            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
	        }
	        if (isLastFieldIPv4Address) {
	            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
	        }
	        var allZeroFields = fields.reduce(function (acc, field, index) {
	            if (!field || field === "0") {
	                var lastLongest = acc[acc.length - 1];
	                if (lastLongest && lastLongest.index + lastLongest.length === index) {
	                    lastLongest.length++;
	                } else {
	                    acc.push({ index: index, length: 1 });
	                }
	            }
	            return acc;
	        }, []);
	        var longestZeroFields = allZeroFields.sort(function (a, b) {
	            return b.length - a.length;
	        })[0];
	        var newHost = void 0;
	        if (longestZeroFields && longestZeroFields.length > 1) {
	            var newFirst = fields.slice(0, longestZeroFields.index);
	            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
	            newHost = newFirst.join(":") + "::" + newLast.join(":");
	        } else {
	            newHost = fields.join(":");
	        }
	        if (zone) {
	            newHost += "%" + zone;
	        }
	        return newHost;
	    } else {
	        return host;
	    }
	}
	var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
	var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
	function parse(uriString) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var components = {};
	    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
	    if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
	    var matches = uriString.match(URI_PARSE);
	    if (matches) {
	        if (NO_MATCH_IS_UNDEFINED) {
	            //store each component
	            components.scheme = matches[1];
	            components.userinfo = matches[3];
	            components.host = matches[4];
	            components.port = parseInt(matches[5], 10);
	            components.path = matches[6] || "";
	            components.query = matches[7];
	            components.fragment = matches[8];
	            //fix port number
	            if (isNaN(components.port)) {
	                components.port = matches[5];
	            }
	        } else {
	            //IE FIX for improper RegExp matching
	            //store each component
	            components.scheme = matches[1] || undefined;
	            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
	            components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
	            components.port = parseInt(matches[5], 10);
	            components.path = matches[6] || "";
	            components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
	            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
	            //fix port number
	            if (isNaN(components.port)) {
	                components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
	            }
	        }
	        if (components.host) {
	            //normalize IP hosts
	            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
	        }
	        //determine reference type
	        if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
	            components.reference = "same-document";
	        } else if (components.scheme === undefined) {
	            components.reference = "relative";
	        } else if (components.fragment === undefined) {
	            components.reference = "absolute";
	        } else {
	            components.reference = "uri";
	        }
	        //check for reference errors
	        if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
	            components.error = components.error || "URI is not a " + options.reference + " reference.";
	        }
	        //find scheme handler
	        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
	        //check if scheme can't handle IRIs
	        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
	            //if host component is a domain name
	            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
	                //convert Unicode IDN -> ASCII IDN
	                try {
	                    components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
	                } catch (e) {
	                    components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
	                }
	            }
	            //convert IRI -> URI
	            _normalizeComponentEncoding(components, URI_PROTOCOL);
	        } else {
	            //normalize encodings
	            _normalizeComponentEncoding(components, protocol);
	        }
	        //perform scheme specific parsing
	        if (schemeHandler && schemeHandler.parse) {
	            schemeHandler.parse(components, options);
	        }
	    } else {
	        components.error = components.error || "URI can not be parsed.";
	    }
	    return components;
	}

	function _recomposeAuthority(components, options) {
	    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
	    var uriTokens = [];
	    if (components.userinfo !== undefined) {
	        uriTokens.push(components.userinfo);
	        uriTokens.push("@");
	    }
	    if (components.host !== undefined) {
	        //normalize IP hosts, add brackets and escape zone separator for IPv6
	        uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
	            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
	        }));
	    }
	    if (typeof components.port === "number") {
	        uriTokens.push(":");
	        uriTokens.push(components.port.toString(10));
	    }
	    return uriTokens.length ? uriTokens.join("") : undefined;
	}

	var RDS1 = /^\.\.?\//;
	var RDS2 = /^\/\.(\/|$)/;
	var RDS3 = /^\/\.\.(\/|$)/;
	var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
	function removeDotSegments(input) {
	    var output = [];
	    while (input.length) {
	        if (input.match(RDS1)) {
	            input = input.replace(RDS1, "");
	        } else if (input.match(RDS2)) {
	            input = input.replace(RDS2, "/");
	        } else if (input.match(RDS3)) {
	            input = input.replace(RDS3, "/");
	            output.pop();
	        } else if (input === "." || input === "..") {
	            input = "";
	        } else {
	            var im = input.match(RDS5);
	            if (im) {
	                var s = im[0];
	                input = input.slice(s.length);
	                output.push(s);
	            } else {
	                throw new Error("Unexpected dot segment condition");
	            }
	        }
	    }
	    return output.join("");
	}

	function serialize(components) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
	    var uriTokens = [];
	    //find scheme handler
	    var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
	    //perform scheme specific serialization
	    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
	    if (components.host) {
	        //if host component is an IPv6 address
	        if (protocol.IPV6ADDRESS.test(components.host)) ;
	        //TODO: normalize IPv6 address as per RFC 5952

	        //if host component is a domain name
	        else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
	                //convert IDN via punycode
	                try {
	                    components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
	                } catch (e) {
	                    components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
	                }
	            }
	    }
	    //normalize encoding
	    _normalizeComponentEncoding(components, protocol);
	    if (options.reference !== "suffix" && components.scheme) {
	        uriTokens.push(components.scheme);
	        uriTokens.push(":");
	    }
	    var authority = _recomposeAuthority(components, options);
	    if (authority !== undefined) {
	        if (options.reference !== "suffix") {
	            uriTokens.push("//");
	        }
	        uriTokens.push(authority);
	        if (components.path && components.path.charAt(0) !== "/") {
	            uriTokens.push("/");
	        }
	    }
	    if (components.path !== undefined) {
	        var s = components.path;
	        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
	            s = removeDotSegments(s);
	        }
	        if (authority === undefined) {
	            s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
	        }
	        uriTokens.push(s);
	    }
	    if (components.query !== undefined) {
	        uriTokens.push("?");
	        uriTokens.push(components.query);
	    }
	    if (components.fragment !== undefined) {
	        uriTokens.push("#");
	        uriTokens.push(components.fragment);
	    }
	    return uriTokens.join(""); //merge tokens into a string
	}

	function resolveComponents(base, relative) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var skipNormalization = arguments[3];

	    var target = {};
	    if (!skipNormalization) {
	        base = parse(serialize(base, options), options); //normalize base components
	        relative = parse(serialize(relative, options), options); //normalize relative components
	    }
	    options = options || {};
	    if (!options.tolerant && relative.scheme) {
	        target.scheme = relative.scheme;
	        //target.authority = relative.authority;
	        target.userinfo = relative.userinfo;
	        target.host = relative.host;
	        target.port = relative.port;
	        target.path = removeDotSegments(relative.path || "");
	        target.query = relative.query;
	    } else {
	        if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
	            //target.authority = relative.authority;
	            target.userinfo = relative.userinfo;
	            target.host = relative.host;
	            target.port = relative.port;
	            target.path = removeDotSegments(relative.path || "");
	            target.query = relative.query;
	        } else {
	            if (!relative.path) {
	                target.path = base.path;
	                if (relative.query !== undefined) {
	                    target.query = relative.query;
	                } else {
	                    target.query = base.query;
	                }
	            } else {
	                if (relative.path.charAt(0) === "/") {
	                    target.path = removeDotSegments(relative.path);
	                } else {
	                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
	                        target.path = "/" + relative.path;
	                    } else if (!base.path) {
	                        target.path = relative.path;
	                    } else {
	                        target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
	                    }
	                    target.path = removeDotSegments(target.path);
	                }
	                target.query = relative.query;
	            }
	            //target.authority = base.authority;
	            target.userinfo = base.userinfo;
	            target.host = base.host;
	            target.port = base.port;
	        }
	        target.scheme = base.scheme;
	    }
	    target.fragment = relative.fragment;
	    return target;
	}

	function resolve(baseURI, relativeURI, options) {
	    var schemelessOptions = assign({ scheme: 'null' }, options);
	    return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
	}

	function normalize(uri, options) {
	    if (typeof uri === "string") {
	        uri = serialize(parse(uri, options), options);
	    } else if (typeOf(uri) === "object") {
	        uri = parse(serialize(uri, options), options);
	    }
	    return uri;
	}

	function equal(uriA, uriB, options) {
	    if (typeof uriA === "string") {
	        uriA = serialize(parse(uriA, options), options);
	    } else if (typeOf(uriA) === "object") {
	        uriA = serialize(uriA, options);
	    }
	    if (typeof uriB === "string") {
	        uriB = serialize(parse(uriB, options), options);
	    } else if (typeOf(uriB) === "object") {
	        uriB = serialize(uriB, options);
	    }
	    return uriA === uriB;
	}

	function escapeComponent(str, options) {
	    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
	}

	function unescapeComponent(str, options) {
	    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
	}

	var handler = {
	    scheme: "http",
	    domainHost: true,
	    parse: function parse(components, options) {
	        //report missing host
	        if (!components.host) {
	            components.error = components.error || "HTTP URIs must have a host.";
	        }
	        return components;
	    },
	    serialize: function serialize(components, options) {
	        //normalize the default port
	        if (components.port === (String(components.scheme).toLowerCase() !== "https" ? 80 : 443) || components.port === "") {
	            components.port = undefined;
	        }
	        //normalize the empty path
	        if (!components.path) {
	            components.path = "/";
	        }
	        //NOTE: We do not parse query strings for HTTP URIs
	        //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
	        //and not the HTTP spec.
	        return components;
	    }
	};

	var handler$1 = {
	    scheme: "https",
	    domainHost: handler.domainHost,
	    parse: handler.parse,
	    serialize: handler.serialize
	};

	var O = {};
	//RFC 3986
	var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ( "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
	var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
	var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
	//RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
	//const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
	//const WSP$$ = "[\\x20\\x09]";
	//const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
	//const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
	//const VCHAR$$ = "[\\x21-\\x7E]";
	//const WSP$$ = "[\\x20\\x09]";
	//const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
	//const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
	//const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
	//const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
	var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
	var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
	var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
	var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
	var UNRESERVED = new RegExp(UNRESERVED$$, "g");
	var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
	var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
	var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
	var NOT_HFVALUE = NOT_HFNAME;
	function decodeUnreserved(str) {
	    var decStr = pctDecChars(str);
	    return !decStr.match(UNRESERVED) ? str : decStr;
	}
	var handler$2 = {
	    scheme: "mailto",
	    parse: function parse$$1(components, options) {
	        var mailtoComponents = components;
	        var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
	        mailtoComponents.path = undefined;
	        if (mailtoComponents.query) {
	            var unknownHeaders = false;
	            var headers = {};
	            var hfields = mailtoComponents.query.split("&");
	            for (var x = 0, xl = hfields.length; x < xl; ++x) {
	                var hfield = hfields[x].split("=");
	                switch (hfield[0]) {
	                    case "to":
	                        var toAddrs = hfield[1].split(",");
	                        for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
	                            to.push(toAddrs[_x]);
	                        }
	                        break;
	                    case "subject":
	                        mailtoComponents.subject = unescapeComponent(hfield[1], options);
	                        break;
	                    case "body":
	                        mailtoComponents.body = unescapeComponent(hfield[1], options);
	                        break;
	                    default:
	                        unknownHeaders = true;
	                        headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
	                        break;
	                }
	            }
	            if (unknownHeaders) mailtoComponents.headers = headers;
	        }
	        mailtoComponents.query = undefined;
	        for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
	            var addr = to[_x2].split("@");
	            addr[0] = unescapeComponent(addr[0]);
	            if (!options.unicodeSupport) {
	                //convert Unicode IDN -> ASCII IDN
	                try {
	                    addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
	                } catch (e) {
	                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
	                }
	            } else {
	                addr[1] = unescapeComponent(addr[1], options).toLowerCase();
	            }
	            to[_x2] = addr.join("@");
	        }
	        return mailtoComponents;
	    },
	    serialize: function serialize$$1(mailtoComponents, options) {
	        var components = mailtoComponents;
	        var to = toArray(mailtoComponents.to);
	        if (to) {
	            for (var x = 0, xl = to.length; x < xl; ++x) {
	                var toAddr = String(to[x]);
	                var atIdx = toAddr.lastIndexOf("@");
	                var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
	                var domain = toAddr.slice(atIdx + 1);
	                //convert IDN via punycode
	                try {
	                    domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
	                } catch (e) {
	                    components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
	                }
	                to[x] = localPart + "@" + domain;
	            }
	            components.path = to.join(",");
	        }
	        var headers = mailtoComponents.headers = mailtoComponents.headers || {};
	        if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
	        if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
	        var fields = [];
	        for (var name in headers) {
	            if (headers[name] !== O[name]) {
	                fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
	            }
	        }
	        if (fields.length) {
	            components.query = fields.join("&");
	        }
	        return components;
	    }
	};

	var URN_PARSE = /^([^\:]+)\:(.*)/;
	//RFC 2141
	var handler$3 = {
	    scheme: "urn",
	    parse: function parse$$1(components, options) {
	        var matches = components.path && components.path.match(URN_PARSE);
	        var urnComponents = components;
	        if (matches) {
	            var scheme = options.scheme || urnComponents.scheme || "urn";
	            var nid = matches[1].toLowerCase();
	            var nss = matches[2];
	            var urnScheme = scheme + ":" + (options.nid || nid);
	            var schemeHandler = SCHEMES[urnScheme];
	            urnComponents.nid = nid;
	            urnComponents.nss = nss;
	            urnComponents.path = undefined;
	            if (schemeHandler) {
	                urnComponents = schemeHandler.parse(urnComponents, options);
	            }
	        } else {
	            urnComponents.error = urnComponents.error || "URN can not be parsed.";
	        }
	        return urnComponents;
	    },
	    serialize: function serialize$$1(urnComponents, options) {
	        var scheme = options.scheme || urnComponents.scheme || "urn";
	        var nid = urnComponents.nid;
	        var urnScheme = scheme + ":" + (options.nid || nid);
	        var schemeHandler = SCHEMES[urnScheme];
	        if (schemeHandler) {
	            urnComponents = schemeHandler.serialize(urnComponents, options);
	        }
	        var uriComponents = urnComponents;
	        var nss = urnComponents.nss;
	        uriComponents.path = (nid || options.nid) + ":" + nss;
	        return uriComponents;
	    }
	};

	var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
	//RFC 4122
	var handler$4 = {
	    scheme: "urn:uuid",
	    parse: function parse(urnComponents, options) {
	        var uuidComponents = urnComponents;
	        uuidComponents.uuid = uuidComponents.nss;
	        uuidComponents.nss = undefined;
	        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
	            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
	        }
	        return uuidComponents;
	    },
	    serialize: function serialize(uuidComponents, options) {
	        var urnComponents = uuidComponents;
	        //normalize UUID
	        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
	        return urnComponents;
	    }
	};

	SCHEMES[handler.scheme] = handler;
	SCHEMES[handler$1.scheme] = handler$1;
	SCHEMES[handler$2.scheme] = handler$2;
	SCHEMES[handler$3.scheme] = handler$3;
	SCHEMES[handler$4.scheme] = handler$4;

	exports.SCHEMES = SCHEMES;
	exports.pctEncChar = pctEncChar;
	exports.pctDecChars = pctDecChars;
	exports.parse = parse;
	exports.removeDotSegments = removeDotSegments;
	exports.serialize = serialize;
	exports.resolveComponents = resolveComponents;
	exports.resolve = resolve;
	exports.normalize = normalize;
	exports.equal = equal;
	exports.escapeComponent = escapeComponent;
	exports.unescapeComponent = unescapeComponent;

	Object.defineProperty(exports, '__esModule', { value: true });

	})));

	});

	unwrapExports(uri_all);

	// do not edit .js files directly - edit src/index.jst



	var fastDeepEqual = function equal(a, b) {
	  if (a === b) return true;

	  if (a && b && typeof a == 'object' && typeof b == 'object') {
	    if (a.constructor !== b.constructor) return false;

	    var length, i, keys;
	    if (Array.isArray(a)) {
	      length = a.length;
	      if (length != b.length) return false;
	      for (i = length; i-- !== 0;)
	        if (!equal(a[i], b[i])) return false;
	      return true;
	    }



	    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
	    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
	    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

	    keys = Object.keys(a);
	    length = keys.length;
	    if (length !== Object.keys(b).length) return false;

	    for (i = length; i-- !== 0;)
	      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

	    for (i = length; i-- !== 0;) {
	      var key = keys[i];

	      if (!equal(a[key], b[key])) return false;
	    }

	    return true;
	  }

	  // true if both NaN, false otherwise
	  return a!==a && b!==b;
	};

	// https://mathiasbynens.be/notes/javascript-encoding
	// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
	var ucs2length = function ucs2length(str) {
	  var length = 0
	    , len = str.length
	    , pos = 0
	    , value;
	  while (pos < len) {
	    length++;
	    value = str.charCodeAt(pos++);
	    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
	      // high surrogate, and there is a next character
	      value = str.charCodeAt(pos);
	      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
	    }
	  }
	  return length;
	};

	var util = {
	  copy: copy,
	  checkDataType: checkDataType,
	  checkDataTypes: checkDataTypes,
	  coerceToTypes: coerceToTypes,
	  toHash: toHash,
	  getProperty: getProperty,
	  escapeQuotes: escapeQuotes,
	  equal: fastDeepEqual,
	  ucs2length: ucs2length,
	  varOccurences: varOccurences,
	  varReplace: varReplace,
	  cleanUpCode: cleanUpCode,
	  finalCleanUpCode: finalCleanUpCode,
	  schemaHasRules: schemaHasRules,
	  schemaHasRulesExcept: schemaHasRulesExcept,
	  schemaUnknownRules: schemaUnknownRules,
	  toQuotedString: toQuotedString,
	  getPathExpr: getPathExpr,
	  getPath: getPath,
	  getData: getData,
	  unescapeFragment: unescapeFragment,
	  unescapeJsonPointer: unescapeJsonPointer,
	  escapeFragment: escapeFragment,
	  escapeJsonPointer: escapeJsonPointer
	};


	function copy(o, to) {
	  to = to || {};
	  for (var key in o) to[key] = o[key];
	  return to;
	}


	function checkDataType(dataType, data, negate) {
	  var EQUAL = negate ? ' !== ' : ' === '
	    , AND = negate ? ' || ' : ' && '
	    , OK = negate ? '!' : ''
	    , NOT = negate ? '' : '!';
	  switch (dataType) {
	    case 'null': return data + EQUAL + 'null';
	    case 'array': return OK + 'Array.isArray(' + data + ')';
	    case 'object': return '(' + OK + data + AND +
	                          'typeof ' + data + EQUAL + '"object"' + AND +
	                          NOT + 'Array.isArray(' + data + '))';
	    case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
	                           NOT + '(' + data + ' % 1)' +
	                           AND + data + EQUAL + data + ')';
	    default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
	  }
	}


	function checkDataTypes(dataTypes, data) {
	  switch (dataTypes.length) {
	    case 1: return checkDataType(dataTypes[0], data, true);
	    default:
	      var code = '';
	      var types = toHash(dataTypes);
	      if (types.array && types.object) {
	        code = types.null ? '(': '(!' + data + ' || ';
	        code += 'typeof ' + data + ' !== "object")';
	        delete types.null;
	        delete types.array;
	        delete types.object;
	      }
	      if (types.number) delete types.integer;
	      for (var t in types)
	        code += (code ? ' && ' : '' ) + checkDataType(t, data, true);

	      return code;
	  }
	}


	var COERCE_TO_TYPES = toHash([ 'string', 'number', 'integer', 'boolean', 'null' ]);
	function coerceToTypes(optionCoerceTypes, dataTypes) {
	  if (Array.isArray(dataTypes)) {
	    var types = [];
	    for (var i=0; i<dataTypes.length; i++) {
	      var t = dataTypes[i];
	      if (COERCE_TO_TYPES[t]) types[types.length] = t;
	      else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
	    }
	    if (types.length) return types;
	  } else if (COERCE_TO_TYPES[dataTypes]) {
	    return [dataTypes];
	  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
	    return ['array'];
	  }
	}


	function toHash(arr) {
	  var hash = {};
	  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
	  return hash;
	}


	var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
	var SINGLE_QUOTE = /'|\\/g;
	function getProperty(key) {
	  return typeof key == 'number'
	          ? '[' + key + ']'
	          : IDENTIFIER.test(key)
	            ? '.' + key
	            : "['" + escapeQuotes(key) + "']";
	}


	function escapeQuotes(str) {
	  return str.replace(SINGLE_QUOTE, '\\$&')
	            .replace(/\n/g, '\\n')
	            .replace(/\r/g, '\\r')
	            .replace(/\f/g, '\\f')
	            .replace(/\t/g, '\\t');
	}


	function varOccurences(str, dataVar) {
	  dataVar += '[^0-9]';
	  var matches = str.match(new RegExp(dataVar, 'g'));
	  return matches ? matches.length : 0;
	}


	function varReplace(str, dataVar, expr) {
	  dataVar += '([^0-9])';
	  expr = expr.replace(/\$/g, '$$$$');
	  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
	}


	var EMPTY_ELSE = /else\s*{\s*}/g
	  , EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g
	  , EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
	function cleanUpCode(out) {
	  return out.replace(EMPTY_ELSE, '')
	            .replace(EMPTY_IF_NO_ELSE, '')
	            .replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
	}


	var ERRORS_REGEXP = /[^v.]errors/g
	  , REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g
	  , REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g
	  , RETURN_VALID = 'return errors === 0;'
	  , RETURN_TRUE = 'validate.errors = null; return true;'
	  , RETURN_ASYNC = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/
	  , RETURN_DATA_ASYNC = 'return data;'
	  , ROOTDATA_REGEXP = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g
	  , REMOVE_ROOTDATA = /if \(rootData === undefined\) rootData = data;/;

	function finalCleanUpCode(out, async) {
	  var matches = out.match(ERRORS_REGEXP);
	  if (matches && matches.length == 2) {
	    out = async
	          ? out.replace(REMOVE_ERRORS_ASYNC, '')
	               .replace(RETURN_ASYNC, RETURN_DATA_ASYNC)
	          : out.replace(REMOVE_ERRORS, '')
	               .replace(RETURN_VALID, RETURN_TRUE);
	  }

	  matches = out.match(ROOTDATA_REGEXP);
	  if (!matches || matches.length !== 3) return out;
	  return out.replace(REMOVE_ROOTDATA, '');
	}


	function schemaHasRules(schema, rules) {
	  if (typeof schema == 'boolean') return !schema;
	  for (var key in schema) if (rules[key]) return true;
	}


	function schemaHasRulesExcept(schema, rules, exceptKeyword) {
	  if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
	  for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
	}


	function schemaUnknownRules(schema, rules) {
	  if (typeof schema == 'boolean') return;
	  for (var key in schema) if (!rules[key]) return key;
	}


	function toQuotedString(str) {
	  return '\'' + escapeQuotes(str) + '\'';
	}


	function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
	  var path = jsonPointers // false by default
	              ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
	              : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
	  return joinPaths(currentPath, path);
	}


	function getPath(currentPath, prop, jsonPointers) {
	  var path = jsonPointers // false by default
	              ? toQuotedString('/' + escapeJsonPointer(prop))
	              : toQuotedString(getProperty(prop));
	  return joinPaths(currentPath, path);
	}


	var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
	var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
	function getData($data, lvl, paths) {
	  var up, jsonPointer, data, matches;
	  if ($data === '') return 'rootData';
	  if ($data[0] == '/') {
	    if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
	    jsonPointer = $data;
	    data = 'rootData';
	  } else {
	    matches = $data.match(RELATIVE_JSON_POINTER);
	    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
	    up = +matches[1];
	    jsonPointer = matches[2];
	    if (jsonPointer == '#') {
	      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
	      return paths[lvl - up];
	    }

	    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
	    data = 'data' + ((lvl - up) || '');
	    if (!jsonPointer) return data;
	  }

	  var expr = data;
	  var segments = jsonPointer.split('/');
	  for (var i=0; i<segments.length; i++) {
	    var segment = segments[i];
	    if (segment) {
	      data += getProperty(unescapeJsonPointer(segment));
	      expr += ' && ' + data;
	    }
	  }
	  return expr;
	}


	function joinPaths (a, b) {
	  if (a == '""') return b;
	  return (a + ' + ' + b).replace(/' \+ '/g, '');
	}


	function unescapeFragment(str) {
	  return unescapeJsonPointer(decodeURIComponent(str));
	}


	function escapeFragment(str) {
	  return encodeURIComponent(escapeJsonPointer(str));
	}


	function escapeJsonPointer(str) {
	  return str.replace(/~/g, '~0').replace(/\//g, '~1');
	}


	function unescapeJsonPointer(str) {
	  return str.replace(/~1/g, '/').replace(/~0/g, '~');
	}

	var schema_obj = SchemaObject;

	function SchemaObject(obj) {
	  util.copy(obj, this);
	}

	var jsonSchemaTraverse = createCommonjsModule(function (module) {

	var traverse = module.exports = function (schema, opts, cb) {
	  // Legacy support for v0.3.1 and earlier.
	  if (typeof opts == 'function') {
	    cb = opts;
	    opts = {};
	  }

	  cb = opts.cb || cb;
	  var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};
	  var post = cb.post || function() {};

	  _traverse(opts, pre, post, schema, '', schema);
	};


	traverse.keywords = {
	  additionalItems: true,
	  items: true,
	  contains: true,
	  additionalProperties: true,
	  propertyNames: true,
	  not: true
	};

	traverse.arrayKeywords = {
	  items: true,
	  allOf: true,
	  anyOf: true,
	  oneOf: true
	};

	traverse.propsKeywords = {
	  definitions: true,
	  properties: true,
	  patternProperties: true,
	  dependencies: true
	};

	traverse.skipKeywords = {
	  default: true,
	  enum: true,
	  const: true,
	  required: true,
	  maximum: true,
	  minimum: true,
	  exclusiveMaximum: true,
	  exclusiveMinimum: true,
	  multipleOf: true,
	  maxLength: true,
	  minLength: true,
	  pattern: true,
	  format: true,
	  maxItems: true,
	  minItems: true,
	  uniqueItems: true,
	  maxProperties: true,
	  minProperties: true
	};


	function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
	  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
	    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
	    for (var key in schema) {
	      var sch = schema[key];
	      if (Array.isArray(sch)) {
	        if (key in traverse.arrayKeywords) {
	          for (var i=0; i<sch.length; i++)
	            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
	        }
	      } else if (key in traverse.propsKeywords) {
	        if (sch && typeof sch == 'object') {
	          for (var prop in sch)
	            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
	        }
	      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
	        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
	      }
	    }
	    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
	  }
	}


	function escapeJsonPtr(str) {
	  return str.replace(/~/g, '~0').replace(/\//g, '~1');
	}
	});

	var resolve_1 = resolve;

	resolve.normalizeId = normalizeId;
	resolve.fullPath = getFullPath;
	resolve.url = resolveUrl;
	resolve.ids = resolveIds;
	resolve.inlineRef = inlineRef;
	resolve.schema = resolveSchema;

	/**
	 * [resolve and compile the references ($ref)]
	 * @this   Ajv
	 * @param  {Function} compile reference to schema compilation funciton (localCompile)
	 * @param  {Object} root object with information about the root schema for the current schema
	 * @param  {String} ref reference to resolve
	 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
	 */
	function resolve(compile, root, ref) {
	  /* jshint validthis: true */
	  var refVal = this._refs[ref];
	  if (typeof refVal == 'string') {
	    if (this._refs[refVal]) refVal = this._refs[refVal];
	    else return resolve.call(this, compile, root, refVal);
	  }

	  refVal = refVal || this._schemas[ref];
	  if (refVal instanceof schema_obj) {
	    return inlineRef(refVal.schema, this._opts.inlineRefs)
	            ? refVal.schema
	            : refVal.validate || this._compile(refVal);
	  }

	  var res = resolveSchema.call(this, root, ref);
	  var schema, v, baseId;
	  if (res) {
	    schema = res.schema;
	    root = res.root;
	    baseId = res.baseId;
	  }

	  if (schema instanceof schema_obj) {
	    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
	  } else if (schema !== undefined) {
	    v = inlineRef(schema, this._opts.inlineRefs)
	        ? schema
	        : compile.call(this, schema, root, undefined, baseId);
	  }

	  return v;
	}


	/**
	 * Resolve schema, its root and baseId
	 * @this Ajv
	 * @param  {Object} root root object with properties schema, refVal, refs
	 * @param  {String} ref  reference to resolve
	 * @return {Object} object with properties schema, root, baseId
	 */
	function resolveSchema(root, ref) {
	  /* jshint validthis: true */
	  var p = uri_all.parse(ref)
	    , refPath = _getFullPath(p)
	    , baseId = getFullPath(this._getId(root.schema));
	  if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
	    var id = normalizeId(refPath);
	    var refVal = this._refs[id];
	    if (typeof refVal == 'string') {
	      return resolveRecursive.call(this, root, refVal, p);
	    } else if (refVal instanceof schema_obj) {
	      if (!refVal.validate) this._compile(refVal);
	      root = refVal;
	    } else {
	      refVal = this._schemas[id];
	      if (refVal instanceof schema_obj) {
	        if (!refVal.validate) this._compile(refVal);
	        if (id == normalizeId(ref))
	          return { schema: refVal, root: root, baseId: baseId };
	        root = refVal;
	      } else {
	        return;
	      }
	    }
	    if (!root.schema) return;
	    baseId = getFullPath(this._getId(root.schema));
	  }
	  return getJsonPointer.call(this, p, baseId, root.schema, root);
	}


	/* @this Ajv */
	function resolveRecursive(root, ref, parsedRef) {
	  /* jshint validthis: true */
	  var res = resolveSchema.call(this, root, ref);
	  if (res) {
	    var schema = res.schema;
	    var baseId = res.baseId;
	    root = res.root;
	    var id = this._getId(schema);
	    if (id) baseId = resolveUrl(baseId, id);
	    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
	  }
	}


	var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
	/* @this Ajv */
	function getJsonPointer(parsedRef, baseId, schema, root) {
	  /* jshint validthis: true */
	  parsedRef.fragment = parsedRef.fragment || '';
	  if (parsedRef.fragment.slice(0,1) != '/') return;
	  var parts = parsedRef.fragment.split('/');

	  for (var i = 1; i < parts.length; i++) {
	    var part = parts[i];
	    if (part) {
	      part = util.unescapeFragment(part);
	      schema = schema[part];
	      if (schema === undefined) break;
	      var id;
	      if (!PREVENT_SCOPE_CHANGE[part]) {
	        id = this._getId(schema);
	        if (id) baseId = resolveUrl(baseId, id);
	        if (schema.$ref) {
	          var $ref = resolveUrl(baseId, schema.$ref);
	          var res = resolveSchema.call(this, root, $ref);
	          if (res) {
	            schema = res.schema;
	            root = res.root;
	            baseId = res.baseId;
	          }
	        }
	      }
	    }
	  }
	  if (schema !== undefined && schema !== root.schema)
	    return { schema: schema, root: root, baseId: baseId };
	}


	var SIMPLE_INLINED = util.toHash([
	  'type', 'format', 'pattern',
	  'maxLength', 'minLength',
	  'maxProperties', 'minProperties',
	  'maxItems', 'minItems',
	  'maximum', 'minimum',
	  'uniqueItems', 'multipleOf',
	  'required', 'enum'
	]);
	function inlineRef(schema, limit) {
	  if (limit === false) return false;
	  if (limit === undefined || limit === true) return checkNoRef(schema);
	  else if (limit) return countKeys(schema) <= limit;
	}


	function checkNoRef(schema) {
	  var item;
	  if (Array.isArray(schema)) {
	    for (var i=0; i<schema.length; i++) {
	      item = schema[i];
	      if (typeof item == 'object' && !checkNoRef(item)) return false;
	    }
	  } else {
	    for (var key in schema) {
	      if (key == '$ref') return false;
	      item = schema[key];
	      if (typeof item == 'object' && !checkNoRef(item)) return false;
	    }
	  }
	  return true;
	}


	function countKeys(schema) {
	  var count = 0, item;
	  if (Array.isArray(schema)) {
	    for (var i=0; i<schema.length; i++) {
	      item = schema[i];
	      if (typeof item == 'object') count += countKeys(item);
	      if (count == Infinity) return Infinity;
	    }
	  } else {
	    for (var key in schema) {
	      if (key == '$ref') return Infinity;
	      if (SIMPLE_INLINED[key]) {
	        count++;
	      } else {
	        item = schema[key];
	        if (typeof item == 'object') count += countKeys(item) + 1;
	        if (count == Infinity) return Infinity;
	      }
	    }
	  }
	  return count;
	}


	function getFullPath(id, normalize) {
	  if (normalize !== false) id = normalizeId(id);
	  var p = uri_all.parse(id);
	  return _getFullPath(p);
	}


	function _getFullPath(p) {
	  return uri_all.serialize(p).split('#')[0] + '#';
	}


	var TRAILING_SLASH_HASH = /#\/?$/;
	function normalizeId(id) {
	  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
	}


	function resolveUrl(baseId, id) {
	  id = normalizeId(id);
	  return uri_all.resolve(baseId, id);
	}


	/* @this Ajv */
	function resolveIds(schema) {
	  var schemaId = normalizeId(this._getId(schema));
	  var baseIds = {'': schemaId};
	  var fullPaths = {'': getFullPath(schemaId, false)};
	  var localRefs = {};
	  var self = this;

	  jsonSchemaTraverse(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
	    if (jsonPtr === '') return;
	    var id = self._getId(sch);
	    var baseId = baseIds[parentJsonPtr];
	    var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
	    if (keyIndex !== undefined)
	      fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util.escapeFragment(keyIndex));

	    if (typeof id == 'string') {
	      id = baseId = normalizeId(baseId ? uri_all.resolve(baseId, id) : id);

	      var refVal = self._refs[id];
	      if (typeof refVal == 'string') refVal = self._refs[refVal];
	      if (refVal && refVal.schema) {
	        if (!fastDeepEqual(sch, refVal.schema))
	          throw new Error('id "' + id + '" resolves to more than one schema');
	      } else if (id != normalizeId(fullPath)) {
	        if (id[0] == '#') {
	          if (localRefs[id] && !fastDeepEqual(sch, localRefs[id]))
	            throw new Error('id "' + id + '" resolves to more than one schema');
	          localRefs[id] = sch;
	        } else {
	          self._refs[id] = fullPath;
	        }
	      }
	    }
	    baseIds[jsonPtr] = baseId;
	    fullPaths[jsonPtr] = fullPath;
	  });

	  return localRefs;
	}

	var error_classes = {
	  Validation: errorSubclass(ValidationError),
	  MissingRef: errorSubclass(MissingRefError)
	};


	function ValidationError(errors) {
	  this.message = 'validation failed';
	  this.errors = errors;
	  this.ajv = this.validation = true;
	}


	MissingRefError.message = function (baseId, ref) {
	  return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
	};


	function MissingRefError(baseId, ref, message) {
	  this.message = message || MissingRefError.message(baseId, ref);
	  this.missingRef = resolve_1.url(baseId, ref);
	  this.missingSchema = resolve_1.normalizeId(resolve_1.fullPath(this.missingRef));
	}


	function errorSubclass(Subclass) {
	  Subclass.prototype = Object.create(Error.prototype);
	  Subclass.prototype.constructor = Subclass;
	  return Subclass;
	}

	var fastJsonStableStringify = function (data, opts) {
	    if (!opts) opts = {};
	    if (typeof opts === 'function') opts = { cmp: opts };
	    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

	    var cmp = opts.cmp && (function (f) {
	        return function (node) {
	            return function (a, b) {
	                var aobj = { key: a, value: node[a] };
	                var bobj = { key: b, value: node[b] };
	                return f(aobj, bobj);
	            };
	        };
	    })(opts.cmp);

	    var seen = [];
	    return (function stringify (node) {
	        if (node && node.toJSON && typeof node.toJSON === 'function') {
	            node = node.toJSON();
	        }

	        if (node === undefined) return;
	        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
	        if (typeof node !== 'object') return JSON.stringify(node);

	        var i, out;
	        if (Array.isArray(node)) {
	            out = '[';
	            for (i = 0; i < node.length; i++) {
	                if (i) out += ',';
	                out += stringify(node[i]) || 'null';
	            }
	            return out + ']';
	        }

	        if (node === null) return 'null';

	        if (seen.indexOf(node) !== -1) {
	            if (cycles) return JSON.stringify('__cycle__');
	            throw new TypeError('Converting circular structure to JSON');
	        }

	        var seenIndex = seen.push(node) - 1;
	        var keys = Object.keys(node).sort(cmp && cmp(node));
	        out = '';
	        for (i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            var value = stringify(node[key]);

	            if (!value) continue;
	            if (out) out += ',';
	            out += JSON.stringify(key) + ':' + value;
	        }
	        seen.splice(seenIndex, 1);
	        return '{' + out + '}';
	    })(data);
	};

	var validate = function generate_validate(it, $keyword, $ruleType) {
	  var out = '';
	  var $async = it.schema.$async === true,
	    $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
	    $id = it.self._getId(it.schema);
	  if (it.opts.strictKeywords) {
	    var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
	    if ($unknownKwd) {
	      var $keywordsMsg = 'unknown keyword: ' + $unknownKwd;
	      if (it.opts.strictKeywords === 'log') it.logger.warn($keywordsMsg);
	      else throw new Error($keywordsMsg);
	    }
	  }
	  if (it.isTop) {
	    out += ' var validate = ';
	    if ($async) {
	      it.async = true;
	      out += 'async ';
	    }
	    out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
	    if ($id && (it.opts.sourceCode || it.opts.processCode)) {
	      out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
	    }
	  }
	  if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
	    var $keyword = 'false schema';
	    var $lvl = it.level;
	    var $dataLvl = it.dataLevel;
	    var $schema = it.schema[$keyword];
	    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	    var $breakOnError = !it.opts.allErrors;
	    var $errorKeyword;
	    var $data = 'data' + ($dataLvl || '');
	    var $valid = 'valid' + $lvl;
	    if (it.schema === false) {
	      if (it.isTop) {
	        $breakOnError = true;
	      } else {
	        out += ' var ' + ($valid) + ' = false; ';
	      }
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'boolean schema is false\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) {
	        /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	    } else {
	      if (it.isTop) {
	        if ($async) {
	          out += ' return data; ';
	        } else {
	          out += ' validate.errors = null; return true; ';
	        }
	      } else {
	        out += ' var ' + ($valid) + ' = true; ';
	      }
	    }
	    if (it.isTop) {
	      out += ' }; return validate; ';
	    }
	    return out;
	  }
	  if (it.isTop) {
	    var $top = it.isTop,
	      $lvl = it.level = 0,
	      $dataLvl = it.dataLevel = 0,
	      $data = 'data';
	    it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
	    it.baseId = it.baseId || it.rootId;
	    delete it.isTop;
	    it.dataPathArr = [undefined];
	    if (it.schema.default !== undefined && it.opts.useDefaults && it.opts.strictDefaults) {
	      var $defaultMsg = 'default is ignored in the schema root';
	      if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
	      else throw new Error($defaultMsg);
	    }
	    out += ' var vErrors = null; ';
	    out += ' var errors = 0;     ';
	    out += ' if (rootData === undefined) rootData = data; ';
	  } else {
	    var $lvl = it.level,
	      $dataLvl = it.dataLevel,
	      $data = 'data' + ($dataLvl || '');
	    if ($id) it.baseId = it.resolve.url(it.baseId, $id);
	    if ($async && !it.async) throw new Error('async schema in sync schema');
	    out += ' var errs_' + ($lvl) + ' = errors;';
	  }
	  var $valid = 'valid' + $lvl,
	    $breakOnError = !it.opts.allErrors,
	    $closingBraces1 = '',
	    $closingBraces2 = '';
	  var $errorKeyword;
	  var $typeSchema = it.schema.type,
	    $typeIsArray = Array.isArray($typeSchema);
	  if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
	    if ($typeIsArray) {
	      if ($typeSchema.indexOf('null') == -1) $typeSchema = $typeSchema.concat('null');
	    } else if ($typeSchema != 'null') {
	      $typeSchema = [$typeSchema, 'null'];
	      $typeIsArray = true;
	    }
	  }
	  if ($typeIsArray && $typeSchema.length == 1) {
	    $typeSchema = $typeSchema[0];
	    $typeIsArray = false;
	  }
	  if (it.schema.$ref && $refKeywords) {
	    if (it.opts.extendRefs == 'fail') {
	      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
	    } else if (it.opts.extendRefs !== true) {
	      $refKeywords = false;
	      it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
	    }
	  }
	  if (it.schema.$comment && it.opts.$comment) {
	    out += ' ' + (it.RULES.all.$comment.code(it, '$comment'));
	  }
	  if ($typeSchema) {
	    if (it.opts.coerceTypes) {
	      var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
	    }
	    var $rulesGroup = it.RULES.types[$typeSchema];
	    if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
	      var $schemaPath = it.schemaPath + '.type',
	        $errSchemaPath = it.errSchemaPath + '/type';
	      var $schemaPath = it.schemaPath + '.type',
	        $errSchemaPath = it.errSchemaPath + '/type',
	        $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
	      out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') { ';
	      if ($coerceToTypes) {
	        var $dataType = 'dataType' + $lvl,
	          $coerced = 'coerced' + $lvl;
	        out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; ';
	        if (it.opts.coerceTypes == 'array') {
	          out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ')) ' + ($dataType) + ' = \'array\'; ';
	        }
	        out += ' var ' + ($coerced) + ' = undefined; ';
	        var $bracesCoercion = '';
	        var arr1 = $coerceToTypes;
	        if (arr1) {
	          var $type, $i = -1,
	            l1 = arr1.length - 1;
	          while ($i < l1) {
	            $type = arr1[$i += 1];
	            if ($i) {
	              out += ' if (' + ($coerced) + ' === undefined) { ';
	              $bracesCoercion += '}';
	            }
	            if (it.opts.coerceTypes == 'array' && $type != 'array') {
	              out += ' if (' + ($dataType) + ' == \'array\' && ' + ($data) + '.length == 1) { ' + ($coerced) + ' = ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + ';  } ';
	            }
	            if ($type == 'string') {
	              out += ' if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
	            } else if ($type == 'number' || $type == 'integer') {
	              out += ' if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
	              if ($type == 'integer') {
	                out += ' && !(' + ($data) + ' % 1)';
	              }
	              out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
	            } else if ($type == 'boolean') {
	              out += ' if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
	            } else if ($type == 'null') {
	              out += ' if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
	            } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
	              out += ' if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
	            }
	          }
	        }
	        out += ' ' + ($bracesCoercion) + ' if (' + ($coerced) + ' === undefined) {   ';
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
	          if ($typeIsArray) {
	            out += '' + ($typeSchema.join(","));
	          } else {
	            out += '' + ($typeSchema);
	          }
	          out += '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'should be ';
	            if ($typeIsArray) {
	              out += '' + ($typeSchema.join(","));
	            } else {
	              out += '' + ($typeSchema);
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else {  ';
	        var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
	          $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
	        out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
	        if (!$dataLvl) {
	          out += 'if (' + ($parentData) + ' !== undefined)';
	        }
	        out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
	      } else {
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
	          if ($typeIsArray) {
	            out += '' + ($typeSchema.join(","));
	          } else {
	            out += '' + ($typeSchema);
	          }
	          out += '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'should be ';
	            if ($typeIsArray) {
	              out += '' + ($typeSchema.join(","));
	            } else {
	              out += '' + ($typeSchema);
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	      }
	      out += ' } ';
	    }
	  }
	  if (it.schema.$ref && !$refKeywords) {
	    out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
	    if ($breakOnError) {
	      out += ' } if (errors === ';
	      if ($top) {
	        out += '0';
	      } else {
	        out += 'errs_' + ($lvl);
	      }
	      out += ') { ';
	      $closingBraces2 += '}';
	    }
	  } else {
	    var arr2 = it.RULES;
	    if (arr2) {
	      var $rulesGroup, i2 = -1,
	        l2 = arr2.length - 1;
	      while (i2 < l2) {
	        $rulesGroup = arr2[i2 += 1];
	        if ($shouldUseGroup($rulesGroup)) {
	          if ($rulesGroup.type) {
	            out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data)) + ') { ';
	          }
	          if (it.opts.useDefaults) {
	            if ($rulesGroup.type == 'object' && it.schema.properties) {
	              var $schema = it.schema.properties,
	                $schemaKeys = Object.keys($schema);
	              var arr3 = $schemaKeys;
	              if (arr3) {
	                var $propertyKey, i3 = -1,
	                  l3 = arr3.length - 1;
	                while (i3 < l3) {
	                  $propertyKey = arr3[i3 += 1];
	                  var $sch = $schema[$propertyKey];
	                  if ($sch.default !== undefined) {
	                    var $passData = $data + it.util.getProperty($propertyKey);
	                    if (it.compositeRule) {
	                      if (it.opts.strictDefaults) {
	                        var $defaultMsg = 'default is ignored for: ' + $passData;
	                        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
	                        else throw new Error($defaultMsg);
	                      }
	                    } else {
	                      out += ' if (' + ($passData) + ' === undefined ';
	                      if (it.opts.useDefaults == 'empty') {
	                        out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
	                      }
	                      out += ' ) ' + ($passData) + ' = ';
	                      if (it.opts.useDefaults == 'shared') {
	                        out += ' ' + (it.useDefault($sch.default)) + ' ';
	                      } else {
	                        out += ' ' + (JSON.stringify($sch.default)) + ' ';
	                      }
	                      out += '; ';
	                    }
	                  }
	                }
	              }
	            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
	              var arr4 = it.schema.items;
	              if (arr4) {
	                var $sch, $i = -1,
	                  l4 = arr4.length - 1;
	                while ($i < l4) {
	                  $sch = arr4[$i += 1];
	                  if ($sch.default !== undefined) {
	                    var $passData = $data + '[' + $i + ']';
	                    if (it.compositeRule) {
	                      if (it.opts.strictDefaults) {
	                        var $defaultMsg = 'default is ignored for: ' + $passData;
	                        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
	                        else throw new Error($defaultMsg);
	                      }
	                    } else {
	                      out += ' if (' + ($passData) + ' === undefined ';
	                      if (it.opts.useDefaults == 'empty') {
	                        out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
	                      }
	                      out += ' ) ' + ($passData) + ' = ';
	                      if (it.opts.useDefaults == 'shared') {
	                        out += ' ' + (it.useDefault($sch.default)) + ' ';
	                      } else {
	                        out += ' ' + (JSON.stringify($sch.default)) + ' ';
	                      }
	                      out += '; ';
	                    }
	                  }
	                }
	              }
	            }
	          }
	          var arr5 = $rulesGroup.rules;
	          if (arr5) {
	            var $rule, i5 = -1,
	              l5 = arr5.length - 1;
	            while (i5 < l5) {
	              $rule = arr5[i5 += 1];
	              if ($shouldUseRule($rule)) {
	                var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
	                if ($code) {
	                  out += ' ' + ($code) + ' ';
	                  if ($breakOnError) {
	                    $closingBraces1 += '}';
	                  }
	                }
	              }
	            }
	          }
	          if ($breakOnError) {
	            out += ' ' + ($closingBraces1) + ' ';
	            $closingBraces1 = '';
	          }
	          if ($rulesGroup.type) {
	            out += ' } ';
	            if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
	              out += ' else { ';
	              var $schemaPath = it.schemaPath + '.type',
	                $errSchemaPath = it.errSchemaPath + '/type';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
	                if ($typeIsArray) {
	                  out += '' + ($typeSchema.join(","));
	                } else {
	                  out += '' + ($typeSchema);
	                }
	                out += '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'should be ';
	                  if ($typeIsArray) {
	                    out += '' + ($typeSchema.join(","));
	                  } else {
	                    out += '' + ($typeSchema);
	                  }
	                  out += '\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) {
	                /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              out += ' } ';
	            }
	          }
	          if ($breakOnError) {
	            out += ' if (errors === ';
	            if ($top) {
	              out += '0';
	            } else {
	              out += 'errs_' + ($lvl);
	            }
	            out += ') { ';
	            $closingBraces2 += '}';
	          }
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces2) + ' ';
	  }
	  if ($top) {
	    if ($async) {
	      out += ' if (errors === 0) return data;           ';
	      out += ' else throw new ValidationError(vErrors); ';
	    } else {
	      out += ' validate.errors = vErrors; ';
	      out += ' return errors === 0;       ';
	    }
	    out += ' }; return validate;';
	  } else {
	    out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
	  }
	  out = it.util.cleanUpCode(out);
	  if ($top) {
	    out = it.util.finalCleanUpCode(out, $async);
	  }

	  function $shouldUseGroup($rulesGroup) {
	    var rules = $rulesGroup.rules;
	    for (var i = 0; i < rules.length; i++)
	      if ($shouldUseRule(rules[i])) return true;
	  }

	  function $shouldUseRule($rule) {
	    return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImplementsSomeKeyword($rule));
	  }

	  function $ruleImplementsSomeKeyword($rule) {
	    var impl = $rule.implements;
	    for (var i = 0; i < impl.length; i++)
	      if (it.schema[impl[i]] !== undefined) return true;
	  }
	  return out;
	};

	/**
	 * Functions below are used inside compiled validations function
	 */

	var ucs2length$1 = util.ucs2length;


	// this error is thrown by async schemas to return validation errors via exception
	var ValidationError$1 = error_classes.Validation;

	var compile_1 = compile;


	/**
	 * Compiles schema to validation function
	 * @this   Ajv
	 * @param  {Object} schema schema object
	 * @param  {Object} root object with information about the root schema for this schema
	 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
	 * @param  {String} baseId base ID for IDs in the schema
	 * @return {Function} validation function
	 */
	function compile(schema, root, localRefs, baseId) {
	  /* jshint validthis: true, evil: true */
	  /* eslint no-shadow: 0 */
	  var self = this
	    , opts = this._opts
	    , refVal = [ undefined ]
	    , refs = {}
	    , patterns = []
	    , patternsHash = {}
	    , defaults = []
	    , defaultsHash = {}
	    , customRules = [];

	  root = root || { schema: schema, refVal: refVal, refs: refs };

	  var c = checkCompiling.call(this, schema, root, baseId);
	  var compilation = this._compilations[c.index];
	  if (c.compiling) return (compilation.callValidate = callValidate);

	  var formats = this._formats;
	  var RULES = this.RULES;

	  try {
	    var v = localCompile(schema, root, localRefs, baseId);
	    compilation.validate = v;
	    var cv = compilation.callValidate;
	    if (cv) {
	      cv.schema = v.schema;
	      cv.errors = null;
	      cv.refs = v.refs;
	      cv.refVal = v.refVal;
	      cv.root = v.root;
	      cv.$async = v.$async;
	      if (opts.sourceCode) cv.source = v.source;
	    }
	    return v;
	  } finally {
	    endCompiling.call(this, schema, root, baseId);
	  }

	  /* @this   {*} - custom context, see passContext option */
	  function callValidate() {
	    /* jshint validthis: true */
	    var validate = compilation.validate;
	    var result = validate.apply(this, arguments);
	    callValidate.errors = validate.errors;
	    return result;
	  }

	  function localCompile(_schema, _root, localRefs, baseId) {
	    var isRoot = !_root || (_root && _root.schema == _schema);
	    if (_root.schema != root.schema)
	      return compile.call(self, _schema, _root, localRefs, baseId);

	    var $async = _schema.$async === true;

	    var sourceCode = validate({
	      isTop: true,
	      schema: _schema,
	      isRoot: isRoot,
	      baseId: baseId,
	      root: _root,
	      schemaPath: '',
	      errSchemaPath: '#',
	      errorPath: '""',
	      MissingRefError: error_classes.MissingRef,
	      RULES: RULES,
	      validate: validate,
	      util: util,
	      resolve: resolve_1,
	      resolveRef: resolveRef,
	      usePattern: usePattern,
	      useDefault: useDefault,
	      useCustomRule: useCustomRule,
	      opts: opts,
	      formats: formats,
	      logger: self.logger,
	      self: self
	    });

	    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
	                   + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
	                   + sourceCode;

	    if (opts.processCode) sourceCode = opts.processCode(sourceCode);
	    // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
	    var validate$1;
	    try {
	      var makeValidate = new Function(
	        'self',
	        'RULES',
	        'formats',
	        'root',
	        'refVal',
	        'defaults',
	        'customRules',
	        'equal',
	        'ucs2length',
	        'ValidationError',
	        sourceCode
	      );

	      validate$1 = makeValidate(
	        self,
	        RULES,
	        formats,
	        root,
	        refVal,
	        defaults,
	        customRules,
	        fastDeepEqual,
	        ucs2length$1,
	        ValidationError$1
	      );

	      refVal[0] = validate$1;
	    } catch(e) {
	      self.logger.error('Error compiling schema, function code:', sourceCode);
	      throw e;
	    }

	    validate$1.schema = _schema;
	    validate$1.errors = null;
	    validate$1.refs = refs;
	    validate$1.refVal = refVal;
	    validate$1.root = isRoot ? validate$1 : _root;
	    if ($async) validate$1.$async = true;
	    if (opts.sourceCode === true) {
	      validate$1.source = {
	        code: sourceCode,
	        patterns: patterns,
	        defaults: defaults
	      };
	    }

	    return validate$1;
	  }

	  function resolveRef(baseId, ref, isRoot) {
	    ref = resolve_1.url(baseId, ref);
	    var refIndex = refs[ref];
	    var _refVal, refCode;
	    if (refIndex !== undefined) {
	      _refVal = refVal[refIndex];
	      refCode = 'refVal[' + refIndex + ']';
	      return resolvedRef(_refVal, refCode);
	    }
	    if (!isRoot && root.refs) {
	      var rootRefId = root.refs[ref];
	      if (rootRefId !== undefined) {
	        _refVal = root.refVal[rootRefId];
	        refCode = addLocalRef(ref, _refVal);
	        return resolvedRef(_refVal, refCode);
	      }
	    }

	    refCode = addLocalRef(ref);
	    var v = resolve_1.call(self, localCompile, root, ref);
	    if (v === undefined) {
	      var localSchema = localRefs && localRefs[ref];
	      if (localSchema) {
	        v = resolve_1.inlineRef(localSchema, opts.inlineRefs)
	            ? localSchema
	            : compile.call(self, localSchema, root, localRefs, baseId);
	      }
	    }

	    if (v === undefined) {
	      removeLocalRef(ref);
	    } else {
	      replaceLocalRef(ref, v);
	      return resolvedRef(v, refCode);
	    }
	  }

	  function addLocalRef(ref, v) {
	    var refId = refVal.length;
	    refVal[refId] = v;
	    refs[ref] = refId;
	    return 'refVal' + refId;
	  }

	  function removeLocalRef(ref) {
	    delete refs[ref];
	  }

	  function replaceLocalRef(ref, v) {
	    var refId = refs[ref];
	    refVal[refId] = v;
	  }

	  function resolvedRef(refVal, code) {
	    return typeof refVal == 'object' || typeof refVal == 'boolean'
	            ? { code: code, schema: refVal, inline: true }
	            : { code: code, $async: refVal && !!refVal.$async };
	  }

	  function usePattern(regexStr) {
	    var index = patternsHash[regexStr];
	    if (index === undefined) {
	      index = patternsHash[regexStr] = patterns.length;
	      patterns[index] = regexStr;
	    }
	    return 'pattern' + index;
	  }

	  function useDefault(value) {
	    switch (typeof value) {
	      case 'boolean':
	      case 'number':
	        return '' + value;
	      case 'string':
	        return util.toQuotedString(value);
	      case 'object':
	        if (value === null) return 'null';
	        var valueStr = fastJsonStableStringify(value);
	        var index = defaultsHash[valueStr];
	        if (index === undefined) {
	          index = defaultsHash[valueStr] = defaults.length;
	          defaults[index] = value;
	        }
	        return 'default' + index;
	    }
	  }

	  function useCustomRule(rule, schema, parentSchema, it) {
	    if (self._opts.validateSchema !== false) {
	      var deps = rule.definition.dependencies;
	      if (deps && !deps.every(function(keyword) {
	        return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
	      }))
	        throw new Error('parent schema must have all required keywords: ' + deps.join(','));

	      var validateSchema = rule.definition.validateSchema;
	      if (validateSchema) {
	        var valid = validateSchema(schema);
	        if (!valid) {
	          var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
	          if (self._opts.validateSchema == 'log') self.logger.error(message);
	          else throw new Error(message);
	        }
	      }
	    }

	    var compile = rule.definition.compile
	      , inline = rule.definition.inline
	      , macro = rule.definition.macro;

	    var validate;
	    if (compile) {
	      validate = compile.call(self, schema, parentSchema, it);
	    } else if (macro) {
	      validate = macro.call(self, schema, parentSchema, it);
	      if (opts.validateSchema !== false) self.validateSchema(validate, true);
	    } else if (inline) {
	      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
	    } else {
	      validate = rule.definition.validate;
	      if (!validate) return;
	    }

	    if (validate === undefined)
	      throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

	    var index = customRules.length;
	    customRules[index] = validate;

	    return {
	      code: 'customRule' + index,
	      validate: validate
	    };
	  }
	}


	/**
	 * Checks if the schema is currently compiled
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
	 */
	function checkCompiling(schema, root, baseId) {
	  /* jshint validthis: true */
	  var index = compIndex.call(this, schema, root, baseId);
	  if (index >= 0) return { index: index, compiling: true };
	  index = this._compilations.length;
	  this._compilations[index] = {
	    schema: schema,
	    root: root,
	    baseId: baseId
	  };
	  return { index: index, compiling: false };
	}


	/**
	 * Removes the schema from the currently compiled list
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 */
	function endCompiling(schema, root, baseId) {
	  /* jshint validthis: true */
	  var i = compIndex.call(this, schema, root, baseId);
	  if (i >= 0) this._compilations.splice(i, 1);
	}


	/**
	 * Index of schema compilation in the currently compiled list
	 * @this   Ajv
	 * @param  {Object} schema schema to compile
	 * @param  {Object} root root object
	 * @param  {String} baseId base schema ID
	 * @return {Integer} compilation index
	 */
	function compIndex(schema, root, baseId) {
	  /* jshint validthis: true */
	  for (var i=0; i<this._compilations.length; i++) {
	    var c = this._compilations[i];
	    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
	  }
	  return -1;
	}


	function patternCode(i, patterns) {
	  return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
	}


	function defaultCode(i) {
	  return 'var default' + i + ' = defaults[' + i + '];';
	}


	function refValCode(i, refVal) {
	  return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
	}


	function customRuleCode(i) {
	  return 'var customRule' + i + ' = customRules[' + i + '];';
	}


	function vars(arr, statement) {
	  if (!arr.length) return '';
	  var code = '';
	  for (var i=0; i<arr.length; i++)
	    code += statement(i, arr);
	  return code;
	}

	var cache = createCommonjsModule(function (module) {


	var Cache = module.exports = function Cache() {
	  this._cache = {};
	};


	Cache.prototype.put = function Cache_put(key, value) {
	  this._cache[key] = value;
	};


	Cache.prototype.get = function Cache_get(key) {
	  return this._cache[key];
	};


	Cache.prototype.del = function Cache_del(key) {
	  delete this._cache[key];
	};


	Cache.prototype.clear = function Cache_clear() {
	  this._cache = {};
	};
	});

	var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
	var DAYS = [0,31,28,31,30,31,30,31,31,30,31,30,31];
	var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
	var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
	var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	// uri-template: https://tools.ietf.org/html/rfc6570
	var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
	// For the source: https://gist.github.com/dperini/729294
	// For test cases: https://mathiasbynens.be/demo/url-regex
	// @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
	// var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
	var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
	var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
	var JSON_POINTER$1 = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
	var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
	var RELATIVE_JSON_POINTER$1 = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


	var formats_1 = formats;

	function formats(mode) {
	  mode = mode == 'full' ? 'full' : 'fast';
	  return util.copy(formats[mode]);
	}


	formats.fast = {
	  // date: http://tools.ietf.org/html/rfc3339#section-5.6
	  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
	  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
	  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
	  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
	  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
	  uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
	  'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
	  'uri-template': URITEMPLATE,
	  url: URL,
	  // email (sources from jsen validator):
	  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
	  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
	  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
	  hostname: HOSTNAME,
	  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
	  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
	  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
	  regex: regex,
	  // uuid: http://tools.ietf.org/html/rfc4122
	  uuid: UUID,
	  // JSON-pointer: https://tools.ietf.org/html/rfc6901
	  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
	  'json-pointer': JSON_POINTER$1,
	  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
	  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
	  'relative-json-pointer': RELATIVE_JSON_POINTER$1
	};


	formats.full = {
	  date: date,
	  time: time,
	  'date-time': date_time,
	  uri: uri,
	  'uri-reference': URIREF,
	  'uri-template': URITEMPLATE,
	  url: URL,
	  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
	  hostname: HOSTNAME,
	  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
	  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
	  regex: regex,
	  uuid: UUID,
	  'json-pointer': JSON_POINTER$1,
	  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
	  'relative-json-pointer': RELATIVE_JSON_POINTER$1
	};


	function isLeapYear(year) {
	  // https://tools.ietf.org/html/rfc3339#appendix-C
	  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	}


	function date(str) {
	  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
	  var matches = str.match(DATE);
	  if (!matches) return false;

	  var year = +matches[1];
	  var month = +matches[2];
	  var day = +matches[3];

	  return month >= 1 && month <= 12 && day >= 1 &&
	          day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
	}


	function time(str, full) {
	  var matches = str.match(TIME);
	  if (!matches) return false;

	  var hour = matches[1];
	  var minute = matches[2];
	  var second = matches[3];
	  var timeZone = matches[5];
	  return ((hour <= 23 && minute <= 59 && second <= 59) ||
	          (hour == 23 && minute == 59 && second == 60)) &&
	         (!full || timeZone);
	}


	var DATE_TIME_SEPARATOR = /t|\s/i;
	function date_time(str) {
	  // http://tools.ietf.org/html/rfc3339#section-5.6
	  var dateTime = str.split(DATE_TIME_SEPARATOR);
	  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
	}


	var NOT_URI_FRAGMENT = /\/|:/;
	function uri(str) {
	  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
	  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
	}


	var Z_ANCHOR = /[^\\]\\Z/;
	function regex(str) {
	  if (Z_ANCHOR.test(str)) return false;
	  try {
	    new RegExp(str);
	    return true;
	  } catch(e) {
	    return false;
	  }
	}

	var ref = function generate_ref(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $async, $refCode;
	  if ($schema == '#' || $schema == '#/') {
	    if (it.isRoot) {
	      $async = it.async;
	      $refCode = 'validate';
	    } else {
	      $async = it.root.schema.$async === true;
	      $refCode = 'root.refVal[0]';
	    }
	  } else {
	    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
	    if ($refVal === undefined) {
	      var $message = it.MissingRefError.message(it.baseId, $schema);
	      if (it.opts.missingRefs == 'fail') {
	        it.logger.error($message);
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        if ($breakOnError) {
	          out += ' if (false) { ';
	        }
	      } else if (it.opts.missingRefs == 'ignore') {
	        it.logger.warn($message);
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	      } else {
	        throw new it.MissingRefError(it.baseId, $schema, $message);
	      }
	    } else if ($refVal.inline) {
	      var $it = it.util.copy(it);
	      $it.level++;
	      var $nextValid = 'valid' + $it.level;
	      $it.schema = $refVal.schema;
	      $it.schemaPath = '';
	      $it.errSchemaPath = $schema;
	      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
	      out += ' ' + ($code) + ' ';
	      if ($breakOnError) {
	        out += ' if (' + ($nextValid) + ') { ';
	      }
	    } else {
	      $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
	      $refCode = $refVal.code;
	    }
	  }
	  if ($refCode) {
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    if (it.opts.passContext) {
	      out += ' ' + ($refCode) + '.call(this, ';
	    } else {
	      out += ' ' + ($refCode) + '( ';
	    }
	    out += ' ' + ($data) + ', (dataPath || \'\')';
	    if (it.errorPath != '""') {
	      out += ' + ' + (it.errorPath);
	    }
	    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
	      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
	    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
	    var __callValidate = out;
	    out = $$outStack.pop();
	    if ($async) {
	      if (!it.async) throw new Error('async schema referenced by sync schema');
	      if ($breakOnError) {
	        out += ' var ' + ($valid) + '; ';
	      }
	      out += ' try { await ' + (__callValidate) + '; ';
	      if ($breakOnError) {
	        out += ' ' + ($valid) + ' = true; ';
	      }
	      out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
	      if ($breakOnError) {
	        out += ' ' + ($valid) + ' = false; ';
	      }
	      out += ' } ';
	      if ($breakOnError) {
	        out += ' if (' + ($valid) + ') { ';
	      }
	    } else {
	      out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
	      if ($breakOnError) {
	        out += ' else { ';
	      }
	    }
	  }
	  return out;
	};

	var allOf = function generate_allOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $currentBaseId = $it.baseId,
	    $allSchemasEmpty = true;
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $i = -1,
	      l1 = arr1.length - 1;
	    while ($i < l1) {
	      $sch = arr1[$i += 1];
	      if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
	        $allSchemasEmpty = false;
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        if ($breakOnError) {
	          out += ' if (' + ($nextValid) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    if ($allSchemasEmpty) {
	      out += ' if (true) { ';
	    } else {
	      out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
	    }
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	};

	var anyOf = function generate_anyOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $noEmptySchema = $schema.every(function($sch) {
	    return (it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all));
	  });
	  if ($noEmptySchema) {
	    var $currentBaseId = $it.baseId;
	    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var arr1 = $schema;
	    if (arr1) {
	      var $sch, $i = -1,
	        l1 = arr1.length - 1;
	      while ($i < l1) {
	        $sch = arr1[$i += 1];
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	        out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should match some schema in anyOf\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false; ';
	      }
	    }
	    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	    if (it.opts.allErrors) {
	      out += ' } ';
	    }
	    out = it.util.cleanUpCode(out);
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	};

	var comment = function generate_comment(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $schema = it.schema[$keyword];
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $comment = it.util.toQuotedString($schema);
	  if (it.opts.$comment === true) {
	    out += ' console.log(' + ($comment) + ');';
	  } else if (typeof it.opts.$comment == 'function') {
	    out += ' self._opts.$comment(' + ($comment) + ', ' + (it.util.toQuotedString($errSchemaPath)) + ', validate.root.schema);';
	  }
	  return out;
	};

	var _const = function generate_const(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	  }
	  if (!$isData) {
	    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
	  }
	  out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValue: schema' + ($lvl) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be equal to constant\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' }';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var contains = function generate_contains(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $idx = 'i' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $currentBaseId = it.baseId,
	    $nonEmptySchema = (it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all));
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if ($nonEmptySchema) {
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
	    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
	    var $passData = $data + '[' + $idx + ']';
	    $it.dataPathArr[$dataNxt] = $idx;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    out += ' if (' + ($nextValid) + ') break; }  ';
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
	  } else {
	    out += ' if (' + ($data) + '.length == 0) {';
	  }
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should contain a valid item\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } else { ';
	  if ($nonEmptySchema) {
	    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	  }
	  if (it.opts.allErrors) {
	    out += ' } ';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	};

	var dependencies = function generate_dependencies(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $schemaDeps = {},
	    $propertyDeps = {},
	    $ownProperties = it.opts.ownProperties;
	  for ($property in $schema) {
	    var $sch = $schema[$property];
	    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
	    $deps[$property] = $sch;
	  }
	  out += 'var ' + ($errs) + ' = errors;';
	  var $currentErrorPath = it.errorPath;
	  out += 'var missing' + ($lvl) + ';';
	  for (var $property in $propertyDeps) {
	    $deps = $propertyDeps[$property];
	    if ($deps.length) {
	      out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
	      if ($ownProperties) {
	        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
	      }
	      if ($breakOnError) {
	        out += ' && ( ';
	        var arr1 = $deps;
	        if (arr1) {
	          var $propertyKey, $i = -1,
	            l1 = arr1.length - 1;
	          while ($i < l1) {
	            $propertyKey = arr1[$i += 1];
	            if ($i) {
	              out += ' || ';
	            }
	            var $prop = it.util.getProperty($propertyKey),
	              $useData = $data + $prop;
	            out += ' ( ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
	          }
	        }
	        out += ')) {  ';
	        var $propertyPath = 'missing' + $lvl,
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
	        }
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'should have ';
	            if ($deps.length == 1) {
	              out += 'property ' + (it.util.escapeQuotes($deps[0]));
	            } else {
	              out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
	            }
	            out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	      } else {
	        out += ' ) { ';
	        var arr2 = $deps;
	        if (arr2) {
	          var $propertyKey, i2 = -1,
	            l2 = arr2.length - 1;
	          while (i2 < l2) {
	            $propertyKey = arr2[i2 += 1];
	            var $prop = it.util.getProperty($propertyKey),
	              $missingProperty = it.util.escapeQuotes($propertyKey),
	              $useData = $data + $prop;
	            if (it.opts._errorDataPathProperty) {
	              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	            }
	            out += ' if ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') {  var err =   '; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'should have ';
	                if ($deps.length == 1) {
	                  out += 'property ' + (it.util.escapeQuotes($deps[0]));
	                } else {
	                  out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
	                }
	                out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
	          }
	        }
	      }
	      out += ' }   ';
	      if ($breakOnError) {
	        $closingBraces += '}';
	        out += ' else { ';
	      }
	    }
	  }
	  it.errorPath = $currentErrorPath;
	  var $currentBaseId = $it.baseId;
	  for (var $property in $schemaDeps) {
	    var $sch = $schemaDeps[$property];
	    if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
	      out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
	      if ($ownProperties) {
	        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
	      }
	      out += ') { ';
	      $it.schema = $sch;
	      $it.schemaPath = $schemaPath + it.util.getProperty($property);
	      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' }  ';
	      if ($breakOnError) {
	        out += ' if (' + ($nextValid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	};

	var _enum = function generate_enum(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	  }
	  var $i = 'i' + $lvl,
	    $vSchema = 'schema' + $lvl;
	  if (!$isData) {
	    out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
	  }
	  out += 'var ' + ($valid) + ';';
	  if ($isData) {
	    out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
	  }
	  out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
	  if ($isData) {
	    out += '  }  ';
	  }
	  out += ' if (!' + ($valid) + ') {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be equal to one of the allowed values\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' }';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var format = function generate_format(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  if (it.opts.format === false) {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	    return out;
	  }
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $unknownFormats = it.opts.unknownFormats,
	    $allowUnknown = Array.isArray($unknownFormats);
	  if ($isData) {
	    var $format = 'format' + $lvl,
	      $isObject = 'isObject' + $lvl,
	      $formatType = 'formatType' + $lvl;
	    out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
	    if (it.async) {
	      out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
	    }
	    out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
	    }
	    out += ' (';
	    if ($unknownFormats != 'ignore') {
	      out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
	      if ($allowUnknown) {
	        out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
	      }
	      out += ') || ';
	    }
	    out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
	    if (it.async) {
	      out += ' (async' + ($lvl) + ' ? await ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
	    } else {
	      out += ' ' + ($format) + '(' + ($data) + ') ';
	    }
	    out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
	  } else {
	    var $format = it.formats[$schema];
	    if (!$format) {
	      if ($unknownFormats == 'ignore') {
	        it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	        return out;
	      } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
	        if ($breakOnError) {
	          out += ' if (true) { ';
	        }
	        return out;
	      } else {
	        throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
	      }
	    }
	    var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
	    var $formatType = $isObject && $format.type || 'string';
	    if ($isObject) {
	      var $async = $format.async === true;
	      $format = $format.validate;
	    }
	    if ($formatType != $ruleType) {
	      if ($breakOnError) {
	        out += ' if (true) { ';
	      }
	      return out;
	    }
	    if ($async) {
	      if (!it.async) throw new Error('async format in sync schema');
	      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
	      out += ' if (!(await ' + ($formatRef) + '(' + ($data) + '))) { ';
	    } else {
	      out += ' if (! ';
	      var $formatRef = 'formats' + it.util.getProperty($schema);
	      if ($isObject) $formatRef += '.validate';
	      if (typeof $format == 'function') {
	        out += ' ' + ($formatRef) + '(' + ($data) + ') ';
	      } else {
	        out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
	      }
	      out += ') { ';
	    }
	  }
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += '  } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match format "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _if = function generate_if(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $thenSch = it.schema['then'],
	    $elseSch = it.schema['else'],
	    $thenPresent = $thenSch !== undefined && (it.opts.strictKeywords ? typeof $thenSch == 'object' && Object.keys($thenSch).length > 0 : it.util.schemaHasRules($thenSch, it.RULES.all)),
	    $elsePresent = $elseSch !== undefined && (it.opts.strictKeywords ? typeof $elseSch == 'object' && Object.keys($elseSch).length > 0 : it.util.schemaHasRules($elseSch, it.RULES.all)),
	    $currentBaseId = $it.baseId;
	  if ($thenPresent || $elsePresent) {
	    var $ifClause;
	    $it.createErrors = false;
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = true;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    out += '  ' + (it.validate($it)) + ' ';
	    $it.baseId = $currentBaseId;
	    $it.createErrors = true;
	    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }  ';
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    if ($thenPresent) {
	      out += ' if (' + ($nextValid) + ') {  ';
	      $it.schema = it.schema['then'];
	      $it.schemaPath = it.schemaPath + '.then';
	      $it.errSchemaPath = it.errSchemaPath + '/then';
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
	      if ($thenPresent && $elsePresent) {
	        $ifClause = 'ifClause' + $lvl;
	        out += ' var ' + ($ifClause) + ' = \'then\'; ';
	      } else {
	        $ifClause = '\'then\'';
	      }
	      out += ' } ';
	      if ($elsePresent) {
	        out += ' else { ';
	      }
	    } else {
	      out += ' if (!' + ($nextValid) + ') { ';
	    }
	    if ($elsePresent) {
	      $it.schema = it.schema['else'];
	      $it.schemaPath = it.schemaPath + '.else';
	      $it.errSchemaPath = it.errSchemaPath + '/else';
	      out += '  ' + (it.validate($it)) + ' ';
	      $it.baseId = $currentBaseId;
	      out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
	      if ($thenPresent && $elsePresent) {
	        $ifClause = 'ifClause' + $lvl;
	        out += ' var ' + ($ifClause) + ' = \'else\'; ';
	      } else {
	        $ifClause = '\'else\'';
	      }
	      out += ' } ';
	    }
	    out += ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('if') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { failingKeyword: ' + ($ifClause) + ' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should match "\' + ' + ($ifClause) + ' + \'" schema\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false; ';
	      }
	    }
	    out += ' }   ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	    out = it.util.cleanUpCode(out);
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	};

	var items = function generate_items(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $idx = 'i' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $currentBaseId = it.baseId;
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if (Array.isArray($schema)) {
	    var $additionalItems = it.schema.additionalItems;
	    if ($additionalItems === false) {
	      out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
	      var $currErrSchemaPath = $errSchemaPath;
	      $errSchemaPath = it.errSchemaPath + '/additionalItems';
	      out += '  if (!' + ($valid) + ') {   ';
	      var $$outStack = $$outStack || [];
	      $$outStack.push(out);
	      out = ''; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      var __err = out;
	      out = $$outStack.pop();
	      if (!it.compositeRule && $breakOnError) {
	        /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError([' + (__err) + ']); ';
	        } else {
	          out += ' validate.errors = [' + (__err) + ']; return false; ';
	        }
	      } else {
	        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      }
	      out += ' } ';
	      $errSchemaPath = $currErrSchemaPath;
	      if ($breakOnError) {
	        $closingBraces += '}';
	        out += ' else { ';
	      }
	    }
	    var arr1 = $schema;
	    if (arr1) {
	      var $sch, $i = -1,
	        l1 = arr1.length - 1;
	      while ($i < l1) {
	        $sch = arr1[$i += 1];
	        if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
	          out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
	          var $passData = $data + '[' + $i + ']';
	          $it.schema = $sch;
	          $it.schemaPath = $schemaPath + '[' + $i + ']';
	          $it.errSchemaPath = $errSchemaPath + '/' + $i;
	          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
	          $it.dataPathArr[$dataNxt] = $i;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          out += ' }  ';
	          if ($breakOnError) {
	            out += ' if (' + ($nextValid) + ') { ';
	            $closingBraces += '}';
	          }
	        }
	      }
	    }
	    if (typeof $additionalItems == 'object' && (it.opts.strictKeywords ? typeof $additionalItems == 'object' && Object.keys($additionalItems).length > 0 : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
	      $it.schema = $additionalItems;
	      $it.schemaPath = it.schemaPath + '.additionalItems';
	      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
	      out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
	      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
	      var $passData = $data + '[' + $idx + ']';
	      $it.dataPathArr[$dataNxt] = $idx;
	      var $code = it.validate($it);
	      $it.baseId = $currentBaseId;
	      if (it.util.varOccurences($code, $nextData) < 2) {
	        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	      } else {
	        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	      }
	      if ($breakOnError) {
	        out += ' if (!' + ($nextValid) + ') break; ';
	      }
	      out += ' } }  ';
	      if ($breakOnError) {
	        out += ' if (' + ($nextValid) + ') { ';
	        $closingBraces += '}';
	      }
	    }
	  } else if ((it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all))) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
	    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
	    var $passData = $data + '[' + $idx + ']';
	    $it.dataPathArr[$dataNxt] = $idx;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    if ($breakOnError) {
	      out += ' if (!' + ($nextValid) + ') break; ';
	    }
	    out += ' }';
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	};

	var _limit = function generate__limit(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $isMax = $keyword == 'maximum',
	    $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
	    $schemaExcl = it.schema[$exclusiveKeyword],
	    $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
	    $op = $isMax ? '<' : '>',
	    $notOp = $isMax ? '>' : '<',
	    $errorKeyword = undefined;
	  if ($isDataExcl) {
	    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
	      $exclusive = 'exclusive' + $lvl,
	      $exclType = 'exclType' + $lvl,
	      $exclIsNumber = 'exclIsNumber' + $lvl,
	      $opExpr = 'op' + $lvl,
	      $opStr = '\' + ' + $opExpr + ' + \'';
	    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
	    $schemaValueExcl = 'schemaExcl' + $lvl;
	    out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
	    var $errorKeyword = $exclusiveKeyword;
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } else if ( ';
	    if ($isData) {
	      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	    }
	    out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\'; ';
	    if ($schema === undefined) {
	      $errorKeyword = $exclusiveKeyword;
	      $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
	      $schemaValue = $schemaValueExcl;
	      $isData = $isDataExcl;
	    }
	  } else {
	    var $exclIsNumber = typeof $schemaExcl == 'number',
	      $opStr = $op;
	    if ($exclIsNumber && $isData) {
	      var $opExpr = '\'' + $opStr + '\'';
	      out += ' if ( ';
	      if ($isData) {
	        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	      }
	      out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
	    } else {
	      if ($exclIsNumber && $schema === undefined) {
	        $exclusive = true;
	        $errorKeyword = $exclusiveKeyword;
	        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
	        $schemaValue = $schemaExcl;
	        $notOp += '=';
	      } else {
	        if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
	        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
	          $exclusive = true;
	          $errorKeyword = $exclusiveKeyword;
	          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
	          $notOp += '=';
	        } else {
	          $exclusive = false;
	          $opStr += '=';
	        }
	      }
	      var $opExpr = '\'' + $opStr + '\'';
	      out += ' if ( ';
	      if ($isData) {
	        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	      }
	      out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
	    }
	  }
	  $errorKeyword = $errorKeyword || $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be ' + ($opStr) + ' ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue);
	      } else {
	        out += '' + ($schemaValue) + '\'';
	      }
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += ' } ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _limitItems = function generate__limitItems(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $op = $keyword == 'maxItems' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT have ';
	      if ($keyword == 'maxItems') {
	        out += 'more';
	      } else {
	        out += 'fewer';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' items\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _limitLength = function generate__limitLength(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $op = $keyword == 'maxLength' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  if (it.opts.unicode === false) {
	    out += ' ' + ($data) + '.length ';
	  } else {
	    out += ' ucs2length(' + ($data) + ') ';
	  }
	  out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT be ';
	      if ($keyword == 'maxLength') {
	        out += 'longer';
	      } else {
	        out += 'shorter';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' characters\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var _limitProperties = function generate__limitProperties(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $op = $keyword == 'maxProperties' ? '>' : '<';
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
	  }
	  out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
	  var $errorKeyword = $keyword;
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should NOT have ';
	      if ($keyword == 'maxProperties') {
	        out += 'more';
	      } else {
	        out += 'fewer';
	      }
	      out += ' than ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + ($schema);
	      }
	      out += ' properties\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var multipleOf = function generate_multipleOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  out += 'var division' + ($lvl) + ';if (';
	  if ($isData) {
	    out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
	  }
	  out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
	  if (it.opts.multipleOfPrecision) {
	    out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
	  } else {
	    out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
	  }
	  out += ' ) ';
	  if ($isData) {
	    out += '  )  ';
	  }
	  out += ' ) {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should be multiple of ';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue);
	      } else {
	        out += '' + ($schemaValue) + '\'';
	      }
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + ($schema);
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var not = function generate_not(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  if ((it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all))) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    out += ' var ' + ($errs) + ' = errors;  ';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    $it.createErrors = false;
	    var $allErrorsOption;
	    if ($it.opts.allErrors) {
	      $allErrorsOption = $it.opts.allErrors;
	      $it.opts.allErrors = false;
	    }
	    out += ' ' + (it.validate($it)) + ' ';
	    $it.createErrors = true;
	    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' if (' + ($nextValid) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT be valid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
	    if (it.opts.allErrors) {
	      out += ' } ';
	    }
	  } else {
	    out += '  var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT be valid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if ($breakOnError) {
	      out += ' if (false) { ';
	    }
	  }
	  return out;
	};

	var oneOf = function generate_oneOf(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $currentBaseId = $it.baseId,
	    $prevValid = 'prevValid' + $lvl,
	    $passingSchemas = 'passingSchemas' + $lvl;
	  out += 'var ' + ($errs) + ' = errors , ' + ($prevValid) + ' = false , ' + ($valid) + ' = false , ' + ($passingSchemas) + ' = null; ';
	  var $wasComposite = it.compositeRule;
	  it.compositeRule = $it.compositeRule = true;
	  var arr1 = $schema;
	  if (arr1) {
	    var $sch, $i = -1,
	      l1 = arr1.length - 1;
	    while ($i < l1) {
	      $sch = arr1[$i += 1];
	      if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
	        $it.schema = $sch;
	        $it.schemaPath = $schemaPath + '[' + $i + ']';
	        $it.errSchemaPath = $errSchemaPath + '/' + $i;
	        out += '  ' + (it.validate($it)) + ' ';
	        $it.baseId = $currentBaseId;
	      } else {
	        out += ' var ' + ($nextValid) + ' = true; ';
	      }
	      if ($i) {
	        out += ' if (' + ($nextValid) + ' && ' + ($prevValid) + ') { ' + ($valid) + ' = false; ' + ($passingSchemas) + ' = [' + ($passingSchemas) + ', ' + ($i) + ']; } else { ';
	        $closingBraces += '}';
	      }
	      out += ' if (' + ($nextValid) + ') { ' + ($valid) + ' = ' + ($prevValid) + ' = true; ' + ($passingSchemas) + ' = ' + ($i) + '; }';
	    }
	  }
	  it.compositeRule = $it.compositeRule = $wasComposite;
	  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { passingSchemas: ' + ($passingSchemas) + ' } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match exactly one schema in oneOf\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError(vErrors); ';
	    } else {
	      out += ' validate.errors = vErrors; return false; ';
	    }
	  }
	  out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
	  if (it.opts.allErrors) {
	    out += ' } ';
	  }
	  return out;
	};

	var pattern = function generate_pattern(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
	  out += 'if ( ';
	  if ($isData) {
	    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
	  }
	  out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
	  var $$outStack = $$outStack || [];
	  $$outStack.push(out);
	  out = ''; /* istanbul ignore else */
	  if (it.createErrors !== false) {
	    out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
	    if ($isData) {
	      out += '' + ($schemaValue);
	    } else {
	      out += '' + (it.util.toQuotedString($schema));
	    }
	    out += '  } ';
	    if (it.opts.messages !== false) {
	      out += ' , message: \'should match pattern "';
	      if ($isData) {
	        out += '\' + ' + ($schemaValue) + ' + \'';
	      } else {
	        out += '' + (it.util.escapeQuotes($schema));
	      }
	      out += '"\' ';
	    }
	    if (it.opts.verbose) {
	      out += ' , schema:  ';
	      if ($isData) {
	        out += 'validate.schema' + ($schemaPath);
	      } else {
	        out += '' + (it.util.toQuotedString($schema));
	      }
	      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	    }
	    out += ' } ';
	  } else {
	    out += ' {} ';
	  }
	  var __err = out;
	  out = $$outStack.pop();
	  if (!it.compositeRule && $breakOnError) {
	    /* istanbul ignore if */
	    if (it.async) {
	      out += ' throw new ValidationError([' + (__err) + ']); ';
	    } else {
	      out += ' validate.errors = [' + (__err) + ']; return false; ';
	    }
	  } else {
	    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	  }
	  out += '} ';
	  if ($breakOnError) {
	    out += ' else { ';
	  }
	  return out;
	};

	var properties = function generate_properties(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  var $key = 'key' + $lvl,
	    $idx = 'idx' + $lvl,
	    $dataNxt = $it.dataLevel = it.dataLevel + 1,
	    $nextData = 'data' + $dataNxt,
	    $dataProperties = 'dataProperties' + $lvl;
	  var $schemaKeys = Object.keys($schema || {}),
	    $pProperties = it.schema.patternProperties || {},
	    $pPropertyKeys = Object.keys($pProperties),
	    $aProperties = it.schema.additionalProperties,
	    $someProperties = $schemaKeys.length || $pPropertyKeys.length,
	    $noAdditional = $aProperties === false,
	    $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
	    $removeAdditional = it.opts.removeAdditional,
	    $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
	    $ownProperties = it.opts.ownProperties,
	    $currentBaseId = it.baseId;
	  var $required = it.schema.required;
	  if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
	  out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
	  if ($ownProperties) {
	    out += ' var ' + ($dataProperties) + ' = undefined;';
	  }
	  if ($checkAdditional) {
	    if ($ownProperties) {
	      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
	    } else {
	      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
	    }
	    if ($someProperties) {
	      out += ' var isAdditional' + ($lvl) + ' = !(false ';
	      if ($schemaKeys.length) {
	        if ($schemaKeys.length > 8) {
	          out += ' || validate.schema' + ($schemaPath) + '.hasOwnProperty(' + ($key) + ') ';
	        } else {
	          var arr1 = $schemaKeys;
	          if (arr1) {
	            var $propertyKey, i1 = -1,
	              l1 = arr1.length - 1;
	            while (i1 < l1) {
	              $propertyKey = arr1[i1 += 1];
	              out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
	            }
	          }
	        }
	      }
	      if ($pPropertyKeys.length) {
	        var arr2 = $pPropertyKeys;
	        if (arr2) {
	          var $pProperty, $i = -1,
	            l2 = arr2.length - 1;
	          while ($i < l2) {
	            $pProperty = arr2[$i += 1];
	            out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
	          }
	        }
	      }
	      out += ' ); if (isAdditional' + ($lvl) + ') { ';
	    }
	    if ($removeAdditional == 'all') {
	      out += ' delete ' + ($data) + '[' + ($key) + ']; ';
	    } else {
	      var $currentErrorPath = it.errorPath;
	      var $additionalProperty = '\' + ' + $key + ' + \'';
	      if (it.opts._errorDataPathProperty) {
	        it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	      }
	      if ($noAdditional) {
	        if ($removeAdditional) {
	          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
	        } else {
	          out += ' ' + ($nextValid) + ' = false; ';
	          var $currErrSchemaPath = $errSchemaPath;
	          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          var $$outStack = $$outStack || [];
	          $$outStack.push(out);
	          out = ''; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'';
	              if (it.opts._errorDataPathProperty) {
	                out += 'is an invalid additional property';
	              } else {
	                out += 'should NOT have additional properties';
	              }
	              out += '\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          var __err = out;
	          out = $$outStack.pop();
	          if (!it.compositeRule && $breakOnError) {
	            /* istanbul ignore if */
	            if (it.async) {
	              out += ' throw new ValidationError([' + (__err) + ']); ';
	            } else {
	              out += ' validate.errors = [' + (__err) + ']; return false; ';
	            }
	          } else {
	            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	          }
	          $errSchemaPath = $currErrSchemaPath;
	          if ($breakOnError) {
	            out += ' break; ';
	          }
	        }
	      } else if ($additionalIsSchema) {
	        if ($removeAdditional == 'failing') {
	          out += ' var ' + ($errs) + ' = errors;  ';
	          var $wasComposite = it.compositeRule;
	          it.compositeRule = $it.compositeRule = true;
	          $it.schema = $aProperties;
	          $it.schemaPath = it.schemaPath + '.additionalProperties';
	          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	          var $passData = $data + '[' + $key + ']';
	          $it.dataPathArr[$dataNxt] = $key;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
	          it.compositeRule = $it.compositeRule = $wasComposite;
	        } else {
	          $it.schema = $aProperties;
	          $it.schemaPath = it.schemaPath + '.additionalProperties';
	          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
	          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	          var $passData = $data + '[' + $key + ']';
	          $it.dataPathArr[$dataNxt] = $key;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          if ($breakOnError) {
	            out += ' if (!' + ($nextValid) + ') break; ';
	          }
	        }
	      }
	      it.errorPath = $currentErrorPath;
	    }
	    if ($someProperties) {
	      out += ' } ';
	    }
	    out += ' }  ';
	    if ($breakOnError) {
	      out += ' if (' + ($nextValid) + ') { ';
	      $closingBraces += '}';
	    }
	  }
	  var $useDefaults = it.opts.useDefaults && !it.compositeRule;
	  if ($schemaKeys.length) {
	    var arr3 = $schemaKeys;
	    if (arr3) {
	      var $propertyKey, i3 = -1,
	        l3 = arr3.length - 1;
	      while (i3 < l3) {
	        $propertyKey = arr3[i3 += 1];
	        var $sch = $schema[$propertyKey];
	        if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
	          var $prop = it.util.getProperty($propertyKey),
	            $passData = $data + $prop,
	            $hasDefault = $useDefaults && $sch.default !== undefined;
	          $it.schema = $sch;
	          $it.schemaPath = $schemaPath + $prop;
	          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
	          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
	          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            $code = it.util.varReplace($code, $nextData, $passData);
	            var $useData = $passData;
	          } else {
	            var $useData = $nextData;
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
	          }
	          if ($hasDefault) {
	            out += ' ' + ($code) + ' ';
	          } else {
	            if ($requiredHash && $requiredHash[$propertyKey]) {
	              out += ' if ( ' + ($useData) + ' === undefined ';
	              if ($ownProperties) {
	                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	              }
	              out += ') { ' + ($nextValid) + ' = false; ';
	              var $currentErrorPath = it.errorPath,
	                $currErrSchemaPath = $errSchemaPath,
	                $missingProperty = it.util.escapeQuotes($propertyKey);
	              if (it.opts._errorDataPathProperty) {
	                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	              }
	              $errSchemaPath = it.errSchemaPath + '/required';
	              var $$outStack = $$outStack || [];
	              $$outStack.push(out);
	              out = ''; /* istanbul ignore else */
	              if (it.createErrors !== false) {
	                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	                if (it.opts.messages !== false) {
	                  out += ' , message: \'';
	                  if (it.opts._errorDataPathProperty) {
	                    out += 'is a required property';
	                  } else {
	                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	                  }
	                  out += '\' ';
	                }
	                if (it.opts.verbose) {
	                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	                }
	                out += ' } ';
	              } else {
	                out += ' {} ';
	              }
	              var __err = out;
	              out = $$outStack.pop();
	              if (!it.compositeRule && $breakOnError) {
	                /* istanbul ignore if */
	                if (it.async) {
	                  out += ' throw new ValidationError([' + (__err) + ']); ';
	                } else {
	                  out += ' validate.errors = [' + (__err) + ']; return false; ';
	                }
	              } else {
	                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	              }
	              $errSchemaPath = $currErrSchemaPath;
	              it.errorPath = $currentErrorPath;
	              out += ' } else { ';
	            } else {
	              if ($breakOnError) {
	                out += ' if ( ' + ($useData) + ' === undefined ';
	                if ($ownProperties) {
	                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	                }
	                out += ') { ' + ($nextValid) + ' = true; } else { ';
	              } else {
	                out += ' if (' + ($useData) + ' !== undefined ';
	                if ($ownProperties) {
	                  out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	                }
	                out += ' ) { ';
	              }
	            }
	            out += ' ' + ($code) + ' } ';
	          }
	        }
	        if ($breakOnError) {
	          out += ' if (' + ($nextValid) + ') { ';
	          $closingBraces += '}';
	        }
	      }
	    }
	  }
	  if ($pPropertyKeys.length) {
	    var arr4 = $pPropertyKeys;
	    if (arr4) {
	      var $pProperty, i4 = -1,
	        l4 = arr4.length - 1;
	      while (i4 < l4) {
	        $pProperty = arr4[i4 += 1];
	        var $sch = $pProperties[$pProperty];
	        if ((it.opts.strictKeywords ? typeof $sch == 'object' && Object.keys($sch).length > 0 : it.util.schemaHasRules($sch, it.RULES.all))) {
	          $it.schema = $sch;
	          $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
	          $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
	          if ($ownProperties) {
	            out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
	          } else {
	            out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
	          }
	          out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
	          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
	          var $passData = $data + '[' + $key + ']';
	          $it.dataPathArr[$dataNxt] = $key;
	          var $code = it.validate($it);
	          $it.baseId = $currentBaseId;
	          if (it.util.varOccurences($code, $nextData) < 2) {
	            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	          } else {
	            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	          }
	          if ($breakOnError) {
	            out += ' if (!' + ($nextValid) + ') break; ';
	          }
	          out += ' } ';
	          if ($breakOnError) {
	            out += ' else ' + ($nextValid) + ' = true; ';
	          }
	          out += ' }  ';
	          if ($breakOnError) {
	            out += ' if (' + ($nextValid) + ') { ';
	            $closingBraces += '}';
	          }
	        }
	      }
	    }
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	};

	var propertyNames = function generate_propertyNames(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $errs = 'errs__' + $lvl;
	  var $it = it.util.copy(it);
	  var $closingBraces = '';
	  $it.level++;
	  var $nextValid = 'valid' + $it.level;
	  out += 'var ' + ($errs) + ' = errors;';
	  if ((it.opts.strictKeywords ? typeof $schema == 'object' && Object.keys($schema).length > 0 : it.util.schemaHasRules($schema, it.RULES.all))) {
	    $it.schema = $schema;
	    $it.schemaPath = $schemaPath;
	    $it.errSchemaPath = $errSchemaPath;
	    var $key = 'key' + $lvl,
	      $idx = 'idx' + $lvl,
	      $i = 'i' + $lvl,
	      $invalidName = '\' + ' + $key + ' + \'',
	      $dataNxt = $it.dataLevel = it.dataLevel + 1,
	      $nextData = 'data' + $dataNxt,
	      $dataProperties = 'dataProperties' + $lvl,
	      $ownProperties = it.opts.ownProperties,
	      $currentBaseId = it.baseId;
	    if ($ownProperties) {
	      out += ' var ' + ($dataProperties) + ' = undefined; ';
	    }
	    if ($ownProperties) {
	      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
	    } else {
	      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
	    }
	    out += ' var startErrs' + ($lvl) + ' = errors; ';
	    var $passData = $key;
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var $code = it.validate($it);
	    $it.baseId = $currentBaseId;
	    if (it.util.varOccurences($code, $nextData) < 2) {
	      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
	    } else {
	      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
	    }
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError(vErrors); ';
	      } else {
	        out += ' validate.errors = vErrors; return false; ';
	      }
	    }
	    if ($breakOnError) {
	      out += ' break; ';
	    }
	    out += ' } }';
	  }
	  if ($breakOnError) {
	    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
	  }
	  out = it.util.cleanUpCode(out);
	  return out;
	};

	var required = function generate_required(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	  }
	  var $vSchema = 'schema' + $lvl;
	  if (!$isData) {
	    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
	      var $required = [];
	      var arr1 = $schema;
	      if (arr1) {
	        var $property, i1 = -1,
	          l1 = arr1.length - 1;
	        while (i1 < l1) {
	          $property = arr1[i1 += 1];
	          var $propertySch = it.schema.properties[$property];
	          if (!($propertySch && (it.opts.strictKeywords ? typeof $propertySch == 'object' && Object.keys($propertySch).length > 0 : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
	            $required[$required.length] = $property;
	          }
	        }
	      }
	    } else {
	      var $required = $schema;
	    }
	  }
	  if ($isData || $required.length) {
	    var $currentErrorPath = it.errorPath,
	      $loopRequired = $isData || $required.length >= it.opts.loopRequired,
	      $ownProperties = it.opts.ownProperties;
	    if ($breakOnError) {
	      out += ' var missing' + ($lvl) + '; ';
	      if ($loopRequired) {
	        if (!$isData) {
	          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
	        }
	        var $i = 'i' + $lvl,
	          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
	        }
	        out += ' var ' + ($valid) + ' = true; ';
	        if ($isData) {
	          out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
	        }
	        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
	        if ($ownProperties) {
	          out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
	        }
	        out += '; if (!' + ($valid) + ') break; } ';
	        if ($isData) {
	          out += '  }  ';
	        }
	        out += '  if (!' + ($valid) + ') {   ';
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else { ';
	      } else {
	        out += ' if ( ';
	        var arr2 = $required;
	        if (arr2) {
	          var $propertyKey, $i = -1,
	            l2 = arr2.length - 1;
	          while ($i < l2) {
	            $propertyKey = arr2[$i += 1];
	            if ($i) {
	              out += ' || ';
	            }
	            var $prop = it.util.getProperty($propertyKey),
	              $useData = $data + $prop;
	            out += ' ( ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
	          }
	        }
	        out += ') {  ';
	        var $propertyPath = 'missing' + $lvl,
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
	        }
	        var $$outStack = $$outStack || [];
	        $$outStack.push(out);
	        out = ''; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        var __err = out;
	        out = $$outStack.pop();
	        if (!it.compositeRule && $breakOnError) {
	          /* istanbul ignore if */
	          if (it.async) {
	            out += ' throw new ValidationError([' + (__err) + ']); ';
	          } else {
	            out += ' validate.errors = [' + (__err) + ']; return false; ';
	          }
	        } else {
	          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	        }
	        out += ' } else { ';
	      }
	    } else {
	      if ($loopRequired) {
	        if (!$isData) {
	          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
	        }
	        var $i = 'i' + $lvl,
	          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
	          $missingProperty = '\' + ' + $propertyPath + ' + \'';
	        if (it.opts._errorDataPathProperty) {
	          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
	        }
	        if ($isData) {
	          out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
	          if (it.createErrors !== false) {
	            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	            if (it.opts.messages !== false) {
	              out += ' , message: \'';
	              if (it.opts._errorDataPathProperty) {
	                out += 'is a required property';
	              } else {
	                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	              }
	              out += '\' ';
	            }
	            if (it.opts.verbose) {
	              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	            }
	            out += ' } ';
	          } else {
	            out += ' {} ';
	          }
	          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
	        }
	        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
	        if ($ownProperties) {
	          out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
	        }
	        out += ') {  var err =   '; /* istanbul ignore else */
	        if (it.createErrors !== false) {
	          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	          if (it.opts.messages !== false) {
	            out += ' , message: \'';
	            if (it.opts._errorDataPathProperty) {
	              out += 'is a required property';
	            } else {
	              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	            }
	            out += '\' ';
	          }
	          if (it.opts.verbose) {
	            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	          }
	          out += ' } ';
	        } else {
	          out += ' {} ';
	        }
	        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
	        if ($isData) {
	          out += '  }  ';
	        }
	      } else {
	        var arr3 = $required;
	        if (arr3) {
	          var $propertyKey, i3 = -1,
	            l3 = arr3.length - 1;
	          while (i3 < l3) {
	            $propertyKey = arr3[i3 += 1];
	            var $prop = it.util.getProperty($propertyKey),
	              $missingProperty = it.util.escapeQuotes($propertyKey),
	              $useData = $data + $prop;
	            if (it.opts._errorDataPathProperty) {
	              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
	            }
	            out += ' if ( ' + ($useData) + ' === undefined ';
	            if ($ownProperties) {
	              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
	            }
	            out += ') {  var err =   '; /* istanbul ignore else */
	            if (it.createErrors !== false) {
	              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
	              if (it.opts.messages !== false) {
	                out += ' , message: \'';
	                if (it.opts._errorDataPathProperty) {
	                  out += 'is a required property';
	                } else {
	                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
	                }
	                out += '\' ';
	              }
	              if (it.opts.verbose) {
	                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	              }
	              out += ' } ';
	            } else {
	              out += ' {} ';
	            }
	            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
	          }
	        }
	      }
	    }
	    it.errorPath = $currentErrorPath;
	  } else if ($breakOnError) {
	    out += ' if (true) {';
	  }
	  return out;
	};

	var uniqueItems = function generate_uniqueItems(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  if (($schema || $isData) && it.opts.uniqueItems !== false) {
	    if ($isData) {
	      out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
	    }
	    out += ' var i = ' + ($data) + '.length , ' + ($valid) + ' = true , j; if (i > 1) { ';
	    var $itemType = it.schema.items && it.schema.items.type,
	      $typeIsArray = Array.isArray($itemType);
	    if (!$itemType || $itemType == 'object' || $itemType == 'array' || ($typeIsArray && ($itemType.indexOf('object') >= 0 || $itemType.indexOf('array') >= 0))) {
	      out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } ';
	    } else {
	      out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + ($data) + '[i]; ';
	      var $method = 'checkDataType' + ($typeIsArray ? 's' : '');
	      out += ' if (' + (it.util[$method]($itemType, 'item', true)) + ') continue; ';
	      if ($typeIsArray) {
	        out += ' if (typeof item == \'string\') item = \'"\' + item; ';
	      }
	      out += ' if (typeof itemIndices[item] == \'number\') { ' + ($valid) + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
	    }
	    out += ' } ';
	    if ($isData) {
	      out += '  }  ';
	    }
	    out += ' if (!' + ($valid) + ') {   ';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema:  ';
	        if ($isData) {
	          out += 'validate.schema' + ($schemaPath);
	        } else {
	          out += '' + ($schema);
	        }
	        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    out += ' } ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	  } else {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  }
	  return out;
	};

	//all requires must be explicit because browserify won't work with dynamic requires
	var dotjs = {
	  '$ref': ref,
	  allOf: allOf,
	  anyOf: anyOf,
	  '$comment': comment,
	  const: _const,
	  contains: contains,
	  dependencies: dependencies,
	  'enum': _enum,
	  format: format,
	  'if': _if,
	  items: items,
	  maximum: _limit,
	  minimum: _limit,
	  maxItems: _limitItems,
	  minItems: _limitItems,
	  maxLength: _limitLength,
	  minLength: _limitLength,
	  maxProperties: _limitProperties,
	  minProperties: _limitProperties,
	  multipleOf: multipleOf,
	  not: not,
	  oneOf: oneOf,
	  pattern: pattern,
	  properties: properties,
	  propertyNames: propertyNames,
	  required: required,
	  uniqueItems: uniqueItems,
	  validate: validate
	};

	var toHash$1 = util.toHash;

	var rules = function rules() {
	  var RULES = [
	    { type: 'number',
	      rules: [ { 'maximum': ['exclusiveMaximum'] },
	               { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
	    { type: 'string',
	      rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
	    { type: 'array',
	      rules: [ 'maxItems', 'minItems', 'items', 'contains', 'uniqueItems' ] },
	    { type: 'object',
	      rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
	               { 'properties': ['additionalProperties', 'patternProperties'] } ] },
	    { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if' ] }
	  ];

	  var ALL = [ 'type', '$comment' ];
	  var KEYWORDS = [
	    '$schema', '$id', 'id', '$data', '$async', 'title',
	    'description', 'default', 'definitions',
	    'examples', 'readOnly', 'writeOnly',
	    'contentMediaType', 'contentEncoding',
	    'additionalItems', 'then', 'else'
	  ];
	  var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
	  RULES.all = toHash$1(ALL);
	  RULES.types = toHash$1(TYPES);

	  RULES.forEach(function (group) {
	    group.rules = group.rules.map(function (keyword) {
	      var implKeywords;
	      if (typeof keyword == 'object') {
	        var key = Object.keys(keyword)[0];
	        implKeywords = keyword[key];
	        keyword = key;
	        implKeywords.forEach(function (k) {
	          ALL.push(k);
	          RULES.all[k] = true;
	        });
	      }
	      ALL.push(keyword);
	      var rule = RULES.all[keyword] = {
	        keyword: keyword,
	        code: dotjs[keyword],
	        implements: implKeywords
	      };
	      return rule;
	    });

	    RULES.all.$comment = {
	      keyword: '$comment',
	      code: dotjs.$comment
	    };

	    if (group.type) RULES.types[group.type] = group;
	  });

	  RULES.keywords = toHash$1(ALL.concat(KEYWORDS));
	  RULES.custom = {};

	  return RULES;
	};

	var KEYWORDS = [
	  'multipleOf',
	  'maximum',
	  'exclusiveMaximum',
	  'minimum',
	  'exclusiveMinimum',
	  'maxLength',
	  'minLength',
	  'pattern',
	  'additionalItems',
	  'maxItems',
	  'minItems',
	  'uniqueItems',
	  'maxProperties',
	  'minProperties',
	  'required',
	  'additionalProperties',
	  'enum',
	  'format',
	  'const'
	];

	var data = function (metaSchema, keywordsJsonPointers) {
	  for (var i=0; i<keywordsJsonPointers.length; i++) {
	    metaSchema = JSON.parse(JSON.stringify(metaSchema));
	    var segments = keywordsJsonPointers[i].split('/');
	    var keywords = metaSchema;
	    var j;
	    for (j=1; j<segments.length; j++)
	      keywords = keywords[segments[j]];

	    for (j=0; j<KEYWORDS.length; j++) {
	      var key = KEYWORDS[j];
	      var schema = keywords[key];
	      if (schema) {
	        keywords[key] = {
	          anyOf: [
	            schema,
	            { $ref: 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#' }
	          ]
	        };
	      }
	    }
	  }

	  return metaSchema;
	};

	var MissingRefError$1 = error_classes.MissingRef;

	var async = compileAsync;


	/**
	 * Creates validating function for passed schema with asynchronous loading of missing schemas.
	 * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
	 * @this  Ajv
	 * @param {Object}   schema schema object
	 * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
	 * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
	 * @return {Promise} promise that resolves with a validating function.
	 */
	function compileAsync(schema, meta, callback) {
	  /* eslint no-shadow: 0 */
	  /* global Promise */
	  /* jshint validthis: true */
	  var self = this;
	  if (typeof this._opts.loadSchema != 'function')
	    throw new Error('options.loadSchema should be a function');

	  if (typeof meta == 'function') {
	    callback = meta;
	    meta = undefined;
	  }

	  var p = loadMetaSchemaOf(schema).then(function () {
	    var schemaObj = self._addSchema(schema, undefined, meta);
	    return schemaObj.validate || _compileAsync(schemaObj);
	  });

	  if (callback) {
	    p.then(
	      function(v) { callback(null, v); },
	      callback
	    );
	  }

	  return p;


	  function loadMetaSchemaOf(sch) {
	    var $schema = sch.$schema;
	    return $schema && !self.getSchema($schema)
	            ? compileAsync.call(self, { $ref: $schema }, true)
	            : Promise.resolve();
	  }


	  function _compileAsync(schemaObj) {
	    try { return self._compile(schemaObj); }
	    catch(e) {
	      if (e instanceof MissingRefError$1) return loadMissingSchema(e);
	      throw e;
	    }


	    function loadMissingSchema(e) {
	      var ref = e.missingSchema;
	      if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

	      var schemaPromise = self._loadingSchemas[ref];
	      if (!schemaPromise) {
	        schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
	        schemaPromise.then(removePromise, removePromise);
	      }

	      return schemaPromise.then(function (sch) {
	        if (!added(ref)) {
	          return loadMetaSchemaOf(sch).then(function () {
	            if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
	          });
	        }
	      }).then(function() {
	        return _compileAsync(schemaObj);
	      });

	      function removePromise() {
	        delete self._loadingSchemas[ref];
	      }

	      function added(ref) {
	        return self._refs[ref] || self._schemas[ref];
	      }
	    }
	  }
	}

	var custom = function generate_custom(it, $keyword, $ruleType) {
	  var out = ' ';
	  var $lvl = it.level;
	  var $dataLvl = it.dataLevel;
	  var $schema = it.schema[$keyword];
	  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
	  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
	  var $breakOnError = !it.opts.allErrors;
	  var $errorKeyword;
	  var $data = 'data' + ($dataLvl || '');
	  var $valid = 'valid' + $lvl;
	  var $errs = 'errs__' + $lvl;
	  var $isData = it.opts.$data && $schema && $schema.$data,
	    $schemaValue;
	  if ($isData) {
	    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
	    $schemaValue = 'schema' + $lvl;
	  } else {
	    $schemaValue = $schema;
	  }
	  var $rule = this,
	    $definition = 'definition' + $lvl,
	    $rDef = $rule.definition,
	    $closingBraces = '';
	  var $compile, $inline, $macro, $ruleValidate, $validateCode;
	  if ($isData && $rDef.$data) {
	    $validateCode = 'keywordValidate' + $lvl;
	    var $validateSchema = $rDef.validateSchema;
	    out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
	  } else {
	    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
	    if (!$ruleValidate) return;
	    $schemaValue = 'validate.schema' + $schemaPath;
	    $validateCode = $ruleValidate.code;
	    $compile = $rDef.compile;
	    $inline = $rDef.inline;
	    $macro = $rDef.macro;
	  }
	  var $ruleErrs = $validateCode + '.errors',
	    $i = 'i' + $lvl,
	    $ruleErr = 'ruleErr' + $lvl,
	    $asyncKeyword = $rDef.async;
	  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
	  if (!($inline || $macro)) {
	    out += '' + ($ruleErrs) + ' = null;';
	  }
	  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
	  if ($isData && $rDef.$data) {
	    $closingBraces += '}';
	    out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
	    if ($validateSchema) {
	      $closingBraces += '}';
	      out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
	    }
	  }
	  if ($inline) {
	    if ($rDef.statements) {
	      out += ' ' + ($ruleValidate.validate) + ' ';
	    } else {
	      out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
	    }
	  } else if ($macro) {
	    var $it = it.util.copy(it);
	    var $closingBraces = '';
	    $it.level++;
	    var $nextValid = 'valid' + $it.level;
	    $it.schema = $ruleValidate.validate;
	    $it.schemaPath = '';
	    var $wasComposite = it.compositeRule;
	    it.compositeRule = $it.compositeRule = true;
	    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
	    it.compositeRule = $it.compositeRule = $wasComposite;
	    out += ' ' + ($code);
	  } else {
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    out += '  ' + ($validateCode) + '.call( ';
	    if (it.opts.passContext) {
	      out += 'this';
	    } else {
	      out += 'self';
	    }
	    if ($compile || $rDef.schema === false) {
	      out += ' , ' + ($data) + ' ';
	    } else {
	      out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
	    }
	    out += ' , (dataPath || \'\')';
	    if (it.errorPath != '""') {
	      out += ' + ' + (it.errorPath);
	    }
	    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
	      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
	    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
	    var def_callRuleValidate = out;
	    out = $$outStack.pop();
	    if ($rDef.errors === false) {
	      out += ' ' + ($valid) + ' = ';
	      if ($asyncKeyword) {
	        out += 'await ';
	      }
	      out += '' + (def_callRuleValidate) + '; ';
	    } else {
	      if ($asyncKeyword) {
	        $ruleErrs = 'customErrors' + $lvl;
	        out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = await ' + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
	      } else {
	        out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
	      }
	    }
	  }
	  if ($rDef.modifying) {
	    out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
	  }
	  out += '' + ($closingBraces);
	  if ($rDef.valid) {
	    if ($breakOnError) {
	      out += ' if (true) { ';
	    }
	  } else {
	    out += ' if ( ';
	    if ($rDef.valid === undefined) {
	      out += ' !';
	      if ($macro) {
	        out += '' + ($nextValid);
	      } else {
	        out += '' + ($valid);
	      }
	    } else {
	      out += ' ' + (!$rDef.valid) + ' ';
	    }
	    out += ') { ';
	    $errorKeyword = $rule.keyword;
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = '';
	    var $$outStack = $$outStack || [];
	    $$outStack.push(out);
	    out = ''; /* istanbul ignore else */
	    if (it.createErrors !== false) {
	      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
	      if (it.opts.messages !== false) {
	        out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
	      }
	      if (it.opts.verbose) {
	        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	      }
	      out += ' } ';
	    } else {
	      out += ' {} ';
	    }
	    var __err = out;
	    out = $$outStack.pop();
	    if (!it.compositeRule && $breakOnError) {
	      /* istanbul ignore if */
	      if (it.async) {
	        out += ' throw new ValidationError([' + (__err) + ']); ';
	      } else {
	        out += ' validate.errors = [' + (__err) + ']; return false; ';
	      }
	    } else {
	      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	    }
	    var def_customError = out;
	    out = $$outStack.pop();
	    if ($inline) {
	      if ($rDef.errors) {
	        if ($rDef.errors != 'full') {
	          out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
	          if (it.opts.verbose) {
	            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	          }
	          out += ' } ';
	        }
	      } else {
	        if ($rDef.errors === false) {
	          out += ' ' + (def_customError) + ' ';
	        } else {
	          out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
	          if (it.opts.verbose) {
	            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	          }
	          out += ' } } ';
	        }
	      }
	    } else if ($macro) {
	      out += '   var err =   '; /* istanbul ignore else */
	      if (it.createErrors !== false) {
	        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
	        if (it.opts.messages !== false) {
	          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
	        }
	        if (it.opts.verbose) {
	          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
	        }
	        out += ' } ';
	      } else {
	        out += ' {} ';
	      }
	      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
	      if (!it.compositeRule && $breakOnError) {
	        /* istanbul ignore if */
	        if (it.async) {
	          out += ' throw new ValidationError(vErrors); ';
	        } else {
	          out += ' validate.errors = vErrors; return false; ';
	        }
	      }
	    } else {
	      if ($rDef.errors === false) {
	        out += ' ' + (def_customError) + ' ';
	      } else {
	        out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
	        if (it.opts.verbose) {
	          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
	        }
	        out += ' } } else { ' + (def_customError) + ' } ';
	      }
	    }
	    out += ' } ';
	    if ($breakOnError) {
	      out += ' else { ';
	    }
	  }
	  return out;
	};

	var $schema = "http://json-schema.org/draft-07/schema#";
	var $id = "http://json-schema.org/draft-07/schema#";
	var title = "Core schema meta-schema";
	var definitions = {
		schemaArray: {
			type: "array",
			minItems: 1,
			items: {
				$ref: "#"
			}
		},
		nonNegativeInteger: {
			type: "integer",
			minimum: 0
		},
		nonNegativeIntegerDefault0: {
			allOf: [
				{
					$ref: "#/definitions/nonNegativeInteger"
				},
				{
					"default": 0
				}
			]
		},
		simpleTypes: {
			"enum": [
				"array",
				"boolean",
				"integer",
				"null",
				"number",
				"object",
				"string"
			]
		},
		stringArray: {
			type: "array",
			items: {
				type: "string"
			},
			uniqueItems: true,
			"default": [
			]
		}
	};
	var type = [
		"object",
		"boolean"
	];
	var properties$1 = {
		$id: {
			type: "string",
			format: "uri-reference"
		},
		$schema: {
			type: "string",
			format: "uri"
		},
		$ref: {
			type: "string",
			format: "uri-reference"
		},
		$comment: {
			type: "string"
		},
		title: {
			type: "string"
		},
		description: {
			type: "string"
		},
		"default": true,
		readOnly: {
			type: "boolean",
			"default": false
		},
		examples: {
			type: "array",
			items: true
		},
		multipleOf: {
			type: "number",
			exclusiveMinimum: 0
		},
		maximum: {
			type: "number"
		},
		exclusiveMaximum: {
			type: "number"
		},
		minimum: {
			type: "number"
		},
		exclusiveMinimum: {
			type: "number"
		},
		maxLength: {
			$ref: "#/definitions/nonNegativeInteger"
		},
		minLength: {
			$ref: "#/definitions/nonNegativeIntegerDefault0"
		},
		pattern: {
			type: "string",
			format: "regex"
		},
		additionalItems: {
			$ref: "#"
		},
		items: {
			anyOf: [
				{
					$ref: "#"
				},
				{
					$ref: "#/definitions/schemaArray"
				}
			],
			"default": true
		},
		maxItems: {
			$ref: "#/definitions/nonNegativeInteger"
		},
		minItems: {
			$ref: "#/definitions/nonNegativeIntegerDefault0"
		},
		uniqueItems: {
			type: "boolean",
			"default": false
		},
		contains: {
			$ref: "#"
		},
		maxProperties: {
			$ref: "#/definitions/nonNegativeInteger"
		},
		minProperties: {
			$ref: "#/definitions/nonNegativeIntegerDefault0"
		},
		required: {
			$ref: "#/definitions/stringArray"
		},
		additionalProperties: {
			$ref: "#"
		},
		definitions: {
			type: "object",
			additionalProperties: {
				$ref: "#"
			},
			"default": {
			}
		},
		properties: {
			type: "object",
			additionalProperties: {
				$ref: "#"
			},
			"default": {
			}
		},
		patternProperties: {
			type: "object",
			additionalProperties: {
				$ref: "#"
			},
			propertyNames: {
				format: "regex"
			},
			"default": {
			}
		},
		dependencies: {
			type: "object",
			additionalProperties: {
				anyOf: [
					{
						$ref: "#"
					},
					{
						$ref: "#/definitions/stringArray"
					}
				]
			}
		},
		propertyNames: {
			$ref: "#"
		},
		"const": true,
		"enum": {
			type: "array",
			items: true,
			minItems: 1,
			uniqueItems: true
		},
		type: {
			anyOf: [
				{
					$ref: "#/definitions/simpleTypes"
				},
				{
					type: "array",
					items: {
						$ref: "#/definitions/simpleTypes"
					},
					minItems: 1,
					uniqueItems: true
				}
			]
		},
		format: {
			type: "string"
		},
		contentMediaType: {
			type: "string"
		},
		contentEncoding: {
			type: "string"
		},
		"if": {
			$ref: "#"
		},
		then: {
			$ref: "#"
		},
		"else": {
			$ref: "#"
		},
		allOf: {
			$ref: "#/definitions/schemaArray"
		},
		anyOf: {
			$ref: "#/definitions/schemaArray"
		},
		oneOf: {
			$ref: "#/definitions/schemaArray"
		},
		not: {
			$ref: "#"
		}
	};
	var jsonSchemaDraft07 = {
		$schema: $schema,
		$id: $id,
		title: title,
		definitions: definitions,
		type: type,
		properties: properties$1,
		"default": true
	};

	var jsonSchemaDraft07$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		$schema: $schema,
		$id: $id,
		title: title,
		definitions: definitions,
		type: type,
		properties: properties$1,
		'default': jsonSchemaDraft07
	});

	var require$$2 = getCjsExportFromNamespace(jsonSchemaDraft07$1);

	var definition_schema = {
	  $id: 'https://github.com/epoberezkin/ajv/blob/master/lib/definition_schema.js',
	  definitions: {
	    simpleTypes: require$$2.definitions.simpleTypes
	  },
	  type: 'object',
	  dependencies: {
	    schema: ['validate'],
	    $data: ['validate'],
	    statements: ['inline'],
	    valid: {not: {required: ['macro']}}
	  },
	  properties: {
	    type: require$$2.properties.type,
	    schema: {type: 'boolean'},
	    statements: {type: 'boolean'},
	    dependencies: {
	      type: 'array',
	      items: {type: 'string'}
	    },
	    metaSchema: {type: 'object'},
	    modifying: {type: 'boolean'},
	    valid: {type: 'boolean'},
	    $data: {type: 'boolean'},
	    async: {type: 'boolean'},
	    errors: {
	      anyOf: [
	        {type: 'boolean'},
	        {const: 'full'}
	      ]
	    }
	  }
	};

	var IDENTIFIER$1 = /^[a-z_$][a-z0-9_$-]*$/i;



	var keyword = {
	  add: addKeyword,
	  get: getKeyword,
	  remove: removeKeyword,
	  validate: validateKeyword
	};


	/**
	 * Define custom keyword
	 * @this  Ajv
	 * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
	 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
	 * @return {Ajv} this for method chaining
	 */
	function addKeyword(keyword, definition) {
	  /* jshint validthis: true */
	  /* eslint no-shadow: 0 */
	  var RULES = this.RULES;
	  if (RULES.keywords[keyword])
	    throw new Error('Keyword ' + keyword + ' is already defined');

	  if (!IDENTIFIER$1.test(keyword))
	    throw new Error('Keyword ' + keyword + ' is not a valid identifier');

	  if (definition) {
	    this.validateKeyword(definition, true);

	    var dataType = definition.type;
	    if (Array.isArray(dataType)) {
	      for (var i=0; i<dataType.length; i++)
	        _addRule(keyword, dataType[i], definition);
	    } else {
	      _addRule(keyword, dataType, definition);
	    }

	    var metaSchema = definition.metaSchema;
	    if (metaSchema) {
	      if (definition.$data && this._opts.$data) {
	        metaSchema = {
	          anyOf: [
	            metaSchema,
	            { '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#' }
	          ]
	        };
	      }
	      definition.validateSchema = this.compile(metaSchema, true);
	    }
	  }

	  RULES.keywords[keyword] = RULES.all[keyword] = true;


	  function _addRule(keyword, dataType, definition) {
	    var ruleGroup;
	    for (var i=0; i<RULES.length; i++) {
	      var rg = RULES[i];
	      if (rg.type == dataType) {
	        ruleGroup = rg;
	        break;
	      }
	    }

	    if (!ruleGroup) {
	      ruleGroup = { type: dataType, rules: [] };
	      RULES.push(ruleGroup);
	    }

	    var rule = {
	      keyword: keyword,
	      definition: definition,
	      custom: true,
	      code: custom,
	      implements: definition.implements
	    };
	    ruleGroup.rules.push(rule);
	    RULES.custom[keyword] = rule;
	  }

	  return this;
	}


	/**
	 * Get keyword
	 * @this  Ajv
	 * @param {String} keyword pre-defined or custom keyword.
	 * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
	 */
	function getKeyword(keyword) {
	  /* jshint validthis: true */
	  var rule = this.RULES.custom[keyword];
	  return rule ? rule.definition : this.RULES.keywords[keyword] || false;
	}


	/**
	 * Remove keyword
	 * @this  Ajv
	 * @param {String} keyword pre-defined or custom keyword.
	 * @return {Ajv} this for method chaining
	 */
	function removeKeyword(keyword) {
	  /* jshint validthis: true */
	  var RULES = this.RULES;
	  delete RULES.keywords[keyword];
	  delete RULES.all[keyword];
	  delete RULES.custom[keyword];
	  for (var i=0; i<RULES.length; i++) {
	    var rules = RULES[i].rules;
	    for (var j=0; j<rules.length; j++) {
	      if (rules[j].keyword == keyword) {
	        rules.splice(j, 1);
	        break;
	      }
	    }
	  }
	  return this;
	}


	/**
	 * Validate keyword definition
	 * @this  Ajv
	 * @param {Object} definition keyword definition object.
	 * @param {Boolean} throwError true to throw exception if definition is invalid
	 * @return {boolean} validation result
	 */
	function validateKeyword(definition, throwError) {
	  validateKeyword.errors = null;
	  var v = this._validateKeyword = this._validateKeyword
	                                  || this.compile(definition_schema, true);

	  if (v(definition)) return true;
	  validateKeyword.errors = v.errors;
	  if (throwError)
	    throw new Error('custom keyword definition is invalid: '  + this.errorsText(v.errors));
	  else
	    return false;
	}

	var $schema$1 = "http://json-schema.org/draft-07/schema#";
	var $id$1 = "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#";
	var description = "Meta-schema for $data reference (JSON Schema extension proposal)";
	var type$1 = "object";
	var required$1 = [
		"$data"
	];
	var properties$2 = {
		$data: {
			type: "string",
			anyOf: [
				{
					format: "relative-json-pointer"
				},
				{
					format: "json-pointer"
				}
			]
		}
	};
	var additionalProperties = false;
	var data$1 = {
		$schema: $schema$1,
		$id: $id$1,
		description: description,
		type: type$1,
		required: required$1,
		properties: properties$2,
		additionalProperties: additionalProperties
	};

	var data$2 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		$schema: $schema$1,
		$id: $id$1,
		description: description,
		type: type$1,
		required: required$1,
		properties: properties$2,
		additionalProperties: additionalProperties,
		'default': data$1
	});

	var require$$1 = getCjsExportFromNamespace(data$2);

	var ajv = Ajv;

	Ajv.prototype.validate = validate$1;
	Ajv.prototype.compile = compile$1;
	Ajv.prototype.addSchema = addSchema;
	Ajv.prototype.addMetaSchema = addMetaSchema;
	Ajv.prototype.validateSchema = validateSchema;
	Ajv.prototype.getSchema = getSchema;
	Ajv.prototype.removeSchema = removeSchema;
	Ajv.prototype.addFormat = addFormat;
	Ajv.prototype.errorsText = errorsText;

	Ajv.prototype._addSchema = _addSchema;
	Ajv.prototype._compile = _compile;

	Ajv.prototype.compileAsync = async;

	Ajv.prototype.addKeyword = keyword.add;
	Ajv.prototype.getKeyword = keyword.get;
	Ajv.prototype.removeKeyword = keyword.remove;
	Ajv.prototype.validateKeyword = keyword.validate;


	Ajv.ValidationError = error_classes.Validation;
	Ajv.MissingRefError = error_classes.MissingRef;
	Ajv.$dataMetaSchema = data;

	var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';

	var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes', 'strictDefaults' ];
	var META_SUPPORT_DATA = ['/properties'];

	/**
	 * Creates validator instance.
	 * Usage: `Ajv(opts)`
	 * @param {Object} opts optional options
	 * @return {Object} ajv instance
	 */
	function Ajv(opts) {
	  if (!(this instanceof Ajv)) return new Ajv(opts);
	  opts = this._opts = util.copy(opts) || {};
	  setLogger(this);
	  this._schemas = {};
	  this._refs = {};
	  this._fragments = {};
	  this._formats = formats_1(opts.format);

	  this._cache = opts.cache || new cache;
	  this._loadingSchemas = {};
	  this._compilations = [];
	  this.RULES = rules();
	  this._getId = chooseGetId(opts);

	  opts.loopRequired = opts.loopRequired || Infinity;
	  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
	  if (opts.serialize === undefined) opts.serialize = fastJsonStableStringify;
	  this._metaOpts = getMetaSchemaOptions(this);

	  if (opts.formats) addInitialFormats(this);
	  if (opts.keywords) addInitialKeywords(this);
	  addDefaultMetaSchema(this);
	  if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
	  if (opts.nullable) this.addKeyword('nullable', {metaSchema: {type: 'boolean'}});
	  addInitialSchemas(this);
	}



	/**
	 * Validate data using schema
	 * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
	 * @this   Ajv
	 * @param  {String|Object} schemaKeyRef key, ref or schema object
	 * @param  {Any} data to be validated
	 * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
	 */
	function validate$1(schemaKeyRef, data) {
	  var v;
	  if (typeof schemaKeyRef == 'string') {
	    v = this.getSchema(schemaKeyRef);
	    if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
	  } else {
	    var schemaObj = this._addSchema(schemaKeyRef);
	    v = schemaObj.validate || this._compile(schemaObj);
	  }

	  var valid = v(data);
	  if (v.$async !== true) this.errors = v.errors;
	  return valid;
	}


	/**
	 * Create validating function for passed schema.
	 * @this   Ajv
	 * @param  {Object} schema schema object
	 * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
	 * @return {Function} validating function
	 */
	function compile$1(schema, _meta) {
	  var schemaObj = this._addSchema(schema, undefined, _meta);
	  return schemaObj.validate || this._compile(schemaObj);
	}


	/**
	 * Adds schema to the instance.
	 * @this   Ajv
	 * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
	 * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
	 * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
	 * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
	 * @return {Ajv} this for method chaining
	 */
	function addSchema(schema, key, _skipValidation, _meta) {
	  if (Array.isArray(schema)){
	    for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
	    return this;
	  }
	  var id = this._getId(schema);
	  if (id !== undefined && typeof id != 'string')
	    throw new Error('schema id must be string');
	  key = resolve_1.normalizeId(key || id);
	  checkUnique(this, key);
	  this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
	  return this;
	}


	/**
	 * Add schema that will be used to validate other schemas
	 * options in META_IGNORE_OPTIONS are alway set to false
	 * @this   Ajv
	 * @param {Object} schema schema object
	 * @param {String} key optional schema key
	 * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
	 * @return {Ajv} this for method chaining
	 */
	function addMetaSchema(schema, key, skipValidation) {
	  this.addSchema(schema, key, skipValidation, true);
	  return this;
	}


	/**
	 * Validate schema
	 * @this   Ajv
	 * @param {Object} schema schema to validate
	 * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
	 * @return {Boolean} true if schema is valid
	 */
	function validateSchema(schema, throwOrLogError) {
	  var $schema = schema.$schema;
	  if ($schema !== undefined && typeof $schema != 'string')
	    throw new Error('$schema must be a string');
	  $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
	  if (!$schema) {
	    this.logger.warn('meta-schema not available');
	    this.errors = null;
	    return true;
	  }
	  var valid = this.validate($schema, schema);
	  if (!valid && throwOrLogError) {
	    var message = 'schema is invalid: ' + this.errorsText();
	    if (this._opts.validateSchema == 'log') this.logger.error(message);
	    else throw new Error(message);
	  }
	  return valid;
	}


	function defaultMeta(self) {
	  var meta = self._opts.meta;
	  self._opts.defaultMeta = typeof meta == 'object'
	                            ? self._getId(meta) || meta
	                            : self.getSchema(META_SCHEMA_ID)
	                              ? META_SCHEMA_ID
	                              : undefined;
	  return self._opts.defaultMeta;
	}


	/**
	 * Get compiled schema from the instance by `key` or `ref`.
	 * @this   Ajv
	 * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
	 * @return {Function} schema validating function (with property `schema`).
	 */
	function getSchema(keyRef) {
	  var schemaObj = _getSchemaObj(this, keyRef);
	  switch (typeof schemaObj) {
	    case 'object': return schemaObj.validate || this._compile(schemaObj);
	    case 'string': return this.getSchema(schemaObj);
	    case 'undefined': return _getSchemaFragment(this, keyRef);
	  }
	}


	function _getSchemaFragment(self, ref) {
	  var res = resolve_1.schema.call(self, { schema: {} }, ref);
	  if (res) {
	    var schema = res.schema
	      , root = res.root
	      , baseId = res.baseId;
	    var v = compile_1.call(self, schema, root, undefined, baseId);
	    self._fragments[ref] = new schema_obj({
	      ref: ref,
	      fragment: true,
	      schema: schema,
	      root: root,
	      baseId: baseId,
	      validate: v
	    });
	    return v;
	  }
	}


	function _getSchemaObj(self, keyRef) {
	  keyRef = resolve_1.normalizeId(keyRef);
	  return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
	}


	/**
	 * Remove cached schema(s).
	 * If no parameter is passed all schemas but meta-schemas are removed.
	 * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
	 * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
	 * @this   Ajv
	 * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
	 * @return {Ajv} this for method chaining
	 */
	function removeSchema(schemaKeyRef) {
	  if (schemaKeyRef instanceof RegExp) {
	    _removeAllSchemas(this, this._schemas, schemaKeyRef);
	    _removeAllSchemas(this, this._refs, schemaKeyRef);
	    return this;
	  }
	  switch (typeof schemaKeyRef) {
	    case 'undefined':
	      _removeAllSchemas(this, this._schemas);
	      _removeAllSchemas(this, this._refs);
	      this._cache.clear();
	      return this;
	    case 'string':
	      var schemaObj = _getSchemaObj(this, schemaKeyRef);
	      if (schemaObj) this._cache.del(schemaObj.cacheKey);
	      delete this._schemas[schemaKeyRef];
	      delete this._refs[schemaKeyRef];
	      return this;
	    case 'object':
	      var serialize = this._opts.serialize;
	      var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
	      this._cache.del(cacheKey);
	      var id = this._getId(schemaKeyRef);
	      if (id) {
	        id = resolve_1.normalizeId(id);
	        delete this._schemas[id];
	        delete this._refs[id];
	      }
	  }
	  return this;
	}


	function _removeAllSchemas(self, schemas, regex) {
	  for (var keyRef in schemas) {
	    var schemaObj = schemas[keyRef];
	    if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
	      self._cache.del(schemaObj.cacheKey);
	      delete schemas[keyRef];
	    }
	  }
	}


	/* @this   Ajv */
	function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
	  if (typeof schema != 'object' && typeof schema != 'boolean')
	    throw new Error('schema should be object or boolean');
	  var serialize = this._opts.serialize;
	  var cacheKey = serialize ? serialize(schema) : schema;
	  var cached = this._cache.get(cacheKey);
	  if (cached) return cached;

	  shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

	  var id = resolve_1.normalizeId(this._getId(schema));
	  if (id && shouldAddSchema) checkUnique(this, id);

	  var willValidate = this._opts.validateSchema !== false && !skipValidation;
	  var recursiveMeta;
	  if (willValidate && !(recursiveMeta = id && id == resolve_1.normalizeId(schema.$schema)))
	    this.validateSchema(schema, true);

	  var localRefs = resolve_1.ids.call(this, schema);

	  var schemaObj = new schema_obj({
	    id: id,
	    schema: schema,
	    localRefs: localRefs,
	    cacheKey: cacheKey,
	    meta: meta
	  });

	  if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
	  this._cache.put(cacheKey, schemaObj);

	  if (willValidate && recursiveMeta) this.validateSchema(schema, true);

	  return schemaObj;
	}


	/* @this   Ajv */
	function _compile(schemaObj, root) {
	  if (schemaObj.compiling) {
	    schemaObj.validate = callValidate;
	    callValidate.schema = schemaObj.schema;
	    callValidate.errors = null;
	    callValidate.root = root ? root : callValidate;
	    if (schemaObj.schema.$async === true)
	      callValidate.$async = true;
	    return callValidate;
	  }
	  schemaObj.compiling = true;

	  var currentOpts;
	  if (schemaObj.meta) {
	    currentOpts = this._opts;
	    this._opts = this._metaOpts;
	  }

	  var v;
	  try { v = compile_1.call(this, schemaObj.schema, root, schemaObj.localRefs); }
	  catch(e) {
	    delete schemaObj.validate;
	    throw e;
	  }
	  finally {
	    schemaObj.compiling = false;
	    if (schemaObj.meta) this._opts = currentOpts;
	  }

	  schemaObj.validate = v;
	  schemaObj.refs = v.refs;
	  schemaObj.refVal = v.refVal;
	  schemaObj.root = v.root;
	  return v;


	  /* @this   {*} - custom context, see passContext option */
	  function callValidate() {
	    /* jshint validthis: true */
	    var _validate = schemaObj.validate;
	    var result = _validate.apply(this, arguments);
	    callValidate.errors = _validate.errors;
	    return result;
	  }
	}


	function chooseGetId(opts) {
	  switch (opts.schemaId) {
	    case 'auto': return _get$IdOrId;
	    case 'id': return _getId;
	    default: return _get$Id;
	  }
	}

	/* @this   Ajv */
	function _getId(schema) {
	  if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
	  return schema.id;
	}

	/* @this   Ajv */
	function _get$Id(schema) {
	  if (schema.id) this.logger.warn('schema id ignored', schema.id);
	  return schema.$id;
	}


	function _get$IdOrId(schema) {
	  if (schema.$id && schema.id && schema.$id != schema.id)
	    throw new Error('schema $id is different from id');
	  return schema.$id || schema.id;
	}


	/**
	 * Convert array of error message objects to string
	 * @this   Ajv
	 * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
	 * @param  {Object} options optional options with properties `separator` and `dataVar`.
	 * @return {String} human readable string with all errors descriptions
	 */
	function errorsText(errors, options) {
	  errors = errors || this.errors;
	  if (!errors) return 'No errors';
	  options = options || {};
	  var separator = options.separator === undefined ? ', ' : options.separator;
	  var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

	  var text = '';
	  for (var i=0; i<errors.length; i++) {
	    var e = errors[i];
	    if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
	  }
	  return text.slice(0, -separator.length);
	}


	/**
	 * Add custom format
	 * @this   Ajv
	 * @param {String} name format name
	 * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
	 * @return {Ajv} this for method chaining
	 */
	function addFormat(name, format) {
	  if (typeof format == 'string') format = new RegExp(format);
	  this._formats[name] = format;
	  return this;
	}


	function addDefaultMetaSchema(self) {
	  var $dataSchema;
	  if (self._opts.$data) {
	    $dataSchema = require$$1;
	    self.addMetaSchema($dataSchema, $dataSchema.$id, true);
	  }
	  if (self._opts.meta === false) return;
	  var metaSchema = require$$2;
	  if (self._opts.$data) metaSchema = data(metaSchema, META_SUPPORT_DATA);
	  self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
	  self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
	}


	function addInitialSchemas(self) {
	  var optsSchemas = self._opts.schemas;
	  if (!optsSchemas) return;
	  if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
	  else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
	}


	function addInitialFormats(self) {
	  for (var name in self._opts.formats) {
	    var format = self._opts.formats[name];
	    self.addFormat(name, format);
	  }
	}


	function addInitialKeywords(self) {
	  for (var name in self._opts.keywords) {
	    var keyword = self._opts.keywords[name];
	    self.addKeyword(name, keyword);
	  }
	}


	function checkUnique(self, id) {
	  if (self._schemas[id] || self._refs[id])
	    throw new Error('schema with key or id "' + id + '" already exists');
	}


	function getMetaSchemaOptions(self) {
	  var metaOpts = util.copy(self._opts);
	  for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
	    delete metaOpts[META_IGNORE_OPTIONS[i]];
	  return metaOpts;
	}


	function setLogger(self) {
	  var logger = self._opts.logger;
	  if (logger === false) {
	    self.logger = {log: noop, warn: noop, error: noop};
	  } else {
	    if (logger === undefined) logger = console;
	    if (!(typeof logger == 'object' && logger.log && logger.warn && logger.error))
	      throw new Error('logger must implement log, warn and error methods');
	    self.logger = logger;
	  }
	}


	function noop() {}

	const isFunction$1 = function (functionToCheck) {
	  if (!functionToCheck) {
	    return false;
	  }

	  const fn = Object.prototype.toString.call(functionToCheck);
	  return fn === "[object Function]" || fn === "[object AsyncFunction]";
	}; // https://stackoverflow.com/a/44198641/609428

	const isValidDate = function (date) {
	  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
	};
	const isObject$1 = function (obj) {
	  return !!(obj && Object.prototype.toString.call(obj) === "[object Object]");
	};

	const mockRequestId = function (testCount) {
	  const pad = "000000000000";
	  const padCount = (pad + testCount).slice(-pad.length);
	  const id = "00000000-0000-4000-a000-" + padCount;
	  return id;
	};
	let _testUuidCount = 0;
	const testUuid = function () {
	  return mockRequestId(_testUuidCount++);
	};
	const mockLambdaId = function (testCount) {
	  const pad = "000000000000";
	  const padCount = (pad + testCount).slice(-pad.length);
	  const id = "99999999-0000-4000-a000-" + padCount;
	  return id;
	};
	const randomAccountId = function () {
	  return String(0x100000000 * Math.random());
	}; //const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i; // https://gist.github.com/bugventure/f71337e3927c34132b9a

	const uuidV4Regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
	const validUuidV4 = function (s) {
	  return uuidV4Regex.test(s);
	};

	var uuid = /*#__PURE__*/Object.freeze({
		__proto__: null,
		mockRequestId: mockRequestId,
		testUuid: testUuid,
		mockLambdaId: mockLambdaId,
		randomAccountId: randomAccountId,
		validUuidV4: validUuidV4
	});

	//#region uuidV4

	function uuidV4(input) {
	  return validUuidV4(input);
	} //#endregion
	//#region date-or-iso-str
	// Used to validate a source object (which has dates as actual new Date() objects) before it is serialized
	// USAGE: { format: "date-or-iso-str" }
	// NOT: { type: "string", format: "date-or-iso-str" } => new Date() is not a string
	// NOT: { type: "date-or-iso-str" } => common misunderstanding of jsonschema custom formatters


	const fullIsoDateRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;

	function dateOrIsoStr(input) {
	  return typeof input == "string" ? fullIsoDateRegex.test(input) : isValidDate(input);
	} //#endregion
	//#region regex-or-str


	function regexOrStr(input) {
	  return input instanceof RegExp ? true : typeof input == "string";
	} //#endregion


	class AjvExt {
	  constructor(schema, nestedSchemas) {
	    this.ajv = new ajv({
	      allErrors: true,
	      logger: false
	    }); // custom formats

	    this.ajv.addFormat("uuidV4", {
	      validate: uuidV4
	    });
	    this.ajv.addFormat("date-or-iso-str", {
	      validate: dateOrIsoStr
	    });
	    this.ajv.addFormat("regex-or-str", {
	      validate: regexOrStr
	    }); // nestedSchemas

	    if (nestedSchemas && nestedSchemas.length) {
	      for (let x of nestedSchemas) {
	        x = AjvExt.fixSchema(x);
	        this.ajv.addSchema(x, x.id);
	      }
	    } // fix & compile


	    schema = AjvExt.fixSchema(schema);
	    this.compiled = this.ajv.compile(schema);
	  }

	  validate(data) {
	    const valid = this.compiled(data);

	    if (valid) {
	      return undefined;
	    } else {
	      // return this.ajv.errorsText(this.compiled.errors, { dataVar: "" });
	      return this.compiled.errors.map(x => `${x.dataPath} ${x.message}`);
	    }
	  } // NOTE: doesn't mutate schema


	  static fixSchema(schema) {
	    const clone$1 = clone(schema);

	    this._fixSchema(clone$1);

	    return clone$1;
	  } // NOTE: mutates schema


	  static _fixSchema(schema) {
	    // .required
	    //  - root level properties can have .required
	    //  - properties on sub-objects or arrays must have .required array at object level
	    if (schema.type === "object" && schema.properties) {
	      if (!schema.required) {
	        schema.required = [];
	      }

	      for (const key in schema.properties) {
	        const property = schema.properties[key]; // move property.required to schema.required array

	        if ({}.hasOwnProperty.call(property, "required")) {
	          if (property.required) {
	            schema.required.push(key);
	          }

	          delete property.required;
	        } // recurse


	        if (property.type === "object") {
	          AjvExt._fixSchema(property);

	          continue;
	        } else if (property.type === "array") {
	          AjvExt._fixSchema(property.items);

	          continue;
	        }
	      }

	      if (schema.required.length === 0) {
	        delete schema.required;
	      }
	    } else if (schema.type === "array") {
	      // e.g. /transactions, and /breaks
	      AjvExt._fixSchema(schema.items);
	    }
	  } // NOTE: static class properties are stage 3 atm: https://javascript.info/static-properties-methods#static-properties


	  static swaggerReplacement() {
	    // https://swagger.io/specification/#dataTypes
	    return {
	      uuidV4: {
	        type: "string",
	        format: "uuid"
	      },
	      "date-or-iso-str": {
	        type: "string",
	        format: "date-time"
	      },
	      "regex-or-str": {
	        type: "string"
	      }
	    };
	  }

	}

	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
	class BadShapeError extends Error {
	  constructor(message) {
	    super(message); // Maintains proper stack trace for where our error was thrown (only available on V8)

	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, BadShapeError);
	    }

	    this.name = "BadShapeError";
	  }

	}

	const compiledSchemas = {};
	const validate$2 = function (code, schema, data, nestedSchemas) {
	  if (schema === undefined) {
	    throw new BadShapeError(`shape ${code} schema undefined`);
	  }

	  if (isFunction$1(schema)) {
	    return schema(data);
	  } // compile the schema once (does fixSchema)


	  let ajvExt; // console.log("code:", code);

	  if (compiledSchemas[code]) {
	    ajvExt = compiledSchemas[code];
	  } else {
	    try {
	      ajvExt = new AjvExt(schema, nestedSchemas);
	      compiledSchemas[code] = ajvExt;
	    } catch (e) {
	      throw new BadShapeError(`shape ${code} schema compile errors: ${e.message}`);
	    }
	  } // validation


	  return ajvExt.validate(data);
	};
	const undefinedArrayItemsCheck = function (arrayData) {
	  // json schema considers `undefined` to be a valid element in an array but not `null`
	  // when undefined is serialized it is written as null
	  // hence validation tests in banksy (spike-pdf) will pass but tests in gateway will fail (after serialize/deserialize)
	  // solution = explicitly look for `undefined` in arrays in banksy
	  const errors = [];
	  arrayData.forEach((x, i) => {
	    if (x === undefined) {
	      errors.push(`[${i}] is undefined`);
	    }
	  });
	  return errors;
	};

	var schema = /*#__PURE__*/Object.freeze({
		__proto__: null,
		validate: validate$2,
		undefinedArrayItemsCheck: undefinedArrayItemsCheck
	});

	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
	class InputValidationError extends Error {
	  constructor(validationErrorsArray) {
	    super("Spike input validation error"); // Maintains proper stack trace for where our error was thrown (only available on V8)

	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, InputValidationError);
	    }

	    this.name = "InputValidationError";
	    this.validationErrors = validationErrorsArray;
	  }

	}

	var accounts$1 = createCommonjsModule(function (module, exports) {
	exports.code = "accounts";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: true
	  }
	}; //#endregion
	//#region create

	exports.create = function (sessionId, final = true) {
	  let instance = {
	    sessionId,
	    final
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = basic;
	exports.additionalSchema = undefined; // no additional data

	exports.validate = basic.compose(true, true, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = undefined;
	exports.sanitize = undefined; //#endregion
	});
	var accounts_1 = accounts$1.code;
	var accounts_2 = accounts$1.type;
	var accounts_3 = accounts$1.channel;
	var accounts_4 = accounts$1.sessionBased;
	var accounts_5 = accounts$1.examples;
	var accounts_6 = accounts$1.create;
	var accounts_7 = accounts$1.composer;
	var accounts_8 = accounts$1.additionalSchema;
	var accounts_9 = accounts$1.validate;
	var accounts_10 = accounts$1.ownSanitize;
	var accounts_11 = accounts$1.sanitize;

	var clientGwAccounts = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': accounts$1,
		__moduleExports: accounts$1,
		code: accounts_1,
		type: accounts_2,
		channel: accounts_3,
		sessionBased: accounts_4,
		examples: accounts_5,
		create: accounts_6,
		composer: accounts_7,
		additionalSchema: accounts_8,
		validate: accounts_9,
		ownSanitize: accounts_10,
		sanitize: accounts_11
	});

	var close$1 = createCommonjsModule(function (module, exports) {
	exports.code = "close";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: true
	  }
	}; //#endregion
	//#region create

	exports.create = function (sessionId) {
	  let instance = {
	    sessionId,
	    final: true
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = basic;
	exports.additionalSchema = undefined; // no additional data

	exports.validate = basic.compose(true, true, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = undefined;
	exports.sanitize = undefined; //#endregion
	});
	var close_1 = close$1.code;
	var close_2 = close$1.type;
	var close_3 = close$1.channel;
	var close_4 = close$1.sessionBased;
	var close_5 = close$1.examples;
	var close_6 = close$1.create;
	var close_7 = close$1.composer;
	var close_8 = close$1.additionalSchema;
	var close_9 = close$1.validate;
	var close_10 = close$1.ownSanitize;
	var close_11 = close$1.sanitize;

	var clientGwClose = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': close$1,
		__moduleExports: close$1,
		code: close_1,
		type: close_2,
		channel: close_3,
		sessionBased: close_4,
		examples: close_5,
		create: close_6,
		composer: close_7,
		additionalSchema: close_8,
		validate: close_9,
		ownSanitize: close_10,
		sanitize: close_11
	});

	// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
	class PdfTooLargeError extends Error {
	  constructor(validationErrorsArray) {
	    super("Spike pdf too large error"); // Maintains proper stack trace for where our error was thrown (only available on V8)

	    if (Error.captureStackTrace) {
	      Error.captureStackTrace(this, PdfTooLargeError);
	    }

	    this.name = "PdfTooLargeError";
	    this.validationErrors = validationErrorsArray;
	  }

	}

	PdfTooLargeError.Max = 6 * 1024 * 1024;

	var csv$1 = createCommonjsModule(function (module, exports) {
	exports.code = "csv";
	exports.type = enums.TYPES.INPUTS;
	exports.marshallTo = "gw-lambda/lchan/csv";
	exports.channel = enums.Channel.Lchan;
	exports.sessionBased = false; //#region examples

	exports.examples = {
	  default: {
	    file: "abs.csv",
	    buffer: "..."
	  }
	}; //#endregion
	//#region create

	exports.create = function (csvPath, pass, buffer) {
	  if (!buffer && !csvPath) {
	    throw new InputValidationError(["must supply csvPath or buffer"]);
	  }

	  if (buffer) {
	    if (!csvPath) {
	      // supplied buffer but didn't say what original filename was
	      csvPath = "not-supplied";
	    }
	  } else {
	    // supplied csvPath only - not buffer
	    buffer = fs.readFileSync(csvPath);
	    buffer = buffer.toString("base64");
	  }

	  if (buffer.length > PdfTooLargeError.Max) {
	    throw new PdfTooLargeError();
	  }

	  let instance = {
	    file: path ? path.basename(csvPath) : csvPath,
	    buffer,
	    pass
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.validate = function (data) {
	  let validationErrors = [];

	  if (!data.file) {
	    validationErrors.push("missing required input: file");
	  }

	  if (!data.buffer) {
	    validationErrors.push("missing required input: buffer");
	  }

	  return validationErrors.length === 0 ? undefined : validationErrors;
	};

	exports.schema = {
	  type: "object",
	  properties: {
	    file: {
	      type: "string",
	      required: true
	    },
	    buffer: {
	      type: "string",
	      required: true
	    }
	  }
	}; //#endregion
	//#region sanitize
	// NOTE: custom sanitizer in order to prevent buffer being deep cloned before being [redacted]

	exports.sanitize = function (data) {
	  let temp = data.buffer;
	  delete data.buffer;
	  let clone = Object.assign({
	    buffer: "[redacted]"
	  }, data);
	  data.buffer = temp;
	  return clone;
	}; //#endregion
	});
	var csv_1 = csv$1.code;
	var csv_2 = csv$1.type;
	var csv_3 = csv$1.marshallTo;
	var csv_4 = csv$1.channel;
	var csv_5 = csv$1.sessionBased;
	var csv_6 = csv$1.examples;
	var csv_7 = csv$1.create;
	var csv_8 = csv$1.validate;
	var csv_9 = csv$1.schema;
	var csv_10 = csv$1.sanitize;

	var clientGwCsv = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': csv$1,
		__moduleExports: csv$1,
		code: csv_1,
		type: csv_2,
		marshallTo: csv_3,
		channel: csv_4,
		sessionBased: csv_5,
		examples: csv_6,
		create: csv_7,
		validate: csv_8,
		schema: csv_9,
		sanitize: csv_10
	});

	var estatement$1 = createCommonjsModule(function (module, exports) {
	exports.code = "estatement";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: true,
	    accountNumber: "1234567890",
	    numDays: 90
	  }
	}; //#endregion
	//#region create

	exports.create = function (sessionId, final = true, accountNumber, numDays = 90) {
	  numDays = +numDays; // in case user supplied numDays as a string

	  let instance = {
	    sessionId,
	    final,
	    accountNumber,
	    numDays
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = basic;
	exports.additionalSchema = {
	  accountNumber: {
	    type: "string",
	    required: true,
	    minLength: 10
	  },
	  numDays: {
	    required: true,
	    type: "integer",
	    minimum: 1,
	    maximum: 90
	  }
	};
	exports.validate = basic.compose(true, true, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = undefined;
	exports.sanitize = undefined; //#endregion
	});
	var estatement_1 = estatement$1.code;
	var estatement_2 = estatement$1.type;
	var estatement_3 = estatement$1.channel;
	var estatement_4 = estatement$1.sessionBased;
	var estatement_5 = estatement$1.examples;
	var estatement_6 = estatement$1.create;
	var estatement_7 = estatement$1.composer;
	var estatement_8 = estatement$1.additionalSchema;
	var estatement_9 = estatement$1.validate;
	var estatement_10 = estatement$1.ownSanitize;
	var estatement_11 = estatement$1.sanitize;

	var clientGwEstatement = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': estatement$1,
		__moduleExports: estatement$1,
		code: estatement_1,
		type: estatement_2,
		channel: estatement_3,
		sessionBased: estatement_4,
		examples: estatement_5,
		create: estatement_6,
		composer: estatement_7,
		additionalSchema: estatement_8,
		validate: estatement_9,
		ownSanitize: estatement_10,
		sanitize: estatement_11
	});

	var login$1 = createCommonjsModule(function (module, exports) {
	exports.code = "login";
	exports.type = enums.TYPES.INPUTS;
	exports.marshallTo = "gw-lambda/lchan/login";
	exports.channel = enums.Channel.Lchan;
	exports.sessionBased = true;
	exports.firstRequestInSession = true; //#region examples

	exports.examples = {
	  "ABS.0": {
	    site: "ABS.0",
	    user: "username",
	    pin: "pin",
	    usernum: 1
	  },
	  "CAP.0": {
	    site: "CAP.0",
	    user: "username",
	    pass: "password"
	  },
	  "FNB.0": {
	    site: "FNB.0",
	    user: "username",
	    pass: "password"
	  },
	  "NED.0": {
	    site: "NED.0",
	    user: "username",
	    pass: "password",
	    pin: "pin"
	  },
	  "RMB.0": {
	    site: "RMB.0",
	    user: "username",
	    pass: "password"
	  },
	  "STD.2018-01": {
	    site: "STD.2018-01",
	    user: "username",
	    pass: "password"
	  }
	}; //#endregion
	//#region create

	exports.create = function (site, user, pin, pass, usernum) {
	  let instance = {
	    site,
	    user,
	    pin,
	    pass,
	    usernum
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate
	// For swagger definition - not used by validate()


	exports.schema = {
	  type: "object",
	  properties: {
	    site: {
	      type: "string",
	      required: true,
	      enum: enums.Sites.keys()
	    },
	    user: {
	      type: "string",
	      required: true
	    },
	    pin: {
	      type: "string"
	    },
	    usernum: {
	      type: "string"
	    }
	  }
	};

	exports.validate = function (data) {
	  let validationErrors = [];

	  if (!data.site) {
	    validationErrors.push("missing required input: site");
	  } else {
	    switch (data.site) {
	      case "ABS.0":
	        {
	          if (!data.user) validationErrors.push("missing required input: user = Access account number"); // NOTE: .pass is provided in /login-interim-input
	          // if (data.pass)
	          //   validationErrors.push(
	          //     "additional input: pass = Password must not be supplied"
	          //   );

	          if (!data.pin) validationErrors.push("missing required input: pin");

	          if (!data.usernum) {
	            validationErrors.push("missing required input: usernum = User number");
	          } else {
	            let usernumstr = data.usernum.toString();

	            if (usernumstr.match(/[^0-9]/) || parseInt(usernumstr) <= 0 || parseInt(usernumstr) > 9) {
	              validationErrors.push("usernum should be an integer between 1 and 9");
	            }
	          }

	          break;
	        }

	      case "CAP.0":
	        {
	          if (!data.user) validationErrors.push("missing required input: user = Username");
	          if (!data.pass) validationErrors.push("missing required input: pass = Password/Remote PIN");
	        }
	      // eslint-disable-next-line no-fallthrough

	      case "RMB.0":
	      case "FNB.0":
	        {
	          if (!data.user) validationErrors.push("missing required input: user = Username");
	          if (!data.pass) validationErrors.push("missing required input: pass = Password");
	          break;
	        }

	      case "NED.0":
	        {
	          if (!data.user) validationErrors.push("missing required input: user = Profile number");
	          if (!data.pass) validationErrors.push("missing required input: pass = Password");
	          if (!data.pin) validationErrors.push("missing required input: pin");
	          break;
	        }

	      case "STD.2018-01":
	        {
	          if (!data.user) validationErrors.push("missing required input: user = Email address");
	          if (!data.pass) validationErrors.push("missing required input: pass = Password");
	          break;
	        }

	      default:
	        validationErrors.push("unknown site: " + data.site);
	        break;
	    }
	  }

	  return validationErrors.length === 0 ? undefined : validationErrors;
	}; //#endregion
	//#region sanitize
	// NOTE: custom sanitizer used so that .pin & .pass are not added when they haven't been supplied


	exports.sanitize = function (data) {
	  let clone = Object.assign({}, data);
	  if (clone.pin) clone.pin = "***";
	  if (clone.pass) clone.pass = "***";
	  return clone;
	}; //#endregion
	});
	var login_1 = login$1.code;
	var login_2 = login$1.type;
	var login_3 = login$1.marshallTo;
	var login_4 = login$1.channel;
	var login_5 = login$1.sessionBased;
	var login_6 = login$1.firstRequestInSession;
	var login_7 = login$1.examples;
	var login_8 = login$1.create;
	var login_9 = login$1.schema;
	var login_10 = login$1.validate;
	var login_11 = login$1.sanitize;

	var clientGwLogin = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': login$1,
		__moduleExports: login$1,
		code: login_1,
		type: login_2,
		marshallTo: login_3,
		channel: login_4,
		sessionBased: login_5,
		firstRequestInSession: login_6,
		examples: login_7,
		create: login_8,
		schema: login_9,
		validate: login_10,
		sanitize: login_11
	});

	var absPass = createCommonjsModule(function (module, exports) {
	exports.code = "login-interim-input/abs-pass";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: false,
	    code: exports.code,
	    data: ["p", "a", "s"]
	  }
	}; //#endregion
	//#region create
	// NOTE: final=false: normally you want to do /accounts & /transactions after login

	exports.create = function (sessionId, final = false, data) {
	  let instance = {
	    sessionId,
	    final,
	    code: exports.code,
	    data
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = codeData;
	exports.additionalSchema - undefined;
	exports.dataSchema = {
	  required: true,
	  type: "array",
	  items: {
	    type: "string",
	    minItems: 3,
	    maxItems: 3
	  }
	};
	exports.validate = codeData.compose(true, true, true, exports.dataSchema, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = "[*,*,*]";
	exports.sanitize = {
	  data: exports.ownSanitize
	}; //#endregion
	});
	var absPass_1 = absPass.code;
	var absPass_2 = absPass.type;
	var absPass_3 = absPass.channel;
	var absPass_4 = absPass.sessionBased;
	var absPass_5 = absPass.examples;
	var absPass_6 = absPass.create;
	var absPass_7 = absPass.composer;
	var absPass_8 = absPass.dataSchema;
	var absPass_9 = absPass.validate;
	var absPass_10 = absPass.ownSanitize;
	var absPass_11 = absPass.sanitize;

	var clientGwLoginInterimInputAbsPass = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': absPass,
		__moduleExports: absPass,
		code: absPass_1,
		type: absPass_2,
		channel: absPass_3,
		sessionBased: absPass_4,
		examples: absPass_5,
		create: absPass_6,
		composer: absPass_7,
		dataSchema: absPass_8,
		validate: absPass_9,
		ownSanitize: absPass_10,
		sanitize: absPass_11
	});

	var stdOtp = createCommonjsModule(function (module, exports) {
	exports.code = "login-interim-input/std-otp";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: false,
	    code: exports.code,
	    data: "12345"
	  }
	}; //#endregion
	//#region create
	// NOTE: final=false: normally you want to do /accounts & /transactions after login

	exports.create = function (sessionId, final = false, otp) {
	  let instance = {
	    sessionId,
	    final,
	    code: exports.code,
	    data: otp
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = codeData;
	exports.additionalSchema = undefined;
	exports.dataSchema = {
	  required: true,
	  type: "string"
	};
	exports.validate = codeData.compose(true, true, true, exports.dataSchema, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = "*****";
	exports.sanitize = {
	  data: exports.ownSanitize
	}; //#endregion
	});
	var stdOtp_1 = stdOtp.code;
	var stdOtp_2 = stdOtp.type;
	var stdOtp_3 = stdOtp.channel;
	var stdOtp_4 = stdOtp.sessionBased;
	var stdOtp_5 = stdOtp.examples;
	var stdOtp_6 = stdOtp.create;
	var stdOtp_7 = stdOtp.composer;
	var stdOtp_8 = stdOtp.additionalSchema;
	var stdOtp_9 = stdOtp.dataSchema;
	var stdOtp_10 = stdOtp.validate;
	var stdOtp_11 = stdOtp.ownSanitize;
	var stdOtp_12 = stdOtp.sanitize;

	var clientGwLoginInterimInputStdOtp = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': stdOtp,
		__moduleExports: stdOtp,
		code: stdOtp_1,
		type: stdOtp_2,
		channel: stdOtp_3,
		sessionBased: stdOtp_4,
		examples: stdOtp_5,
		create: stdOtp_6,
		composer: stdOtp_7,
		additionalSchema: stdOtp_8,
		dataSchema: stdOtp_9,
		validate: stdOtp_10,
		ownSanitize: stdOtp_11,
		sanitize: stdOtp_12
	});

	var loginInterimWait$1 = createCommonjsModule(function (module, exports) {
	exports.code = "login-interim-wait";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: false
	  }
	}; //#endregion
	//#region create

	exports.create = function (sessionId, final = true) {
	  let instance = {
	    sessionId,
	    // code: exports.code, // not required atm hardcoded in routeHandler
	    final
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate
	// NOTE: wait requires no inputs so no need to disambiguate in routeHandler i.e. don't need to compose { code, data } into this shape


	exports.composer = basic;
	exports.additionalSchema = undefined;
	exports.validate = basic.compose(true, false, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = undefined;
	exports.sanitize = undefined; //#endregion
	});
	var loginInterimWait_1 = loginInterimWait$1.code;
	var loginInterimWait_2 = loginInterimWait$1.type;
	var loginInterimWait_3 = loginInterimWait$1.channel;
	var loginInterimWait_4 = loginInterimWait$1.sessionBased;
	var loginInterimWait_5 = loginInterimWait$1.examples;
	var loginInterimWait_6 = loginInterimWait$1.create;
	var loginInterimWait_7 = loginInterimWait$1.composer;
	var loginInterimWait_8 = loginInterimWait$1.additionalSchema;
	var loginInterimWait_9 = loginInterimWait$1.validate;
	var loginInterimWait_10 = loginInterimWait$1.ownSanitize;
	var loginInterimWait_11 = loginInterimWait$1.sanitize;

	var clientGwLoginInterimWait = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': loginInterimWait$1,
		__moduleExports: loginInterimWait$1,
		code: loginInterimWait_1,
		type: loginInterimWait_2,
		channel: loginInterimWait_3,
		sessionBased: loginInterimWait_4,
		examples: loginInterimWait_5,
		create: loginInterimWait_6,
		composer: loginInterimWait_7,
		additionalSchema: loginInterimWait_8,
		validate: loginInterimWait_9,
		ownSanitize: loginInterimWait_10,
		sanitize: loginInterimWait_11
	});

	var pdf$1 = createCommonjsModule(function (module, exports) {
	exports.code = "pdf";
	exports.type = enums.TYPES.INPUTS;
	exports.marshallTo = "gw-lambda/lchan/pdf";
	exports.channel = enums.Channel.Lchan;
	exports.sessionBased = false; //#region examples

	exports.examples = {
	  default: {
	    file: "absa.pdf",
	    buffer: "JVBER...",
	    pass: "password"
	  }
	}; //#endregion
	//#region create

	exports.create = function (pdfPath, pass, buffer) {
	  if (!buffer && !pdfPath) {
	    throw new InputValidationError(["must supply pdfPath or buffer"]);
	  }

	  if (buffer) {
	    if (!pdfPath) {
	      // supplied buffer but didn't say what original filename was
	      pdfPath = "not-supplied";
	    }
	  } else {
	    // supplied pdfPath only - not buffer
	    buffer = fs.readFileSync(pdfPath);
	    buffer = buffer.toString("base64");
	  }

	  if (buffer.length > PdfTooLargeError.Max) {
	    throw new PdfTooLargeError();
	  }

	  let instance = {
	    file: path ? path.basename(pdfPath) : pdfPath,
	    buffer,
	    pass
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.isBase64EncodedPdf = function (pdfString) {
	  return pdfString.slice(0, 5) == "JVBER"; // Buffer.from("%PDF").toString('base64')
	};

	exports.validate = function (data) {
	  let validationErrors = [];

	  if (!data.file) {
	    validationErrors.push("missing required input: file");
	  }

	  if (!data.buffer) {
	    validationErrors.push("missing required input: buffer");
	  } else if (!exports.isBase64EncodedPdf(data.buffer)) {
	    validationErrors.push("invalid buffer: either not a PDF or not base64 encoded");
	  }

	  return validationErrors.length === 0 ? undefined : validationErrors;
	};

	exports.schema = {
	  type: "object",
	  properties: {
	    file: {
	      type: "string",
	      required: true
	    },
	    pass: {
	      type: "string"
	    },
	    buffer: {
	      type: "string",
	      required: true
	    }
	  }
	}; //#endregion
	//#region sanitize
	// NOTE: custom sanitizer in order to prevent buffer being deep cloned before being [redacted]

	exports.sanitize = function (data) {
	  let temp = data.buffer;
	  delete data.buffer;
	  let clone = Object.assign({
	    buffer: "[redacted]"
	  }, data);
	  data.buffer = temp;
	  return clone;
	}; //#endregion
	});
	var pdf_1 = pdf$1.code;
	var pdf_2 = pdf$1.type;
	var pdf_3 = pdf$1.marshallTo;
	var pdf_4 = pdf$1.channel;
	var pdf_5 = pdf$1.sessionBased;
	var pdf_6 = pdf$1.examples;
	var pdf_7 = pdf$1.create;
	var pdf_8 = pdf$1.isBase64EncodedPdf;
	var pdf_9 = pdf$1.validate;
	var pdf_10 = pdf$1.schema;
	var pdf_11 = pdf$1.sanitize;

	var clientGwPdf = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': pdf$1,
		__moduleExports: pdf$1,
		code: pdf_1,
		type: pdf_2,
		marshallTo: pdf_3,
		channel: pdf_4,
		sessionBased: pdf_5,
		examples: pdf_6,
		create: pdf_7,
		isBase64EncodedPdf: pdf_8,
		validate: pdf_9,
		schema: pdf_10,
		sanitize: pdf_11
	});

	var statements$1 = createCommonjsModule(function (module, exports) {
	exports.code = "statements";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: true,
	    accountNumber: "1234567890",
	    numStatements: 3
	  }
	}; //#endregion
	//#region create

	exports.create = function (sessionId, final = true, accountNumber, numStatements = 3) {
	  let instance = {
	    sessionId,
	    final,
	    accountNumber,
	    numStatements
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = basic;
	exports.additionalSchema = {
	  accountNumber: {
	    type: "string",
	    required: true,
	    minLength: 10
	  },
	  numStatements: {
	    required: true,
	    type: "integer",
	    minimum: 1,
	    maximum: 12
	  }
	};
	exports.validate = basic.compose(true, true, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = undefined;
	exports.sanitize = undefined; //#endregion
	});
	var statements_1 = statements$1.code;
	var statements_2 = statements$1.type;
	var statements_3 = statements$1.channel;
	var statements_4 = statements$1.sessionBased;
	var statements_5 = statements$1.examples;
	var statements_6 = statements$1.create;
	var statements_7 = statements$1.composer;
	var statements_8 = statements$1.additionalSchema;
	var statements_9 = statements$1.validate;
	var statements_10 = statements$1.ownSanitize;
	var statements_11 = statements$1.sanitize;

	var clientGwStatements = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': statements$1,
		__moduleExports: statements$1,
		code: statements_1,
		type: statements_2,
		channel: statements_3,
		sessionBased: statements_4,
		examples: statements_5,
		create: statements_6,
		composer: statements_7,
		additionalSchema: statements_8,
		validate: statements_9,
		ownSanitize: statements_10,
		sanitize: statements_11
	});

	var transactions$1 = createCommonjsModule(function (module, exports) {
	exports.code = "transactions";
	exports.type = enums.TYPES.INPUTS;
	exports.channel = enums.Channel.Bchan;
	exports.sessionBased = true; //#region examples

	exports.examples = {
	  default: {
	    sessionId: uuid.testUuid(),
	    final: true,
	    accountNumber: "1234567890",
	    numDays: 90
	  }
	}; //#endregion
	//#region create

	exports.create = function (sessionId, final = true, accountNumber, numDays) {
	  numDays = +numDays; // in case user supplied numDays as a string

	  let instance = {
	    sessionId,
	    final,
	    accountNumber,
	    numDays
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.composer = basic;
	exports.additionalSchema = {
	  accountNumber: {
	    type: "string",
	    required: true,
	    minLength: 10
	  },
	  numDays: {
	    required: true,
	    type: "integer",
	    minimum: 1,
	    maximum: 180
	  }
	};
	exports.validate = basic.compose(true, true, exports.additionalSchema); //#endregion
	//#region sanitize

	exports.ownSanitize = undefined;
	exports.sanitize = undefined; //#endregion
	});
	var transactions_1 = transactions$1.code;
	var transactions_2 = transactions$1.type;
	var transactions_3 = transactions$1.channel;
	var transactions_4 = transactions$1.sessionBased;
	var transactions_5 = transactions$1.examples;
	var transactions_6 = transactions$1.create;
	var transactions_7 = transactions$1.composer;
	var transactions_8 = transactions$1.additionalSchema;
	var transactions_9 = transactions$1.validate;
	var transactions_10 = transactions$1.ownSanitize;
	var transactions_11 = transactions$1.sanitize;

	var clientGwTransactions = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': transactions$1,
		__moduleExports: transactions$1,
		code: transactions_1,
		type: transactions_2,
		channel: transactions_3,
		sessionBased: transactions_4,
		examples: transactions_5,
		create: transactions_6,
		composer: transactions_7,
		additionalSchema: transactions_8,
		validate: transactions_9,
		ownSanitize: transactions_10,
		sanitize: transactions_11
	});

	var success = createCommonjsModule(function (module, exports) {
	exports.code = "accounts/success";
	exports.type = enums.TYPES.SUCCESS;
	exports.passThrough = true; // from lambda-gw
	//#region examples

	exports.examples = {
	  default: [{
	    accountNumber: "10091234567",
	    currency: "ZAR",
	    alias: "Ilan's account",
	    name: "ACCESSACC",
	    type: "Current Account",
	    currentBalance: 1000.32,
	    balance: 1000.32
	  }, {
	    accountNumber: "12345678901",
	    currency: "ZAR",
	    alias: "Another account",
	    name: "CREDIT",
	    type: "Credit Account",
	    currentBalance: -9000,
	    balance: -9000
	  }]
	}; //#endregion
	//#region create
	// TODO: note not currently used because data created by browserCode - e.g. see [$/spike-web/src/NED.0/accounts.js]

	exports.create = function (todo) {
	  let instance = {
	    todo
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.validate = {
	  type: "array",
	  minItems: 1,
	  items: {
	    type: "object",
	    properties: {
	      accountNumber: {
	        required: true,
	        type: "string"
	      },
	      currency: {
	        required: false,
	        type: "string"
	      },
	      alias: {
	        required: false,
	        type: "string"
	      },
	      name: {
	        required: true,
	        type: "string"
	      },
	      type: {
	        required: false,
	        type: "string"
	      },
	      currentBalance: {
	        required: false,
	        type: "number"
	      },
	      balance: {
	        required: true,
	        type: "number"
	      }
	    }
	  }
	}; //#endregion
	//#region sanitize
	// NOTE: array sanitizer = will be applied to every element of array by common.sanitize

	exports.sanitize = [{
	  currentBalance: "***",
	  balance: "***"
	}]; //#endregion
	});
	var success_1 = success.code;
	var success_2 = success.type;
	var success_3 = success.passThrough;
	var success_4 = success.examples;
	var success_5 = success.create;
	var success_6 = success.validate;
	var success_7 = success.sanitize;

	var gwClientAccountsSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success,
		__moduleExports: success,
		code: success_1,
		type: success_2,
		passThrough: success_3,
		examples: success_4,
		create: success_5,
		validate: success_6,
		sanitize: success_7
	});

	var code$1 = "close/success";
	var type$2 = enums.TYPES.SUCCESS;
	var noData = true;
	var passThrough = true; // from lambda-gw
	//#region examples
	// noData

	var examples = undefined; //#endregion
	//#region validate
	// noData

	var validate$3 = undefined; //#endregion
	//#region sanitize

	var sanitize = undefined; //#endregion

	var success$1 = {
		code: code$1,
		type: type$2,
		noData: noData,
		passThrough: passThrough,
		examples: examples,
		validate: validate$3,
		sanitize: sanitize
	};

	var gwClientCloseSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$1,
		__moduleExports: success$1,
		code: code$1,
		type: type$2,
		noData: noData,
		passThrough: passThrough,
		examples: examples,
		validate: validate$3,
		sanitize: sanitize
	});

	var code$2 = "csv/fail/invalid-data-extracted";
	var type$3 = enums.TYPES.ERROR;
	var passThrough$1 = true; // from lambda-gw

	var noData$1 = true;
	var blame = enums.BLAME.SPIKE;
	var noSessionId = true; // shapeExplorer

	var message = "we successfully extract the data from the csv however it did not conform to the expected output schema"; // noData

	var examples$1 = undefined;
	var validate$4 = undefined;
	var sanitize$1 = undefined;

	var invalidDataExtracted = {
		code: code$2,
		type: type$3,
		passThrough: passThrough$1,
		noData: noData$1,
		blame: blame,
		noSessionId: noSessionId,
		message: message,
		examples: examples$1,
		validate: validate$4,
		sanitize: sanitize$1
	};

	var gwClientCsvFailInvalidDataExtracted = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': invalidDataExtracted,
		__moduleExports: invalidDataExtracted,
		code: code$2,
		type: type$3,
		passThrough: passThrough$1,
		noData: noData$1,
		blame: blame,
		noSessionId: noSessionId,
		message: message,
		examples: examples$1,
		validate: validate$4,
		sanitize: sanitize$1
	});

	var code$3 = "csv/fail/multiple-matching-parsers";
	var type$4 = enums.TYPES.ERROR;
	var passThrough$2 = true; // from lambda-gw

	var noData$2 = true;
	var blame$1 = enums.BLAME.SPIKE;
	var noSessionId$1 = true; // shapeExplorer

	var message$1 = "two or more parsers were found which can process this csv"; // noData

	var examples$2 = undefined;
	var validate$5 = undefined;
	var sanitize$2 = undefined;

	var multipleMatchingParsers = {
		code: code$3,
		type: type$4,
		passThrough: passThrough$2,
		noData: noData$2,
		blame: blame$1,
		noSessionId: noSessionId$1,
		message: message$1,
		examples: examples$2,
		validate: validate$5,
		sanitize: sanitize$2
	};

	var gwClientCsvFailMultipleMatchingParsers = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': multipleMatchingParsers,
		__moduleExports: multipleMatchingParsers,
		code: code$3,
		type: type$4,
		passThrough: passThrough$2,
		noData: noData$2,
		blame: blame$1,
		noSessionId: noSessionId$1,
		message: message$1,
		examples: examples$2,
		validate: validate$5,
		sanitize: sanitize$2
	});

	var code$4 = "csv/fail/unknown-csv";
	var type$5 = enums.TYPES.ERROR;
	var passThrough$3 = true; // from lambda-gw

	var noData$3 = true;
	var blame$2 = enums.BLAME.SPIKE;
	var noSessionId$2 = true; // shapeExplorer

	var message$2 = "we did not recognise this csv format"; // noData

	var examples$3 = undefined;
	var validate$6 = undefined;
	var sanitize$3 = undefined;

	var unknownCsv = {
		code: code$4,
		type: type$5,
		passThrough: passThrough$3,
		noData: noData$3,
		blame: blame$2,
		noSessionId: noSessionId$2,
		message: message$2,
		examples: examples$3,
		validate: validate$6,
		sanitize: sanitize$3
	};

	var gwClientCsvFailUnknownCsv = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': unknownCsv,
		__moduleExports: unknownCsv,
		code: code$4,
		type: type$5,
		passThrough: passThrough$3,
		noData: noData$3,
		blame: blame$2,
		noSessionId: noSessionId$2,
		message: message$2,
		examples: examples$3,
		validate: validate$6,
		sanitize: sanitize$3
	});

	var code$5 = "csv/fail/unknown-exception";
	var type$6 = enums.TYPES.ERROR;
	var passThrough$4 = true; // from lambda-gw

	var noData$4 = true;
	var blame$3 = enums.BLAME.SPIKE;
	var noSessionId$3 = true; // shapeExplorer

	var message$3 = "an unspecified exception ocurred"; // noData

	var examples$4 = undefined;
	var validate$7 = undefined;
	var sanitize$4 = undefined;

	var unknownException = {
		code: code$5,
		type: type$6,
		passThrough: passThrough$4,
		noData: noData$4,
		blame: blame$3,
		noSessionId: noSessionId$3,
		message: message$3,
		examples: examples$4,
		validate: validate$7,
		sanitize: sanitize$4
	};

	var gwClientCsvFailUnknownException = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': unknownException,
		__moduleExports: unknownException,
		code: code$5,
		type: type$6,
		passThrough: passThrough$4,
		noData: noData$4,
		blame: blame$3,
		noSessionId: noSessionId$3,
		message: message$3,
		examples: examples$4,
		validate: validate$7,
		sanitize: sanitize$4
	});

	const resolve$1 = function (path, arrayOfNestedShapes) {

	  const deps = {
	    schemas: [],
	    shapes: []
	  };
	  let ok = true;

	  for (const child of arrayOfNestedShapes) {
	    if (!child.validate) {
	      log.fatal(`${path}: bad nested deps - child ${child.id} does not have .validate`);
	      ok = false;
	    } else {
	      // check valid nestable shape
	      if (isFunction$1(child.validate)) {
	        log.fatal(`${path}: bad nested deps - child has custom function .validate instead of a schema`);
	        ok = false;
	      }

	      if (!isObject$1(child.validate)) {
	        log.fatal(`${path}: bad nested deps - child .validate is not a schema object`);
	        ok = false;
	      }

	      if (!child.validate.id) {
	        log.fatal(`${path}: bad nested deps - child does not have an .id`);
	        ok = false;
	      } // child is a valid netsable shape - include it in deps


	      deps.schemas.push(child.validate);
	      deps.shapes.push(child); // now see whether the child has any nested deps

	      const childPath = path + ":" + child.validate.id;

	      if (child.nested) {
	        const childDeps = resolve$1(childPath, child.nested);

	        if (childDeps && childDeps.schemas && childDeps.schemas.length) {

	          deps.schemas = deps.schemas.concat(childDeps.schemas);
	          deps.shapes = deps.shapes.concat(childDeps.shapes);
	        }
	      }
	    }
	  }

	  if (!ok) {
	    throw new Error(`${path}: bad nested deps`);
	  }

	  return deps;
	};

	var nested = /*#__PURE__*/Object.freeze({
		__proto__: null,
		resolve: resolve$1
	});

	var code$6 = "gw-client/nested/transaction-no-balance";
	var validate$8 = {
	  id: "/transaction-no-balance",
	  type: "object",
	  properties: {
	    id: {
	      required: true,
	      type: "integer"
	    },
	    date: {
	      required: true,
	      format: "date-or-iso-str"
	    },
	    description: {
	      required: true,
	      type: "array",
	      items: {
	        type: "string"
	      }
	    },
	    amount: {
	      required: false,
	      type: "number"
	    }
	  }
	};
	var examples$5 = {
	  1: {
	    id: 1,
	    date: "2017-09-12T00:00:00.000Z",
	    description: ["Deposit"],
	    amount: 1600.01
	  },
	  2: {
	    id: 2,
	    date: "2017-09-12T00:00:00.000Z",
	    description: ["#Monthly Account Fee"],
	    amount: -100
	  },
	  3: {
	    id: 3,
	    date: "2017-09-12T00:00:00.000Z",
	    description: ["Woolworths"],
	    amount: -500
	  }
	};

	var transactionNoBalance = {
		code: code$6,
		validate: validate$8,
		examples: examples$5
	};

	var gwClientNestedTransactionNoBalance = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': transactionNoBalance,
		__moduleExports: transactionNoBalance,
		code: code$6,
		validate: validate$8,
		examples: examples$5
	});

	var Nested = getCjsExportFromNamespace(nested);

	var transactionsNoBalance = createCommonjsModule(function (module, exports) {
	const nested = {
	  "transaction-no-balance": transactionNoBalance
	};
	exports.code = "gw-client/nested/transactions-no-balance";
	exports.validate = {
	  id: "/transactions-no-balance",
	  type: "array",
	  items: {
	    $ref: nested["transaction-no-balance"].validate.id
	  }
	};
	exports.nested = [nested["transaction-no-balance"]];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas;
	exports.examples = {
	  default: [nested["transaction-no-balance"].examples[1], nested["transaction-no-balance"].examples[2], nested["transaction-no-balance"].examples[3]]
	};
	});
	var transactionsNoBalance_1 = transactionsNoBalance.code;
	var transactionsNoBalance_2 = transactionsNoBalance.validate;
	var transactionsNoBalance_3 = transactionsNoBalance.nested;
	var transactionsNoBalance_4 = transactionsNoBalance.nestedShapes;
	var transactionsNoBalance_5 = transactionsNoBalance.nestedSchemas;
	var transactionsNoBalance_6 = transactionsNoBalance.examples;

	var gwClientNestedTransactionsNoBalance = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': transactionsNoBalance,
		__moduleExports: transactionsNoBalance,
		code: transactionsNoBalance_1,
		validate: transactionsNoBalance_2,
		nested: transactionsNoBalance_3,
		nestedShapes: transactionsNoBalance_4,
		nestedSchemas: transactionsNoBalance_5,
		examples: transactionsNoBalance_6
	});

	var code$7 = "gw-client/nested/breaks";
	var validate$9 = {
	  id: "/breaks",
	  type: "array",
	  items: {
	    type: "object",
	    properties: {
	      prev_id: {
	        required: true,
	        type: "integer"
	      },
	      cur_id: {
	        required: true,
	        type: "integer"
	      },
	      amount: {
	        required: true,
	        type: "number"
	      },
	      diff: {
	        required: true,
	        type: "number"
	      }
	    }
	  }
	};
	var examples$6 = {
	  default: [{
	    prev_id: 1,
	    cur_id: 2,
	    amount: -100,
	    diff: -500
	  }, {
	    prev_id: 2,
	    cur_id: 3,
	    amount: -500,
	    diff: 600
	  }]
	};

	var breaks = {
		code: code$7,
		validate: validate$9,
		examples: examples$6
	};

	var gwClientNestedBreaks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': breaks,
		__moduleExports: breaks,
		code: code$7,
		validate: validate$9,
		examples: examples$6
	});

	var bankStatement = createCommonjsModule(function (module, exports) {
	const nested = {
	  transactionsNoBalance,
	  breaks
	};
	exports.code = "csv/success/bank-statement";
	exports.type = enums.TYPES.SUCCESS;
	exports.passThrough = true; // from lambda-gw

	exports.noSessionId = true; // shapeExplorer
	//#region examples

	let statement = {
	  bank: "ABS",
	  accountNumber: undefined,
	  dates: {
	    issuedOn: undefined,
	    from: "2018-08-01T00:00:00.000Z",
	    to: "2018-08-31T00:00:00.000Z"
	  },
	  nameAddress: ["Mr. J Smith"]
	};
	exports.examples = {
	  success: {
	    parser: "ABS1",
	    statement,
	    transactions: nested.transactionsNoBalance.examples.default,
	    valid: true
	  },
	  successWithBreaks: {
	    parser: "ABS1",
	    statement,
	    transactions: nested.transactionsNoBalance.examples.default,
	    breaks: nested.breaks.examples.default,
	    valid: false
	  }
	}; //#endregion
	//#region validate

	exports.validate = {
	  id: "/bank-statement-csv",
	  type: "object",
	  properties: {
	    parser: {
	      required: true,
	      type: "string",
	      enum: enums.CsvParser.bankStatements
	    },
	    statement: {
	      required: true,
	      // same as ../nested/statement-info.js but with optional params
	      type: "object",
	      properties: {
	        bank: {
	          required: true,
	          type: "string",
	          enum: Object.values(enums.Bank).map(x => x.code)
	        },
	        accountNumber: {
	          required: false,
	          type: "string"
	        },
	        dates: {
	          required: true,
	          type: "object",
	          properties: {
	            issuedOn: {
	              required: false,
	              // type: "any",
	              format: "date-or-iso-str"
	            },
	            from: {
	              required: false,
	              // type: "any",
	              format: "date-or-iso-str"
	            },
	            to: {
	              required: false,
	              // type: "any",
	              format: "date-or-iso-str"
	            }
	          }
	        },
	        nameAddress: {
	          required: false,
	          type: "array",
	          items: {
	            type: "string"
	          }
	        }
	      }
	    },
	    transactions: {
	      required: true,
	      $ref: nested.transactionsNoBalance.validate.id
	    },
	    valid: {
	      required: true,
	      type: "boolean"
	    },
	    breaks: {
	      required: false,
	      $ref: nested.breaks.validate.id
	    }
	  }
	};
	exports.nested = [nested.transactionsNoBalance, nested.breaks];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas; //#endregion
	//#region sanitize

	exports.sanitize = {
	  statement: {
	    nameAddress: "[redacted]"
	  }
	}; //#endregion
	});
	var bankStatement_1 = bankStatement.code;
	var bankStatement_2 = bankStatement.type;
	var bankStatement_3 = bankStatement.passThrough;
	var bankStatement_4 = bankStatement.noSessionId;
	var bankStatement_5 = bankStatement.examples;
	var bankStatement_6 = bankStatement.validate;
	var bankStatement_7 = bankStatement.nested;
	var bankStatement_8 = bankStatement.nestedShapes;
	var bankStatement_9 = bankStatement.nestedSchemas;
	var bankStatement_10 = bankStatement.sanitize;

	var gwClientCsvSuccessBankStatement = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': bankStatement,
		__moduleExports: bankStatement,
		code: bankStatement_1,
		type: bankStatement_2,
		passThrough: bankStatement_3,
		noSessionId: bankStatement_4,
		examples: bankStatement_5,
		validate: bankStatement_6,
		nested: bankStatement_7,
		nestedShapes: bankStatement_8,
		nestedSchemas: bankStatement_9,
		sanitize: bankStatement_10
	});

	var code$8 = "error/no-data"; // override in instance

	var type$7 = enums.TYPES.ERROR;
	var examples$7 = undefined; // override in instance

	var validate$a = undefined;
	var sanitize$5 = undefined;
	var noData_1 = true;
	var passThrough$5 = true; // from lambda-gw

	var noSessionId$4 = true; // shapeExplorer

	var noData$5 = {
		code: code$8,
		type: type$7,
		examples: examples$7,
		validate: validate$a,
		sanitize: sanitize$5,
		noData: noData_1,
		passThrough: passThrough$5,
		noSessionId: noSessionId$4
	};

	var exceededMaxConcurrentRequests = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "too many active requests, try again later",
	  code: "error/common/access/exceeded-max-concurrent-requests",
	  blame: enums.BLAME.CLIENT
	};

	var insufficientCredit = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "please purchase more credits",
	  code: "error/common/access/insufficient-credit",
	  blame: enums.BLAME.CLIENT
	};

	var authorization = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "apiKey / userKey incorrect",
	  code: "error/common/dev/authorization",
	  blame: enums.BLAME.CLIENT
	};

	var functionNotSupportedOnSite = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "site does not support this function",
	  code: "error/common/dev/function-not-supported-on-site",
	  blame: enums.BLAME.CLIENT
	};

	var code$9 = "error/array-of-strings"; // override in instance

	var type$8 = enums.TYPES.ERROR;
	var passThrough$6 = true; // from lambda-gw

	var noSessionId$5 = true; // shapeExplorer
	//#region examples

	var examples$8 = {
	  default: ["string1"]
	}; //#endregion
	//#region validate

	var validate$b = {
	  type: "array",
	  items: {
	    type: "string"
	  },
	  minItems: 1
	}; //#endregion
	//#region sanitize

	var sanitize$6 = undefined; //#endregion

	var arrayOfStrings = {
		code: code$9,
		type: type$8,
		passThrough: passThrough$6,
		noSessionId: noSessionId$5,
		examples: examples$8,
		validate: validate$b,
		sanitize: sanitize$6
	};

	var invalidInputs = {
	  // parent
	  type: arrayOfStrings.type,
	  validate: arrayOfStrings.validate,
	  sanitize: arrayOfStrings.sanitize,
	  passThrough: arrayOfStrings.passThrough,
	  noSessionId: arrayOfStrings.noSessionId,
	  // own
	  message: "incorrect inputs",
	  code: "error/common/dev/invalid-inputs",
	  blame: enums.BLAME.CLIENT,
	  examples: {
	    default: ["Request size limit of 6MB exceeded"]
	  }
	};

	var sentAnotherRequestAfterFinalResponse = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "You previously sent a request with .final=true and now have sent another request whilst the session is shutting down",
	  code: "error/common/dev/sent-another-request-after-final-response",
	  blame: enums.BLAME.CLIENT
	};

	var exception = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "an exception occurred",
	  code: "error/common/exception",
	  blame: enums.BLAME.SPIKE
	};

	var sessionInUse = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "another request is currently in progress on this session",
	  code: "error/common/session-in-use",
	  blame: enums.BLAME.CLIENT
	};

	var sessionTimedOut = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "user took too long to supply login interim inputs",
	  code: "error/common/session-timed-out",
	  blame: enums.BLAME.USER
	};

	var onlineBankingLegalDocumentation = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "This is a new account, internet banking has not been setup properly. FNB requires the user to log in and acknowledge various declarations online.",
	  code: "error/fnb/online-banking-legal-documentation",
	  blame: enums.BLAME.USER
	};

	var statementsDisabled = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "FNB has temporarily removed statements download from their site",
	  code: "error/fnb/statements-disabled",
	  blame: enums.BLAME.SITE
	};

	var loggedOff = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "ABSA logged the user off whilst we were logging in",
	  code: "error/site/abs/logged-off",
	  blame: enums.BLAME.SITE
	};

	var bankBlocked = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "The bank blocked our query",
	  code: "error/site/bank-blocked",
	  blame: enums.BLAME.SITE
	};

	var captcha = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "there is a captcha present - the user must log on and clear the captcha",
	  code: "error/site/captcha",
	  blame: enums.BLAME.USER
	};

	var inputValidationFailed = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "input validation failed",
	  code: "error/site/input-validation-failed",
	  blame: enums.BLAME.CLIENT
	};

	var internal = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "an unexpected error occurred whilst processing the request, please try again later",
	  code: "error/site/internal",
	  blame: enums.BLAME.SPIKE
	};

	var invalidAccount = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "the account number supplied is invalid",
	  code: "error/site/invalid-account",
	  blame: enums.BLAME.USER
	};

	var loginFailed = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "username and or password is incorrect",
	  code: "error/site/login-failed",
	  blame: enums.BLAME.USER
	};

	var noStatementsAvailable = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "There are no statements available for download - is this a new account?",
	  code: "error/site/no-statements-available",
	  blame: enums.BLAME.USER
	};

	var noTransactionsOverPeriod = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "There are no transactions over the past number of days which you selected",
	  code: "error/site/no-transactions-over-period",
	  blame: enums.BLAME.USER
	};

	var okGotIt = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "there is a legal notice present - the user must log on and read and dismiss the notice",
	  code: "error/site/ok-got-it",
	  blame: enums.BLAME.USER
	};

	var siteChangeDetected = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "the bank website has changed, please try again in a few hours",
	  code: "error/site/site-change-detected",
	  blame: enums.BLAME.SITE
	};

	var siteMaintenance = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "the bank website has a site maintenance notice active, please try again later",
	  code: "error/site/site-maintenance",
	  blame: enums.BLAME.SITE
	};

	var siteUnreachable = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "the bank website is down, please try again later",
	  code: "error/site/site-unreachable",
	  blame: enums.BLAME.SITE
	};

	var siteUnresponsive = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "The bank site took too long to respond. Please try again.",
	  code: "error/site/site-unresponsive",
	  blame: enums.BLAME.SITE
	};

	var denied = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "User denied our login on their 2FA device",
	  code: "error/user/denied",
	  blame: enums.BLAME.USER
	};

	var tookTooLong = {
	  // parent
	  type: noData$5.type,
	  examples: noData$5.examples,
	  validate: noData$5.validate,
	  sanitize: noData$5.sanitize,
	  noData: noData$5.noData,
	  passThrough: noData$5.passThrough,
	  noSessionId: noData$5.noSessionId,
	  // own
	  message: "User took too long to authorise",
	  code: "error/user/took-too-long",
	  blame: enums.BLAME.USER
	};

	var success$2 = createCommonjsModule(function (module, exports) {
	exports.code = "file/success";
	exports.type = enums.TYPES.SUCCESS;
	exports.passThrough = true; // from lambda-gw
	//#region examples

	exports.examples = {
	  pdf: {
	    file: "absa-estatement.pdf",
	    buffer: "...",
	    ext: ".pdf"
	  },
	  zip: {
	    file: "fnb-statements.zip",
	    buffer: "...",
	    ext: ".zip"
	  }
	}; //#endregion
	//#region create

	exports.create = function (filePath, buffer, ext) {
	  if (!buffer) {
	    buffer = fs.readFileSync(filePath);
	    buffer = buffer.toString("base64");
	  }

	  let instance = {
	    file: path.basename(filePath),
	    buffer,
	    ext
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.validate = {
	  type: "object",
	  properties: {
	    file: {
	      required: true,
	      type: "string"
	    },
	    buffer: {
	      required: true,
	      type: "string"
	    },
	    ext: {
	      required: true,
	      type: "string"
	    }
	  }
	}; //#endregion
	//#region sanitize
	// NOTE: custom sanitizer in order to prevent buffer being deep cloned before being [redacted]

	exports.sanitize = function (data) {
	  let clone = {
	    file: data.file,
	    buffer: "[redacted]",
	    ext: data.ext
	  };
	  return clone;
	}; //#endregion
	});
	var success_1$1 = success$2.code;
	var success_2$1 = success$2.type;
	var success_3$1 = success$2.passThrough;
	var success_4$1 = success$2.examples;
	var success_5$1 = success$2.create;
	var success_6$1 = success$2.validate;
	var success_7$1 = success$2.sanitize;

	var gwClientFileSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$2,
		__moduleExports: success$2,
		code: success_1$1,
		type: success_2$1,
		passThrough: success_3$1,
		examples: success_4$1,
		create: success_5$1,
		validate: success_6$1,
		sanitize: success_7$1
	});

	var code$a = "insurance/fail";
	var type$9 = enums.TYPES.ERROR;
	var passThrough$7 = true; // from lambda-gw

	var noData$6 = true;
	var blame$4 = enums.BLAME.SPIKE; // noData

	var examples$9 = undefined;
	var validate$c = undefined;
	var sanitize$7 = undefined;

	var fail = {
		code: code$a,
		type: type$9,
		passThrough: passThrough$7,
		noData: noData$6,
		blame: blame$4,
		examples: examples$9,
		validate: validate$c,
		sanitize: sanitize$7
	};

	var gwClientInsuranceFail = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': fail,
		__moduleExports: fail,
		code: code$a,
		type: type$9,
		passThrough: passThrough$7,
		noData: noData$6,
		blame: blame$4,
		examples: examples$9,
		validate: validate$c,
		sanitize: sanitize$7
	});

	var code$b = "insurance/success";
	var type$a = enums.TYPES.SUCCESS;
	var noData$7 = false;
	var passThrough$8 = true; // from lambda-gw
	//#region examples

	var examples$a = {
	  default: {
	    parser: "LIBERTY_LIFE_COVER_ANNIVERSARY_LETTER",
	    name: "CD BUCKLEY",
	    policyNumber: "59820434400",
	    total: 996.08,
	    provider: "Liberty",
	    benefits: [{
	      benefit: "Life Cover",
	      premium: 249.44,
	      cover: 1552500
	    }, {
	      benefit: "Immediate Expenses Benefit"
	    }, {
	      benefit: "Absolute Protector Plus (Ood)",
	      premium: 164.69,
	      cover: 1035000
	    }]
	  }
	}; //#endregion
	//#region validate

	var validate$d = {
	  type: "object",
	  properties: {
	    parser: {
	      required: true,
	      type: "string",
	      enum: enums.PdfParser.insurance
	    },
	    name: {
	      required: true,
	      type: "string"
	    },
	    policyNumber: {
	      required: true,
	      type: "string"
	    },
	    total: {
	      required: true,
	      type: "number"
	    },
	    provider: {
	      required: true,
	      type: "string"
	    },
	    benefits: {
	      required: true,
	      type: "array",
	      items: {
	        type: "object",
	        properties: {
	          benefit: {
	            required: true,
	            type: "string"
	          },
	          details: {
	            /* required: true,*/
	            type: "string"
	          },
	          cover: {
	            /* required: true,*/
	            type: ["number", "string"]
	          },
	          premium: {
	            /* required: true,*/
	            type: "number"
	          }
	        }
	      }
	    }
	  }
	}; //#endregion
	//#region sanitize

	var sanitize$8 = {
	  name: "[redacted]"
	}; //#endregion

	var success$3 = {
		code: code$b,
		type: type$a,
		noData: noData$7,
		passThrough: passThrough$8,
		examples: examples$a,
		validate: validate$d,
		sanitize: sanitize$8
	};

	var gwClientInsuranceSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$3,
		__moduleExports: success$3,
		code: code$b,
		type: type$a,
		noData: noData$7,
		passThrough: passThrough$8,
		examples: examples$a,
		validate: validate$d,
		sanitize: sanitize$8
	});

	var code$c = "login/interim-input-abs-pass";
	var type$b = enums.TYPES.INTERIM;
	var noData$8 = false;
	var passThrough$9 = true; // from lambda-gw
	//#region examples

	var examples$b = {
	  default: [0, 1, 2]
	}; //#endregion
	//#region validate

	var validate$e = {
	  type: "array",
	  items: {
	    type: "integer"
	  },
	  minItems: 3,
	  maxItems: 3
	}; //#endregion
	//#region sanitize

	var sanitize$9 = undefined; //#endregion

	var interimInputAbsPass = {
		code: code$c,
		type: type$b,
		noData: noData$8,
		passThrough: passThrough$9,
		examples: examples$b,
		validate: validate$e,
		sanitize: sanitize$9
	};

	var gwClientLoginInterimInputAbsPass = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': interimInputAbsPass,
		__moduleExports: interimInputAbsPass,
		code: code$c,
		type: type$b,
		noData: noData$8,
		passThrough: passThrough$9,
		examples: examples$b,
		validate: validate$e,
		sanitize: sanitize$9
	});

	var code$d = "login/interim-input-std-otp";
	var type$c = enums.TYPES.INTERIM;
	var noData$9 = true;
	var passThrough$a = true; // from lambda-gw
	//#region examples
	// noData

	var examples$c = undefined; //#endregion
	//#region validate
	// noData

	var validate$f = undefined; //#endregion
	//#region sanitize

	var sanitize$a = undefined; //#endregion

	var interimInputStdOtp = {
		code: code$d,
		type: type$c,
		noData: noData$9,
		passThrough: passThrough$a,
		examples: examples$c,
		validate: validate$f,
		sanitize: sanitize$a
	};

	var gwClientLoginInterimInputStdOtp = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': interimInputStdOtp,
		__moduleExports: interimInputStdOtp,
		code: code$d,
		type: type$c,
		noData: noData$9,
		passThrough: passThrough$a,
		examples: examples$c,
		validate: validate$f,
		sanitize: sanitize$a
	});

	var code$e = "login-interim-input/success";
	var type$d = enums.TYPES.SUCCESS;
	var noData$a = true;
	var passThrough$b = true; // from lambda-gw
	// noData

	var examples$d = undefined;
	var validate$g = undefined;
	var sanitize$b = undefined;

	var success$4 = {
		code: code$e,
		type: type$d,
		noData: noData$a,
		passThrough: passThrough$b,
		examples: examples$d,
		validate: validate$g,
		sanitize: sanitize$b
	};

	var gwClientLoginInterimInputSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$4,
		__moduleExports: success$4,
		code: code$e,
		type: type$d,
		noData: noData$a,
		passThrough: passThrough$b,
		examples: examples$d,
		validate: validate$g,
		sanitize: sanitize$b
	});

	var code$f = "login/interim-wait-cap-2fa";
	var type$e = enums.TYPES.INTERIM;
	var noData$b = true;
	var passThrough$c = true; // from lambda-gw
	//#region examples
	// noData

	var examples$e = undefined; //#endregion
	//#region validate
	// noData

	var validate$h = undefined; //#endregion
	//#region sanitize

	var sanitize$c = undefined; //#endregion

	var interimWaitCap2fa = {
		code: code$f,
		type: type$e,
		noData: noData$b,
		passThrough: passThrough$c,
		examples: examples$e,
		validate: validate$h,
		sanitize: sanitize$c
	};

	var gwClientLoginInterimWaitCap2fa = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': interimWaitCap2fa,
		__moduleExports: interimWaitCap2fa,
		code: code$f,
		type: type$e,
		noData: noData$b,
		passThrough: passThrough$c,
		examples: examples$e,
		validate: validate$h,
		sanitize: sanitize$c
	});

	var code$g = "login-interim-wait/success";
	var type$f = enums.TYPES.SUCCESS;
	var noData$c = true;
	var passThrough$d = true; // from lambda-gw
	//#region examples
	// noData

	var examples$f = undefined; //#endregion
	//#region validate

	var validate$i = undefined; //#endregion
	//#region sanitize

	var sanitize$d = undefined; //#endregion

	var success$5 = {
		code: code$g,
		type: type$f,
		noData: noData$c,
		passThrough: passThrough$d,
		examples: examples$f,
		validate: validate$i,
		sanitize: sanitize$d
	};

	var gwClientLoginInterimWaitSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$5,
		__moduleExports: success$5,
		code: code$g,
		type: type$f,
		noData: noData$c,
		passThrough: passThrough$d,
		examples: examples$f,
		validate: validate$i,
		sanitize: sanitize$d
	});

	var code$h = "login/success";
	var type$g = enums.TYPES.SUCCESS;
	var noData$d = true;
	var passThrough$e = true; // from lambda-gw
	//#region examples
	// noData

	var examples$g = undefined; //#endregion
	//#region validate
	// noData

	var validate$j = undefined; //#endregion
	//#region sanitize

	var sanitize$e = undefined; //#endregion

	var success$6 = {
		code: code$h,
		type: type$g,
		noData: noData$d,
		passThrough: passThrough$e,
		examples: examples$g,
		validate: validate$j,
		sanitize: sanitize$e
	};

	var gwClientLoginSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$6,
		__moduleExports: success$6,
		code: code$h,
		type: type$g,
		noData: noData$d,
		passThrough: passThrough$e,
		examples: examples$g,
		validate: validate$j,
		sanitize: sanitize$e
	});

	var code$i = "gw-client/nested/statement-info";
	var validate$k = {
	  id: "/statement-info",
	  type: "object",
	  properties: {
	    bank: {
	      required: true,
	      type: "string",
	      enum: Object.values(enums.Bank).map(x => x.code)
	    },
	    accountNumber: {
	      required: true,
	      type: "string"
	    },
	    dates: {
	      required: true,
	      type: "object",
	      properties: {
	        issuedOn: {
	          required: false,
	          // type: "any",
	          format: "date-or-iso-str"
	        },
	        from: {
	          required: true,
	          // type: "any",
	          format: "date-or-iso-str"
	        },
	        to: {
	          required: true,
	          // type: "any",
	          format: "date-or-iso-str"
	        }
	      }
	    },
	    nameAddress: {
	      required: true,
	      type: "array",
	      items: {
	        type: "string"
	      }
	    },
	    statementBalance: {
	      required: false,
	      type: "number"
	    }
	  }
	};
	var examples$h = {
	  default: {
	    bank: "ABS",
	    accountNumber: "9017446437",
	    dates: {
	      issuedOn: "2018-09-02T00:00:00.000Z",
	      from: "2018-08-01T00:00:00.000Z",
	      to: "2018-08-31T00:00:00.000Z"
	    },
	    nameAddress: ["Mr. J Smith", "10 Main Road", "Cape Town", "8001"]
	  }
	};
	var sanitize$f = {
	  nameAddress: "[redacted]"
	};

	var statementInfo = {
		code: code$i,
		validate: validate$k,
		examples: examples$h,
		sanitize: sanitize$f
	};

	var gwClientNestedStatementInfo = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': statementInfo,
		__moduleExports: statementInfo,
		code: code$i,
		validate: validate$k,
		examples: examples$h,
		sanitize: sanitize$f
	});

	var code$j = "gw-client/nested/transaction";
	var validate$l = {
	  id: "/transaction",
	  type: "object",
	  properties: {
	    id: {
	      required: true,
	      type: "integer"
	    },
	    date: {
	      required: true,
	      format: "date-or-iso-str"
	    },
	    description: {
	      required: true,
	      type: "array",
	      items: {
	        type: "string"
	      }
	    },
	    amount: {
	      required: false,
	      type: "number"
	    },
	    balance: {
	      required: true,
	      type: "number"
	    }
	  }
	};
	var examples$i = {
	  1: {
	    id: 1,
	    date: "2017-09-12T00:00:00.000Z",
	    description: ["Deposit"],
	    amount: 1600.01,
	    balance: 1600.01
	  },
	  2: {
	    id: 2,
	    date: "2017-09-12T00:00:00.000Z",
	    description: ["#Monthly Account Fee"],
	    amount: -100,
	    balance: 1000.01
	  },
	  3: {
	    id: 3,
	    date: "2017-09-12T00:00:00.000Z",
	    description: ["Woolworths"],
	    amount: -500,
	    balance: 1100.01
	  }
	};

	var transaction = {
		code: code$j,
		validate: validate$l,
		examples: examples$i
	};

	var gwClientNestedTransaction = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': transaction,
		__moduleExports: transaction,
		code: code$j,
		validate: validate$l,
		examples: examples$i
	});

	var transactions$2 = createCommonjsModule(function (module, exports) {
	const nested = {
	  transaction
	};
	exports.code = "gw-client/nested/transactions";
	exports.validate = {
	  id: "/transactions",
	  type: "array",
	  items: {
	    $ref: nested.transaction.validate.id
	  }
	};
	exports.nested = [nested.transaction];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas;
	exports.examples = {
	  default: [nested.transaction.examples[1], nested.transaction.examples[2], nested.transaction.examples[3]]
	};
	});
	var transactions_1$1 = transactions$2.code;
	var transactions_2$1 = transactions$2.validate;
	var transactions_3$1 = transactions$2.nested;
	var transactions_4$1 = transactions$2.nestedShapes;
	var transactions_5$1 = transactions$2.nestedSchemas;
	var transactions_6$1 = transactions$2.examples;

	var gwClientNestedTransactions = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': transactions$2,
		__moduleExports: transactions$2,
		code: transactions_1$1,
		validate: transactions_2$1,
		nested: transactions_3$1,
		nestedShapes: transactions_4$1,
		nestedSchemas: transactions_5$1,
		examples: transactions_6$1
	});

	var autoDetect = createCommonjsModule(function (module, exports) {
	exports.code = "pdf/fail/auto-detect";
	exports.type = enums.TYPES.ERROR;
	exports.passThrough = true; // from lambda-gw

	exports.blame = enums.BLAME.USER;
	exports.noSessionId = true; // shapeExplorer

	exports.message = "the pdf matched a pattern which we don't process";
	exports.Types = {
	  "scan-rule-auto": "has been scanned - meta data matched a known scanner - like Canon, Ricoh",
	  "broken-utf16-auto": "the pdf has been modified and re-saved with utf16 encoding - we don't support this encoding",
	  "broken-encoding-auto": "the pdf has been modified and re-saved with an unknown encoding - the text is unreadable",
	  "junk-rule-auto": "this matches a known pdf document which we see frequently and don't support - like Game Credit Statements, CIPC documents, IDs, etc...",
	  "new-todo-rule-auto": "Forthcoming feature - i.e. a new parser which we've identified but not yet had time to implement",
	  "unsupported-rule-auto": "text matched a known unsupported pdf format - like Africa Bank Loan Statements, Absa Investment Summaries, Bidvest Cardholder Statements, etc..."
	};
	exports.examples = {
	  scan: {
	    type: "scan-rule-auto",
	    message: exports.Types["scan-rule-auto"]
	  },
	  utf16: {
	    type: "broken-utf16-auto",
	    message: exports.Types["broken-utf16-auto"]
	  },
	  encoding: {
	    type: "broken-encoding-auto",
	    message: exports.Types["broken-encoding-auto"]
	  },
	  junk: {
	    type: "junk-rule-auto",
	    message: exports.Types["junk-rule-auto"]
	  },
	  newTodo: {
	    type: "new-todo-rule-auto",
	    message: exports.Types["new-todo-rule-auto"]
	  },
	  unsupported: {
	    type: "unsupported-rule-auto",
	    message: exports.Types["unsupported-rule-auto"]
	  }
	};

	exports.create = function (type) {
	  return {
	    type,
	    message: exports.Types[type]
	  };
	};

	exports.validate = {
	  type: "object",
	  properties: {
	    type: {
	      required: true,
	      type: "string",
	      enum: Object.keys(exports.Types)
	    },
	    message: {
	      required: false,
	      type: "string"
	    }
	  }
	};
	exports.sanitize = undefined;
	});
	var autoDetect_1 = autoDetect.code;
	var autoDetect_2 = autoDetect.type;
	var autoDetect_3 = autoDetect.passThrough;
	var autoDetect_4 = autoDetect.blame;
	var autoDetect_5 = autoDetect.noSessionId;
	var autoDetect_6 = autoDetect.message;
	var autoDetect_7 = autoDetect.Types;
	var autoDetect_8 = autoDetect.examples;
	var autoDetect_9 = autoDetect.create;
	var autoDetect_10 = autoDetect.validate;
	var autoDetect_11 = autoDetect.sanitize;

	var gwClientPdfFailAutoDetect = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': autoDetect,
		__moduleExports: autoDetect,
		code: autoDetect_1,
		type: autoDetect_2,
		passThrough: autoDetect_3,
		blame: autoDetect_4,
		noSessionId: autoDetect_5,
		message: autoDetect_6,
		Types: autoDetect_7,
		examples: autoDetect_8,
		create: autoDetect_9,
		validate: autoDetect_10,
		sanitize: autoDetect_11
	});

	var code$k = "pdf/fail/failed-to-extract-credit-breakdown";
	var type$h = enums.TYPES.ERROR;
	var passThrough$f = true; // from lambda-gw

	var noData$e = true;
	var blame$5 = enums.BLAME.SPIKE;
	var noSessionId$6 = true; // shapeExplorer

	var message$4 = "couldn't find the breakdown/overview section in a credit card statement"; // noData

	var examples$j = undefined;
	var validate$m = undefined;
	var sanitize$g = undefined;

	var failedToExtractCreditBreakdown = {
		code: code$k,
		type: type$h,
		passThrough: passThrough$f,
		noData: noData$e,
		blame: blame$5,
		noSessionId: noSessionId$6,
		message: message$4,
		examples: examples$j,
		validate: validate$m,
		sanitize: sanitize$g
	};

	var gwClientPdfFailFailedToExtractCreditBreakdown = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': failedToExtractCreditBreakdown,
		__moduleExports: failedToExtractCreditBreakdown,
		code: code$k,
		type: type$h,
		passThrough: passThrough$f,
		noData: noData$e,
		blame: blame$5,
		noSessionId: noSessionId$6,
		message: message$4,
		examples: examples$j,
		validate: validate$m,
		sanitize: sanitize$g
	});

	var code$l = "pdf/fail/failed-to-extract-statement-date";
	var type$i = enums.TYPES.ERROR;
	var passThrough$g = true; // from lambda-gw

	var noData$f = true;
	var blame$6 = enums.BLAME.SPIKE;
	var noSessionId$7 = true; // shapeExplorer

	var message$5 = "we need the statement date in order to determine the transaction date in a statement format which excludes the year from any dates"; // noData

	var examples$k = undefined;
	var validate$n = undefined;
	var sanitize$h = undefined;

	var failedToExtractStatementDate = {
		code: code$l,
		type: type$i,
		passThrough: passThrough$g,
		noData: noData$f,
		blame: blame$6,
		noSessionId: noSessionId$7,
		message: message$5,
		examples: examples$k,
		validate: validate$n,
		sanitize: sanitize$h
	};

	var gwClientPdfFailFailedToExtractStatementDate = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': failedToExtractStatementDate,
		__moduleExports: failedToExtractStatementDate,
		code: code$l,
		type: type$i,
		passThrough: passThrough$g,
		noData: noData$f,
		blame: blame$6,
		noSessionId: noSessionId$7,
		message: message$5,
		examples: examples$k,
		validate: validate$n,
		sanitize: sanitize$h
	});

	var code$m = "pdf/fail/file-not-found";
	var type$j = enums.TYPES.ERROR;
	var passThrough$h = true; // from lambda-gw

	var noData$g = true;
	var blame$7 = enums.BLAME.SPIKE;
	var noSessionId$8 = true; // shapeExplorer

	var message$6 = "internal error"; // noData

	var examples$l = undefined;
	var validate$o = undefined;
	var sanitize$i = undefined;

	var fileNotFound = {
		code: code$m,
		type: type$j,
		passThrough: passThrough$h,
		noData: noData$g,
		blame: blame$7,
		noSessionId: noSessionId$8,
		message: message$6,
		examples: examples$l,
		validate: validate$o,
		sanitize: sanitize$i
	};

	var gwClientPdfFailFileNotFound = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': fileNotFound,
		__moduleExports: fileNotFound,
		code: code$m,
		type: type$j,
		passThrough: passThrough$h,
		noData: noData$g,
		blame: blame$7,
		noSessionId: noSessionId$8,
		message: message$6,
		examples: examples$l,
		validate: validate$o,
		sanitize: sanitize$i
	});

	var code$n = "pdf/fail/image-pdf";
	var type$k = enums.TYPES.ERROR;
	var passThrough$i = true; // from lambda-gw

	var noData$h = true;
	var blame$8 = enums.BLAME.USER;
	var noSessionId$9 = true; // shapeExplorer

	var message$7 = "PDF is image based not text based, and hence can't be parsed"; // noData

	var examples$m = undefined;
	var validate$p = undefined;
	var sanitize$j = undefined;

	var imagePdf = {
		code: code$n,
		type: type$k,
		passThrough: passThrough$i,
		noData: noData$h,
		blame: blame$8,
		noSessionId: noSessionId$9,
		message: message$7,
		examples: examples$m,
		validate: validate$p,
		sanitize: sanitize$j
	};

	var gwClientPdfFailImagePdf = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': imagePdf,
		__moduleExports: imagePdf,
		code: code$n,
		type: type$k,
		passThrough: passThrough$i,
		noData: noData$h,
		blame: blame$8,
		noSessionId: noSessionId$9,
		message: message$7,
		examples: examples$m,
		validate: validate$p,
		sanitize: sanitize$j
	});

	var code$o = "pdf/fail/image-pdf-with-ocr";
	var type$l = enums.TYPES.ERROR;
	var passThrough$j = true; // from lambda-gw

	var noData$i = true;
	var blame$9 = enums.BLAME.USER;
	var noSessionId$a = true; // shapeExplorer

	var message$8 = "PDF contains a scanned image with OCR text, and hence can't be parsed"; // noData

	var examples$n = undefined;
	var validate$q = undefined;
	var sanitize$k = undefined;

	var imagePdfWithOcr = {
		code: code$o,
		type: type$l,
		passThrough: passThrough$j,
		noData: noData$i,
		blame: blame$9,
		noSessionId: noSessionId$a,
		message: message$8,
		examples: examples$n,
		validate: validate$q,
		sanitize: sanitize$k
	};

	var gwClientPdfFailImagePdfWithOcr = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': imagePdfWithOcr,
		__moduleExports: imagePdfWithOcr,
		code: code$o,
		type: type$l,
		passThrough: passThrough$j,
		noData: noData$i,
		blame: blame$9,
		noSessionId: noSessionId$a,
		message: message$8,
		examples: examples$n,
		validate: validate$q,
		sanitize: sanitize$k
	});

	var code$p = "pdf/fail/invalid-data-extracted";
	var type$m = enums.TYPES.ERROR;
	var passThrough$k = true; // from lambda-gw

	var noData$j = true;
	var blame$a = enums.BLAME.SPIKE;
	var noSessionId$b = true; // shapeExplorer

	var message$9 = "we successfully extract the data from the statement however it did not conform to the expected output schema"; // noData

	var examples$o = undefined;
	var validate$r = undefined;
	var sanitize$l = undefined;

	var invalidDataExtracted$1 = {
		code: code$p,
		type: type$m,
		passThrough: passThrough$k,
		noData: noData$j,
		blame: blame$a,
		noSessionId: noSessionId$b,
		message: message$9,
		examples: examples$o,
		validate: validate$r,
		sanitize: sanitize$l
	};

	var gwClientPdfFailInvalidDataExtracted = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': invalidDataExtracted$1,
		__moduleExports: invalidDataExtracted$1,
		code: code$p,
		type: type$m,
		passThrough: passThrough$k,
		noData: noData$j,
		blame: blame$a,
		noSessionId: noSessionId$b,
		message: message$9,
		examples: examples$o,
		validate: validate$r,
		sanitize: sanitize$l
	});

	var code$q = "pdf/fail/invalid-pdf-exception";
	var type$n = enums.TYPES.ERROR;
	var passThrough$l = true; // from lambda-gw

	var noData$k = true;
	var blame$b = enums.BLAME.SPIKE;
	var noSessionId$c = true; // shapeExplorer

	var message$a = "the pdf does not have a valid structure"; // noData

	var examples$p = undefined;
	var validate$s = undefined;
	var sanitize$m = undefined;

	var invalidPdfException = {
		code: code$q,
		type: type$n,
		passThrough: passThrough$l,
		noData: noData$k,
		blame: blame$b,
		noSessionId: noSessionId$c,
		message: message$a,
		examples: examples$p,
		validate: validate$s,
		sanitize: sanitize$m
	};

	var gwClientPdfFailInvalidPdfException = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': invalidPdfException,
		__moduleExports: invalidPdfException,
		code: code$q,
		type: type$n,
		passThrough: passThrough$l,
		noData: noData$k,
		blame: blame$b,
		noSessionId: noSessionId$c,
		message: message$a,
		examples: examples$p,
		validate: validate$s,
		sanitize: sanitize$m
	});

	var code$r = "pdf/fail/multiple-matching-parsers";
	var type$o = enums.TYPES.ERROR;
	var passThrough$m = true; // from lambda-gw

	var noData$l = true;
	var blame$c = enums.BLAME.SPIKE;
	var noSessionId$d = true; // shapeExplorer

	var message$b = "two or more parsers were found which can process this pdf"; // noData

	var examples$q = undefined;
	var validate$t = undefined;
	var sanitize$n = undefined;

	var multipleMatchingParsers$1 = {
		code: code$r,
		type: type$o,
		passThrough: passThrough$m,
		noData: noData$l,
		blame: blame$c,
		noSessionId: noSessionId$d,
		message: message$b,
		examples: examples$q,
		validate: validate$t,
		sanitize: sanitize$n
	};

	var gwClientPdfFailMultipleMatchingParsers = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': multipleMatchingParsers$1,
		__moduleExports: multipleMatchingParsers$1,
		code: code$r,
		type: type$o,
		passThrough: passThrough$m,
		noData: noData$l,
		blame: blame$c,
		noSessionId: noSessionId$d,
		message: message$b,
		examples: examples$q,
		validate: validate$t,
		sanitize: sanitize$n
	});

	var code$s = "pdf/fail/password-incorrect";
	var type$p = enums.TYPES.ERROR;
	var passThrough$n = true; // from lambda-gw

	var noData$m = true;
	var blame$d = enums.BLAME.USER;
	var noSessionId$e = true; // shapeExplorer

	var message$c = "the password which you supplied failed to decrypt the pdf"; // noData

	var examples$r = undefined;
	var validate$u = undefined;
	var sanitize$o = undefined;

	var passwordIncorrect = {
		code: code$s,
		type: type$p,
		passThrough: passThrough$n,
		noData: noData$m,
		blame: blame$d,
		noSessionId: noSessionId$e,
		message: message$c,
		examples: examples$r,
		validate: validate$u,
		sanitize: sanitize$o
	};

	var gwClientPdfFailPasswordIncorrect = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': passwordIncorrect,
		__moduleExports: passwordIncorrect,
		code: code$s,
		type: type$p,
		passThrough: passThrough$n,
		noData: noData$m,
		blame: blame$d,
		noSessionId: noSessionId$e,
		message: message$c,
		examples: examples$r,
		validate: validate$u,
		sanitize: sanitize$o
	});

	var code$t = "pdf/fail/password-required";
	var type$q = enums.TYPES.ERROR;
	var passThrough$o = true; // from lambda-gw

	var noData$n = true;
	var blame$e = enums.BLAME.USER;
	var noSessionId$f = true; // shapeExplorer

	var message$d = "the password which you supplied is encrypted - you must supply a password"; // noData

	var examples$s = undefined;
	var validate$v = undefined;
	var sanitize$p = undefined;

	var passwordRequired = {
		code: code$t,
		type: type$q,
		passThrough: passThrough$o,
		noData: noData$n,
		blame: blame$e,
		noSessionId: noSessionId$f,
		message: message$d,
		examples: examples$s,
		validate: validate$v,
		sanitize: sanitize$p
	};

	var gwClientPdfFailPasswordRequired = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': passwordRequired,
		__moduleExports: passwordRequired,
		code: code$t,
		type: type$q,
		passThrough: passThrough$o,
		noData: noData$n,
		blame: blame$e,
		noSessionId: noSessionId$f,
		message: message$d,
		examples: examples$s,
		validate: validate$v,
		sanitize: sanitize$p
	});

	var code$u = "pdf/fail/pdf-js-error";
	var type$r = enums.TYPES.ERROR;
	var passThrough$p = true; // from lambda-gw

	var noData$o = true;
	var blame$f = enums.BLAME.SPIKE;
	var noSessionId$g = true; // shapeExplorer

	var message$e = "internal error"; // noData

	var examples$t = undefined;
	var validate$w = undefined;
	var sanitize$q = undefined;

	var pdfJsError = {
		code: code$u,
		type: type$r,
		passThrough: passThrough$p,
		noData: noData$o,
		blame: blame$f,
		noSessionId: noSessionId$g,
		message: message$e,
		examples: examples$t,
		validate: validate$w,
		sanitize: sanitize$q
	};

	var gwClientPdfFailPdfJsError = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': pdfJsError,
		__moduleExports: pdfJsError,
		code: code$u,
		type: type$r,
		passThrough: passThrough$p,
		noData: noData$o,
		blame: blame$f,
		noSessionId: noSessionId$g,
		message: message$e,
		examples: examples$t,
		validate: validate$w,
		sanitize: sanitize$q
	});

	var code$v = "pdf/fail/pdf-js-exception";
	var type$s = enums.TYPES.ERROR;
	var passThrough$q = true; // from lambda-gw

	var noData$p = true;
	var blame$g = enums.BLAME.SPIKE;
	var noSessionId$h = true; // shapeExplorer

	var message$f = "internal error"; // noData

	var examples$u = undefined;
	var validate$x = undefined;
	var sanitize$r = undefined;

	var pdfJsException = {
		code: code$v,
		type: type$s,
		passThrough: passThrough$q,
		noData: noData$p,
		blame: blame$g,
		noSessionId: noSessionId$h,
		message: message$f,
		examples: examples$u,
		validate: validate$x,
		sanitize: sanitize$r
	};

	var gwClientPdfFailPdfJsException = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': pdfJsException,
		__moduleExports: pdfJsException,
		code: code$v,
		type: type$s,
		passThrough: passThrough$q,
		noData: noData$p,
		blame: blame$g,
		noSessionId: noSessionId$h,
		message: message$f,
		examples: examples$u,
		validate: validate$x,
		sanitize: sanitize$r
	});

	var code$w = "pdf/fail/pdf-read-exception";
	var type$t = enums.TYPES.ERROR;
	var passThrough$r = true; // from lambda-gw

	var noData$q = true;
	var blame$h = enums.BLAME.SPIKE;
	var noSessionId$i = true; // shapeExplorer

	var message$g = "internal error"; // noData

	var examples$v = undefined;
	var validate$y = undefined;
	var sanitize$s = undefined;

	var pdfReadException = {
		code: code$w,
		type: type$t,
		passThrough: passThrough$r,
		noData: noData$q,
		blame: blame$h,
		noSessionId: noSessionId$i,
		message: message$g,
		examples: examples$v,
		validate: validate$y,
		sanitize: sanitize$s
	};

	var gwClientPdfFailPdfReadException = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': pdfReadException,
		__moduleExports: pdfReadException,
		code: code$w,
		type: type$t,
		passThrough: passThrough$r,
		noData: noData$q,
		blame: blame$h,
		noSessionId: noSessionId$i,
		message: message$g,
		examples: examples$v,
		validate: validate$y,
		sanitize: sanitize$s
	});

	var code$x = "pdf/fail/unknown-exception";
	var type$u = enums.TYPES.ERROR;
	var passThrough$s = true; // from lambda-gw

	var noData$r = true;
	var blame$i = enums.BLAME.SPIKE;
	var noSessionId$j = true; // shapeExplorer

	var message$h = "an unspecified exception ocurred"; // noData

	var examples$w = undefined;
	var validate$z = undefined;
	var sanitize$t = undefined;

	var unknownException$1 = {
		code: code$x,
		type: type$u,
		passThrough: passThrough$s,
		noData: noData$r,
		blame: blame$i,
		noSessionId: noSessionId$j,
		message: message$h,
		examples: examples$w,
		validate: validate$z,
		sanitize: sanitize$t
	};

	var gwClientPdfFailUnknownException = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': unknownException$1,
		__moduleExports: unknownException$1,
		code: code$x,
		type: type$u,
		passThrough: passThrough$s,
		noData: noData$r,
		blame: blame$i,
		noSessionId: noSessionId$j,
		message: message$h,
		examples: examples$w,
		validate: validate$z,
		sanitize: sanitize$t
	});

	var code$y = "pdf/fail/unknown-pdf";
	var type$v = enums.TYPES.ERROR;
	var passThrough$t = true; // from lambda-gw

	var noData$s = true;
	var blame$j = enums.BLAME.SPIKE;
	var noSessionId$k = true; // shapeExplorer

	var message$i = "we did not recognise this pdf format"; // noData

	var examples$x = undefined;
	var validate$A = undefined;
	var sanitize$u = undefined;

	var unknownPdf = {
		code: code$y,
		type: type$v,
		passThrough: passThrough$t,
		noData: noData$s,
		blame: blame$j,
		noSessionId: noSessionId$k,
		message: message$i,
		examples: examples$x,
		validate: validate$A,
		sanitize: sanitize$u
	};

	var gwClientPdfFailUnknownPdf = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': unknownPdf,
		__moduleExports: unknownPdf,
		code: code$y,
		type: type$v,
		passThrough: passThrough$t,
		noData: noData$s,
		blame: blame$j,
		noSessionId: noSessionId$k,
		message: message$i,
		examples: examples$x,
		validate: validate$A,
		sanitize: sanitize$u
	});

	var bankStatementNormal = createCommonjsModule(function (module, exports) {
	// NOTE: nested/bank-statement was shared by:
	// - "statements/success" - (now obsolete) which has an array of nested/bank-statement's
	// - "pdf/success/bank-statement-normal"
	// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/bank-statement-normal", "pdf/success/bank-statement-no-balance" ]










	const nested = {
	  "statement-info": statementInfo,
	  transactions: transactions$2,
	  breaks
	};
	exports.code = "gw-client/nested/bank-statement-normal";
	exports.validate = {
	  id: "/bank-statement-normal",
	  type: "object",
	  properties: {
	    parser: {
	      required: true,
	      type: "string",
	      enum: enums.PdfParser.bankStatementsNormal
	    },
	    statement: {
	      required: true,
	      $ref: nested["statement-info"].validate.id
	    },
	    transactions: {
	      required: true,
	      $ref: nested.transactions.validate.id
	    },
	    valid: {
	      required: true,
	      type: "boolean"
	    },
	    breaks: {
	      required: false,
	      $ref: nested.breaks.validate.id
	    },
	    buffer: {
	      required: false,
	      type: "string"
	    }
	  }
	};
	exports.nested = [nested["statement-info"], nested.transactions, nested.breaks];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas;
	exports.examples = {
	  success: {
	    parser: "FNB_RETAIL_ALL_0",
	    statement: nested["statement-info"].examples.default,
	    transactions: nested.transactions.examples.default,
	    valid: true
	  },
	  successWithBreaks: {
	    parser: "FNB_RETAIL_ALL_0",
	    statement: nested["statement-info"].examples.default,
	    transactions: nested.transactions.examples.default,
	    breaks: nested.breaks.examples.default,
	    valid: false
	  }
	};
	exports.sanitize = {
	  statement: nested["statement-info"].sanitize,
	  buffer: "[redacted]"
	};
	});
	var bankStatementNormal_1 = bankStatementNormal.code;
	var bankStatementNormal_2 = bankStatementNormal.validate;
	var bankStatementNormal_3 = bankStatementNormal.nested;
	var bankStatementNormal_4 = bankStatementNormal.nestedShapes;
	var bankStatementNormal_5 = bankStatementNormal.nestedSchemas;
	var bankStatementNormal_6 = bankStatementNormal.examples;
	var bankStatementNormal_7 = bankStatementNormal.sanitize;

	const nested$1 = {
	  // NOTE: nested/bank-statement was shared by:
	  // - "statements/success" - (now obsolete) which has an array of nested/bank-statement's
	  // - "pdf/success/bank-statement-normal"
	  "bank-statement-normal": bankStatementNormal
	};
	var code$z = "pdf/success/bank-statement-normal";
	var type$w = enums.TYPES.SUCCESS;
	var passThrough$u = true; // from lambda-gw

	var noSessionId$l = true; // shapeExplorer
	//#region examples

	var examples$y = nested$1["bank-statement-normal"].examples; //#endregion
	//#region validate

	var validate$B = nested$1["bank-statement-normal"].validate;
	var nested_1 = nested$1["bank-statement-normal"].nested;
	var nestedShapes = nested$1["bank-statement-normal"].nestedShapes;
	var nestedSchemas = nested$1["bank-statement-normal"].nestedSchemas; //#endregion
	//#region sanitize

	var sanitize$v = nested$1["bank-statement-normal"].sanitize; //#endregion

	var bankStatementNormal_1$1 = {
		code: code$z,
		type: type$w,
		passThrough: passThrough$u,
		noSessionId: noSessionId$l,
		examples: examples$y,
		validate: validate$B,
		nested: nested_1,
		nestedShapes: nestedShapes,
		nestedSchemas: nestedSchemas,
		sanitize: sanitize$v
	};

	var gwClientPdfSuccessBankStatementNormal = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': bankStatementNormal_1$1,
		__moduleExports: bankStatementNormal_1$1,
		code: code$z,
		type: type$w,
		passThrough: passThrough$u,
		noSessionId: noSessionId$l,
		examples: examples$y,
		validate: validate$B,
		nested: nested_1,
		nestedShapes: nestedShapes,
		nestedSchemas: nestedSchemas,
		sanitize: sanitize$v
	});

	var bankStatementNoBalance = createCommonjsModule(function (module, exports) {
	// NOTE: nested/bank-statement is shared by:
	// - "pdf/success/bank-statement-no-balance"
	// - "pdf/success/credit-card-simple"
	// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/credit-card-breakdown", "pdf/success/credit-card-simple" ]
	// NOTE3: no ".breaks" because we don't have a balance to do running total breaks on








	const nested = {
	  "statement-info": statementInfo,
	  "transactions-no-balance": transactionsNoBalance
	};
	exports.code = "gw-client/nested/bank-statement-no-balance";
	exports.validate = {
	  id: "/bank-statement-no-balance",
	  type: "object",
	  properties: {
	    parser: {
	      required: true,
	      type: "string",
	      enum: enums.PdfParser.bankStatementsNoBalance
	    },
	    statement: {
	      required: true,
	      $ref: nested["statement-info"].validate.id
	    },
	    transactions: {
	      required: true,
	      $ref: nested["transactions-no-balance"].validate.id
	    },
	    valid: {
	      required: true,
	      type: "boolean"
	    }
	  }
	};
	exports.nested = [nested["statement-info"], nested["transactions-no-balance"]];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas;
	exports.examples = {
	  success: {
	    parser: "NEDBANK_ACCBAL_WEB",
	    statement: nested["statement-info"].examples.default,
	    transactions: nested["transactions-no-balance"].examples.default,
	    valid: true
	  }
	};
	exports.sanitize = {
	  statement: nested["statement-info"].sanitize
	};
	});
	var bankStatementNoBalance_1 = bankStatementNoBalance.code;
	var bankStatementNoBalance_2 = bankStatementNoBalance.validate;
	var bankStatementNoBalance_3 = bankStatementNoBalance.nested;
	var bankStatementNoBalance_4 = bankStatementNoBalance.nestedShapes;
	var bankStatementNoBalance_5 = bankStatementNoBalance.nestedSchemas;
	var bankStatementNoBalance_6 = bankStatementNoBalance.examples;
	var bankStatementNoBalance_7 = bankStatementNoBalance.sanitize;

	const nested$2 = {
	  // NOTE: nested/bank-statement-no-balance is shared by:
	  // - "pdf/success/bank-statement-no-balance"
	  // - "pdf/success/credit-card-simple"
	  "bank-statement-no-balance": bankStatementNoBalance
	};
	var code$A = "pdf/success/bank-statement-no-balance";
	var type$x = enums.TYPES.SUCCESS;
	var passThrough$v = true; // from lambda-gw

	var noSessionId$m = true; // shapeExplorer
	//#region examples

	var examples$z = nested$2["bank-statement-no-balance"].examples; //#endregion
	//#region validate

	var validate$C = nested$2["bank-statement-no-balance"].validate;
	var nested_1$1 = nested$2["bank-statement-no-balance"].nested;
	var nestedShapes$1 = nested$2["bank-statement-no-balance"].nestedShapes;
	var nestedSchemas$1 = nested$2["bank-statement-no-balance"].nestedSchemas; //#endregion
	//#region sanitize

	var sanitize$w = nested$2["bank-statement-no-balance"].sanitize; //#endregion

	var bankStatementNoBalance_1$1 = {
		code: code$A,
		type: type$x,
		passThrough: passThrough$v,
		noSessionId: noSessionId$m,
		examples: examples$z,
		validate: validate$C,
		nested: nested_1$1,
		nestedShapes: nestedShapes$1,
		nestedSchemas: nestedSchemas$1,
		sanitize: sanitize$w
	};

	var gwClientPdfSuccessBankStatementNoBalance = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': bankStatementNoBalance_1$1,
		__moduleExports: bankStatementNoBalance_1$1,
		code: code$A,
		type: type$x,
		passThrough: passThrough$v,
		noSessionId: noSessionId$m,
		examples: examples$z,
		validate: validate$C,
		nested: nested_1$1,
		nestedShapes: nestedShapes$1,
		nestedSchemas: nestedSchemas$1,
		sanitize: sanitize$w
	});

	var code$B = "pdf/success/credit-card-breakdown";
	var type$y = enums.TYPES.SUCCESS;
	var passThrough$w = true; // from lambda-gw

	var noSessionId$n = true; // shapeExplorer
	//#region examples

	var examples$A = {
	  valid: {
	    parser: "ABSA_CREDITCARD_EMAIL_0",
	    statement: {
	      bank: "ABSA",
	      accountNumber: "0123456789",
	      dates: {
	        issuedOn: "2017-11-11T00:00:00.000Z",
	        from: "2017-10-01T00:00:00.000Z",
	        to: "2017-10-31T00:00:00.000Z"
	      },
	      nameAddress: ["MR I COPELYN", "20 SYDNEY STREET", "GREEN POINT", "8005"],
	      accountType: "VISA Platinum"
	    },
	    breakdown: [{
	      category: "PreviousBalance",
	      name: "Balance from last statement",
	      total: 13495.49
	    }],
	    transactions: [{
	      id: 1,
	      category: "PreviousBalance",
	      transactionDate: "2017-02-07T00:00:00.000Z",
	      processDate: "2017-02-07T00:00:00.000Z",
	      description: ["Balance from previous statement"],
	      amount: 13495.49
	    }],
	    valid: true
	  },
	  invalid: {
	    parser: "ABSA_CREDITCARD_EMAIL_0",
	    statement: {
	      bank: "ABSA",
	      accountNumber: "0123456789",
	      dates: {
	        issuedOn: "2017-11-11T00:00:00.000Z",
	        from: "2017-10-01T00:00:00.000Z",
	        to: "2017-10-31T00:00:00.000Z"
	      },
	      nameAddress: ["MR I COPELYN", "20 SYDNEY STREET", "GREEN POINT", "8005"],
	      accountType: "VISA Platinum"
	    },
	    breakdown: [{
	      category: "PreviousBalance",
	      name: "Balance from last statement",
	      total: 13495.49
	    }],
	    transactions: [{
	      id: 1,
	      category: "PreviousBalance",
	      transactionDate: "2017-02-07T00:00:00.000Z",
	      processDate: "2017-02-07T00:00:00.000Z",
	      description: ["Balance from previous statement"],
	      amount: 13495.49
	    }],
	    valid: false,
	    breaks: [{
	      category: "Transactions",
	      expected: 100,
	      actual: 101,
	      diff: 1
	    }]
	  }
	}; //#endregion
	//#region validate

	var validate$D = {
	  id: "/credit-card-breakdown",
	  type: "object",
	  properties: {
	    parser: {
	      required: true,
	      type: "string",
	      enum: enums.PdfParser.creditCardBreakdown
	    },
	    statement: {
	      required: true,
	      type: "object",
	      properties: {
	        bank: {
	          required: true,
	          type: "string"
	        },
	        accountNumber: {
	          required: true,
	          type: "string"
	        },
	        accountType: {
	          type: "string"
	        },
	        statementNumber: {
	          type: "string"
	        },
	        dates: {
	          required: true,
	          type: "object",
	          properties: {
	            issuedOn: {
	              format: "date-or-iso-str"
	            },
	            from: {
	              required: true,
	              format: "date-or-iso-str"
	            },
	            to: {
	              required: true,
	              format: "date-or-iso-str"
	            }
	          }
	        },
	        nameAddress: {
	          required: true,
	          type: "array",
	          items: {
	            type: "string"
	          }
	        }
	      }
	    },
	    breakdown: {
	      required: true,
	      type: "array",
	      items: {
	        type: "object",
	        properties: {
	          category: {
	            required: true,
	            type: "string"
	          },
	          name: {
	            required: true,
	            type: "string"
	          },
	          total: {
	            required: true,
	            type: "number"
	          }
	        }
	      }
	    },
	    transactions: {
	      required: true,
	      type: "array",
	      items: {
	        type: "object",
	        properties: {
	          id: {
	            required: true,
	            type: "integer"
	          },
	          category: {
	            required: true,
	            type: "string"
	          },
	          transactionDate: {
	            required: false,
	            format: "date-or-iso-str"
	          },
	          processDate: {
	            required: true,
	            format: "date-or-iso-str"
	          },
	          description: {
	            required: true,
	            type: "array",
	            items: {
	              type: "string"
	            }
	          },
	          amount: {
	            type: "number"
	          }
	        }
	      }
	    },
	    valid: {
	      required: true,
	      type: "boolean"
	    },
	    breaks: {
	      type: "array",
	      items: {
	        type: "object",
	        properties: {
	          category: {
	            required: true,
	            type: "string"
	          },
	          expected: {
	            required: true,
	            type: "number"
	          },
	          actual: {
	            required: true,
	            type: "number"
	          },
	          diff: {
	            required: true,
	            type: "number"
	          }
	        }
	      }
	    }
	  }
	}; //#endregion
	//#region sanitize

	var sanitize$x = {
	  statement: {
	    nameAddress: "[redacted]"
	  }
	}; //#endregion

	var creditCardBreakdown = {
		code: code$B,
		type: type$y,
		passThrough: passThrough$w,
		noSessionId: noSessionId$n,
		examples: examples$A,
		validate: validate$D,
		sanitize: sanitize$x
	};

	var gwClientPdfSuccessCreditCardBreakdown = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': creditCardBreakdown,
		__moduleExports: creditCardBreakdown,
		code: code$B,
		type: type$y,
		passThrough: passThrough$w,
		noSessionId: noSessionId$n,
		examples: examples$A,
		validate: validate$D,
		sanitize: sanitize$x
	});

	var creditCardBreakdownMultiUser_1 = createCommonjsModule(function (module, exports) {
	// NOTE: "pdf/success/credit-card-breakdown-multi-user" is an array of "pdf/success/credit-card-breakdown"
	// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/credit-card-breakdown", "pdf/success/credit-card-simple" ]








	const nested = {
	  "credit-card-breakdown": creditCardBreakdown
	}; // Overview shared fields with credit-card-simple specifics

	const creditCardBreakdownMultiUser = object.mergeObjectsClone(nested["credit-card-breakdown"], {
	  validate: {
	    properties: {
	      parser: {
	        enum: enums.PdfParser.creditCardBreakdownMultiUser
	      }
	    }
	  },
	  // NOTE: gw-client/pdf/success/credit-card-breakdown.js has 2 examples = { valid, invalid }
	  examples: {
	    valid: {
	      parser: enums.PdfParser.creditCardBreakdownMultiUser[0]
	    },
	    invalid: {
	      parser: enums.PdfParser.creditCardBreakdownMultiUser[0]
	    }
	  }
	});
	exports.code = "pdf/success/credit-card-breakdown-multi-user";
	exports.type = enums.TYPES.SUCCESS;
	exports.passThrough = true; // from lambda-gw

	exports.noSessionId = true; // shapeExplorer
	//#region examples

	exports.examples = {
	  valid: [creditCardBreakdownMultiUser.examples.valid],
	  invalid: [creditCardBreakdownMultiUser.examples.invalid]
	}; // console.log(JSON.stringify(exports.examples, null, 2));
	//#endregion
	//#region validate

	exports.validate = {
	  // array of nested /credit-card
	  id: "/credit-card-breakdown-multi-user",
	  type: "array",
	  items: {
	    $ref: creditCardBreakdownMultiUser.validate.id
	  }
	};
	exports.nested = [creditCardBreakdownMultiUser];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas; //#endregion
	//#region sanitize
	// NOTE: array sanitizer = will be applied to every element of array by common.sanitize

	exports.sanitize = [creditCardBreakdownMultiUser.sanitize]; //#endregion
	});
	var creditCardBreakdownMultiUser_2 = creditCardBreakdownMultiUser_1.code;
	var creditCardBreakdownMultiUser_3 = creditCardBreakdownMultiUser_1.type;
	var creditCardBreakdownMultiUser_4 = creditCardBreakdownMultiUser_1.passThrough;
	var creditCardBreakdownMultiUser_5 = creditCardBreakdownMultiUser_1.noSessionId;
	var creditCardBreakdownMultiUser_6 = creditCardBreakdownMultiUser_1.examples;
	var creditCardBreakdownMultiUser_7 = creditCardBreakdownMultiUser_1.validate;
	var creditCardBreakdownMultiUser_8 = creditCardBreakdownMultiUser_1.nested;
	var creditCardBreakdownMultiUser_9 = creditCardBreakdownMultiUser_1.nestedShapes;
	var creditCardBreakdownMultiUser_10 = creditCardBreakdownMultiUser_1.nestedSchemas;
	var creditCardBreakdownMultiUser_11 = creditCardBreakdownMultiUser_1.sanitize;

	var gwClientPdfSuccessCreditCardBreakdownMultiUser = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': creditCardBreakdownMultiUser_1,
		__moduleExports: creditCardBreakdownMultiUser_1,
		code: creditCardBreakdownMultiUser_2,
		type: creditCardBreakdownMultiUser_3,
		passThrough: creditCardBreakdownMultiUser_4,
		noSessionId: creditCardBreakdownMultiUser_5,
		examples: creditCardBreakdownMultiUser_6,
		validate: creditCardBreakdownMultiUser_7,
		nested: creditCardBreakdownMultiUser_8,
		nestedShapes: creditCardBreakdownMultiUser_9,
		nestedSchemas: creditCardBreakdownMultiUser_10,
		sanitize: creditCardBreakdownMultiUser_11
	});

	// NOTE: nested/bank-statement-no-balance is shared by:
	// - "pdf/success/bank-statement-no-balance"
	// - "pdf/success/credit-card-simple"


	const shared = {
	  "bank-statement-no-balance": bankStatementNoBalance
	}; // Overview shared fields with credit-card-simple specifics

	const creditCardSimple = object.mergeObjectsClone(shared["bank-statement-no-balance"], {
	  validate: {
	    properties: {
	      parser: {
	        enum: enums.PdfParser.creditCardSimple
	      }
	    }
	  },
	  examples: {
	    success: {
	      parser: enums.PdfParser.creditCardSimple[0]
	    }
	  }
	});
	var code$C = "pdf/success/credit-card-simple";
	var type$z = enums.TYPES.SUCCESS;
	var passThrough$x = true; // from lambda-gw

	var noSessionId$o = true; // shapeExplorer
	//#region examples

	var examples$B = creditCardSimple.examples; //#endregion
	//#region validate

	var validate$E = creditCardSimple.validate;
	var nested$3 = creditCardSimple.nested;
	var nestedShapes$2 = creditCardSimple.nestedShapes;
	var nestedSchemas$2 = creditCardSimple.nestedSchemas; //#endregion
	//#region sanitize

	var sanitize$y = creditCardSimple.sanitize; //#endregion

	var creditCardSimple_1 = {
		code: code$C,
		type: type$z,
		passThrough: passThrough$x,
		noSessionId: noSessionId$o,
		examples: examples$B,
		validate: validate$E,
		nested: nested$3,
		nestedShapes: nestedShapes$2,
		nestedSchemas: nestedSchemas$2,
		sanitize: sanitize$y
	};

	var gwClientPdfSuccessCreditCardSimple = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': creditCardSimple_1,
		__moduleExports: creditCardSimple_1,
		code: code$C,
		type: type$z,
		passThrough: passThrough$x,
		noSessionId: noSessionId$o,
		examples: examples$B,
		validate: validate$E,
		nested: nested$3,
		nestedShapes: nestedShapes$2,
		nestedSchemas: nestedSchemas$2,
		sanitize: sanitize$y
	});

	var code$D = "sars/success/payroll-taxes";
	var type$A = enums.TYPES.SUCCESS;
	var noData$t = false;
	var passThrough$y = true; // from lambda-gw
	//#region examples

	var examples$C = {
	  default: {
	    parser: "SARS_PAYROLLTAXES_WEB_0",
	    statement: {
	      issuer: "SARS",
	      accountNumber: "7700786991",
	      dates: {
	        issuedOn: "2018-07-06T00:00:00.000Z",
	        from: "2017-03-01T00:00:00.000Z",
	        to: "2018-02-28T00:00:00.000Z"
	      },
	      nameAddress: ["THE OLD BISCUIT MILL", "373-5 ALBERT ROAD", "WOODSTOCK", "7925"]
	    },
	    transactions: [{
	      date: "2017-04-05T00:00:00.000Z",
	      transactionReference: "7700786991LC2017037",
	      description: ["DECLARATION"],
	      transactionValue: 83958,
	      paye: 78191.37,
	      sdl: 3387.11,
	      uif: 2379.52,
	      balance: 83958,
	      id: 1
	    }, {
	      date: "2017-04-07T00:00:00.000Z",
	      transactionReference: "7700786991LC2017037",
	      description: ["PAYMENT"],
	      transactionValue: -83958,
	      paye: -78191.37,
	      sdl: -3387.11,
	      uif: -2379.52,
	      balance: 0,
	      id: 2
	    }, {
	      date: "2018-07-06T00:00:00.000Z",
	      description: ["ETI CARRIED FORWARD"],
	      transactionValue: 0,
	      paye: 0,
	      id: 3
	    }, {
	      date: "2017-05-03T00:00:00.000Z",
	      transactionReference: "7700786991LC2017049",
	      description: ["DECLARATION"],
	      transactionValue: 84747.21,
	      paye: 78973.41,
	      sdl: 3394.28,
	      uif: 2379.52,
	      balance: 84747.21,
	      id: 4
	    }]
	  }
	}; //#endregion
	//#region validate

	var validate$F = {
	  type: "object",
	  properties: {
	    parser: {
	      required: true,
	      type: "string",
	      enum: ["SARS_PAYROLLTAXES_WEB_0"]
	    },
	    statement: {
	      required: true,
	      type: "object",
	      properties: {
	        issuer: {
	          required: true,
	          type: "string",
	          enum: ["SARS"]
	        },
	        accountNumber: {
	          required: true,
	          type: "string"
	        },
	        dates: {
	          required: true,
	          type: "object",
	          properties: {
	            issuedOn: {
	              required: true,
	              format: "date-or-iso-str"
	            },
	            from: {
	              required: true,
	              format: "date-or-iso-str"
	            },
	            to: {
	              required: true,
	              format: "date-or-iso-str"
	            }
	          }
	        },
	        nameAddress: {
	          required: true,
	          type: "array",
	          items: {
	            type: "string"
	          }
	        }
	      }
	    },
	    transactions: {
	      required: true,
	      type: "array",
	      items: {
	        type: "object",
	        properties: {
	          id: {
	            required: true,
	            type: "integer"
	          },
	          date: {
	            required: false,
	            format: "date-or-iso-str"
	          },
	          transactionReference: {
	            type: "string"
	          },
	          description: {
	            required: true,
	            type: "array",
	            items: {
	              type: "string"
	            }
	          },
	          transactionValue: {
	            required: false,
	            type: "number"
	          },
	          paye: {
	            required: true,
	            type: "number"
	          },
	          sdl: {
	            type: "number"
	          },
	          uif: {
	            type: "number"
	          },
	          balance: {
	            type: "number"
	          }
	        }
	      }
	    }
	  }
	}; //#endregion
	//#region sanitize

	var sanitize$z = {
	  statement: {
	    nameAddress: "[redacted]"
	  }
	}; //#endregion

	var payrollTaxes = {
		code: code$D,
		type: type$A,
		noData: noData$t,
		passThrough: passThrough$y,
		examples: examples$C,
		validate: validate$F,
		sanitize: sanitize$z
	};

	var gwClientSarsSuccessPayrollTaxes = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': payrollTaxes,
		__moduleExports: payrollTaxes,
		code: code$D,
		type: type$A,
		noData: noData$t,
		passThrough: passThrough$y,
		examples: examples$C,
		validate: validate$F,
		sanitize: sanitize$z
	});

	const add_id = function (transactions) {
	  const result = [];

	  for (let i = 0; i < transactions.length; i++) {
	    const trans = transactions[i];
	    trans.id = i + 1;
	    result.push(trans);

	    if (!Array.isArray(trans.description)) {
	      trans.description = [trans.description];
	    }
	  }

	  return result;
	};
	const remove_id = function (transactions) {
	  for (const t of transactions) {
	    delete t.id;
	  }
	};
	const validate$G = function (_requestId, transactions, filename) {
	  if (!transactions.length) {
	    // NOTE: this fatal will fire on /pdf as well as /transactions requests when:
	    //  /pdf = statement has no transactions (is probably an error)
	    //  /transactions = account has no transactions over the selected period
	    //    - e.g. NED test account was frozen from March so no transactions in past 90-days as of June)
	    //    - This can usually be ignored
	    log.fatal(`${filename}: no transaction data`);
	    return {
	      valid: false
	    };
	  }

	  const breaks = [];
	  let valid = true;

	  for (let i = 1; i < transactions.length; i++) {
	    const trans_prev = transactions[i - 1];
	    const trans_cur = transactions[i];

	    if (!trans_cur.description.length) {
	      log.fatal(`${filename}: No description found for the transaction`);
	      valid = false;
	    }

	    if (!trans_prev.balance) trans_prev.balance = 0;
	    if (!trans_cur.balance) trans_cur.balance = 0;
	    if (!trans_cur.amount) trans_cur.amount = 0;

	    if (Math.abs(trans_cur.amount) > 10000000.0) {
	      log.fatal(`${filename}: transaction amount exceeds (+/-) R 10,000,000.00`);
	      valid = false;
	    }

	    const validation = {
	      prev_id: i,
	      cur_id: i + 1,
	      prev_date: trans_prev.date,
	      cur_date: trans_cur.date,
	      amount: trans_cur.amount,
	      diff: trans_cur.balance - (trans_prev.balance + trans_cur.amount)
	    };

	    if (Math.abs(validation.diff) > 0.001) {
	      breaks.push(validation);
	    }
	  }

	  if (breaks.length > 0) {
	    log.error("transactions validation breaks detected", JSON.stringify(breaks, null, 2)); // log.alert(log.AlertLevel.Warn, "transactions validation breaks detected");

	    valid = false;
	  }

	  return {
	    breaks,
	    valid
	  };
	};

	var common = /*#__PURE__*/Object.freeze({
		__proto__: null,
		add_id: add_id,
		remove_id: remove_id,
		validate: validate$G
	});

	var PdfCommon = getCjsExportFromNamespace(common);

	var success$7 = createCommonjsModule(function (module, exports) {
	const nested = {
	  transactions: transactions$2,
	  breaks
	};
	exports.code = "transactions/success";
	exports.type = enums.TYPES.SUCCESS;
	exports.passThrough = true; // from lambda-gw
	//#region examples

	exports.examples = {
	  success: {
	    accountNumber: "9017446437",
	    transactions: nested.transactions.examples.default,
	    breaks: undefined,
	    valid: true
	  },
	  successWithBreaks: {
	    accountNumber: "9017446437",
	    transactions: nested.transactions.examples.default,
	    breaks: nested.breaks.examples.default,
	    valid: false
	  }
	}; //#endregion
	//#region create

	exports.create = function (requestId, accountNumber, transactions, scraperName) {
	  PdfCommon.add_id(transactions);
	  let {
	    breaks,
	    valid
	  } = PdfCommon.validate(requestId, transactions, scraperName);
	  let instance = {
	    accountNumber,
	    transactions,
	    valid,
	    breaks
	  };
	  let errors = schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return instance;
	}; //#endregion
	//#region validate


	exports.validate = {
	  id: "/transactions/success",
	  type: "object",
	  properties: {
	    accountNumber: {
	      required: true,
	      type: "string"
	    },
	    transactions: {
	      required: true,
	      $ref: nested.transactions.validate.id
	    },
	    valid: {
	      required: false,
	      type: "boolean"
	    },
	    breaks: {
	      required: false,
	      $ref: nested.breaks.validate.id
	    }
	  }
	};
	exports.nested = [nested.transactions, nested.breaks];
	let {
	  shapes,
	  schemas
	} = Nested.resolve(exports.validate.id, exports.nested);
	exports.nestedShapes = shapes;
	exports.nestedSchemas = schemas; //#endregion
	//#region sanitize

	exports.sanitize = undefined; // don't need to sanitize
	//#endregion
	});
	var success_1$2 = success$7.code;
	var success_2$2 = success$7.type;
	var success_3$2 = success$7.passThrough;
	var success_4$2 = success$7.examples;
	var success_5$2 = success$7.create;
	var success_6$2 = success$7.validate;
	var success_7$2 = success$7.nested;
	var success_8 = success$7.nestedShapes;
	var success_9 = success$7.nestedSchemas;
	var success_10 = success$7.sanitize;

	var gwClientTransactionsSuccess = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': success$7,
		__moduleExports: success$7,
		code: success_1$2,
		type: success_2$2,
		passThrough: success_3$2,
		examples: success_4$2,
		create: success_5$2,
		validate: success_6$2,
		nested: success_7$2,
		nestedShapes: success_8,
		nestedSchemas: success_9,
		sanitize: success_10
	});

	const shape = {
	  // additional
	  "client-gw/composer/basic": clientGwComposerBasic,
	  "client-gw/composer/codeData": clientGwComposerCodeData,
	  // client-gw
	  "client-gw/accounts": clientGwAccounts,
	  "client-gw/close": clientGwClose,
	  "client-gw/csv": clientGwCsv,
	  "client-gw/estatement": clientGwEstatement,
	  "client-gw/login": clientGwLogin,
	  "client-gw/login-interim-input/abs-pass": clientGwLoginInterimInputAbsPass,
	  "client-gw/login-interim-input/std-otp": clientGwLoginInterimInputStdOtp,
	  "client-gw/login-interim-wait": clientGwLoginInterimWait,
	  "client-gw/pdf": clientGwPdf,
	  "client-gw/statements": clientGwStatements,
	  "client-gw/transactions": clientGwTransactions,
	  // gw-client
	  "gw-client/accounts/success": gwClientAccountsSuccess,
	  "gw-client/close/success": gwClientCloseSuccess,
	  "gw-client/csv/fail/invalid-data-extracted": gwClientCsvFailInvalidDataExtracted,
	  "gw-client/csv/fail/multiple-matching-parsers": gwClientCsvFailMultipleMatchingParsers,
	  "gw-client/csv/fail/unknown-csv": gwClientCsvFailUnknownCsv,
	  "gw-client/csv/fail/unknown-exception": gwClientCsvFailUnknownException,
	  "gw-client/csv/success/bank-statement": gwClientCsvSuccessBankStatement,
	  "gw-client/error/common/access/exceeded-max-concurrent-requests": exceededMaxConcurrentRequests,
	  "gw-client/error/common/access/insufficient-credit": insufficientCredit,
	  "gw-client/error/common/dev/authorization": authorization,
	  "gw-client/error/common/dev/function-not-supported-on-site": functionNotSupportedOnSite,
	  "gw-client/error/common/dev/invalid-inputs": invalidInputs,
	  "gw-client/error/common/dev/sent-another-request-after-final-response": sentAnotherRequestAfterFinalResponse,
	  "gw-client/error/common/exception": exception,
	  "gw-client/error/common/session-in-use": sessionInUse,
	  "gw-client/error/common/session-timed-out": sessionTimedOut,
	  "gw-client/error/fnb/online-banking-legal-documentation": onlineBankingLegalDocumentation,
	  "gw-client/error/fnb/statements-disabled": statementsDisabled,
	  "gw-client/error/site/abs/logged-off": loggedOff,
	  "gw-client/error/site/bank-blocked": bankBlocked,
	  "gw-client/error/site/captcha": captcha,
	  "gw-client/error/site/input-validation-failed": inputValidationFailed,
	  "gw-client/error/site/internal": internal,
	  "gw-client/error/site/invalid-account": invalidAccount,
	  "gw-client/error/site/login-failed": loginFailed,
	  "gw-client/error/site/no-statements-available": noStatementsAvailable,
	  "gw-client/error/site/no-transactions-over-period": noTransactionsOverPeriod,
	  "gw-client/error/site/ok-got-it": okGotIt,
	  "gw-client/error/site/site-change-detected": siteChangeDetected,
	  "gw-client/error/site/site-maintenance": siteMaintenance,
	  "gw-client/error/site/site-unreachable": siteUnreachable,
	  "gw-client/error/site/site-unresponsive": siteUnresponsive,
	  "gw-client/error/user/denied": denied,
	  "gw-client/error/user/took-too-long": tookTooLong,
	  "gw-client/file/success": gwClientFileSuccess,
	  "gw-client/insurance/fail": gwClientInsuranceFail,
	  "gw-client/insurance/success": gwClientInsuranceSuccess,
	  "gw-client/login/interim-input-abs-pass": gwClientLoginInterimInputAbsPass,
	  "gw-client/login/interim-input-std-otp": gwClientLoginInterimInputStdOtp,
	  "gw-client/login-interim-input/success": gwClientLoginInterimInputSuccess,
	  "gw-client/login/interim-wait-cap-2fa": gwClientLoginInterimWaitCap2fa,
	  "gw-client/login-interim-wait/success": gwClientLoginInterimWaitSuccess,
	  "gw-client/login/success": gwClientLoginSuccess,
	  "gw-client/nested/breaks": gwClientNestedBreaks,
	  "gw-client/nested/statement-info": gwClientNestedStatementInfo,
	  "gw-client/nested/transaction": gwClientNestedTransaction,
	  "gw-client/nested/transaction-no-balance": gwClientNestedTransactionNoBalance,
	  "gw-client/nested/transactions": gwClientNestedTransactions,
	  "gw-client/nested/transactions-no-balance": gwClientNestedTransactionsNoBalance,
	  "gw-client/pdf/fail/auto-detect": gwClientPdfFailAutoDetect,
	  "gw-client/pdf/fail/failed-to-extract-credit-breakdown": gwClientPdfFailFailedToExtractCreditBreakdown,
	  "gw-client/pdf/fail/failed-to-extract-statement-date": gwClientPdfFailFailedToExtractStatementDate,
	  "gw-client/pdf/fail/file-not-found": gwClientPdfFailFileNotFound,
	  "gw-client/pdf/fail/image-pdf": gwClientPdfFailImagePdf,
	  "gw-client/pdf/fail/image-pdf-with-ocr": gwClientPdfFailImagePdfWithOcr,
	  "gw-client/pdf/fail/invalid-data-extracted": gwClientPdfFailInvalidDataExtracted,
	  "gw-client/pdf/fail/invalid-pdf-exception": gwClientPdfFailInvalidPdfException,
	  "gw-client/pdf/fail/multiple-matching-parsers": gwClientPdfFailMultipleMatchingParsers,
	  "gw-client/pdf/fail/password-incorrect": gwClientPdfFailPasswordIncorrect,
	  "gw-client/pdf/fail/password-required": gwClientPdfFailPasswordRequired,
	  "gw-client/pdf/fail/pdf-js-error": gwClientPdfFailPdfJsError,
	  "gw-client/pdf/fail/pdf-js-exception": gwClientPdfFailPdfJsException,
	  "gw-client/pdf/fail/pdf-read-exception": gwClientPdfFailPdfReadException,
	  "gw-client/pdf/fail/unknown-exception": gwClientPdfFailUnknownException,
	  "gw-client/pdf/fail/unknown-pdf": gwClientPdfFailUnknownPdf,
	  "gw-client/pdf/success/bank-statement-normal": gwClientPdfSuccessBankStatementNormal,
	  "gw-client/pdf/success/bank-statement-no-balance": gwClientPdfSuccessBankStatementNoBalance,
	  "gw-client/pdf/success/credit-card-breakdown": gwClientPdfSuccessCreditCardBreakdown,
	  "gw-client/pdf/success/credit-card-breakdown-multi-user": gwClientPdfSuccessCreditCardBreakdownMultiUser,
	  "gw-client/pdf/success/credit-card-simple": gwClientPdfSuccessCreditCardSimple,
	  "gw-client/sars/success/payroll-taxes": gwClientSarsSuccessPayrollTaxes,
	  "gw-client/transactions/success": gwClientTransactionsSuccess
	};
	const getShape = function (code) {
	  let s = shape[code];

	  if (!s) {
	    s = shape["client-gw/" + code];
	  }

	  if (!s) {
	    s = shape["gw-client/" + code];
	  }

	  if (!s) {
	    throw new ShapeNotFoundError(code);
	  }

	  return s;
	};

	function isUserError(response) {
	  const isError = TYPES.ERROR === response.type;
	  if (!isError) return false; // check shape

	  const shape = getShape(response.code);
	  return shape.blame == BLAME.USER;
	}

	const sanitize$A = function (sanitizer, data) {
	  if (!sanitizer) {
	    return data;
	  }

	  if (typeof sanitizer === "string" || sanitizer instanceof String) {
	    return sanitizer;
	  }

	  if (Array.isArray(data)) {
	    if (Array.isArray(sanitizer)) {
	      // sanitize each element
	      if (sanitizer.length !== 1) {
	        throw new Error("invalid each-element sanitizer - must be single element array: " + JSON.stringify(sanitizer));
	      }

	      const arrayClone = [];

	      for (const d of data) {
	        arrayClone.push(sanitize$A(sanitizer[0], d));
	      }

	      return arrayClone;
	    } else if (isFunction$1(sanitizer)) {
	      return sanitizer(data);
	    } else {
	      throw new Error("can't sanitize array data: " + JSON.stringify(data));
	    }
	  }

	  if (isFunction$1(sanitizer)) {
	    return sanitizer(data);
	  }

	  if (isObject$1(sanitizer)) {
	    return mergeObjectsClone(data, sanitizer);
	  }

	  return data;
	}; // NOTE: currently works for all wrapperShapes which have a .code to identify the .data shape
	// NOTE: assume validate already called on wrapperShape - i.e. both wrapper and wrapper.data are valid

	const sanitizeWrapped = function (wrapperShape, wrappedInstance) {
	  if (wrapperShape.type === TYPES.ERROR) {
	    return wrappedInstance; // don't need to sanitize errors
	  }

	  const shape = getShape(wrappedInstance.code);

	  if (shape.composer) {
	    // NOTE: composed objects like [login-interim-input/abs-pass] shouldn't use sanitizeWrapped
	    // because the sanitizer & validater on composed objects refers to the whole instance - not the wrapped .data
	    throw new Error(`don't sanitizeWrapped composed objects: ${wrappedInstance.code}`);
	  }

	  if (shape.sanitize) {
	    // return wrapper[sanitized(wrapped.data)]
	    const sanitized = sanitize$A(shape.sanitize, wrappedInstance.data);
	    return Object.assign({}, wrappedInstance, {
	      data: sanitized
	    }); // clone wrapper and replace .data with sanitized data
	  }

	  return wrappedInstance;
	}; // NOTE: currently works for all composerShapes which have a .code to identify the .data shape
	// NOTE: assume validate already called on composerShape - i.e. both composer and composer.data are valid

	const sanitizeComposed = function (composerShape, composedInstance) {
	  if (composerShape.type === TYPES.ERROR) {
	    return composedInstance; // don't need to sanitize errors
	  }

	  const shape = getShape(composedInstance.code);

	  if (!shape.composer) {
	    throw new Error(`sanitizeComposed not a composed object: ${composedInstance.code}`);
	  }

	  if (shape.ownSanitize) {
	    // return composer[sanitized(composed.data)]
	    const sanitized = sanitize$A(shape.ownSanitize, composedInstance.data);
	    return Object.assign({}, composedInstance, {
	      data: sanitized
	    }); // clone composer and replace .data with sanitized data
	  }

	  return composedInstance;
	}; //#endregion
	//#region validate

	const validateShape = function (shape, data) {
	  const schema$1 = shape.validate;

	  if (!schema$1) {
	    return undefined;
	  }

	  return validate$2(shape.code, schema$1, data, shape.nestedSchemas);
	};
	const validateWrapped = function (wrapperShape, wrappedInstance) {
	  if (wrapperShape.type === TYPES.ERROR) {
	    return undefined; // don't need to validate errors
	  }

	  const wrapperSchema = wrapperShape.wrapperSchema;
	  const wrapperCode = wrapperShape.code; // validate wrapper

	  const wrapperErrors = validate$2(wrapperCode, wrapperSchema, wrappedInstance);

	  if (wrapperErrors && wrapperErrors.length) {
	    log.fatal(`${wrapperCode}[${wrappedInstance.code}] validate - invalid wrapper`, wrapperErrors);
	    throw new Error("validate error - invalid wrapper");
	  } // lookup wrapped shape


	  const shape = getShape(wrappedInstance.code);

	  if (shape.composer) {
	    // NOTE: composed objects like [login-interim-input/abs-pass] shouldn't use validateWrapped
	    // because the sanitizer & validater on composed objects refers to the whole instance - not the wrapped .data
	    throw new Error(`don't validateWrapped composed objects: ${wrappedInstance.code}`);
	  } // validate wrapped shape


	  const schema$1 = shape.validate;

	  if (!schema$1) {
	    return undefined;
	  }

	  const errors = validate$2(shape.code, schema$1, wrappedInstance.data, shape.nestedSchemas);

	  if (errors && errors.length) {
	    log.fatal(`${wrapperCode}[${wrappedInstance.code}] validate - invalid wrapped.data`, errors);
	    throw new Error("validate error - invalid wrapped.data");
	  }

	  return undefined;
	}; //#endregion
	//#region marshall

	const marshall = function (spikeReq, wrapperShape, inputCode, inputData) {
	  const inputShape = getShape(inputCode);
	  let outputShape, outputData, outputCode;

	  if (inputShape.marshallTo) {
	    if (isFunction$1(inputShape.marshallTo)) {
	      outputData = inputShape.marshallTo(spikeReq, inputCode, inputData);
	    } else {
	      outputCode = inputShape.marshallTo;
	      outputShape = getShape(outputCode);

	      if (!outputShape.marshallFrom) {
	        throw new BadShapeError(`${wrapperShape.code}.marshall: bad shape ${inputCode}.marshallTo shape is missing ${outputCode}.marshallFrom()`);
	      }

	      outputData = outputShape.marshallFrom(spikeReq, inputCode, inputData);
	    }
	  } else if (inputShape.passThrough) {
	    outputShape = inputShape;
	    outputCode = inputCode;
	    outputData = inputData;
	  } else {
	    throw new BadShapeError(`${wrapperShape.code}.marshall: bad shape ${inputCode} missing .passThrough or .marshallTo`);
	  }

	  return {
	    outputShape,
	    outputCode,
	    outputData
	  };
	}; //#endregion

	var common$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		sanitize: sanitize$A,
		sanitizeWrapped: sanitizeWrapped,
		sanitizeComposed: sanitizeComposed,
		validateShape: validateShape,
		validateWrapped: validateWrapped,
		marshall: marshall
	});

	const Shapes = {
	  "gw-client/accounts/success": gwClientAccountsSuccess,
	  "gw-client/login/interim-input-abs-pass": gwClientLoginInterimInputAbsPass,
	  "gw-client/error/common/dev/invalid-inputs": invalidInputs
	};
	const code$E = "gw-client/wrapper"; // specified by wrapped.data. This .code is only used as wrapperCode in common.validateWrapped

	const type$B = TYPES.NOTSET; // specified by wrapped.data
	//#region create

	const create = function (requestId, sessionId, code, type, data) {
	  return {
	    requestId,
	    sessionId,
	    code,
	    type,
	    data
	  };
	};
	const createError = function (requestId, code, data) {
	  return create(requestId, undefined, code, TYPES.ERROR, data);
	}; //#endregion
	//#region examples

	const examples$D = {
	  "gw-client/wrapper[gw-client/accounts/success]": create(testUuid(), testUuid(), Shapes["gw-client/accounts/success"].code, Shapes["gw-client/accounts/success"].type, Shapes["gw-client/accounts/success"].examples.default),
	  "gw-client/wrapper[login/interim-input-abs-pass]": create(testUuid(), testUuid(), Shapes["gw-client/login/interim-input-abs-pass"].code, Shapes["gw-client/login/interim-input-abs-pass"].type, Shapes["gw-client/login/interim-input-abs-pass"].examples.default),
	  "gw-client/wrapper[gw-client/error/common/dev/invalid-inputs]": createError(testUuid(), Shapes["gw-client/error/common/dev/invalid-inputs"].code, Shapes["gw-client/error/common/dev/invalid-inputs"].examples.default)
	}; //#endregion
	//#region marshall
	// create wrapped data
	//  .data = marshall or passThrough (from lambda-gw => gw-client)
	//  input* were created on lambda - see lambda-gw/*chan/wrapper.createResponse

	const marshall$1 = function (requestId, sessionId = undefined, inputCode, inputData) {
	  let {
	    outputShape,
	    outputCode,
	    outputData
	  } = marshall(undefined, exports, inputCode, inputData); // create instance which matches wrapperSchema

	  let wrappedInstance = create(requestId, sessionId, outputCode, outputShape.type, outputData);
	  let errors = validate$2(code$E, validate$H, wrappedInstance);

	  if (errors) {
	    throw new InputValidationError(errors);
	  }

	  return wrappedInstance;
	}; //#endregion
	//#region validate

	const wrapperSchema = {
	  type: "object",
	  properties: {
	    requestId: {
	      required: true,
	      type: "string",
	      format: "uuidV4"
	    },
	    sessionId: {
	      required: false,
	      type: "string",
	      format: "uuidV4"
	    },
	    code: {
	      required: true,
	      type: "string"
	    },
	    type: {
	      required: true,
	      type: "integer",
	      enum: TYPES.values()
	    },
	    data: {
	      required: false
	    }
	  }
	};
	const validate$H = function (wrappedInstance) {
	  validateWrapped(exports, wrappedInstance);
	}; //#endregion
	//#region sanitize

	const sanitize$B = function (wrappedInstance) {
	  return sanitizeWrapped(exports, wrappedInstance);
	}; //#endregion
	//#region log

	const log$1 = function (wrappedInstance) {
	  let sanitized = sanitize$B(wrappedInstance);
	  global.log.net(`GW -> Client`, JSON.stringify(sanitized, null, 2));
	}; //#endregion

	var gwClientWrapper = /*#__PURE__*/Object.freeze({
		__proto__: null,
		code: code$E,
		type: type$B,
		create: create,
		createError: createError,
		examples: examples$D,
		marshall: marshall$1,
		wrapperSchema: wrapperSchema,
		validate: validate$H,
		sanitize: sanitize$B,
		log: log$1
	});

	var bind = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray$1(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is a Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Buffer, otherwise false
	 */
	function isBuffer(val) {
	  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
	    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString$1(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject$2(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction$2(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject$2(val) && isFunction$2(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 * nativescript
	 *  navigator.product -> 'NativeScript' or 'NS'
	 */
	function isStandardBrowserEnv() {
	  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
	                                           navigator.product === 'NativeScript' ||
	                                           navigator.product === 'NS')) {
	    return false;
	  }
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object') {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray$1(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge$1(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge$1(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Function equal to merge with the difference being that no reference
	 * to original objects is kept.
	 *
	 * @see merge
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function deepMerge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = deepMerge(result[key], val);
	    } else if (typeof val === 'object') {
	      result[key] = deepMerge({}, val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	var utils = {
	  isArray: isArray$1,
	  isArrayBuffer: isArrayBuffer,
	  isBuffer: isBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString$1,
	  isNumber: isNumber,
	  isObject: isObject$2,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction$2,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge$1,
	  deepMerge: deepMerge,
	  extend: extend,
	  trim: trim
	};

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	var buildURL = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      } else {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    var hashmarkIndex = url.indexOf('#');
	    if (hashmarkIndex !== -1) {
	      url = url.slice(0, hashmarkIndex);
	    }

	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	var InterceptorManager_1 = InterceptorManager;

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	var transformData = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};

	var isCancel = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

	var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	var enhanceError = function enhanceError(error, config, code, request, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }

	  error.request = request;
	  error.response = response;
	  error.isAxiosError = true;

	  error.toJSON = function() {
	    return {
	      // Standard
	      message: this.message,
	      name: this.name,
	      // Microsoft
	      description: this.description,
	      number: this.number,
	      // Mozilla
	      fileName: this.fileName,
	      lineNumber: this.lineNumber,
	      columnNumber: this.columnNumber,
	      stack: this.stack,
	      // Axios
	      config: this.config,
	      code: this.code
	    };
	  };
	  return error;
	};

	/**
	 * Create an Error with the specified message, config, error code, request and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 * @param {Object} [request] The request.
	 * @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	var createError$1 = function createError(message, config, code, request, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, request, response);
	};

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	var settle = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  if (!validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError$1(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response.request,
	      response
	    ));
	  }
	};

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	var isAbsoluteURL = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	var combineURLs = function combineURLs(baseURL, relativeURL) {
	  return relativeURL
	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
	    : baseURL;
	};

	/**
	 * Creates a new URL by combining the baseURL with the requestedURL,
	 * only when the requestedURL is not already an absolute URL.
	 * If the requestURL is absolute, this function returns the requestedURL untouched.
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} requestedURL Absolute or relative URL to combine
	 * @returns {string} The combined full path
	 */
	var buildFullPath = function buildFullPath(baseURL, requestedURL) {
	  if (baseURL && !isAbsoluteURL(requestedURL)) {
	    return combineURLs(baseURL, requestedURL);
	  }
	  return requestedURL;
	};

	// Headers whose duplicates are ignored by node
	// c.f. https://nodejs.org/api/http.html#http_message_headers
	var ignoreDuplicateOf = [
	  'age', 'authorization', 'content-length', 'content-type', 'etag',
	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
	  'referer', 'retry-after', 'user-agent'
	];

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	var parseHeaders = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
	        return;
	      }
	      if (key === 'set-cookie') {
	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
	      } else {
	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	      }
	    }
	  });

	  return parsed;
	};

	var isURLSameOrigin = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	    (function standardBrowserEnv() {
	      var msie = /(msie|trident)/i.test(navigator.userAgent);
	      var urlParsingNode = document.createElement('a');
	      var originURL;

	      /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	      function resolveURL(url) {
	        var href = url;

	        if (msie) {
	        // IE needs attribute set twice to normalize properties
	          urlParsingNode.setAttribute('href', href);
	          href = urlParsingNode.href;
	        }

	        urlParsingNode.setAttribute('href', href);

	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	        return {
	          href: urlParsingNode.href,
	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	          host: urlParsingNode.host,
	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	          hostname: urlParsingNode.hostname,
	          port: urlParsingNode.port,
	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	            urlParsingNode.pathname :
	            '/' + urlParsingNode.pathname
	        };
	      }

	      originURL = resolveURL(window.location.href);

	      /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	      return function isURLSameOrigin(requestURL) {
	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	        return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	      };
	    })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return function isURLSameOrigin() {
	        return true;
	      };
	    })()
	);

	var cookies = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	    (function standardBrowserEnv() {
	      return {
	        write: function write(name, value, expires, path, domain, secure) {
	          var cookie = [];
	          cookie.push(name + '=' + encodeURIComponent(value));

	          if (utils.isNumber(expires)) {
	            cookie.push('expires=' + new Date(expires).toGMTString());
	          }

	          if (utils.isString(path)) {
	            cookie.push('path=' + path);
	          }

	          if (utils.isString(domain)) {
	            cookie.push('domain=' + domain);
	          }

	          if (secure === true) {
	            cookie.push('secure');
	          }

	          document.cookie = cookie.join('; ');
	        },

	        read: function read(name) {
	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	          return (match ? decodeURIComponent(match[3]) : null);
	        },

	        remove: function remove(name) {
	          this.write(name, '', Date.now() - 86400000);
	        }
	      };
	    })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	    (function nonStandardBrowserEnv() {
	      return {
	        write: function write() {},
	        read: function read() { return null; },
	        remove: function remove() {}
	      };
	    })()
	);

	var xhr = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    var fullPath = buildFullPath(config.baseURL, config.url);
	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request.onreadystatechange = function handleLoad() {
	      if (!request || request.readyState !== 4) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        status: request.status,
	        statusText: request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle browser request cancellation (as opposed to a manual cancellation)
	    request.onabort = function handleAbort() {
	      if (!request) {
	        return;
	      }

	      reject(createError$1('Request aborted', config, 'ECONNABORTED', request));

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError$1('Network Error', config, null, request));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
	      if (config.timeoutErrorMessage) {
	        timeoutErrorMessage = config.timeoutErrorMessage;
	      }
	      reject(createError$1(timeoutErrorMessage, config, 'ECONNABORTED',
	        request));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies$1 = cookies;

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
	        cookies$1.read(config.xsrfCookieName) :
	        undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (!utils.isUndefined(config.withCredentials)) {
	      request.withCredentials = !!config.withCredentials;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
	        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
	        if (config.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = xhr;
	  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
	    // For node use HTTP adapter
	    adapter = xhr;
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Accept');
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  /**
	   * A timeout in milliseconds to abort a request. If set to 0 (default) a
	   * timeout is not created.
	   */
	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	var defaults_1 = defaults;

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	var dispatchRequest = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults_1.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};

	/**
	 * Config-specific merge-function which creates a new config-object
	 * by merging two configuration objects together.
	 *
	 * @param {Object} config1
	 * @param {Object} config2
	 * @returns {Object} New object resulting from merging config2 to config1
	 */
	var mergeConfig = function mergeConfig(config1, config2) {
	  // eslint-disable-next-line no-param-reassign
	  config2 = config2 || {};
	  var config = {};

	  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
	  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
	  var defaultToConfig2Keys = [
	    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
	    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
	    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
	    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
	    'httpsAgent', 'cancelToken', 'socketPath'
	  ];

	  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    }
	  });

	  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
	    if (utils.isObject(config2[prop])) {
	      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
	    } else if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (utils.isObject(config1[prop])) {
	      config[prop] = utils.deepMerge(config1[prop]);
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });

	  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });

	  var axiosKeys = valueFromConfig2Keys
	    .concat(mergeDeepPropertiesKeys)
	    .concat(defaultToConfig2Keys);

	  var otherKeys = Object
	    .keys(config2)
	    .filter(function filterAxiosKeys(key) {
	      return axiosKeys.indexOf(key) === -1;
	    });

	  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
	    if (typeof config2[prop] !== 'undefined') {
	      config[prop] = config2[prop];
	    } else if (typeof config1[prop] !== 'undefined') {
	      config[prop] = config1[prop];
	    }
	  });

	  return config;
	};

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager_1(),
	    response: new InterceptorManager_1()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = arguments[1] || {};
	    config.url = arguments[0];
	  } else {
	    config = config || {};
	  }

	  config = mergeConfig(this.defaults, config);

	  // Set config.method
	  if (config.method) {
	    config.method = config.method.toLowerCase();
	  } else if (this.defaults.method) {
	    config.method = this.defaults.method.toLowerCase();
	  } else {
	    config.method = 'get';
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	Axios.prototype.getUri = function getUri(config) {
	  config = mergeConfig(this.defaults, config);
	  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	var Axios_1 = Axios;

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	var Cancel_1 = Cancel;

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel_1(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	var CancelToken_1 = CancelToken;

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	var spread = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios_1(defaultConfig);
	  var instance = bind(Axios_1.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios_1.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults_1);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios_1;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(mergeConfig(axios.defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = Cancel_1;
	axios.CancelToken = CancelToken_1;
	axios.isCancel = isCancel;

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = spread;

	var axios_1 = axios;

	// Allow use of default import syntax in TypeScript
	var default_1 = axios;
	axios_1.default = default_1;

	var axios$1 = axios_1;

	const MAX = 20 * 1024 * 1024;
	const request = async function (APIKEY, USERKEY, url, inputs) {
	  // check keys
	  const validationErrors = [];

	  if (!validUuidV4(APIKEY)) {
	    validationErrors.push("apikey invalid");
	  }

	  if (!validUuidV4(USERKEY)) {
	    validationErrors.push("userkey invalid");
	  }

	  if (validationErrors.length) {
	    throw new InputValidationError(validationErrors);
	  } // request


	  const response = await axios$1.post(url, inputs, {
	    headers: {
	      "x-api-key": APIKEY,
	      "x-user-key": USERKEY,
	      "Content-Type": "application/json"
	    },
	    maxContentLength: MAX
	  });

	  if (response.status === 200) {
	    return response.data;
	  }

	  throw response;
	};

	var shared$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		request: request
	});

	var accounts$2 = (async function (APIKEY, USERKEY, sessionId, final) {
	  // inputs
	  const inputs = getShape("client-gw/accounts").create(sessionId, final); // throws InputValidationError
	  // request

	  const url = url$a.accounts;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var close$2 = (async function (APIKEY, USERKEY, sessionId) {
	  // inputs
	  const inputs = getShape("client-gw/close").create(sessionId); // throws InputValidationError
	  // request

	  const url = url$a.close;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var csv$2 = (async function (APIKEY, USERKEY, csvPath, buffer = undefined) {
	  // inputs
	  const inputs = getShape("client-gw/csv").create(csvPath, buffer); // request

	  const url = url$a.csv;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var estatement$2 = (async function (APIKEY, USERKEY, sessionId, final, accountNumber, numDays) {
	  // inputs
	  const inputs = getShape("client-gw/estatement").create(sessionId, final, accountNumber, numDays); // throws InputValidationError
	  // request

	  const url = url$a.estatement;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var loginInterimInputAbsPass = (async function (APIKEY, USERKEY, sessionId, final, data) {
	  // inputs
	  const inputs = getShape("client-gw/login-interim-input/abs-pass").create(sessionId, final, data); // throws InputValidationError
	  // request

	  const url = url$a["login-interim-input"];
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var loginInterimInputStdOtp = (async function (APIKEY, USERKEY, sessionId, final, data) {
	  // inputs
	  const inputs = getShape("client-gw/login-interim-input/std-otp").create(sessionId, final, data); // throws InputValidationError
	  // request

	  const url = url$a["login-interim-input"];
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var loginInterimWait$2 = (async function (APIKEY, USERKEY, sessionId, final) {
	  // inputs
	  const inputs = getShape("client-gw/login-interim-wait").create(sessionId, final); // throws InputValidationError
	  // request

	  const url = url$a["login-interim-wait"];
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var login$2 = (async function (APIKEY, USERKEY, site, user, pin, pass, usernum) {
	  // inputs
	  const inputs = getShape("client-gw/login").create(site, user, pin, pass, usernum); // throws InputValidationError
	  // request

	  const url = url$a.login;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var pdf$2 = (async function (APIKEY, USERKEY, pdfPath, pass = undefined, buffer = undefined) {
	  // inputs
	  const inputs = getShape("client-gw/pdf").create(pdfPath, pass, buffer); // request

	  const url = url$a.pdf;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var statements$2 = (async function (APIKEY, USERKEY, sessionId, final, accountNumber, numStatements) {
	  // inputs
	  const inputs = getShape("client-gw/statements").create(sessionId, final, accountNumber, numStatements); // throws InputValidationError
	  // request

	  const url = url$a.statements;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var transactions$3 = (async function (APIKEY, USERKEY, sessionId, final, accountNumber, numDays) {
	  // inputs
	  const inputs = getShape("client-gw/transactions").create(sessionId, final, accountNumber, numDays); // throws InputValidationError
	  // request

	  const url = url$a.transactions;
	  return await request(APIKEY, USERKEY, url, inputs);
	});

	var index = {
	  config,
	  // api
	  shape: shape,
	  getShape: getShape,
	  overrideShapes: function (shapeOverrides) {
	    // NOTE: must modify the object inplace in order for @spike/api code to use supplied shapes
	    for (const key in shapeOverrides) {
	      shape[key] = shapeOverrides[key]; // NOTE: modifies export shape
	    }
	  },
	  common: common$1,
	  enums,
	  isSupported: isSupported,
	  isUserError: isUserError,
	  BadShapeError,
	  InputValidationError,
	  PdfTooLargeError,
	  ShapeNotFoundError,

	  sanitize(response) {
	    const shape = getShape(response.code);
	    return sanitize$A(shape.sanitize, response.data);
	  },

	  schema,
	  response: gwClientWrapper,
	  // wrappers
	  accounts: accounts$2,
	  close: close$2,
	  csv: csv$2,
	  estatement: estatement$2,
	  loginInterimInputAbsPass,
	  loginInterimInputStdOtp,
	  loginInterimWait: loginInterimWait$2,
	  login: login$2,
	  pdf: pdf$2,
	  shared: shared$1,
	  statements: statements$2,
	  transactions: transactions$3
	};

	return index;

})));
//# sourceMappingURL=spike-api.umd.js.map

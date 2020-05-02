import Ajv from 'ajv';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
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
var Symbol = _root.Symbol;

var _Symbol = Symbol;

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
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

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
    this.ajv = new Ajv({
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
const validate = function (code, schema, data, nestedSchemas) {
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
	validate: validate,
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
var type = enums.TYPES.SUCCESS;
var noData = true;
var passThrough = true; // from lambda-gw
//#region examples
// noData

var examples = undefined; //#endregion
//#region validate
// noData

var validate$1 = undefined; //#endregion
//#region sanitize

var sanitize = undefined; //#endregion

var success$1 = {
	code: code$1,
	type: type,
	noData: noData,
	passThrough: passThrough,
	examples: examples,
	validate: validate$1,
	sanitize: sanitize
};

var gwClientCloseSuccess = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': success$1,
	__moduleExports: success$1,
	code: code$1,
	type: type,
	noData: noData,
	passThrough: passThrough,
	examples: examples,
	validate: validate$1,
	sanitize: sanitize
});

var code$2 = "csv/fail/invalid-data-extracted";
var type$1 = enums.TYPES.ERROR;
var passThrough$1 = true; // from lambda-gw

var noData$1 = true;
var blame = enums.BLAME.SPIKE;
var noSessionId = true; // shapeExplorer

var message = "we successfully extract the data from the csv however it did not conform to the expected output schema"; // noData

var examples$1 = undefined;
var validate$2 = undefined;
var sanitize$1 = undefined;

var invalidDataExtracted = {
	code: code$2,
	type: type$1,
	passThrough: passThrough$1,
	noData: noData$1,
	blame: blame,
	noSessionId: noSessionId,
	message: message,
	examples: examples$1,
	validate: validate$2,
	sanitize: sanitize$1
};

var gwClientCsvFailInvalidDataExtracted = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': invalidDataExtracted,
	__moduleExports: invalidDataExtracted,
	code: code$2,
	type: type$1,
	passThrough: passThrough$1,
	noData: noData$1,
	blame: blame,
	noSessionId: noSessionId,
	message: message,
	examples: examples$1,
	validate: validate$2,
	sanitize: sanitize$1
});

var code$3 = "csv/fail/multiple-matching-parsers";
var type$2 = enums.TYPES.ERROR;
var passThrough$2 = true; // from lambda-gw

var noData$2 = true;
var blame$1 = enums.BLAME.SPIKE;
var noSessionId$1 = true; // shapeExplorer

var message$1 = "two or more parsers were found which can process this csv"; // noData

var examples$2 = undefined;
var validate$3 = undefined;
var sanitize$2 = undefined;

var multipleMatchingParsers = {
	code: code$3,
	type: type$2,
	passThrough: passThrough$2,
	noData: noData$2,
	blame: blame$1,
	noSessionId: noSessionId$1,
	message: message$1,
	examples: examples$2,
	validate: validate$3,
	sanitize: sanitize$2
};

var gwClientCsvFailMultipleMatchingParsers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': multipleMatchingParsers,
	__moduleExports: multipleMatchingParsers,
	code: code$3,
	type: type$2,
	passThrough: passThrough$2,
	noData: noData$2,
	blame: blame$1,
	noSessionId: noSessionId$1,
	message: message$1,
	examples: examples$2,
	validate: validate$3,
	sanitize: sanitize$2
});

var code$4 = "csv/fail/unknown-csv";
var type$3 = enums.TYPES.ERROR;
var passThrough$3 = true; // from lambda-gw

var noData$3 = true;
var blame$2 = enums.BLAME.SPIKE;
var noSessionId$2 = true; // shapeExplorer

var message$2 = "we did not recognise this csv format"; // noData

var examples$3 = undefined;
var validate$4 = undefined;
var sanitize$3 = undefined;

var unknownCsv = {
	code: code$4,
	type: type$3,
	passThrough: passThrough$3,
	noData: noData$3,
	blame: blame$2,
	noSessionId: noSessionId$2,
	message: message$2,
	examples: examples$3,
	validate: validate$4,
	sanitize: sanitize$3
};

var gwClientCsvFailUnknownCsv = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': unknownCsv,
	__moduleExports: unknownCsv,
	code: code$4,
	type: type$3,
	passThrough: passThrough$3,
	noData: noData$3,
	blame: blame$2,
	noSessionId: noSessionId$2,
	message: message$2,
	examples: examples$3,
	validate: validate$4,
	sanitize: sanitize$3
});

var code$5 = "csv/fail/unknown-exception";
var type$4 = enums.TYPES.ERROR;
var passThrough$4 = true; // from lambda-gw

var noData$4 = true;
var blame$3 = enums.BLAME.SPIKE;
var noSessionId$3 = true; // shapeExplorer

var message$3 = "an unspecified exception ocurred"; // noData

var examples$4 = undefined;
var validate$5 = undefined;
var sanitize$4 = undefined;

var unknownException = {
	code: code$5,
	type: type$4,
	passThrough: passThrough$4,
	noData: noData$4,
	blame: blame$3,
	noSessionId: noSessionId$3,
	message: message$3,
	examples: examples$4,
	validate: validate$5,
	sanitize: sanitize$4
};

var gwClientCsvFailUnknownException = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': unknownException,
	__moduleExports: unknownException,
	code: code$5,
	type: type$4,
	passThrough: passThrough$4,
	noData: noData$4,
	blame: blame$3,
	noSessionId: noSessionId$3,
	message: message$3,
	examples: examples$4,
	validate: validate$5,
	sanitize: sanitize$4
});

const resolve = function (path, arrayOfNestedShapes) {

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
        const childDeps = resolve(childPath, child.nested);

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
	resolve: resolve
});

var code$6 = "gw-client/nested/transaction-no-balance";
var validate$6 = {
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
	validate: validate$6,
	examples: examples$5
};

var gwClientNestedTransactionNoBalance = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': transactionNoBalance,
	__moduleExports: transactionNoBalance,
	code: code$6,
	validate: validate$6,
	examples: examples$5
});

var transactionsNoBalance = createCommonjsModule(function (module, exports) {
const nested$1 = {
  "transaction-no-balance": transactionNoBalance
};
exports.code = "gw-client/nested/transactions-no-balance";
exports.validate = {
  id: "/transactions-no-balance",
  type: "array",
  items: {
    $ref: nested$1["transaction-no-balance"].validate.id
  }
};
exports.nested = [nested$1["transaction-no-balance"]];
let {
  shapes,
  schemas
} = nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;
exports.examples = {
  default: [nested$1["transaction-no-balance"].examples[1], nested$1["transaction-no-balance"].examples[2], nested$1["transaction-no-balance"].examples[3]]
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
var validate$7 = {
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
	validate: validate$7,
	examples: examples$6
};

var gwClientNestedBreaks = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': breaks,
	__moduleExports: breaks,
	code: code$7,
	validate: validate$7,
	examples: examples$6
});

var bankStatement = createCommonjsModule(function (module, exports) {
const nested$1 = {
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
    transactions: nested$1.transactionsNoBalance.examples.default,
    valid: true
  },
  successWithBreaks: {
    parser: "ABS1",
    statement,
    transactions: nested$1.transactionsNoBalance.examples.default,
    breaks: nested$1.breaks.examples.default,
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
      $ref: nested$1.transactionsNoBalance.validate.id
    },
    valid: {
      required: true,
      type: "boolean"
    },
    breaks: {
      required: false,
      $ref: nested$1.breaks.validate.id
    }
  }
};
exports.nested = [nested$1.transactionsNoBalance, nested$1.breaks];
let {
  shapes,
  schemas
} = nested.resolve(exports.validate.id, exports.nested);
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

var type$5 = enums.TYPES.ERROR;
var examples$7 = undefined; // override in instance

var validate$8 = undefined;
var sanitize$5 = undefined;
var noData_1 = true;
var passThrough$5 = true; // from lambda-gw

var noSessionId$4 = true; // shapeExplorer

var noData$5 = {
	code: code$8,
	type: type$5,
	examples: examples$7,
	validate: validate$8,
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

var type$6 = enums.TYPES.ERROR;
var passThrough$6 = true; // from lambda-gw

var noSessionId$5 = true; // shapeExplorer
//#region examples

var examples$8 = {
  default: ["string1"]
}; //#endregion
//#region validate

var validate$9 = {
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
	type: type$6,
	passThrough: passThrough$6,
	noSessionId: noSessionId$5,
	examples: examples$8,
	validate: validate$9,
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
var type$7 = enums.TYPES.ERROR;
var passThrough$7 = true; // from lambda-gw

var noData$6 = true;
var blame$4 = enums.BLAME.SPIKE; // noData

var examples$9 = undefined;
var validate$a = undefined;
var sanitize$7 = undefined;

var fail = {
	code: code$a,
	type: type$7,
	passThrough: passThrough$7,
	noData: noData$6,
	blame: blame$4,
	examples: examples$9,
	validate: validate$a,
	sanitize: sanitize$7
};

var gwClientInsuranceFail = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': fail,
	__moduleExports: fail,
	code: code$a,
	type: type$7,
	passThrough: passThrough$7,
	noData: noData$6,
	blame: blame$4,
	examples: examples$9,
	validate: validate$a,
	sanitize: sanitize$7
});

var code$b = "insurance/success";
var type$8 = enums.TYPES.SUCCESS;
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

var validate$b = {
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
	type: type$8,
	noData: noData$7,
	passThrough: passThrough$8,
	examples: examples$a,
	validate: validate$b,
	sanitize: sanitize$8
};

var gwClientInsuranceSuccess = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': success$3,
	__moduleExports: success$3,
	code: code$b,
	type: type$8,
	noData: noData$7,
	passThrough: passThrough$8,
	examples: examples$a,
	validate: validate$b,
	sanitize: sanitize$8
});

var code$c = "login/interim-input-abs-pass";
var type$9 = enums.TYPES.INTERIM;
var noData$8 = false;
var passThrough$9 = true; // from lambda-gw
//#region examples

var examples$b = {
  default: [0, 1, 2]
}; //#endregion
//#region validate

var validate$c = {
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
	type: type$9,
	noData: noData$8,
	passThrough: passThrough$9,
	examples: examples$b,
	validate: validate$c,
	sanitize: sanitize$9
};

var gwClientLoginInterimInputAbsPass = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': interimInputAbsPass,
	__moduleExports: interimInputAbsPass,
	code: code$c,
	type: type$9,
	noData: noData$8,
	passThrough: passThrough$9,
	examples: examples$b,
	validate: validate$c,
	sanitize: sanitize$9
});

var code$d = "login/interim-input-std-otp";
var type$a = enums.TYPES.INTERIM;
var noData$9 = true;
var passThrough$a = true; // from lambda-gw
//#region examples
// noData

var examples$c = undefined; //#endregion
//#region validate
// noData

var validate$d = undefined; //#endregion
//#region sanitize

var sanitize$a = undefined; //#endregion

var interimInputStdOtp = {
	code: code$d,
	type: type$a,
	noData: noData$9,
	passThrough: passThrough$a,
	examples: examples$c,
	validate: validate$d,
	sanitize: sanitize$a
};

var gwClientLoginInterimInputStdOtp = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': interimInputStdOtp,
	__moduleExports: interimInputStdOtp,
	code: code$d,
	type: type$a,
	noData: noData$9,
	passThrough: passThrough$a,
	examples: examples$c,
	validate: validate$d,
	sanitize: sanitize$a
});

var code$e = "login-interim-input/success";
var type$b = enums.TYPES.SUCCESS;
var noData$a = true;
var passThrough$b = true; // from lambda-gw
// noData

var examples$d = undefined;
var validate$e = undefined;
var sanitize$b = undefined;

var success$4 = {
	code: code$e,
	type: type$b,
	noData: noData$a,
	passThrough: passThrough$b,
	examples: examples$d,
	validate: validate$e,
	sanitize: sanitize$b
};

var gwClientLoginInterimInputSuccess = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': success$4,
	__moduleExports: success$4,
	code: code$e,
	type: type$b,
	noData: noData$a,
	passThrough: passThrough$b,
	examples: examples$d,
	validate: validate$e,
	sanitize: sanitize$b
});

var code$f = "login/interim-wait-cap-2fa";
var type$c = enums.TYPES.INTERIM;
var noData$b = true;
var passThrough$c = true; // from lambda-gw
//#region examples
// noData

var examples$e = undefined; //#endregion
//#region validate
// noData

var validate$f = undefined; //#endregion
//#region sanitize

var sanitize$c = undefined; //#endregion

var interimWaitCap2fa = {
	code: code$f,
	type: type$c,
	noData: noData$b,
	passThrough: passThrough$c,
	examples: examples$e,
	validate: validate$f,
	sanitize: sanitize$c
};

var gwClientLoginInterimWaitCap2fa = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': interimWaitCap2fa,
	__moduleExports: interimWaitCap2fa,
	code: code$f,
	type: type$c,
	noData: noData$b,
	passThrough: passThrough$c,
	examples: examples$e,
	validate: validate$f,
	sanitize: sanitize$c
});

var code$g = "login-interim-wait/success";
var type$d = enums.TYPES.SUCCESS;
var noData$c = true;
var passThrough$d = true; // from lambda-gw
//#region examples
// noData

var examples$f = undefined; //#endregion
//#region validate

var validate$g = undefined; //#endregion
//#region sanitize

var sanitize$d = undefined; //#endregion

var success$5 = {
	code: code$g,
	type: type$d,
	noData: noData$c,
	passThrough: passThrough$d,
	examples: examples$f,
	validate: validate$g,
	sanitize: sanitize$d
};

var gwClientLoginInterimWaitSuccess = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': success$5,
	__moduleExports: success$5,
	code: code$g,
	type: type$d,
	noData: noData$c,
	passThrough: passThrough$d,
	examples: examples$f,
	validate: validate$g,
	sanitize: sanitize$d
});

var code$h = "login/success";
var type$e = enums.TYPES.SUCCESS;
var noData$d = true;
var passThrough$e = true; // from lambda-gw
//#region examples
// noData

var examples$g = undefined; //#endregion
//#region validate
// noData

var validate$h = undefined; //#endregion
//#region sanitize

var sanitize$e = undefined; //#endregion

var success$6 = {
	code: code$h,
	type: type$e,
	noData: noData$d,
	passThrough: passThrough$e,
	examples: examples$g,
	validate: validate$h,
	sanitize: sanitize$e
};

var gwClientLoginSuccess = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': success$6,
	__moduleExports: success$6,
	code: code$h,
	type: type$e,
	noData: noData$d,
	passThrough: passThrough$e,
	examples: examples$g,
	validate: validate$h,
	sanitize: sanitize$e
});

var code$i = "gw-client/nested/statement-info";
var validate$i = {
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
	validate: validate$i,
	examples: examples$h,
	sanitize: sanitize$f
};

var gwClientNestedStatementInfo = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': statementInfo,
	__moduleExports: statementInfo,
	code: code$i,
	validate: validate$i,
	examples: examples$h,
	sanitize: sanitize$f
});

var code$j = "gw-client/nested/transaction";
var validate$j = {
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
	validate: validate$j,
	examples: examples$i
};

var gwClientNestedTransaction = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': transaction,
	__moduleExports: transaction,
	code: code$j,
	validate: validate$j,
	examples: examples$i
});

var transactions$2 = createCommonjsModule(function (module, exports) {
const nested$1 = {
  transaction
};
exports.code = "gw-client/nested/transactions";
exports.validate = {
  id: "/transactions",
  type: "array",
  items: {
    $ref: nested$1.transaction.validate.id
  }
};
exports.nested = [nested$1.transaction];
let {
  shapes,
  schemas
} = nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;
exports.examples = {
  default: [nested$1.transaction.examples[1], nested$1.transaction.examples[2], nested$1.transaction.examples[3]]
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
var type$f = enums.TYPES.ERROR;
var passThrough$f = true; // from lambda-gw

var noData$e = true;
var blame$5 = enums.BLAME.SPIKE;
var noSessionId$6 = true; // shapeExplorer

var message$4 = "couldn't find the breakdown/overview section in a credit card statement"; // noData

var examples$j = undefined;
var validate$k = undefined;
var sanitize$g = undefined;

var failedToExtractCreditBreakdown = {
	code: code$k,
	type: type$f,
	passThrough: passThrough$f,
	noData: noData$e,
	blame: blame$5,
	noSessionId: noSessionId$6,
	message: message$4,
	examples: examples$j,
	validate: validate$k,
	sanitize: sanitize$g
};

var gwClientPdfFailFailedToExtractCreditBreakdown = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': failedToExtractCreditBreakdown,
	__moduleExports: failedToExtractCreditBreakdown,
	code: code$k,
	type: type$f,
	passThrough: passThrough$f,
	noData: noData$e,
	blame: blame$5,
	noSessionId: noSessionId$6,
	message: message$4,
	examples: examples$j,
	validate: validate$k,
	sanitize: sanitize$g
});

var code$l = "pdf/fail/failed-to-extract-statement-date";
var type$g = enums.TYPES.ERROR;
var passThrough$g = true; // from lambda-gw

var noData$f = true;
var blame$6 = enums.BLAME.SPIKE;
var noSessionId$7 = true; // shapeExplorer

var message$5 = "we need the statement date in order to determine the transaction date in a statement format which excludes the year from any dates"; // noData

var examples$k = undefined;
var validate$l = undefined;
var sanitize$h = undefined;

var failedToExtractStatementDate = {
	code: code$l,
	type: type$g,
	passThrough: passThrough$g,
	noData: noData$f,
	blame: blame$6,
	noSessionId: noSessionId$7,
	message: message$5,
	examples: examples$k,
	validate: validate$l,
	sanitize: sanitize$h
};

var gwClientPdfFailFailedToExtractStatementDate = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': failedToExtractStatementDate,
	__moduleExports: failedToExtractStatementDate,
	code: code$l,
	type: type$g,
	passThrough: passThrough$g,
	noData: noData$f,
	blame: blame$6,
	noSessionId: noSessionId$7,
	message: message$5,
	examples: examples$k,
	validate: validate$l,
	sanitize: sanitize$h
});

var code$m = "pdf/fail/file-not-found";
var type$h = enums.TYPES.ERROR;
var passThrough$h = true; // from lambda-gw

var noData$g = true;
var blame$7 = enums.BLAME.SPIKE;
var noSessionId$8 = true; // shapeExplorer

var message$6 = "internal error"; // noData

var examples$l = undefined;
var validate$m = undefined;
var sanitize$i = undefined;

var fileNotFound = {
	code: code$m,
	type: type$h,
	passThrough: passThrough$h,
	noData: noData$g,
	blame: blame$7,
	noSessionId: noSessionId$8,
	message: message$6,
	examples: examples$l,
	validate: validate$m,
	sanitize: sanitize$i
};

var gwClientPdfFailFileNotFound = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': fileNotFound,
	__moduleExports: fileNotFound,
	code: code$m,
	type: type$h,
	passThrough: passThrough$h,
	noData: noData$g,
	blame: blame$7,
	noSessionId: noSessionId$8,
	message: message$6,
	examples: examples$l,
	validate: validate$m,
	sanitize: sanitize$i
});

var code$n = "pdf/fail/image-pdf";
var type$i = enums.TYPES.ERROR;
var passThrough$i = true; // from lambda-gw

var noData$h = true;
var blame$8 = enums.BLAME.USER;
var noSessionId$9 = true; // shapeExplorer

var message$7 = "PDF is image based not text based, and hence can't be parsed"; // noData

var examples$m = undefined;
var validate$n = undefined;
var sanitize$j = undefined;

var imagePdf = {
	code: code$n,
	type: type$i,
	passThrough: passThrough$i,
	noData: noData$h,
	blame: blame$8,
	noSessionId: noSessionId$9,
	message: message$7,
	examples: examples$m,
	validate: validate$n,
	sanitize: sanitize$j
};

var gwClientPdfFailImagePdf = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': imagePdf,
	__moduleExports: imagePdf,
	code: code$n,
	type: type$i,
	passThrough: passThrough$i,
	noData: noData$h,
	blame: blame$8,
	noSessionId: noSessionId$9,
	message: message$7,
	examples: examples$m,
	validate: validate$n,
	sanitize: sanitize$j
});

var code$o = "pdf/fail/image-pdf-with-ocr";
var type$j = enums.TYPES.ERROR;
var passThrough$j = true; // from lambda-gw

var noData$i = true;
var blame$9 = enums.BLAME.USER;
var noSessionId$a = true; // shapeExplorer

var message$8 = "PDF contains a scanned image with OCR text, and hence can't be parsed"; // noData

var examples$n = undefined;
var validate$o = undefined;
var sanitize$k = undefined;

var imagePdfWithOcr = {
	code: code$o,
	type: type$j,
	passThrough: passThrough$j,
	noData: noData$i,
	blame: blame$9,
	noSessionId: noSessionId$a,
	message: message$8,
	examples: examples$n,
	validate: validate$o,
	sanitize: sanitize$k
};

var gwClientPdfFailImagePdfWithOcr = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': imagePdfWithOcr,
	__moduleExports: imagePdfWithOcr,
	code: code$o,
	type: type$j,
	passThrough: passThrough$j,
	noData: noData$i,
	blame: blame$9,
	noSessionId: noSessionId$a,
	message: message$8,
	examples: examples$n,
	validate: validate$o,
	sanitize: sanitize$k
});

var code$p = "pdf/fail/invalid-data-extracted";
var type$k = enums.TYPES.ERROR;
var passThrough$k = true; // from lambda-gw

var noData$j = true;
var blame$a = enums.BLAME.SPIKE;
var noSessionId$b = true; // shapeExplorer

var message$9 = "we successfully extract the data from the statement however it did not conform to the expected output schema"; // noData

var examples$o = undefined;
var validate$p = undefined;
var sanitize$l = undefined;

var invalidDataExtracted$1 = {
	code: code$p,
	type: type$k,
	passThrough: passThrough$k,
	noData: noData$j,
	blame: blame$a,
	noSessionId: noSessionId$b,
	message: message$9,
	examples: examples$o,
	validate: validate$p,
	sanitize: sanitize$l
};

var gwClientPdfFailInvalidDataExtracted = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': invalidDataExtracted$1,
	__moduleExports: invalidDataExtracted$1,
	code: code$p,
	type: type$k,
	passThrough: passThrough$k,
	noData: noData$j,
	blame: blame$a,
	noSessionId: noSessionId$b,
	message: message$9,
	examples: examples$o,
	validate: validate$p,
	sanitize: sanitize$l
});

var code$q = "pdf/fail/invalid-pdf-exception";
var type$l = enums.TYPES.ERROR;
var passThrough$l = true; // from lambda-gw

var noData$k = true;
var blame$b = enums.BLAME.SPIKE;
var noSessionId$c = true; // shapeExplorer

var message$a = "the pdf does not have a valid structure"; // noData

var examples$p = undefined;
var validate$q = undefined;
var sanitize$m = undefined;

var invalidPdfException = {
	code: code$q,
	type: type$l,
	passThrough: passThrough$l,
	noData: noData$k,
	blame: blame$b,
	noSessionId: noSessionId$c,
	message: message$a,
	examples: examples$p,
	validate: validate$q,
	sanitize: sanitize$m
};

var gwClientPdfFailInvalidPdfException = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': invalidPdfException,
	__moduleExports: invalidPdfException,
	code: code$q,
	type: type$l,
	passThrough: passThrough$l,
	noData: noData$k,
	blame: blame$b,
	noSessionId: noSessionId$c,
	message: message$a,
	examples: examples$p,
	validate: validate$q,
	sanitize: sanitize$m
});

var code$r = "pdf/fail/multiple-matching-parsers";
var type$m = enums.TYPES.ERROR;
var passThrough$m = true; // from lambda-gw

var noData$l = true;
var blame$c = enums.BLAME.SPIKE;
var noSessionId$d = true; // shapeExplorer

var message$b = "two or more parsers were found which can process this pdf"; // noData

var examples$q = undefined;
var validate$r = undefined;
var sanitize$n = undefined;

var multipleMatchingParsers$1 = {
	code: code$r,
	type: type$m,
	passThrough: passThrough$m,
	noData: noData$l,
	blame: blame$c,
	noSessionId: noSessionId$d,
	message: message$b,
	examples: examples$q,
	validate: validate$r,
	sanitize: sanitize$n
};

var gwClientPdfFailMultipleMatchingParsers = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': multipleMatchingParsers$1,
	__moduleExports: multipleMatchingParsers$1,
	code: code$r,
	type: type$m,
	passThrough: passThrough$m,
	noData: noData$l,
	blame: blame$c,
	noSessionId: noSessionId$d,
	message: message$b,
	examples: examples$q,
	validate: validate$r,
	sanitize: sanitize$n
});

var code$s = "pdf/fail/password-incorrect";
var type$n = enums.TYPES.ERROR;
var passThrough$n = true; // from lambda-gw

var noData$m = true;
var blame$d = enums.BLAME.USER;
var noSessionId$e = true; // shapeExplorer

var message$c = "the password which you supplied failed to decrypt the pdf"; // noData

var examples$r = undefined;
var validate$s = undefined;
var sanitize$o = undefined;

var passwordIncorrect = {
	code: code$s,
	type: type$n,
	passThrough: passThrough$n,
	noData: noData$m,
	blame: blame$d,
	noSessionId: noSessionId$e,
	message: message$c,
	examples: examples$r,
	validate: validate$s,
	sanitize: sanitize$o
};

var gwClientPdfFailPasswordIncorrect = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': passwordIncorrect,
	__moduleExports: passwordIncorrect,
	code: code$s,
	type: type$n,
	passThrough: passThrough$n,
	noData: noData$m,
	blame: blame$d,
	noSessionId: noSessionId$e,
	message: message$c,
	examples: examples$r,
	validate: validate$s,
	sanitize: sanitize$o
});

var code$t = "pdf/fail/password-required";
var type$o = enums.TYPES.ERROR;
var passThrough$o = true; // from lambda-gw

var noData$n = true;
var blame$e = enums.BLAME.USER;
var noSessionId$f = true; // shapeExplorer

var message$d = "the password which you supplied is encrypted - you must supply a password"; // noData

var examples$s = undefined;
var validate$t = undefined;
var sanitize$p = undefined;

var passwordRequired = {
	code: code$t,
	type: type$o,
	passThrough: passThrough$o,
	noData: noData$n,
	blame: blame$e,
	noSessionId: noSessionId$f,
	message: message$d,
	examples: examples$s,
	validate: validate$t,
	sanitize: sanitize$p
};

var gwClientPdfFailPasswordRequired = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': passwordRequired,
	__moduleExports: passwordRequired,
	code: code$t,
	type: type$o,
	passThrough: passThrough$o,
	noData: noData$n,
	blame: blame$e,
	noSessionId: noSessionId$f,
	message: message$d,
	examples: examples$s,
	validate: validate$t,
	sanitize: sanitize$p
});

var code$u = "pdf/fail/pdf-js-error";
var type$p = enums.TYPES.ERROR;
var passThrough$p = true; // from lambda-gw

var noData$o = true;
var blame$f = enums.BLAME.SPIKE;
var noSessionId$g = true; // shapeExplorer

var message$e = "internal error"; // noData

var examples$t = undefined;
var validate$u = undefined;
var sanitize$q = undefined;

var pdfJsError = {
	code: code$u,
	type: type$p,
	passThrough: passThrough$p,
	noData: noData$o,
	blame: blame$f,
	noSessionId: noSessionId$g,
	message: message$e,
	examples: examples$t,
	validate: validate$u,
	sanitize: sanitize$q
};

var gwClientPdfFailPdfJsError = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': pdfJsError,
	__moduleExports: pdfJsError,
	code: code$u,
	type: type$p,
	passThrough: passThrough$p,
	noData: noData$o,
	blame: blame$f,
	noSessionId: noSessionId$g,
	message: message$e,
	examples: examples$t,
	validate: validate$u,
	sanitize: sanitize$q
});

var code$v = "pdf/fail/pdf-js-exception";
var type$q = enums.TYPES.ERROR;
var passThrough$q = true; // from lambda-gw

var noData$p = true;
var blame$g = enums.BLAME.SPIKE;
var noSessionId$h = true; // shapeExplorer

var message$f = "internal error"; // noData

var examples$u = undefined;
var validate$v = undefined;
var sanitize$r = undefined;

var pdfJsException = {
	code: code$v,
	type: type$q,
	passThrough: passThrough$q,
	noData: noData$p,
	blame: blame$g,
	noSessionId: noSessionId$h,
	message: message$f,
	examples: examples$u,
	validate: validate$v,
	sanitize: sanitize$r
};

var gwClientPdfFailPdfJsException = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': pdfJsException,
	__moduleExports: pdfJsException,
	code: code$v,
	type: type$q,
	passThrough: passThrough$q,
	noData: noData$p,
	blame: blame$g,
	noSessionId: noSessionId$h,
	message: message$f,
	examples: examples$u,
	validate: validate$v,
	sanitize: sanitize$r
});

var code$w = "pdf/fail/pdf-read-exception";
var type$r = enums.TYPES.ERROR;
var passThrough$r = true; // from lambda-gw

var noData$q = true;
var blame$h = enums.BLAME.SPIKE;
var noSessionId$i = true; // shapeExplorer

var message$g = "internal error"; // noData

var examples$v = undefined;
var validate$w = undefined;
var sanitize$s = undefined;

var pdfReadException = {
	code: code$w,
	type: type$r,
	passThrough: passThrough$r,
	noData: noData$q,
	blame: blame$h,
	noSessionId: noSessionId$i,
	message: message$g,
	examples: examples$v,
	validate: validate$w,
	sanitize: sanitize$s
};

var gwClientPdfFailPdfReadException = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': pdfReadException,
	__moduleExports: pdfReadException,
	code: code$w,
	type: type$r,
	passThrough: passThrough$r,
	noData: noData$q,
	blame: blame$h,
	noSessionId: noSessionId$i,
	message: message$g,
	examples: examples$v,
	validate: validate$w,
	sanitize: sanitize$s
});

var code$x = "pdf/fail/unknown-exception";
var type$s = enums.TYPES.ERROR;
var passThrough$s = true; // from lambda-gw

var noData$r = true;
var blame$i = enums.BLAME.SPIKE;
var noSessionId$j = true; // shapeExplorer

var message$h = "an unspecified exception ocurred"; // noData

var examples$w = undefined;
var validate$x = undefined;
var sanitize$t = undefined;

var unknownException$1 = {
	code: code$x,
	type: type$s,
	passThrough: passThrough$s,
	noData: noData$r,
	blame: blame$i,
	noSessionId: noSessionId$j,
	message: message$h,
	examples: examples$w,
	validate: validate$x,
	sanitize: sanitize$t
};

var gwClientPdfFailUnknownException = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': unknownException$1,
	__moduleExports: unknownException$1,
	code: code$x,
	type: type$s,
	passThrough: passThrough$s,
	noData: noData$r,
	blame: blame$i,
	noSessionId: noSessionId$j,
	message: message$h,
	examples: examples$w,
	validate: validate$x,
	sanitize: sanitize$t
});

var code$y = "pdf/fail/unknown-pdf";
var type$t = enums.TYPES.ERROR;
var passThrough$t = true; // from lambda-gw

var noData$s = true;
var blame$j = enums.BLAME.SPIKE;
var noSessionId$k = true; // shapeExplorer

var message$i = "we did not recognise this pdf format"; // noData

var examples$x = undefined;
var validate$y = undefined;
var sanitize$u = undefined;

var unknownPdf = {
	code: code$y,
	type: type$t,
	passThrough: passThrough$t,
	noData: noData$s,
	blame: blame$j,
	noSessionId: noSessionId$k,
	message: message$i,
	examples: examples$x,
	validate: validate$y,
	sanitize: sanitize$u
};

var gwClientPdfFailUnknownPdf = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': unknownPdf,
	__moduleExports: unknownPdf,
	code: code$y,
	type: type$t,
	passThrough: passThrough$t,
	noData: noData$s,
	blame: blame$j,
	noSessionId: noSessionId$k,
	message: message$i,
	examples: examples$x,
	validate: validate$y,
	sanitize: sanitize$u
});

var bankStatementNormal = createCommonjsModule(function (module, exports) {
// NOTE: nested/bank-statement was shared by:
// - "statements/success" - (now obsolete) which has an array of nested/bank-statement's
// - "pdf/success/bank-statement-normal"
// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/bank-statement-normal", "pdf/success/bank-statement-no-balance" ]










const nested$1 = {
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
      $ref: nested$1["statement-info"].validate.id
    },
    transactions: {
      required: true,
      $ref: nested$1.transactions.validate.id
    },
    valid: {
      required: true,
      type: "boolean"
    },
    breaks: {
      required: false,
      $ref: nested$1.breaks.validate.id
    },
    buffer: {
      required: false,
      type: "string"
    }
  }
};
exports.nested = [nested$1["statement-info"], nested$1.transactions, nested$1.breaks];
let {
  shapes,
  schemas
} = nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;
exports.examples = {
  success: {
    parser: "FNB_RETAIL_ALL_0",
    statement: nested$1["statement-info"].examples.default,
    transactions: nested$1.transactions.examples.default,
    valid: true
  },
  successWithBreaks: {
    parser: "FNB_RETAIL_ALL_0",
    statement: nested$1["statement-info"].examples.default,
    transactions: nested$1.transactions.examples.default,
    breaks: nested$1.breaks.examples.default,
    valid: false
  }
};
exports.sanitize = {
  statement: nested$1["statement-info"].sanitize,
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
var type$u = enums.TYPES.SUCCESS;
var passThrough$u = true; // from lambda-gw

var noSessionId$l = true; // shapeExplorer
//#region examples

var examples$y = nested$1["bank-statement-normal"].examples; //#endregion
//#region validate

var validate$z = nested$1["bank-statement-normal"].validate;
var nested_1 = nested$1["bank-statement-normal"].nested;
var nestedShapes = nested$1["bank-statement-normal"].nestedShapes;
var nestedSchemas = nested$1["bank-statement-normal"].nestedSchemas; //#endregion
//#region sanitize

var sanitize$v = nested$1["bank-statement-normal"].sanitize; //#endregion

var bankStatementNormal_1$1 = {
	code: code$z,
	type: type$u,
	passThrough: passThrough$u,
	noSessionId: noSessionId$l,
	examples: examples$y,
	validate: validate$z,
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
	type: type$u,
	passThrough: passThrough$u,
	noSessionId: noSessionId$l,
	examples: examples$y,
	validate: validate$z,
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








const nested$1 = {
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
      $ref: nested$1["statement-info"].validate.id
    },
    transactions: {
      required: true,
      $ref: nested$1["transactions-no-balance"].validate.id
    },
    valid: {
      required: true,
      type: "boolean"
    }
  }
};
exports.nested = [nested$1["statement-info"], nested$1["transactions-no-balance"]];
let {
  shapes,
  schemas
} = nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;
exports.examples = {
  success: {
    parser: "NEDBANK_ACCBAL_WEB",
    statement: nested$1["statement-info"].examples.default,
    transactions: nested$1["transactions-no-balance"].examples.default,
    valid: true
  }
};
exports.sanitize = {
  statement: nested$1["statement-info"].sanitize
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
var type$v = enums.TYPES.SUCCESS;
var passThrough$v = true; // from lambda-gw

var noSessionId$m = true; // shapeExplorer
//#region examples

var examples$z = nested$2["bank-statement-no-balance"].examples; //#endregion
//#region validate

var validate$A = nested$2["bank-statement-no-balance"].validate;
var nested_1$1 = nested$2["bank-statement-no-balance"].nested;
var nestedShapes$1 = nested$2["bank-statement-no-balance"].nestedShapes;
var nestedSchemas$1 = nested$2["bank-statement-no-balance"].nestedSchemas; //#endregion
//#region sanitize

var sanitize$w = nested$2["bank-statement-no-balance"].sanitize; //#endregion

var bankStatementNoBalance_1$1 = {
	code: code$A,
	type: type$v,
	passThrough: passThrough$v,
	noSessionId: noSessionId$m,
	examples: examples$z,
	validate: validate$A,
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
	type: type$v,
	passThrough: passThrough$v,
	noSessionId: noSessionId$m,
	examples: examples$z,
	validate: validate$A,
	nested: nested_1$1,
	nestedShapes: nestedShapes$1,
	nestedSchemas: nestedSchemas$1,
	sanitize: sanitize$w
});

var code$B = "pdf/success/credit-card-breakdown";
var type$w = enums.TYPES.SUCCESS;
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

var validate$B = {
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
	type: type$w,
	passThrough: passThrough$w,
	noSessionId: noSessionId$n,
	examples: examples$A,
	validate: validate$B,
	sanitize: sanitize$x
};

var gwClientPdfSuccessCreditCardBreakdown = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': creditCardBreakdown,
	__moduleExports: creditCardBreakdown,
	code: code$B,
	type: type$w,
	passThrough: passThrough$w,
	noSessionId: noSessionId$n,
	examples: examples$A,
	validate: validate$B,
	sanitize: sanitize$x
});

var creditCardBreakdownMultiUser_1 = createCommonjsModule(function (module, exports) {
// NOTE: "pdf/success/credit-card-breakdown-multi-user" is an array of "pdf/success/credit-card-breakdown"
// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/credit-card-breakdown", "pdf/success/credit-card-simple" ]








const nested$1 = {
  "credit-card-breakdown": creditCardBreakdown
}; // Overview shared fields with credit-card-simple specifics

const creditCardBreakdownMultiUser = object.mergeObjectsClone(nested$1["credit-card-breakdown"], {
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
} = nested.resolve(exports.validate.id, exports.nested);
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
var type$x = enums.TYPES.SUCCESS;
var passThrough$x = true; // from lambda-gw

var noSessionId$o = true; // shapeExplorer
//#region examples

var examples$B = creditCardSimple.examples; //#endregion
//#region validate

var validate$C = creditCardSimple.validate;
var nested$3 = creditCardSimple.nested;
var nestedShapes$2 = creditCardSimple.nestedShapes;
var nestedSchemas$2 = creditCardSimple.nestedSchemas; //#endregion
//#region sanitize

var sanitize$y = creditCardSimple.sanitize; //#endregion

var creditCardSimple_1 = {
	code: code$C,
	type: type$x,
	passThrough: passThrough$x,
	noSessionId: noSessionId$o,
	examples: examples$B,
	validate: validate$C,
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
	type: type$x,
	passThrough: passThrough$x,
	noSessionId: noSessionId$o,
	examples: examples$B,
	validate: validate$C,
	nested: nested$3,
	nestedShapes: nestedShapes$2,
	nestedSchemas: nestedSchemas$2,
	sanitize: sanitize$y
});

var code$D = "sars/success/payroll-taxes";
var type$y = enums.TYPES.SUCCESS;
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

var validate$D = {
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
	type: type$y,
	noData: noData$t,
	passThrough: passThrough$y,
	examples: examples$C,
	validate: validate$D,
	sanitize: sanitize$z
};

var gwClientSarsSuccessPayrollTaxes = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': payrollTaxes,
	__moduleExports: payrollTaxes,
	code: code$D,
	type: type$y,
	noData: noData$t,
	passThrough: passThrough$y,
	examples: examples$C,
	validate: validate$D,
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
const validate$E = function (_requestId, transactions, filename) {
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
	validate: validate$E
});

var success$7 = createCommonjsModule(function (module, exports) {
const nested$1 = {
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
    transactions: nested$1.transactions.examples.default,
    breaks: undefined,
    valid: true
  },
  successWithBreaks: {
    accountNumber: "9017446437",
    transactions: nested$1.transactions.examples.default,
    breaks: nested$1.breaks.examples.default,
    valid: false
  }
}; //#endregion
//#region create

exports.create = function (requestId, accountNumber, transactions, scraperName) {
  common.add_id(transactions);
  let {
    breaks,
    valid
  } = common.validate(requestId, transactions, scraperName);
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
      $ref: nested$1.transactions.validate.id
    },
    valid: {
      required: false,
      type: "boolean"
    },
    breaks: {
      required: false,
      $ref: nested$1.breaks.validate.id
    }
  }
};
exports.nested = [nested$1.transactions, nested$1.breaks];
let {
  shapes,
  schemas
} = nested.resolve(exports.validate.id, exports.nested);
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

  return validate(shape.code, schema$1, data, shape.nestedSchemas);
};
const validateWrapped = function (wrapperShape, wrappedInstance) {
  if (wrapperShape.type === TYPES.ERROR) {
    return undefined; // don't need to validate errors
  }

  const wrapperSchema = wrapperShape.wrapperSchema;
  const wrapperCode = wrapperShape.code; // validate wrapper

  const wrapperErrors = validate(wrapperCode, wrapperSchema, wrappedInstance);

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

  const errors = validate(shape.code, schema$1, wrappedInstance.data, shape.nestedSchemas);

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

const type$z = TYPES.NOTSET; // specified by wrapped.data
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
  let errors = validate(code$E, validate$F, wrappedInstance);

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
const validate$F = function (wrappedInstance) {
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
	type: type$z,
	create: create,
	createError: createError,
	examples: examples$D,
	marshall: marshall$1,
	wrapperSchema: wrapperSchema,
	validate: validate$F,
	sanitize: sanitize$B,
	log: log$1
});

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


  const response = await axios.post(url, inputs, {
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

export default index;
//# sourceMappingURL=spike-api.esm.mjs.map

const Enum = require("./enum");

exports.xor = function(a, b) {
  a = !!a;
  b = !!b;
  return a ^ b;
};

exports.oneOf = function() {
  let t = 0,
    f = 0;
  for (let a of arguments) {
    if (a !== undefined) {
      // includes various falsey values e.g. 0, [], '', null
      ++t;
    } else {
      ++f;
    }
  }
  return t === 1 && f === arguments.length - 1;
};

// from: https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-roro-be01e7669cbd
exports.requiredParam = function(param) {
  const requiredParamError = new Error(`Required parameter, "${param}" is missing.`);

  // preserve original stack trace
  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(requiredParamError, exports.requiredParam);
  }

  throw requiredParamError;
};

exports.isFunction = function(functionToCheck) {
  if (!functionToCheck) {
    return false;
  }
  let fn = Object.prototype.toString.call(functionToCheck);
  return fn === "[object Function]" || fn === "[object AsyncFunction]";
};

// https://stackoverflow.com/a/44198641/609428
exports.isValidDate = function(date) {
  return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date);
};

exports.isObject = function(obj) {
  return !!(obj && Object.prototype.toString.call(obj) === "[object Object]");
};

exports.isEnum = function(e) {
  return !!(e && e[Enum.nameKey]);
};

exports.isString = function(x) {
  return typeof x === "string" || x instanceof String;
};

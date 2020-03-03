const enums = require("../../enums");

exports.code = "login/interim-input-std-otp";
exports.type = enums.TYPES.INTERIM;
exports.noData = true;
exports.passThrough = true; // from lambda-gw

//#region examples

// noData
exports.examples = undefined;

//#endregion

//#region validate

// noData
exports.validate = undefined;

//#endregion

//#region sanitize

exports.sanitize = undefined;

//#endregion

const enums = require("../../enums");

exports.code = "login/interim-input-abs-pass";
exports.type = enums.TYPES.INTERIM;
exports.noData = false;
exports.passThrough = true; // from lambda-gw

//#region examples

exports.examples = {
  default: [0, 1, 2],
};

//#endregion

//#region validate

exports.validate = {
  type: "array",
  items: {
    type: "integer",
  },
  minItems: 3,
  maxItems: 3,
};

//#endregion

//#region sanitize

exports.sanitize = undefined;

//#endregion

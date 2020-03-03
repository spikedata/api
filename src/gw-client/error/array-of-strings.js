const enums = require("../../enums");

exports.code = "error/array-of-strings"; // override in instance
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

//#region examples

exports.examples = {
  default: ["string1"]
};

//#endregion

//#region validate

exports.validate = {
  type: "array",
  items: {
    type: "string"
  },
  minItems: 1
};

//#endregion

//#region sanitize

exports.sanitize = undefined;

//#endregion

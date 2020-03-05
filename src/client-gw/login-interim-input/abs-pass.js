const enums = require("../../enums");
const InputValidationError = require("../../lib/inputValidationError");
const Schema = require("../../lib/schema");
const uuid = require("../../lib/uuid");
const composerCodeData = require("../composer/codeData");

exports.code = "login-interim-input/abs-pass";
exports.type = enums.TYPES.INPUTS;
exports.channel = enums.Channel.Bchan;
exports.sessionBased = true;

//#region examples

exports.examples = {
  default: {
    sessionId: uuid.testUuid(),
    final: false,
    code: exports.code,
    data: ["p", "a", "s"],
  },
};

//#endregion

//#region create

// NOTE: final=false: normally you want to do /accounts & /transactions after login
exports.create = function(sessionId, final = false, data) {
  let instance = {
    sessionId,
    final,
    code: exports.code,
    data,
  };
  let errors = Schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.composer = composerCodeData;

exports.additionalSchema - undefined;

exports.dataSchema = {
  required: true,
  type: "array",
  items: {
    type: "string",
    minItems: 3,
    maxItems: 3,
  },
};

exports.validate = composerCodeData.compose(
  true,
  true,
  true,
  exports.dataSchema,
  exports.additionalSchema
);

//#endregion

//#region sanitize

exports.ownSanitize = "[*,*,*]";

exports.sanitize = {
  data: exports.ownSanitize,
};

//#endregion

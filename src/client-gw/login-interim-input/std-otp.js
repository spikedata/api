const enums = require("../../enums");
const common = require("../../lib/common");
const InputValidationError = require("../../lib/inputValidationError");
const uuid = require("../../lib/uuid");
const composerCodeData = require("../composer/codeData");

exports.code = "login-interim-input/std-otp";
exports.type = enums.TYPES.INPUTS;
exports.channel = enums.Channel.Bchan;
exports.sessionBased = true;

//#region examples

exports.examples = {
  default: {
    sessionId: uuid.testUuid(),
    final: false,
    code: exports.code,
    data: "12345"
  }
};

//#endregion

//#region create

// NOTE: final=false: normally you want to do /accounts & /transactions after login
exports.create = function(sessionId, final = false, otp) {
  let instance = {
    sessionId,
    final,
    code: exports.code,
    data: otp
  };
  let errors = common.validateSchema(exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.composer = composerCodeData;

exports.additionalSchema = undefined;

exports.dataSchema = {
  required: true,
  type: "string" // NOTE: string is safer than number - leading 0's are stripped from numbers
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

exports.ownSanitize = "*****";

exports.sanitize = {
  data: exports.ownSanitize
};

//#endregion

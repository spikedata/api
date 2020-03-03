const enums = require("../enums");
const common = require("../lib/common");
const uuid = require("../lib/uuid");
const composerBasic = require("./composer/basic");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "accounts";
exports.type = enums.TYPES.INPUTS;
exports.channel = enums.Channel.Bchan;
exports.sessionBased = true;

//#region examples

exports.examples = {
  default: {
    sessionId: uuid.testUuid(),
    final: true,
  },
};

//#endregion

//#region create

exports.create = function(sessionId, final = true) {
  let instance = {
    sessionId,
    final,
  };
  let errors = common.validateSchema(exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.composer = composerBasic;

exports.additionalSchema = undefined; // no additional data

exports.validate = composerBasic.compose(true, true, exports.additionalSchema);

//#endregion

//#region sanitize

exports.ownSanitize = undefined;

exports.sanitize = undefined;

//#endregion

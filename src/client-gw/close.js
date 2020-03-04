const enums = require("../enums");
const Schema = require("../lib/schema");
const uuid = require("../lib/uuid");
const composerBasic = require("./composer/basic");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "close";
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

exports.create = function(sessionId) {
  let instance = {
    sessionId,
    final: true,
  };
  let errors = Schema.validate(exports.validate, instance, exports.nestedSchemas);
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

const enums = require("../enums");
const Schema = require("../lib/schema");
const uuid = require("../lib/uuid");
const composerBasic = require("./composer/basic");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "statements";
exports.type = enums.TYPES.INPUTS;
exports.channel = enums.Channel.Bchan;
exports.sessionBased = true;

//#region examples

exports.examples = {
  default: {
    sessionId: uuid.testUuid(),
    final: true,
    accountNumber: "1234567890",
    numStatements: 3,
  },
};

//#endregion

//#region create

exports.create = function(sessionId, final = true, accountNumber, numStatements = 3) {
  let instance = {
    sessionId,
    final,
    accountNumber,
    numStatements,
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

exports.additionalSchema = {
  accountNumber: {
    type: "string",
    required: true,
    minLength: 10,
  },
  numStatements: {
    required: true,
    type: "integer",
    minimum: 1,
    maximum: 12,
  },
};

exports.validate = composerBasic.compose(true, true, exports.additionalSchema);

//#endregion

//#region sanitize

exports.ownSanitize = undefined;

exports.sanitize = undefined;

//#endregion

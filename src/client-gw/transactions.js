const enums = require("../enums");
const Schema = require("../lib/schema");
const uuid = require("../lib/uuid");
const composerBasic = require("./composer/basic");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "transactions";
exports.type = enums.TYPES.INPUTS;
exports.channel = enums.Channel.Bchan;
exports.sessionBased = true;

//#region examples

exports.examples = {
  default: {
    sessionId: uuid.testUuid(),
    final: true,
    accountNumber: "1234567890",
    numDays: 90,
  },
};

//#endregion

//#region create

exports.create = function(sessionId, final = true, accountNumber, numDays) {
  numDays = +numDays; // in case user supplied numDays as a string
  let instance = {
    sessionId,
    final,
    accountNumber,
    numDays,
  };
  let errors = Schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);
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
  numDays: {
    required: true,
    type: "integer",
    minimum: 1,
    maximum: 180,
  },
};

exports.validate = composerBasic.compose(true, true, exports.additionalSchema);

//#endregion

//#region sanitize

exports.ownSanitize = undefined;

exports.sanitize = undefined;

//#endregion

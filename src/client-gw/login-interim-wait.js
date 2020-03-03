const enums = require("../enums");
const common = require("../lib/common");
const uuid = require("../lib/uuid");
const composerBasic = require("./composer/basic");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "login-interim-wait";
exports.type = enums.TYPES.INPUTS;
exports.channel = enums.Channel.Bchan;
exports.sessionBased = true;

//#region examples

exports.examples = {
  default: {
    sessionId: uuid.testUuid(),
    final: false
  }
};

//#endregion

//#region create

exports.create = function(sessionId, final = true) {
  let instance = {
    sessionId,
    // code: exports.code, // not required atm hardcoded in routeHandler
    final
  };

  let errors = common.validateSchema(exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

// NOTE: wait requires no inputs so no need to disambiguate in routeHandler i.e. don't need to compose { code, data } into this shape
exports.composer = composerBasic;

exports.additionalSchema = undefined;

exports.validate = composerBasic.compose(true, false, exports.additionalSchema);

//#endregion

//#region sanitize

exports.ownSanitize = undefined;

exports.sanitize = undefined;

//#endregion

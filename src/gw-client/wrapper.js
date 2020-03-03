const Enums = require("../enums");
const common = require("../lib/common");
const InputValidationError = require("../lib/inputValidationError");
const uuid = require("../lib/uuid");
// NOTE: circular require problem - can't use Shapes in root scope
// const Shapes = require("../shapes");
const gwClientAccountsSuccess = require("./accounts/success");
const gwClientLoginInterimInputAbsPass = require("./login/interim-input-abs-pass");
const gwClientErrorCommonDevInvalidInputs = require("./error/common/dev/invalid-inputs");

const Shapes = {
  "gw-client/accounts/success": gwClientAccountsSuccess,
  "gw-client/login/interim-input-abs-pass": gwClientLoginInterimInputAbsPass,
  "gw-client/error/common/dev/invalid-inputs": gwClientErrorCommonDevInvalidInputs,
};

exports.code = "gw-client/wrapper"; // specified by wrapped.data. This .code is only used as wrapperCode in common.validateWrapped
exports.type = Enums.TYPES.NOTSET; // specified by wrapped.data

//#region create

exports.create = function(requestId, sessionId, code, type, data) {
  return {
    requestId,
    sessionId,
    code,
    type,
    data,
  };
};

exports.createError = function(requestId, code, data) {
  return exports.create(requestId, undefined, code, Enums.TYPES.ERROR, data);
};

//#endregion

//#region examples

exports.examples = {
  "gw-client/wrapper[gw-client/accounts/success]": exports.create(
    uuid.testUuid(),
    uuid.testUuid(),
    Shapes["gw-client/accounts/success"].code,
    Shapes["gw-client/accounts/success"].type,
    Shapes["gw-client/accounts/success"].examples.default
  ),
  "gw-client/wrapper[login/interim-input-abs-pass]": exports.create(
    uuid.testUuid(),
    uuid.testUuid(),
    Shapes["gw-client/login/interim-input-abs-pass"].code,
    Shapes["gw-client/login/interim-input-abs-pass"].type,
    Shapes["gw-client/login/interim-input-abs-pass"].examples.default
  ),
  "gw-client/wrapper[gw-client/error/common/dev/invalid-inputs]": exports.createError(
    uuid.testUuid(),
    Shapes["gw-client/error/common/dev/invalid-inputs"].code,
    Shapes["gw-client/error/common/dev/invalid-inputs"].examples.default
  ),
};

//#endregion

//#region marshall

// create wrapped data
//  .data = marshall or passThrough (from lambda-gw => gw-client)
//  input* were created on lambda - see lambda-gw/*chan/wrapper.createResponse
exports.marshall = function(requestId, sessionId = undefined, inputCode, inputData) {
  let { outputShape, outputCode, outputData } = common.marshall(
    undefined,
    exports,
    inputCode,
    inputData
  );

  // create instance which matches wrapperSchema
  let wrappedInstance = exports.create(
    requestId,
    sessionId,
    outputCode,
    outputShape.type,
    outputData
  );
  let errors = common.validateSchema(exports.validate, wrappedInstance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return wrappedInstance;
};

//#endregion

//#region validate

exports.wrapperSchema = {
  type: "object",
  properties: {
    requestId: {
      required: true,
      type: "string",
      format: "uuidV4",
    },
    sessionId: {
      required: false, // not for final responses (NOTE: one-off requests like /pdf only send one response = final response)
      type: "string",
      format: "uuidV4",
    },
    code: {
      required: true,
      type: "string",
    },
    type: {
      required: true,
      type: "integer",
      enum: Enums.TYPES.values(),
    },
    data: {
      required: false, // see depends on shape.noData
      //type: "any"
    },
  },
};

exports.validate = function(wrappedInstance) {
  common.validateWrapped(exports, wrappedInstance);
};

//#endregion

//#region sanitize

// started
exports.sanitize = function(wrappedInstance) {
  return common.sanitizeWrapped(exports, wrappedInstance);
};

//#endregion

//#region log

exports.log = function(wrappedInstance) {
  let sanitized = exports.sanitize(wrappedInstance);
  log.net(`GW -> Client`, JSON.stringify(sanitized, null, 2));
};

//#endregion

import * as Enums from "../enums";
import * as common from "../lib/common";
import InputValidationError from "../lib/inputValidationError";
import * as Schema from "../lib/schema";
import * as uuid from "../lib/uuid";
// NOTE: circular require problem - can't use Shapes in root scope
// const Shapes = require("../shapes");
import * as gwClientAccountsSuccess from "./accounts/success";
import * as gwClientLoginInterimInputAbsPass from "./login/interim-input-abs-pass";
import gwClientErrorCommonDevInvalidInputs from "./error/common/dev/invalid-inputs";

const Shapes = {
  "gw-client/accounts/success": gwClientAccountsSuccess,
  "gw-client/login/interim-input-abs-pass": gwClientLoginInterimInputAbsPass,
  "gw-client/error/common/dev/invalid-inputs": gwClientErrorCommonDevInvalidInputs,
};

export const code = "gw-client/wrapper"; // specified by wrapped.data. This .code is only used as wrapperCode in common.validateWrapped
export const type = Enums.TYPES.NOTSET; // specified by wrapped.data

//#region create

export const create = function(requestId, sessionId, code, type, data?) {
  return {
    requestId,
    sessionId,
    code,
    type,
    data,
  };
};

export const createError = function(requestId, code, data?) {
  return create(requestId, undefined, code, Enums.TYPES.ERROR, data);
};

//#endregion

//#region examples

export const examples = {
  "gw-client/wrapper[gw-client/accounts/success]": create(
    uuid.testUuid(),
    uuid.testUuid(),
    Shapes["gw-client/accounts/success"].code,
    Shapes["gw-client/accounts/success"].type,
    Shapes["gw-client/accounts/success"].examples.default
  ),
  "gw-client/wrapper[login/interim-input-abs-pass]": create(
    uuid.testUuid(),
    uuid.testUuid(),
    Shapes["gw-client/login/interim-input-abs-pass"].code,
    Shapes["gw-client/login/interim-input-abs-pass"].type,
    Shapes["gw-client/login/interim-input-abs-pass"].examples.default
  ),
  "gw-client/wrapper[gw-client/error/common/dev/invalid-inputs]": createError(
    uuid.testUuid(),
    Shapes["gw-client/error/common/dev/invalid-inputs"].code,
    Shapes["gw-client/error/common/dev/invalid-inputs"].examples.default
  ),
};

//#endregion

//#region validate

export const wrapperSchema = {
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

export const validate = function(wrappedInstance) {
  common.validateWrapped(exports, wrappedInstance);
};

//#endregion

//#region marshall

// create wrapped data
//  .data = marshall or passThrough (from lambda-gw => gw-client)
//  input* were created on lambda - see lambda-gw/*chan/wrapper.createResponse
export const marshall = function(requestId, sessionId = undefined, inputCode, inputData) {
  const { outputShape, outputCode, outputData } = common.marshall(
    undefined,
    exports,
    inputCode,
    inputData
  );
  // create instance which matches wrapperSchema
  const wrappedInstance = create(requestId, sessionId, outputCode, outputShape.type, outputData);
  const errors = Schema.validate(code, validate, wrappedInstance);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return wrappedInstance;
};

//#endregion

//#region sanitize

export const sanitize = function(wrappedInstance) {
  return common.sanitizeWrapped(exports, wrappedInstance);
};

//#endregion

//#region log

export const log = function(wrappedInstance) {
  const sanitized = sanitize(wrappedInstance);
  global.log.net("GW -> Client", JSON.stringify(sanitized, null, 2));
};

//#endregion

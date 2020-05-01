import BadShapeError from "../../lib/badShapeError";
import * as common from "../../lib/common";
import * as Schema from "../../lib/schema";
import * as enums from "../../enums";
import * as shapes from "../../shapes";
import * as uuid from "../../lib/uuid";
import * as exampleComposedShape from "../../client-gw/login-interim-input/abs-pass";

export const code = "gw-lambda/bchan/composer"; // NOTE: won't ever appear in data on channel, this the .code of the Composed.data will appear on the channel
export const type = enums.TYPES.NOTSET; // NOTE: won't ever appear in data on channel, this the .code of the Composed.data will appear on the channel
export const not_a_shape = true;

export const examples = {
  default: {
    requestId: uuid.testUuid(),
    code: exampleComposedShape.examples.default.code, // NOTE: .code of the Composed.data
    data: exampleComposedShape.examples.default.data,
    final: exampleComposedShape.examples.default.final,
  },
};
export const create = function(requestId, code, final, data) {
  return {
    requestId,
    code,
    final,
    data,
  };
};

// marshall clientGwInstance to gwLambdaInstance
//  NOTE: clientGwInstance has .sessionId (if req2+)
//  whereas gwLambdaInstance will have .requestId (allocated by express in route handler on request received)
export const decompose = function(requestId, shape, clientGwInstance) {
  if (!shape.composer || !shape.composer.code) {
    throw new BadShapeError(`shape ${shape.code} does not have .composer.code`);
  }
  const composer = shapes.getShape(shape.composer.code); // e.g. "client-gw/composer/basic" || "client-gw/composer/codeData"
  const { code, data } = composer.decompose(shape, clientGwInstance); // NOTE: returns { code, data }
  // create "gw-lambda/bchan/composer"
  const final = clientGwInstance.final === undefined ? true : clientGwInstance.final; // default to final if not set
  return create(requestId, code, final, data);
};
export const composerSchema = {
  type: "object",
  properties: {
    requestId: {
      required: true,
      type: "string",
      format: "uuidV4",
    },
    code: {
      required: true,
      type: "string",
    },
    data: {
      required: false,
      // type: "any"
      // NOTE: schema for .data lives in the client-gw shapes' .dataSchema, see:
      //  - shapes.shape["client-gw/login-interim-input/abs-pass"].dataSchema
    },
    final: {
      required: true,
      type: "boolean",
    },
  },
};
export const validate = function(composedInstance) {
  Schema.validate(code, composerSchema, composedInstance);
};
export const sanitize = function(composedInstance) {
  return common.sanitizeComposed(exports, composedInstance);
};
export const log = function(composedInstance) {
  const sanitized = sanitize(composedInstance);
  //@ts-ignore
  log.net("GW -> Lambda : BCHAN", JSON.stringify(sanitized, null, 2));
};

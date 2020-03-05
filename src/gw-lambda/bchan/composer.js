const BadShapeError = require("../../lib/badShapeError");
const common = require("../../lib/common");
const Schema = require("../../lib/schema");
const enums = require("../../enums");
const shapes = require("../../shapes");
const uuid = require("../../lib/uuid");
const exampleComposedShape = require("../../client-gw/login-interim-input/abs-pass"); // NOTE: passThrough

exports.code = "gw-lambda/bchan/composer"; // NOTE: won't ever appear in data on channel, this the .code of the Composed.data will appear on the channel
exports.type = enums.TYPES.NOTSET; // NOTE: won't ever appear in data on channel, this the .code of the Composed.data will appear on the channel
exports.not_a_shape = true;

//#region examples

exports.examples = {
  default: {
    requestId: uuid.testUuid(),
    code: exampleComposedShape.examples.default.code, // NOTE: .code of the Composed.data
    data: exampleComposedShape.examples.default.data,
    final: exampleComposedShape.examples.default.final,
  },
};

//#endregion

//#region create

exports.create = function(requestId, code, final, data) {
  return {
    requestId,
    code,
    final,
    data,
  };
};

//#endregion

//#region decompose

// marshall clientGwInstance to gwLambdaInstance
//  NOTE: clientGwInstance has .sessionId (if req2+)
//  whereas gwLambdaInstance will have .requestId (allocated by express in route handler on request received)
exports.decompose = function(requestId, shape, clientGwInstance) {
  if (!shape.composer || !shape.composer.code) {
    throw new BadShapeError(`shape ${shape.code} does not have .composer.code`);
  }
  let composer = shapes.getShape(shape.composer.code); // e.g. "client-gw/composer/basic" || "client-gw/composer/codeData"
  let { code, data } = composer.decompose(shape, clientGwInstance); // NOTE: returns { code, data }

  // create "gw-lambda/bchan/composer"
  let final = clientGwInstance.final === undefined ? true : clientGwInstance.final; // default to final if not set
  return exports.create(requestId, code, final, data);
};

//#endregion

//#endregion

//#region validate

exports.composerSchema = {
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

exports.validate = function(composedInstance) {
  Schema.validate(exports.code, exports.composerSchema, composedInstance);
};

//#endregion

//#region sanitize

// started
exports.sanitize = function(composedInstance) {
  return common.sanitizeComposed(exports, composedInstance);
};

//#endregion

//#region log

exports.log = function(composedInstance) {
  let sanitized = exports.sanitize(composedInstance);
  log.net(`GW -> Lambda : BCHAN`, JSON.stringify(sanitized, null, 2));
};

//#endregion

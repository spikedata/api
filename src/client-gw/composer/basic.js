/**
 * NOTE:
 * Composer consists of { sessionId, final? }
 * see ./compose.md
 */
const objectUtil = require("../../lib/object");

exports.code = "client-gw/composer/basic";
exports.not_a_shape = true;

exports.composedSchema = {
  type: "object",
  properties: {
    sessionId: {
      required: true, // shape can specify required value - see compose() below
      type: "string",
      format: "uuidV4",
    },
    final: {
      required: true, // shape can specify required value - see compose() below
      type: "boolean",
    },
  },
};

exports.compose = function(sessionIdRequired, finalRequired, additionalSchema) {
  let composedSchema;
  if (additionalSchema) {
    composedSchema = objectUtil.mergeObjectsClone(this.composedSchema, {
      properties: additionalSchema,
    });
  } else {
    composedSchema = objectUtil.clone(this.composedSchema);
  }
  composedSchema.properties.sessionId.required = sessionIdRequired;
  composedSchema.properties.final.required = finalRequired;
  return composedSchema;
};

// create data that will be sent over bchan to lambda
//  - translate from "client-gw/*" (bchan shapes) to "gw-lambda/bchan/composer"
exports.decompose = function(shape, instance) {
  // EXAMPLE client-gw bchan instances and marshalled results:
  //  - accounts = { sessionId: "xx", final: false } => no data
  //    => { final: false, code: "accounts", data: undefined }
  //  - transactions = { sessionId: "xx", final: true, numDays: 90, accountNumber: "1234567890" }
  //    => { final: true, code: "transactions", data: { numDays: 90, accountNumber: "1234567890" } }

  // ALGORITHM:
  //  - clone instance and remove composer fields { sessionId, final }
  //  - all remaining fields are .data

  let code = shape.code; // instance.code only exists on ./codeData composed shapes - not basic composed shapes
  let clone = Object.assign({}, instance); // shallow clone is fine
  delete clone.sessionId;
  delete clone.final;
  return { code, data: clone };
};

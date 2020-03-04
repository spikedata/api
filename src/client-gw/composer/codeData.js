/**
 * NOTE:
 * This composer includes basic fields + extra fields: { code, data }
 * see ./compose.md
 */
const basic = require("./basic");

exports.code = "client-gw/composer/codeData";
exports.not_a_shape = true;

//#region validate

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
    code: {
      required: true, // shape can specify required value - see compose() below
      type: "string",
    },
    data: {
      required: true, // shape can specify required value - see compose() below
      // type: "any"
    },
  },
};

exports.compose = function(
  sessionIdRequired,
  finalRequired,
  codeRequired,
  dataSchema,
  additionalSchema
) {
  let composedSchema = basic.compose.call(
    exports,
    sessionIdRequired,
    finalRequired,
    additionalSchema
  );
  composedSchema.properties.code.required = codeRequired;
  if (dataSchema) {
    composedSchema.properties.data = dataSchema;
  } else {
    delete composedSchema.properties.data;
  }
  return composedSchema;
};

// returns { code, data } that will be sent over bchan to lambda
exports.decompose = function(shape, instance) {
  // EXAMPLE:
  //  - "login-interim-input/abs-pass":
  //    client-gw: { sessionId, final?, code, data }
  //    gw-lambda: { final, code, data }

  // ALGORITHM:
  //  - simply take .code & .data from instance

  return { code: instance.code, data: instance.data };
};

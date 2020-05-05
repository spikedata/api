/**
 * NOTE:
 * This composer includes basic fields + extra fields: { code, data }
 * see ./compose.md
 */
import * as objectUtil from "../../lib/object";

export const composedSchema = {
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

export const compose = function(
  sessionIdRequired,
  finalRequired,
  codeRequired,
  dataSchema,
  additionalSchema
) {
  // same as basic
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

  // codeData
  composedSchema.properties.code.required = codeRequired;
  if (dataSchema) {
    composedSchema.properties.data = dataSchema;
  } else {
    delete composedSchema.properties.data;
  }
  return composedSchema;
};

// returns { code, data } that will be sent over bchan to lambda
export const decompose = function(_shape, instance) {
  // EXAMPLE:
  //  - "login-interim-input/abs-pass":
  //    client-gw: { sessionId, final?, code, data }
  //    gw-lambda: { final, code, data }
  // ALGORITHM:
  //  - simply take .code & .data from instance
  return { code: instance.code, data: instance.data };
};

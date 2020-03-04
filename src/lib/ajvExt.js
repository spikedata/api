const Ajv = require("ajv");
const core = require("./core");
const uuid = require("./uuid");

// see https://json-schema.org/understanding-json-schema/reference/string.html

//#region uuidV4

function uuidV4(input) {
  return uuid.validUuidV4(input);
}

//#endregion

//#region date-or-iso-str

// Used to validate a source object (which has dates as actual new Date() objects) before it is serialized
// USAGE: { format: "date-or-iso-str" }
// NOT: { type: "string", format: "date-or-iso-str" } => new Date() is not a string
// NOT: { type: "date-or-iso-str" } => common misunderstanding of jsonschema custom formatters
const fullIsoDateRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
function dateOrIsoStr(input) {
  return typeof input == "string" ? fullIsoDateRegex.test(input) : core.isValidDate(input);
}

//#endregion

//#region regex-or-str

function regexOrStr(input) {
  return input instanceof RegExp ? true : typeof input == "string";
}

//#endregion

//#region swagger

// https://swagger.io/specification/#dataTypes
exports.swaggerReplacement = {
  uuidV4: {
    type: "string",
    format: "uuid",
  },
  "date-or-iso-str": {
    type: "string",
    format: "date-time", // https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
  },
  "regex-or-str": {
    type: "string",
  },
};

//#endregion

class AjvExt {
  constructor(schema) {
    this.ajv = new Ajv({ allErrors: true });

    this.ajv.addFormat("uuidV4", {
      validate: uuidV4,
    });
    this.ajv.addFormat("date-or-iso-str", {
      validate: dateOrIsoStr,
    });
    this.ajv.addFormat("regex-or-str", {
      validate: regexOrStr,
    });

    this.compiled = this.ajv.compile(schema);
  }

  validate(data) {
    let valid = this.compiled(data);
    if (valid) {
      return undefined;
    } else {
      // return this.ajv.errorsText(this.compiled.errors, { dataVar: "" });
      return this.compiled.errors.map((x) => `${x.dataPath} ${x.message}`);
    }
  }
}

module.exports = AjvExt;

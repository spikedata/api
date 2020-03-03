const core = require("./core");
const Validator = require("jsonschema").Validator;

// see https://json-schema.org/understanding-json-schema/reference/string.html

//const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i; // https://gist.github.com/bugventure/f71337e3927c34132b9a
const uuidV4Regex = /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
Validator.prototype.customFormats.uuidV4 = function(input) {
  return uuidV4Regex.test(input);
};

// Used to validate a source object (which has dates as actual new Date() objects) before it is serialized
// USAGE: { type: "any", format: "date-or-iso-str" }
// NOT: { type: "string", format: "date-or-iso-str" } => new Date() is not a string
// NOT: { type: "date-or-iso-str" } => common misunderstanding of jsonschema custom formatters
const fullIsoDateRegex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
Validator.prototype.customFormats["date-or-iso-str"] = function(input) {
  return typeof input == "string" ? fullIsoDateRegex.test(input) : core.isValidDate(input);
};

Validator.prototype.customFormats["regex-or-str"] = function(input) {
  return input instanceof RegExp ? true : typeof input == "string";
};

// https://swagger.io/specification/#dataTypes
exports.swaggerReplacement = {
  uuidV4: {
    type: "string",
    format: "uuid"
  },
  "date-or-iso-str": {
    type: "string",
    format: "date-time" // https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14
  },
  "regex-or-str": {
    type: "string"
  }
};

exports.Validator = Validator;

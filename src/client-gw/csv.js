const fs = require("fs");
const path = require("path");
const Schema = require("../lib/schema");
const enums = require("../enums");
const InputValidationError = require("../lib/inputValidationError");
const PdfTooLargeError = require("../lib/pdfTooLargeError");

exports.code = "csv";
exports.type = enums.TYPES.INPUTS;
exports.marshallTo = "gw-lambda/lchan/csv";
exports.channel = enums.Channel.Lchan;
exports.sessionBased = false;

//#region examples

exports.examples = {
  default: {
    file: "abs.csv",
    buffer: "...",
  },
};

//#endregion

//#region create

exports.create = function(csvPath, pass, buffer) {
  if (!buffer && !csvPath) {
    throw new InputValidationError(["must supply csvPath or buffer"]);
  }
  if (buffer) {
    if (!csvPath) {
      // supplied buffer but didn't say what original filename was
      csvPath = "not-supplied";
    }
  } else {
    // supplied csvPath only - not buffer
    buffer = fs.readFileSync(csvPath);
    buffer = buffer.toString("base64");
  }

  if (buffer.length > PdfTooLargeError.Max) {
    throw new PdfTooLargeError();
  }

  let instance = {
    file: path ? path.basename(csvPath) : csvPath,
    buffer,
    pass,
  };
  let errors = Schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.validate = function(data) {
  let validationErrors = [];
  if (!data.file) {
    validationErrors.push("missing required input: file");
  }
  if (!data.buffer) {
    validationErrors.push("missing required input: buffer");
  }
  return validationErrors.length === 0 ? undefined : validationErrors;
};

exports.schema = {
  type: "object",
  properties: {
    file: {
      type: "string",
      required: true,
    },
    buffer: {
      type: "string", // base64 encoded csv buffer
      required: true,
    },
  },
};

//#endregion

//#region sanitize

// NOTE: custom sanitizer in order to prevent buffer being deep cloned before being [redacted]
exports.sanitize = function(data) {
  let temp = data.buffer;
  delete data.buffer;
  let clone = Object.assign({ buffer: "[redacted]" }, data);
  data.buffer = temp;
  return clone;
};

//#endregion

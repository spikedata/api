const fs = require("fs");
const path = require("path");
const Schema = require("../lib/schema");
const enums = require("../enums");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "pdf";
exports.type = enums.TYPES.INPUTS;
exports.marshallTo = "gw-lambda/lchan/pdf";
exports.channel = enums.Channel.Lchan;
exports.sessionBased = false;

//#region examples

exports.examples = {
  default: {
    file: "absa.pdf",
    buffer: "JVBER...",
    pass: "password", // required if pdf is password protected
  },
};

//#endregion

//#region create

exports.create = function(pdfPath, pass, buffer) {
  if (!buffer && !pdfPath) {
    throw new InputValidationError(["must supply pdfPath or buffer"]);
  }
  if (buffer) {
    if (!pdfPath) {
      // supplied buffer but didn't say what original filename was
      pdfPath = "not-supplied";
    }
  } else {
    // supplied pdfPath only - not buffer
    buffer = fs.readFileSync(pdfPath);
    buffer = buffer.toString("base64");
  }
  let instance = {
    file: path ? path.basename(pdfPath) : pdfPath,
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

exports.isBase64EncodedPdf = function(pdfString) {
  return pdfString.slice(0, 5) == "JVBER"; // Buffer.from("%PDF").toString('base64')
};

exports.validate = function(data) {
  let validationErrors = [];
  if (!data.file) {
    validationErrors.push("missing required input: file");
  }
  if (!data.buffer) {
    validationErrors.push("missing required input: buffer");
  } else if (!exports.isBase64EncodedPdf(data.buffer)) {
    validationErrors.push("invalid buffer: either not a PDF or not base64 encoded");
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
    pass: {
      type: "string",
    },
    buffer: {
      type: "string", // base64 encoded pdf buffer
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

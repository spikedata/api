const fs = require("fs");
const path = require("path");
const enums = require("../../enums");
const InputValidationError = require("../../lib/inputValidationError");
const Schema = require("../../lib/schema");

exports.code = "file/success";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw

//#region examples

exports.examples = {
  pdf: {
    file: "absa-estatement.pdf",
    buffer: "...",
    ext: ".pdf",
  },
  zip: {
    file: "fnb-statements.zip",
    buffer: "...",
    ext: ".zip",
  },
};

//#endregion

//#region create

exports.create = function(filePath, buffer, ext) {
  if (!buffer) {
    buffer = fs.readFileSync(filePath);
    buffer = buffer.toString("base64");
  }
  let instance = {
    file: path.basename(filePath),
    buffer,
    ext,
  };
  let errors = Schema.validate(exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.validate = {
  type: "object",
  properties: {
    file: { required: true, type: "string" },
    buffer: { required: true, type: "string" },
    ext: { required: true, type: "string" },
  },
};

//#endregion

//#region sanitize

// NOTE: custom sanitizer in order to prevent buffer being deep cloned before being [redacted]
exports.sanitize = function(data) {
  let clone = {
    file: data.file,
    buffer: "[redacted]",
    ext: data.ext,
  };
  return clone;
};

//#endregion

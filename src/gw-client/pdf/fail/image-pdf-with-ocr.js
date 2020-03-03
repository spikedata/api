const enums = require("../../../enums");

exports.code = "pdf/fail/image-pdf-with-ocr";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.USER;
exports.noSessionId = true; // shapeExplorer
exports.message = "PDF contains a scanned image with OCR text, and hence can't be parsed";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

const enums = require("../../../enums");

exports.code = "pdf/fail/image-pdf";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.USER;
exports.noSessionId = true; // shapeExplorer
exports.message = "PDF is image based not text based, and hence can't be parsed";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

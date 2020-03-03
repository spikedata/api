const enums = require("../../../enums");

exports.code = "pdf/fail/invalid-pdf-exception";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message = "the pdf does not have a valid structure";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

const enums = require("../../../enums");

exports.code = "pdf/fail/pdf-js-error";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message = "internal error";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

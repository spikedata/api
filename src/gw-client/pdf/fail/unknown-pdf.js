const enums = require("../../../enums");

exports.code = "pdf/fail/unknown-pdf";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message = "we did not recognise this pdf format";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

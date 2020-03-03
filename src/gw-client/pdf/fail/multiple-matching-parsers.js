const enums = require("../../../enums");

exports.code = "pdf/fail/multiple-matching-parsers";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message = "two or more parsers were found which can process this pdf";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

const enums = require("../../../enums");

exports.code = "pdf/fail/failed-to-extract-credit-breakdown";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message = "couldn't find the breakdown/overview section in a credit card statement";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

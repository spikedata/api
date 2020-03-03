const enums = require("../../enums");

exports.code = "insurance/fail";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

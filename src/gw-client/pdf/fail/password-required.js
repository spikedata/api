const enums = require("../../../enums");

exports.code = "pdf/fail/password-required";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.USER;
exports.noSessionId = true; // shapeExplorer
exports.message = "the password which you supplied is encrypted - you must supply a password";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

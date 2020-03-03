const enums = require("../../../enums");

exports.code = "pdf/fail/password-incorrect";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.USER;
exports.noSessionId = true; // shapeExplorer
exports.message = "the password which you supplied failed to decrypt the pdf";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

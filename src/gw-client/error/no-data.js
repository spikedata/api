const enums = require("../../enums");

exports.code = "error/no-data"; // override in instance
exports.type = enums.TYPES.ERROR;
exports.examples = undefined; // override in instance
exports.validate = undefined;
exports.sanitize = undefined;
exports.noData = true;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

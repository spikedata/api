const enums = require("../../../enums");

exports.code = "csv/fail/unknown-csv";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message = "we did not recognise this csv format";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

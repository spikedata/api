const enums = require("../../../enums");

exports.code = "pdf/fail/failed-to-extract-statement-date";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message =
  "we need the statement date in order to determine the transaction date in a statement format which excludes the year from any dates";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

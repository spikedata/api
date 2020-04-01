const enums = require("../../../enums");

exports.code = "csv/fail/invalid-data-extracted";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw
exports.noData = true;
exports.blame = enums.BLAME.SPIKE;
exports.noSessionId = true; // shapeExplorer
exports.message =
  "we successfully extract the data from the csv however it did not conform to the expected output schema";

// noData
exports.examples = undefined;
exports.validate = undefined;
exports.sanitize = undefined;

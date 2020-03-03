const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message =
  "an unexpected error occurred whilst processing the request, please try again later";
exports.code = "error/site/internal";
exports.blame = enums.BLAME.SPIKE;

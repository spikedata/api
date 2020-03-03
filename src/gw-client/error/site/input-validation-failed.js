const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "input validation failed";
exports.code = "error/site/input-validation-failed";

exports.blame = enums.BLAME.CLIENT;

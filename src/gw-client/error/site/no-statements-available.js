const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "There are no statements available for download - is this a new account?";
exports.code = "error/site/no-statements-available";
exports.blame = enums.BLAME.USER;

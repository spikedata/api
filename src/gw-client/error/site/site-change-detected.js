const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "the bank website has changed, please try again in a few hours";
exports.code = "error/site/site-change-detected";
exports.blame = enums.BLAME.SITE;

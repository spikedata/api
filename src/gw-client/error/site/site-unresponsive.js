const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "The bank site took too long to respond. Please try again.";
exports.code = "error/site/site-unresponsive";
exports.blame = enums.BLAME.SITE;

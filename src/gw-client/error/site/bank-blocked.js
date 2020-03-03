const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "TODO";
exports.code = "error/site/bank-blocked";
exports.blame = enums.BLAME.SITE;

const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "the bank website is down, please try again later";
exports.code = "error/site/site-unreachable";
exports.blame = enums.BLAME.SITE;

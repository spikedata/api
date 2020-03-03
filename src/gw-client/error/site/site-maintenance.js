const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "the bank website has a site maintenance notice active, please try again later";
exports.code = "error/site/site-maintenance";
exports.blame = enums.BLAME.SITE;

const objectUtil = require("../../../../../spike-common/src/object");
const cloneShape = require("../../no-data");
const enums = require("../../../../enums");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "ABSA logged the user off whilst we were loggin in";
exports.code = "error/site/abs/logged-off";
exports.blame = enums.BLAME.SITE;

const enums = require("../../../../enums");
const objectUtil = require("../../../../lib/object");
const cloneShape = require("../../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "site does not support this function";
exports.code = "error/common/dev/function-not-supported-on-site";
exports.blame = enums.BLAME.CLIENT;

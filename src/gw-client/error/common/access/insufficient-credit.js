const enums = require("../../../../enums");
const objectUtil = require("../../../../lib/object");
const cloneShape = require("../../no-data");
exports = module.exports = objectUtil.clone(cloneShape);
exports.message = "please purchase more credits";
exports.code = "error/common/access/insufficient-credit";
exports.blame = enums.BLAME.CLIENT;

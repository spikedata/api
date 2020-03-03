const enums = require("../../../../enums");
const objectUtil = require("../../../../lib/object");
const cloneShape = require("../../no-data");
exports = module.exports = objectUtil.clone(cloneShape);
exports.message = "too many active requests, try again later";
exports.code = "error/common/access/exceeded-max-concurrent-requests";
exports.blame = enums.BLAME.CLIENT;

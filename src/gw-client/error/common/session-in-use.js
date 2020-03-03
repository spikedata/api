const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "another request is currently in progress on this session";
exports.code = "error/common/session-in-use";
exports.blame = enums.BLAME.CLIENT;

const objectUtil = require("../../../lib/object");
const enums = require("../../../enums");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "User took too long to authorise";
exports.code = "error/user/took-too-long";
exports.blame = enums.BLAME.USER;

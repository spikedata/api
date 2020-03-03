const objectUtil = require("../../../lib/object");
const enums = require("../../../enums");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "User denied our login on their 2FA device";
exports.code = "error/user/denied";
exports.blame = enums.BLAME.USER;

const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "username and or password is incorrect";
exports.code = "error/site/login-failed";
exports.blame = enums.BLAME.USER;

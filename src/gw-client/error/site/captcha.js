const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
const enums = require("../../../enums");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "there is a captcha present - the user must log on and clear the captcha";
exports.code = "error/site/captcha";
exports.blame = enums.BLAME.USER;

const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "user took too long to supply login interim inputs";
exports.code = "error/common/session-timed-out";
exports.blame = enums.BLAME.USER;

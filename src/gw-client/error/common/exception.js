const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "an exception occurred";
exports.code = "error/common/exception";
exports.blame = enums.BLAME.SPIKE;

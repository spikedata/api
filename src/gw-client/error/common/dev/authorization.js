const enums = require("../../../../enums");
const objectUtil = require("../../../../lib/object");
const cloneShape = require("../../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "apiKey / userKey incorrect";
exports.code = "error/common/dev/authorization";
exports.blame = enums.BLAME.CLIENT;

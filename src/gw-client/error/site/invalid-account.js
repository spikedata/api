const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "the account number supplied is invalid";
exports.code = "error/site/invalid-account";
exports.blame = enums.BLAME.USER;

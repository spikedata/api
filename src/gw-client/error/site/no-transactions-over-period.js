const objectUtil = require("../../../lib/object");
const enums = require("../../../enums");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "There are no transactions over the past number of days which you selected";
exports.code = "error/site/no-transactions-over-period";
exports.blame = enums.BLAME.USER;

const objectUtil = require("../../../lib/object");
const enums = require("../../../enums");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message =
  "there is a legal notice present - the user must log on and read and dismiss the notice";
exports.code = "error/site/ok-got-it";
exports.blame = enums.BLAME.USER;

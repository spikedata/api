const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message =
  "This is a new account, internet banking has not been setup properly. FNB requires the user to log in and acknowledge various declarations online.";
exports.code = "error/fnb/online-banking-legal-documentation";
exports.blame = enums.BLAME.USER;

// TODO: create codes and components

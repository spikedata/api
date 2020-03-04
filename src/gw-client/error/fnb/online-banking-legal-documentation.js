const enums = require("../../../enums");
const parent = require("../no-data");
module.exports = {
  // parent
  type: parent.type,
  examples: parent.examples,
  validate: parent.validate,
  sanitize: parent.sanitize,
  noData: parent.noData,
  passThrough: parent.passThrough,
  noSessionId: parent.noSessionId,
  // own
  message:
    "This is a new account, internet banking has not been setup properly. FNB requires the user to log in and acknowledge various declarations online.",
  code: "error/fnb/online-banking-legal-documentation",
  blame: enums.BLAME.USER,
};

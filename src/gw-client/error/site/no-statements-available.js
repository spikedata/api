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
  message: "There are no statements available for download - is this a new account?",
  code: "error/site/no-statements-available",
  blame: enums.BLAME.USER,
};

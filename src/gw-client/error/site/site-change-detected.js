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
  message: "the bank website has changed, please try again in a few hours",
  code: "error/site/site-change-detected",
  blame: enums.BLAME.SITE,
};

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
  message: "the bank website is down, please try again later",
  code: "error/site/site-unreachable",
  blame: enums.BLAME.SITE,
};

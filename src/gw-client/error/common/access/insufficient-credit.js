const enums = require("../../../../enums");
const parent = require("../../no-data");
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
  message: "please purchase more credits",
  code: "error/common/access/insufficient-credit",
  blame: enums.BLAME.CLIENT,
};
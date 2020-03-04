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
  message: "ABSA logged the user off whilst we were logging in",
  code: "error/site/abs/logged-off",
  blame: enums.BLAME.SITE,
};

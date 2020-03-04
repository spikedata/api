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
  message: "apiKey / userKey incorrect",
  code: "error/common/dev/authorization",
  blame: enums.BLAME.CLIENT,
};

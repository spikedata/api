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
  message: "site does not support this function",
  code: "error/common/dev/function-not-supported-on-site",
  blame: enums.BLAME.CLIENT,
};

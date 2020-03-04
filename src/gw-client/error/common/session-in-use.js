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
  message: "another request is currently in progress on this session",
  code: "error/common/session-in-use",
  blame: enums.BLAME.CLIENT,
};

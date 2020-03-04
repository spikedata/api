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
  message:
    "You previously sent a request with .final=true and now have sent another request whilst the session is shutting down",
  code: "error/common/dev/sent-another-request-after-final-response",
  blame: enums.BLAME.CLIENT,
};

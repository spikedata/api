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
  message: "there is a legal notice present - the user must log on and read and dismiss the notice",
  code: "error/site/ok-got-it",
  blame: enums.BLAME.USER,
};

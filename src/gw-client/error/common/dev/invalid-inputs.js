const enums = require("../../../../enums");
const parent = require("../../array-of-strings");
module.exports = {
  // parent
  type: parent.type,
  validate: parent.validate,
  sanitize: parent.sanitize,
  passThrough: parent.passThrough,
  noSessionId: parent.noSessionId,
  // own
  message: "incorrect inputs",
  code: "error/common/dev/invalid-inputs",
  blame: enums.BLAME.CLIENT,
  examples: {
    default: ["Request size limit of 6MB exceeded"],
  },
};

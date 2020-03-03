const objectUtil = require("../../../../lib/object");
const cloneShape = require("../../array-of-strings");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "incorrect inputs";
exports.code = "error/common/dev/invalid-inputs";
exports.examples = {
  default: ["Request size limit of 6MB exceeded"]
};

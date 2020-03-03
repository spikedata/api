const enums = require("../../../../enums");
const objectUtil = require("../../../../lib/object");
const cloneShape = require("../../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message =
  "You previously sent a request with .final=true and now have sent another request whilst the session is shutting down";
exports.code = "error/common/dev/sent-another-request-after-final-response";
exports.blame = enums.BLAME.CLIENT;

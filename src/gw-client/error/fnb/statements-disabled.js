const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const cloneShape = require("../no-data");
exports = module.exports = objectUtil.clone(cloneShape);

exports.message = "FNB has temporarily removed statements download from their site";
exports.code = "error/fnb/statements-disabled";
exports.blame = enums.BLAME.SITE;

// TODO: merge codes and components info:
// API\codes\statements\error-fnb-statements-removed.json
// API\components\error-fnb-statements-removed.tag.html

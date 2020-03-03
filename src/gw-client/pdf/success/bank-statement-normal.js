const enums = require("../../../enums");
const bankStatementNormal = require("../../nested/bank-statement-normal");

const nested = {
  // NOTE: nested/bank-statement was shared by:
  // - "statements/success" - (now obsolete) which has an array of nested/bank-statement's
  // - "pdf/success/bank-statement-normal"
  "bank-statement-normal": bankStatementNormal,
};

exports.code = "pdf/success/bank-statement-normal";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

//#region examples

exports.examples = nested["bank-statement-normal"].examples;

//#endregion

//#region validate

exports.validate = nested["bank-statement-normal"].validate;
exports.nested = nested["bank-statement-normal"].nested;
exports.nestedShapes = nested["bank-statement-normal"].nestedShapes;
exports.nestedSchemas = nested["bank-statement-normal"].nestedSchemas;

//#endregion

//#region sanitize

exports.sanitize = nested["bank-statement-normal"].sanitize;

//#endregion

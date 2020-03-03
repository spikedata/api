const enums = require("../../../enums");
const bankStatementNoBalance = require("../../nested/bank-statement-no-balance");

const nested = {
  // NOTE: nested/bank-statement-no-balance is shared by:
  // - "pdf/success/bank-statement-no-balance"
  // - "pdf/success/credit-card-simple"
  "bank-statement-no-balance": bankStatementNoBalance,
};

exports.code = "pdf/success/bank-statement-no-balance";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

//#region examples

exports.examples = nested["bank-statement-no-balance"].examples;

//#endregion

//#region validate

exports.validate = nested["bank-statement-no-balance"].validate;
exports.nested = nested["bank-statement-no-balance"].nested;
exports.nestedShapes = nested["bank-statement-no-balance"].nestedShapes;
exports.nestedSchemas = nested["bank-statement-no-balance"].nestedSchemas;

//#endregion

//#region sanitize

exports.sanitize = nested["bank-statement-no-balance"].sanitize;

//#endregion

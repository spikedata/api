const enums = require("../../../enums");
const objectUtil = require("../../../lib/object");
const bankStatementNoBalance = require("../../nested/bank-statement-no-balance");

// NOTE: nested/bank-statement-no-balance is shared by:
// - "pdf/success/bank-statement-no-balance"
// - "pdf/success/credit-card-simple"
const shared = {
  "bank-statement-no-balance": bankStatementNoBalance,
};

// Overview shared fields with credit-card-simple specifics
const creditCardSimple = objectUtil.mergeObjectsClone(shared["bank-statement-no-balance"], {
  validate: {
    properties: {
      parser: {
        enum: enums.PdfParser.creditCardSimple, // different parsers to "pdf/success/bank-statement-no-balance"
      },
    },
  },
  examples: {
    success: {
      parser: enums.PdfParser.creditCardSimple[0],
    },
  },
});

exports.code = "pdf/success/credit-card-simple";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

//#region examples

exports.examples = creditCardSimple.examples;

//#endregion

//#region validate

exports.validate = creditCardSimple.validate;
exports.nested = creditCardSimple.nested;
exports.nestedShapes = creditCardSimple.nestedShapes;
exports.nestedSchemas = creditCardSimple.nestedSchemas;

//#endregion

//#region sanitize

exports.sanitize = creditCardSimple.sanitize;

//#endregion

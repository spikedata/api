// NOTE: nested/bank-statement is shared by:
// - "pdf/success/bank-statement-no-balance"
// - "pdf/success/credit-card-simple"
// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/credit-card-breakdown", "pdf/success/credit-card-simple" ]
// NOTE3: no ".breaks" because we don't have a balance to do running total breaks on
const enums = require("../../enums");
const Nested = require("../../lib/nested");
const statementInfo = require("./statement-info");
const transactionsNoBalance = require("./transactions-no-balance");

const nested = {
  "statement-info": statementInfo,
  "transactions-no-balance": transactionsNoBalance,
};

exports.validate = {
  id: "/bank-statement-no-balance", // NOTE: used below, but not strictly required because not currently referenced by another schema i.e. root.$ref
  type: "object",
  properties: {
    parser: {
      required: true,
      type: "string",
      enum: enums.PdfParser.bankStatementsNoBalance,
    },
    statement: {
      required: true,
      $ref: nested["statement-info"].validate.id,
    },
    transactions: {
      required: true,
      $ref: nested["transactions-no-balance"].validate.id,
    },
    valid: {
      required: true,
      type: "boolean",
    },
  },
};

exports.nested = [nested["statement-info"], nested["transactions-no-balance"]];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

exports.examples = {
  success: {
    parser: "NEDBANK_ACCBAL_WEB",
    statement: nested["statement-info"].examples.default,
    transactions: nested["transactions-no-balance"].examples.default,
    valid: true,
  },
};

exports.sanitize = {
  statement: nested["statement-info"].sanitize,
};

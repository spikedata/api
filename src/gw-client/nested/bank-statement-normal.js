// NOTE: nested/bank-statement was shared by:
// - "statements/success" - (now obsolete) which has an array of nested/bank-statement's
// - "pdf/success/bank-statement-normal"
// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/bank-statement-normal", "pdf/success/bank-statement-no-balance" ]
const enums = require("../../enums");
const Nested = require("../../lib/nested");
const statementInfo = require("./statement-info");
const transactions = require("./transactions");
const breaks = require("./breaks");

const nested = {
  "statement-info": statementInfo,
  transactions: transactions,
  breaks,
};

exports.code = "gw-client/nested/bank-statement-normal";

exports.validate = {
  id: "/bank-statement-normal", // NOTE: was referenced by shape("statements/success").schema.$ref
  type: "object",
  properties: {
    parser: {
      required: true,
      type: "string",
      enum: enums.PdfParser.bankStatementsNormal,
    },
    statement: {
      required: true,
      $ref: nested["statement-info"].validate.id,
    },
    transactions: {
      required: true,
      $ref: nested.transactions.validate.id,
    },
    valid: {
      required: true,
      type: "boolean",
    },
    breaks: {
      required: false,
      $ref: nested.breaks.validate.id,
    },
    buffer: {
      required: false,
      type: "string", // base64 encoded pdf buffer - only used to return pdf e.g. web FNB /statements
    },
  },
};

exports.nested = [nested["statement-info"], nested.transactions, nested.breaks];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

exports.examples = {
  success: {
    parser: "FNB_RETAIL_ALL_0",
    statement: nested["statement-info"].examples.default,
    transactions: nested.transactions.examples.default,
    valid: true,
  },
  successWithBreaks: {
    parser: "FNB_RETAIL_ALL_0",
    statement: nested["statement-info"].examples.default,
    transactions: nested.transactions.examples.default,
    breaks: nested.breaks.examples.default,
    valid: false,
  },
};

exports.sanitize = {
  statement: nested["statement-info"].sanitize,
  buffer: "[redacted]",
};

const enums = require("../../../enums");
const transactionsNoBalance = require("../../nested/transactions-no-balance");
const Nested = require("../../../lib/nested");
const breaks = require("../../nested/breaks");

const nested = {
  transactionsNoBalance,
  breaks,
};

exports.code = "csv/success/bank-statement";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

//#region examples

let statement = {
  bank: "ABS",
  accountNumber: undefined,
  dates: {
    issuedOn: undefined,
    from: "2018-08-01T00:00:00.000Z",
    to: "2018-08-31T00:00:00.000Z",
  },
  nameAddress: ["Mr. J Smith"],
};

exports.examples = {
  success: {
    parser: "ABS1",
    statement,
    transactions: nested.transactionsNoBalance.examples.default,
    valid: true,
  },
  successWithBreaks: {
    parser: "ABS1",
    statement,
    transactions: nested.transactionsNoBalance.examples.default,
    breaks: nested.breaks.examples.default,
    valid: false,
  },
};

//#endregion

//#region validate

exports.validate = {
  id: "/bank-statement-csv",
  type: "object",
  properties: {
    parser: {
      required: true,
      type: "string",
      enum: enums.CsvParser.bankStatements,
    },
    statement: {
      required: true,
      // same as ../nested/statement-info.js but with optional params
      type: "object",
      properties: {
        bank: {
          required: true,
          type: "string",
          enum: Object.values(enums.Bank).map((x) => x.code),
        },
        accountNumber: {
          required: false,
          type: "string",
        },
        dates: {
          required: true,
          type: "object",
          properties: {
            issuedOn: {
              required: false,
              // type: "any",
              format: "date-or-iso-str",
            },
            from: {
              required: false,
              // type: "any",
              format: "date-or-iso-str",
            },
            to: {
              required: false,
              // type: "any",
              format: "date-or-iso-str",
            },
          },
        },
        nameAddress: {
          required: false,
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
    transactions: {
      required: true,
      $ref: nested.transactionsNoBalance.validate.id,
    },
    valid: {
      required: true,
      type: "boolean",
    },
    breaks: {
      required: false,
      $ref: nested.breaks.validate.id,
    },
  },
};

exports.nested = [nested.transactionsNoBalance, nested.breaks];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

//#endregion

//#region sanitize

exports.sanitize = {
  statement: {
    nameAddress: "[redacted]",
  },
};

//#endregion

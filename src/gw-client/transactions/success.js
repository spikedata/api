const enums = require("../../enums");
const InputValidationError = require("../../lib/inputValidationError");
const Nested = require("../../lib/nested");
const PdfCommon = require("../../lib/pdf/common");
const Schema = require("../../lib/schema");
const transactions = require("../nested/transactions");
const breaks = require("../nested/breaks");

const nested = {
  transactions,
  breaks,
};

exports.code = "transactions/success";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw

//#region examples

exports.examples = {
  success: {
    accountNumber: "9017446437",
    transactions: nested.transactions.examples.default,
    breaks: undefined,
    valid: true,
  },
  successWithBreaks: {
    accountNumber: "9017446437",
    transactions: nested.transactions.examples.default,
    breaks: nested.breaks.examples.default,
    valid: false,
  },
};

//#endregion

//#region create

exports.create = function(requestId, accountNumber, transactions, scraperName) {
  PdfCommon.add_id(transactions);
  let { breaks, valid } = PdfCommon.validate(requestId, transactions, scraperName);
  let instance = { accountNumber, transactions, valid, breaks };
  let errors = Schema.validate(exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.validate = {
  id: "/transactions/success",
  type: "object",
  properties: {
    accountNumber: {
      required: true,
      type: "string",
    },
    transactions: {
      required: true,
      $ref: nested.transactions.validate.id,
    },
    valid: {
      required: false, // HACK
      type: "boolean",
    },
    breaks: {
      required: false,
      $ref: nested.breaks.validate.id,
    },
  },
};

exports.nested = [nested.transactions, nested.breaks];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

//#endregion

//#region sanitize

exports.sanitize = undefined; // don't need to sanitize

//#endregion

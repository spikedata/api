const Nested = require("../../lib/nested");
const transactionNoBalance = require("./transaction-no-balance");

const nested = {
  "transaction-no-balance": transactionNoBalance,
};

exports.code = "gw-client/nested/transactions-no-balance";

exports.validate = {
  id: "/transactions-no-balance", // NOTE: must match root.$ref in parent schema
  type: "array",
  items: {
    $ref: nested["transaction-no-balance"].validate.id,
  },
};

exports.nested = [nested["transaction-no-balance"]];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

exports.examples = {
  default: [
    nested["transaction-no-balance"].examples[1],
    nested["transaction-no-balance"].examples[2],
    nested["transaction-no-balance"].examples[3],
  ],
};

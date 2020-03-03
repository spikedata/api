const Nested = require("../../lib/nested");
const transaction = require("./transaction");

const nested = {
  transaction,
};

exports.validate = {
  id: "/transactions", // NOTE: must match root.$ref in parent schema
  type: "array",
  items: {
    $ref: nested.transaction.validate.id,
  },
};

exports.nested = [nested.transaction];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

exports.examples = {
  default: [
    nested.transaction.examples[1],
    nested.transaction.examples[2],
    nested.transaction.examples[3],
  ],
};

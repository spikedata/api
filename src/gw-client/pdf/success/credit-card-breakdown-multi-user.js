// NOTE: "pdf/success/credit-card-breakdown-multi-user" is an array of "pdf/success/credit-card-breakdown"
// NOTE2: there is currently no way to have a mixed array of multiple shapes - e.g. [ "pdf/success/credit-card-breakdown", "pdf/success/credit-card-simple" ]
const enums = require("../../../enums");
const Nested = require("../../../lib/nested");
const objectUtil = require("../../../lib/object");
const creditCardBreakdown = require("./credit-card-breakdown");

const nested = {
  "credit-card-breakdown": creditCardBreakdown,
};

// Overview shared fields with credit-card-simple specifics
const creditCardBreakdownMultiUser = objectUtil.mergeObjectsClone(nested["credit-card-breakdown"], {
  validate: {
    properties: {
      parser: {
        enum: enums.PdfParser.creditCardBreakdownMultiUser, // different parsers to "pdf/success/credit-card-breakdown"
      },
    },
  },

  // NOTE: gw-client/pdf/success/credit-card-breakdown.js has 2 examples = { valid, invalid }
  examples: {
    valid: {
      parser: enums.PdfParser.creditCardBreakdownMultiUser[0],
    },
    invalid: {
      parser: enums.PdfParser.creditCardBreakdownMultiUser[0],
    },
  },
});

exports.code = "pdf/success/credit-card-breakdown-multi-user";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw
exports.noSessionId = true; // shapeExplorer

//#region examples

exports.examples = {
  valid: [creditCardBreakdownMultiUser.examples.valid],
  invalid: [creditCardBreakdownMultiUser.examples.invalid],
};
// console.log(JSON.stringify(exports.examples, null, 2));

//#endregion

//#region validate

exports.validate = {
  // array of nested /credit-card
  id: "/credit-card-breakdown-multi-user",
  required: true,
  type: "array",
  items: {
    $ref: creditCardBreakdownMultiUser.validate.id,
  },
};

exports.nested = [creditCardBreakdownMultiUser];
let { shapes, schemas } = Nested.resolve(exports.validate.id, exports.nested);
exports.nestedShapes = shapes;
exports.nestedSchemas = schemas;

//#endregion

//#region sanitize

// NOTE: array sanitizer = will be applied to every element of array by common.sanitize
exports.sanitize = [creditCardBreakdownMultiUser.sanitize];

//#endregion

const enums = require("../../enums");
const InputValidationError = require("../../lib/inputValidationError");
const Schema = require("../../lib/schema");

exports.code = "accounts/success";
exports.type = enums.TYPES.SUCCESS;
exports.passThrough = true; // from lambda-gw

//#region examples

exports.examples = {
  default: [
    {
      accountNumber: "10091234567",
      currency: "ZAR",
      alias: "Ilan's account",
      name: "ACCESSACC",
      type: "Current Account",
      currentBalance: 1000.32,
      balance: 1000.32,
    },
    {
      accountNumber: "12345678901",
      currency: "ZAR",
      alias: "Another account",
      name: "CREDIT",
      type: "Credit Account",
      currentBalance: -9000,
      balance: -9000,
    },
  ],
};

//#endregion

//#region create

// TODO: note not currently used because data created by browserCode - e.g. see [$/spike-web/src/NED.0/accounts.js]
exports.create = function(todo) {
  let instance = {
    todo,
  };
  let errors = Schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

exports.validate = {
  type: "array",
  minItems: 1,
  items: {
    type: "object",
    properties: {
      accountNumber: {
        required: true,
        type: "string",
      },
      currency: {
        required: false,
        type: "string",
      },
      alias: {
        required: false,
        type: "string",
      },
      name: {
        required: true,
        type: "string",
      },
      type: {
        required: false,
        type: "string",
      },
      currentBalance: {
        required: false,
        type: "number",
      },
      balance: {
        required: true,
        type: "number",
      },
    },
  },
};

//#endregion

//#region sanitize

// NOTE: array sanitizer = will be applied to every element of array by common.sanitize
exports.sanitize = [
  {
    currentBalance: "***",
    balance: "***",
  },
];

//#endregion

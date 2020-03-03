const enums = require("../../enums");

exports.code = "insurance/success";
exports.type = enums.TYPES.SUCCESS;
exports.noData = false;
exports.passThrough = true; // from lambda-gw

//#region examples

exports.examples = {
  default: {
    parser: "LIBERTY_LIFE_COVER_ANNIVERSARY_LETTER",
    name: "CD BUCKLEY",
    policyNumber: "59820434400",
    total: 996.08,
    provider: "Liberty",
    benefits: [
      {
        benefit: "Life Cover",
        premium: 249.44,
        cover: 1552500
      },
      {
        benefit: "Immediate Expenses Benefit"
      },
      {
        benefit: "Absolute Protector Plus (Ood)",
        premium: 164.69,
        cover: 1035000
      }
    ]
  }
};

//#endregion

//#region validate

exports.validate = {
  type: "object",
  properties: {
    parser: {
      required: true,
      type: "string",
      enum: enums.PdfParser.insurance
    },
    name: { required: true, type: "string" },
    policyNumber: { required: true, type: "string" },
    total: { required: true, type: "number" },
    provider: { required: true, type: "string" },

    benefits: {
      required: true,
      type: "array",
      items: {
        type: "object",
        properties: {
          benefit: { required: true, type: "string" },
          details: { /* required: true,*/ type: "string" },
          cover: { /* required: true,*/ type: ["number", "string"] }, // number or RETAIL (e.g. outsurance vehicle cover)
          premium: { /* required: true,*/ type: "number" }
        }
      }
    }
  }
};

//#endregion

//#region sanitize

exports.sanitize = {
  name: "[redacted]"
};

//#endregion

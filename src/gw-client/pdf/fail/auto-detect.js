const enums = require("../../../enums");

exports.code = "pdf/fail/auto-detect";
exports.type = enums.TYPES.ERROR;
exports.passThrough = true; // from lambda-gw

exports.blame = enums.BLAME.USER;
exports.noSessionId = true; // shapeExplorer
exports.message = "the pdf matched a pattern which we don't process";

exports.Types = {
  "scan-rule-auto": "has been scanned - meta data matched a known scanner - like Canon, Ricoh", //meta-rule
  "broken-utf16-auto":
    "the pdf has been modified and re-saved with utf16 encoding - we don't support this encoding", // detect-function
  "broken-encoding-auto":
    "the pdf has been modified and re-saved with an unknown encoding - the text is unreadable", // detect-function
  "junk-rule-auto":
    "this matches a known pdf document which we see frequently and don't support - like Game Credit Statements, CIPC documents, IDs, etc...", // text-rule
  "new-todo-rule-auto":
    "Forthcoming feature - i.e. a new parser which we've identified but not yet had time to implement", // text-rule
  "unsupported-rule-auto":
    "text matched a known unsupported pdf format - like Africa Bank Loan Statements, Absa Investment Summaries, Bidvest Cardholder Statements, etc...", // text-rule
};

exports.examples = {
  scan: {
    type: "scan-rule-auto",
    message: exports.Types["scan-rule-auto"],
  },
  utf16: {
    type: "broken-utf16-auto",
    message: exports.Types["broken-utf16-auto"],
  },
  encoding: {
    type: "broken-encoding-auto",
    message: exports.Types["broken-encoding-auto"],
  },
  junk: {
    type: "junk-rule-auto",
    message: exports.Types["junk-rule-auto"],
  },
  newTodo: {
    type: "new-todo-rule-auto",
    message: exports.Types["new-todo-rule-auto"],
  },
  unsupported: {
    type: "unsupported-rule-auto",
    message: exports.Types["unsupported-rule-auto"],
  },
};

exports.create = function(type) {
  return {
    type,
    message: exports.Types[type],
  };
};

exports.validate = {
  type: "object",
  properties: {
    type: {
      required: true,
      type: "string",
      enum: Object.keys(exports.Types),
    },
    message: {
      required: false,
      type: "string",
    },
  },
};

exports.sanitize = undefined;

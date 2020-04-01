const Enum = require("./lib/enum");
const pdf = require("./function/pdf");
const login = require("./function/login");
const loginInterimInput = require("./function/login-interim-input");
const loginInterimWait = require("./function/login-interim-wait");
const accounts = require("./function/accounts");
const close = require("./function/close");
const transactions = require("./function/transactions");
const statements = require("./function/statements");
const estatement = require("./function/estatement");

exports.TYPES = Enum.createEnum("TYPES", {
  NOTSET: 0,
  INPUTS: 1,
  // FN response
  SUCCESS: 2,
  INTERIM: 3,
  // various errors - from FN or from plumbing
  ERROR: 4,
});

exports.BLAME = Enum.createEnum("BLAME", {
  NOTSET: 0,
  SPIKE: 1,
  SITE: 2,
  USER: 3,
  CLIENT: 4,
});

exports.FN = {
  pdf,
  login,
  "login-interim-input": loginInterimInput,
  "login-interim-wait": loginInterimWait,
  accounts,
  close,
  transactions,
  statements,
  estatement,
  //"/account_holder": "Name, address, phone, email",
  //"/beneficiaries": "List of payment beneficiaries"
};

//#region web

exports.Sites = Enum.createEnum("Sites", {
  "ABS.0": 1,
  "CAP.0": 2,
  "FNB.0": 3,
  "NED.0": 4,
  "RMB.0": 5,
  "STD.2018-01": 6,
});

const exclude = [
  exports.FN.login.url,
  exports.FN["login-interim-input"].url,
  exports.FN["login-interim-wait"].url,
];
const allObjectives = Object.values(exports.FN).filter((x) => exclude.indexOf(x.url) === -1);
const noStatements = allObjectives.filter((x) => x.url !== exports.FN.statements.url);

exports.SiteToFunction = {
  "ABS.0": allObjectives,
  "CAP.0": noStatements,
  "FNB.0": allObjectives,
  "NED.0": noStatements,
  "RMB.0": allObjectives,
  "STD.2018-01": noStatements,
};

exports.isSupported = function(site, fn) {
  if (exports.Sites.validKey(site)) {
    return exports.SiteToFunction[site].indexOf(fn) !== -1;
  } else {
    throw new Error("Unknown site: " + site);
  }
};

exports.Bank = {
  ABS: { code: "ABS", name: "ABSA" },
  BID: { code: "BID", name: "Bidvest" },
  CAP: { code: "CAP", name: "Capitec" },
  DEA: { code: "DEA", name: "Document Exchange Association" },
  DIS: { code: "DIS", name: "Discovery" },
  FNB: { code: "FNB", name: "FNB" },
  INV: { code: "INV", name: "Investec" },
  NED: { code: "NED", name: "Nedbank" },
  RMB: { code: "RMB", name: "RMB" },
  SAS: { code: "SAS", name: "Safin" },
  STD: { code: "STD", name: "Standard Bank" },
  TYM: { code: "TYM", name: "TYME" },
};

exports.SiteToBankName = {
  "ABS.0": exports.Bank.ABS.name,
  "CAP.0": exports.Bank.CAP.name,
  "FNB.0": exports.Bank.FNB.name,
  "NED.0": exports.Bank.NED.name,
  "RMB.0": exports.Bank.RMB.name,
  "STD.2018-01": exports.Bank.STD.name,
};

exports.SiteMeta = {
  "ABS.0": {
    created: "2018-01-01",
  },
  "CAP.0": {
    created: "2018-01-01",
  },
  "FNB.0": {
    created: "2018-01-01",
  },
  "NED.0": {
    created: "2018-01-01",
  },
  "RMB.0": {
    created: "2018-01-01",
  },
  "STD.2018-01": {
    created: "2018-01-01",
  },
};

exports.bankToSite = {
  ABSA: "ABS.0",
  CAPITEC: "CAP.0",
  FNB: "FNB.0",
  NEDBANK: "NED.0",
  RMB: "RMB.0",
  STANDARDBANK: "STD.2018-01",
};

//#endregion

//#region pdf

exports.PdfType = Enum.createEnum("PdfType", {
  BANK: 0,
  INSURANCE: 1,
});

// Documents expected values - not an enum
// see $/spike-pdf/tools/doc.js
exports.PdfParser = {
  bankStatementsNormal: [
    "ABSA_ACTIVESAVE_ALL_0",
    "ABSA_CHEQUEACCOUNT_EMAIL_0",
    "ABSA_CHEQUEACCOUNT_WEB_0",
    "ABSA_ESTATEMENT_WEB_0",
    "BIDVEST_BUSINESSDEBITCARD_EMAIL_0",
    "BIDVEST_BUSINESS_EMAIL_0",
    "BIDVEST_BUSINESS_EMAIL_201902",
    "BIDVEST_BUSINESS_GPO_EMAIL",
    "BIDVEST_BUSINESS_WEB_0",
    "CAPITEC_ESTATEMENT_WEB_0",
    "DEA_ALL_0",
    "FNB_FLEXI_ALL_0",
    "FNB_RETAIL_ALL_0",
    "FNB_TRANSACTIONHISTORYDOWNLOAD_WEB_0",
    "INVESTEC_BANKACCOUNT",
    "INVESTEC_CALLACCOUNT",
    "NEDBANK_ALL_EMAIL_0",
    "NEDBANK_ALL_EMAIL_201711",
    "NEDBANK_BUSINESS",
    "NEDBANK_BUSINESS_201911",
    "NEDBANK_ESTATEMENT_WEB_0",
    "RMB_RETAIL_ALL_0",
    "SASFIN",
    "STANDARDBANK_ALL_EMAIL_0",
    "STANDARDBANK_COPYSTATEMENT",
    "STANDARDBANK_CURRENTACCOUNT",
    "STANDARDBANK_CUSTOMSTATEMENT_WEB_0",
    "STANDARDBANK_ESTATEMENT_WEB_0",
    "STANDARDBANK_STATEMENT2",
    "STANDARDBANK_STATEMENT3",
    "STANDARDBANK_STATEMENT4",
    "TYME",
  ],
  bankStatementsNoBalance: ["NEDBANK_ACCBAL_WEB"],
  creditCardBreakdown: ["ABSA_CREDITCARD_EMAIL_0", "NEDBANK_CREDITCARD"],
  creditCardBreakdownMultiUser: ["STANDARDBANK_CREDITCARD"],
  creditCardSimple: ["DISCOVERY_CREDITCARD_ALL_0", "FNB_CREDITCARD_ALL_0", "RMB_CREDITCARD_ALL_0"],
  insurance: [
    "LIBERTY_LIFE_COVER_ANNIVERSARY_LETTER",
    "LIBERTY_LIFE_COVER_POLICY_DOC",
    "OUTSURANCE_2017",
    "OUTSURANCE_ALL",
    "SANLAM",
    "SANTAM_ALL",
    "SANTAM_OTHER",
  ],
  other: ["SARS_PAYROLLTAXES_WEB_0"],
};

exports.PdfParserAll = Object.keys(exports.PdfParser).reduce((arr, k) => {
  arr = arr.concat(exports.PdfParser[k]);
  return arr;
}, []);
// console.log(exports.PdfParserAll);

//#endregion

//#region internal

exports.Channel = Enum.createEnum("Channel", {
  Lchan: 1, // lambda channel = invoke and result
  Bchan: 2, // back channel = send and receive
});

exports.LogLevel = Enum.createEnum("LogLevel", {
  None: 0,
  Full: 1,
  Sanitized: 1,
  CodeType: 2,
});

//#endregion

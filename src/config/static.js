const FN = require("../function");
const server = "https://api-v6.spikedata.co.za";

const state = {
  url: {
    // web
    accounts: server + FN["accounts"].url,
    estatement: server + FN["estatement"].url,
    login: server + FN["login"].url,
    "login-interim-input": server + FN["login-interim-input"].url,
    "login-interim-wait": server + FN["login-interim-wait"].url,
    statements: server + FN["statements"].url,
    transactions: server + FN["transactions"].url,
    close: server + FN["close"].url,

    // pdf
    pdf: server + FN["pdf"].url,
  },
};

module.exports = state;

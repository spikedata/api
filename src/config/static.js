const FN = require("../../../../spike-api-public/function");
// const version = require("../../../../spike-stack/config/version"); // DONT - will bundle dbconfig with spike-api-public

// const server = "https://api-${ver}.spikedata.co.za";
const server = "http://localhost:3000";
// const server = "http://10.21.7.253:3000"; // Destination Host Unreachable

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

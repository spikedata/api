const accounts = require("./accounts");
const estatement = require("./estatement");
const login = require("./login");
const loginInterimInput = require("./login-interim-input");
const loginInterimWait = require("./login-interim-wait");
const statements = require("./statements");
const transactions = require("./transactions");
const close = require("./close");
const pdf = require("./pdf");

module.exports = {
  accounts,
  estatement,
  login,
  "login-interim-input": loginInterimInput,
  "login-interim-wait": loginInterimWait,
  statements,
  transactions,
  close,
  pdf,

  check: function(func) {
    if (this[func]) {
      return true;
    } else {
      let funcs = Object.keys(this)
        .filter((x) => x !== "check")
        .join("\n");
      console.error(`invalid function, valid options = \n${funcs}`);
      return false;
    }
  },
};

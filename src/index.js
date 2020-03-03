const spikeApiPublic = require("../../../spike-api-public/index-browser");
const accounts = require("./wrappers/accounts");
const close = require("./wrappers/close");
const estatement = require("./wrappers/estatement");
const loginInterimInputAbsPass = require("./wrappers/login-interim-input-abs-pass");
const loginInterimInputStdOtp = require("./wrappers/login-interim-input-std-otp");
const loginInterimWait = require("./wrappers/login-interim-wait");
const login = require("./wrappers/login");
const pdf = require("./wrappers/pdf");
const shared = require("./wrappers/shared");
const statements = require("./wrappers/statements");
const transactions = require("./wrappers/transactions");

module.exports = {
  // expose spike-api-public
  getShape: spikeApiPublic.getShape,
  isSupported: spikeApiPublic.isSupported,
  sanitize(response) {
    let shape = spikeApiPublic.getShape(response.code);
    return spikeApiPublic.common.sanitize(shape.sanitize, response.data);
  },
  enums: spikeApiPublic.enums,
  InputValidationError: spikeApiPublic.InputValidationError,

  // wrappers
  accounts,
  close,
  estatement,
  loginInterimInputAbsPass,
  loginInterimInputStdOtp,
  loginInterimWait,
  login,
  pdf,
  shared,
  statements,
  transactions,
};

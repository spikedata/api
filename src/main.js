// api
const shapes = require("./shapes");
const helpers = require("./helpers");
const enums = require("./enums");
const common = require("./lib/common");
const BadShapeError = require("./lib/badShapeError");
const InputValidationError = require("./lib/inputValidationError");
const ShapeNotFoundError = require("./lib/shapeNotFoundError");
// wrappers
const accounts = require("./wrappers/accounts");
const close = require("./wrappers/close");
const estatement = require("./wrappers/estatement");
const loginInterimInputAbsPass = require("./wrappers/login-interim-input/abs-pass");
const loginInterimInputStdOtp = require("./wrappers/login-interim-input/std-otp");
const loginInterimWait = require("./wrappers/login-interim-wait");
const login = require("./wrappers/login");
const pdf = require("./wrappers/pdf");
const shared = require("./wrappers/shared");
const statements = require("./wrappers/statements");
const transactions = require("./wrappers/transactions");

module.exports = {
  // api
  shape: shapes.shape,
  getShape: shapes.getShape,
  common,
  enums,
  isSupported: enums.isSupported,
  isUserError: helpers.isUserError,
  BadShapeError,
  InputValidationError,
  ShapeNotFoundError,
  sanitize(response) {
    let shape = shapes.getShape(response.code);
    return common.sanitize(shape.sanitize, response.data);
  },
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

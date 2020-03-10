const config = require("./config/static");
// api
const shapes = require("./shapes");
const helpers = require("./helpers");
const enums = require("./enums");
const common = require("./lib/common");
const BadShapeError = require("./lib/badShapeError");
const InputValidationError = require("./lib/inputValidationError");
const PdfTooLargeError = require("./lib/pdfTooLargeError");
const ShapeNotFoundError = require("./lib/shapeNotFoundError");
const schema = require("./lib/schema");
const gwClientWrapper = require("./gw-client/wrapper");
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
  config,
  // api
  shape: shapes.shape,
  getShape: shapes.getShape,
  overrideShapes: function(shapeOverrides) {
    // NOTE: must modify the object inplace in order for spike-api-public code to use supplied shapes
    for (let key in shapeOverrides) {
      shapes[key] = shapeOverrides[key];
    }
  },
  common,
  enums,
  isSupported: enums.isSupported,
  isUserError: helpers.isUserError,
  BadShapeError,
  InputValidationError,
  PdfTooLargeError,
  ShapeNotFoundError,
  sanitize(response) {
    let shape = shapes.getShape(response.code);
    return common.sanitize(shape.sanitize, response.data);
  },
  schema,
  response: gwClientWrapper,
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

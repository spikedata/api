// api
import shapes from "./shapes";
import helpers from "./helpers";
import enums from "./enums";
import common from "./lib/common";
import BadShapeError from "./lib/badShapeError";
import InputValidationError from "./lib/inputValidationError";
import ShapeNotFoundError from "./lib/shapeNotFoundError";
// wrappers
import accounts from "./wrappers/accounts";
import close from "./wrappers/close";
import estatement from "./wrappers/estatement";
import loginInterimInputAbsPass from "./wrappers/login-interim-input/abs-pass";
import loginInterimInputStdOtp from "./wrappers/login-interim-input/std-otp";
import loginInterimWait from "./wrappers/login-interim-wait";
import login from "./wrappers/login";
import pdf from "./wrappers/pdf";
import shared from "./wrappers/shared";
import statements from "./wrappers/statements";
import transactions from "./wrappers/transactions";

export default {
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

// api
import shapes from "./shapes";
import helpers from "./helpers";
import enums from "./enums";
import common from "./lib/common";
import BadShapeError from "./lib/badShapeError";
import InputValidationError from "./lib/inputValidationError";
import PdfTooLargeError from "./lib/pdfTooLargeError";
import ShapeNotFoundError from "./lib/shapeNotFoundError";
import schema from "./lib/schema";
import gwClientWrapper from "./gw-client/wrapper";
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
  overrideShapes: function(shapeOverrides) {
    // NOTE: must modify the object inplace in order for @spikedata/api code to use supplied shapes
    for (let key in shapeOverrides) {
      shapes.shape[key] = shapeOverrides[key]; // NOTE: modifies exports.shape
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

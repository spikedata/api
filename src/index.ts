import "./global";
import * as config from "./config/static";
// api
import * as shapes from "./shapes";
import * as helpers from "./helpers";
import * as enums from "./enums";
import * as common from "./lib/common";
import BadShapeError from "./lib/badShapeError";
import InputValidationError from "./lib/inputValidationError";
import PdfTooLargeError from "./lib/pdfTooLargeError";
import ShapeNotFoundError from "./lib/shapeNotFoundError";
import * as schema from "./lib/schema";
import gwClientWrapper from "./gw-client/wrapper";
// wrappers
import accounts from "./wrappers/accounts";
import close from "./wrappers/close";
import csv from "./wrappers/csv";
import estatement from "./wrappers/estatement";
import loginInterimInputAbsPass from "./wrappers/login-interim-input/abs-pass";
import loginInterimInputStdOtp from "./wrappers/login-interim-input/std-otp";
import loginInterimWait from "./wrappers/login-interim-wait";
import login from "./wrappers/login";
import pdf from "./wrappers/pdf";
import * as shared from "./wrappers/shared";
import statements from "./wrappers/statements";
import transactions from "./wrappers/transactions";

export default {
  config,
  // api
  shape: shapes.shape,
  getShape: shapes.getShape,
  overrideShapes: function(shapeOverrides) {
    // NOTE: must modify the object inplace in order for @spikedata/api code to use supplied shapes
    for (const key in shapeOverrides) {
      shapes.shape[key] = shapeOverrides[key]; // NOTE: modifies export shape
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
    const shape = shapes.getShape(response.code);
    return common.sanitize(shape.sanitize, response.data);
  },
  schema,
  response: gwClientWrapper,
  // wrappers
  accounts,
  close,
  csv,
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

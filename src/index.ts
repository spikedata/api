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
import * as gwClientWrapper from "./gw-client/wrapper";
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

function sanitize(response) {
  const shape = shapes.getShape(response.code);
  return common.sanitize(shape.sanitize, response.data);
}

function overrideShapes(shapeOverrides) {
  // NOTE: must modify the object inplace in order for @spike/api code to use supplied shapes
  for (const key in shapeOverrides) {
    shapes.shape[key] = shapeOverrides[key]; // NOTE: modifies export shape
  }
}

// rename
const response = gwClientWrapper;
const shape = shapes.shape;
const getShape = shapes.getShape;
const isSupported = enums.isSupported;
const isUserError = helpers.isUserError;

export {
  config,
  // api
  shape,
  getShape,
  overrideShapes,
  common,
  enums,
  isSupported,
  isUserError,
  BadShapeError,
  InputValidationError,
  PdfTooLargeError,
  ShapeNotFoundError,
  sanitize,
  schema,
  response,
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

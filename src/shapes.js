const ShapeNotFoundError = require("./lib/shapeNotFoundError");
// additional
const clientGwComposerBasic = require("./client-gw/composer/basic");
const clientGwComposerCodeData = require("./client-gw/composer/codeData");
// client-gw
const clientGwAccounts = require("./client-gw/accounts");
const clientGwClose = require("./client-gw/close");
const clientGwEstatement = require("./client-gw/estatement");
const clientGwLogin = require("./client-gw/login");
const clientGwLoginInterimInputAbsPass = require("./client-gw/login-interim-input/abs-pass");
const clientGwLoginInterimInputStdOtp = require("./client-gw/login-interim-input/std-otp");
const clientGwLoginInterimWait = require("./client-gw/login-interim-wait");
const clientGwPdf = require("./client-gw/pdf");
const clientGwStatements = require("./client-gw/statements");
const clientGwTransactions = require("./client-gw/transactions");
// gw-client
const gwClientAccountsSuccess = require("./gw-client/accounts/success");
const gwClientCloseSuccess = require("./gw-client/close/success");
const gwClientErrorCommonAccessExceededMaxConcurrentRequests = require("./gw-client/error/common/access/exceeded-max-concurrent-requests");
const gwClientErrorCommonAccessInsufficientCredit = require("./gw-client/error/common/access/insufficient-credit");
const gwClientErrorCommonDevAuthorization = require("./gw-client/error/common/dev/authorization");
const gwClientErrorCommonDevFunctionNotSupportedOnSite = require("./gw-client/error/common/dev/function-not-supported-on-site");
const gwClientErrorCommonDevInvalidInputs = require("./gw-client/error/common/dev/invalid-inputs");
const gwClientErrorCommonDevSentAnotherRequestAfterFinalResponse = require("./gw-client/error/common/dev/sent-another-request-after-final-response");
const gwClientErrorCommonException = require("./gw-client/error/common/exception");
const gwClientErrorCommonSessionInUse = require("./gw-client/error/common/session-in-use");
const gwClientErrorCommonSessionTimedOut = require("./gw-client/error/common/session-timed-out");
const gwClientErrorFnbOnlineBankingLegalDocumentation = require("./gw-client/error/fnb/online-banking-legal-documentation");
const gwClientErrorFnbStatementsDisabled = require("./gw-client/error/fnb/statements-disabled");
const gwClientErrorSiteAbsLoggedOff = require("./gw-client/error/site/abs/logged-off");
const gwClientErrorSiteBankBlocked = require("./gw-client/error/site/bank-blocked");
const gwClientErrorSiteCaptcha = require("./gw-client/error/site/captcha");
const gwClientErrorSiteInputValidationFailed = require("./gw-client/error/site/input-validation-failed");
const gwClientErrorSiteInternal = require("./gw-client/error/site/internal");
const gwClientErrorSiteInvalidAccount = require("./gw-client/error/site/invalid-account");
const gwClientErrorSiteLoginFailed = require("./gw-client/error/site/login-failed");
const gwClientErrorSiteNoStatementsAvailable = require("./gw-client/error/site/no-statements-available");
const gwClientErrorSiteNoTransactionsOverPeriod = require("./gw-client/error/site/no-transactions-over-period");
const gwClientErrorSiteOkGotIt = require("./gw-client/error/site/ok-got-it");
const gwClientErrorSiteSiteChangeDetected = require("./gw-client/error/site/site-change-detected");
const gwClientErrorSiteSiteMaintenance = require("./gw-client/error/site/site-maintenance");
const gwClientErrorSiteSiteUnreachable = require("./gw-client/error/site/site-unreachable");
const gwClientErrorSiteSiteUnresponsive = require("./gw-client/error/site/site-unresponsive");
const gwClientErrorUserDenied = require("./gw-client/error/user/denied");
const gwClientErrorUserTookTooLong = require("./gw-client/error/user/took-too-long");
const gwClientFileSuccess = require("./gw-client/file/success");
const gwClientInsuranceFail = require("./gw-client/insurance/fail");
const gwClientInsuranceSuccess = require("./gw-client/insurance/success");
const gwClientLoginInterimInputAbsPass = require("./gw-client/login/interim-input-abs-pass");
const gwClientLoginInterimInputStdOtp = require("./gw-client/login/interim-input-std-otp");
const gwClientLoginInterimInputSuccess = require("./gw-client/login-interim-input/success");
const gwClientLoginInterimWaitCap2fa = require("./gw-client/login/interim-wait-cap-2fa");
const gwClientLoginInterimWaitSuccess = require("./gw-client/login-interim-wait/success");
const gwClientLoginSuccess = require("./gw-client/login/success");
const gwClientNestedBreaks = require("./gw-client/nested/breaks");
const gwClientNestedStatementInfo = require("./gw-client/nested/statement-info");
const gwClientNestedTransaction = require("./gw-client/nested/transaction");
const gwClientNestedTransactionNoBalance = require("./gw-client/nested/transaction-no-balance");
const gwClientNestedTransactions = require("./gw-client/nested/transactions");
const gwClientNestedTransactionsNoBalance = require("./gw-client/nested/transactions-no-balance");
const gwClientPdfFailAutoDetect = require("./gw-client/pdf/fail/auto-detect");
const gwClientPdfFailFailedToExtractCreditBreakdown = require("./gw-client/pdf/fail/failed-to-extract-credit-breakdown");
const gwClientPdfFailFailedToExtractStatementDate = require("./gw-client/pdf/fail/failed-to-extract-statement-date");
const gwClientPdfFailFileNotFound = require("./gw-client/pdf/fail/file-not-found");
const gwClientPdfFailImagePdf = require("./gw-client/pdf/fail/image-pdf");
const gwClientPdfFailImagePdfWithOcr = require("./gw-client/pdf/fail/image-pdf-with-ocr");
const gwClientPdfFailInvalidDataExtracted = require("./gw-client/pdf/fail/invalid-data-extracted");
const gwClientPdfFailInvalidPdfException = require("./gw-client/pdf/fail/invalid-pdf-exception");
const gwClientPdfFailMultipleMatchingParsers = require("./gw-client/pdf/fail/multiple-matching-parsers");
const gwClientPdfFailPasswordIncorrect = require("./gw-client/pdf/fail/password-incorrect");
const gwClientPdfFailPasswordRequired = require("./gw-client/pdf/fail/password-required");
const gwClientPdfFailPdfJsError = require("./gw-client/pdf/fail/pdf-js-error");
const gwClientPdfFailPdfJsException = require("./gw-client/pdf/fail/pdf-js-exception");
const gwClientPdfFailPdfReadException = require("./gw-client/pdf/fail/pdf-read-exception");
const gwClientPdfFailUnknownException = require("./gw-client/pdf/fail/unknown-exception");
const gwClientPdfFailUnknownPdf = require("./gw-client/pdf/fail/unknown-pdf");
const gwClientPdfSuccessBankStatementNormal = require("./gw-client/pdf/success/bank-statement-normal");
const gwClientPdfSuccessBankStatementNoBalance = require("./gw-client/pdf/success/bank-statement-no-balance");
const gwClientPdfSuccessCreditCardBreakdown = require("./gw-client/pdf/success/credit-card-breakdown");
const gwClientPdfSuccessCreditCardBreakdownMultiUser = require("./gw-client/pdf/success/credit-card-breakdown-multi-user");
const gwClientPdfSuccessCreditCardSimple = require("./gw-client/pdf/success/credit-card-simple");
const gwClientSarsSuccessPayrollTaxes = require("./gw-client/sars/success/payroll-taxes");
const gwClientTransactionsSuccess = require("./gw-client/transactions/success");
const gwClientWrapper = require("./gw-client/wrapper");

exports.shape = {
  // additional
  "client-gw/composer/basic": clientGwComposerBasic,
  "client-gw/composer/codeData": clientGwComposerCodeData,
  // client-gw
  "client-gw/accounts": clientGwAccounts,
  "client-gw/close": clientGwClose,
  "client-gw/estatement": clientGwEstatement,
  "client-gw/login": clientGwLogin,
  "client-gw/login-interim-input/abs-pass": clientGwLoginInterimInputAbsPass,
  "client-gw/login-interim-input/std-otp": clientGwLoginInterimInputStdOtp,
  "client-gw/login-interim-wait": clientGwLoginInterimWait,
  "client-gw/pdf": clientGwPdf,
  "client-gw/statements": clientGwStatements,
  "client-gw/transactions": clientGwTransactions,
  // gw-client
  "gw-client/accounts/success": gwClientAccountsSuccess,
  "gw-client/close/success": gwClientCloseSuccess,
  "gw-client/error/common/access/exceeded-max-concurrent-requests": gwClientErrorCommonAccessExceededMaxConcurrentRequests,
  "gw-client/error/common/access/insufficient-credit": gwClientErrorCommonAccessInsufficientCredit,
  "gw-client/error/common/dev/authorization": gwClientErrorCommonDevAuthorization,
  "gw-client/error/common/dev/function-not-supported-on-site": gwClientErrorCommonDevFunctionNotSupportedOnSite,
  "gw-client/error/common/dev/invalid-inputs": gwClientErrorCommonDevInvalidInputs,
  "gw-client/error/common/dev/sent-another-request-after-final-response": gwClientErrorCommonDevSentAnotherRequestAfterFinalResponse,
  "gw-client/error/common/exception": gwClientErrorCommonException,
  "gw-client/error/common/session-in-use": gwClientErrorCommonSessionInUse,
  "gw-client/error/common/session-timed-out": gwClientErrorCommonSessionTimedOut,
  "gw-client/error/fnb/online-banking-legal-documentation": gwClientErrorFnbOnlineBankingLegalDocumentation,
  "gw-client/error/fnb/statements-disabled": gwClientErrorFnbStatementsDisabled,
  "gw-client/error/site/abs/logged-off": gwClientErrorSiteAbsLoggedOff,
  "gw-client/error/site/bank-blocked": gwClientErrorSiteBankBlocked,
  "gw-client/error/site/captcha": gwClientErrorSiteCaptcha,
  "gw-client/error/site/input-validation-failed": gwClientErrorSiteInputValidationFailed,
  "gw-client/error/site/internal": gwClientErrorSiteInternal,
  "gw-client/error/site/invalid-account": gwClientErrorSiteInvalidAccount,
  "gw-client/error/site/login-failed": gwClientErrorSiteLoginFailed,
  "gw-client/error/site/no-statements-available": gwClientErrorSiteNoStatementsAvailable,
  "gw-client/error/site/no-transactions-over-period": gwClientErrorSiteNoTransactionsOverPeriod,
  "gw-client/error/site/ok-got-it": gwClientErrorSiteOkGotIt,
  "gw-client/error/site/site-change-detected": gwClientErrorSiteSiteChangeDetected,
  "gw-client/error/site/site-maintenance": gwClientErrorSiteSiteMaintenance,
  "gw-client/error/site/site-unreachable": gwClientErrorSiteSiteUnreachable,
  "gw-client/error/site/site-unresponsive": gwClientErrorSiteSiteUnresponsive,
  "gw-client/error/user/denied": gwClientErrorUserDenied,
  "gw-client/error/user/took-too-long": gwClientErrorUserTookTooLong,
  "gw-client/file/success": gwClientFileSuccess,
  "gw-client/insurance/fail": gwClientInsuranceFail,
  "gw-client/insurance/success": gwClientInsuranceSuccess,
  "gw-client/login/interim-input-abs-pass": gwClientLoginInterimInputAbsPass,
  "gw-client/login/interim-input-std-otp": gwClientLoginInterimInputStdOtp,
  "gw-client/login-interim-input/success": gwClientLoginInterimInputSuccess,
  "gw-client/login/interim-wait-cap-2fa": gwClientLoginInterimWaitCap2fa,
  "gw-client/login-interim-wait/success": gwClientLoginInterimWaitSuccess,
  "gw-client/login/success": gwClientLoginSuccess,
  "gw-client/nested/breaks": gwClientNestedBreaks,
  "gw-client/nested/statement-info": gwClientNestedStatementInfo,
  "gw-client/nested/transaction": gwClientNestedTransaction,
  "gw-client/nested/transaction-no-balance": gwClientNestedTransactionNoBalance,
  "gw-client/nested/transactions": gwClientNestedTransactions,
  "gw-client/nested/transactions-no-balance": gwClientNestedTransactionsNoBalance,
  "gw-client/pdf/fail/auto-detect": gwClientPdfFailAutoDetect,
  "gw-client/pdf/fail/failed-to-extract-credit-breakdown": gwClientPdfFailFailedToExtractCreditBreakdown,
  "gw-client/pdf/fail/failed-to-extract-statement-date": gwClientPdfFailFailedToExtractStatementDate,
  "gw-client/pdf/fail/file-not-found": gwClientPdfFailFileNotFound,
  "gw-client/pdf/fail/image-pdf": gwClientPdfFailImagePdf,
  "gw-client/pdf/fail/image-pdf-with-ocr": gwClientPdfFailImagePdfWithOcr,
  "gw-client/pdf/fail/invalid-data-extracted": gwClientPdfFailInvalidDataExtracted,
  "gw-client/pdf/fail/invalid-pdf-exception": gwClientPdfFailInvalidPdfException,
  "gw-client/pdf/fail/multiple-matching-parsers": gwClientPdfFailMultipleMatchingParsers,
  "gw-client/pdf/fail/password-incorrect": gwClientPdfFailPasswordIncorrect,
  "gw-client/pdf/fail/password-required": gwClientPdfFailPasswordRequired,
  "gw-client/pdf/fail/pdf-js-error": gwClientPdfFailPdfJsError,
  "gw-client/pdf/fail/pdf-js-exception": gwClientPdfFailPdfJsException,
  "gw-client/pdf/fail/pdf-read-exception": gwClientPdfFailPdfReadException,
  "gw-client/pdf/fail/unknown-exception": gwClientPdfFailUnknownException,
  "gw-client/pdf/fail/unknown-pdf": gwClientPdfFailUnknownPdf,
  "gw-client/pdf/success/bank-statement-normal": gwClientPdfSuccessBankStatementNormal,
  "gw-client/pdf/success/bank-statement-no-balance": gwClientPdfSuccessBankStatementNoBalance,
  "gw-client/pdf/success/credit-card-breakdown": gwClientPdfSuccessCreditCardBreakdown,
  "gw-client/pdf/success/credit-card-breakdown-multi-user": gwClientPdfSuccessCreditCardBreakdownMultiUser,
  "gw-client/pdf/success/credit-card-simple": gwClientPdfSuccessCreditCardSimple,
  "gw-client/sars/success/payroll-taxes": gwClientSarsSuccessPayrollTaxes,
  "gw-client/transactions/success": gwClientTransactionsSuccess,
  "gw-client/wrapper": gwClientWrapper,
};

exports.getShape = function(code) {
  let shape = exports.shape[code];
  if (!shape) {
    shape = exports.shape["client-gw/" + code];
  }
  if (!shape) {
    shape = exports.shape["gw-client/" + code];
  }
  if (!shape) {
    throw new ShapeNotFoundError(code);
  }
  return shape;
};

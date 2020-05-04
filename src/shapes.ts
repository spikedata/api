import ShapeNotFoundError from "./lib/shapeNotFoundError";
import * as clientGwComposerBasic from "./client-gw/composer/basic";
import * as clientGwComposerCodeData from "./client-gw/composer/codeData";
import * as clientGwAccounts from "./client-gw/accounts";
// import * as clientGwClose from "./client-gw/close";
// import * as clientGwCsv from "./client-gw/csv";
// import * as clientGwEstatement from "./client-gw/estatement";
// import * as clientGwLogin from "./client-gw/login";
// import * as clientGwLoginInterimInputAbsPass from "./client-gw/login-interim-input/abs-pass";
// import * as clientGwLoginInterimInputStdOtp from "./client-gw/login-interim-input/std-otp";
// import * as clientGwLoginInterimWait from "./client-gw/login-interim-wait";
// import * as clientGwPdf from "./client-gw/pdf";
// import * as clientGwStatements from "./client-gw/statements";
// import * as clientGwTransactions from "./client-gw/transactions";
// import * as gwClientAccountsSuccess from "./gw-client/accounts/success";
// import * as gwClientCloseSuccess from "./gw-client/close/success";
// import * as gwClientCsvFailInvalidDataExtracted from "./gw-client/csv/fail/invalid-data-extracted";
// import * as gwClientCsvFailMultipleMatchingParsers from "./gw-client/csv/fail/multiple-matching-parsers";
// import * as gwClientCsvFailUnknownCsv from "./gw-client/csv/fail/unknown-csv";
// import * as gwClientCsvFailUnknownException from "./gw-client/csv/fail/unknown-exception";
// import * as gwClientCsvSuccessBankStatement from "./gw-client/csv/success/bank-statement";
// import gwClientErrorCommonAccessExceededMaxConcurrentRequests from "./gw-client/error/common/access/exceeded-max-concurrent-requests";
// import gwClientErrorCommonAccessInsufficientCredit from "./gw-client/error/common/access/insufficient-credit";
// import gwClientErrorCommonDevAuthorization from "./gw-client/error/common/dev/authorization";
// import gwClientErrorCommonDevFunctionNotSupportedOnSite from "./gw-client/error/common/dev/function-not-supported-on-site";
// import gwClientErrorCommonDevInvalidInputs from "./gw-client/error/common/dev/invalid-inputs";
// import gwClientErrorCommonDevSentAnotherRequestAfterFinalResponse from "./gw-client/error/common/dev/sent-another-request-after-final-response";
// import gwClientErrorCommonException from "./gw-client/error/common/exception";
// import gwClientErrorCommonSessionInUse from "./gw-client/error/common/session-in-use";
// import gwClientErrorCommonSessionTimedOut from "./gw-client/error/common/session-timed-out";
// import gwClientErrorFnbOnlineBankingLegalDocumentation from "./gw-client/error/fnb/online-banking-legal-documentation";
// import gwClientErrorFnbStatementsDisabled from "./gw-client/error/fnb/statements-disabled";
// import gwClientErrorSiteAbsLoggedOff from "./gw-client/error/site/abs/logged-off";
// import gwClientErrorSiteBankBlocked from "./gw-client/error/site/bank-blocked";
// import gwClientErrorSiteCaptcha from "./gw-client/error/site/captcha";
// import gwClientErrorSiteInputValidationFailed from "./gw-client/error/site/input-validation-failed";
// import gwClientErrorSiteInternal from "./gw-client/error/site/internal";
// import gwClientErrorSiteInvalidAccount from "./gw-client/error/site/invalid-account";
// import gwClientErrorSiteLoginFailed from "./gw-client/error/site/login-failed";
// import gwClientErrorSiteNoStatementsAvailable from "./gw-client/error/site/no-statements-available";
// import gwClientErrorSiteNoTransactionsOverPeriod from "./gw-client/error/site/no-transactions-over-period";
// import gwClientErrorSiteOkGotIt from "./gw-client/error/site/ok-got-it";
// import gwClientErrorSiteSiteChangeDetected from "./gw-client/error/site/site-change-detected";
// import gwClientErrorSiteSiteMaintenance from "./gw-client/error/site/site-maintenance";
// import gwClientErrorSiteSiteUnreachable from "./gw-client/error/site/site-unreachable";
// import gwClientErrorSiteSiteUnresponsive from "./gw-client/error/site/site-unresponsive";
// import gwClientErrorUserDenied from "./gw-client/error/user/denied";
// import gwClientErrorUserTookTooLong from "./gw-client/error/user/took-too-long";
// import * as gwClientFileSuccess from "./gw-client/file/success";
// import * as gwClientInsuranceFail from "./gw-client/insurance/fail";
// import * as gwClientInsuranceSuccess from "./gw-client/insurance/success";
// import * as gwClientLoginInterimInputAbsPass from "./gw-client/login/interim-input-abs-pass";
// import * as gwClientLoginInterimInputStdOtp from "./gw-client/login/interim-input-std-otp";
// import * as gwClientLoginInterimInputSuccess from "./gw-client/login-interim-input/success";
// import * as gwClientLoginInterimWaitCap2fa from "./gw-client/login/interim-wait-cap-2fa";
// import * as gwClientLoginInterimWaitSuccess from "./gw-client/login-interim-wait/success";
// import * as gwClientLoginSuccess from "./gw-client/login/success";
// import * as gwClientNestedBreaks from "./gw-client/nested/breaks";
// import * as gwClientNestedStatementInfo from "./gw-client/nested/statement-info";
// import * as gwClientNestedTransaction from "./gw-client/nested/transaction";
// import * as gwClientNestedTransactionNoBalance from "./gw-client/nested/transaction-no-balance";
// import * as gwClientNestedTransactions from "./gw-client/nested/transactions";
// import * as gwClientNestedTransactionsNoBalance from "./gw-client/nested/transactions-no-balance";
// import * as gwClientPdfFailAutoDetect from "./gw-client/pdf/fail/auto-detect";
// import * as gwClientPdfFailFailedToExtractCreditBreakdown from "./gw-client/pdf/fail/failed-to-extract-credit-breakdown";
// import * as gwClientPdfFailFailedToExtractStatementDate from "./gw-client/pdf/fail/failed-to-extract-statement-date";
// import * as gwClientPdfFailFileNotFound from "./gw-client/pdf/fail/file-not-found";
// import * as gwClientPdfFailImagePdf from "./gw-client/pdf/fail/image-pdf";
// import * as gwClientPdfFailImagePdfWithOcr from "./gw-client/pdf/fail/image-pdf-with-ocr";
// import * as gwClientPdfFailInvalidDataExtracted from "./gw-client/pdf/fail/invalid-data-extracted";
// import * as gwClientPdfFailInvalidPdfException from "./gw-client/pdf/fail/invalid-pdf-exception";
// import * as gwClientPdfFailMultipleMatchingParsers from "./gw-client/pdf/fail/multiple-matching-parsers";
// import * as gwClientPdfFailPasswordIncorrect from "./gw-client/pdf/fail/password-incorrect";
// import * as gwClientPdfFailPasswordRequired from "./gw-client/pdf/fail/password-required";
// import * as gwClientPdfFailPdfJsError from "./gw-client/pdf/fail/pdf-js-error";
// import * as gwClientPdfFailPdfJsException from "./gw-client/pdf/fail/pdf-js-exception";
// import * as gwClientPdfFailPdfReadException from "./gw-client/pdf/fail/pdf-read-exception";
// import * as gwClientPdfFailUnknownException from "./gw-client/pdf/fail/unknown-exception";
// import * as gwClientPdfFailUnknownPdf from "./gw-client/pdf/fail/unknown-pdf";
// import * as gwClientPdfSuccessBankStatementNormal from "./gw-client/pdf/success/bank-statement-normal";
// import * as gwClientPdfSuccessBankStatementNoBalance from "./gw-client/pdf/success/bank-statement-no-balance";
// import * as gwClientPdfSuccessCreditCardBreakdown from "./gw-client/pdf/success/credit-card-breakdown";
// import * as gwClientPdfSuccessCreditCardBreakdownMultiUser from "./gw-client/pdf/success/credit-card-breakdown-multi-user";
// import * as gwClientPdfSuccessCreditCardSimple from "./gw-client/pdf/success/credit-card-simple";
// import * as gwClientSarsSuccessPayrollTaxes from "./gw-client/sars/success/payroll-taxes";
// import * as gwClientTransactionsSuccess from "./gw-client/transactions/success";
// import * as gwClientWrapper from "./gw-client/wrapper"; // remove circular dep: shape -> wrapper -> common -> shape

export const shape = {
  // additional
  "client-gw/composer/basic": clientGwComposerBasic,
  "client-gw/composer/codeData": clientGwComposerCodeData,
  // client-gw
  "client-gw/accounts": clientGwAccounts,
  // "client-gw/close": clientGwClose,
  // "client-gw/csv": clientGwCsv,
  // "client-gw/estatement": clientGwEstatement,
  // "client-gw/login": clientGwLogin,
  // "client-gw/login-interim-input/abs-pass": clientGwLoginInterimInputAbsPass,
  // "client-gw/login-interim-input/std-otp": clientGwLoginInterimInputStdOtp,
  // "client-gw/login-interim-wait": clientGwLoginInterimWait,
  // "client-gw/pdf": clientGwPdf,
  // "client-gw/statements": clientGwStatements,
  // "client-gw/transactions": clientGwTransactions,
  // // gw-client
  // "gw-client/accounts/success": gwClientAccountsSuccess,
  // "gw-client/close/success": gwClientCloseSuccess,
  // "gw-client/csv/fail/invalid-data-extracted": gwClientCsvFailInvalidDataExtracted,
  // "gw-client/csv/fail/multiple-matching-parsers": gwClientCsvFailMultipleMatchingParsers,
  // "gw-client/csv/fail/unknown-csv": gwClientCsvFailUnknownCsv,
  // "gw-client/csv/fail/unknown-exception": gwClientCsvFailUnknownException,
  // "gw-client/csv/success/bank-statement": gwClientCsvSuccessBankStatement,
  // "gw-client/error/common/access/exceeded-max-concurrent-requests": gwClientErrorCommonAccessExceededMaxConcurrentRequests,
  // "gw-client/error/common/access/insufficient-credit": gwClientErrorCommonAccessInsufficientCredit,
  // "gw-client/error/common/dev/authorization": gwClientErrorCommonDevAuthorization,
  // "gw-client/error/common/dev/function-not-supported-on-site": gwClientErrorCommonDevFunctionNotSupportedOnSite,
  // "gw-client/error/common/dev/invalid-inputs": gwClientErrorCommonDevInvalidInputs,
  // "gw-client/error/common/dev/sent-another-request-after-final-response": gwClientErrorCommonDevSentAnotherRequestAfterFinalResponse,
  // "gw-client/error/common/exception": gwClientErrorCommonException,
  // "gw-client/error/common/session-in-use": gwClientErrorCommonSessionInUse,
  // "gw-client/error/common/session-timed-out": gwClientErrorCommonSessionTimedOut,
  // "gw-client/error/fnb/online-banking-legal-documentation": gwClientErrorFnbOnlineBankingLegalDocumentation,
  // "gw-client/error/fnb/statements-disabled": gwClientErrorFnbStatementsDisabled,
  // "gw-client/error/site/abs/logged-off": gwClientErrorSiteAbsLoggedOff,
  // "gw-client/error/site/bank-blocked": gwClientErrorSiteBankBlocked,
  // "gw-client/error/site/captcha": gwClientErrorSiteCaptcha,
  // "gw-client/error/site/input-validation-failed": gwClientErrorSiteInputValidationFailed,
  // "gw-client/error/site/internal": gwClientErrorSiteInternal,
  // "gw-client/error/site/invalid-account": gwClientErrorSiteInvalidAccount,
  // "gw-client/error/site/login-failed": gwClientErrorSiteLoginFailed,
  // "gw-client/error/site/no-statements-available": gwClientErrorSiteNoStatementsAvailable,
  // "gw-client/error/site/no-transactions-over-period": gwClientErrorSiteNoTransactionsOverPeriod,
  // "gw-client/error/site/ok-got-it": gwClientErrorSiteOkGotIt,
  // "gw-client/error/site/site-change-detected": gwClientErrorSiteSiteChangeDetected,
  // "gw-client/error/site/site-maintenance": gwClientErrorSiteSiteMaintenance,
  // "gw-client/error/site/site-unreachable": gwClientErrorSiteSiteUnreachable,
  // "gw-client/error/site/site-unresponsive": gwClientErrorSiteSiteUnresponsive,
  // "gw-client/error/user/denied": gwClientErrorUserDenied,
  // "gw-client/error/user/took-too-long": gwClientErrorUserTookTooLong,
  // "gw-client/file/success": gwClientFileSuccess,
  // "gw-client/insurance/fail": gwClientInsuranceFail,
  // "gw-client/insurance/success": gwClientInsuranceSuccess,
  // "gw-client/login/interim-input-abs-pass": gwClientLoginInterimInputAbsPass,
  // "gw-client/login/interim-input-std-otp": gwClientLoginInterimInputStdOtp,
  // "gw-client/login-interim-input/success": gwClientLoginInterimInputSuccess,
  // "gw-client/login/interim-wait-cap-2fa": gwClientLoginInterimWaitCap2fa,
  // "gw-client/login-interim-wait/success": gwClientLoginInterimWaitSuccess,
  // "gw-client/login/success": gwClientLoginSuccess,
  // "gw-client/nested/breaks": gwClientNestedBreaks,
  // "gw-client/nested/statement-info": gwClientNestedStatementInfo,
  // "gw-client/nested/transaction": gwClientNestedTransaction,
  // "gw-client/nested/transaction-no-balance": gwClientNestedTransactionNoBalance,
  // "gw-client/nested/transactions": gwClientNestedTransactions,
  // "gw-client/nested/transactions-no-balance": gwClientNestedTransactionsNoBalance,
  // "gw-client/pdf/fail/auto-detect": gwClientPdfFailAutoDetect,
  // "gw-client/pdf/fail/failed-to-extract-credit-breakdown": gwClientPdfFailFailedToExtractCreditBreakdown,
  // "gw-client/pdf/fail/failed-to-extract-statement-date": gwClientPdfFailFailedToExtractStatementDate,
  // "gw-client/pdf/fail/file-not-found": gwClientPdfFailFileNotFound,
  // "gw-client/pdf/fail/image-pdf": gwClientPdfFailImagePdf,
  // "gw-client/pdf/fail/image-pdf-with-ocr": gwClientPdfFailImagePdfWithOcr,
  // "gw-client/pdf/fail/invalid-data-extracted": gwClientPdfFailInvalidDataExtracted,
  // "gw-client/pdf/fail/invalid-pdf-exception": gwClientPdfFailInvalidPdfException,
  // "gw-client/pdf/fail/multiple-matching-parsers": gwClientPdfFailMultipleMatchingParsers,
  // "gw-client/pdf/fail/password-incorrect": gwClientPdfFailPasswordIncorrect,
  // "gw-client/pdf/fail/password-required": gwClientPdfFailPasswordRequired,
  // "gw-client/pdf/fail/pdf-js-error": gwClientPdfFailPdfJsError,
  // "gw-client/pdf/fail/pdf-js-exception": gwClientPdfFailPdfJsException,
  // "gw-client/pdf/fail/pdf-read-exception": gwClientPdfFailPdfReadException,
  // "gw-client/pdf/fail/unknown-exception": gwClientPdfFailUnknownException,
  // "gw-client/pdf/fail/unknown-pdf": gwClientPdfFailUnknownPdf,
  // "gw-client/pdf/success/bank-statement-normal": gwClientPdfSuccessBankStatementNormal,
  // "gw-client/pdf/success/bank-statement-no-balance": gwClientPdfSuccessBankStatementNoBalance,
  // "gw-client/pdf/success/credit-card-breakdown": gwClientPdfSuccessCreditCardBreakdown,
  // "gw-client/pdf/success/credit-card-breakdown-multi-user": gwClientPdfSuccessCreditCardBreakdownMultiUser,
  // "gw-client/pdf/success/credit-card-simple": gwClientPdfSuccessCreditCardSimple,
  // "gw-client/sars/success/payroll-taxes": gwClientSarsSuccessPayrollTaxes,
  // "gw-client/transactions/success": gwClientTransactionsSuccess,
  // "gw-client/wrapper": gwClientWrapper, // remove circular dep: shape -> wrapper -> common -> shape
};

export const getShape = function(code) {
  let s = shape[code];
  if (!s) {
    s = shape["client-gw/" + code];
  }
  if (!s) {
    s = shape["gw-client/" + code];
  }
  if (!s) {
    throw new ShapeNotFoundError(code);
  }
  return s;
};

// see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

class PdfTooLargeError extends Error {
  constructor(validationErrorsArray) {
    super("Spike pdf too large error");

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, PdfTooLargeError);
    }

    this.name = "PdfTooLargeError";
    this.validationErrors = validationErrorsArray;
  }
}

PdfTooLargeError.Max = 6 * 1024 * 1024;

module.exports = PdfTooLargeError;

const axios = require("axios");
const InputValidationError = require("../../../../spike-api-public/lib/inputValidationError");
const uuid = require("../../../../spike-api-public/lib/uuid");

const MAX = 20 * 1024 * 1024;

exports.request = async function(APIKEY, USERKEY, url, inputs) {
  // check keys
  let validationErrors = [];
  if (!uuid.validUuidV4(APIKEY)) {
    validationErrors.push("apikey invalid");
  }
  if (!uuid.validUuidV4(USERKEY)) {
    validationErrors.push("userkey invalid");
  }
  if (validationErrors.length) {
    throw new InputValidationError(validationErrors);
  }

  // request
  let response = await axios.post(url, inputs, {
    headers: {
      "x-api-key": APIKEY,
      "x-user-key": USERKEY,
      "Content-Type": "application/json",
    },
    maxContentLength: MAX,
    maxBodyLength: MAX,
  });
  if (response.status === 200) {
    return response.data;
  }
  throw response;
};

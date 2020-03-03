const spikeApiPublic = require("../../../../spike-api-public/api");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId, final, data) {
  // inputs
  let shape = spikeApiPublic.shape["client-gw/login-interim-input/std-otp"];
  let inputs = shape.create(sessionId, final, data); // throws InputValidationError

  // request
  let url = config.url["login-interim-input"];
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

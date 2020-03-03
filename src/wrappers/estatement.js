const spikeApiPublic = require("../../../../spike-api-public/api");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId, final, accountNumber, numDays) {
  // inputs
  let inputs = spikeApiPublic.shape["client-gw/estatement"].create(
    sessionId,
    final,
    accountNumber,
    numDays
  ); // throws InputValidationError

  // request
  let url = config.url.estatement;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

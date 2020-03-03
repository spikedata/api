const spikeApiPublic = require("../../../../spike-api-public/index-browser");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId, final, accountNumber, numStatements) {
  // inputs
  let inputs = spikeApiPublic.shape["client-gw/statements"].create(
    sessionId,
    final,
    accountNumber,
    numStatements
  ); // throws InputValidationError

  // request
  let url = config.url.statements;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

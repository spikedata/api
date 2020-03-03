const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId, final, accountNumber, numDays) {
  // inputs
  let inputs = shapes
    .getShape("client-gw/estatement")
    .create(sessionId, final, accountNumber, numDays); // throws InputValidationError

  // request
  let url = config.url.estatement;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

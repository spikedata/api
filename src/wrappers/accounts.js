const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId, final) {
  // inputs
  let inputs = shapes.getShape("client-gw/accounts").create(sessionId, final); // throws InputValidationError

  // request
  let url = config.url.accounts;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

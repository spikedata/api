const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId) {
  // inputs
  let inputs = shapes.getShape("client-gw/close").create(sessionId); // throws InputValidationError

  // request
  let url = config.url.close;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

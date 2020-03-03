const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, sessionId, final, accountNumber, numStatements) {
  // inputs
  let inputs = shapes
    .getShape("client-gw/statements")
    .create(sessionId, final, accountNumber, numStatements); // throws InputValidationError

  // request
  let url = config.url.statements;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

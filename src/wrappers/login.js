const spikeApiPublic = require("../../../../spike-api-public/api");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, site, user, pin, pass, usernum) {
  // inputs
  let inputs = spikeApiPublic.shape["client-gw/login"].create(site, user, pin, pass, usernum); // throws InputValidationError

  // request
  let url = config.url.login;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

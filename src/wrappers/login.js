const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, site, user, pin, pass, usernum) {
  // inputs
  let inputs = shapes.getShape("client-gw/login").create(site, user, pin, pass, usernum); // throws InputValidationError

  // request
  let url = config.url.login;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

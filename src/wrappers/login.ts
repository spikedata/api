import * as shapes from "../shapes";
import * as config from "../config/static";
import * as shared from "./shared";

export default (async function(APIKEY, USERKEY, site, user, pin, pass, usernum) {
  // inputs
  const inputs = shapes.getShape("client-gw/login").create(site, user, pin, pass, usernum); // throws InputValidationError

  // request
  const url = config.url.login;
  return await shared.request(APIKEY, USERKEY, url, inputs);
});

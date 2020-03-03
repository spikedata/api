const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, pdfPath, pass = undefined, buffer = undefined) {
  // inputs
  let inputs = shapes.getShape("client-gw/pdf").create(pdfPath, pass, buffer);

  // request
  let url = config.url.pdf;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

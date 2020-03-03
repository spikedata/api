const spikeApiPublic = require("../../../../spike-api-public/api");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, pdfPath, pass = undefined, buffer = undefined) {
  // inputs
  let inputs = spikeApiPublic.shape["client-gw/pdf"].create(pdfPath, pass, buffer);

  // request
  let url = config.url.pdf;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

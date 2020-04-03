const shapes = require("../shapes");
const config = require("../config/static");
const shared = require("./shared");

module.exports = async function(APIKEY, USERKEY, csvPath, buffer = undefined) {
  // inputs
  let inputs = shapes.getShape("client-gw/csv").create(csvPath, buffer);

  // request
  let url = config.url.csv;
  return await shared.request(APIKEY, USERKEY, url, inputs);
};

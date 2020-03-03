const config = require("./config");
const API = require("../../src/index");
require("../config/default");
config.log.host = "DEBUG.SANITIZER"; // NB: after require(config)

///////////////////////////////////////////////////////////////////////////////////////////////////
// Choose shape here:
///////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set `let debugFindNested = true;` in $/API/lib/common.js
let data = API.shape["gw-client/pdf/success/bank-statement-normal"];

///////////////////////////////////////////////////////////////////////////////////////////////////

let examples = Object.keys(data.examples);
for (let example of examples) {
  log.info("------------------------------");
  log.info(example);
  log.info("------------------------------");
  log.info(
    JSON.stringify(
      {
        sanitize: data.sanitize,
        example: data.examples[example],
      },
      null,
      2
    )
  );

  let sanitized = API.common.sanitize(data.sanitize, data.examples[example]);
  log.info("sanitized", JSON.stringify(sanitized, null, 2));
}

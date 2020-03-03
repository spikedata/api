const API = require("../../src/index");

///////////////////////////////////////////////////////////////////////////////////////////////////
// Choose shape here:
///////////////////////////////////////////////////////////////////////////////////////////////////

// NOTE: set `let debugFindNested = true;` in $/API/lib/common.js
let data = API.shape["gw-client/wrapper"];

///////////////////////////////////////////////////////////////////////////////////////////////////

let examples = Object.keys(data.examples);
for (let example of examples) {
  console.log("------------------------------");
  console.log(example);
  console.log("------------------------------");
  console.log(
    JSON.stringify(
      {
        validate: data.validate,
        example: data.examples[example],
        nestedSchemas: data.nestedSchemas,
      },
      null,
      2
    )
  );

  let errors = API.common.validateSchema(data.validate, data.examples[example], data.nestedSchemas);
  console.log("errors", JSON.stringify(errors, null, 2));
}

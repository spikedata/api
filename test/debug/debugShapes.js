// How to run:
//node $SPIKE_ROOT/spike-api-private/test/debug/debugShapes.js > shapes.json
// NOTE:
//  JSON.stringify will omit functions - e.g. create(), marshall(), ...
const API = require("../../src/index");
console.log(JSON.stringify(API.shape, null, 2));

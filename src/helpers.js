const Shapes = require("./shapes");
const Enums = require("./enums");

exports.isUserError = function(response) {
  let isError = Enums.TYPES.ERROR === response.type;
  if (!isError) return false;

  // check shape
  let shape = Shapes.getShape(response.code);
  return shape.blame == Enums.BLAME.USER;
};

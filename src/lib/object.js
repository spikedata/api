const merge = require("lodash.merge");

exports.mergeObjectsMutate = function(a, b) {
  merge(a, b);
};

exports.mergeObjectsClone = function(a, b) {
  let c = exports.clone(a);
  return merge(c, b);
};

exports.clone = function(a) {
  return merge({}, a);
};

const AjvExt = require("./ajvExt");
const core = require("./core");

exports.validate = function(schema, data, nestedSchemas) {
  if (schema === undefined) {
    throw new Error(`schema undefined`);
  }
  if (core.isFunction(schema)) {
    return schema(data);
  }
  const v = new AjvExt(schema);

  // check schema object for nestedSchemas
  if (nestedSchemas) {
    for (let nestedSchema of nestedSchemas) {
      v.addSchema(nestedSchema, nestedSchema.id); // NOTE: parent must use same .id for $ref
    }
  }

  // validation
  return v.validate(data);
};

exports.undefinedArrayItemsCheck = function(arrayData) {
  // json schema considers `undefined` to be a valid element in an array but not `null`
  // when undefined is serialized it is written as null
  // hence validation tests in banksy (spike-pdf) will pass but tests in gateway will fail (after serialize/deserialize)
  // solution = explicitly look for `undefined` in arrays in banksy
  let errors = [];
  arrayData.forEach((x, i) => {
    if (x === undefined) {
      errors.push(`[${i}] is undefined`);
    }
  });
  return errors;
};

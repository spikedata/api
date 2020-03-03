require("./jsonschemaExt"); // make sure that customFormats are loaded to Validator.prototype before next line
const Validator = require("jsonschema").Validator;
const core = require("./core");

exports.validate = function(schema, data, nestedSchemas) {
  if (schema === undefined) {
    throw new Error(`schema undefined`);
  }
  if (core.isFunction(schema)) {
    return schema(data);
  }
  const v = new Validator();

  // check schema object for nestedSchemas
  if (nestedSchemas) {
    for (let nestedSchema of nestedSchemas) {
      v.addSchema(nestedSchema, nestedSchema.id); // NOTE: parent must use same .id for $ref
    }
  }

  // validation
  let validation = v.validate(data, schema);

  // transform validation errors
  //return _.map(validation.errors, x => x.stack.replace(/instance./, ''));
  let errors = [];
  for (let x of validation.errors) {
    //log.info(x.stack);
    errors.push(x.stack.replace(/instance\.? ?/, ""));
  }
  return errors.length ? errors : undefined;
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

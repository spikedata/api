const Enums = require("../enums");
const Shapes = require("../shapes");
const Core = require("./core");
const ObjectUtil = require("./object");
const Schema = require("./schema");
const BadShapeError = require("./badShapeError");

//#region sanitize

exports.sanitize = function(sanitizer, data) {
  if (!sanitizer) {
    return data;
  }
  if (typeof sanitizer === "string" || sanitizer instanceof String) {
    return sanitizer;
  }
  if (Array.isArray(data)) {
    if (Array.isArray(sanitizer)) {
      // sanitize each element
      if (sanitizer.length !== 1) {
        throw new Error(
          "invalid each-element sanitizer - must be single element array: " +
            JSON.stringify(sanitizer)
        );
      }
      let arrayClone = [];
      for (let d of data) {
        arrayClone.push(exports.sanitize(sanitizer[0], d));
      }
      return arrayClone;
    } else if (Core.isFunction(sanitizer)) {
      return sanitizer(data);
    } else {
      throw new Error("can't sanitize array data: " + JSON.stringify(data));
    }
  }
  if (Core.isFunction(sanitizer)) {
    return sanitizer(data);
  }
  if (Core.isObject(sanitizer)) {
    return ObjectUtil.mergeObjectsClone(data, sanitizer);
  }
  return data;
};

// NOTE: currently works for all wrapperShapes which have a .code to identify the .data shape
// NOTE: assume validate already called on wrapperShape - i.e. both wrapper and wrapper.data are valid
exports.sanitizeWrapped = function(wrapperShape, wrappedInstance) {
  if (wrapperShape.type === Enums.TYPES.ERROR) {
    return wrappedInstance; // don't need to sanitize errors
  }
  let shape = Shapes.getShape(wrappedInstance.code);
  if (shape.composer) {
    // NOTE: composed objects like [login-interim-input/abs-pass] shouldn't use sanitizeWrapped
    // because the sanitizer & validater on composed objects refers to the whole instance - not the wrapped .data
    throw new Error(`don't sanitizeWrapped composed objects: ${wrappedInstance.code}`);
  }
  if (shape.sanitize) {
    // return wrapper[sanitized(wrapped.data)]
    let sanitized = exports.sanitize(shape.sanitize, wrappedInstance.data);
    return Object.assign({}, wrappedInstance, { data: sanitized }); // clone wrapper and replace .data with sanitized data
  }
  return wrappedInstance;
};

// NOTE: currently works for all composerShapes which have a .code to identify the .data shape
// NOTE: assume validate already called on composerShape - i.e. both composer and composer.data are valid
exports.sanitizeComposed = function(composerShape, composedInstance) {
  if (composerShape.type === Enums.TYPES.ERROR) {
    return composedInstance; // don't need to sanitize errors
  }
  let shape = Shapes.getShape(composedInstance.code);
  if (!shape.composer) {
    throw new Error(`sanitizeComposed not a composed object: ${composedInstance.code}`);
  }
  if (shape.ownSanitize) {
    // return composer[sanitized(composed.data)]
    let sanitized = exports.sanitize(shape.ownSanitize, composedInstance.data);
    return Object.assign({}, composedInstance, { data: sanitized }); // clone composer and replace .data with sanitized data
  }
  return composedInstance;
};

//#endregion

//#region validate

exports.validateShape = function(shape, data) {
  let schema = shape.validate;
  if (!schema) {
    return undefined;
  }
  return Schema.validate(shape.code, schema, data, shape.nestedSchemas);
};

exports.validateWrapped = function(wrapperShape, wrappedInstance) {
  if (wrapperShape.type === Enums.TYPES.ERROR) {
    return; // don't need to validate errors
  }
  let wrapperSchema = wrapperShape.wrapperSchema;
  let wrapperCode = wrapperShape.code;

  // validate wrapper
  let wrapperErrors = Schema.validate(wrapperCode, wrapperSchema, wrappedInstance);
  if (wrapperErrors && wrapperErrors.length) {
    log.fatal(`${wrapperCode}[${wrappedInstance.code}] validate - invalid wrapper`, wrapperErrors);
    throw new Error("validate error - invalid wrapper");
  }

  // lookup wrapped shape
  let shape = Shapes.getShape(wrappedInstance.code);
  if (shape.composer) {
    // NOTE: composed objects like [login-interim-input/abs-pass] shouldn't use validateWrapped
    // because the sanitizer & validater on composed objects refers to the whole instance - not the wrapped .data
    throw new Error(`don't validateWrapped composed objects: ${wrappedInstance.code}`);
  }

  // validate wrapped shape
  let schema = shape.validate;
  if (!schema) {
    return true;
  }
  let errors = Schema.validate(shape.code, schema, wrappedInstance.data, shape.nestedSchemas);
  if (errors && errors.length) {
    log.fatal(`${wrapperCode}[${wrappedInstance.code}] validate - invalid wrapped.data`, errors);
    throw new Error("validate error - invalid wrapped.data");
  }
};

//#endregion

//#region marshall

exports.marshall = function(spikeReq, wrapperShape, inputCode, inputData) {
  let inputShape = Shapes.getShape(inputCode);

  let outputShape, outputData, outputCode;
  if (inputShape.marshallTo) {
    if (Core.isFunction(inputShape.marshallTo)) {
      outputData = inputShape.marshallTo(spikeReq, inputCode, inputData);
    } else {
      outputCode = inputShape.marshallTo;
      outputShape = Shapes.getShape(outputCode);
      if (!outputShape.marshallFrom) {
        throw new BadShapeError(
          `${wrapperShape.code}.marshall: bad shape ${inputCode}.marshallTo shape is missing ${outputCode}.marshallFrom()`
        );
      }
      outputData = outputShape.marshallFrom(spikeReq, inputCode, inputData);
    }
  } else if (inputShape.passThrough) {
    outputShape = inputShape;
    outputCode = inputCode;
    outputData = inputData;
  } else {
    throw new BadShapeError(
      `${wrapperShape.code}.marshall: bad shape ${inputCode} missing .passThrough or .marshallTo`
    );
  }

  return {
    outputShape,
    outputCode,
    outputData,
  };
};

//#endregion

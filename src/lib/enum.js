const core = require("./core");

exports.nameKey = "__name"; // reserved key name

exports.Enum = {
  equal(x, y) {
    // convert x,y to numbers
    try {
      if (!Number.isInteger(x)) {
        x = this.fromString(x);
      }
      if (!Number.isInteger(y)) {
        y = this.fromString(y);
      }
    } catch (e) {
      return false;
    }
    return x === y;
  },

  toString(x) {
    if (x === undefined) {
      return x;
    }
    if (core.isString(x)) {
      return x;
    }
    let all = Object.entries(this);
    for (let a of all) {
      if (a[1] === x) {
        return a[0];
      }
    }
    throw new Error(this[exports.nameKey] + ".toString invalid value", x);
  },

  fromString(x) {
    if (x === undefined) {
      return x;
    }
    if (Number.isInteger(x)) {
      return x;
    }
    let all = Object.entries(this);
    for (let a of all) {
      if (a[0] === x) {
        return a[1];
      }
    }
    throw new Error(this[exports.nameKey] + ".fromString invalid key", x);
  },

  keys() {
    return (
      Object.entries(this)
        .filter(x => x[0] !== exports.nameKey)
        //.filter(x => Number.isInteger(x[1]))
        .map(x => x[0])
    );
  },

  values() {
    // return Object.values(this).filter(Number.isInteger);
    return (
      Object.entries(this)
        .filter(x => x[0] !== exports.nameKey)
        //.filter(x => Number.isInteger(x[1]))
        .map(x => x[1])
    );
  },

  validKey(k) {
    return this.hasOwnProperty(k);
  },

  validValue(v) {
    return this.values().indexOf(v) !== -1;
  }
};

exports.createEnum = function(name, keyValues) {
  if (Object.keys(keyValues).indexOf(exports.nameKey) !== -1) {
    throw new Error(`createEnum(${name}) contains reserved key: ${exports.nameKey}`);
  }
  let e = Object.create(exports.Enum);
  e[exports.nameKey] = name;
  return Object.assign(e, keyValues);
};

const enums = require("../enums");
const Schema = require("../lib/schema");
const InputValidationError = require("../lib/inputValidationError");

exports.code = "login";
exports.type = enums.TYPES.INPUTS;
exports.marshallTo = "gw-lambda/lchan/login";
exports.channel = enums.Channel.Lchan;
exports.sessionBased = true;
exports.firstRequestInSession = true;

//#region examples

exports.examples = {
  "ABS.0": {
    site: "ABS.0",
    user: "username",
    pin: "pin",
    usernum: 1,
  },
  "CAP.0": {
    site: "CAP.0",
    user: "username",
    pass: "password",
  },
  "FNB.0": {
    site: "FNB.0",
    user: "username",
    pass: "password",
  },
  "NED.0": {
    site: "NED.0",
    user: "username",
    pass: "password",
    pin: "pin",
  },
  "RMB.0": {
    site: "RMB.0",
    user: "username",
    pass: "password",
  },
  "STD.2018-01": {
    site: "STD.2018-01",
    user: "username",
    pass: "password",
  },
};

//#endregion

//#region create

exports.create = function(site, user, pin, pass, usernum) {
  let instance = { site, user, pin, pass, usernum };
  let errors = Schema.validate(exports.code, exports.validate, instance, exports.nestedSchemas);
  if (errors) {
    throw new InputValidationError(errors);
  }
  return instance;
};

//#endregion

//#region validate

// For swagger definition - not used by validate()
exports.schema = {
  type: "object",
  properties: {
    site: {
      type: "string",
      required: true,
    },
    user: {
      type: "string",
      required: true,
    },
    pin: {
      type: "string",
    },
    usernum: {
      type: "string",
    },
  },
};

exports.validate = function(data) {
  let validationErrors = [];
  if (!data.site) {
    validationErrors.push("missing required input: site");
  } else {
    switch (data.site) {
      case "ABS.0": {
        if (!data.user)
          validationErrors.push("missing required input: user = Access account number");
        // NOTE: .pass is provided in /login-interim-input
        // if (data.pass)
        //   validationErrors.push(
        //     "additional input: pass = Password must not be supplied"
        //   );
        if (!data.pin) validationErrors.push("missing required input: pin");
        if (!data.usernum) {
          validationErrors.push("missing required input: usernum = User number");
        } else {
          let usernumstr = data.usernum.toString();
          if (usernumstr.match(/[^0-9]/) || parseInt(usernumstr) <= 0 || parseInt(usernumstr) > 9) {
            log.fatal("ABSA usernum is not an integer between 1 and 9");
            validationErrors.push("usernum should be an integer between 1 and 9");
          }
        }
        break;
      }
      case "CAP.0": {
        if (!data.user) validationErrors.push("missing required input: user = Username");
        if (!data.pass) validationErrors.push("missing required input: pass = Password/Remote PIN");
      }
      // eslint-disable-next-line no-fallthrough
      case "RMB.0":
      case "FNB.0": {
        if (!data.user) validationErrors.push("missing required input: user = Username");
        if (!data.pass) validationErrors.push("missing required input: pass = Password");
        break;
      }
      case "NED.0": {
        if (!data.user) validationErrors.push("missing required input: user = Profile number");
        if (!data.pass) validationErrors.push("missing required input: pass = Password");
        if (!data.pin) validationErrors.push("missing required input: pin");
        break;
      }
      case "STD.2018-01": {
        if (!data.user) validationErrors.push("missing required input: user = Email address");
        if (!data.pass) validationErrors.push("missing required input: pass = Password");
        break;
      }
      default:
        validationErrors.push("unknown site: " + data.site);
        break;
    }
  }

  return validationErrors.length === 0 ? undefined : validationErrors;
};

//#endregion

//#region sanitize

// NOTE: custom sanitizer used so that .pin & .pass are not added when they haven't been supplied
exports.sanitize = function(data) {
  let clone = Object.assign({}, data);
  if (clone.pin) clone.pin = "***";
  if (clone.pass) clone.pass = "***";
  return clone;
};

//#endregion

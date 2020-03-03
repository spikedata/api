const crypto = require("crypto");
const uuidv4 = require("uuid/v4");

let _testUuidCount = 0;
exports.testUuid = function() {
  return exports.mockRequestId(_testUuidCount++);
};

// https://stackoverflow.com/questions/19989481/how-to-determine-if-a-string-is-a-valid-v4-uuid
// uuid/v4 = xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx where x is any hexadecimal digit and y is one of 8, 9, A, or B.
exports.dummyUuidV4 = "00000000-0000-4000-a000-000000000000";

// From C:\dev\aws\lambci\awslambda\build\Release\awslambda.js
// Approximates the look of a v1 UUID
exports.fakeUuid = function() {
  return (
    crypto.randomBytes(4).toString("hex") +
    "-" +
    crypto.randomBytes(2).toString("hex") +
    "-" +
    crypto
      .randomBytes(2)
      .toString("hex")
      .replace(/^./, "1") +
    "-" +
    crypto.randomBytes(2).toString("hex") +
    "-" +
    crypto.randomBytes(6).toString("hex")
  );
};

exports.mockRequestId = function(testCount) {
  let pad = "000000000000";
  let padCount = (pad + testCount).slice(-pad.length);
  let id = "00000000-0000-4000-a000-" + padCount;
  return id;
};

exports.mockLambdaId = function(testCount) {
  let pad = "000000000000";
  let padCount = (pad + testCount).slice(-pad.length);
  let id = "99999999-0000-4000-a000-" + padCount;
  return id;
};

exports.uuid = function() {
  return uuidv4();
};

exports.uuidLength = function() {
  return exports.uuid().length;
};

exports.randomAccountId = function() {
  return String(0x100000000 * Math.random());
};

//const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i; // https://gist.github.com/bugventure/f71337e3927c34132b9a
const uuidV4Regex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
exports.validUuidV4 = function(s) {
  return uuidV4Regex.test(s);
};

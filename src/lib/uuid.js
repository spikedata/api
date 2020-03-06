let _testUuidCount = 0;
exports.testUuid = function() {
  return exports.mockRequestId(_testUuidCount++);
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

exports.randomAccountId = function() {
  return String(0x100000000 * Math.random());
};

//const uuidV4Regex = /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i; // https://gist.github.com/bugventure/f71337e3927c34132b9a
const uuidV4Regex = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;
exports.validUuidV4 = function(s) {
  return uuidV4Regex.test(s);
};

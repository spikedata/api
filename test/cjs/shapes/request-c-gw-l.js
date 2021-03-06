const chai = require("chai");
const chaiUuid = require("chai-uuid");
const API = require("../../../build/main/index");
const uuid = require("../../../build/main/lib/uuid");

/**
 * GOAL: simulate the logic which is occurring inside GW when request is received from Client and must be marshalled / passed to Lambda
 */

//#region chai setup

const { expect, assert } = chai;
chai.use(chaiUuid);

//#endregion

// InternalTest
let _clientId = "InternalTest";
let _apiKey = "91502218-bb45-4a69-bb7c-36c6c25dd87a";
let _userKey = "41032ed6-a5d1-4ac9-93cc-5f717758517a";

describe("full request pipeline = client-gw-lambda", function() {
  let shapes = Object.keys(API.shape).filter((x) => x.startsWith("client-gw"));
  // let shapes = Object.keys(API.shape).filter(x => x.startsWith("client-gw/login"));
  // log.info(JSON.stringify(shapes, null, 2));

  for (let shape of shapes) {
    let clientGwShape;
    let clientGwCode = shape;
    let clientGwInstance;

    let gwLambdaShape;
    let gwLambdaCode;
    let gwLambdaInstance;

    clientGwShape = API.shape[clientGwCode];
    if (!clientGwShape.code) {
      log.info(JSON.stringify(clientGwShape, null, 2));
      assert.fail(true, false, `${clientGwCode}.code missing`); // throws
    }

    // NOTE:
    //  req1 = gw-lambda/lchan/inputs and marshall
    //  req2 = gw-lambda/bchan/composer and passThrough

    let testname = `${clientGwCode} request pipeline`;
    it(testname, async function() {
      try {
        // if (shape === "client-gw/login-interim-input/abs-pass") {
        //   debugger;
        // }

        if (!clientGwShape.examples && !clientGwShape.noData) {
          throw new Error(`${clientGwCode} missing .examples`);
        }

        if (clientGwShape.noData) {
          ({ gwLambdaInstance, gwLambdaShape } = transform(
            uuid.testUuid(),
            _clientId,
            _apiKey,
            _userKey,
            clientGwShape,
            undefined
          ));
          gwLambdaCode = gwLambdaShape.code;
        } else {
          let examples = Object.keys(clientGwShape.examples);
          for (let example of examples) {
            // validate client-gw shape
            clientGwInstance = clientGwShape.examples[example];
            API.common.validateShape(clientGwShape, clientGwInstance);

            // marshall or decompose to gw-lambda shape
            ({ gwLambdaInstance, gwLambdaShape } = transform(
              uuid.testUuid(),
              _clientId,
              _apiKey,
              _userKey,
              clientGwShape,
              clientGwInstance
            ));
            gwLambdaCode = gwLambdaShape.code;

            // validate gw-lambda shape
            // log.fatal(
            //   "gw-lambda " + API.enums.Channel.toString(clientGwShape.channel),
            //   JSON.stringify(gwLambdaShape, null, 2)
            // );
            // LCHAN = "gw-lambda/lchan/inputs".validate()
            // BCHAN = "gw-lambda/bchan/composer".validate()
            let errors = API.common.validateShape(gwLambdaShape, gwLambdaInstance);
            expect(errors).to.be.undefined;
          }
        }
      } catch (ex) {
        log.error("Exception", ex);
        log.error(clientGwCode, clientGwShape && JSON.stringify(clientGwShape, null, 2));
        log.error(gwLambdaCode, gwLambdaShape && JSON.stringify(gwLambdaShape, null, 2));
        if (global.runtype === global.RUNTYPE.Mocha) {
          assert.fail(true, false, ex.message);
        }
      }
    });
  }
});

function transform(requestId, clientId, apiKey, userKey, clientGwShape, clientGwInstance) {
  if (clientGwShape.channel === API.enums.Channel.Lchan) {
    return API.gw.microservice.lchanInstance(
      requestId, // /pdf & /login use first http requestId as sessionId
      requestId,
      clientId,
      apiKey,
      userKey,
      "192.168.0.1",
      "5000",
      clientGwShape,
      clientGwInstance
    );
  } else {
    return API.gw.microservice.bchanInstance(requestId, clientGwShape, clientGwInstance);
  }
}

import chai from "chai";
import chaiUuid from "chai-uuid";
import * as API from "../../../src/index";

//#region chai setup

const { expect, assert, AssertionError } = chai;
chai.use(chaiUuid);

//#endregion

describe("gw-client validaters", function() {
  const codes = Object.keys(API.shape).filter((x) => x.startsWith("gw-client"));
  // let debugCode = undefined; // "gw-client/pdf/success/bank-statement-normal"; // uncomment and set shape ID to debug shape
  for (const code of codes) {
    const testname = `validate ${code}`;
    it(testname, async function() {
      const shape = API.shape[code];
      try {
        // can skip no data
        if (shape.noData) {
          expect(shape.examples).to.be.undefined;
          return;
        }

        //if (shape === "xx") {
        // debugger;
        //}

        // make sure we have a default example
        expect(shape.examples).to.not.be.undefined;
        const examples = Object.keys(shape.examples);
        for (const example of examples) {
          const instance = shape.examples[example];
          if (shape.validate) {
            // if (code === debugCode) {
            //   debugger;
            // }
            const errors = API.common.validateShape(shape, instance);
            if (errors) {
              // debugger;
              log.error(
                `shape ${code}:\n instance ${example}: ${JSON.stringify(
                  instance,
                  null,
                  2
                )}\n validation errors: ${JSON.stringify(errors, null, 2)}`
              );
            }
            expect(errors).to.be.undefined;
          } else {
            log.warn(`${code}: does not have a .validate`);
          }
        }
      } catch (ex) {
        // log exceptions except for expect() exceptions above
        if (ex instanceof AssertionError) {
          throw ex;
        }
        log.error("Exception", ex);
        // log.error(code, shape && JSON.stringify(shape, null, 2));
        if (global.runtype === global.RUNTYPE.Mocha) {
          assert.fail(true, false, ex.message);
        }
      }
    });
  }
});

describe("gw-client sanitizers", function() {
  /* */

  // Just doing one or two manually - these tests will be brittle

  it("sanitize pdf/success/bank-statement-normal", async function() {
    const shape = API.shape["gw-client/pdf/success/bank-statement-normal"];
    expect(shape.examples).to.not.be.undefined;
    const examples = Object.keys(shape.examples);
    for (const example of examples) {
      const instance = shape.examples[example];
      const sanitized = API.common.sanitize(shape.sanitize, instance);
      // log.info(example, sanitized);
      expect(sanitized).to.nested.include({
        "statement.nameAddress": "[redacted]",
      });
    }
  });

  /* */
});

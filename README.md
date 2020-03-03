# Spike API

Helper lib to access Spike API. See full [docs](https://app.spikedata.co.za/docs/code/) online.

See the following samples which demonstrate how to use the Spike API:

- [@spikedata/sample-simple](https://www.npmjs.com/package/@spikedata/sample-simple)
  - runs all web functions using hardcoded login credentials
- [@spikedata/sample-text-ui](https://www.npmjs.com/package/@spikedata/sample-text-ui)
  - a command-line app which prompts you to enter login credentials
- [@spikedata/sample-web-ui](https://www.npmjs.com/package/@spikedata/sample-web-ui)
  - a web app which prompts you to enter login credentials

## Features

- there's a wrapper function for each api end point
  - `/pdf`
  - `/login`
  - etc...
- each wrapper implements the following features
  - inputs as function args
  - will validate the inputs and throw `InputValidationError` if invalid
  - will send request to spike-api and handle following results:
    1. network connection issue - e.g. timeout, no network etc... (`no response`)
    1. non-200 http status - e.g. 413 too large or server exception (`bad response`)
    1. spike response received - which could be either of (1) success || success with warn (2) error (`good response`)
  - hence caller must handle these 3 results
- must support
  - browser (esm and umd = CDN)
  - node (cjs)
- other
  - keep in same code base as various private stuff - e.g. swagger generator
  - testing via shape testing
  - shapeExplorer
  - change `server` - api-v6 vs localhost = only in dev

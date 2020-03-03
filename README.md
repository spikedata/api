# Spike API

Helper lib to access Spike API. See full [docs](https://app.spikedata.co.za/docs/code/) online.

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

## Review

api

- functions wrappers
  - .pdf, .login, ...
  - throw exceptions
    - input validation
    - net connection error (e.g. down, timeout)
    - http status error (e.g. 413 too big)

additional

- enums
  - types,
  - functions, siteToFunction
  - sites, blame, parsers
- shapes, validation
- shapeExplorer
  - for each function
    - list all ins/outs
    - including examples

deps

- requests = axios
- jsonschema validation = ajv

internal

- init, config, logging
- unittests
  - BAD_SHAPE = check we've created our shapes correctly
- local dev
  - change server to localhost
    - use `version.js`
  - apikey/userkey
    - [script](/spike/dev/spike-db/patches/2020-02-27 - ilan apikey.sql)

## log/notes

- [axios prototype](../../../prototype/request/src/axios.js)
- up/down scripts
  - [up](/spike/dev/spike-scripts/net/up.sh)
  - [down](/spike/dev/spike-scripts/net/down.sh)
- refactor spike-api-public
  - no init(), config, global, DEBUG, DEBUG_PLUMBING, BAD_SHAPE
  - DEBUG_PLUMBING = was "do shape validation" - changed to do validation everywhere
  - BAD_SHAPE - was 2 things:
    - ShapeNotFoundError = getShape() throws this now
    - BadShapeError = shape instance class not properly defined
  - rename InputValidationError = ValidationError (applies to ins and outs)
  - remove init({prod}) = was used to DEBUG_PLUMBING which is always on now
  - remove init() & config all together = still need to configure { server url, api/userkey }
  - run shape unittests

other

- web - create shapes properly
  - create shape [gw-client/accounts]
  - /spike/dev/spike-web/src/NED.0/accounts.js
  - do InputValidationError checks on create
- refactor spike-api-public & private to have linting & spike-seed-simple structure
- typescript
  - .d.ts = see axios.d.ts example
  - also [Ben Awad: intro to typescript video](https://youtu.be/1UcLoOD1lRM?t=461) - where he adds missing types: `@types/shortid.ts`
- salvage isomorphic notes? from [webpack.md](../../spike-docs/notes/webpack.md)

todo

- ~~refactor spike-api-public~~
- web-scraper sample
  - like abs.sh
  - remove init({server { url, keys }})
- browser
  - drag n drop pdf sample
  - module bundles
    - .esm, .umd = use rollup = see [coderealm youtube](https://www.youtube.com/watch?v=K1RE9FspKxw)
    - checkout .mjs medium post
  - isomorphic validation
    - replace jsonschema with ajv
    - need to figure out how to do custom extensions - e.g. /spike/dev/spike-api-public/lib/jsonschemaExt.js => required from /spike/dev/spike-api-public/lib/common.js
- npm publish
  - npm org
    - so we can have `@spike/api`
    - https://docs.npmjs.com/orgs/
    - https://www.npmjs.com/products/pro#get-started
- refactor users to use module
  - users: spike-api/client, samples, tests
  - npm link - digitalocean

```sh
$ npm owner ls dec_smc
spike <karthik.c@lnttechservices.com>
```

- file/success
- estatement/success
- statements/success
  - /spike/dev/spike-api-public/function/statements.js
- \*/success-zip

* check banksy unittests still work (NB return code estatement/success & statments/success changed to file/success)
* re-export swagger
* /spike/dev/spike-db/src/lib/billing.js
  - patch all `billing.responseCode`s? (e)statement(s)/success(-zip) => file/success
* .git - remove and re-init - absa and fnb pass are in git history

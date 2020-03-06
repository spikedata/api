import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";

// Note: CDN version number is in path not filename e.g.
// - https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.10/lodash.js
// - https://cdn.jsdelivr.net/npm/riot@3.6/riot.js
const file = "dist/cdn/spike-api.js";

export default {
  input: "./src/module.mjs",
  // input: "browser.mjs",
  output: [
    {
      name: "SpikeApi",
      file,
      format: "iife",
      sourcemap: true,
      // NOTE: fs & path aren't used in browser code
      //  - fs/path only used when file path is supplied to wrappers.pdf()
      //  - browser code should supply a base64 encoded string
      globals: { fs: "null", path: "null" },
    },
  ],
  external: ["fs", "path"], // include module deps in iife bundle: ajv, axios, lodash.merge, uuid
  plugins: [
    babel({
      exclude: ["node_modules/**"],
      externalHelpers: false,
      runtimeHelpers: true,
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
    json(),
  ],
};

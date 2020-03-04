import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

let file = pkg.browser.replace(/\.js/, ".iife.js");

export default {
  input: "./src/module.mjs",
  // input: "browser.mjs",
  output: [
    {
      name: "SpikeApi",
      file,
      format: "iife",
      sourceMap: true,
      // NOTE: fs & path aren't used in browser code
      //  - fs/path only used when file path is supplied to wrappers.pdf()
      //  - browser code should supply a base64 encoded string
      globals: { fs: "null", path: "null", url: "null" },
    },
  ],
  external: ["fs", "path", "url"], // includes deps in bundle: ajv, axios, lodash.merge, uuid
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
  ],
};

import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

// see: rollup-starter-lib/rollup.config.js

const builtins = ["fs", "path"];
const disabledBuiltins = {
  fs: "null",
  path: "null",
};
const external = builtins.concat(Object.keys(pkg.dependencies));

export default [
  // CommonJS (for Node) and ES module (for bundlers) build
  {
    input: "./src/module.mjs",
    output: [
      {
        file: "dist/spike-api.cjs.js", // pkg.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      babel({
        exclude: ["node_modules/**"],
        externalHelpers: false,
        runtimeHelpers: true,
      }),
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      json(),
    ],
  },
  // browser - umd build for cdn
  {
    input: "./src/module.mjs",
    output: [
      {
        name: "SpikeApi",
        file: pkg.browser,
        format: "umd",
        sourcemap: true,
        // NOTE: fs & path aren't used in browser code
        //  - fs/path only used when file path is supplied to wrappers.pdf()
        //  - browser code must supply a base64 encoded string
        globals: disabledBuiltins,
      },
    ],
    external: builtins, // include module deps in umd bundle: ajv, axios, lodash.merge, uuid
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
  },
];

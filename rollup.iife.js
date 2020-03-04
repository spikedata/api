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
      globals: { fs: "window", path: "window", url: "window" },
    },
  ],
  external: ["fs", "path", "url"],
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

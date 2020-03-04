import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

export default {
  input: "./src/module.mjs",
  // input: "browser.mjs",
  output: [
    {
      file: pkg.browser,
      format: "cjs",
      sourceMap: true,
    },
  ],
  external: ["fs", "path", "crypto", "util", "url"],
  plugins: [
    babel({
      exclude: ["node_modules/**", "../node_modules/**"],
      externalHelpers: false,
      runtimeHelpers: true,
    }),
    resolve({
      browser: true,
    }),
    commonjs(),
  ],
};

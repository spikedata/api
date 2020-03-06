import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

import pkg from "./package.json";

const external = ["fs", "path", "crypto", "util", "url"].concat(Object.keys(pkg.dependencies));

export default {
  input: "./src/module.mjs",
  output: [
    {
      file: pkg.main,
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
      exclude: ["node_modules/**", "../node_modules/**"],
      externalHelpers: false,
      runtimeHelpers: true,
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
  ],
};

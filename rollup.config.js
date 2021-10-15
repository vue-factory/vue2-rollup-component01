import vuePlugin from "rollup-plugin-vue";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: {
    file: "lib/index.umd.js",
    format: "umd",
    name: "vue-plugins",
  },
  plugins: [
    vuePlugin(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
};

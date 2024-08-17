const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");
const babel = require("@rollup/plugin-babel").babel;
const path = require("path");
const pkg = require("./package.json");

const { dependencies } = pkg;

module.exports = {
	input: "./src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "cjs",
			inlineDynamicImports: true,
		},
		{
			file: "dist/index.esm.js",
			format: "es",
			inlineDynamicImports: true,
		},
	],
	external: Object.keys(dependencies),
	plugins: [
		resolve({ preferBuiltins: true }),
		babel({ babelHelpers: "bundled" }),
		commonjs(),
		typescript({
			tsconfig: path.resolve(__dirname, "tsconfig.json"),
		}),
		terser(),
	],
};

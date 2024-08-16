const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");
const { dependencies } = require("./package.json");

module.exports = {
	input: "./src/index.ts",
	output: {
		file: "dist/index.js",
		format: "es",
		inlineDynamicImports: true,
	},
	external: Object.keys(dependencies),
	plugins: [
		resolve({ preferBuiltins: true }),
		commonjs(),
		typescript(),
		terser(),
	],
};

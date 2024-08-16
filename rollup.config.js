const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const terser = require("@rollup/plugin-terser");

module.exports = {
	input: "./src/index.ts",
	output: [
		{
			file: "dist/index.js",
			format: "cjs",
			sourcemap: true,
		},
		{
			file: "dist/index.esm.js",
			format: "es",
			sourcemap: true,
		},
	],
	plugins: [
		resolve({ preferBuiltins: true }),
		commonjs(),
		typescript(),
		terser(),
	],
};

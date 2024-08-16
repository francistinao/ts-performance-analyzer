import * as ts from "typescript";

export const compileCodeBlock = (code: string): string => {
	const result = ts.transpileModule(code, {
		compilerOptions: {
			module: ts.ModuleKind.CommonJS,
			target: ts.ScriptTarget.ES2015,
			esModuleInterop: true,
		},
	});
	return result.outputText;
};

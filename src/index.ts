import ts, { Node, SourceFile } from "typescript";
import { PerformanceReport, FunctionPerformanceReport } from "./types/global";
import path from "path";
import fs from "fs";
import { getTotalMemoryUsed, getTotalTimeScore } from "./libs/performance";
import {
	extractFunctionCode,
	createFunctionFromCode,
} from "./helpers/extract.helper";
import { compileCodeBlock } from "./helpers/compile.helper";

export default class TypeScriptPerformanceAnalyzer {
	private program: ts.Program;

	constructor(private projectDir: string) {
		this.program = ts.createProgram([`${projectDir}/src/**/*.ts`], {});
	}

	analyze(): PerformanceReport {
		const start = process.hrtime();
		const sourceFiles = this.program.getSourceFiles();
		let totalLines = 0;
		let totalTypes = 0;

		sourceFiles.forEach((sourceFile: SourceFile) => {
			const fileLines =
				sourceFile.getLineAndCharacterOfPosition(sourceFile.getEnd()).line + 1;
			totalLines += fileLines;

			const typeChecker = this.program.getTypeChecker();
			ts.forEachChild(sourceFile, (node: Node) => {
				const type = typeChecker.getTypeAtLocation(node);
				if (type) {
					totalTypes++;
				}
			});
		});

		const [seconds, nanoseconds] = process.hrtime(start);
		const typeCheckingTime = seconds * 1000 + nanoseconds / 1000000;

		return {
			totalFiles: sourceFiles.length,
			totalLines,
			totalTypes,
			typeCheckingTime,
			suggestions: this.generateSuggestions(totalTypes, typeCheckingTime),
		};
	}

	private generateSuggestions(
		totalTypes: number,
		typeCheckingTime: number
	): string[] {
		const MINIMUM_OPTIMAL_TIME = 1000;
		const MINIMUM_OPTIMAL_TYPES = 10000;

		const suggestions: string[] = [];
		if (typeCheckingTime > MINIMUM_OPTIMAL_TIME) {
			suggestions.push(
				"⏰ Consider splitting large files to reduce type-checking time"
			);
		}
		if (totalTypes > MINIMUM_OPTIMAL_TYPES) {
			suggestions.push(
				"🧹 Try to simplify complex types or reduce the number of types."
			);
		}
		return suggestions;
	}

	async functionPerformance(
		projectDir: string,
		filePath: string,
		functionName: string
	): Promise<FunctionPerformanceReport> {
		let totalTime = 0;
		let totalSpace = "";

		const file = path.join(projectDir, filePath);

		if (!fs.existsSync(file)) {
			throw new Error(`File ${filePath} does not exist`);
		}

		fs.readFile(file, (err, data) => {
			if (data.length === 0) {
				throw new Error(
					`File ${filePath} is empty`,
					err as unknown as ErrorOptions
				);
			}
		});

		try {
			const fileContent = fs.readFileSync(file, "utf8");

			const lines = fileContent.split("\n");

			try {
				const tsFoo = extractFunctionCode(lines, functionName);
				const jsFoo = compileCodeBlock(tsFoo);
				const testFoo = createFunctionFromCode(jsFoo);

				totalTime = await getTotalTimeScore(testFoo);

				totalSpace = await getTotalMemoryUsed(testFoo);
			} catch (err) {
				console.log(err);
				return Promise.reject(
					new Error(`Error evaluating function`, err as unknown as ErrorOptions)
				);
			}

			return {
				totalTime,
				totalSpace,
			};
		} catch (err) {
			throw new Error(`Error in function performance analysis: ${err}`);
		}
	}
}

import ts, { Node, SourceFile } from "typescript";
import {
	PerformanceReport,
	FunctionCheckingParams,
	FunctionPerformanceReport,
} from "../types/global";

export class TypeScriptPerformanceAnalyzer {
	private program: ts.Program;

	constructor(private projectDir: string) {
		this.program = ts.createProgram([`${projectDir}/src/**/*.ts`], {});
	}

	/**
	 *
	 * Consider number of files, code lines inside the files, and types being used
	 *
	 * Addon soon: Function checker and performance testing
	 *
	 * Create method for function performance checker
	 *
	 */
	analyze(): PerformanceReport {
		const start = process.hrtime();
		const sourceFiles = this.program.getSourceFiles();
		let totalLines = 0;
		let totalTypes = 0;

		// access through each files in the directory
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
		const MINIMUM_OPTIMAL_TIME = 1000; //in milliseconds
		const MINIMUM_OPTIMAL_TYPES = 10000; //number of types

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

	//wip
	private async functionPerformance({
		filePath,
		functionName,
	}: FunctionCheckingParams): Promise<FunctionPerformanceReport> {
		let totalTime = 0;
		let totalSpace = 0;

		return {
			totalTime,
			totalSpace,
		};
	}
}

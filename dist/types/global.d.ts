export interface PerformanceReport {
	totalFiles: number;
	totalLines: number;
	totalTypes: number;
	typeCheckingTime: number;
	suggestions?: string[];
}

export interface FunctionPerformanceReport {
	totalTime: number;
	totalSpace: string;
}

declare class TypeScriptPerformanceAnalyzer {
	constructor(projectDir: string);
	analyze(): PerformanceReport;
	generateSuggestions(): string[];
	functionPerformance(): Promise<FunctionPerformanceReport>;
}
export default TypeScriptPerformanceAnalyzer;

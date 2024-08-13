export interface PerformanceReport {
	totalFiles: number;
	totalLines: number;
	totalTypes: number;
	typeCheckingTime: number;
	suggestions?: string[];
}

export interface FunctionCheckingParams {
	filePath: string;
	functionName: string;
}

export interface FunctionPerformanceReport {
	totalTime: number;
	totalSpace: number;
}

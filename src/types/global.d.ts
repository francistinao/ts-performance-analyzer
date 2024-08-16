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

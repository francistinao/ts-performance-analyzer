import { PerformanceReport, FunctionPerformanceReport } from "./types/global";
export default class TypeScriptPerformanceAnalyzer {
    private projectDir;
    private program;
    constructor(projectDir: string);
    analyze(): PerformanceReport;
    private generateSuggestions;
    functionPerformance(projectDir: string, filePath: string, functionName: string): Promise<FunctionPerformanceReport>;
}
//# sourceMappingURL=index.d.ts.map
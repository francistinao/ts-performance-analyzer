import { TypeScriptPerformanceAnalyzer } from "./utils/analyzer.util";

const analyzer = new TypeScriptPerformanceAnalyzer(__dirname);
const report = analyzer.analyze();

console.log("Performance Report:");
console.log(`Total Files: ${report.totalFiles}`);
console.log(`Total Lines: ${report.totalLines}`);
console.log(`Total Types: ${report.totalTypes}`);
console.log(`Type Checking Time: ${report.typeCheckingTime}ms`);

if (report.suggestions && report.suggestions.length > 0) {
	console.log("Suggestions:");
	report.suggestions.forEach((suggestion: string) =>
		console.log(`- ${suggestion}`)
	);
}

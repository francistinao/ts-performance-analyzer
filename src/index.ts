import { TypeScriptPerformanceAnalyzer } from "./utils/analyzer.util";

const runPerformanceAnalyzer = async () => {
	const analyzer = new TypeScriptPerformanceAnalyzer(__dirname);
	const report = analyzer.analyze();
	const functionTest = await analyzer.functionPerformance(
		__dirname,
		"/tests/test.ts",
		"bubble"
	);

	// console.log("Performance Report:");
	// console.log(`Total Files: ${report.totalFiles}`);
	// console.log(`Total Lines: ${report.totalLines}`);
	// console.log(`Total Types: ${report.totalTypes}`);
	// console.log(`Type Checking Time: ${report.typeCheckingTime}ms`);

	//function tests
	// console.log("\n\nFunction Performance Report:");
	// console.log(`Function Total Time Execution: ${functionTest.totalTime}ms`);
	// console.log(`Function Memory Space: ${functionTest.totalSpace}`);

	if (report.suggestions && report.suggestions.length > 0) {
		console.log("Suggestions:");
		report.suggestions.forEach((suggestion: string) =>
			console.log(`- ${suggestion}`)
		);
	}
};

runPerformanceAnalyzer().catch((error) => {
	console.error("Error running performance tests:", error);
});

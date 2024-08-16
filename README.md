# TypeScript Performance Analyzer

![TypeScript](https://img.shields.io/badge/TypeScript-4.0+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## Overview

The **TypeScript Performance Analyzer** is a tool designed to help developers understand and optimize the performance of their TypeScript projects. It provides insights into the number of files, lines, and types in a project, and measures the time taken for type-checking. The tool also offers suggestions for improving performance, making it an invaluable resource for large-scale TypeScript applications.

## Features

- Analyze the performance of TypeScript type-checking
- Generate reports with details on the total number of files, lines, and types
- Provide suggestions for optimizing type-checking performance
- Easy integration with existing TypeScript projects

## Installation

To get started with the TypeScript Performance Analyzer, clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/francistinao/ts-performance-analyzer.git
cd ts-performance-analyzer
npm install
```
## Installation

You can run the analyzer using the following command:

```bash
npm run start
```

This will generate a performance report with details about your TypeScript project, including:

- Total number of files
- Total lines of code
- Total types found
- Time taken for type-checking
- Performance improvement suggestions
- Performance of a specific function in a file (Total Execution Time and Its Memory Occupation)

## Project Structure

```bash
ts-performance-analyzer/
├── dist/
│   ├── index.js 
├── src/
│   ├── utils  
│   │    ├── analyze.util.ts    
│   ├── types
│   │    ├── global.d.ts           
│   └── index.ts            
```

## Usage

1. Import the library in your code

```bash
import { TypeScriptPerformanceAnalyzer } from "./utils/analyzer.util";
```

2. Instantiate the class and pass the parameter of the root directory of your project

```bash
const variable_name = new TypeScriptPerformanceAnalyzer(__dirname);
```

3. Choose either testing the performance of the overall project or a specific function in a file

```bash

// Testing overall performance of the project
const report = variable_name.analyze();

console.log("Performance Report:");
console.log(`Total Files: ${report.totalFiles}`);
console.log(`Total Lines: ${report.totalLines}`);
console.log(`Total Types: ${report.totalTypes}`);
console.log(`Type Checking Time: ${report.typeCheckingTime}ms`);

/**
 Sample output:

 Performance Report:
 Total Files: 155
 Total Lines: 113949
 Total Types: 3688
 Type Checking Time: 350.0381ms
 
 */

 // Testing execution time and memory usage of a specific function
 
 async(() => {
  	const test = await variable_name.functionPerformance(
		__dirname, -> root_dir
		"/tests/test.ts", -> path
		"bubble" -> function_name
	 );
 })

 console.log("\n\nFunction Performance Report:");
	console.log(`Function Total Time Execution: ${functionTest.totalTime}ms`);
	console.log(`Function Memory Space: ${functionTest.totalSpace}`);

 /**
 
  Sample output:

  Function Performance Report:
  Function Total Time Execution: 0.037699999999858846ms
  Function Memory Space: 1.73 KB

  */

```

## Contributing 

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository
2. Create a new branch (git checkout -b feature/my-feature)
3. Commit your changes (git commit -am 'Add new feature')
4. Push to the branch (git push origin feature/my-feature)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Francis Tin-ao.


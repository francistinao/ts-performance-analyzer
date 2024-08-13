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
## Usage

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

WORK IN PROGRESS
- Analyze the performance of a specific function (Compute its Time and Space complexity)

## Project Structure

```bash
ts-performance-analyzer/
├── dist/
├── src/
│   ├── utils  
│   │    ├── analyze.util.ts    
│   ├── types
│   │    ├── global.d.ts           
│   └── index.ts            
```

## Development

This project is currently under active development. Contributions, issues, and feature requests are welcome! Please feel free to fork the repository and submit pull requests.

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

Disclaimer: This project is currently under development. The features and functionalities described in this documentation are subject to change. Use at your own discretion.

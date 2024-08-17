export const extractFunctionCode = (
	lines: string[],
	functionName: string
): string => {
	let functionBlock = "";
	let functionCtx = false;
	let braceCount = 0;

	for (const line of lines) {
		if (
			line.includes(`async function ${functionName}`) ||
			line.includes(`const ${functionName} = async`) ||
			line.includes(`const ${functionName} = `) ||
			line.includes(`function ${functionName}`)
		) {
			functionCtx = true;
		}

		if (functionCtx) {
			functionBlock += line + "\n";
			if (line.includes("{")) braceCount++;
			if (line.includes("}")) braceCount--;
			if (braceCount === 0) {
				functionCtx = false;
				break;
			}
		}
	}

	if (!functionBlock) {
		throw new Error(`Function ${functionName} not found`);
	}

	return functionBlock;
};

export const createFunctionFromCode = (code: string): Function => {
	const wrappedCode = `
        return function() {
            ${code}
        };
    `;
	const func = new Function(wrappedCode)();

	if (typeof func !== "function") {
		throw new Error("The code did not produce a valid function.");
	}

	return func;
};

import { performance } from "perf_hooks";

export const getTotalTimeScore = async (fn: Function): Promise<number> => {
	console.log("Function passed to getTotalTimeScore:", fn);
	const start = performance.now();
	let end = null;

	if (fn.constructor.name === "AsyncFunction") {
		return fn().then(() => {
			end = performance.now();
			return end - start;
		});
	} else {
		fn();
		end = performance.now();
	}

	return Promise.resolve(end - start);
};

export const getTotalMemoryUsed = (fn: Function): Promise<string> => {
	const start = performance.now();
	const memoryStart = process.memoryUsage().heapUsed;
	fn();
	const memoryEnd = process.memoryUsage().heapUsed;
	const end = performance.now();

	return Promise.resolve(
		memoryUnitGetter(end - start + (memoryEnd - memoryStart))
	);
};

const memoryUnitGetter = (memoryUsage: number): string => {
	const units = [
		{ limit: 1024, suffix: "bytes", divisor: 1 },
		{ limit: 1024 * 1024, suffix: "KB", divisor: 1024 },
		{ limit: 1024 * 1024 * 1024, suffix: "MB", divisor: 1024 * 1024 },
		{ limit: Infinity, suffix: "GB", divisor: 1024 * 1024 * 1024 },
	];

	const unit = units.find((unit) => memoryUsage < unit.limit);

	const value = memoryUsage / unit!.divisor;

	return `${value.toFixed(2)} ${unit!.suffix}`;
};

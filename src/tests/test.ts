//test functions

const foo = (limit: number): number[] => {
	// Helper function to check if a number is prime
	const isPrime = (num: number, divisor: number = 2): boolean => {
		if (num <= 1) return false;
		if (divisor * divisor > num) return true;
		if (num % divisor === 0) return false;
		return isPrime(num, divisor + 1);
	};

	// Helper function to collect primes recursively
	const collectPrimes = (current: number, primes: number[]): number[] => {
		if (current > limit) return primes;
		if (isPrime(current)) primes.push(current);
		return collectPrimes(current + 1, primes);
	};

	return collectPrimes(2, []);
};

const primesUpTo50 = foo(50);

const bubble = (array: number[]): number[] => {
	const arr = [...array]; // Create a copy to avoid mutating the original array
	const n = arr.length;

	// Bubble Sort algorithm
	for (let i = 0; i < n - 1; i++) {
		let swapped = false;

		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap elements
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}

		// If no elements were swapped, the array is sorted
		if (!swapped) break;
	}

	return arr;
};

const sortedArray = bubble([64, 34, 25, 12, 22, 11, 90]);

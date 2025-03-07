import getPrimes from "../utils/getPrimes.js";
import isPrime from "../utils/isPrime.js";

const solveProblem = () => {
  const limit = 999999;
  const primes = [...getPrimes(1, limit)];

  const sums = [0];

  for (const prime of primes) {
    sums.push(prime + sums[sums.length - 1]);
  }

  let maxLength = 0;
  let bestPrime = 0;

  for (let start = 0; start < primes.length; start++) {
    if (start + maxLength >= primes.length) break;

    for (let end = start + maxLength; end < primes.length; end++) {
      const sum = sums[end + 1] - sums[start];
      if (sum >= limit) break;

      if (isPrime(sum)) {
        const length = end - start + 1;
        if (length > maxLength) {
          maxLength = length;
          bestPrime = sum;
        }
      }
    }
  }

  return bestPrime;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

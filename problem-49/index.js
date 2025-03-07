import isPrime from "../utils/isPrime.js";
import getPermutations from "../utils/getPermutations.js";

const getPrimes = (from, to) => {
  const primes = new Set();

  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      primes.add(i);
    }
  }

  return primes;
};

const getPrimePermutations = (prime, primes) => {
  const permutations = getPermutations(prime.toString().split("")).map((e) =>
    Number(e.join(""))
  );

  const primePermutations = new Set();

  for (const permutation of permutations) {
    if (primes.has(permutation)) {
      primePermutations.add(permutation);
    }
  }

  return [...primePermutations].sort();
};

const solveProblem = () => {
  const primes = getPrimes(1000, 9999);

  for (const prime of primes) {
    const primePermutations = getPrimePermutations(prime, primes);

    for (let i = 0; i < primePermutations.length - 2; i++) {
      for (let j = 0; j < primePermutations.length; j++) {
        const p1 = primePermutations[i];
        const p2 = primePermutations[j];

        if (p1 === p2) continue;
        if (p1 === 1487) continue;

        const diff = p2 - p1;
        const p3 = p2 + diff;

        if (primePermutations.indexOf(p3) > -1) {
          return [p1, p2, p3].join("");
        }
      }
    }
  }

  return null;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

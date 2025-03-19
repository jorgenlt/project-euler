import isPrime from "./isPrime.js";

const getPrimes = (from, to) => {
  const primes = new Set();

  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      primes.add(i);
    }
  }

  return primes;
};

export default getPrimes;

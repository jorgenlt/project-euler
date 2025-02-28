import isPrime from "../utils/isPrime.js";

const consecutivePrimes = (a, b) => {
  let n = 0;
  while (isPrime(n * n + a * n + b)) {
    n++;
  }
  return n;
};

const solvePuzzle = () => {
  const result = {
    primesCount: 0,
    a: null,
    b: null,
  };

  for (let a = -999; a < 1000; a++) {
    for (let b = -999; b <= 1000; b++) {
      if (!isPrime(b)) continue;
      let count = consecutivePrimes(a, b);
      if (count > result.primesCount) {
        result.primesCount = count;
        result.a = a;
        result.b = b;
      }
    }
  }

  return result.a * result.b;
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

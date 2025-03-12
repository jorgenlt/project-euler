import getPrimes from "../utils/getPrimes.js";
import isPrime from "../utils/isPrime.js";

const isConcatPrimes = (a, b) => {
  const concat1 = Number(`${a}${b}`);
  const concat2 = Number(`${b}${a}`);
  return isPrime(concat1) && isPrime(concat2);
};

const getConcatNeighbours = (primes) => {
  const concatNeighbours = new Map();

  for (let i = 0; i < primes.length; i++) {
    const a = primes[i];
    for (let j = i + 1; j < primes.length; j++) {
      const b = primes[j];
      if (isConcatPrimes(a, b)) {
        if (!concatNeighbours.has(a)) {
          concatNeighbours.set(a, []);
        }
        concatNeighbours.get(a).push(b);
      }
    }
  }
  return concatNeighbours;
};

const solveProblem = () => {
  const primesSet = getPrimes(0, 10000);
  const primes = Array.from(primesSet).sort((a, b) => a - b);

  const concatNeighbours = getConcatNeighbours(primes);
  let lowestSum = Infinity;

  for (const [a, neighboursA] of concatNeighbours) {
    for (const b of neighboursA) {
      for (const c of concatNeighbours.get(b) || []) {
        if (a >= c || !neighboursA.includes(c)) continue;
        for (const d of concatNeighbours.get(c) || []) {
          if (
            a >= d ||
            b >= d ||
            !neighboursA.includes(d) ||
            !concatNeighbours.get(b).includes(d)
          )
            continue;

          const candidate = [a, b, c, d];
          for (const prime of concatNeighbours.get(d) || []) {
            if (
              prime > d &&
              candidate.every((num) => isConcatPrimes(num, prime))
            ) {
              const sum = candidate.reduce((acc, num) => acc + num, 0) + prime;
              if (sum < lowestSum) {
                lowestSum = sum;
              }
            }
          }
        }
      }
    }
  }

  return lowestSum;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

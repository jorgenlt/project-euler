import getPrimes from "../utils/getPrimes.js";
import isPrime from "../utils/isPrime.js";

const findRepeatingDigits = (num) => {
  const numStr = num.toString();
  const digitCount = {};

  for (const digit of numStr) {
    if (digitCount[digit]) {
      digitCount[digit]++;
    } else {
      digitCount[digit] = 1;
    }
  }

  const repeatingDigits = [];
  for (const [digit, count] of Object.entries(digitCount)) {
    if (count > 1) {
      repeatingDigits.push(Number(digit));
    }
  }
  return repeatingDigits;
};

const findIndices = (num, digit) => {
  const strNum = num.toString();

  const indices = [];

  for (let i = 0; i < strNum.length; i++) {
    const char = strNum[i];

    if (char === digit.toString()) {
      indices.push(i);
    }
  }

  return indices;
};

const solveProblem = () => {
  const primes = getPrimes(0, 200000);

  for (const prime of primes) {
    const repeatingDigits = findRepeatingDigits(prime);

    if (repeatingDigits.length > 0) {
      for (const repeatingDigit of repeatingDigits) {
        const indices = findIndices(prime, repeatingDigit);

        const primeNumbers = [];

        for (let i = 0; i <= 9; i++) {
          const primeArr = prime.toString().split("").map(Number);

          for (const index of indices) {
            primeArr[index] = i;
          }

          if (primeArr[0] === 0) continue;

          const newNum = Number(primeArr.join(""));

          if (isPrime(newNum)) {
            primeNumbers.push(newNum);
          }
        }

        if (primeNumbers.length === 8) {
          return Math.min(...primeNumbers);
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

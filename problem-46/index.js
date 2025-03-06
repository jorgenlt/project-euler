import isPrime from "../utils/isPrime.js";

const getOddCompositeNumbers = (countNeeded) => {
  const numbers = [];
  let i = 9;
  while (numbers.length < countNeeded) {
    if (i % 2 !== 0 && !isPrime(i)) {
      numbers.push(i);
    }
    i++;
  }
  return numbers;
};

const getPrimes = (countNeeded) => {
  const numbers = [];
  let i = 2;
  while (numbers.length < countNeeded) {
    if (isPrime(i)) {
      numbers.push(i);
    }
    i++;
  }
  return numbers;
};

const solveProblem = () => {
  const oddCompositeNumbers = getOddCompositeNumbers(3000);
  const primes = getPrimes(3000);

  for (const oddNumber of oddCompositeNumbers) {
    let canBeRepresented = false;

    for (const primeNumber of primes) {
      if (primeNumber > oddNumber) {
        return oddNumber;
      }

      let squareNum = 1;
      while (2 * squareNum ** 2 <= oddNumber) {
        if (primeNumber + 2 * squareNum ** 2 === oddNumber) {
          canBeRepresented = true;
          break;
        }
        squareNum++;
      }

      if (canBeRepresented) {
        break;
      }
    }
  }
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

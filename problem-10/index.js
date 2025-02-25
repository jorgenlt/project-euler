import isPrime from "../utils/isPrime.js";

const solvePuzzle = () => {
  let sum = 2;

  for (let num = 3; num < 2_000_000; num += 2) {
    if (isPrime(num)) {
      sum += num;
    }
  }

  return sum;
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

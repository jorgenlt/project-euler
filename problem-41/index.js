import isPrime from "../utils/isPrime.js";
import isPandigital from "../utils/isPandigital.js";

const solveProblem = () => {
  for (let num = 8000000; num > 0; num--) {
    if (isPandigital(num)) {
      if (isPrime(num)) {
        return num;
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

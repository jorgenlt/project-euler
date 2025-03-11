import getUlamDiagonalNumbers from "../utils/getUlamDiagonalNumbers.js";
import isPrime from "../utils/isPrime.js";

const solveProblem = () => {
  let sideLength = 26203;

  while (sideLength < 26303) {
    const diagonalNumbers = getUlamDiagonalNumbers(sideLength);
    const primeDiagonalNumbers = diagonalNumbers.filter((num) => isPrime(num));

    const primeRatio = primeDiagonalNumbers.length / diagonalNumbers.length;
    console.log(" primeRatio:", primeRatio);

    if (primeRatio < 0.1) {
      return sideLength;
    }

    sideLength += 2;
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

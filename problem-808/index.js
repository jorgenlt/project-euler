import isPalindrome from "../utils/isPalindrome.js";
import isPrime from "../utils/isPrime.js";
import isPerfectSquare from "../utils/isPerfectSquare.js";

const isReversiblePrimeSquare = (num) => {
  if (isPalindrome(num.toString()) || !isPerfectSquare(num)) {
    return false;
  }

  const reverse = Number(num.toString().split("").reverse().join(""));

  if (isPerfectSquare(reverse)) {
    return isPrime(Math.sqrt(reverse));
  }

  return false;
};

const solveProblem = () => {
  const reversiblePrimeSquares = new Set();

  let i = 10;

  while (reversiblePrimeSquares.size < 50) {
    if (isPrime(i)) {
      const square = i * i;
      if (isReversiblePrimeSquare(square)) {
        reversiblePrimeSquares.add(square);
        console.log(reversiblePrimeSquares.size);
      }
    }

    i++;
  }

  return [...reversiblePrimeSquares].reduce((sum, curr) => sum + curr, 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

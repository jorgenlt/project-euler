import isPalindrome from "../utils/isPalindrome.js";

const solveProblem = () => {
  let sum = 0;

  for (let num = 1; num < 1000000; num++) {
    if (isPalindrome(num.toString()) && isPalindrome(num.toString(2))) {
      sum += num;
    }
  }

  return sum;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

import { readFile } from "fs/promises";

const isPalindrome = (num) => {
  return num.toString().split("").reverse().join("") === num.toString();
};

const solvePuzzle = () => {
  let palindrome = 0;

  for (let a = 999; a >= 900; a--) {
    for (let b = 999; b >= 900; b--) {
      const num = a * b;
      if (isPalindrome(num) && num > palindrome) {
        palindrome = num;
      }
    }
  }

  return palindrome;
};

const main = async () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

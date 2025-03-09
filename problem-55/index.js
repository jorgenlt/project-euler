import isPalindrome from "../utils/isPalindrome.js";

const reverseAndAdd = (num) => {
  return num + Number(num.toString().split("").reverse().join(""));
};

const solveProblem = () => {
  let lychrelNumbers = 0;

  for (let i = 1; i < 10000; i++) {
    let num = reverseAndAdd(i);
    let isLychrel = true;

    for (let j = 0; j < 50; j++) {
      if (isPalindrome(num.toString())) {
        isLychrel = false;
        break;
      }

      num = reverseAndAdd(num);
    }

    if (isLychrel) {
      lychrelNumbers++;
    }
  }

  return lychrelNumbers;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

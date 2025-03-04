import isPrime from "../utils/isPrime.js";

const getTruncatedNumbers = (num) => {
  const strNum = num.toString();

  const numbers = new Set();

  for (let i = 0; i < strNum.length; i++) {
    numbers.add(Number(strNum.slice(i)));
    numbers.add(Number(strNum.slice(0, strNum.length - i)));
  }

  return [...numbers];
};

const solveProblem = () => {
  const truncatable = [];

  let num = 8;

  while (truncatable.length < 11) {
    if (isPrime(num)) {
      const numbers = getTruncatedNumbers(num);

      if (numbers.every(isPrime)) {
        truncatable.push(num);
      }
    }

    num++;
  }

  return truncatable.reduce((prev, curr) => prev + curr, 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

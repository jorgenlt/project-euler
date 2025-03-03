import getFactorial from "../utils/getFactorial.js";

const isEqualToFactorialSum = (num) => {
  let factorialSum = 0;

  num
    .toString()
    .split("")
    .map(Number)
    .forEach((n) => {
      factorialSum += getFactorial(n);
    });

  if (factorialSum === num) {
    return true;
  }

  return false;
};

const solveProblem = () => {
  const iterations = 50000;

  const numbers = [];

  for (let i = 3; i <= iterations; i++) {
    if (isEqualToFactorialSum(i)) {
      numbers.push(i);
    }
  }

  return numbers.reduce((prev, curr) => prev + curr, 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

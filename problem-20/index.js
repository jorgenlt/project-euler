import getFactorialStringBigInt from "../utils/getFactorialStringBigInt.js";

const solvePuzzle = () => {
  const factorial = getFactorialStringBigInt(100);

  return factorial
    .split("")
    .map(Number)
    .reduce((prev, curr) => prev + curr, 0);
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

import getFactorial from "../utils/getFactorial.js";

const solvePuzzle = () => {
  return getFactorial(40) / (getFactorial(20) * getFactorial(20));
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

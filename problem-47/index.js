import getPrimeFactors from "../utils/getPrimeFactors.js";

const solveProblem = () => {
  let consecutiveNums = [];

  let current = 647;

  while (true) {
    if (consecutiveNums.length === 4) {
      return Math.min(...consecutiveNums);
    }

    if (new Set(getPrimeFactors(current)).size === 4) {
      consecutiveNums.push(current);
    } else {
      consecutiveNums = [];
    }

    current++;
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

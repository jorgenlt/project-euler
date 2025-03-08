import binomialCoefficient from "../utils/binomialCoefficient.js";

const solveProblem = () => {
  let count = 0;

  for (let n = 1; n <= 100; n++) {
    for (let r = 0; r <= n; r++) {
      if (binomialCoefficient(n, r) > 1000000) {
        count++;
      }
    }
  }

  return count;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

import getPermutations from "../utils/getPermutations.js";

const isValid = (strNum) => {
  const divisors = [2, 3, 5, 7, 11, 13, 17];

  for (let i = 0; i < divisors.length; i++) {
    if (Number(strNum.slice(i + 1, i + 4)) % divisors[i] !== 0) {
      return false;
    }
  }

  return true;
};

const solveProblem = () => {
  const pandigitalNumbers = getPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).map(
    (e) => e.join("")
  );

  let sum = 0;

  for (const strNum of pandigitalNumbers) {
    if (isValid(strNum)) {
      sum += Number(strNum);
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

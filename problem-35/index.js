import isPrime from "../utils/isPrime.js";

const getRotations = (arr) => {
  const rotations = [];
  rotations.push([...arr]);

  for (let i = 1; i < arr.length; i++) {
    const current = [...rotations[rotations.length - 1]];
    const firstNum = current.shift();
    current.push(firstNum);
    rotations.push(current);
  }

  return rotations;
};

const isCircularPrime = (num) => {
  const rotations = getRotations(num.toString().split("").map(Number));

  for (const num of rotations) {
    if (!isPrime(Number(num.join("")))) return false;
  }

  return true;
};

const solveProblem = () => {
  let count = 0;

  for (let i = 2; i < 1000000; i++) {
    if (isCircularPrime(i)) {
      count++;
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

const sumOfSquares = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i ** 2;
  }

  return sum;
};

const squareOfSum = (num) => {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum ** 2;
};

const solvePuzzle = () => {
  return squareOfSum(100) - sumOfSquares(100);
};

const main = async () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

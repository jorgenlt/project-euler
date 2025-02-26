const solvePuzzle = () => {
  return BigInt(2 ** 1000)
    .toString()
    .split("")
    .map(Number)
    .reduce((prev, curr) => prev + curr);
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

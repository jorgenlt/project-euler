const getSumProperDivisors = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  return sum;
};

const solvePuzzle = () => {
  const pairs = new Set();

  for (let a = 2; a < 10000; a++) {
    const b = getSumProperDivisors(a);

    if (
      b !== a &&
      b < 10000 &&
      getSumProperDivisors(b) === a &&
      !pairs.has(`${[a, b].sort()}`)
    ) {
      pairs.add(`${[a, b].sort()}`);
    }
  }

  return pairs
    .keys()
    .map((pair) => pair.split(",").map(Number))
    .reduce((prev, curr) => prev + curr[0] + curr[1], 0);
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

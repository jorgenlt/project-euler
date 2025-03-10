const calcDigitalSum = (num) => {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, prev) => sum + prev, 0);
};

const solveProblem = () => {
  let maxDigitalSum = 0;

  for (let i = 1; i < 100; i++) {
    for (let j = 1; j < 100; j++) {
      const digitalSum = calcDigitalSum(BigInt(i) ** BigInt(j));

      if (digitalSum > maxDigitalSum) {
        maxDigitalSum = digitalSum;
      }
    }
  }

  return maxDigitalSum;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

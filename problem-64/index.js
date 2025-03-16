const isPerfectSquare = (num) => {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
};

const getPeriodLength = (N) => {
  const a0 = Math.floor(Math.sqrt(N));
  let M = 0;
  let d = 1;
  let a = a0;

  let period = 0;

  do {
    M = d * a - M;
    d = (N - M ** 2) / d;
    a = Math.floor((a0 + M) / d);
    period++;
  } while (a !== 2 * a0); // Repeating cycle ends exactly when a = 2a0.

  return period;
};

const solveProblem = () => {
  let count = 0;

  for (let i = 1; i <= 10000; i++) {
    if (isPerfectSquare(i)) continue;

    if (getPeriodLength(i) % 2 !== 0) {
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

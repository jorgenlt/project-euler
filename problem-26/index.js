// Compute the cycle length for 1/d using remainders.
const getCycleSize = (d) => {
  let remainder = 1 % d;
  let pos = 0;
  const seen = {};

  while (remainder !== 0 && seen[remainder] === undefined) {
    seen[remainder] = pos;
    remainder = (remainder * 10) % d;
    pos++;
  }

  return remainder === 0 ? 0 : pos - seen[remainder];
};

const solvePuzzle = () => {
  let longestCycleSize = 0;
  let dWithLongestCycle = null;

  for (let i = 1; i < 1000; i++) {
    const cycleSize = getCycleSize(i);
    if (cycleSize > longestCycleSize) {
      longestCycleSize = cycleSize;
      dWithLongestCycle = i;
    }
  }

  return {
    longestCycleSize,
    d: dWithLongestCycle,
  };
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

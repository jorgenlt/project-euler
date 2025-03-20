const nextCoin = (step, limit, max) => {
  if (limit === 1n) return null;

  if (step < limit) return step;

  const shift = max % step;
  const result = nextCoin(shift, limit, step);

  return result !== null ? limit - result : null;
};

const generateCoins = (firstCoin, modNum) => {
  const coins = [];
  let lastCoin = modNum;

  while (true) {
    const next = nextCoin(firstCoin, lastCoin, modNum);
    if (next === null) {
      break;
    }
    coins.push(next);
    lastCoin = next;
  }

  return coins;
};

const solveProblem = () => {
  const firstCoin = 1504170715041707n;
  const modNum = 4503599627370517n;
  const coins = generateCoins(firstCoin, modNum);

  return Number(coins.reduce((sum, curr) => sum + curr, 0n));
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

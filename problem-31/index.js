const coinSums = (coins, target) => {
  const ways = Array(target + 1).fill(0);

  ways[0] = 1; // Only one way to make 0 pence.

  for (const coin of coins) {
    for (let amount = coin; amount <= target; amount++) {
      ways[amount] += ways[amount - coin];
    }
  }

  return ways[target];
};

const solveProblem = () => {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  const target = 200; // £2

  return coinSums(coins, target);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

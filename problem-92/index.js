const getNextNum = (num) => {
  return num
    .toString()
    .split("")
    .map((e) => Number(e) ** 2)
    .reduce((sum, curr) => sum + curr, 0);
};

const solveProblem = () => {
  let count = 0;

  for (let i = 1; i < 10000000; i++) {
    const chain = new Set();

    let current = i;

    while (!chain.has(current)) {
      chain.add(current);
      current = getNextNum(current);

      if (current === 89) {
        count++;
        break;
      }

      if (current === 1) {
        break;
      }
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

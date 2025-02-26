const solvePuzzle = () => {
  let longestChain = 0;
  let longestChainNum = null;

  for (let i = 999999; i > 0; i--) {
    let count = 0;
    let num = i;

    while (num > 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = 3 * num + 1;
      }
      count++;
    }

    if (count > longestChain) {
      longestChain = count;
      longestChainNum = i;
    }
  }

  return longestChainNum;
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

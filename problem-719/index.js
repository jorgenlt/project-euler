const dfs = (strNum, startIndex, currentSum, target) => {
  if (startIndex === strNum.length) return currentSum === target;

  const maxDigits = String(target).length;

  let value = 0;

  for (
    let endIndex = startIndex;
    endIndex < Math.min(strNum.length, startIndex + maxDigits);
    endIndex++
  ) {
    value = Number(strNum.slice(startIndex, endIndex + 1));

    if (currentSum + value > target) break;

    if (dfs(strNum, endIndex + 1, currentSum + value, target)) return true;
  }

  return false;
};

const isSNumber = (root, n) => {
  return dfs(String(n), 0, 0, root);
};

const solveProblem = () => {
  const start = 2;
  const limit = Math.sqrt(10 ** 12);

  let sum = 0;

  for (let root = start; root <= limit; root++) {
    const n = root ** 2;

    if (isSNumber(root, n)) {
      sum += n;
    }
  }

  return sum;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

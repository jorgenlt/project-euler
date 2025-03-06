const getPentagonalNumbers = (size) => {
  const numbers = new Set();

  for (let n = 1; n <= size; n++) {
    numbers.add((n * (3 * n - 1)) / 2);
  }

  return numbers;
};

const solveProblem = () => {
  const pentagonalSet = getPentagonalNumbers(3000);
  const pentagonalNumbers = [...pentagonalSet];

  let diff = Infinity;

  for (let i = 0; i < pentagonalNumbers.length; i++) {
    for (let j = i + 1; j < pentagonalNumbers.length; j++) {
      const pj = pentagonalNumbers[i];
      const pk = pentagonalNumbers[j];

      const d = Math.abs(pk - pj);
      const sum = pj + pk;

      if (pentagonalSet.has(d) && pentagonalSet.has(sum)) {
        diff = Math.min(diff, d);
      }
    }
  }

  return diff;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

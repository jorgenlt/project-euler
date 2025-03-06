const getTriangleNumbers = (from, to) => {
  const numbers = new Set();

  for (let n = from; n <= to; n++) {
    numbers.add((n * (n + 1)) / 2);
  }

  return numbers;
};

const getPentagonalNumbers = (size) => {
  const numbers = new Set();

  for (let n = 1; n <= size; n++) {
    numbers.add((n * (3 * n - 1)) / 2);
  }

  return numbers;
};

const getHexagonalNumbers = (size) => {
  const numbers = new Set();

  for (let n = 1; n <= size; n++) {
    numbers.add(n * (2 * n - 1));
  }

  return numbers;
};

const solveProblem = () => {
  const size = 100000;

  const triangleNumbers = getTriangleNumbers(286, size);
  const pentagonalNumbers = getPentagonalNumbers(size);
  const hexagonalNumbers = getHexagonalNumbers(size);

  for (const t of triangleNumbers) {
    if (pentagonalNumbers.has(t) && hexagonalNumbers.has(t)) {
      return t;
    }
  }
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

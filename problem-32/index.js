const isValid = (a, b, product) => {
  if (
    [a, b, product].join("").split("").map(Number).sort().join("") ===
    "123456789"
  ) {
    return true;
  }

  return false;
};

const solveProblem = () => {
  const products = new Set();

  for (let a = 1; a < 2000; a++) {
    for (let b = 1; b < 2000; b++) {
      if (isValid(a, b, a * b)) {
        products.add(a * b);
      }
    }
  }

  return [...products].reduce((prev, curr) => prev + curr, 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

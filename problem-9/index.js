const solvePuzzle = () => {
  for (let a = 1; a < 1000; a++) {
    for (let b = a + 1; b < 1000 - a; b++) {
      const c = 1000 - a - b;
      if (a ** 2 + b ** 2 === c ** 2) {
        return a * b * c;
      }
    }
  }
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

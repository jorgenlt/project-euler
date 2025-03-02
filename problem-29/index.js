const solveProblem = () => {
  const aMin = 2;
  const aMax = 100;
  const bMin = 2;
  const bMax = 100;

  const distinctTerms = new Set();

  for (let a = aMin; a <= aMax; a++) {
    for (let b = bMin; b <= bMax; b++) {
      distinctTerms.add(a ** b);
    }
  }

  return distinctTerms.size;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

const solveProblem = () => {
  let maxCount = 0;
  let pAtMaxCount = null;

  for (let p = 1; p <= 1000; p++) {
    let count = 0;

    let b = 0;

    while (b < p) {
      let a = 0;

      while (a < b) {
        const c = p - a - b;

        if (Math.hypot(a, b) === c) {
          count++;
        }

        a++;
      }

      b++;
    }

    if (count > maxCount) {
      maxCount = count;
      pAtMaxCount = p;
    }
  }

  return pAtMaxCount;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

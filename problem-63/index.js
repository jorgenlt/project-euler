const solveProblem = () => {
  let count = 0;

  for (let n = 1; n <= 30; n++) {
    for (let x = 1; x <= 9; x++) {
      const number = BigInt(x) ** BigInt(n);

      if (String(number).length === n) {
        count++;
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

const solveProblem = () => {
  const fifthPowers = [];

  for (let i = 10; i < 500000; i++) {
    let sum = 0;

    i.toString()
      .split("")
      .map(Number)
      .forEach((num) => {
        sum += num ** 5;
      });

    if (sum === i) {
      fifthPowers.push(i);
    }
  }

  return fifthPowers.reduce((prev, curr) => prev + curr, 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

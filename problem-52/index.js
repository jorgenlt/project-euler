const getMultiples = (num) => {
  const result = [];

  for (let i = 2; i <= 6; i++) {
    result.push(i * num);
  }

  return result;
};

const hasSameDigits = (a, b) => {
  return (
    a.toString().split("").sort().join("") ===
    b.toString().split("").sort().join("")
  );
};

const solveProblem = () => {
  let num = 100000;

  while (true) {
    if (getMultiples(num).every((e) => hasSameDigits(num, e))) {
      return num;
    }

    num++;
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

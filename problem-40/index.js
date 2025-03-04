const solveProblem = () => {
  let d = "";
  let num = 1;

  while (d.length <= 1000000) {
    d += num.toString();
    num++;
  }

  return (
    d[1 - 1] *
    d[10 - 1] *
    d[100 - 1] *
    d[1000 - 1] *
    d[10000 - 1] *
    d[100000 - 1] *
    d[1000000 - 1]
  );
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

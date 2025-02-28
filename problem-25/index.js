const solvePuzzle = () => {
  let a = BigInt(0);
  let b = BigInt(1);
  let c = BigInt(1);
  let i = 2;

  while (true) {
    if (c.toString().length === 1000) {
      return i - 1;
    }
    c = a + b;
    a = b;
    b = c;

    i++;
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

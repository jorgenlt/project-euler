const solvePuzzle = () => {
  let prev = 1;
  let curr = 2;

  const fibonacci = [prev, curr];

  while (true) {
    const nextNum = prev + curr;

    if (nextNum > 4_000_000) {
      break;
    } else {
      prev = curr;
      curr = nextNum;
      fibonacci.push(nextNum);
    }
  }

  return fibonacci.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
};

const main = async () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

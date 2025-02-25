const isEvenlyDivisible = (num) => {
  for (let i = 20; i >= 1; i--) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
};

const solvePuzzle = () => {
  let num = 2520;

  while (true) {
    if (isEvenlyDivisible(num)) return num;
    num++;
  }
};

const main = async () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

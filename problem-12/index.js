const getDivisorsCount = (num) => {
  let divisors = 0;
  const sqrt = Math.sqrt(num);

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors += 2; // i and num / i are both divisors
    }
  }

  // If num is a perfect square, divisor is counted twice
  if (sqrt === Math.floor(sqrt)) {
    divisors--;
  }

  return divisors;
};

const getTriangleNumber = (num) => {
  return (num * (num + 1)) / 2;
};

const solvePuzzle = () => {
  let num = 0;

  while (true) {
    const triangleNum = getTriangleNumber(num);
    const divisors = getDivisorsCount(triangleNum);

    if (divisors > 500) {
      return triangleNum;
    }

    num++;
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

const getSumProperDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  return divisors.reduce((prev, curr) => prev + curr, 0);
};

const isAbundant = (num) => {
  if (getSumProperDivisors(num) > num) {
    return true;
  }
  return false;
};

const getAbundantNumbers = (limit) => {
  const abundantNumbers = new Set();

  for (let i = 1; i <= limit; i++) {
    if (isAbundant(i)) {
      abundantNumbers.add(i);
    }
  }

  return abundantNumbers;
};

const isSumOfTwoAbundantNumbers = (num, abundantNumbers) => {
  for (const a of abundantNumbers.keys()) {
    for (const b of abundantNumbers.keys()) {
      if (a + b === num) {
        return true;
      }
    }
  }

  return false;
};

const solvePuzzle = () => {
  const abundantNumbers = getAbundantNumbers(28123);

  let sum = 0;

  for (let i = 0; i <= 28123; i++) {
    if (!isSumOfTwoAbundantNumbers(i, abundantNumbers)) {
      sum += i;
    }
  }

  return sum;
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

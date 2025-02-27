const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};

const findLargestPrimeFactor = (num) => {
  const factors = [];

  let rest = num;

  while (!isPrime(rest)) {
    for (let i = 2; i < 600851475143; i++) {
      if (isPrime(i)) {
        if (rest % i === 0) {
          factors.push(i);
          rest = rest / i;
          break;
        }
      }
    }
  }

  factors.push(rest);

  return Math.max(...factors);
};

const solvePuzzle = () => {
  return findLargestPrimeFactor(600851475143);
};

const main = async () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

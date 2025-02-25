const isPrime = (number) => {
  if (number <= 1) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

const solvePuzzle = () => {
  let primeCount = 1;
  let currentPrime = 2;
  let num = 3;

  while (true) {
    if (primeCount === 10001) return currentPrime;

    if (isPrime(num)) {
      primeCount++;
      currentPrime = num;
    }

    num += 2;
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

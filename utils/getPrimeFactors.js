const getPrimeFactors = (num) => {
  const primeFactors = [];

  // Check for number of 2s that divide num
  while (num % 2 === 0) {
    primeFactors.push(2);
    num /= 2;
  }

  // Check for odd numbers from 3 to sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      primeFactors.push(i);
      num /= i;
    }
  }

  // If num is still greater than 2, then it must be a prime number
  if (num > 2) {
    primeFactors.push(num);
  }

  return primeFactors;
};

export default getPrimeFactors;

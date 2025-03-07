// Function to compute (base^exponent) % modulus using exponentiation by squaring
const modPow = (base, exponent, modulus) => {
  let result = BigInt(1);
  base = base % modulus;

  while (exponent > 0) {
    // If exponent is odd, multiply the result with base
    if (exponent % BigInt(2) === BigInt(1)) {
      result = (result * base) % modulus;
    }
    // Square the base and divide exponent by 2
    exponent = exponent / BigInt(2);
    base = (base * base) % modulus;
  }

  return result;
};

const solveProblem = () => {
  const mod = BigInt(10 ** 10);

  let total = BigInt(0);

  for (let n = 1; n <= 1000; n++) {
    total = (total + modPow(BigInt(n), BigInt(n), mod)) % mod;
  }

  return total.toString();
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

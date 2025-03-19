// Modular exponentiation using BigInt
const modPow = (base, exponent, modulus) => {
  let result = 1n;
  let b = BigInt(base) % modulus;
  let e = BigInt(exponent);

  while (e > 0n) {
    // If the current bit is 1, multiply it into result
    if (e & 1n) {
      result = (result * b) % modulus;
    }
    // Square b for the next bit
    b = (b * b) % modulus;
    // Shift exponent right by 1 bit
    e >>= 1n;
  }

  return result;
};

export default modPow;

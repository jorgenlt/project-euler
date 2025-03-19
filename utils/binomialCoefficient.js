import getFactorial from "./getFactorial.js";

const binomialCoefficient = (n, k) => {
  if (k < 0 || k > n) return 0;
  return getFactorial(n) / (getFactorial(k) * getFactorial(n - k));
};

export default binomialCoefficient;

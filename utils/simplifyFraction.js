import getGcd from "./getGcd.js";

const simplifyFraction = (numerator, denominator) => {
  const gcd = getGcd(numerator, denominator);

  return {
    numerator: numerator / gcd,
    denominator: denominator / gcd,
  };
};

export default simplifyFraction;

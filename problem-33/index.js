import simplifyFraction from "../utils/simplifyFraction.js";

const calcResult = (fractions) => {
  let numeratorProduct = 1;
  let denominatorProduct = 1;

  for (const [numerator, denominator] of fractions) {
    numeratorProduct *= numerator;
    denominatorProduct *= denominator;
  }

  return simplifyFraction(numeratorProduct, denominatorProduct);
};

const solveProblem = () => {
  const fractions = [];

  for (let numerator = 10; numerator <= 99; numerator++) {
    for (let denominator = 10; denominator <= 99; denominator++) {
      if (numerator === denominator) continue;
      if (numerator >= denominator) continue;

      const [a, b] = numerator.toString().split("").map(Number);
      const [c, d] = denominator.toString().split("").map(Number);

      if (b === 0 && d === 0) continue;

      if (b === c) {
        if (a / d === numerator / denominator) {
          fractions.push([numerator, denominator]);
        }
      }
    }
  }

  return calcResult(fractions);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

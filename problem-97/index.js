import modPow from "../utils/modPow.js";

const solveProblem = () => {
  const mod = BigInt(10 ** 10);
  const powerPart = modPow(2, 7830457, mod);
  const result = (28433n * powerPart + 1n) % mod;

  return Number(result);
};

solveProblem();

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

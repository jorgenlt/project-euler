import { readFile } from "fs/promises";
import getAlphabetPosition from "../utils/getAlphabetPosition.js";

const parseInput = (input) => {
  return input.replace(/"/g, "").split(",");
};

const getWordValue = (word) => {
  let value = 0;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    value += getAlphabetPosition(letter);
  }

  return value;
};

const findN = (tn) => {
  let discriminant = 1 + 8 * tn;
  let sqrtDiscriminant = Math.sqrt(discriminant);

  if (Number.isInteger(sqrtDiscriminant)) {
    let n = (-1 + sqrtDiscriminant) / 2;
    return Number.isInteger(n) ? n : null;
  }

  return null;
};

const solveProblem = (input) => {
  const words = parseInput(input);

  let count = 0;

  for (const word of words) {
    if (findN(getWordValue(word))) {
      count++;
    }
  }

  return count;
};

const main = async () => {
  try {
    const input = (await readFile("input.txt", "utf-8")).trim();
    console.log(solveProblem(input));
  } catch (err) {
    console.error(err);
  }
};

main();

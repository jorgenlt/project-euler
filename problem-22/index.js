import { readFile } from "fs/promises";
import getAlphabetPosition from "../utils/getAlphabetPosition.js";

const getNameScore = (name) => {
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    const letter = name[i];
    sum += getAlphabetPosition(letter);
  }

  return sum;
};

const parseInput = (input) => {
  return input.replace(/"/g, "").split(",").sort();
};

const solvePuzzle = (input) => {
  const names = parseInput(input);

  return names.reduce(
    (sum, curr, index) => sum + getNameScore(curr) * (index + 1),
    0
  );
};

const main = async () => {
  try {
    const input = (await readFile("input.txt", "utf-8")).trim();
    console.log(solvePuzzle(input));
  } catch (err) {
    console.error(err);
  }
};

main();

import { readFile } from "fs/promises";

const parseInput = (input) => {
  return input.split("\n").map(Number);
};

const solvePuzzle = (input) => {
  const numbers = parseInput(input);

  const sum = numbers.reduce((prev, curr) => prev + curr, 0);

  return sum.toString().replace(".", "").substring(0, 10);
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

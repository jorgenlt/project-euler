import { readFile } from "fs/promises";

const parseInput = (input) => {
  let numString = "";

  input.split("\n").forEach((l) => {
    numString += l.trim();
  });

  return numString.split("").map(Number);
};

const solvePuzzle = (input) => {
  const numbers = parseInput(input);

  let highestProduct = 0;

  for (let i = 0; i < numbers.length - 13; i++) {
    const product = numbers
      .slice(i, i + 13)
      .reduce((prev, curr) => prev * curr);

    if (product > highestProduct) {
      highestProduct = product;
    }
  }

  return highestProduct;
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

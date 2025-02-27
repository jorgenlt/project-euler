import { readFile } from "fs/promises";

const parseInput = (input) => {
  const rows = input.split("\n").map((l) => l.split(" ").map(Number));
  return rows;
};

const solvePuzzle = (input) => {
  const rows = parseInput(input);

  for (let i = rows.length - 2; i >= 0; i--) {
    for (let j = 0; j < rows[i].length; j++) {
      rows[i][j] =
        rows[i][j] + Math.max(...[rows[i + 1][j], rows[i + 1][j + 1]]);
    }
  }

  return rows[0][0];
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

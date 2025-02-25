import { readFile } from "fs/promises";

const parseInput = (input) => {
  return input.split("\n").map((l) => l.split(" ").map(Number));
};

const getProduct = (x, y, grid) => {
  const directions = [
    [0, -1], // Up
    [0, 1], // Down
    [-1, 0], // Left
    [1, 0], // Right
    [-1, 1], // Diagonally left
    [1, 1], // Diagonally right
  ];

  const maxY = grid.length - 1;
  const maxX = grid[0].length - 1;

  let highestProduct = 0;

  for (const direction of directions) {
    const numbers = [grid[y][x]];

    for (let d = 1; d <= 3; d++) {
      const newX = x + direction[0] * d;
      const newY = y + direction[1] * d;

      if (newX >= 0 && newX <= maxX && newY >= 0 && newY <= maxY) {
        numbers.push(grid[newY][newX]);
      } else {
        break;
      }
    }

    const product = numbers.reduce((prev, curr) => prev * curr);
    if (product > highestProduct) {
      highestProduct = product;
    }
  }

  return highestProduct;
};

const solvePuzzle = (input) => {
  const grid = parseInput(input);

  let highestProduct = 0;

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const product = getProduct(x, y, grid);
      if (product > highestProduct) {
        highestProduct = product;
      }
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

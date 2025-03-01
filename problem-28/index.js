import generateSpiralGrid from "../utils/generateSpiralGrid.js";

const getDiagonalCoords = (grid) => {
  const coords = new Set();

  for (let i = 0; i < grid.length; i++) {
    coords.add(`${i},${i}`);
    coords.add(`${i},${grid.length - 1 - i}`);
  }

  return coords;
};

const calcDiagonalSum = (grid) => {
  return [...getDiagonalCoords(grid)].reduce(
    (sum, curr) => (sum += grid[curr.split(",")[1]][curr.split(",")[0]]),
    0
  );
};

const solvePuzzle = () => {
  const gridSize = 1001;
  const grid = generateSpiralGrid(gridSize);

  return calcDiagonalSum(grid);
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

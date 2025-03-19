const generateSpiralGrid = (n) => {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let value = 1;
  let startRow = Math.floor(n / 2);
  let startCol = Math.floor(n / 2);

  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];

  let directionIndex = 0;
  let steps = 1;

  matrix[startRow][startCol] = value++;

  while (value <= n * n) {
    for (let i = 0; i < 2; i++) {
      // Two sides of a layer
      for (let j = 0; j < steps; j++) {
        startRow += directions[directionIndex][0];
        startCol += directions[directionIndex][1];

        if (startRow >= 0 && startRow < n && startCol >= 0 && startCol < n) {
          matrix[startRow][startCol] = value++;
        }
      }
      directionIndex = (directionIndex + 1) % 4;
    }
    steps++;
  }

  return matrix;
};

export default generateSpiralGrid;

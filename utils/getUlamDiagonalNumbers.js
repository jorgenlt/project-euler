const getUlamDiagonalNumbers = (size) => {
  if (size % 2 === 0) {
    throw new Error("Size must be an odd number");
  }
  const diagonals = [1];

  for (let n = 3; n <= size; n += 2) {
    const square = n * n;
    const step = n - 1;
    diagonals.push(square);
    diagonals.push(square - step);
    diagonals.push(square - 2 * step);
    diagonals.push(square - 3 * step);
  }

  return diagonals;
};

export default getUlamDiagonalNumbers;

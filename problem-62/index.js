const generateCubes = (start, end) => {
  const cubes = [];

  for (let i = start; i <= end; i++) {
    cubes.push(Math.pow(i, 3));
  }

  return cubes;
};

const isPermutation = (a, b) => {
  return (
    String(a).split("").sort().join("") === String(b).split("").sort().join("")
  );
};

const solveProblem = () => {
  const cubes = generateCubes(5000, 10000);

  for (let i = 0; i < cubes.length; i++) {
    const cubeNumA = cubes[i];

    const cubeNumbers = [cubeNumA];

    for (let j = i + 1; j < cubes.length; j++) {
      const cubeNumB = cubes[j];

      if (isPermutation(cubeNumA, cubeNumB)) {
        cubeNumbers.push(cubeNumB);
      }

      if (cubeNumbers.length === 5) {
        return cubeNumbers[0];
      }
    }
  }

  return null;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

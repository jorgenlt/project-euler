const generateSets = () => {
  const generators = {
    triangle: (n) => (n * (n + 1)) / 2,
    square: (n) => n ** 2,
    pentagonal: (n) => (n * (3 * n - 1)) / 2,
    hexagonal: (n) => n * (2 * n - 1),
    heptagonal: (n) => (n * (5 * n - 3)) / 2,
    octagonal: (n) => n * (3 * n - 2),
  };

  const sets = {};

  const types = Object.keys(generators);

  for (const type of types) {
    sets[type] = new Set();

    let i = 1;

    while (true) {
      const number = generators[type](i);

      if (number >= 1000 && number <= 9999) {
        sets[type].add(number);
      }

      if (number > 9999) {
        break;
      }

      i++;
    }
  }

  return sets;
};

const buildGraph = (sets) => {
  const graph = new Map();
  const types = Object.keys(sets);

  for (const typeA of types) {
    for (const numA of sets[typeA]) {
      const lastTwo = numA.toString().slice(-2);
      const key = `${typeA},${numA}`;

      if (!graph.has(key)) {
        graph.set(key, []);
      }

      for (const typeB of types) {
        if (typeA === typeB) continue;

        for (const numB of sets[typeB]) {
          const firstTwo = numB.toString().slice(0, 2);

          if (lastTwo === firstTwo) {
            graph.get(key).push([typeB, numB]);
          }
        }
      }
    }
  }

  return graph;
};

const search = (graph, sets) => {
  const allTypes = Object.keys(sets);
  const totalTypes = allTypes.length;

  const getLastTwo = (num) => num.toString().slice(-2);
  const getFirstTwo = (num) => num.toString().slice(0, 2);

  const backtrack = (path, usedTypes) => {
    if (path.length === totalTypes) {
      const [startType, startNum] = path[0];
      const [endType, endNum] = path[path.length - 1];

      if (getLastTwo(endNum) === getFirstTwo(startNum)) {
        return path;
      }

      return null;
    }

    const [currentType, currentNum] = path[path.length - 1];

    const key = `${currentType},${currentNum}`;

    const nextCandidates = graph.get(key) || [];

    for (const [nextType, nextNum] of nextCandidates) {
      if (!usedTypes.has(nextType)) {
        usedTypes.add(nextType);
        path.push([nextType, nextNum]);

        const result = backtrack(path, usedTypes);

        if (result) return result;

        path.pop();
        usedTypes.delete(nextType);
      }
    }
    return null;
  };

  for (let startType of allTypes) {
    for (let startNum of sets[startType]) {
      const usedTypes = new Set([startType]);
      const path = [[startType, startNum]];
      const cycle = backtrack(path, usedTypes);
      if (cycle) {
        return cycle;
      }
    }
  }

  return null;
};

const solveProblem = () => {
  const sets = generateSets();

  const graph = buildGraph(sets);

  const searchCycle = search(graph, sets);

  return searchCycle.reduce((sum, curr) => sum + curr[1], 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

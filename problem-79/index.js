import { readFile } from "fs/promises";

const parseInput = (input) => input.split("\n");

const getDigits = (attempts) => {
  const digits = new Set();

  for (const attempt of attempts) {
    for (let i = 0; i < attempt.length; i++) {
      const digit = attempt[i];
      digits.add(digit);
    }
  }

  return digits;
};

const solveProblem = (input) => {
  const attempts = parseInput(input);

  const digits = getDigits(attempts);

  const adjacency = {};
  const inDegree = {};
  for (const digit of digits) {
    adjacency[digit] = new Set();
    inDegree[digit] = 0;
  }

  for (const attempt of attempts) {
    const [a, b, c] = attempt.split("");

    if (!adjacency[a].has(b)) {
      adjacency[a].add(b);
      inDegree[b]++;
    }

    if (!adjacency[b].has(c)) {
      adjacency[b].add(c);
      inDegree[c]++;
    }
  }

  const queue = [];
  for (const digit of digits) {
    if (inDegree[digit] === 0) queue.push(digit);
  }

  const passCodeOrder = [];

  while (queue.length > 0) {
    const current = queue.shift();
    passCodeOrder.push(current);

    for (const neigbour of adjacency[current]) {
      inDegree[neigbour]--;
      if (inDegree[neigbour] === 0) queue.push(neigbour);
    }
  }

  return passCodeOrder.join("");
};

const main = async () => {
  try {
    const input = (await readFile("input.txt", "utf-8")).trim();
    console.log(solveProblem(input));
  } catch (err) {
    console.error(err);
  }
};

main();

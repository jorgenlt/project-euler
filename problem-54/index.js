import { readFile } from "fs/promises";
import findRepeatingNumbers from "../utils/findRepeatingNumbers.js";

const parseInput = (input) => {
  return input.split("\n").map((l) => {
    const arr = l.split(" ");
    return [arr.slice(0, 5), arr.slice(5)];
  });
};

const values = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

const getPoints = (game) => {
  return game.map((card) => values[card[0]]).sort((a, b) => a - b);
};

const hasOnePair = (game) => {
  const points = getPoints(game);
  const pointCounts = {};
  const repeatingNumbers = findRepeatingNumbers(points);

  for (const point of points) {
    pointCounts[point] = (pointCounts[point] || 0) + 1;
  }

  if (repeatingNumbers.length === 1 && pointCounts[repeatingNumbers[0]] === 2)
    return repeatingNumbers[0];

  return false;
};

const hasTwoPairs = (game) => {
  const points = getPoints(game);
  const repeatingNumbers = findRepeatingNumbers(points);
  if (repeatingNumbers.length === 2) return repeatingNumbers;
  return false;
};

const hasThreeOfAKind = (game) => {
  const points = getPoints(game);
  const pointCounts = {};

  for (const point of points) {
    pointCounts[point] = (pointCounts[point] || 0) + 1;
    if (pointCounts[point] === 3) return point;
  }

  return false;
};

const hasStraight = (game) => {
  const points = getPoints(game);

  for (let i = 1; i < points.length; i++) {
    if (points[i] === points[i - 1] + 1) continue;
    return false;
  }

  return points.reduce((sum, prev) => sum + prev, 0);
};

const hasFlush = (game) => {
  const suit = game[0][1];
  if (game.every((e) => e[1] === suit)) return true;
  return false;
};

const hasFullHouse = (game) => {
  const points = getPoints(game);
  const pointCounts = {};

  for (const point of points) {
    pointCounts[point] = (pointCounts[point] || 0) + 1;
  }

  const counts = Object.values(pointCounts);

  if (counts.includes(2) && counts.includes(3)) {
    return pointCounts;
  }

  return false;
};

const hasFourOfAKind = (game) => {
  const points = getPoints(game);
  const pointCounts = {};

  for (const point of points) {
    pointCounts[point] = (pointCounts[point] || 0) + 1;
    if (pointCounts[point] === 4) return true;
  }

  return false;
};

const hasStraightFlush = (game) => {
  if (hasStraight(game) && hasFlush(game)) return true;
  return false;
};

const hasRoyalFlush = (game) => {
  const flush = hasFlush(game);
  const points = getPoints(game);
  const totalPoints = points.reduce((sum, curr) => sum + curr, 0);

  if (flush && totalPoints === 60) return true;

  return false;
};

const evaluateHand = (hand) => {
  if (hasRoyalFlush(hand)) return 9;
  if (hasStraightFlush(hand)) return 8;
  if (hasFourOfAKind(hand)) return 7;
  if (hasFullHouse(hand)) return 6;
  if (hasFlush(hand)) return 5;
  if (hasStraight(hand)) return 4;
  if (hasThreeOfAKind(hand)) return 3;
  if (hasTwoPairs(hand)) return 2;
  if (hasOnePair(hand)) return 1;
  return 0;
};

const evaluateHighCards = (handA, handB) => {
  const pointsA = getPoints(handA);
  const pointsB = getPoints(handB);

  for (let i = pointsA.length - 1; i >= 0; i--) {
    const cardA = pointsA[i];
    const cardB = pointsB[i];

    if (cardA > cardB) {
      return "player1";
    }

    if (cardA < cardB) {
      return "player2";
    }
  }
};

const compareHands = (a, b) => {
  const scoreA = evaluateHand(a);
  const scoreB = evaluateHand(b);

  if (scoreA === scoreB) {
    if (scoreA === 0) {
      return evaluateHighCards(a, b);
    }

    if (scoreA === 1) {
      const pairA = hasOnePair(a);
      const pairB = hasOnePair(b);

      if (pairA > pairB) {
        return "player1";
      }

      if (pairA < pairB) {
        return "player2";
      }

      if (pairA === pairB) {
        return evaluateHighCards(a, b);
      }
    }
  } else {
    return scoreA > scoreB ? "player1" : "player2";
  }
};
const solveProblem = (input) => {
  const games = parseInput(input);

  let scorePlayer1 = 0;
  let scorePlayer2 = 0;

  for (const game of games) {
    const [a, b] = game;
    const result = compareHands(a, b);

    if (result === "player1") {
      scorePlayer1++;
    } else if (result === "player2") {
      scorePlayer2++;
    } else {
      throw new Error("Invalid result");
    }
  }

  return {
    scorePlayer1,
    scorePlayer2,
  };
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

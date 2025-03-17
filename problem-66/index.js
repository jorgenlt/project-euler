import isPerfectSquare from "../utils/isPerfectSquare.js";

// Pell's equation
const solvePell = (D) => {
  const a0 = BigInt(Math.floor(Math.sqrt(Number(D))));

  let m = 0n;
  let d = 1n;
  let a = a0;
  const period = [];

  while (true) {
    m = d * a - m;
    d = (D - m * m) / d;
    a = BigInt(Math.floor((Number(a0) + Number(m)) / Number(d)));

    period.push(a);

    if (a === 2n * a0) break;
  }

  const L = period.length;

  let convTerms;

  if (L % 2 === 0) {
    convTerms = [a0, ...period];
  } else {
    convTerms = [a0, ...period, ...period];
  }

  let pPrevPrev = 0n;
  let pPrev = 1n;
  let qPrevPrev = 1n;
  let qPrev = 0n;
  let p = 0n;
  let q = 0n;

  for (let i = 0; i < convTerms.length; i++) {
    const ai = convTerms[i];

    p = ai * pPrev + pPrevPrev;
    q = ai * qPrev + qPrevPrev;
    pPrevPrev = pPrev;
    pPrev = p;
    qPrevPrev = qPrev;
    qPrev = q;
  }

  return { x: p, y: q };
};

const solveProblem = () => {
  let largestX = 0n;
  let dAtLargestX = null;

  for (let D = 2; D <= 1000; D++) {
    if (isPerfectSquare(D)) continue;

    const solution = solvePell(BigInt(D));

    if (solution && solution.x > largestX) {
      largestX = solution.x;
      dAtLargestX = D;
    }
  }

  return dAtLargestX;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

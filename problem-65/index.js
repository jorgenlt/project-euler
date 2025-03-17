const solveProblem = () => {
  const a = [];

  for (let i = 0; i < 100; i++) {
    if (i === 0) {
      a.push(2n);
      continue;
    }

    const pos = i - 1;
    const cycleIndex = pos % 3;
    const k = BigInt(Math.floor(pos / 3)) + 1n;

    if (cycleIndex === 0) a.push(1n);
    if (cycleIndex === 1) a.push(2n * k);
    if (cycleIndex === 2) a.push(1n);
  }

  let pMinus2 = 0n;
  let pMinus1 = 1n;
  let qMinus2 = 1n;
  let qMinus1 = 0n;
  let p = 0n;
  let q = 0n;

  for (let i = 0; i < 100; i++) {
    p = a[i] * pMinus1 + pMinus2;
    q = a[i] * qMinus1 + qMinus2;

    pMinus2 = pMinus1;
    pMinus1 = p;
    qMinus2 = qMinus1;
    qMinus1 = q;
  }

  return p
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, curr) => sum + curr, 0);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

const expand = (p, q) => {
  const newP = p + 2n * q;
  const newQ = p + q;
  return [newP, newQ]; // Numerator, denominator
};

const solveProblem = () => {
  let count = 0;
  let currP = 3n;
  let currQ = 2n;

  for (let i = 1; i <= 1000; i++) {
    const [nextP, nextQ] = expand(currP, currQ);
    const pLength = nextP.toString().length;
    const qLength = nextQ.toString().length;

    if (pLength > qLength) {
      count++;
    }

    currP = nextP;
    currQ = nextQ;
  }

  return count;
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

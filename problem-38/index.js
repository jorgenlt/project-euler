const solveProblem = () => {
  const candidates = [];

  for (let i = 3; i < 10000; i++) {
    let strNum = "";

    for (let j = 1; j <= 10; j++) {
      if (strNum.length >= 9) continue;

      const num = i * j;

      strNum += num.toString();
    }

    if (strNum.length === 9) {
      if (strNum.split("").map(Number).sort().join("") === "123456789") {
        candidates.push(Number(strNum));
      }
    }
  }

  return Math.max(...candidates);
};

const main = () => {
  try {
    console.log(solveProblem());
  } catch (err) {
    console.error(err);
  }
};

main();

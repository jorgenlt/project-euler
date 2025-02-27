const solvePuzzle = () => {
  let date = new Date();
  date.setFullYear(1901);
  date.setMonth(0);
  date.setDate(1);

  let sundayCount = 0;

  while (true) {
    if (date.getFullYear() === 2001) {
      return sundayCount;
    }

    if (date.getDay() === 0) {
      sundayCount++;
    }

    date.setMonth(date.getMonth() + 1);
  }
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

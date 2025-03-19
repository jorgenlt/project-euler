const findRepeatingNumbers = (arr) => {
  const numberCount = {};
  const repeatingNumbers = [];

  for (let num of arr) {
    if (numberCount[num]) {
      numberCount[num]++;
    } else {
      numberCount[num] = 1;
    }
  }

  for (let num in numberCount) {
    if (numberCount[num] > 1) {
      repeatingNumbers.push(Number(num));
    }
  }

  return repeatingNumbers;
};

export default findRepeatingNumbers;

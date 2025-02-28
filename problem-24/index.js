const getPermutations = (array) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(array);

  return result;
};

const solvePuzzle = () => {
  const permuations = getPermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    .map((e) => e.join(""))
    .sort();

  return permuations[999999];
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

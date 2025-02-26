const numbersToChars = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "onehundred",
  200: "twohundred",
  300: "threehundred",
  400: "fourhundred",
  500: "fivehundred",
  600: "sixhundred",
  700: "sevenhundred",
  800: "eighthundred",
  900: "ninehundred",
  1000: "onethousand",
};

const calcLetters = (num) => {
  if (numbersToChars[num]) {
    return numbersToChars[num].length;
  }

  const str = num.toString();
  let chars = "";

  const ones = +str[str.length - 1] || 0;
  const tens = +str[str.length - 2] || 0;
  const hundreds = +str[str.length - 3] || 0;

  if (hundreds) {
    chars += numbersToChars[hundreds] + "hundred";
    if (tens !== 0 || ones !== 0) {
      chars += "and";
    }
  }

  if (tens === 1) {
    chars += numbersToChars[tens * 10 + ones];
  } else {
    if (tens > 1) {
      chars += numbersToChars[tens * 10] || "";
    }
    if (ones > 0) {
      chars += numbersToChars[ones];
    }
  }

  return chars.length;
};

const solvePuzzle = () => {
  let letterCount = 0;
  for (let i = 1; i <= 1000; i++) {
    letterCount += calcLetters(i);
  }
  return letterCount;
};

const main = () => {
  try {
    console.log(solvePuzzle());
  } catch (err) {
    console.error(err);
  }
};

main();

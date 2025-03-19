const isPandigital = (num) => {
  const numStr = num.toString();
  const length = numStr.length;
  const digitSet = new Set(numStr);

  for (let i = 1; i <= length; i++) {
    if (!digitSet.has(i.toString())) {
      return false;
    }
  }

  return true;
};

export default isPandigital;

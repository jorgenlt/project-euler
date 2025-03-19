const isPerfectSquare = (num) => {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
};

export default isPerfectSquare;

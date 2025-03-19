// Greatest common divisor
const getGcd = (a, b) => {
  if (b === 0) return a;
  return getGcd(b, a % b);
};

export default getGcd;

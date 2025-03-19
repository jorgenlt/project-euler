const fibonacci = (n) => {
  let a = BigInt(0);
  let b = BigInt(1);
  let c = BigInt(1);

  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }

  return c;
};

export default fibonacci;

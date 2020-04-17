const mul = (
  [
    [a1, a2],
    [a3, a4],
  ],
  [
    [b1, b2],
    [b3, b4],
  ],
) => [
  [a1 * b1 + a2 * b3, a1 * b2 + a2 * b4],
  [a3 * b1 + a4 * b3, a3 * b2 + a4 * b4],
];

const matrix = [
  [0n, 1n],
  [1n, 1n],
];

const unitMatrix = [
  [1n, 0n],
  [0n, 1n],
];

module.exports = (n) => {
  let result = unitMatrix;
  const bits = n.toString(2);
  [...bits].forEach((bit) => {
    result = mul(result, result);
    if (bit === '1') {
      result = mul(result, matrix);
    }
  });
  return result[1][0];
};

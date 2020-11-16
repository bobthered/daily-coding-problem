const minimumBuildHouseCost = matrix => {
  return matrix;
};

const houses = new Array(5).fill(0);
const costs = [...houses].map(() =>
  new Array(5)
    .fill(0)
    .map((_, i) => Math.floor(100000 * (1 - i / 100) * (1 + Math.random()))),
);

console.log(minimumBuildHouseCost(costs));

const numberOfUniqueWaysToClimbStaircase = n => {
  if (n < 3) return n;

  let prev = 1;
  let curr = 2;
  for (let i = 2; i < n; i++) {
    const sum = prev + curr;
    prev = curr;
    curr = sum;
  }
  return curr;
};

module.exports = numberOfUniqueWaysToClimbStaircase;

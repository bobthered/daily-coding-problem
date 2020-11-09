const estimatePIUsingMonteCarloMethod = (n = 10000000) =>
  Math.floor(
    [...Array(n)]
      .fill(0)
      .map(() =>
        Math.sqrt(Math.pow(Math.random(), 2) + Math.pow(Math.random(), 2)),
      )
      .filter(a => a < 1).length /
      (n / 4000),
  ) / 1000;

module.exports = estimatePIUsingMonteCarloMethod;

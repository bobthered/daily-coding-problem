/* eslint-disable no-undef */
const estimatePIUsingMonteCarloMethod = require('.');

test('Monte Carlo PI approximation is between 3.14 and 3.15', () => {
  expect(estimatePIUsingMonteCarloMethod()).toBeGreaterThanOrEqual(3.14);
  expect(estimatePIUsingMonteCarloMethod()).toBeLessThanOrEqual(3.15);
});

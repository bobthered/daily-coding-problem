/* eslint-disable no-undef */
const largestSumOfNonAdjacentNumbers = require('.');

test('[2, 4, 6, 2, 5] should return 13', () => {
  expect(largestSumOfNonAdjacentNumbers([2, 4, 6, 2, 5])).toEqual(13);
});
test('[5, 1, 1, 5] should return 10', () => {
  expect(largestSumOfNonAdjacentNumbers([5, 1, 1, 5])).toEqual(10);
});

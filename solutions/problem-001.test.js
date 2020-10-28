const sumExistsInArray = require('./problem-001');

test('Given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17', () => {
  expect(sumExistsInArray([10, 15, 3, 7], 17)).toBe(true);
});
test('Empty array should return false', () => {
  expect(sumExistsInArray([], 1)).toBe(false);
});

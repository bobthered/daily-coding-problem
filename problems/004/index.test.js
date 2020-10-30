const findFirstMissingPositiveInteger = require('./index');

test('The input [3, 4, -1, 1] should give 2', () => {
  expect(findFirstMissingPositiveInteger([3, 4, -1, 1])).toEqual(2)
});
test('The input [1, 2, 0] should give 3', () => {
  expect(findFirstMissingPositiveInteger([1, 2, 0])).toEqual(3)
});
test('The input [1, 2, 0, 4, -5] should give 3', () => {
  expect(findFirstMissingPositiveInteger([1, 2, 0, 4, -5])).toEqual(3)
});
test('The input [7,8,9,11,12] should give 1', () => {
  expect(findFirstMissingPositiveInteger([7,8,9,11,12])).toEqual(1)
});
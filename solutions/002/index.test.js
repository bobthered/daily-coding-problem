const productOfAllOtherArrayElements = require('./index');

test('[1, 2, 3, 4, 5] should equal [120, 60, 40, 30, 24]', () => {
  expect(productOfAllOtherArrayElements([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
});
test('[3, 2, 1] should equal [2, 3, 6]', () => {
  expect(productOfAllOtherArrayElements([3, 2, 1])).toEqual([2, 3, 6])
});
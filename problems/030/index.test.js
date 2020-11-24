const unitsOfWater = require('.');

test('Given the input [2, 1, 2], we can hold 1 unit of water in the middle', () => {
  expect(unitsOfWater([2, 1, 2])).toEqual(1);
});
test('Given the input [3, 0, 1, 3, 0, 5], we can hold 3 units in the first index, 2 in the second, and 3 in the fourth index (we cannot hold 5 since it would run off to the left), so we can trap 8 units of water.', () => {
  expect(unitsOfWater([3, 0, 1, 3, 0, 5])).toEqual(8);
});

module.exports = unitsOfWater;

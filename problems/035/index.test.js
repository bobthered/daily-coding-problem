/* eslint-disable quotes */
const sortRGB = require('.');

test("Given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B']", () => {
  expect(sortRGB(['G', 'B', 'R', 'R', 'B', 'R', 'G'])).toEqual([
    'R',
    'R',
    'R',
    'G',
    'G',
    'B',
    'B',
  ]);
});

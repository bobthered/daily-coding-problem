const minSteps = require('.');

test(`[
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
] and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7`, () => {
  expect(
    minSteps(
      [
        [0, 0, 0, 0],
        [1, 1, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [3, 0],
      [0, 0],
    ),
  ).toEqual(7);
});

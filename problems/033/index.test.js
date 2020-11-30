const runningMedian = require('.');

test('Given the sequence [2, 1, 5, 7, 2, 0, 5], the running median should be [2, 1.5, 2, 3.5, 2, 2, 2]', () => {
  expect(runningMedian([2, 1, 5, 7, 2, 0, 5])).toEqual([
    2,
    1.5,
    2,
    3.5,
    2,
    2,
    2,
  ]);
});

/* eslint-disable no-undef */
const maxValueOfSubarray = require('.');

test('Max value of 3 subarray items of [10, 5, 2, 7, 8, 7] is [10, 7, 8, 8]', () => {
  expect(maxValueOfSubarray([10, 5, 2, 7, 8, 7], 3)).toEqual([10, 7, 8, 8]);
});

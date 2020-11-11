/* eslint-disable no-undef */
const lengthOfLongestAbsolutePath = require('.');

test('dir\n\tdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext is 32', () => {
  expect(
    lengthOfLongestAbsolutePath(
      'dir\n\tdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext',
    ),
  ).toBe(32);
});

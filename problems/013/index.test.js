/* eslint-disable quotes */
/* eslint-disable no-undef */
const longestSubstringWithNDistinctCharacters = require('.');

test("'abcba' and 2 distincts is 'bcb'", () => {
  expect(longestSubstringWithNDistinctCharacters('abcba', 2)).toEqual('bcb');
});

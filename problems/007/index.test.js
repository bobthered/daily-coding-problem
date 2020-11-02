/* eslint-disable no-undef */
const countPossibleDecodedMessages = require('.');

test('111 should give 3', () => {
  expect(countPossibleDecodedMessages(111)).toEqual(3);
});

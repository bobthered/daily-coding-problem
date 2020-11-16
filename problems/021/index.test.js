/* eslint-disable no-undef */
const roomsRequired = require('.');

const times = [
  [30, 75],
  [0, 50],
  [60, 150],
];

test('Given [(30, 75), (0, 50), (60, 150)], you should return 2', () => {
  expect(roomsRequired(times)).toEqual(2);
});

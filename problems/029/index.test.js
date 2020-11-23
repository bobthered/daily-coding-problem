const runLength = require('.');

test('The run-length encoding of "AAAABBBCCDAA" is "4A3B2C1D2A"', () => {
  expect(runLength.encode('AAAABBBCCDAA')).toEqual('4A3B2C1D2A');
});
test('The run-length decoding of "4A3B2C1D2A" is "AAAABBBCCDAA"', () => {
  expect(runLength.decode('4A3B2C1D2A')).toEqual('AAAABBBCCDAA');
});

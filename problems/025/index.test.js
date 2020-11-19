const regularExpressionTest = require('.');

test('regular expressions "ra." and string "ray" is true', () => {
  expect(regularExpressionTest('ra.', 'ray')).toEqual(true);
});

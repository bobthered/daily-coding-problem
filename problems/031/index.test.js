const editDistance = require('.');

test('The edit distance between “kitten” and “sitting” is three: substitute the “k” for “s”, substitute the “e” for “i”, and append a “g”.', () => {
  expect(editDistance('kitten', 'sitting')).toEqual(3);
});

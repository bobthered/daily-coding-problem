const justifyText = require('.');

test('given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, it should return ["the  quick brown", "fox  jumps  over", "the   lazy   dog"]', () => {
  expect(
    justifyText(
      ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'],
      16,
    ),
  ).toEqual(['the  quick brown', 'fox  jumps  over', 'the   lazy   dog']);
});

module.exports = justifyText;

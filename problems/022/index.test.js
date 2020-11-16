/* eslint-disable no-undef */
/* eslint-disable quotes */
const stringToMatchedList = require('.');

test("Given the set of words 'quick', 'brown', 'the', 'fox', and the string \"thequickbrownfox\", you should return ['the', 'quick', 'brown', 'fox'].", () => {
  expect(
    stringToMatchedList('thequickbrownfox', ['quick', 'brown', 'the', 'fox']),
  ).toEqual(['the', 'quick', 'brown', 'fox']);
});

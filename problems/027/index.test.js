const bracketsAreBalanced = require('.');

test('"([])[]({})" is balanced (well-formed)', () => {
  expect(bracketsAreBalanced('([])[]({})')).toEqual(true);
});
test('"([)]" is not balanced (well-formed)', () => {
  expect(bracketsAreBalanced('([)]')).toEqual(false);
});
test('"((()" is not balanced (well-formed)', () => {
  expect(bracketsAreBalanced('((()')).toEqual(false);
});

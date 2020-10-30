const { cons, car, cdr } = require('./index');

test('car(cons(3, 4)) is 3', () => {
  expect(car(cons(3, 4))).toEqual(3);
});
test('cdr(cons(3, 4)) is 4', () => {
  expect(cdr(cons(3, 4))).toEqual(4);
});

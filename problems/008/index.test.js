/* eslint-disable no-undef */
const { countUnivalSubtrees, Node } = require('.');

const nodes1 = new Node(0, new Node(1), new Node(0));
const nodes2 = new Node(0, new Node(1), new Node(0, null, new Node(0)));
const nodes5 = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0)),
);

test('nodes1 equals 1', () => {
  expect(countUnivalSubtrees(nodes1)).toEqual(1);
});
test('nodes2 equals 3', () => {
  expect(countUnivalSubtrees(nodes2)).toEqual(3);
});
test('Example equals 5', () => {
  expect(countUnivalSubtrees(nodes5)).toEqual(5);
});

/* eslint-disable no-undef */
const { Node, nodeIntersectionPoint } = require('.');

const equalList = new Node(8, new Node(10));
const list1 = new Node(3, new Node(7, equalList));
const list2 = new Node(99, new Node(1, equalList));

test('A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8', () => {
  expect(nodeIntersectionPoint(list1, list2)).toEqual(equalList);
});

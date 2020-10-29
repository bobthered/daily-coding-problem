const { deserialize, Node, serialize } = require('./index');

const node = new Node(
  'root',
  new Node('left', new Node('left.left')),
  new Node('right'),
);

test('Node class can receive val, left and right parameters', () => {
  expect(node.val).toEqual('root');
  expect(node.left.val).toEqual('left');
  expect(node.right.val).toEqual('right');
  expect(node.left.left.val).toEqual('left.left');
});

test('Nodes can be serialized', () => {
  expect(serialize(node)).toEqual(
    'root,left,left.left,null,null,null,right,null,null,',
  );
});
test('Nodes can be deserialized', () => {
  expect(deserialize(serialize(node)).left.left.val).toEqual('left.left');
});

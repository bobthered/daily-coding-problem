const countUnivalSubtrees = root => {
  let count = 1;
  const helper = (node, val) => {
    ['left', 'right'].forEach(direction => {
      if (node[direction] !== null) {
        if (node[direction].val === val) {
          count++;
          helper(node[direction], val);
        } else {
          helper(node[direction], node[direction].val);
        }
      }
    });
  };
  helper(root, root.val);
  return count;
};

class Node {
  constructor(val, id, left = null, right = null) {
    this.val = val;
    this.id = id;
    this.left = left;
    this.right = right;
  }
}

const nodes = new Node(
  0,
  0,
  new Node(1, 1),
  new Node(
    0,
    2,
    new Node(1, 3, new Node(1, 5), new Node(1, 6)),
    new Node(0, 4),
  ),
);
console.log(countUnivalSubtrees(nodes));

module.exports = { countUnivalSubtrees, Node };

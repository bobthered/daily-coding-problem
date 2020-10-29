const deserialize = str => {
  const list = str.split(',');
  const recur = list => {
    if (list[0] == 'null') {
      list.shift();
      return null;
    }
    const node = new Node(list[0]);
    list.shift();
    node.left = recur(list);
    node.right = recur(list);
    return node;
  };
  return recur(list);
};
class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const serialize = root => {
  const recur = (str, node) => {
    if (!node) return (str += 'null,');
    str += `${node.val},`;
    str = recur(str, node.left);
    str = recur(str, node.right);
    return str;
  };
  return recur('', root);
};

module.exports = { deserialize, Node, serialize };

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const nodeIntersectionPoint = (list1, list2) => {
  const nodeHashTraversal = node => {
    if (!(node.value in hash)) hash[node.value] = node;
    if (node.next !== null) nodeHashTraversal(node.next);
  };
  const nodeTraversal = node => {
    if (node.value in hash) return node;
    return nodeTraversal(node.next);
  };
  const hash = {};
  nodeHashTraversal(list1);
  return nodeTraversal(list2);
};

module.exports = { Node, nodeIntersectionPoint };

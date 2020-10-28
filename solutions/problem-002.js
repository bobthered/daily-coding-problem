const productOfAllOtherArrayElements = array =>
  array.map((_, i, arr) =>
    [...arr].filter((_, j) => j !== i).reduce((a, c) => a * c, 1),
  );

module.exports = productOfAllOtherArrayElements;

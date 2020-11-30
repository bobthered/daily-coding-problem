const sortRGB = arr => {
  const values = { R: 0, G: 1, B: 2 };
  return arr.sort((a, b) => (values[a] < values[b] ? -1 : 1));
};

module.exports = sortRGB;

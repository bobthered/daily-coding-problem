const autoComplete = (s, arr) =>
  arr.filter(a => new RegExp(`^${s}`, 'g').test(a));

module.exports = autoComplete;

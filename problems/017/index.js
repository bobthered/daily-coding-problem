const lengthOfLongestAbsolutePath = s =>
  s.split('\n').reduce(
    (a, c) => {
      if (!('levels' in a)) {
        a.levels = new Map();
        a.levels.set(0, 0);
      }
      const level = c.lastIndexOf('\t') + 1;
      const fileLength = c.length - level;
      if (c.includes('.')) {
        a.longest = Math.max(a.longest, a.levels.get(level) + fileLength);
      } else {
        const lastLevel = a.levels.get(level);
        a.levels.set(level + 1, lastLevel + fileLength + 1);
      }
      return a;
    },
    { longest: 0 },
  ).longest;

module.exports = lengthOfLongestAbsolutePath;

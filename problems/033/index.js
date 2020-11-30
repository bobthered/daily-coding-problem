const runningMedian = arr =>
  arr.map((_, i) => {
    const items = [...arr].splice(0, i + 1).sort();
    if (items.length % 2 === 1) return items[Math.floor(items.length / 2)];
    return (items[items.length / 2 - 1] + items[items.length / 2]) / 2;
  });

module.exports = runningMedian;

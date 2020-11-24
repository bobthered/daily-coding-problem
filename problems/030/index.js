const unitsOfWater = arr => {
  // get min
  const min = Math.min(arr[0], arr[arr.length - 1]);

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) total += min - arr[i];
  }
  return total;
};

module.exports = unitsOfWater;

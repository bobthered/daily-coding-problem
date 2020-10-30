const sumExistsInArray = (array, sum) => {
  let sumExists = false;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) {
        sumExists = true;
        break;
      }
    }
    if (sumExists) break;
  }
  return sumExists;
};

module.exports = sumExistsInArray;

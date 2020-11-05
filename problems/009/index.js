const largestSumOfNonAdjacentNumbers = array => {
  let incl = 0;
  let excl = 0;
  let new_excl;
  array.forEach(el => {
    new_excl = excl > incl ? excl : incl;
    incl = excl + el;
    excl = new_excl;
  });

  return excl > incl ? excl : incl;
};

module.exports = largestSumOfNonAdjacentNumbers;

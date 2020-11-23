const bracketsAreBalanced = s => {
  // initialize bracket depth
  const bracketDepth = [];

  // initialize bracket pair hash
  const bracketPairHash = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  // convert string to array
  s = s.split('');

  // loop through brackets
  for (let i = 0; i < s.length; i++) {
    // check if bracket is a starting bracket
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') bracketDepth.push(s[i]);

    // check for ending brackets
    if (Object.values(bracketPairHash).indexOf(s[i]) !== -1) {
      // check that last bracket depth value matches bracket pair
      if (
        bracketDepth[bracketDepth.length - 1] ===
        Object.keys(bracketPairHash).filter(a => bracketPairHash[a] === s[i])[0]
      ) {
        bracketDepth.pop();
      } else {
        return false;
      }
    }
  }

  // check that bracket depth is empty
  if (bracketDepth.length === 0) return true;

  return false;
};

module.exports = bracketsAreBalanced;

const longestSubstringWithNDistinctCharacters = (s, n) => {
  // check if string length is less than n
  if (s.length < n) return undefined;

  // check if string length is same as n
  if (s.length === n) return s;

  // initialize longest substring;
  let longestSubstring = '';

  // Loop through string;
  for (let i = 0; i < s.length - n; i++) {
    // initialize substring;
    let substring = '';

    // get possible letters
    const letters = s.substring(i, s.length).split('');

    // set hash
    const hash = {};

    // loop through letters
    for (let j = 0; j < letters.length; j++) {
      // check if letter is in hash
      if (!(letters[j] in hash)) hash[letters[j]] = true;

      // check if hash length is less than or equal to n
      if (Object.keys(hash).length <= n) substring += letters[j];

      // break loop if too many distincts are found
      if (Object.keys(hash).length > n) break;
    }

    // check if substring is longer than current longestSubstring
    if (substring.length > longestSubstring.length)
      longestSubstring = substring;
  }

  return longestSubstring;
};

module.exports = longestSubstringWithNDistinctCharacters;

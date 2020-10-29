const findFirstMissingPositiveInteger = array => {
  // check for empty array
  if ( array.length < 1 ) return 1;

  // create hash
  const hash = {};

  // hash all positive numbers
  for ( let int of array ) { if ( int > 0 ) hash[int] = true };

  // 1 is the first positive integer
  let missing = 1;

  for ( missing; missing <=array.length; missing++ ) {
    // check if missing key exists in hash
    if ( !hash[missing] ) return missing;
  }

  // otherwise return missing
  return missing;
}

module.exports = findFirstMissingPositiveInteger;
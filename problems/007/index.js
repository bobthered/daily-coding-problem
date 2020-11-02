const countPossibleDecodedMessages = encoded => {
  const helper = (number, length) => {
    if (length === 0) return 1;
    const str = number.toString();
    const i = str.length - length;
    if (str.substring(i, i + 1) === '0') return 0;
    let result = helper(+number, length - 1);
    if (length >= 2 && +str.substring(i, i + 2) <= 26)
      result += helper(number, length - 2);
    return result;
  };
  return helper(encoded, encoded.toString().length);
};

module.exports = countPossibleDecodedMessages;

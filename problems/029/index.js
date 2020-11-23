const runLength = {
  decode: s => {
    return s
      .match(/\d\D/g)
      .map(a => a[1].repeat(+a[0]))
      .join('');
  },
  encode: s => {
    let output = '';
    let count = 1;
    for (let i = 0; i < s.length; i++) {
      if (s.substring(i, i + 1) !== s.substring(i + 1, i + 2)) {
        output += count + s.substring(i, i + 1);
        count = 1;
      } else {
        count++;
      }
    }
    return output;
  },
};

module.exports = runLength;

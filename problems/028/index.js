const justifyText = (arr, k) => {
  // initialize array rows
  const rows = [];

  // initialize row vars
  let row = [];
  let rowLength = 0;

  // loop through arr
  for (let i = 0; i < arr.length; i++) {
    if (rowLength + row.length + arr[i].length > k) {
      rows.push(row);
      row = [];
      rowLength = 0;
    }
    row.push(arr[i]);
    rowLength += arr[i].length;
  }
  rows.push(row);

  // loop through rows
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].length === 1)
      rows[i][0] = rows[i][0] + ' '.repeat(16 - rows[i].length);
    let totalSpaces = k - [...rows[i].join('')].length;
    // loop through row elements
    for (let j = 0; j < rows[i].length - 1; j++) {
      let spaces = Math.floor(totalSpaces / (rows[i].length - 1));
      if (totalSpaces % (rows[i].length - 1) !== 0) {
        spaces++;
        totalSpaces--;
      }
      rows[i][j] = rows[i][j] + ' '.repeat(spaces);
    }
    rows[i] = rows[i].join('');
  }
  return rows;
};

module.exports = justifyText;

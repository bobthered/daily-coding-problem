const stringToMatchedList = (s, arr) => s.match(new RegExp(arr.join('|'), 'g'));

module.exports = stringToMatchedList;

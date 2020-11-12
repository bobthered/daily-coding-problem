const maxValueOfSubarray = (arr, k) =>
  [...arr]
    .splice(0, arr.length - k + 1)
    .map((_, i) => Math.max(...[...arr].splice(i, k)));

module.exports = maxValueOfSubarray;

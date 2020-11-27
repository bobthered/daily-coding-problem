const editDistance = (s1, s2) => {
  let distance = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) distance++;
  }
  distance += Math.max(0, s2.length - s1.length);
  return distance;
};

module.exports = editDistance;

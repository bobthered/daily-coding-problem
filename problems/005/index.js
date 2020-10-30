const cons = (a, b) => {
  const pair = f => f(a, b);
  return pair;
};
const car = f => {
  const first = (a, b) => a;
  return f(first);
};
const cdr = f => {
  const last = (a, b) => b;
  return f(last);
};

module.exports = { cons, car, cdr };

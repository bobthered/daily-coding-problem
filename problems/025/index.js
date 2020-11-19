const regularExpressionTest = (re, s) => new RegExp(`^${re}$`).test(s);

module.exports = regularExpressionTest;

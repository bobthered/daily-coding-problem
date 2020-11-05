/* eslint-disable quotes */
/* eslint-disable no-undef */
const autoComplete = require('.');

test("The query string 'de' and the set of strings ['dog', 'deer', 'deal'], return ['deer', 'deal'].", () => {
  expect(autoComplete('de', ['dog', 'deer', 'deal'])).toEqual(['deer', 'deal']);
});

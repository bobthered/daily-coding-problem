/* eslint-disable quotes */
/* eslint-disable no-undef */
const Log = require('.');

const log = new Log();
log.record('Log test');

test("log.getLast() is 'Log test'", () => {
  expect(log.getLast()).toBe('Log test');
});

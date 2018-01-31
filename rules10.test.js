const promisecall = require('./rule10');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Testing the iterate function ', () => {
  it('It must return a number ', () => {
    expect(typeof (promisecall.iterate(1))).toBe('number');
  });
  it('output should be number + 1 ', () => {
    const no = 10;
    expect((promisecall.iterate(no))).toBe(no + 1);
  });
});

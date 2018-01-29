const warm = require('./warmup1');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('Testing the calling function', () => {
  it('function logs to console correctly', () => {
    warm();
    expect(global.console.log).toHaveBeenCalledWith('TIMED OUT!');
  });
});

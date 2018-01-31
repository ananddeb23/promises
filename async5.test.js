const promise = require('./async5');


global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};
describe('Testing the  promise', () => {
  it('function preserves the order', (done) => {
    const ar = [];
    promise.then((msg) => {
      ar.push(msg);
      // expect(global.console.log).toHaveBeenCalledWith('MAIN PROGRAM');
      // expect(global.console.log).toHaveBeenCalledWith('PROMISE VALUE');
      expect(ar).toEqual(['MAIN PROGRAM', 'PROMISE VALUE']);
      done();
    });
    ar.push('MAIN PROGRAM');
  });
  // it('function logs to console correctly', () => {
  //   promise.then();
  //   expect(global.console.log).toHaveBeenCalledWith('MAIN PROGRAM');
  //   expect(global.console.log).toHaveBeenCalledWith('PROMISE VALUE');
  // });
});

const promise = require('./file2');


describe('Testing the calling function', () => {
  it('function logs to console correctly', async () => {
    await promise.then((msg) => { expect(msg).toBe('FULFILLED!'); });
  });
});

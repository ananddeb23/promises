const promise = require('./file2');


describe('Testing the promise which must be fulfilled', () => {
  it('fulfilled logs to console correctly', async () => {
    await promise.then((msg) => { expect(msg).toBe('FULFILLED!'); });
  });
});

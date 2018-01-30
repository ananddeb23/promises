const promise = require('./promise7');

describe('Testing the function promise', () => {
  it('function logs to console correctly', async () => {
    await promise.then((msg) => { expect(msg).toBe('second!'); });
  });
});

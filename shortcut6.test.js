const { promise1, promise2, promise3 } = require('./shortcut6');


describe('Testing the function promise', () => {
  it('function logs to console correctly', async () => {
    await promise1.then(undefined, (err) => { expect(err.message).toBe('ERROR!!!!'); });

    // await promise1.catch((err) => { expect(err.message).toBe('ERROR!!!!'); });
  });
  it('function logs to console correctly', async () => {
    await promise2.then((msg) => { expect(msg).toBe('HELLO SUCCESS!'); });
  });
  it('function logs to console correctly', async () => {
    await promise3.catch((err) => { expect(err.message).toBe('FAILED'); });
  });
});

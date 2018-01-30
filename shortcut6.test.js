const promise = require('./rejectnot4');


describe('Testing the function promise', () => {
  it('function logs to console correctly', async () => {
    await promise.promise1.then(undefined, (err) => { expect(err.message).toBe('REJECTED!'); });
  });
  it('function logs to console correctly', async () => {
    await promise.promise2.then((msg) => { expect(msg).toBe('I FIRED'); });
  });
  it('function logs to console correctly', async () => {
    await promise.promise3.then(undefined, (err) => { expect(err.message).toBe('REJECTED!'); });
  });
});

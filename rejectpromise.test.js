const promise = require('./rejectpromise3');


describe('Testing the function promise', () => {
  it('function logs to console correctly', async () => {
    await promise.then(undefined, (err) => { expect(err.message).toBe('REJECTED!'); });
  });
});

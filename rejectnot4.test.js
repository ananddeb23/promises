const promise = require('./rejectnot4');


describe('Testing the function promise', () => {
  it('function logs to console correctly', async () => {
    await promise.then(
      (msg) => { expect(msg).toBe('I FIRED'); },
      (err) => { expect(err).toBeFalsy(); },
    );
  });
});

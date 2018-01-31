const throwerror = require('./throwerror9');

describe('testing ', () => {
  it('testing valid json', (done) => {
    const obj1 = { name: 'Anand', age: 21 };
    const obj1str = JSON.stringify(obj1);
    throwerror.parsePromised(obj1str).then((obj2) => {
      expect(obj2).toEqual(obj1);
      done();
    });
  });

  it('testing empty json', (done) => {
    const obj1 = { };
    const obj1str = JSON.stringify(obj1);
    throwerror.parsePromised(obj1str).then((obj2) => {
      expect(obj2).toEqual(obj1);
      done();
    });
  });
});
describe('Testing the promise to reject', () => {
  it('invalid json must return error', async () => {
    await throwerror.parsePromised('wewe').then(undefined, (err) => { expect(err).toBe('Unexpected token w in JSON at position 0'); });
  });
});

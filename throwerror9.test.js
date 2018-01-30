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
  it('testing invalid json', (done) => {
    // const obj1 = { name: 'Anand', age: 21 };
    // const obj1str = JSON.stringify(obj1);
    throwerror.parsePromised('123').catch((error) => {
      // console.log(error);
      expect(error).toMatch(/Unexpected token/i);

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

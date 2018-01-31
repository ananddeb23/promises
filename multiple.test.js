const multiple = require('./multiple11');

describe(' tesfing', () => {
  test('ter', async () => {
    const returnpromise1 = promise1 => promise1;
    const returnpromise2 = promise1 => promise2;
    const promise1 = Promise.resolve('first');
    const promise2 = Promise.resolve('second');
    await multiple.all(returnpromise1, returnpromise2).then((msg) => {
      expect(msg).toEqual(['first', 'second']);
    });
  });
});

const promisecall = require('./rule10');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Testing the iterate function ', () => {
  it('It must return a number ', () => {
    expect(typeof (promisecall.iterate(1))).toBe('number');
  });
  it('output should be number + 1 ', () => {
    const no = 10;
    expect((promisecall.iterate(no))).toBe(no + 1);
  });
});

describe('Testing the always throws function ', () => {
  it('It must throws an error ', () => {
    expect(() => {
      promisecall.alwaysThrows();
    }).toThrow();
  });
  // test('throws on octopus', () => {
  //   function drinkOctopus() {
  //     promisecall.alwaysThrows();
  //   }
  //
  //   // Test the exact error message
  //   expect(drinkOctopus).toThrowError('12345110error');
  // });
});

describe('Testing the promise ', () => {
  it('sequnce of executions must be till first reject ', async () => {
    await promisecall.callpromise(1).then(undefined, (err) => { expect(err).toBe('12345error'); });
  });
  it('sequnce of executions must be till first reject ', async () => {
    await promisecall.callpromise(1).then(undefined, (err) => { expect(err).toBe('error'); });
  });
});

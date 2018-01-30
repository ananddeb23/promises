const { attachTitle, promise } = require('./values8');

describe('Testing the function promise', () => {
  it('function logs to console correctly', async () => {
    await promise.then(attachTitle).then((msg) => { expect(msg).toBe('DR. MANHATTAN'); });
  });
});

describe('Testing attachtitle', () => {
  it('function logs to console correctly', () => {
    expect(attachTitle('Anand')).toBe('DR. Anand');
  });

  it('function logs to console correctly', () => {
    const str = 'Anand';
    expect(attachTitle(str).length).toEqual(3 + str.length);
  });
});

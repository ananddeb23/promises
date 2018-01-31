const { attachTitle, promise } = require('./values8');

describe('Testing the  promise', () => {
  it('should concat correctly', async () => {
    await promise.then(attachTitle).then((msg) => { expect(msg).toBe('DR. MANHATTAN'); });
  });
});

describe('Testing attachtitle', () => {
  it('function logs to console correctly', () => {
    expect(attachTitle('Anand')).toBe('DR. Anand');
  });

  it('expect attach title to return expected string length', () => {
    const str = 'Anand';
    expect(attachTitle(str).length).toEqual(4 + str.length);
  });
});

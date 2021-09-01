// const { dummy } = require('../src/dummy');

describe('It validate the ISBN-13 codes', () => {
  // beforeEach(() => {});

  it('given a ISBN of 9780470059029 then is identified as valid', () => {
    const isbn = '9780470059029';
    expect(validateIsbn(isbn)).toBe(true);
  });
});

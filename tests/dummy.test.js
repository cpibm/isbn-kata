const { validateIsbn } = require('../src/isbn');

describe('It validate the ISBN-13 codes', () => {
  // beforeEach(() => {});

  it('given a ISBN of 9780470059029 then is identified as valid', () => {
    const isbn = '9780470059029';
    expect(validateIsbn(isbn)).toBe(true);
  });

  it('given a numeric input when passed to the validation then we get an invalid input error', () => {
    expect(() => validateIsbn(9780470059029)).toThrow('Invalid input');
  });
});

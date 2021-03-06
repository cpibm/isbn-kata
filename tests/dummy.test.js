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

  it('given a string input with a length less than 13 is passed to the validation then we get an invalid input error', () => {
    expect(() => validateIsbn('9780470059')).toThrow('Invalid input');
  });

  it('given input string of length 13 with letters when pass the validation then we get an invalid input error', () => {
    expect(() => validateIsbn('9780470059ABC')).toThrow('Invalid input');
  });

  it('given a ISBN of 9780470059027 then is identified as invalid', () => {
    const isbn = '9780470059027';
    expect(validateIsbn(isbn)).toBe(false);
  });
});

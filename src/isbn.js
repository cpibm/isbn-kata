const validateInput = (input) => {
  const regexp = /^\d+$/;
  if (typeof input !== 'string' || input.length < 13 || !regexp.test(input)) {
    throw new Error('Invalid input');
  }
};

const validateIsbn = (input) => {
  validateInput(input);

  const digits = input.split('');
  const isbnDigits = digits.slice(0, 11);
  const verifierDigit = digits.slice(11, 12);
  let result = 0;
  for (let index = 0; index < isbnDigits.length; index += 1) {
    const element = Number(digits[index]);
    if (index % 2 !== 0) {
      result += element * 3;
    } else {
      result += element;
    }
  }
  return 10 - (result % 10) === Number(verifierDigit);
};

module.exports = { validateIsbn };

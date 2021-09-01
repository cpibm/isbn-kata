const validateInput = (input) => {
  const regexp = /^\d+$/;
  if (typeof input !== 'string' || input.length < 13 || !regexp.test(input)) {
    throw new Error('Invalid input');
  }
};

const digitOnEvenPosition = (position) => position % 2 !== 0;
const calculateVerifierDigit = (result) => 10 - (result % 10);

const validateIsbn = (input) => {
  validateInput(input);

  const digits = input.split('');
  const isbnDigits = digits.slice(0, 12);
  const inputVerifierDigit = digits[12];
  let result = 0;
  for (let index = 0; index < isbnDigits.length; index += 1) {
    const element = Number(isbnDigits[index]);
    if (digitOnEvenPosition(index)) {
      result += element * 3;
    } else {
      result += element;
    }
  }
  return calculateVerifierDigit(result) === Number(inputVerifierDigit);
};

module.exports = { validateIsbn };

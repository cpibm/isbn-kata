const validateInput = (input) => {
  const regexp = new RegExp('/[0-9]/', 'g');
  if (typeof input !== 'string' || input.length < 13 || regexp.test(input)) {
    throw new Error('Invalid input');
  }
};

const validateIsbn = (input) => {
  validateInput(input);
};

module.exports = { validateIsbn };

const validateInput = (input) => {
  if (typeof input !== 'string' || input.length < 13) {
    throw new Error('Invalid input');
  }
};

const validateIsbn = (input) => {
  validateInput(input);
};

module.exports = { validateIsbn };

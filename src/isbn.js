const validateIsbn = (input) => {
  if (typeof input !== 'string' || input.length < 13) {
    throw new Error('Invalid input');
  }
};

module.exports = { validateIsbn };

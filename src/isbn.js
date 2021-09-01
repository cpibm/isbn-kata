const validateIsbn = (input) => {
  if (typeof input !== 'string') {
    throw new Error('Invalid input');
  }
};

module.exports = { validateIsbn };

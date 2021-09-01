const validateInput = (input) => {
  const regexp = new RegExp('/[0-9]/', 'g');
  if (typeof input !== 'string' || input.length < 13 || !regexp.test(input)) {
    throw new Error('Invalid input');
  }
};

const validateIsbn = (input) => {
  validateInput(input);
  const c = input.split('');
  let result = 0;

  // 1 x 1st digit, 3 x 2nd digit, 1 x 3rd digit, 3 x 4th digit and sum them
  for (let index = 0; index < c.length - 1; index += 1) {
    const element = Number(c[index]);
    if (index % 2 !== 0) {
      result += element * 3;
    } else {
      result += element;
    }
  }
  return 10 - (result % 10) === Number(c[c.length - 1]);
};

module.exports = { validateIsbn };

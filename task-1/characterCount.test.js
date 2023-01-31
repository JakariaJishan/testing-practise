const stringLength = require('./characterCount')
test('string is at least 1 character long and not longer than 10 characters', () => {
    expect(stringLength('you can')).toBe(7);
  });
test('string is not least 1 character long and not longer than 10 characters', () => {
    expect(stringLength('you can if you want')).toBe('invalid characters');
  });
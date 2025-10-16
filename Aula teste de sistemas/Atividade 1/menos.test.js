const menos = require('./menos');

test('Subtraindo', () => {
    expected(menos(2, 2)).toBe(0);
});
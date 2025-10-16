const mult = require('./mult'); //preciso criar a minha varíavel de teste usando o nome do arquivo a ser testado

test('Multiplicando', () => {
    expect(mult(2, 2)).toBe(4);
}); 
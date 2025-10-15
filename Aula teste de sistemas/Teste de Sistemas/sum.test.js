const sum = require('./sum'); //preciso criar a minha varíavel de teste usando o nome do arquivo a ser testado

test ("Somando dois números inteiros", () => {
    //valores de entrada - expect (esperado) - e depois o resultado (toBe)
    expect(sum(1,1)).toBe(2);
});
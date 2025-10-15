const sum = require('./sum'); //preciso criar a minha varíavel de teste usando o nome do arquivo a ser testado

test ("Somando dois números inteiros", () => {
    //valores de entrada - expect (esperado) - e depois o resultado (toBe)
    expect(sum(1,1)).toBe(2);
}); //no terminal: npm run test - para rodar o nosso teste

test ('atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});
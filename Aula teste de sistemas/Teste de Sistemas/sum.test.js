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

test('adicionando numeros positivos nao é zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(a + b).not.toBe(0);
        }
    }
});
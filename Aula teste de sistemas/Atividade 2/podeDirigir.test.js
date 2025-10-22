const podeDirigir = require('./podeDirigir');

test ('Verifica se a idade é válida usando toBe', () => {
    const idade = podeDirigir(-1);
    expect(idade).toBe('Digite uma idade válida');
});

test('Verifica se com 18 anos pode dirigir usando toEqual', () => {
    const idade18 = podeDirigir(18);
    expect(idade18).toEqual('Você pode dirigir, mas precisa ter a carteira de motorista!');
});

test('Diz que não pode dirigir se for menor que 18 usando toBeLessThan', () => {
    const menorDeIdade = 17
    const maiorDeIdade = 18

    expect(menorDeIdade).toBeLessThan(maiorDeIdade);

    const msg = podeDirigir(menorDeIdade);

    expect(msg).toBe('Você não pode dirigir!');
});

test('Diz que pode dirigir se for maior de 18 usando toBeGreaterThan', () => {
    const menorDeIdade = 17
    const maiorDeIdade = 19

    expect(maiorDeIdade).toBeGreaterThan(menorDeIdade);

    const msg = podeDirigir(maiorDeIdade);

    expect(msg).toBe('Você pode dirigir!');
});

test('Verifica se está correta a lógica usando not.toBe', () => {
    const seila = podeDirigir(12);
    expect(seila).not.toBe('Você pode dirigir!')
});

const somar = require('./somar');

describe('Teste da função somar', () => {
    test('Caso de teste 1: Somar 5 e 3', () => {
        const resultado = somar(5, 3);
        expect(resultado).toBe(8);
    });

    test('Caso de teste 2: Somar -5 e 3', () => {
        const resultado = somar(-5, 3);
        expect(resultado).toBe(-2);
    });

    test('Caso de teste 3: Somar 5 e -3', () => {
        const resultado = somar(5, -3);
        expect(resultado).toBe(2);
    });

    test('Caso de teste 4: Somar -5 e -3', () => {
        const resultado = somar(-5, -3);
        expect(resultado).toBe(-8);
    });

    test('Caso de teste 5: Somar 2.5 e 4', () => {
        const resultado = somar(2.5, 4);
        expect(resultado).toBe(6.5);
    });

    test('Caso de teste 6: Somar -2.5 e -4', () => {
        const resultado = somar(-2.5, -4);
        expect(resultado).toBe(-6.5);
    });
});

describe('Teste de erros na função somar', () => {
    test('Caso de teste 7: Somar 5 e "3" (deve lançar erro)', () => {
        expect(() => somar(5, "3")).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test('Caso de teste 8: Somar "5" e 3 (deve lançar erro)', () => {
        expect(() => somar("5", 3)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test('Caso de teste 9: Somar null e 3 (deve lançar erro)', () => {
        expect(() => somar(null, 3)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test('Caso de teste 10: Somar 5 e undefined (deve lançar erro)', () => {
        expect(() => somar(5, undefined)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });
});
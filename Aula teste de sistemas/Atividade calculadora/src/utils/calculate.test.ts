import { calculate } from "./calculate";

describe('Testando a função de calcular', () => {
    test('Caso de teste 1: Somar 2 + 2 = 4', () => {
        expect(calculate('+', '2', '2')).toBe("4");
    });

    test('Caso de teste 2: Subtrair 10 - 5 = 5', () => {
        expect(calculate('-', '10', '5')).toBe("5");
    });

    test('Caso de teste 3: Dividir 14 / 7 = 2', () => {
        expect(calculate('/', '14', '7')).toBe("2");
    });

    test('Caso de teste 4: Multiplicar 3 x 3 = 9', () => {
        expect(calculate('x', '3', '3')).toBe("9");
    });

    test('Caso de teste 5: Igual 2 = 2', () => {
        expect(calculate('=', '2', '2')).toBe("2");
    });

    test('Caso de teste 6: Limpar', () => {
        expect(calculate('AC', '', '')).toBe("0");
    });
});
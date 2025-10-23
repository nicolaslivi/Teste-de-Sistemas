const multiplicar = require("./multiplicar");

describe("Teste da função multiplicar", () => {
    test("Caso de teste 1: Multiplicar 5 por 3", () => {
        const resultado = multiplicar(5, 3);
        expect(resultado).toBe(15);
    });

    test("Caso de teste 2: Multiplicar -5 por 3", () => {
        const resultado = multiplicar(-5, 3);
        expect(resultado).toBe(-15);
    });

    test("Caso de teste 3: Multiplicar 5 por -3", () => {
        const resultado = multiplicar(5, -3);
        expect(resultado).toBe(-15);
    });

    test("Caso de teste 4: Multiplicar -5 por -3", () => {
        const resultado = multiplicar(-5, -3);
        expect(resultado).toBe(15);
    });

    test("Caso de teste 5: Multiplicar 2.5 por 4", () => {
        const resultado = multiplicar(2.5, 4);
        expect(resultado).toBe(10);
    });

    test("Caso de teste 6: Multiplicar -2.5 por -4", () => {
        const resultado = multiplicar(-2.5, -4);
        expect(resultado).toBe(10);
    });

    test("Caso de teste 7: Multiplicar 1.5 por 2.5", () => {
        const resultado = multiplicar(1.5, 2.5);
        expect(resultado).toBe(3.75);
    });

    test("Caso de teste 8: Multiplicar -1.5 por 2.5", () => {
        const resultado = multiplicar(-1.5, 2.5);
        expect(resultado).toBe(-3.75);
    });

    test("Caso de teste 9: Multiplicar 1.5 por -2.5", () => {
        const resultado = multiplicar(1.5, -2.5);
        expect(resultado).toBe(-3.75);
    });
});

describe("Teste de erros na função multiplicar", () => {
    test("Caso de teste 10: Multiplicar 5 por 0 (deve lançar erro)", () => {
        expect(() => multiplicar(5, 0)).toThrow("Erro: A multiplicação por zero não é permitida.");
    });

    test("Caso de teste 11: Multiplicar 0 por 3 (deve lançar erro)", () => {
        expect(() => multiplicar(0, 3)).toThrow("Erro: A multiplicação por zero não é permitida.");
    });

    test("Caso de teste 12: Multiplicar '5' por 3 (deve lançar erro)", () => {
        expect(() => multiplicar("5", 3)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 13: Multiplicar 5 por '3' (deve lançar erro)", () => {
        expect(() => multiplicar(5, "3")).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 14: Multiplicar Infinity por 3 (deve lançar erro)", () => {
        expect(() => multiplicar(Infinity, 3)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 15: Multiplicar 5 por Infinity (deve lançar erro)", () => {
        expect(() => multiplicar(5, Infinity)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 16: Multiplicar NaN por 3 (deve lançar erro)", () => {
        expect(() => multiplicar(NaN, 3)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });;

    test("Caso de teste 17: Multiplicar null por 3 (deve lançar erro)", () => {
        expect(() => multiplicar(null, 3)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });
}); 
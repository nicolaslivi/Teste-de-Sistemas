const dividir = require("./divisao");

describe("Teste da função dividir", () => {
    test("Caso de teste 1: Dividir 10 por 2", () => {
        const resultado = dividir(10, 2);
        expect(resultado).toBe(5);
    });

    test("Caso de teste 2: Dividir -10 por 2", () => {
        const resultado = dividir(-10, 2);
        expect(resultado).toBe(-5);
    });

    test("Caso de teste 3: Dividir 10 por -2", () => {
        const resultado = dividir(10, -2);
        expect(resultado).toBe(-5);
    });

    test("Caso de teste 4: Dividir -10 por -2", () => {
        const resultado = dividir(-10, -2);
        expect(resultado).toBe(5);
    });

    test("Caso de teste 5: Dividir 0 por 5", () => {
        const resultado = dividir(0, 5);
        expect(resultado).toBe(0);
    });

    test("Caso de teste 6: Dividir 7.5 por 2.5", () => {
        const resultado = dividir(7.5, 2.5);
        expect(resultado).toBe(3);
    });

    test("Caso de teste 7: Dividir -7.5 por 2.5", () => {
        const resultado = dividir(-7.5, 2.5);
        expect(resultado).toBe(-3);
    });

    test("Caso de teste 8: Dividir 7.5 por -2.5", () => {
        const resultado = dividir(7.5, -2.5);
        expect(resultado).toBe(-3);
    });

    test("Caso de teste 9: Dividir -7.5 por -2.5", () => {
        const resultado = dividir(-7.5, -2.5);
        expect(resultado).toBe(3);
    });
});

describe("Teste de erros na função dividir", () => {
    test("Caso de teste 10: Dividir 10 por 0 (deve lançar erro)", () => {
        expect(() => dividir(10, 0)).toThrow("Erro: Divisão por zero não é permitida.");
    });

    test("Caso de teste 11: Dividir '10' por 2 (deve lançar erro)", () => {
        expect(() => dividir("10", 2)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 12: Dividir 10 por '2' (deve lançar erro)", () => {
        expect(() => dividir(10, "2")).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 13: Dividir Infinity por 2 (deve lançar erro)", () => {
        expect(() => dividir(Infinity, 2)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 14: Dividir 10 por Infinity (deve lançar erro)", () => {
        expect(() => dividir(10, Infinity)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 15: Dividir NaN por 2 (deve lançar erro)", () => {
        expect(() => dividir(NaN, 2)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 16: Dividir 10 por NaN (deve lançar erro)", () => {
        expect(() => dividir(10, NaN)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 17: Dividir null por 2 (deve lançar erro)", () => {
        expect(() => dividir(null, 2)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 18: Dividir 10 por null (deve lançar erro)", () => {
        expect(() => dividir(10, null)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });
});


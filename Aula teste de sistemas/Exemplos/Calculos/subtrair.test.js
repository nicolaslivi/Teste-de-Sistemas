const subtrair = require("./subtrair");

describe("Teste da função subtrair", () => {
    test("Caso de teste 1: Subtrair numero inteiro (5) por outro numero inteiro (3)", () => {
        const resultado = subtrair(5, 3);
        expect(resultado).toBe(2);
    });

    test("Caso de teste 2: Subtrair numero negativo (-5) por numero inteiro positivo (3)", () => {
        const resultado = subtrair(-5, 3);
        expect(resultado).toBe(-8);
    });

    test("Caso de teste 3: Subtrair numero positivo (5) com um numero negativo (-3)", () => {
        const resultado = subtrair(5, -3);
        expect(resultado).toBe(8);
    });

    test("Caso de teste 4: Subtrair numero negativo (-5) com numero negativo (-3)", () => {
        const resultado = subtrair(-5, -3);
        expect(resultado).toBe(-2);
    });

    test("Caso de teste 5: Subtrair numero com virgula (2,5) com numero inteiro", () => {
        const resultado = subtrair(2.5, 4);
        expect(resultado).toBe(-1.5);
    });

    test("Caso de teste 6: Subtrair numero com virgula negativo (-2.5) por numero inteiro negativo (-4)", () => {
        const resultado = subtrair(-2.5, -4);
        expect(resultado).toBe(1.5);
    });

    test("Caso de teste 7: Subtrair numero com virgula (1.5) por numero com virgula (2.5)", () => {
        const resultado = subtrair(1.5, 2.5);
        expect(resultado).toBe(-1);
    });
});

describe("Teste de erros na função subtrair", () => {
    test("Caso de teste 8: Subtrair 5 por '3' (deve lançar erro)", () => {
        expect(() => subtrair(5, "3")).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 9: Subtrair '5' por 3 (deve lançar erro)", () => {
        expect(() => subtrair("5", 3)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 10: Subtrair null por 3 (deve lançar erro)", () => {
        expect(() => subtrair(null, 3)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 11: Subtrair 5 por undefined (deve lançar erro)", () => {
        expect(() => subtrair(5, undefined)).toThrow("Erro: Ambos os argumentos devem ser números.");
    });

    test("Caso de teste 12: Subtrair Infinity por 3 (deve lançar erro)", () => {
        expect(() => subtrair(Infinity, 3)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });

    test("Caso de teste 13: Subtrair 5 por NaN (deve lançar erro)", () => {
        expect(() => subtrair(5, NaN)).toThrow("Erro: Ambos os argumentos devem ser números finitos.");
    });
});
import { isNumber } from "./isNumber";

describe('Testando a função isNumber', () => {
    test('Caso de teste 1: "2" == número', () => {
        expect(isNumber("2")).toBeTruthy();
    });

    test('Caso de teste 2: "nicolas" != número', () => {
        expect(isNumber("nicolas")).toBeFalsy();
    });

    test('Caso de teste 3: "/?*7" != número', () => {
        expect(isNumber("/?*7")).toBeFalsy();
    });

    test('Caso de teste 4: "1234" == número', () => {
        expect(isNumber("1234")).toBeTruthy();
    });

    test('Caso de teste 5: "123A" != número', () => {
        expect(isNumber("1234A")).toBeFalsy();
    });
});
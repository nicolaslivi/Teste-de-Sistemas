import { isDot } from "./isDot";

describe('Testando a função isDot', () => {
    test('Casos de testes', () => {
        expect(isDot(".")).toBeTruthy();
        expect(isDot("2")).not.toBeTruthy();
        expect(isDot("2.0")).not.toBeTruthy();
        expect(isDot("..")).toBeFalsy();
        expect(isDot(". ")).toBeFalsy();
        expect(isDot(" .")).toBeFalsy();
    });
});
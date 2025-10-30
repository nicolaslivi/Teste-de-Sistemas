import { removeZeroLeft } from "./removeZeroLeft";

describe('Testando a função removeZeroLeft', () => {
  test('Caso de teste 1: tirar o 0 do "01"', () => {
    expect(removeZeroLeft("01")).toBe("1");
  });

  test('Caso de teste 2: retornar o número 2', () => {
    expect(removeZeroLeft("2")).toBe("2");
  });

  test('Caso de teste 3: retornar o número 23', () => {
    expect(removeZeroLeft("23")).toBe("23");
  });
});
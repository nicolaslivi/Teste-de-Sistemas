const { default: expect } = require("expect");
const podeTrabalhar = require("./trabalho");

describe("Teste da função podeTrabalhar", () => {
  test("Caso de teste 1: Idade = 82", () => {
    //Criar teste para o caso de teste
    certo = podeTrabalhar(82);
    expect(certo).toBe('Você ultrapassou a idade de trabalho.');
    expect(certo).toContain('ultrapassou');
    expect(certo).not.toBe('Você pode trabalhar.');
    expect(certo).not.toContain('ola');
    expect(certo).toBeDefined();
    expect(certo).toMatch(/ultrapassou a idade/);
  });

  test("Caso de teste 2: Idade = 25", () => {
    //Criar teste para o caso de teste
  });

  test("Caso de teste 3: Idade = 14", () => {
    //Criar teste para o caso de teste
  });
});

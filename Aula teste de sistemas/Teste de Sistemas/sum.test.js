const sum = require('./sum'); //preciso criar a minha varíavel de teste usando o nome do arquivo a ser testado

test ("Somando dois números inteiros", () => {
    //valores de entrada - expect (esperado) - e depois o resultado (toBe)
    expect(sum(1,1)).toBe(2);
}); //no terminal: npm run test - para rodar o nosso teste

test ('atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('adicionando numeros positivos nao é zero', () => {
    for(let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
            expect(a + b).not.toBe(0);
        }
    }
});

test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
});

test('adicionando numeros de ponto flutuante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3); //isso nao vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3); //isso funciona
});

test('nao existe I em team', () => {
    expect('team').not.toMatch(/I/);
});

test('mas existe stop em Cristopher', () => {
    expect('Cristopher').toMatch(/stop/);
});

const lista = ['fraldas', 'ovo', 'leite'];

test('a lista de compras tem leite nela', () => {
    expect(lista).toContain('leite'); //valida se contém o leite
    expect(new Set(lista)).toContain('leite'); //new Set tira todos os repetidos e depois verifica se contém leite
});

// -------------------------------------------------------------------------------------------------------------------------

// function compileAndroidCode() {
//     throw new Error('you are using the wrong JDK!');
//   }
  
//   test('compiling android goes as expected', () => {
//     expect(() => compileAndroidCode()).toThrow();
//     expect(() => compileAndroidCode()).toThrow(Error);
  
//     // Você também pode usar uma string que deve estar contida na mensagem de erro ou uma expressão regular
//     expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
//     expect(() => compileAndroidCode()).toThrow(/JDK/);
  
//     // Ou você pode corresponder a uma mensagem de erro exata usando uma expressão regular como abaixo
//     expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails
//     expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass
//   });

// -------------------------------------------------------------------------------------------------------------------------

// beforeEach(() => {
//     initializeCityDatabase();
//   });
  
//   afterEach(() => {
//     clearCityDatabase();
//   });
  
//   test('city database has Vienna', () => {
//     expect(isCity('Vienna')).toBeTruthy();
//   });
  
//   test('city database has San Juan', () => {
//     expect(isCity('San Juan')).toBeTruthy();
//   });

// -------------------------------------------------------------------------------------------------------------------------

// describe('matching cities to foods', () => {
//     // Applies only to tests in this describe block
//     beforeEach(() => {
//       return initializeFoodDatabase();
//     });
  
//     test('Vienna <3 veal', () => {
//       expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
//     });
  
//     test('San Juan <3 plantains', () => {
//       expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
//     });
//   });

// -------------------------------------------------------------------------------------------------------------------------


const podeDirigir = require('./podeDirigir');

test ('Verifica se você pode dirigir', () => {
    const idade = podeDirigir(-1);
    expect(idade).toBe('Digite uma idade válida');
});
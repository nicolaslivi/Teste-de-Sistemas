function multiplicar(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Erro: Ambos os argumentos devem ser números.");
    }

    if (!isFinite(num1) || !isFinite(num2)) {
        throw new Error("Erro: Ambos os argumentos devem ser números finitos.");
    }

    if (num1 === 0 || num2 === 0) {
        throw new Error("Erro: A multiplicação por zero não é permitida.");
    }

    return num1 * num2;
}

module.exports = multiplicar;
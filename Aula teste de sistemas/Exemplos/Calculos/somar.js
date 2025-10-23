function somar(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Erro: Ambos os argumentos devem ser números.");
    }

    if (!isFinite(num1) || !isFinite(num2)) {
        throw new Error("Erro: Ambos os argumentos devem ser números finitos.");
    }

    return num1 + num2;
}

module.exports = somar;
function podeDirigir(idade){
    if(idade < 0){
        return 'Digite uma idade válida';
    } else if (idade >= 18) {
        return 'Você pode dirigir';
    } else {
       return 'Você não pode dirigir!'
    }
}

module.exports = podeDirigir;
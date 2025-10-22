function podeDirigir(idade){
    if(idade < 0){
        return 'Digite uma idade válida';
    }else if (idade === 18){
        return 'Você pode dirigir, mas precisa ter a carteira de motorista!'
    } else if (idade >= 18) {
        return 'Você pode dirigir!';
    }else if (idade == null){
        return 'Digite uma idade válida';
    } else {
       return 'Você não pode dirigir!'
    }
}

module.exports = podeDirigir;
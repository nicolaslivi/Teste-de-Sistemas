function podeTrabalhar(idade) {
  if (idade < 16) {
    return "Você é muito jovem para trabalhar.";
  } else if (idade >= 16 && idade <= 60) {
    return "Você pode trabalhar.";
  } else {
    return "Você ultrapassou a idade de trabalho.";
  }
}

module.exports = podeTrabalhar;

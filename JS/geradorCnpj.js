function gerardorCnpj() {
  var cnpj = '';
    
  for (var i = 0; i < 12; i++) {
    cnpj += Math.floor(Math.random() * 10);
  }

  var soma = 0;
  var peso = 2;
    
  for (var i = 11; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = (peso === 9) ? 2 : peso + 1;
  }
    
  var digitoVerificador1 = 11 - (soma % 11);
  cnpj += (digitoVerificador1 < 10) ? digitoVerificador1 : 0;

  soma = 0;
  peso = 2;
    
  for (var i = 12; i >= 0; i--) {
    soma += parseInt(cnpj.charAt(i)) * peso;
    peso = (peso === 9) ? 2 : peso + 1;
  }
    
  var digitoVerificador2 = 11 - (soma % 11);
  cnpj += (digitoVerificador2 < 10) ? digitoVerificador2 : 0;
  mostraResultado(cnpj);
    
  return cnpj;
}

function mostraResultado(texto) {
  document.getElementById("resultado").innerHTML = texto;
}

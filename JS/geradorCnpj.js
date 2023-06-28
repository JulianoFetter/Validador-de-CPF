function gerardorCnpj() {
    var cnpj = '';
    
    // Gera os 12 primeiros dígitos de forma aleatória
    for (var i = 0; i < 12; i++) {
      cnpj += Math.floor(Math.random() * 10);
    }
    
    // Calcula o primeiro dígito verificador
    var soma = 0;
    var peso = 2;
    
    for (var i = 11; i >= 0; i--) {
      soma += parseInt(cnpj.charAt(i)) * peso;
      peso = (peso === 9) ? 2 : peso + 1;
    }
    
    var digitoVerificador1 = 11 - (soma % 11);
    cnpj += (digitoVerificador1 < 10) ? digitoVerificador1 : 0;
    
    // Calcula o segundo dígito verificador
    soma = 0;
    peso = 2;
    
    for (var i = 12; i >= 0; i--) {
      soma += parseInt(cnpj.charAt(i)) * peso;
      peso = (peso === 9) ? 2 : peso + 1;
    }
    
    var digitoVerificador2 = 11 - (soma % 11);
    cnpj += (digitoVerificador2 < 10) ? digitoVerificador2 : 0;
    
    return cnpj;
  }
  
  // Exemplo de uso:
  var cnpjGerado = gerardorCnpj();
  console.log(cnpjGerado);
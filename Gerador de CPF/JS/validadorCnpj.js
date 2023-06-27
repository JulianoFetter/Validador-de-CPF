//*CNPJ*//
function validadorCnpj() {
    var cnpj = document.getElementById('cnpj').value;
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  
    if (cnpj.length !== 14) {
      document.getElementById('resultado').innerHTML = 'CNPJ inválido.';
      return;
    }
  
    // Verifica se todos os dígitos são iguais, o que torna o CNPJ inválido
    if (/^(\d)\1+$/.test(cnpj)) {
      document.getElementById('resultado').innerHTML = 'CNPJ inválido.';
      return;
    }
  
    // Calcula o primeiro dígito verificador
    var soma = 0;
    for (var i = 0; i < 12; i++) {
      soma += parseInt(cnpj.charAt(i)) * (14 - i);
    }
  
    var resto = soma % 11;
    var digitoVerificador1 = (resto < 2) ? 0 : 11 - resto;
  
    if (parseInt(cnpj.charAt(12)) !== digitoVerificador1) {
      document.getElementById('resultado').innerHTML = 'CNPJ inválido.';
      return;
    }
  
    // Calcula o segundo dígito verificador
    soma = 0;
    for (var i = 0; i < 13; i++) {
      soma += parseInt(cnpj.charAt(i)) * (15 - i);
    }
  
    resto = soma % 11;
    var digitoVerificador2 = (resto < 2) ? 0 : 11 - resto;
  
    if (parseInt(cnpj.charAt(13)) !== digitoVerificador2) {
      document.getElementById('resultado').innerHTML = 'CNPJ inválido.';
      return;
    }
  
    document.getElementById('resultado').innerHTML = 'CNPJ válido.';
  }
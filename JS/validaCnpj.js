function validarCNPJ(cnpj) {
    var cnpj = document.getElementById('cnpj').value;
    cnpj = cnpj.replace(/[^\d]+/g, '');
  
    if (cnpj.length !== 14) {
        mostraResultado ('CNPJ Invalido!', 'red');
        return false;
    }
  
    if (/^(\d)\1+$/.test(cnpj)) {
        mostraResultado ('CNPJ Invalido!', 'red');
        return false;
    }
  
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substring(0, tamanho);
    var digitos = cnpj.substring(tamanho);
    var soma = 0;
    var pos = tamanho - 7;
  
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
  
      if (pos < 2) {
        pos = 9;
      }
    }
  
    var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (resultado !== parseInt(digitos.charAt(0), 10)) {
        mostraResultado ('CNPJ Invalido!', 'red');
        return false;
    }
  
    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
  
    for (var j = tamanho; j >= 1; j--) {
      soma += numeros.charAt(tamanho - j) * pos--;
  
      if (pos < 2) {
        pos = 9;
      }
    }
  
    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  
    if (resultado !== parseInt(digitos.charAt(1), 10)) {
      mostraResultado ('CNPJ Invalido!', 'red');
      return false;

    }
    mostraResultado ('CNPJ Válido!', 'green');
    return true;
  }

  function mostraResultado(texto, cor) {
    const span = document.getElementById('resultado');   
    span.innerHTML = texto;
    span.style.color = cor;
}
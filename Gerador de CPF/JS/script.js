$(document).ready(function() {
    $('#cpf').inputmask('999.999.999-99');
});
function validaCPF() {
    const cpfFormatado = document.getElementById('cpf').value;
    const cpf = limpaFormatacao(cpfFormatado);
   
    if (cpf.length !== 11){
        mostraResultado('CPF deve conter apenas 11 digitos!', 'red');
        return;
    }
    if (verificaDigitosRepetidos(cpf)) {
        mostraResultado('CPF não pode conter números repetidos', 'red');
        return;
    }
    const digito1 = calcularDigitoVerificador(cpf, 1);

    const digito2 = calcularDigitoVerificador(cpf, 2);
    if (!digito1) {
        mostraResultado ('CPF Inválido!', 'red');
        return;
    }

    if (!digito2) {
        mostraResultado ('CPF Inválido!', 'red');
        return;
    }
    mostraResultado('CPF válido!', 'green');
    return;

}

function gerarCpf() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 9);
    }

    cpf += calcularDigito(cpf);
    cpf += calcularDigito(cpf);

    mostraResultado((cpf), 'green');
    return;
}

function calcularDigito(cpf) {
    let soma = cpf.split('').reduce((acc, val, index) => {
      return acc + (val * (index < 8 ? 9 - index : 1));
    }, 0);
  
    let digito = (soma % 11) < 2 ? 0 : (11 - (soma % 11));
    return digito;
}


function calcularDigitoVerificador(cpf, posicao) {
    const sequencia = cpf.slice(0, 8 + posicao).split('');
    let soma = 0;
    let multiplicador = 9 + posicao;

    for (const numero of sequencia) {
        soma +=multiplicador * Number(numero);
        multiplicador --;    
    }
    const restoDivisao = (soma *10) % 11;
    const digito = cpf.slice(8 + posicao, 9 + posicao);
    return restoDivisao == digito;
}
function limpaFormatacao(cpf) {
    cpf = cpf.replace(/\D/g, '');
    return cpf;
}
function mostraResultado(texto, cor) {
    const span = document.getElementById('resultado');   
    span.innerHTML = texto;
    span.style.color = cor;
}
function verificaDigitosRepetidos(cpf){
    return cpf.split('').every((d) => d === cpf[0]);
}
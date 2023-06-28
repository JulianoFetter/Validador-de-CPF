function gerarCpf() {
    let cpf= '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 9);
    }

    cpf += calcularDigito(cpf);
    cpf += calcularDigito(cpf);

    var cpfVerdadeiro = validaCPF(cpf);
    if (cpfVerdadeiro === true){
        mostraResultado(cpf);
    }

    return;
}

function calcularDigito(cpf) {
    let soma = cpf.split('').reduce((acc, val, index) => {
      return acc + (val * (index < 8 ? 9 - index : 1));
    }, 0);

    let digito;
    if (soma % 11 < 2){
        digito = 0;
    } else{
        digito = 11 - (soma % 11);
    }

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

function mostraResultado(texto) {
    document.getElementById("resultado").innerHTML = texto;
       
}

function validaCPF(cpf) {
    
    const digito1 = calcularDigitoVerificador(cpf, 1);
    const digito2 = calcularDigitoVerificador(cpf, 2);

    if (!digito1) {
        gerarCpf();
        return false;
    }
    if (!digito2) {
        gerarCpf();
        return false;
    }

    else{
        return true;
    }
    
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

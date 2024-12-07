let listaDeNumerosSorteados = [];
let numeroLimite = 1000
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.3});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1' , 'Jogo do numero secreto');
    exibirTextoNaTela('p' , 'Escolha um numero entre 1 e 1000');
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1' , 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativas';
        let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p' , 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p' , 'O numero Secreto é maior');
        }
        tentativas++;
        limparCampo()

    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElemetosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElemetosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled' ,true)
}
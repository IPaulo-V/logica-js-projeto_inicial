alert('Boas Vindas ao jogo do número aleatório');
let numeroSecreto = 2;
console.log(numeroSecreto);
let chute;
let tentativas = 1
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//enquanto chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 10');
    //Se o chute for igual ao número secreto
    if(chute == numeroSecreto) {
        alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}`);
    }
    //Se o chute for maior que número secreto
    else if(chute > numeroSecreto) {
        alert('Você errou o numero é menor');
        tentativas++;
    }
    //Se o chute for menor que número secreto
    else if(chute < numeroSecreto) {
        alert('Você errou o numero é maior');
        tentativas++;
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto){
            alert(`você acertou em ${tentativas} ${palavraTentativa}! Parabéns`);
    }
}

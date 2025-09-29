alert('Boas Vindas ao jogo do número aleatório');
let numero = 100
let numeroSecreto = parseInt(Math.random() * numero+1);
let chute;
let tentativas = 1;
//enquanto chute não for igual ao número secreto
while(chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numero}`);
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    //Se o chute for igual ao número secreto
   if (chute == numeroSecreto){
            alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}!\n Você acertou em ${tentativas} ${palavraTentativa}! Parabéns!`);
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
}

alert('Boas Vindas ao jogo do número aleatório');
let numeroSecreto = 1;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');
//Se o chute for igual ao número secreto
if(chute == numeroSecreto) {
    alert(`Isso ai! você descobriu o número secreto ${numeroSecreto}`);
}
//Se o chute for maior que número secreto
if(chute > numeroSecreto) {
    alert('Você errou o numero é menor');
}
//Se o chute for menor que número secreto
if(chute < numeroSecreto) {
    alert('Você errou o numero é maior');
}
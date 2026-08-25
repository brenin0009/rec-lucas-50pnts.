let numero = 1;

for (let i = 1; i <= 10; i++) {
    numero = i;

    if (numero % 2 == 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }
}

//O programa verifica os números de 1 até 10 e diz se cada um é par ou ímpar.
//let numero = 1; → cria uma variável chamada numero.
//for → faz o programa repetir várias vezes. Nesse caso, ele vai de 1 até 10.
//numero = i; → coloca o valor de i dentro da variável numero.
//if → verifica se o número é par.
//numero % 2 == 0 → verifica se a divisão do número por 2 tem resto 0.
//else → caso não seja par, o programa considera o número ímpar.
//console.log() → mostra o resultado na tela.
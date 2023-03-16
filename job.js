/*1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?*/



var indice = 13;
var soma = 0;
var k = 0;

while (k<indice){
    k = k + 1;
    soma = soma + k;
}

console.log(soma)

//R: o valor da variável SOMA será 91. A variável k vai 0 até 12 que são números inteiros menores que indice= 13, a variável soma=0 repete o cáculo 13 vezes pois vai de 0 a 12 ex: 0,1,2,3,4 ... 12, logo, o cáculo final é soma= 78 + k=13 e retorna 91 como resposta, então, soma = 91


/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/


var Fibonacci = [0,1,1,2,3,5,8,13,21,34];
let PenultimoNumero = Fibonacci[Fibonacci.length - 2]
let UltimoNumero = Fibonacci[Fibonacci.length -1];
let SomaUltimo =Number (UltimoNumero) + Number (PenultimoNumero);
console.log(`Esta é a soma dos últimos dois números da sequência de Fibonacci: ${SomaUltimo}`);
var InformarNumero = prompt("Digite um número: ");
const R = Number (InformarNumero) + Number (SomaUltimo);
console.log(`Essa é o valor da soma entre o último número da sequeência de Fibonacci com o valor digitado pelo usuário ${R}`);


/*3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, _9_
//R: a lógica vai de 2 em 2

b) 2, 4, 8, 16, 32, 64, _128__
//R: a lógica aqui soma o último número por ele mesmo ou multiplica por 2

c) 0, 1, 4, 9, 16, 25, 36, _49__
//R: a lógica pega o próximo número impar e soma com a última resposta. Ex: 1 é o primeiro número impar, 3 é o segundo número impar, logo, 3 + 1 = 4, assim como, 5 é o terceiro número impar, logo 5 + 4 = 9

d) 4, 16, 36, 64, _100__
//R: 4+12=16 , 16+20=36 , 36+28=64 ,  64+36= 100
//R: a lógica é 4+12 = 16, soma o numero 12+8 da 20, logo, 20+16 = 36. Vai subindo o valor de x de 8 em 8. Então fica 12, 20, 28, 36

e) 1, 1, 2, 3, 5, 8, _13__
//R: A lógica aqui é somar o primeiro número com o último

f) 2,10, 12, 16, 17, 18, 19, _20__*/






/*
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.

R: dado que o carro está em constante velocidade de 110km/h sem interrupção por pedágio e o caminha a 80km/h levando 5 minutos para passar pelo pedágio. A resposta fica clara que o carro ao cruzar o caminhão, ambos estarão mais próximo da cidade de Franca que ribeirão preto, além disso, no momento em que se cruzam, o caminhão então passar a estar mais próximo de ribeirão preto que o carro.

*/

/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

var ValoEntrada = ["b","a","n","a","n","a"];
var ValoEntrada2 = "banana"
console.log(`A String é: ${ValoEntrada2}`)
console.log(`A String ${ValoEntrada2} invertida é: ${(ValoEntrada[5])}${(ValoEntrada[4])}${(ValoEntrada[3])}${(ValoEntrada[2])}${(ValoEntrada[1])}${(ValoEntrada[0])}`)

//NÃO SE ESQUEÇA DE INSERIR O LINK DO SEU REPOSITÓRIO NO GITHUB COM O CÓDIGO FONTE QUE VOCÊ DESENVOLVEU


// fazendo referencia para biblioteca de entrada de dados
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');

console.log('Nome digitado ' + nome);
console.log();
entrada('Pressione enter para encerrar');
console.log();

/*
trabalhando com numeros do jeito errado
let n1 = entrada('Digite o 1º numero: ');
let n2 = entrada('Digite o 2º numero: ');

let n1 = parseint(entrada('Digite o 1º numero: '));
let n2 = parseint(entrada('Digite o 2º numero: '));
*/

let n1 = entrada('Digite o 1º numero: ');
let n2 = entrada('Digite o 2º numero: ');

let numN1 = parseInt(n1);
let numN2 = parseInt(n2);

let soma = numN1 + numN2;
let subtracao = numN1 - numN2;
let multiplicacao = numN1 * numN2;
let divisao = numN1 / numN2; //divisão resultado completo
let resto = numN1 % numN2; //divisão apenas o numero inteiro

console.log('Resultado da soma entre ' + numN1 + ' e ' + numN2 + ' = ' + soma);
console.log('Resultado da subtração entre ' + numN1 + ' e ' + numN2 + ' = ' + subtracao);
console.log('Resultado da multiplicação entre ' + numN1 + ' e ' + numN2 + ' = ' + multiplicacao);
console.log('Resultado da divisão entre: ' + numN1 + ' e ' + numN2 + ' = ' + divisao.toFixed(2));
console.log('Resultado do inteiro da divisão entre: ' + numN1 + ' e ' + numN2 + ' = ' + parseInt(divisao));
console.log('Resultado do resto entre: ' + numN1 + ' e ' + numN2 + ' = ' + resto);
console.log();
entrada('Pressione enter para encerrar');

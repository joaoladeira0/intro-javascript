/*
    CRIAR UM PROGRAMA QUE RECEBA DOIS VALORES, O INICIAL E O FINAL
    SE O VALOR INICIAL FOR MENOR QUE O FINAL EXIBA UMA CONTAGEM CRESCENTE 
    SE O VALOR INICIAL FOR MAIOR QUE O FINAL EXIBA A CONTAGEM DECRESCENTE 
*/

let entrada = require('prompt-sync')();

console.log('Atividade Contador')

let valor = "";

valor = entrada('Digite o valor inicial: ');
let n1 = parseInt(valor);

valor = entrada('Digite o valor final: ');
let n2 = parseInt(valor);

let contador = n1;

if (contador < n2) {

    for (contador = n1; contador <= n2; contador++) {
        console.log(contador);  
    }

} else if (contador > n2) {

    for (contador = n1; contador >= n2; contador = contador-1) {
    console.log(contador) 
    }

} else { console.log("Você não digitou um numero valido")

}
    
console.log('Os valor de entrada foram: ');
console.log('Valor inicial: ' + n1 + '\n' + 'Valor final: ' + n2);








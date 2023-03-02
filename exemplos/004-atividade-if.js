let entrada = require('prompt-sync')();

let n1 = entrada('Digite a primeira nota: ');

let n2 = entrada('Digite a segunda nota: ');

nota1 = parseFloat(n1)
nota2 = parseFloat(n2)

media = (nota1 + nota2) / 2;

if (media < 5) {
    console.log("Sua nota é: I")
}

if (media >= 5 && media < 6.5) {
    console.log("Sua nota é: R")
}

if (media > 6.5 && media < 8.5) {
    console.log("Sua nota é: B")
}

if (media >= 8.5) {
    console.log("Sua nota é: MB")
}


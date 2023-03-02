let entrada = require('prompt-sync')();

let idade = entrada('Digite sua idade: ');


if (idade == 18) {
    console.log('Você pode se matricular na auto-escola!');
}

if (idade > 18) {
    console.log('Você tem idade para dirigir caso tenha a habilitação.');
}

if (idade < 18) {
    console.log('Você não tem idade para dirigir!');
}

// console.log('A idade digitada é: ' + idade);

if (idade > 18) {  
    console.log('Você tem idade para dirigir caso tenha a habilitação.');
} else if (idade < 18) {
    console.log('Você não tem idade para dirigir!');
} else {   
    console.log('Você pode se matricular na auto-escola!');
}


if (idade >= 18) {
    console.log('Maior');
} else {
    console.log('Menor');
}

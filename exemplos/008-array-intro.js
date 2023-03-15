
let notas = [10, 50, 4.35];
let produtos = ['Borracha', 'Caderno', 'Caneta'];

console.log(notas);
console.log(produtos);
console.log('1º produto: ' + produtos[0]);

notas[2] = 4.5;
console.log('Nota corrigida: ' + notas[2]);

console.log('Array com repetição')
for (let cont = 0; cont < produtos.length; cont++) {
    console.log((cont + 1) + 'º produto da lista: ' + produtos[cont])
}

for (const cont in notas) {
    console.log(parseInt(cont) + 1 + 'ª nota: ' + notas[cont]);
}

let listaProdutos = [
    {
        id: 1,
        nome: 'Borracha',
        preco: '1.00'
    },
    {
        id: 2,
        nome: 'Caderno',
        preco: '6.00'
    },
    {
        id: 3,
        nome: 'caneta',
        preco: '4.50'
    },
];

console.log('--------------------------------------------------')
console.log('ID ' + listaProdutos[2].id + '\n' + 'Nome: ' + listaProdutos[2].nome + '\n' + 'Preço: R$ ' + listaProdutos[2].preco);


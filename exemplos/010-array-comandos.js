let entrada = require('prompt-sync')(); 

let tarefas = [
    {
        id: 1, 
        tarefa: 'Estudar js', 
        realizada: false
    }, 
    {
        id: 2, 
        tarefa: 'Estudar BD', 
        realizada: false
    }, 
    {
        id: 3, 
        tarefa: 'Dormir', 
        realizada: true
    }
];

let opcao = 0;

do {
    
    console.log('LISTA DE TAREFAS');
    console.log('1 - Listar tarefas pendentes');
    console.log('2 - Listar tarefas realizadas');
    console.log('3 - Adicionar tarefa'); 
    console.log('4 - Editar tarefa');
    console.log('5 - Excluir tarefa');
    console.log('0 - Encerrar');
    opcao = entrada('Selecione uma opção:');

    if (opcao == 1) {

        console.log('----');
        console.log('TAREFAS PENDENTES');
        console.log('----');

        for (const i in tarefas) {

            if (tarefas[i].realizada == false){
            console.log('ID: ' + tarefas[i].id)
            console.log('Tarefa: ' + tarefas[i].tarefa)
            console.log('Realizada: ' + tarefas[i].realizada)
            console.log('----');
            }

            }
    }

    if (opcao == 2) {

        console.log('----');
        console.log('TAREFAS REALIZADAS');
        console.log('----');

        for (const i in tarefas) {

            if (tarefas[i].realizada == true){
                console.log('ID: ' + tarefas[i].id)
                console.log('Tarefa: ' + tarefas[i].tarefa)
                console.log('Realizada: ' + tarefas[i].realizada)
                console.log('----');
            }
        }
    }
    

    if (opcao == 3) {
        
    }

    if (opcao == 4) {
        
    }

    if (opcao == 5) {
        
    }

} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();
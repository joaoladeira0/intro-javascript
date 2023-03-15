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
        console.log('Tarefas pendentes:');
        tarefas.forEach(function(tarefa) {
            if (!tarefa.realizada) {
                console.log(`${tarefa.id} - ${tarefa.tarefa}`);
            }
        });
    }

    if (opcao == 2) {
        console.log('Tarefas realizadas:');
        tarefas.forEach(function(tarefa) {
            if (tarefa.realizada) {
                console.log(`${tarefa.id} - ${tarefa.tarefa}`);
            }
        });
    }

    if (opcao == 3) {
        let novaTarefa = entrada('Digite a nova tarefa:');
        let id = tarefas.length + 1;
        tarefas.push({id: id, tarefa: novaTarefa, realizada: false});
        console.log('Tarefa adicionada com sucesso!');
    }

    if (opcao == 4) {
        let id = entrada('Digite o ID da tarefa a ser editada:');
        let index = tarefas.findIndex(function(tarefa) {
            return tarefa.id == id;
        });
        if (index >= 0) {
            let novaTarefa = entrada('Digite a nova tarefa:');
            tarefas[index].tarefa = novaTarefa;
            console.log('Tarefa editada com sucesso!');
        } else {
            console.log('Tarefa não encontrada!');
        }
    }

    if (opcao == 5) {
        let id = entrada('Digite o ID da tarefa a ser excluída:');
        let index = tarefas.findIndex(function(tarefa) {
            return tarefa.id == id;
        });
        if (index >= 0) {
            tarefas.splice(index, 1);
            console.log('Tarefa excluída com sucesso!');
        } else {
            console.log('Tarefa não encontrada!');
        }
    }
} while (opcao != 0); 

console.log('Programa encerrado!');

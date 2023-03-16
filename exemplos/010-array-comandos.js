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
    console.log('4 - Concluir tarefa');
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
            console.log('Realizada: ' + (!tarefas[i].realizada ? 'Não' : 'Sim')); //!array (é como se fosse array == false)
            console.log('----');
            }
        }
        console.log(' ')
        entrada('Digite enter para continuar...')
    }

    if (opcao == 2) {

        console.log('----');
        console.log('TAREFAS REALIZADAS');
        console.log('----');

        for (const i in tarefas) {

            if (tarefas[i].realizada == true){
                console.log('ID: ' + tarefas[i].id)
                console.log('Tarefa: ' + tarefas[i].tarefa)
                console.log('Realizada: ' + (!tarefas[i].realizada ? 'Não' : 'Sim'));
                console.log('----');
            }
        }
        console.log(' ')
        entrada('Digite enter para continuar...')
    }
    

    if (opcao == 3) {
        const idCad = tarefas.length + 1;
        const tarefa = entrada('Digite a tarefa a ser realizada: ');
        const objAdd = {
            id : idCad,
            tarefa : tarefa,
            realizada : false
        }
        tarefas.push(objAdd);
        console.log('Tarefa adicionada com sucesso!');
        console.log(' ');
        entrada('Digite enter para continuar...');
    }
    

    if (opcao == 4) {
        for (const i in tarefas) {
            if (!tarefas[i].realizada) {
                console.log(tarefas[i].id + ' ' + tarefas[i].tarefa);
            }
        }   

        const tConcluir = parseInt(entrada('Digite o ID da tarefa que será concluida')) - 1;
        
        const objAtualizar = {
            id: tarefas[tConcluir].id,
            tarefa: tarefas[tConcluir].tarefa,
            realizada: true
        }
        tarefas[tConcluir] = objAtualizar;

        console.log('');
        console.log('Tarefa concluida com sucesso!');
        entrada('Digite enter para continuar...');
    }

    if (opcao == 5) {
        
    }

} while (opcao != 0); 

console.log('Programa encerrado!');
entrada();
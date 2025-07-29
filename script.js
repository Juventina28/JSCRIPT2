 let tarefas=[]
 
 function adicionarTarefa(){ 

    
    /*
    if(tarefa==""){
        alert("Por favor, insira uma tarefa válida.");
        return;
    }else{
        document.getElementById("mensagem").textContent = mensagem;

        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")

        novaTarefa.textContent=tarefa

        listaTarefas.appendChild(novaTarefa)

        inputTarefa.value=""
    }*/
    const inputTarefa =document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    const mensagem = document.getElementById("mensagem");

    if(tarefa==""){
        let mensagemErro= "Digite uma tarefa para adicioná-la"
        mensagem.textContent=mensagemErro
    } else{
        let mensagemSucesso ="Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso

        tarefas.push(tarefa)
        renderizarTarefas()
     }
    inputTarefa.value=""
}
function renderizarTarefas(){
            const listaTarefas = document.getElementById("listaTarefas")
            listaTarefas.innerHTML=""

            let i=0
            for(i; i<tarefas.length; i++){
                let novaTarefa=document.createElement("li")
                novaTarefa.textContent=tarefas[i]
                listaTarefas.appendChild(novaTarefa)
            }
}
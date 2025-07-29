function adicionarTarefa(){ 
    let mensagem = "Tarefa adicionada com sucesso"
    let inputTarefa =document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value

    if(tarefa==""){
        alert("Por favor, isira uma tarefa válida.");

        return;
    }else{
        document.getElementById("mensagem").textContent = mensagem;

        let listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")

        novaTarefa.textContent=tarefa

        listaTarefas.appendChild(novaTarefa)

        inputTarefa.value=""
    }

}
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
    const botaoLimpar = document.getElementById("botaoLimpar");

    if(tarefa==""){
        let mensagemErro= "Digite uma tarefa para adicioná-la"
        mensagem.textContent=mensagemErro
        mensagem.style.color = "red";
    } else{
        let mensagemSucesso ="Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
         mensagem.style.color = "green";

        botaoLimpar.style.display = "inline-block";
        tarefas.push(tarefa)
        renderizarTarefas()
     }
    inputTarefa.value=""
}
function renderizarTarefas(){
            const listaTarefas = document.getElementById("listaTarefas")
            listaTarefas.innerHTML=""

            for(let i=0; i<tarefas.length; i++){
                let novaTarefa=document.createElement("li")
                novaTarefa.textContent=tarefas[i]
                
                let botaoRemover=document.createElement("button")
                botaoRemover.className="remover"
                botaoRemover.textContent="Remover"
                botaoRemover.onclick = () => removerTarefa(i)

                let botaoEditar = document.createElement("button")
                botaoEditar.className="editar"
                botaoEditar.textContent="Editar"
                botaoEditar.onclick = () => editarTarefa(i)

                novaTarefa.appendChild(botaoRemover)
                novaTarefa.appendChild(botaoEditar)
                listaTarefas.appendChild(novaTarefa)
            }
}
function removerTarefa(i){
    const confirmar=confirm("Deseja realmente remover esta tarefa?")
    tarefas.splice(i,1)
    renderizarTarefas()
   
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent="Tarefa removida"
    

}
function editarTarefa(i){
    let tarefaEditada = prompt("Edite a tarefa:")
    if(tarefaEditada.trim()!==""){
        tarefas[i]=tarefaEditada;
        renderizarTarefas();
        const mensagem = document.getElementById("mensagem");
        mensagem.textContent="Tarefa editada"

    }
}
function limparLista(){
    tarefas.length=0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent="Lista de tarefa limpa"
}
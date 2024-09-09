let proximoId = 1

function adicionarlinha(){
    //Entrada de valores do form
   const nome = document.getElementById('nome').value;
   const idade = document.getElementById('idade').value;
   const admissao = document.getElementById('admissao').value;
   const demissao = document.getElementById('demissao').value;
   
    //Se for preenchido vazio
    if(nome === '' || idade === '' || admissao === ''){
        alert("preencha os valores do Formulario!")
    }
        
        //obtenha a tabela e o tbody
    const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody')[0];

    //Crie uma nova linha na tabela
    const novaLinha = tabela.insertRow;

    //inserindo os valores da linha
    const celId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3);
    const celDemissao = novaLinha.insertCell(4);

    //inserindo os valores dentro da celulas
    celId.innerHTML = proximoId;
    celNome.innerHTML = nome;
    celIdade.innerHTML = idade;
    celAdmissao.innerHTML = admissao;
    celDemissao.innerHTML = demissao;

    proximoId++

    //limpar formulario
    document.getElementById("linhaform").reset();
}
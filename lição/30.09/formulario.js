let proximoId = 1

function adicionarlinha(){
   const Produto = document.getElementById('Produto').value;
   const Marca = document.getElementById('Marca').value;
   const Seguimento = document.getElementById('Seguimento').value;
   const Valor = document.getElementById('valor').value;
   const Data = document.getElementById('Data').value;
   
    if (Produto === '' ||  Marca === '' || Seguimento === '' || Valor === '' || Data === ''){
        alert("preencha todos os valores do Formulario!")
    } else{
        const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody')[0];
    
        //Crie uma nova linha na tabela
        const novaLinha=tabela.insertRow();
    
        //inserindo os valores da linha
        const celId = novaLinha.insertCell(0);
        const celNome = novaLinha.insertCell(1);
        const celIdade = novaLinha.insertCell(2);
        const celAdmissao = novaLinha.insertCell(3);
        const celDemissao = novaLinha.insertCell(4);
    
        //inserindo os valores dentro da celulas
        celId.innerHTML = proximoId;
        celProduto.innerHTML = Produto;
        celMarca.innerHTML = Marca;
        celAdmissao.innerHTML = admissao;
        celDemissao.innerHTML = demissao;
    
        proximoId++
    
        //limpar formulario
        document.getElementById("linhaform").reset();}
}
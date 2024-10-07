let proximoId = 1

function adicionarLinha(){
    //Entrada de valores do formulário
    const A = document.getElementById("a").value;
    const B = document.getElementById("b").value;
    const C = document.getElementById("c").value;
    const x1 = document.getElementById("x1").value;
    const x2 = document.getElementById("x2").value;

    //Se for preenchido vazio
    if(A === '' || B === '' || C === '' || x1 === '' || x2 === '')
        alert("Preencha os valores ausentes do formulário!")
    else {
        //Cria uma linha na tabela se não existir
const tabela = document.getElementById("tabelaDados") .getElementsByTagName('tbody') [0];
//Inserindo uma nova linha
const novalinha = tabela.insertRow();

//Inserindo os valores da linha
const celId = novalinha.insertCell(0);
const celA = novalinha.insertCell(1);
const celB = novalinha.insertCell(2);
const celC = novalinha.insertCell(3);
const celx1 = novalinha.insertCell(4);
const celx2 = novalinha.insertCell(5);

//Inserindo os valores dentro das celulas
celId.innerHTML = proximoId;
celA.innerHTML = a;
celB.innerHTML = valor;
celC.innerHTML = data;
celx1.innerHTML = marca;
celx2.innerHTML = segmento;

proximoId++

//Limpar formulário 
document.getElementById("linhaForm").reset();
    }
}
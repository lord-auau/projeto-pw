let proximoId = 1

function adicionarlinha(){
   const A = document.getElementById('A').value;
   const B = document.getElementById('B').value;
   const C = document.getElementById('C').value;

 if (A === '' ||  B === '' || C === ''){
        alert("preencha todos os valores do Formulario!")
    } else{
        const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody')[0];
    
        const novaLinha=tabela.insertRow();

        const celId = novaLinha.insertCell(0);
        const celA = novaLinha.insertCell(1);
        const celB = novaLinha.insertCell(2);
        const celC = novaLinha.insertCell(3);
        const celx1 = novaLinha.insertCell(4);
        const celx2 = novaLinha.insertCell(5);

        cellID.innerHTML = proximoId;
        cellA.innerHTML = a;
        cellB.innerHTML = b;
        cellC.innerHTML = c;
        cellX1.innerHTML = x1;
        cellX2.innerHTML = x2;

        proximoId++

        document.getElementById("linhaform").reset();
    }
}
function multiplicar() {
    var A = x 
    var B = x
    var C = x
    let res = (B*B)*(-4*A*B)
}
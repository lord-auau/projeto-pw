let proximoId = 1;

function adicionarLinha() {
    const produto = document.getElementById('produto').value;
    const marca = document.getElementById('marca').value;
    const segmento = document.getElementById('segmento').value;
    const valor = document.getElementById('valor').value;
    const data = document.getElementById('datacompra').value;

    if (produto === '' || marca === '' || segmento === '' || valor === '' || data === '') {
        alert("Preencha todos os valores do formulário!");
    } else {
        const tabela = document.getElementById("tabeladados").getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();

        const celId = novaLinha.insertCell(0);
        const celProduto = novaLinha.insertCell(1);
        const celMarca = novaLinha.insertCell(2);
        const celSegmento = novaLinha.insertCell(3);
        const celValor = novaLinha.insertCell(4);
        const celData = novaLinha.insertCell(5);

        celId.innerHTML = proximoId++;
        celProduto.innerHTML = produto;
        celMarca.innerHTML = marca;
        celSegmento.innerHTML = segmento;
        celValor.innerHTML = valor;
        celData.innerHTML = data;

        document.getElementById("linhaform").reset();
    }
}

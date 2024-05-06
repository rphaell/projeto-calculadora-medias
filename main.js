const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/emojihappy.png" alt="emoji happy"/>'
const imgReprovado = '<img src="./images/emojisad.png" alt="emoji sad"/>'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();



    
})

function adicionaLinha(){
    
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');    


    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));



        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`//aqui é uma tecnica para contatenar, por exemplo linha = 'outro comando'
        linha += `<td>${inputNotaAtividade.value}</td>` // aqui colocamos os dados capturados na variavel linha
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha; //aqui adicionamos o conteudo em outra linha, ao invez de apenas substituir o conteudo

        inputNomeAtividade.value = ''; // limpar o campo do input após adicionar o conteudo
        inputNotaAtividade.value = ''; // limpar o campo do input  após adicionar o conteud
    }

    
}

function atualizaTabela() {
    //colocar o conteudo acima dentro do corpo da tabela
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; // inseir o atributo dentro da tag
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    


}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i =0; i < notas.length; i++ ){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}
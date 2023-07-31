const form = document.getElementById('form-atividade');
const nome = [];
const number = [];

let linhas = '';

const inputNumberContato = document.getElementById('num-contato');
    inputNumberContato.addEventListener('focus', function(){
        inputNumberContato.placeholder = "Ex: 99 99999-9999";
    });

    inputNumberContato.addEventListener('blur', function(){
        inputNumberContato.placeholder = "Número do Contato";
    });

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumberContato = document.getElementById('num-contato');

    if (nome.includes(inputNomeContato.value)) {
        alert (`O contato ${inputNomeContato.value} já foi adicionado.`);
    } else if (number.includes(inputNumberContato.value)) {
        alert (`O número ${inputNumberContato.value} já foi adicionado.`)
    } else {
        nome.push(inputNomeContato.value);
        number.push(inputNumberContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumberContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumberContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

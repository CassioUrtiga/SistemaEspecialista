// Importar as perguntas
import questoes from "./questoes.js";

let iniciar = document.getElementById("iniciarBtn");
let index = 0;
let pontuacao = 0;
let perguntas = [];
let categoria = 0;
let valorSelecionado = '';
let indexArea = 0;
let areas = ['areaPretendida', 'junior', 'pleno', 'senior'];
let nivel = areas[indexArea];

function obterValorSelecionado() {
    // Selecione todos os inputs do tipo radio com o atributo name="nivel"
    let inputs = document.querySelectorAll('input[type="radio"]');

    // Declare uma variável para armazenar o valor selecionado
    let valorSelecionado = null;

    // Itere sobre os inputs
    inputs.forEach(function (input) {
        // Verifique se o input está selecionado
        if (input.checked) {
            // Se estiver selecionado, atribua o valor à variável valorSelecionado
            valorSelecionado = input.value;
        }
    });

    // Retorne o valor selecionado
    return valorSelecionado;
}
function respostas() {
    let respostasHtml = '';
    if (categoria === 0) {
        const opcoes = questoes[categoria].areas;
        opcoes.forEach(opcao => {
            respostasHtml += `<input type="radio" class="areas" id="${opcao}" name="area" value="${opcao}">
                            <label for="${opcao}" class="areas" data-number="${opcao}"></label>`
        });
    } else {
        const inputNivel = [1, 2, 3, 4, 5];
        inputNivel.forEach(numero => {
            respostasHtml += `<input type="radio" class="niveis" id="nivel${numero}" name="nivel" value="${numero}">
                              <label for="nivel${numero}" class="niveis" data-number="${numero}"></label>\n`;
        });
    }
    return respostasHtml;
}

// Função para verificar e exibir a próxima pergunta
function proximaQuestao() {

    valorSelecionado = obterValorSelecionado();
    if (iniciar.textContent == 'Iniciar') {
        trocarBotao();
    }
    
    if (valorSelecionado == "Front-End") {
        categoria = 1;
        nivel = "junior";
    }else if (valorSelecionado == "Back-End") {
        categoria = 2;
        nivel = "junior";
    }else if (categoria !== 0){
        pontuacao += parseInt(obterValorSelecionado())
    }

    let respostasHtml = respostas();
    perguntas = questoes[categoria][nivel]

    console.log("pontuacao: " + pontuacao)

    if (index < perguntas.length) {
        console.log(index)
        let questaoHtml = perguntas[index];
        let questao = document.querySelector('.questoes');
        let respostas = document.querySelector('.level-selector');

        respostas.innerHTML = respostasHtml;
        questao.innerHTML = questaoHtml;
        
    }

    if (index == perguntas.length-1) {
        index = 0;
    }else{
        index++;
    }

    if (pontuacao/perguntas.length == 5 || categoria == 0) {
        indexArea++;
        nivel = areas[indexArea];
    }

}

// Função para trocar o botão de Iniciar para Próxima
function trocarBotao() {
    let iniciar = document.getElementById("iniciarBtn");
    iniciar.innerText = "Próxima";
    iniciar.id = "proximaBtn";
    iniciar.setAttribute("onclick", proximaQuestao);
}

// Event listener para o botão de iniciar/próxima
iniciar.addEventListener('click', proximaQuestao);


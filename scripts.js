// Importar as perguntas
import questoes from "./questoes.js";

let iniciar = document.getElementById("iniciarBtn");
let index = 0;
let pontuacao = [];
let parcial = 0;
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
function validacaoDeNivel() {
    let media = parcial / perguntas.length;
    console.log("media: " + media);
    if (media == 5) {
        pontuacao.push(parcial);
        if (nivel == "senior") {
            gerarGrafico(pontuacao);
        } else {
            indexArea++;
            nivel = areas[indexArea];
            index = 0;
            parcial = 0;
        }
    } else if (index == perguntas.length && categoria !== 0) {
        pontuacao.push(parcial);
        gerarGrafico(pontuacao);
    }
    console.log("pontuacao: " + pontuacao);
}
function progresso() {
    let porcentagem = Math.round(index * 100 / perguntas.length);
    let barraProgresso = document.querySelector('.progress-bar');
    barraProgresso.style.width = porcentagem + '%';
    barraProgresso.setAttribute('aria-valuenow', porcentagem);
    barraProgresso.textContent = porcentagem + '%';
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
    } else if (valorSelecionado == "Back-End") {
        categoria = 2;
        nivel = "junior";
    } else if (categoria !== 0) {
        parcial += parseInt(obterValorSelecionado())
    }

    let respostasHtml = respostas();

    validacaoDeNivel();
    progresso()

    console.log("nivel: " + nivel)
    perguntas = questoes[categoria][nivel]

    if (index < perguntas.length) {
        console.log(index)
        let questaoHtml = perguntas[index];
        let questao = document.querySelector('.questoes');
        let respostas = document.querySelector('.level-selector');

        respostas.innerHTML = respostasHtml;
        questao.innerHTML = questaoHtml;

        // Atualiza a barra de progresso
        index++;
    }

    if (categoria == 0) {
        console.log("executou!!")
        index = 0;
        indexArea++;
        nivel = areas[indexArea];
    }



}

function gerarGrafico([junior = 0, pleno = 0, senior]) {
    document.getElementById("quadro1").style.display = "none";
    document.getElementById("quadro2").style.display = "block";

    let ctx = document.getElementById('myChart').getContext('2d');

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Júnior', 'Pleno', 'Senior'],
            datasets: [{
                label: 'Nível de aptidão',
                data: [junior, pleno, senior],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function (value) {
                            return value + "%";
                        }
                    }
                }
            }
        }
    });
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


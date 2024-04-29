// Importar as perguntas
import questoes from "./questoes.js";

let iniciar = document.getElementById("iniciarBtn");
let index = 0;
let pontuacao = 0;

// Função para exibir as perguntas com base na pontuação
function exibirPerguntas(nivel) {
  let perguntas = [];
  if (nivel === "junior") {
    perguntas = questoes[0].junior;
  } else if (nivel === "pleno") {
    perguntas = questoes[1].pleno;
  } else if (nivel === "senior") {
    perguntas = questoes[2].senior;
  }
  return perguntas;
}

// Função para verificar e exibir a próxima pergunta
function proximaQuestao() {
  if (iniciar.textContent == 'Iniciar') {
    trocarBotao();
  }


  let nivel = "junior"; // Definir o nível inicial
  if (pontuacao >= 15) {
    nivel = "pleno";
  }
  if (pontuacao >= 30) {
    nivel = "senior";
  }

  let perguntas = exibirPerguntas(nivel);
  let questaoHtml = perguntas[index];
  let respostasHtml = `<input type="radio" id="nivel1" name="nivel" value="1">
                             <label for="nivel1" data-number="1"></label>
        
                             <input type="radio" id="nivel2" name="nivel" value="2">
                             <label for="nivel2" data-number="2"></label>
        
                             <input type="radio" id="nivel3" name="nivel" value="3">
                             <label for="nivel3" data-number="3"></label>
        
                             <input type="radio" id="nivel4" name="nivel" value="4">
                             <label for="nivel4" data-number="4"></label>
        
                             <input type="radio" id="nivel5" name="nivel" value="5">
                             <label for="nivel5" data-number="5"></label>`;
  let questao = document.querySelector('.questoes');
  let respostas = document.querySelector('.level-selector');
  respostas.innerHTML = respostasHtml;
  questao.innerHTML = questaoHtml;
  index++;
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

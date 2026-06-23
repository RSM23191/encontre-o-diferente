const btnJogar =
document.getElementById("btnJogar");

const btnReiniciar =
document.getElementById("btnReiniciar");

const campoNome =
document.getElementById("nomeJogador");

const nomeExibido =
document.getElementById("nomeExibido");

const pontuacaoTela =
document.getElementById("pontuacao");

const tempoTela =
document.getElementById("tempo");

const rodadaTela =
document.getElementById("rodada");

const tabuleiro =
document.getElementById("tabuleiro");

const resultado =
document.getElementById("resultado");

const mensagemFinal =
document.getElementById("mensagemFinal");

let jogador = "";

let pontos = 0;

let rodada = 1;

let tempo = 45;

let cronometro = null;

const frutas = [

"🍎",
"🍐",
"🍉",
"🍋",
"🍇",
"🍓"

];

btnJogar.addEventListener(
"click",
iniciarJogo
);

btnReiniciar.addEventListener(
"click",
reiniciarJogo
);

function iniciarJogo() {

jogador =
campoNome.value.trim();

if (jogador === "") {

alert(
"Digite seu nome."
);

return;

}

pontos = 0;

rodada = 1;

tempo = 45;

resultado.style.display =
"none";

nomeExibido.textContent =
jogador;

atualizarPainel();

gerarGrid();

iniciarTempo();

}

function iniciarTempo() {

clearInterval(
cronometro
);

cronometro =
setInterval(() => {

tempo--;

tempoTela.textContent =
tempo;

if (tempo <= 0) {

encerrarJogo();

}

}, 1000);

}

function gerarGrid() {

tabuleiro.replaceChildren();

/*
decidi criar os elementos
usando DOM porque
a atividade proíbe innerHTML
*/

let tamanho = 3;

if (rodada >= 3) {

tamanho = 4;

}

if (rodada >= 5) {

tamanho = 5;

}

tabuleiro.style.gridTemplateColumns =
`repeat(${tamanho},1fr)`;

const total =
tamanho * tamanho;

const indiceCorreto =

Math.floor(
Math.random() * total
);

const frutaBase =

frutas[
Math.floor(
Math.random()

* frutas.length
  )
  ];

let frutaDiferente =
frutas[
Math.floor(
Math.random()

* frutas.length
  )
  ];

while (
frutaDiferente ===
frutaBase
) {

frutaDiferente =
frutas[
Math.floor(
Math.random()

* frutas.length
  )
  ];

}

for (
let i = 0;
i < total;
i++
) {

/*
guardei no dataset
qual botão é o correto
para validar o clique
*/

const celula =
document.createElement(
"button"
);

celula.classList.add(
"celula"
);

celula.dataset.correta =
(i === indiceCorreto);

if (
i === indiceCorreto
) {

celula.textContent =
frutaDiferente;

}

else {

celula.textContent =
frutaBase;

}

celula.addEventListener(
"click",
verificarClique
);

tabuleiro.appendChild(
celula
);

}

}

function verificarClique(
evento
) {

const acertou =

evento.target.dataset
.correta
=== "true";

if (acertou) {

pontos += 10;

rodada++;

gerarGrid();

}

else {

pontos -= 5;

if (pontos < 0) {

pontos = 0;

}

}

atualizarPainel();

}

function atualizarPainel() {

pontuacaoTela.textContent =
pontos;

tempoTela.textContent =
tempo;

rodadaTela.textContent =
rodada;

}

function encerrarJogo() {

clearInterval(
cronometro
);

tabuleiro.replaceChildren();

resultado.style.display =
"block";

mensagemFinal.textContent =

`${jogador}, sua pontuação foi ${pontos}.`;

}

function reiniciarJogo() {

location.reload();

}


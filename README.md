## Nome

Ray Silva Matos

---

## Mecânica escolhida

Encontre o Diferente

O objetivo do jogo é encontrar e clicar no único elemento diferente dentro da grade antes que o tempo termine.

---

## Tema

Frutas

O jogador precisa localizar rapidamente a fruta diferente entre várias iguais.

---

## Briefing do cliente

Pessoa daltônica

Para atender esse público, o jogo foi pensado para não depender apenas das cores.

Decisões tomadas:

* Uso de emojis diferentes;
* Elementos grandes;
* Interface simples;
* Pouca informação na tela;
* Fácil identificação dos elementos.

---

# Regras do jogo

1. Digite seu nome.
2. Clique em **Jogar**.
3. Observe o tabuleiro.
4. Encontre a fruta diferente.
5. Clique nela para ganhar pontos.
6. O tempo continua diminuindo durante a partida.
7. O jogo termina quando o tempo chega em zero.

---

# Restrições aplicadas

Uma única página HTML

JavaScript puro (Vanilla JS)

Manipulação do DOM

Sem uso de bibliotecas

Sem uso de `innerHTML` para criar elementos interativos

---

# Minhas Decisões

## 1. Tamanho e formato do grid

Começa em 3×3.

Ao avançar nas rodadas o grid aumenta.

Escolhi isso para criar aumento gradual da dificuldade.

---

## 2. Quantidade de elementos

Foram utilizadas frutas em emoji.

Coloquei poucas frutas para facilitar identificação.

---

## 3. Fórmula de pontuação

Acerto:
+10 pontos

Erro:
−5 pontos

Escolhi essa fórmula porque recompensa atenção sem tornar o jogo frustrante.

---

## 4. Critérios de tempo

Tempo total:

45 segundos.

Escolhi um tempo suficiente para permitir várias rodadas.

---

## 5. Curva de dificuldade

A dificuldade aumenta conforme:

* aumento do tamanho da grade;
* maior quantidade de elementos.

---

## 6. Condição de término

O jogo termina quando:

* o cronômetro chega em zero.

---

# Meu diferencial

Foi implementado aumento progressivo da dificuldade.

No código isso ocorre alterando automaticamente o número de linhas e colunas conforme o jogador avança.

---

# Como jogar

1. Abrir o jogo.
2. Digitar o nome.
3. Clicar em Jogar.
4. Encontrar a fruta diferente.
5. Acumular pontos.

---

# Como executar

1. Clonar ou abrir o repositório.
2. Abrir o projeto no navegador.
3. Executar o arquivo `index.html`.

---

# Reflexão obrigatória

## 1. Qual foi o bug mais chato e como resolveu?

O bug mais difícil foi conseguir visualizar o projeto no Codespaces. Resolvi criando um servidor local e abrindo pela porta disponível.

---

## 2. Por que escolheu essa fórmula de pontuação?

Para incentivar atenção sem punir excessivamente os erros.

---

## 3. Como o briefing do cliente mudou suas decisões?

Como o cliente era uma pessoa daltônica, evitei depender apenas das cores.

---

## 4. Se tivesse mais uma semana, o que mudaria?

Adicionaria ranking, sons e mais modos de dificuldade.

---

## 5. Aponte uma função sua que ficou boa.

A função `gerarGrid()` ficou bem organizada porque cria os elementos dinamicamente usando DOM.

---

# Declaração de uso de IA

Utilizei IA como ferramenta de apoio para:

* organizar ideias;
* estruturar o projeto;
* entender os erros;


O código foi estudado e compreendido antes da entrega.

---

# Créditos

Referências utilizadas:

* Documentação HTML
* Documentação CSS
* Documentação JavaScript
* GitHub Codespaces

---

# Licença

Projeto desenvolvido apenas para fins acadêmicos.

import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Aula 4 — "Duas Cestas na Feira: Comparar Quantidades"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Segue o padrão travado das Aulas 2 e 3:
 *   Aprendendo (Etapa 1: contar cesta do Coelho → Etapa 2: contar cesta
 *   da Coruja → Etapa 3: comparar lado a lado → Etapa 4: descobre os
 *   sinais >, <, = → Etapa 5: generaliza com bananas) →
 *   3 Fases de prática (guiada, independente, aplicação) →
 *   Revisão + Quiz Final (5 perguntas) → Missão em Família.
 *
 * BNCC: EF02MA04 (comparar quantidades usando maior, menor, igual).
 */
export const aula04_compararQuantidades: AulaV4 = {
  slug: "04-comparar-quantidades-duas-cestas",
  titulo: "Duas Cestas na Feira: Quem Tem Mais?",
  iconeTrilha: "⚖️",
  bncc: ["EF02MA04"],
  duracaoMin: 20,

  // ===== APRENDENDO (Etapas 1 → 5) ===================================

  momento01_motivacao: {
    titulo: "Quem trouxe mais frutas hoje?",
    historia:
      "Seu Coelho e Dona Coruja voltaram da feira ao mesmo tempo. Cada um trouxe uma cesta de maçãs. Eles ficaram discutindo: 'A MINHA tem mais!' — 'Não, a MINHA!' Brilha aparece e diz: 'Calma! Pra saber quem tem MAIS, a gente compara — conta as duas cestas e olha os números!'",
    imagemUrl: brilha,
  },

  // Etapa 1 — Contar a cesta do Coelho (6 maçãs)
  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Observe. Esta é a cesta do Seu Coelho. Toque em cada maçã pra contar quantas ele trouxe:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 6,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs Seu Coelho trouxe?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se a cesta da Dona Coruja tiver MENOS maçãs, como a gente descobre isso só de olhar?",
    pista:
      "Todo número tem um LUGAR na fila do 0 ao 10. Quem vem DEPOIS é maior. Quem vem ANTES é menor. E se são o mesmo número, ficam empatados: IGUAIS.",
    revelacao:
      "Isso! Pra COMPARAR, a gente conta os dois grupos e olha os números. O maior vence. Se são iguais, deu empate. E existem sinais especiais pra escrever isso: '>' (maior), '<' (menor) e '=' (igual)!",
  },

  // Etapas 2, 3, 4 e 5 — a explicação em si
  momento04_explicacao: {
    titulo: "Comparando de verdade: maior, menor, igual",
    etapas: [
      // ---- Etapa 2 — Contar a cesta da Coruja (4 maçãs) --------
      {
        texto:
          "Etapa 2 — Agora a cesta da Dona Coruja. Vamos contar essas maçãs também.",
        exemplo:
          "A Coruja trouxe 4 maçãs. O Coelho tinha 6. Já dá pra sentir quem tem mais?",
        frutasParaNumero: {
          imagemUrl: maca,
          itemPlural: "maçãs",
          grupos: [4],
        },
      },
      // ---- Etapa 3 — Lado a lado ------------------------------
      {
        texto:
          "Etapa 3 — Colocamos as duas cestas LADO A LADO. Uma tem 6, a outra tem 4. Qual pilha é maior? A do 6!",
        exemplo:
          "6 é MAIOR que 4. Ou também podemos dizer: 4 é MENOR que 6. É a mesma comparação — só muda por qual número a gente começa a falar.",
        agrupamentos: [
          { imagemUrl: maca, tamanhoGrupo: 6, qtdGrupos: 1, rotulo: "Seu Coelho" },
          { imagemUrl: maca, tamanhoGrupo: 4, qtdGrupos: 1, rotulo: "Dona Coruja" },
        ],
      },
      // ---- Etapa 4 — Os sinais >, <, = ------------------------
      {
        texto:
          "Etapa 4 — Pra escrever a comparação, usamos SINAIS. O '>' é uma boquinha aberta pra COMER o número MAIOR. Ela sempre 'come' o maior lado!",
        exemplo:
          "Escrevemos: 6 > 4 (a boca aberta pro 6, porque 6 é maior). Também vale: 4 < 6 (a boca aberta pro 6 do outro lado). E quando são iguais, usamos '=': 5 = 5.",
      },
      // ---- Etapa 5 — Generalização com bananas (empate) -------
      {
        texto:
          "Etapa 5 — Não importa a fruta! Se Seu Coelho tem 3 bananas e Dona Coruja também tem 3 bananas, ficaram IGUAIS: 3 = 3.",
        exemplo:
          "Truque final: primeiro CONTE cada grupo. Depois compare os números. Aponte a boca do sinal pro MAIOR (ou use '=' se forem iguais).",
        agrupamentos: [
          { imagemUrl: banana, tamanhoGrupo: 3, qtdGrupos: 1, rotulo: "Seu Coelho" },
          { imagemUrl: banana, tamanhoGrupo: 3, qtdGrupos: 1, rotulo: "Dona Coruja" },
        ],
      },
    ],
  },

  // Brilha resolve 7 vs 5 em voz alta (modelagem)
  momento05_modelagem: {
    enunciado:
      "Brilha vai comparar 7 maçãs com 5 maçãs pensando em voz alta:",
    passos: [
      "Primeiro, olho as duas pilhas. Uma tem 7 maçãs, a outra tem 5 maçãs.",
      "Conto a primeira pra ter certeza: um, dois, três, quatro, cinco, seis, sete. São 7!",
      "Conto a segunda: um, dois, três, quatro, cinco. São 5!",
      "Agora comparo os números: 7 vem DEPOIS do 5 na fila. Então 7 é MAIOR.",
      "Escrevo o sinal com a boca aberta pro 7: 7 > 5. Também vale 5 < 7. Pronto!",
    ],
    resposta: "7 > 5 (ou 5 < 7)",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [7, 5],
      itemPlural: "maçãs",
    },
  },

  // ===== FATIA 2 — 3 FASES DE PRÁTICA (guiada → independente → aplicação)

  // Fase 1 — Nós fazemos juntos: 5 maçãs vs 3 maçãs
  momento06_praticaGuiada: {
    enunciado:
      "Fase 1 — Vamos juntos! Seu Coelho colocou 5 maçãs na cesta e Dona Coruja colocou 3. Quem tem MAIS maçãs?",
    dica: "Conte cada cesta. 5 vem DEPOIS do 3 na fila dos números — então 5 é maior. A boca do sinal '>' aponta pro maior.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 5, rotulo: "🐰 Seu Coelho" },
        { imagemUrl: maca, quantidade: 3, rotulo: "🦉 Dona Coruja" },
      ],
      pergunta: "Quem tem MAIS maçãs?",
      opcoes: ["Seu Coelho (5)", "Dona Coruja (3)", "Estão iguais"],
      correta: 0,
      feedbackAcerto:
        "🎉 Isso! 5 > 3. Seu Coelho tem mais porque 5 vem depois do 3 na fila dos números.",
      feedbackErro:
        "Vamos juntos: conte a cesta do Coelho (1,2,3,4,5) e a da Coruja (1,2,3). 5 é maior que 3, então o Coelho tem mais.",
    },
  },

  // Fase 2 — Você faz: bananas com Coruja tendo mais
  momento07_praticaIndependente: {
    enunciado:
      "Fase 2 — Agora é você! Seu Coelho tem 4 bananas e Dona Coruja tem 7 bananas. Quem tem MAIS?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 4, rotulo: "🐰 Seu Coelho" },
        { imagemUrl: banana, quantidade: 7, rotulo: "🦉 Dona Coruja" },
      ],
      pergunta: "Quem trouxe MAIS bananas hoje?",
      opcoes: ["Seu Coelho (4)", "Dona Coruja (7)", "Estão iguais"],
      correta: 1,
      feedbackAcerto:
        "🎉 Perfeito! 7 > 4. Dona Coruja tem mais — 7 vem bem depois do 4 na fila. Escrevemos: 4 < 7.",
      feedbackErro:
        "Conte com calma: Coelho tem 4, Coruja tem 7. 7 é maior que 4 (vem depois na fila). A Coruja venceu essa!",
    },
  },

  // Fase 3 — Aplicação: EMPATE (as duas cestas iguais)
  momento08_aplicacao: {
    contexto:
      "Fase 3 — Problema da feira! Seu Coelho e Dona Coruja terminaram de contar as maçãs de novo, com calma. Cada um tem uma cesta na sua frente.",
    problema:
      "Seu Coelho tem 6 maçãs. Dona Coruja também tem 6 maçãs. Como a gente ESCREVE essa comparação?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 6, rotulo: "🐰 Seu Coelho" },
        { imagemUrl: maca, quantidade: 6, rotulo: "🦉 Dona Coruja" },
      ],
      pergunta: "Qual sinal completa: 6 __ 6?",
      opcoes: ["6 > 6 (maior)", "6 < 6 (menor)", "6 = 6 (igual)"],
      correta: 2,
      feedbackAcerto:
        "🎉 Uau! Quando os dois têm a MESMA quantidade, usamos '='. 6 = 6 quer dizer: deu empate na feira!",
      feedbackErro:
        "Olhe as duas cestas: cada uma tem 6. Quando o número dos dois lados é o MESMO, o sinal certo é '='. Fica: 6 = 6.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Revisão da aula: contamos cada cesta tocando as frutas.",
      "Depois COMPARAMOS os dois números pra ver qual é maior.",
      "Aprendemos os sinais: '>' (maior), '<' (menor) e '=' (igual). A boca aberta sempre aponta pro MAIOR!",
      "🎯 Agora um mini-desafio pra fechar!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 8, rotulo: "🐰 Seu Coelho" },
        { imagemUrl: maca, quantidade: 5, rotulo: "🦉 Dona Coruja" },
      ],
      pergunta:
        "Mini-desafio: Seu Coelho tem 8 e Dona Coruja tem 5. Qual comparação está CERTA?",
      opcoes: ["8 < 5", "8 = 5", "8 > 5"],
      correta: 2,
      feedbackAcerto:
        "🎉 Boa! 8 > 5. A boca do sinal fica aberta pro lado do 8, porque 8 é o maior.",
      feedbackErro:
        "Truque: a boca do '>' sempre COME o maior. 8 é maior que 5, então: 8 > 5.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      // 1 — bem fácil: comparação pequena, Coelho tem mais
      {
        pergunta:
          "Pergunta 1 de 5 — Seu Coelho tem 4 maçãs. Dona Coruja tem 2. Quem tem MAIS?",
        opcoes: ["Seu Coelho", "Dona Coruja", "Estão iguais"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 4, rotulo: "🐰 Seu Coelho" },
          { imagemUrl: maca, quantidade: 2, rotulo: "🦉 Dona Coruja" },
        ],
        feedbackAcerto:
          "🎉 Isso! 4 > 2. O Coelho tem mais — 4 vem depois do 2 na fila dos números.",
        feedbackErro:
          "Conte com calma: 4 é maior que 2 (vem depois na fila). O Coelho tem mais.",
      },
      // 2 — Coruja tem mais, bananas
      {
        pergunta:
          "Pergunta 2 de 5 — Seu Coelho trouxe 3 bananas e Dona Coruja trouxe 8. Quem trouxe MAIS?",
        opcoes: ["Seu Coelho", "Dona Coruja", "Estão iguais"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 3, rotulo: "🐰 Seu Coelho" },
          { imagemUrl: banana, quantidade: 8, rotulo: "🦉 Dona Coruja" },
        ],
        feedbackAcerto:
          "🎉 Perfeito! 8 > 3. A Coruja venceu — 8 vem bem depois do 3.",
        feedbackErro:
          "Compare: 3 e 8. 8 é bem maior (vem muito depois na fila). Coruja tem mais.",
      },
      // 3 — EMPATE
      {
        pergunta:
          "Pergunta 3 de 5 — Os dois têm 5 maçãs cada um. Qual sinal está CERTO?",
        opcoes: ["5 > 5", "5 = 5", "5 < 5"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 5, rotulo: "🐰 Seu Coelho" },
          { imagemUrl: maca, quantidade: 5, rotulo: "🦉 Dona Coruja" },
        ],
        feedbackAcerto:
          "🎉 Isso! Quando é a MESMA quantidade dos dois lados, usamos '='. Deu empate!",
        feedbackErro:
          "Truque: MESMA quantidade dos dois lados = sinal '='. Fica: 5 = 5.",
      },
      // 4 — leitura do sinal '<'
      {
        pergunta:
          "Pergunta 4 de 5 — Como se lê a comparação: 3 < 7 ?",
        opcoes: [
          "Três é MAIOR que sete",
          "Três é MENOR que sete",
          "Três é IGUAL a sete",
        ],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 3, rotulo: "3" },
          { imagemUrl: maca, quantidade: 7, rotulo: "7" },
        ],
        feedbackAcerto:
          "🎉 Boa! A boca do sinal '<' fica aberta pro 7 — quer dizer que 7 é o maior, então 3 é MENOR que 7.",
        feedbackErro:
          "Olhe pra onde a boca do sinal está aberta: pro 7. O 7 é o maior, então 3 é MENOR que 7.",
      },
      // 5 — problema aplicado: escolher o sinal 9 vs 6
      {
        pergunta:
          "Pergunta 5 de 5 — Seu Coelho tem 9 maçãs. Dona Coruja tem 6. Qual sinal completa: 9 __ 6?",
        opcoes: ["9 > 6", "9 < 6", "9 = 6"],
        correta: 0,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 9, rotulo: "🐰 Seu Coelho" },
          { imagemUrl: maca, quantidade: 6, rotulo: "🦉 Dona Coruja" },
        ],
        feedbackAcerto:
          "🎉 Uau! 9 > 6. A boca aberta pro 9, porque 9 é maior. Você é campeão(ã) da comparação! 🏆",
        feedbackErro:
          "Pense: qual número é maior, 9 ou 6? O 9. A boca do '>' aponta pro maior. Fica: 9 > 6.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🧺 Duelo das Duas Cestas",
    materiais: [
      "Frutas ou brinquedos pequenos (feijões, tampinhas, blocos — qualquer coisa que dê pra contar)",
      "2 pratos, potes ou tigelas (uma pra cada 'cesta')",
      "Papel e lápis (opcional, pra escrever o sinal >, < ou =)",
    ],
    passos: [
      "1) O adulto e a criança pegam um prato cada e colocam uma quantidade de frutas (entre 1 e 10) — sem espiar!",
      "2) Ao 'já!', mostram os pratos. A criança conta os dois em voz alta: 'Tenho 7, você tem 4!'",
      "3) A criança fala quem tem mais: 'Eu tenho MAIS! 7 é maior que 4. Sete é maior que quatro: 7 > 4.'",
      "4) Repitam 5 vezes tentando quantidades diferentes. Uma das rodadas deve dar EMPATE — aí a criança diz '=' (igual).",
      "5) Bônus: o adulto escreve os dois números no papel e a criança desenha o sinal certo (>, < ou =) entre eles.",
    ],
    registro:
      "📸 Tire uma foto dos dois pratos lado a lado com o número e o sinal escritos no papel entre eles (ex.: '7 > 4').",
  },

  recompensa: {
    xp: 150,
    moedas: 75,
    medalha: "Juíza(o) da Feira",
  },
};

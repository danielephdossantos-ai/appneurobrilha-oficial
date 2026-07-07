import type { AulaV4 } from "../../types";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import peixe from "@/assets/neuro-treino/objetos/peixe.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 3 · Aula 2 — "Descobrindo o símbolo −"
 * BNCC EF02MA05, EF02MA06.
 *
 * Introduz o sinal de subtração, ensina a lê-lo/escrevê-lo, e trabalha
 * a distinção entre "tirar" e "descobrir quanto falta".
 */
export const aula02_simboloMenos: AulaV4 = {
  slug: "u3-02-simbolo-menos",
  titulo: "Descobrindo o símbolo −",
  iconeTrilha: "➖",
  bncc: ["EF02MA05", "EF02MA06"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Uma placa misteriosa!",
    historia:
      "Brilha andava pelo Reino e viu uma placa escrita: '7 − 2'. Ficou pensando: 'o que esse tracinho quer dizer?' A Coruja Sábia chegou voando e explicou: 'Esse é o SINAL DE MENOS. Ele mostra que vamos TIRAR uma quantidade.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Havia 7 bananas. Vamos tirar 2. Toque em cada BANANA que sobrou:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: banana,
      quantidade: 5,
      itemPlural: "bananas",
      pergunta: "7 − 2 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Você percebeu o que o sinal '−' quer dizer?",
    pista:
      "Ele aparece no meio de dois números — e alguma coisa sai.",
    revelacao:
      "Isso! O sinal '−' significa TIRAR (ou descobrir quanto FALTA). Ele é o coração da subtração!",
  },

  momento04_explicacao: {
    titulo: "O sinal −",
    etapas: [
      {
        texto: "Etapa 2 — O sinal '−' pode ter dois significados:",
        exemplo: "1) TIRAR uma quantidade. 2) Descobrir quanto FALTA.",
      },
      {
        texto: "Etapa 3 — 6 − 1 = 5. Comece no 6 e volte 1: cinco.",
        exemplo: "'seis menos um é igual a cinco'.",
        contaArmada: {
          a: 6,
          b: 1,
          resultado: 5,
          operacao: "subtracao",
          itemPlural: "bananas",
        },
      },
      {
        texto: "Etapa 4 — 9 − 3 = 6. Comece no 9 e volte 3: oito, sete, seis.",
        exemplo: "Contar pra trás é uma boa estratégia.",
        contaArmada: {
          a: 9,
          b: 3,
          resultado: 6,
          operacao: "subtracao",
        },
      },
      {
        texto: "Etapa 5 — 8 − 4 = 4. Do 8, volte 4: sete, seis, cinco, quatro.",
        exemplo: "Sempre começa no MAIOR e volta o MENOR.",
        contaArmada: {
          a: 8,
          b: 4,
          resultado: 4,
          operacao: "subtracao",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 6 − 1 pensando em voz alta:",
    passos: [
      "Vejo 6 bananas.",
      "O sinal '−' me pede pra TIRAR 1.",
      "Do 6, volto 1: cinco.",
      "Escrevo: 6 − 1 = 5.",
      "Resposta: 5 bananas!",
    ],
    resposta: "6 − 1 = 5",
    visualUrl: banana,
    colecaoVisual: {
      imagemUrl: banana,
      grupos: [5],
      itemPlural: "bananas",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Juntos! 8 peixes no rio, 4 foram embora. Veja e responda.",
    dica: "Do 8 volte 4: sete, seis, cinco, quatro. Fica 4.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: peixe,
      itemPlural: "peixes",
      a: 8,
      b: 4,
      legenda: "8 − 4 = 4",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Ana tinha 9 lápis e perdeu 2 no caminho. Quantos sobraram?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: lapis, quantidade: 7, rotulo: "Ficaram" },
      ],
      pergunta: "9 − 2 = ?",
      opcoes: ["6", "7", "8"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 9 − 2 = 7 lápis.",
      feedbackErro: "Do 9 volte 2: oito, sete. Fica 7.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Havia 10 maçãs no cesto. Dona Coelha comeu 3.",
    problema:
      "Quantas maçãs sobraram?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 10,
      b: 3,
      legenda: "10 − 3 = 7 maçãs",
    },
  },

  momento09_revisao: {
    pontos: [
      "'−' é o sinal de MENOS: tirar ou saber quanto falta.",
      "Começa no MAIOR e conta PRA TRÁS.",
      "🎯 Minijogo: escolha o sinal certo!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 6, rotulo: "Tinha" },
        { imagemUrl: banana, quantidade: 2, rotulo: "Comeu" },
      ],
      pergunta:
        "'Tinha 6 bananas e COMEU 2.' Que sinal usar?",
      opcoes: ["+", "−", "="],
      correta: 1,
      feedbackAcerto:
        "🎉 Isso! 'Comeu' = TIRAR. Usa '−'. 6 − 2 = 4.",
      feedbackErro:
        "'Comeu' tira quantidade. O sinal certo é '−'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — O sinal '−' significa...",
        opcoes: ["Juntar", "Tirar", "Igual"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! '−' = TIRAR.",
        feedbackErro: "'−' significa TIRAR. '+' é juntar.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 6 − 1 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: banana, quantidade: 6, rotulo: "Tinha" },
        ],
        tirar: 1,
        feedbackAcerto: "🎉 Isso! 6 − 1 = 5.",
        feedbackErro: "Do 6 volte 1: cinco.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 9 − 3 = ?",
        opcoes: ["5", "6", "7"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: peixe, quantidade: 9, rotulo: "Tinha" },
        ],
        tirar: 3,
        feedbackAcerto: "🎉 Boa! 9 − 3 = 6.",
        feedbackErro: "Do 9 volte 3: oito, sete, seis.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — 'Ana tinha 9 lápis e PERDEU 2.' Que sinal usar?",
        opcoes: ["+", "−", "="],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'Perdeu' = tirar. 9 − 2 = 7.",
        feedbackErro: "'Perdeu' tira. Sinal '−'.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — 8 − 4 = ?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 8, rotulo: "Tinha" },
        ],
        tirar: 4,
        feedbackAcerto: "🎉 Uau! 8 − 4 = 4.",
        feedbackErro: "Do 8 volte 4: sete, seis, cinco, quatro.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "➖ Placas do Reino",
    materiais: [
      "Papel e caneta",
      "Objetos pra contar (feijões, tampinhas)",
    ],
    passos: [
      "1) O adulto escreve 3 'placas' com contas: 7 − 2, 9 − 4, 10 − 3.",
      "2) A criança lê a placa em voz alta ('sete menos dois').",
      "3) Separa os objetos, TIRA a quantidade da placa e conta o que ficou.",
      "4) Escreve o resultado ao lado.",
      "5) Repete até resolver todas.",
    ],
    registro:
      "📸 Foto das três placas resolvidas com os objetos.",
  },

  recompensa: {
    xp: 160,
    moedas: 80,
    medalha: "Leitor(a) das Placas do Reino",
  },
};

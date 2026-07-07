import type { AulaV4 } from "../../types";
import estrela from "@/assets/neuro-treino/objetos/estrela.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import caixa from "@/assets/neuro-treino/objetos/caixa.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";

/**
 * Unidade 5 · Aula 3 — "Qual Operação Usar?"
 * BNCC EF02MA06, EF02MA07.
 *
 * A criança aprende palavras-chave que indicam soma ou subtração —
 * e decide sozinha qual operação escolher.
 */
export const aula03_qualOperacao: AulaV4 = {
  slug: "u5-03-qual-operacao-usar",
  titulo: "Qual Operação Usar?",
  iconeTrilha: "🎯",
  bncc: ["EF02MA06", "EF02MA07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Vários comerciantes precisam de ajuda!",
    historia:
      "Quatro comerciantes chegaram ao mesmo tempo pedindo ajuda. Cada problema é DIFERENTE — nenhum diz se é soma ou subtração. Brilha precisa DECIDIR sozinho qual operação usar!",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — 'Pedro GANHOU 4 figurinhas.' Toque em cada FIGURINHA:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: estrela,
      quantidade: 4,
      itemPlural: "figurinhas",
      pergunta: "Que operação a palavra 'GANHOU' pede?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Como você sabe se é soma ou subtração?",
    pista:
      "As PALAVRAS do problema dão a pista.",
    revelacao:
      "Isso! Existem PALAVRAS-CHAVE. 'Ganhou', 'chegou', 'juntou' = SOMA. 'Perdeu', 'vendeu', 'sobrou' = SUBTRAÇÃO.",
  },

  momento04_explicacao: {
    titulo: "Palavras que dão pista",
    etapas: [
      {
        texto:
          "➕ ADIÇÃO — palavras que MOSTRAM que algo AUMENTA:",
        exemplo:
          "ganhou · chegou · juntou · acrescentou · recebeu · comprou mais.",
      },
      {
        texto:
          "➖ SUBTRAÇÃO — palavras que MOSTRAM que algo DIMINUI:",
        exemplo:
          "perdeu · vendeu · sobrou · retirou · gastou · foi embora · comeu.",
      },
      {
        texto:
          "🧠 Se a quantidade AUMENTA → SOMA. Se DIMINUI → SUBTRAÇÃO.",
        exemplo:
          "Sempre pense: 'depois vai ficar MAIS ou MENOS?'",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha decide 4 problemas em voz alta:",
    passos: [
      "1) 'Pedro GANHOU 4 figurinhas.' Ganhou → SOMA (+).",
      "2) 'Ana VENDEU 5 flores.' Vendeu → SUBTRAÇÃO (−).",
      "3) 'Chegaram MAIS 8 caixas.' Chegou → SOMA (+).",
      "4) 'Foram embora 6 clientes.' Foram embora → SUBTRAÇÃO (−).",
      "Cada palavra grita a operação!",
    ],
    resposta: "+ , − , + , −",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — 'Chegaram MAIS 8 caixas no depósito.' Qual operação?",
    dica: "'Chegaram MAIS' aumenta. É SOMA.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: caixa, quantidade: 8, rotulo: "Chegaram" },
      ],
      pergunta: "Qual sinal usar?",
      opcoes: ["+", "−", "="],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 'Chegaram MAIS' = SOMA (+).",
      feedbackErro: "Chegou → aumenta → SOMA (+).",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — 'Ana VENDEU 5 flores.' Qual operação?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: flor, quantidade: 5, rotulo: "Vendeu" },
      ],
      pergunta: "Qual sinal usar?",
      opcoes: ["+", "−", "="],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Vendeu' = SUBTRAÇÃO (−).",
      feedbackErro: "Vendeu → diminui → SUBTRAÇÃO (−).",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — 'Foram embora 6 clientes da loja.'",
    problema:
      "Qual operação usar?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 6, rotulo: "Foram" },
      ],
      pergunta: "Que sinal usar?",
      opcoes: ["+", "−", "="],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 'Foram embora' = SUBTRAÇÃO (−).",
      feedbackErro: "Foram embora → diminui → SUBTRAÇÃO.",
    },
  },

  momento09_revisao: {
    pontos: [
      "'Ganhou', 'chegou', 'juntou' = SOMA (+).",
      "'Vendeu', 'perdeu', 'sobrou', 'foi embora' = SUBTRAÇÃO (−).",
      "Aumenta = +. Diminui = −.",
      "🎯 Minijogo: Escolha a Operação!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: estrela, quantidade: 3, rotulo: "Recebeu" },
      ],
      pergunta:
        "'Recebeu 3 medalhas.' Que sinal?",
      opcoes: ["+", "−", "="],
      correta: 0,
      feedbackAcerto: "🎉 Isso! 'Recebeu' = SOMA (+).",
      feedbackErro: "Recebeu → aumenta → SOMA (+).",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "Pergunta 1 de 5 — 'GANHOU' indica que operação?",
        opcoes: ["Adição", "Subtração", "Nenhuma"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Ganhou' = ADIÇÃO.",
        feedbackErro: "'Ganhou' aumenta → ADIÇÃO.",
      },
      {
        pergunta:
          "Pergunta 2 de 5 — 'VENDEU' indica?",
        opcoes: ["Adição", "Subtração", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'Vendeu' = SUBTRAÇÃO.",
        feedbackErro: "'Vendeu' tira → SUBTRAÇÃO.",
      },
      {
        pergunta:
          "Pergunta 3 de 5 — 'CHEGARAM MAIS' indica?",
        opcoes: ["Adição", "Subtração", "Nenhuma"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Chegou = ADIÇÃO.",
        feedbackErro: "'Chegaram mais' = aumenta = ADIÇÃO.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — 'FORAM EMBORA' indica?",
        opcoes: ["Adição", "Subtração", "Nenhuma"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Foram embora = SUBTRAÇÃO.",
        feedbackErro: "Foram embora → diminui → SUBTRAÇÃO.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Como decidir a operação?",
        opcoes: [
          "Chutar",
          "Ver se a quantidade aumenta (+) ou diminui (−)",
          "Sempre somar",
        ],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Aumenta = +. Diminui = −. 🏆",
        feedbackErro:
          "Se aumenta = SOMA. Se diminui = SUBTRAÇÃO.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎯 Caça-Palavras da Operação",
    materiais: [
      "Papel e lápis",
      "2 cartões: + e −",
    ],
    passos: [
      "1) A família fala 6 frases: 'ganhou 3', 'perdeu 4', 'chegou 2', 'vendeu 5', 'juntou 6', 'foi embora 1'.",
      "2) A criança levanta o cartão + ou − de acordo.",
      "3) Explica em voz alta a palavra-chave.",
      "4) Se errar, a família ajuda.",
      "5) Repete até acertar as 6.",
    ],
    registro:
      "📸 Vídeo curto da criança levantando os cartões.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Detetive das Operações",
  },
};

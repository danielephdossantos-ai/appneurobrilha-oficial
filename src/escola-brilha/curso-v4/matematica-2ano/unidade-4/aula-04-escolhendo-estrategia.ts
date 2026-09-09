import type { AulaV4 } from "../../types";
import { url as bloco } from "@/assets/neuro-treino/objetos/bloco.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela.png.asset.json";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 4 · Aula 4 — "Escolhendo a Melhor Estratégia"
 * BNCC EF02MA05, EF02MA06, EF02MA07.
 *
 * A criança aprende que não existe UM jeito só — existem várias estratégias
 * e um bom matemático ESCOLHE a que serve pra situação.
 */
export const aula04_escolhendoEstrategia: AulaV4 = {
  slug: "u4-04-escolhendo-estrategia",
  titulo: "Escolhendo a Melhor Estratégia",
  iconeTrilha: "🎮",
  bncc: ["EF02MA05", "EF02MA06", "EF02MA07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Qual ferramenta usar?",
    historia:
      "O Inventor dos Números levou Brilha até uma parede cheia de FERRAMENTAS: 'Completar 10', 'Somar Direto', 'Pensar na Dezena', 'Tirar as Unidades'. Ele disse: 'Cada conta pede uma ferramenta diferente. Vamos aprender a ESCOLHER?'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Olhe pra 9 + 1. Qual ferramenta dá pra usar? Toque nas peças:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: estrela,
      quantidade: 10,
      itemPlural: "estrelas",
      pergunta: "9 + 1 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Existe UM jeito só de resolver, ou vários?",
    pista:
      "9 + 1 dá 10. É a estratégia 'COMPLETAR A DEZENA'.",
    revelacao:
      "Isso! Existem VÁRIAS maneiras corretas. Um bom matemático ESCOLHE a estratégia mais fácil pra cada conta.",
  },

  momento04_explicacao: {
    titulo: "Quatro ferramentas da oficina",
    etapas: [
      {
        texto:
          "🔧 Ferramenta 1 — COMPLETAR A DEZENA. Use quando um número é 8, 9 (perto de 10).",
        exemplo: "9 + 1 = 10.",
      },
      {
        texto:
          "🔧 Ferramenta 2 — SOMAR DIRETO. Use quando um número é dezena inteira (20, 30, 40).",
        exemplo: "20 + 5 = 25.",
      },
      {
        texto:
          "🔧 Ferramenta 3 — PENSAR NA DEZENA. Use em subtração com dezena.",
        exemplo: "15 − 5 = 10. Tiro só as unidades e sobra a dezena.",
      },
      {
        texto:
          "🔧 Ferramenta 4 — TIRAR AS UNIDADES. Use quando tira a mesma quantidade de unidades.",
        exemplo: "18 − 8 = 10. As unidades somem e sobra a dezena.",
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 15 − 5 escolhendo a ferramenta:",
    passos: [
      "Vejo 15 − 5.",
      "O 5 é igual às unidades do 15.",
      "Ferramenta: TIRAR AS UNIDADES.",
      "As unidades somem. Sobra só a dezena: 10.",
      "Escrevo: 15 − 5 = 10.",
    ],
    resposta: "15 − 5 = 10",
    visualUrl: bloco,
    colecaoVisual: {
      imagemUrl: bloco,
      grupos: [10],
      itemPlural: "blocos",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — 20 + 5. Qual ferramenta é a melhor?",
    dica: "20 é dezena inteira. Ferramenta: SOMAR DIRETO. Fica 25.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 5, rotulo: "⭐" },
      ],
      pergunta: "20 + 5 = ?",
      opcoes: ["24", "25", "30"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 20 + 5 = 25. Ferramenta: SOMAR DIRETO.",
      feedbackErro: "20 já é dezena. Só junte 5: 25.",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — 18 − 8. Escolha e resolva.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 8, rotulo: "⭐" },
      ],
      pergunta: "18 − 8 = ?",
      opcoes: ["8", "10", "12"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 18 − 8 = 10. Ferramenta: TIRAR AS UNIDADES.",
      feedbackErro: "As 8 unidades somem. Sobra só a dezena: 10.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — Ana tem 8 maçãs e ganhou 2. Qual ferramenta usar?",
    problema:
      "8 + 2 = ?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "soma",
      imagemUrl: maca,
      itemPlural: "maçãs",
      a: 8,
      b: 2,
      legenda: "8 + 2 = 10 (COMPLETAR A DEZENA)",
    },
  },

  momento09_revisao: {
    pontos: [
      "Existem VÁRIAS ferramentas: completar 10, somar direto, pensar na dezena, tirar unidades.",
      "Um bom matemático ESCOLHE a mais fácil.",
      "Todas dão a mesma resposta certa.",
      "🎮 Minijogo: Oficina Inteligente!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bloco, quantidade: 10, rotulo: "📦" },
        { imagemUrl: estrela, quantidade: 7, rotulo: "⭐" },
      ],
      pergunta: "17 − 7 = ? (qual ferramenta?)",
      opcoes: ["7", "10", "17"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 17 − 7 = 10. TIRAR AS UNIDADES.",
      feedbackErro: "As 7 unidades somem. Sobra 10.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 9 + 1 = ?",
        opcoes: ["9", "10", "11"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 9 + 1 = 10 (completar a dezena).",
        feedbackErro: "9 + 1 fecha 10.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 20 + 5 = ?",
        opcoes: ["24", "25", "30"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 20 + 5 = 25 (somar direto).",
        feedbackErro: "20 é dezena. + 5 = 25.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 15 − 5 = ?",
        opcoes: ["5", "10", "15"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 15 − 5 = 10 (pensar na dezena).",
        feedbackErro: "As 5 unidades somem. Sobra 10.",
      },
      {
        pergunta: "Pergunta 4 de 5 — 18 − 8 = ?",
        opcoes: ["8", "10", "16"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 18 − 8 = 10.",
        feedbackErro: "As 8 unidades somem. Sobra a dezena.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — Existe UM único jeito de resolver uma conta?",
        opcoes: ["Sim, sempre igual", "Não, várias ferramentas certas", "Só desenhando"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Várias ferramentas — o esperto ESCOLHE. 🏆",
        feedbackErro: "Há VÁRIAS estratégias corretas.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎮 Escolha a Ferramenta",
    materiais: [
      "Papel e lápis",
      "4 cartõezinhos com o nome de cada ferramenta",
    ],
    passos: [
      "1) O adulto propõe 4 contas: 9+1, 20+3, 15−5, 17−7.",
      "2) Antes de resolver, a criança escolhe uma FERRAMENTA (cartão).",
      "3) Explica em voz alta por que escolheu.",
      "4) Resolve e confere.",
      "5) A família aplaude o RACIOCÍNIO, não só a resposta.",
    ],
    registro:
      "📸 Foto das 4 contas resolvidas com o cartão da ferramenta usada.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Estrategista da Oficina",
  },
};

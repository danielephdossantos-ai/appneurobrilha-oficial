import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as lapis } from "@/assets/neuro-treino/objetos/lapis.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Unidade 3 · Aula 4 — "Conta Horizontal e Conta Armada"
 * BNCC EF02MA05, EF02MA06, EF02MA07.
 *
 * A criança abandona o desenho e passa a REPRESENTAR a subtração
 * com números (horizontal e armada), mantendo o visual como apoio.
 */
export const aula04_contaArmada: AulaV4 = {
  slug: "u3-04-conta-armada",
  titulo: "Conta Horizontal e Conta Armada",
  iconeTrilha: "➖",
  bncc: ["EF02MA05", "EF02MA06", "EF02MA07"],
  duracaoMin: 22,

  momento01_motivacao: {
    titulo: "Precisamos desenhar sempre?",
    historia:
      "Brilha estava resolvendo várias subtrações e ficou pensando: 'Preciso mesmo desenhar TUDO?' A Coruja sorriu: 'Não! Quando você entende, pode escrever só com NÚMEROS. Vou te mostrar dois jeitos: HORIZONTAL e ARMADA.'",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Etapa 1 — Havia 6 morangos. Tire 2. Toque em cada UM que sobrou:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 4,
      itemPlural: "morangos",
      pergunta: "6 − 2 = ?",
    },
  },

  momento03_descoberta: {
    perguntaGuia:
      "Se você já sabe fazer no desenho, por que não escrever só a conta?",
    pista:
      "Um jeito é 6 − 2 = 4. Outro é escrever um debaixo do outro.",
    revelacao:
      "Isso! CONTA HORIZONTAL: 6 − 2 = 4. CONTA ARMADA: empilhada, com o maior em cima e o menor embaixo.",
  },

  momento04_explicacao: {
    titulo: "Dois jeitos de escrever",
    etapas: [
      {
        texto:
          "Etapa 2 — CONTA HORIZONTAL fica numa linha só: 8 − 3 = 5.",
        exemplo: "Rápida e boa pra contas pequenas.",
      },
      {
        texto:
          "Etapa 3 — CONTA ARMADA fica empilhada. Maior em cima. Menor embaixo. Traço. Resultado.",
        exemplo: "  8\n− 3\n----\n  5",
        contaArmada: {
          a: 8,
          b: 3,
          resultado: 5,
          operacao: "subtracao",
        },
      },
      {
        texto:
          "Etapa 4 — 9 − 4 = 5 (armada).",
        exemplo: "Sempre unidades embaixo de unidades.",
        contaArmada: {
          a: 9,
          b: 4,
          resultado: 5,
          operacao: "subtracao",
        },
      },
      {
        texto:
          "Etapa 5 — 7 − 2 = 5 (armada).",
        exemplo: "Do 7 volte 2: seis, cinco.",
        contaArmada: {
          a: 7,
          b: 2,
          resultado: 5,
          operacao: "subtracao",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado:
      "EU FAÇO — Brilha resolve 8 − 3 na conta armada pensando em voz alta:",
    passos: [
      "Escrevo o 8 em cima.",
      "Escrevo o − 3 embaixo, alinhado.",
      "Faço o traço.",
      "8 − 3: sete, seis, cinco. Fica 5.",
      "Escrevo 5 embaixo do traço.",
    ],
    resposta: "8 − 3 = 5",
    visualUrl: maca,
    colecaoVisual: {
      imagemUrl: maca,
      grupos: [5],
      itemPlural: "morangos",
    },
  },

  momento06_praticaGuiada: {
    enunciado:
      "NÓS FAZEMOS — Vamos armar 9 − 4 juntos!",
    dica: "Do 9 volte 4: oito, sete, seis, cinco. Resposta: 5.",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: flor,
      itemPlural: "flores",
      a: 9,
      b: 4,
      legenda: "9 − 4 = 5",
    },
  },

  momento07_praticaIndependente: {
    enunciado:
      "VOCÊ FAZ — Sozinho(a)! Arme e resolva: 7 − 2.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: bola, quantidade: 5, rotulo: "Sobraram" },
      ],
      pergunta: "7 − 2 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 7 − 2 = 5.",
      feedbackErro: "Do 7 volte 2: seis, cinco.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "APLICAÇÃO — No mercado havia 10 pães. Foram vendidos 6.",
    problema:
      "Quantos pães sobraram na prateleira?",
    interacao: {
      tipo: "operacaoVisual",
      operacao: "subtracao",
      imagemUrl: bola,
      itemPlural: "pães",
      a: 10,
      b: 6,
      legenda: "10 − 6 = 4 pães",
    },
  },

  momento09_revisao: {
    pontos: [
      "CONTA HORIZONTAL: numa linha só (8 − 3 = 5).",
      "CONTA ARMADA: empilhada, maior em cima.",
      "Do maior, volte a quantidade do menor.",
      "🎯 Minijogo: 3 contas armadas rapidinho!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: lapis, quantidade: 5, rotulo: "Sobraram" },
      ],
      pergunta:
        "Resolva na cabeça: 8 − 3 = ?",
      opcoes: ["4", "5", "6"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! 8 − 3 = 5.",
      feedbackErro: "Do 8 volte 3: sete, seis, cinco.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Pergunta 1 de 5 — 6 − 2 = ?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: maca, quantidade: 6, rotulo: "Tinha" },
        ],
        tirar: 2,
        feedbackAcerto: "🎉 Isso! 6 − 2 = 4.",
        feedbackErro: "Do 6 volte 2: cinco, quatro.",
      },
      {
        pergunta: "Pergunta 2 de 5 — 8 − 3 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: flor, quantidade: 8, rotulo: "Tinha" },
        ],
        tirar: 3,
        feedbackAcerto: "🎉 Boa! 8 − 3 = 5.",
        feedbackErro: "Do 8 volte 3: sete, seis, cinco.",
      },
      {
        pergunta: "Pergunta 3 de 5 — 9 − 4 = ?",
        opcoes: ["4", "5", "6"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: bola, quantidade: 9, rotulo: "Tinha" },
        ],
        tirar: 4,
        feedbackAcerto: "🎉 Isso! 9 − 4 = 5.",
        feedbackErro: "Do 9 volte 4: oito, sete, seis, cinco.",
      },
      {
        pergunta:
          "Pergunta 4 de 5 — Na conta armada, quem vai EM CIMA?",
        opcoes: ["O menor", "O maior", "Tanto faz"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! O MAIOR sempre em cima.",
        feedbackErro: "Na conta armada o MAIOR fica em cima.",
      },
      {
        pergunta:
          "Pergunta 5 de 5 — 10 − 6 = ?",
        opcoes: ["3", "4", "5"],
        correta: 1,
        visualGrupos: [
          { imagemUrl: lapis, quantidade: 10, rotulo: "Tinha" },
        ],
        tirar: 6,
        feedbackAcerto: "🎉 Uau! 10 − 6 = 4.",
        feedbackErro: "Do 10 volte 6: fica 4.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "➖ Caderno das Contas Armadas",
    materiais: [
      "Caderno ou folha quadriculada",
      "Lápis",
    ],
    passos: [
      "1) O adulto dita 3 subtrações: 8 − 3, 9 − 5, 10 − 4.",
      "2) A criança ARMA cada uma no caderno (maior em cima, menor embaixo, traço).",
      "3) Resolve contando pra trás.",
      "4) Confere junto com o adulto.",
      "5) Explica em voz alta como fez.",
    ],
    registro:
      "📸 Foto do caderno com as três contas armadas.",
  },

  recompensa: {
    xp: 180,
    moedas: 100,
    medalha: "Mestre da Conta Armada",
  },
};

import type { AulaV4 } from "../../types";

/**
 * Aula 10 — "Missão Final: Guardião(ã) da Cidade dos Números"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Encerramento narrativo com 5 desafios em sequência, um por
 * habilidade da unidade. Conquista final desbloqueia Unidade 2.
 * BNCC: EF03MA01, EF03MA02, EF03MA03.
 */
export const aula10_missaoFinal: AulaV4 = {
  slug: "10-missao-final-cidade",
  titulo: "Missão Final da Cidade",
  iconeTrilha: "🏆",
  bncc: ["EF03MA01", "EF03MA02", "EF03MA03"],
  duracaoMin: 25,
  metodologias: ["skemp", "cpa", "rme"],

  momento01_motivacao: {
    titulo: "A Cidade vai receber o Prefeito Estadual!",
    historia:
      "A Cidade dos Números está em festa: hoje o Prefeito Estadual chega em visita oficial. A Prefeita escolheu VOCÊ, {NOME}, pra representar a Cidade. São 5 desafios: decompor, valor posicional, ler, comparar e sequência. Se passar em todos, leva a MEDALHA 🏆 de Guardião(ã).",
  },

  momento02_exploracao: {
    instrucao: "Desafio 1/5 — DECOMPOSIÇÃO. Reveja: 320 = 300 + 20 + 0.",
    cenas: [
      { tipo: "texto", texto: "Cada casa contribui com seu valor:" },
      { tipo: "texto", texto: "320 = 3 centenas + 2 dezenas + 0 unidades", destaque: true },
      { tipo: "texto", texto: "320 = 300 + 20 + 0." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Você lembra dos 5 desafios que estão vindo?",
    pista: "Decompor · Valor Posicional · Ler · Comparar · Sequência.",
    revelacao:
      "Isso! No fim: 🏆 medalha de Guardião(ã), XP dobrado e Unidade 2 destrancada. Vamos lá?",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      {
        texto: "5 desafios em sequência, um por habilidade.",
        exemploReal: {
          contexto: "Warm-up: decompor 456.",
          casasValor: {
            numero: 456,
            extenso: "quatrocentos e cinquenta e seis",
            mostrarDecomposicao: true,
          },
          destaque: "456 = 400 + 50 + 6.",
        },
      },
      {
        texto: "Se errar, Brilha explica e você pode tentar de novo. O importante é ir até o fim.",
        exemploReal: {
          contexto: "Warm-up: em 456, quanto vale o 5?",
          casasValor: {
            numero: 456,
            extenso: "quatrocentos e cinquenta e seis",
            mostrarDecomposicao: true,
          },
          destaque: "5 na dezena = 50.",
        },
      },
      {
        texto: "Prêmio: 🏆 Guardião(ã) da Cidade + Unidade 2 destrancada.",
        exemploReal: {
          contexto:
            "Warm-up de comparação: 456 vs 445. Centena empata (4=4). Dezena: 5 > 4.",
          destaque: "456 > 445. Boca do '>' aponta pro maior.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha treina um mini de cada desafio pra você:",
    passos: [
      "1) Decompor: 320 = 300 + 20 + 0.",
      "2) Valor: em 456, o 5 vale 50.",
      "3) Ler: 456 = 'quatrocentos e cinquenta e seis'.",
      "4) Comparar: 456 > 445 (dezena: 5 > 4).",
      "5) Sequência: 456, 466, 476 (pulo 10).",
    ],
    resposta: "Pronto pra missão! 🏆",
    casasValor: {
      numero: 456,
      mostrarDecomposicao: true,
      extenso: "quatrocentos e cinquenta e seis",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Desafio 2/5 — VALOR POSICIONAL. Quanto vale o 3 em 738?",
    dica: "Da direita: 8 (U), 3 (D), 7 (C).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Em 738, o 3 vale:",
      opcoes: [{ nome: "3" }, { nome: "30" }, { nome: "300" }],
      respostaCerta: "30",
      feedbackAcerto: "🎉 30! O 3 está na dezena.",
      feedbackErro: "3 na dezena = 30. Da direita: U, D, C.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Desafio 3/5 — LER. Como se escreve 'novecentos e quatro'?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "novecentos e quatro =",
      opcoes: [{ nome: "94" }, { nome: "904" }, { nome: "940" }],
      respostaCerta: "904",
      feedbackAcerto: "🎯 904. Dezena = 0 (não se fala).",
      feedbackErro: "900 + 0 + 4 = 904. Dezena zero pula na leitura.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Desafio 4/5 — COMPARAR. O Prefeito Estadual perguntou qual barraca do mercado vendeu MAIS. Três barracas: A (682), B (628), C (686).",
    problema: "Quem venceu?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Maior entre A, B, C:",
      opcoes: [{ nome: "A (682)" }, { nome: "B (628)" }, { nome: "C (686)" }],
      respostaCerta: "C (686)",
      feedbackAcerto:
        "🎯 Isso! B tem D=2 (fora). Entre A (682) e C (686), unidade decide: 6 > 2 → C vence.",
      feedbackErro:
        "C empata (6). B tem D=2 (menor). Entre A e C, unidade: 6 > 2 → C (686) é o maior.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Falta o último desafio!",
      "SEQUÊNCIA: descubra o pulo e ache o próximo termo.",
      "🎯 Se acertar, você vira GUARDIÃO(Ã)!",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Desafio 5/5 — 550, 560, 570, ... próximo?",
      opcoes: [{ nome: "571" }, { nome: "580" }, { nome: "600" }],
      respostaCerta: "580",
      feedbackAcerto:
        "🏆 🎉 Pulo 10 → 580. VOCÊ É GUARDIÃO(Ã) DA CIDADE DOS NÚMEROS!",
      feedbackErro: "Pulo = 560 − 550 = 10. 570 + 10 = 580.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Prova final 1/3 — Decomponha 573.",
        opcoes: ["500 + 70 + 3", "5 + 7 + 3", "50 + 70 + 3"],
        correta: 0,
        feedbackAcerto: "🎉 573 = 500 + 70 + 3.",
        feedbackErro: "C=5 (500), D=7 (70), U=3. Soma: 500 + 70 + 3.",
      },
      {
        pergunta: "Prova final 2/3 — 'duzentos e dezenove' é:",
        opcoes: ["219", "290", "209"],
        correta: 0,
        feedbackAcerto: "🎉 200 + 19 (dezenove) = 219.",
        feedbackErro: "'dezenove' = 19. 200 + 19 = 219.",
      },
      {
        pergunta: "Prova final 3/3 — Ordem crescente de 480, 408, 840:",
        opcoes: [
          "408 < 480 < 840",
          "480 < 408 < 840",
          "840 < 480 < 408",
        ],
        correta: 0,
        feedbackAcerto:
          "🏆 GUARDIÃO(Ã) DA CIDADE DOS NÚMEROS confirmado(a)! 408 < 480 < 840. Unidade 2 destrancada!",
        feedbackErro:
          "840 tem C=8 (maior). Entre 408 e 480, D=0 < D=8. Fica 408 < 480 < 840.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏆 Diploma de Guardião(ã) da Cidade",
    materiais: [
      "Uma folha de papel",
      "Lápis colorido",
      "Adulto para assinar",
    ],
    passos: [
      "Desenhe um diploma escrito: 'Eu, {NOME}, sou GUARDIÃO(Ã) DA CIDADE DOS NÚMEROS.'",
      "Escolha 3 números favoritos entre 100 e 999 e decore o diploma com eles.",
      "Ao lado de cada número, escreva: (a) decomposição e (b) como se lê.",
      "Peça a um adulto pra ASSINAR seu diploma.",
      "Pendure num lugar visível!",
    ],
    registro: "📸 Foto do diploma pronto e assinado.",
  },

  recompensa: {
    xp: 300,
    moedas: 150,
    medalha: "Guardião(ã) da Cidade dos Números",
  },
};

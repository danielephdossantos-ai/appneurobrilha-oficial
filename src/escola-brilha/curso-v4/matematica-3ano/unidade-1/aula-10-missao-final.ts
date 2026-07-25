import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as coruja } from "@/assets/neuro-treino/objetos/coruja.png.asset.json";

/**
 * Aula 10 — "Missão Final: Guardião(ã) da Cidade dos Números"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Encerramento narrativo com 5 desafios em sequência, um por habilidade
 * da unidade. Conquista: 🏆 Guardião(ã) da Cidade dos Números.
 * Desbloqueia: Unidade 2 — "Somar e Tirar com Reagrupamento".
 * BNCC: EF03MA01, EF03MA02, EF03MA03.
 */
export const aula10_missaoFinal: AulaV4 = {
  slug: "10-missao-final-cidade",
  titulo: "Missão Final da Cidade",
  iconeTrilha: "🏆",
  bncc: ["EF03MA01", "EF03MA02", "EF03MA03"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "A Cidade vai receber o Prefeito Estadual!",
    historia:
      "A Cidade dos Números está em festa: o Prefeito Estadual vai visitar hoje! A Prefeita Coruja escolheu VOCÊ, {NOME}, para provar que a Cidade tem um Guardião(ã) de verdade. São 5 desafios: contar até 1.000, decompor, ler, comparar e sequência. Passa em todos e leva a MEDALHA 🏆!",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Desafio 1/5 — CONTAR. Conte estas maçãs:",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 30,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs?",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Você lembra dos 5 desafios que estão vindo?",
    pista: "Contar · Valor Posicional · Ler · Comparar · Sequência.",
    revelacao:
      "Isso! No fim: 🏆 medalha de Guardião(ã), XP em dobro e Unidade 2 destrancada. Vamos lá?",
  },

  momento04_explicacao: {
    titulo: "Como funciona a missão",
    etapas: [
      { texto: "5 desafios em sequência, um por habilidade.", exemplo: "Um erro só não te derruba." },
      { texto: "Se errar, Brilha explica; você tenta de novo.", exemplo: "O importante é ir até o fim." },
      { texto: "Prêmio: 🏆 Guardião(ã) da Cidade + Unidade 2 destrancada.", exemplo: "Unidade 2: Somar e Tirar com Reagrupamento." },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha treina um mini de cada desafio:",
    passos: [
      "1) Contar: 3 prédios + 2 caixotes = 320.",
      "2) Valor: em 456, o 5 vale 50.",
      "3) Ler: 456 = 'quatrocentos e cinquenta e seis'.",
      "4) Comparar: 456 > 445 (D: 5 > 4).",
      "5) Sequência: 456, 466, 476 (pulo 10).",
    ],
    resposta: "Pronto pra missão! 🏆",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Desafio 2/5 — VALOR POSICIONAL. Quanto vale o 3 em 738?",
    dica: "Da direita: 8 (U), 3 (D), 7 (C).",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×7" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×3" },
        { imagemUrl: maca, quantidade: 8, rotulo: "🍎" },
      ],
      pergunta: "Em 738, o 3 vale:",
      opcoes: ["3", "30", "300"],
      correta: 1,
      feedbackAcerto: "🎉 30! O 3 está na dezena.",
      feedbackErro: "3 é dezena → 30. Da direita: U, D, C.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Desafio 3/5 — LER. Como se escreve 'novecentos e quatro'?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢×9" },
        { imagemUrl: banana, quantidade: 4, rotulo: "🍌" },
      ],
      pergunta: "novecentos e quatro =",
      opcoes: ["94", "904", "940"],
      correta: 1,
      feedbackAcerto: "🎉 904. Dezena = 0.",
      feedbackErro: "900 + 4 = 904. Dezena é 0 (pula ao ler).",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Desafio 4/5 — COMPARAR. O Prefeito Estadual perguntou qual barraca vendeu MAIS.",
    problema: "Maçã 682 · Banana 628 · Pêra 686. Quem venceu?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Maior:",
      opcoes: [
        { nome: "Maçã (682)", imagemUrl: maca },
        { nome: "Banana (628)", imagemUrl: banana },
        { nome: "Pêra (686)", imagemUrl: coruja },
      ],
      respostaCerta: "Pêra (686)",
      feedbackAcerto:
        "🎯 Isso! C todos = 6. D: 628 tem 2 (fora). Entre 682 e 686, U: 2 < 6 → 686 vence.",
      feedbackErro:
        "C empata (6). D: 628 tem 2 (menor). Entre 682 e 686, U decide: 6 > 2 → 686.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Falta o último desafio!",
      "SEQUÊNCIA: descubra o pulo e ache o próximo.",
      "🎯 Se acertar, você vira GUARDIÃO(Ã)!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "550" },
        { imagemUrl: maca, quantidade: 100, rotulo: "560" },
        { imagemUrl: maca, quantidade: 100, rotulo: "570" },
      ],
      pergunta: "Desafio 5/5: 550, 560, 570, ... próximo?",
      opcoes: ["571", "580", "600"],
      correta: 1,
      feedbackAcerto:
        "🏆 🎉 Pulo 10 → 580. VOCÊ É GUARDIÃO(Ã) DA CIDADE DOS NÚMEROS!",
      feedbackErro:
        "Pulo = 560 − 550 = 10. 570 + 10 = 580.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Prova final 1/3 — Decomponha 573.",
        opcoes: ["500 + 70 + 3", "5 + 7 + 3", "50 + 70 + 3"],
        correta: 0,
        feedbackAcerto: "🎉 573 = 500 + 70 + 3.",
        feedbackErro: "C=5 (500), D=7 (70), U=3. 500+70+3=573.",
      },
      {
        pergunta: "Prova final 2/3 — 'duzentos e dezenove' é:",
        opcoes: ["219", "290", "209"],
        correta: 0,
        feedbackAcerto: "🎉 200 + 19 (dezenove) = 219.",
        feedbackErro: "'dezenove' = 19. 200 + 19 = 219.",
      },
      {
        pergunta: "Prova final 3/3 — Coloque em ordem crescente: 480, 408, 840.",
        opcoes: [
          "408 < 480 < 840",
          "480 < 408 < 840",
          "840 < 480 < 408",
        ],
        correta: 0,
        feedbackAcerto:
          "🏆 GUARDIÃO(Ã) DA CIDADE DOS NÚMEROS confirmado(a)! 408 < 480 < 840. Unidade 2 destrancada!",
        feedbackErro:
          "840 tem C=8 (maior). Entre 408 e 480: D=0 < D=8. Fica 408 < 480 < 840.",
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
      "Escreva ao lado de cada um: (a) decomposição, (b) como se lê.",
      "Peça pra um adulto ASSINAR seu diploma.",
      "Pendure num lugar visível!",
    ],
    registro: "📸 Foto do diploma pronto e assinado.",
  },
};

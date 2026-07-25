import type { AulaV4 } from "../../types";
import { url as maca } from "@/assets/neuro-treino/objetos/maca.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";

/**
 * Aula 9 — "Revisão da Unidade 1"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Circuito de 5 estações reaproveitando o que já foi aprendido:
 *   1) contar até 1.000 · 2) valor posicional · 3) ler número ·
 *   4) comparar/ordenar · 5) sequência.
 * BNCC: EF03MA01, EF03MA02, EF03MA03.
 */
export const aula09_revisaoUnidade: AulaV4 = {
  slug: "09-revisao-unidade",
  titulo: "Circuito da Cidade",
  iconeTrilha: "🔄",
  bncc: ["EF03MA01", "EF03MA02", "EF03MA03"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "Circuito das 5 Estações!",
    historia:
      "A Cidade dos Números vai fechar por hoje e a Prefeita quer conferir se aprendemos TUDO desta primeira unidade. Preparou um circuito com 5 estações: contar, valor posicional, ler número, comparar/ordenar e sequência. Quem passa por todas ganha XP em dobro!",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao: "Estação 1 — CONTAR até 1.000. Toque em cada maçã (25 no total):",
    cenas: [],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 25,
      itemPlural: "maçãs",
      pergunta: "Quantas maçãs?",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Você lembra de TUDO que aprendeu nesta unidade?",
    pista:
      "Aulas 1-3: contar até 1.000 e centena. Aula 4: ler. Aulas 5-6: comparar e ordenar. Aula 7: arredondar. Aula 8: sequência.",
    revelacao:
      "Isso! Vamos passar por todas as estações agora e provar que você virou explorador(a) da Cidade!",
  },

  momento04_explicacao: {
    titulo: "Lembretes das 5 estações",
    etapas: [
      { texto: "1) CONTAR até 1.000: agrupa de 100 em 100 e 10 em 10.", exemplo: "200 + 30 + 4 = 234." },
      { texto: "2) VALOR POSICIONAL: cada dígito vale conforme a casa (CDU).", exemplo: "Em 528, o 5 vale 500." },
      { texto: "3) LER: centena + 'e' + dezena + 'e' + unidade. 100 = cem.", exemplo: "342 = trezentos e quarenta e dois." },
      { texto: "4) COMPARAR: começa pela centena. Boca do sinal pro maior.", exemplo: "428 < 512 (4 < 5)." },
      { texto: "5) SEQUÊNCIA: pulo = próximo − anterior. Some pra prever.", exemplo: "10, 20, 30 → pulo 10 → próximo 40." },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve um mini de cada estação:",
    passos: [
      "1) 3 prédios + 4 caixotes + 2 soltas = 342.",
      "2) Em 342, o 4 vale 40.",
      "3) 342 = trezentos e quarenta e dois.",
      "4) 342 > 234 (compara centena).",
      "5) 342, 352, 362... pulo 10.",
    ],
    resposta: "Circuito modelado!",
    visualUrl: brilha,
  },

  momento06_praticaGuiada: {
    enunciado: "Estação 2 — VALOR POSICIONAL. Quanto vale o 6 em 462?",
    dica: "6 está na casa da dezena.",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "🏢×4" },
        { imagemUrl: maca, quantidade: 10, rotulo: "📦×6" },
        { imagemUrl: maca, quantidade: 2, rotulo: "🍎" },
      ],
      pergunta: "O 6 em 462 vale:",
      opcoes: ["6", "60", "600"],
      correta: 1,
      feedbackAcerto: "🎉 60! O 6 está na dezena.",
      feedbackErro: "Da direita: 2 (U), 6 (D), 4 (C). O 6 é dezena → 60.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Estação 3 — LER. Que número é 'seiscentos e sete'?",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "🏢×6" },
        { imagemUrl: banana, quantidade: 7, rotulo: "🍌" },
      ],
      pergunta: "seiscentos e sete =",
      opcoes: ["67", "607", "670"],
      correta: 1,
      feedbackAcerto: "🎉 607. Dezena é 0 (não se fala).",
      feedbackErro: "600 + 7 = 607. Dezena = 0.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Estação 4 — COMPARAR/ORDENAR. Três barracas: 289, 298, 209.",
    problema: "Coloque em ORDEM CRESCENTE:",
    interacao: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: maca, quantidade: 100, rotulo: "289" },
        { imagemUrl: maca, quantidade: 100, rotulo: "298" },
        { imagemUrl: maca, quantidade: 100, rotulo: "209" },
      ],
      pergunta: "Crescente:",
      opcoes: [
        "209 < 289 < 298",
        "289 < 298 < 209",
        "298 < 289 < 209",
      ],
      correta: 0,
      feedbackAcerto: "🎉 209 (D=0), 289 (D=8), 298 (D=9). Ordem certa!",
      feedbackErro: "Todos têm C=2. Compara D: 0 < 8 < 9. Fica 209 < 289 < 298.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Circuito quase pronto! Falta a estação SEQUÊNCIA.",
      "Pulo = diferença entre 2 números consecutivos.",
      "🎯 Última estação!",
    ],
    miniDesafio: {
      tipo: "contarQuiz",
      grupos: [
        { imagemUrl: banana, quantidade: 100, rotulo: "310" },
        { imagemUrl: banana, quantidade: 100, rotulo: "320" },
        { imagemUrl: banana, quantidade: 100, rotulo: "330" },
      ],
      pergunta: "Sequência 310, 320, 330, ... próximo?",
      opcoes: ["331", "340", "400"],
      correta: 1,
      feedbackAcerto: "🎉 Pulo 10 → 340.",
      feedbackErro: "320 − 310 = 10. 330 + 10 = 340.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "P1/5 (CONTAR) — Quantas maçãs em 2 prédios + 4 caixotes + 3 soltas?",
        opcoes: ["243", "234", "324"],
        correta: 0,
        feedbackAcerto: "🎉 200 + 40 + 3 = 243.",
        feedbackErro: "C=2 (200), D=4 (40), U=3 (3). 243.",
      },
      {
        pergunta: "P2/5 (VALOR POSICIONAL) — Em 795, o 9 vale:",
        opcoes: ["9", "90", "900"],
        correta: 1,
        feedbackAcerto: "🎉 90. O 9 mora na dezena.",
        feedbackErro: "Da direita: 5 (U), 9 (D), 7 (C). 9 é dezena → 90.",
      },
      {
        pergunta: "P3/5 (LER) — 'quatrocentos e onze' é:",
        opcoes: ["411", "401", "441"],
        correta: 0,
        feedbackAcerto: "🎉 400 + 11 = 411. 'onze' já é 11.",
        feedbackErro: "400 + 11 (onze) = 411.",
      },
      {
        pergunta: "P4/5 (COMPARAR) — 526 __ 562. Sinal?",
        opcoes: ["526 > 562", "526 < 562", "526 = 562"],
        correta: 1,
        feedbackAcerto: "🎉 C empata. D: 2 < 6 → 526 < 562.",
        feedbackErro: "C=5=5 empate. D: 2 < 6. 526 < 562.",
      },
      {
        pergunta: "P5/5 (SEQUÊNCIA) — 190, 200, 210, ?, ?",
        opcoes: ["211, 212", "220, 230", "300, 400"],
        correta: 1,
        feedbackAcerto: "🎉 Pulo 10 → 220, 230. Circuito completo! 🏆",
        feedbackErro: "Pulo é 10 (200−190). 210+10=220, 220+10=230.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Circuito da Cidade em Casa",
    materiais: ["Feijões ou tampinhas (uns 200)", "Papel", "Caneta"],
    passos: [
      "1) CONTAR: um adulto joga um punhado; você agrupa em 100 e 10.",
      "2) VALOR POSICIONAL: escreva um número (ex.: 258) e diga o valor de cada dígito.",
      "3) LER: adulto escreve, você lê em voz alta.",
      "4) COMPARAR: adulto escreve 2 números; você põe >, <, =.",
      "5) SEQUÊNCIA: você inventa um pulo e escreve 5 números.",
    ],
    registro: "📸 Foto do papel com as 5 estações marcadas.",
  },
  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};

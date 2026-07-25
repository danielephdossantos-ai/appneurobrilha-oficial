import type { AulaV4 } from "../../types";

/**
 * Aula 3 · U1 — "A Unidade de Milhar (UM)"
 * BNCC: EF04MA01, EF04MA02. Base: CPA · Skemp.
 */
export const aula03_aUnidadeDeMilhar: AulaV4 = {
  slug: "u1-03-a-unidade-de-milhar",
  titulo: "A Unidade de Milhar",
  iconeTrilha: "🏯",
  bncc: ["EF04MA01", "EF04MA02"],
  duracaoMin: 18,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Nasce uma casa nova",
    historia:
      "{NOME}, quando a Cidade passou de 999 habitantes, precisou de uma casa NOVA à esquerda. Essa casa se chama Unidade de Milhar (UM). Ela vale 1.000. É o coração do Reino.",
  },

  momento02_exploracao: {
    instrucao: "Do 999 para o 1.000 nasce uma casa nova.",
    cenas: [
      { tipo: "texto", texto: "999 · 1.000 · 1.001 · 1.002 …", destaque: true },
      { tipo: "texto", texto: "9 unidades + 1 = 10 unidades → vira 1 dezena." },
      { tipo: "texto", texto: "9 dezenas + 1 dezena = 10 dezenas → vira 1 centena." },
      { tipo: "texto", texto: "9 centenas + 1 centena = 10 centenas → vira 1 MILHAR.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 1.000 é DIFERENTE de 100 se são só zeros?",
    pista: "Conte os zeros. Cada zero a mais é uma casa nova.",
    revelacao:
      "100 = 1 na centena (2 zeros). 1.000 = 1 no MILHAR (3 zeros). É 10 vezes maior.",
  },

  momento04_explicacao: {
    titulo: "Milhares no cotidiano",
    etapas: [
      {
        texto: "Um milhar (1.000) = 10 centenas = 100 dezenas = 1.000 unidades.",
        exemploReal: {
          contexto: "O escriba conferiu: 10 sacos de 100 moedas cada = 1 milhar de moedas.",
          casasValor: { numero: 1000, extenso: "mil", mostrarDecomposicao: true },
          destaque: "1.000 é o começo dos números de 4 algarismos.",
        },
      },
      {
        texto: "Números como 2.000, 3.000, 4.000 são milhares 'redondos': só UM, o resto é zero.",
        exemploReal: {
          contexto: "5 milhares de moedas = 5.000:",
          casasValor: { numero: 5000, extenso: "cinco mil", mostrarDecomposicao: true },
          destaque: "5 no UM, 0 em todo o resto.",
        },
      },
      {
        texto: "Um milhar 'quebrado' tem outros dígitos além do UM.",
        exemploReal: {
          contexto: "Ex.: 3.240 famílias.",
          casasValor: { numero: 3240, extenso: "três mil, duzentos e quarenta", mostrarDecomposicao: true },
          destaque: "3 milhares + 2 centenas + 4 dezenas + 0 unidades.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Quantos milhares tem 8.457?",
    resposta: "8 milhares (8.000).",
    casasValor: { numero: 8457, mostrarDecomposicao: true, extenso: "oito mil, quatrocentos e cinquenta e sete" },
    passos: [
      "Ache o primeiro dígito da esquerda: 8.",
      "Ele mora na casa UM → vale 8.000.",
      "Portanto, 8 milhares.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Quantos milhares tem 6.083?",
    dica: "O primeiro dígito da esquerda é o milhar.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Quantos milhares?",
      opcoes: [{ nome: "60" }, { nome: "6" }, { nome: "600" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 O 6 está no UM → 6 milhares = 6.000.",
      feedbackErro: "Olhe o dígito mais à esquerda. É o 6, na casa UM → 6 milhares.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Qual é o número com 4 milhares, 2 centenas, 0 dezenas e 7 unidades?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número:",
      opcoes: [{ nome: "4.207" }, { nome: "4.270" }, { nome: "4.027" }],
      respostaCerta: "4.207",
      feedbackAcerto: "🎯 4 (UM) · 2 (C) · 0 (D) · 7 (U) → 4.207.",
      feedbackErro: "Encaixe casa a casa: 4|2|0|7 → 4.207.",
    },
  },

  momento08_aplicacao: {
    contexto: "O carpinteiro do Reino tem 3.500 pregos. Ele quer saber quantos milhares completos tem.",
    problema: "Quantos milhares COMPLETOS há em 3.500?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "3.5" }, { nome: "35" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 3 milhares completos (3.000). Ainda faltam 500 para o próximo milhar.",
      feedbackErro: "O dígito do UM é o 3. Milhares completos = 3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "1 milhar = 1.000 = 10 centenas.",
      "A casa UM fica à esquerda da centena.",
      "Milhar 'redondo' termina em 000.",
      "O dígito do milhar é sempre o mais à esquerda em números de 4 algarismos.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quantos zeros tem o número mil?",
        opcoes: ["2", "3", "4"],
        correta: 1,
        feedbackAcerto: "🎉 Mil = 1.000 → 3 zeros.",
        feedbackErro: "Conte: 1 - 0 - 0 - 0. Três zeros.",
      },
      {
        pergunta: "Quantos milhares tem 7.312?",
        opcoes: ["7", "3", "12"],
        correta: 0,
        feedbackAcerto: "🎉 O 7 mora no UM → 7 milhares.",
        feedbackErro: "Primeiro dígito da esquerda: 7. Casa UM → 7 milhares.",
      },
      {
        pergunta: "Qual é 'seis mil e cinquenta'?",
        opcoes: ["6.050", "6.500", "6.005"],
        correta: 0,
        feedbackAcerto: "🎉 6 (UM) · 0 (C) · 5 (D) · 0 (U) = 6.050.",
        feedbackErro: "Cinquenta = 5 dezenas. Sem centenas: 0 segura. 6.050.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos Milhares",
    materiais: ["Caderno", "Uma lista de preços ou embalagens"],
    passos: [
      "Ache 3 preços/valores acima de 1.000.",
      "Escreva quantos milhares completos cada um tem.",
      "Escreva por extenso um deles.",
    ],
    registro: "📸 Foto do caderno.",
  },

  recompensa: { xp: 110, moedas: 55 },
};

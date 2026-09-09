import type { AulaV4 } from "../../types";

/**
 * Aula 10 · U1 — "Missão Final: Guardião do Milhar"
 * BNCC: EF04MA01, EF04MA02, EF04MA03.
 */
export const aula10_missaoFinal: AulaV4 = {
  slug: "u1-10-missao-final-guardiao-do-milhar",
  titulo: "Missão Final: Guardião do Milhar",
  iconeTrilha: "🏆",
  bncc: ["EF04MA01", "EF04MA02", "EF04MA03"],
  duracaoMin: 25,
  metodologias: ["cpa", "skemp", "vergnaud", "kamii", "rme"],

  momento01_motivacao: {
    titulo: "Prova do Guardião",
    historia:
      "{NOME}, é hora da prova final do Reino: 5 desafios de valor posicional, leitura, comparação, ordenação e arredondamento. Se passar, vira Guardião(ã) do Milhar.",
  },

  momento02_exploracao: {
    instrucao: "Aquecimento rápido.",
    cenas: [
      { tipo: "texto", texto: "Lembre: UM · C · D · U. Zero segura casa vazia.", destaque: true },
      { tipo: "texto", texto: "Comparar: casa por casa, da esquerda pra direita." },
      { tipo: "texto", texto: "Arredondar: olhe a próxima casa. ≥ 5 sobe." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "O que muda entre 5.000 e 4.999?",
    pista: "É só uma unidade, mas TROCA de milhar.",
    revelacao:
      "5.000 − 1 = 4.999. Todos os zeros viram 9 quando você recua 1. É a mágica das casas.",
  },

  momento04_explicacao: {
    titulo: "Estratégia da prova",
    etapas: [
      {
        texto: "Leia cada pergunta com calma. Localize a casa envolvida.",
        exemploReal: {
          contexto: "Ex.: 'quanto vale o 8 em 4.823?'",
          casasValor: { numero: 4823, extenso: "quatro mil, oitocentos e vinte e três", mostrarDecomposicao: true },
          destaque: "8 está na centena → 800.",
        },
      },
      {
        texto: "Nos arredondamentos, pense: qual casa é o alvo?",
        exemploReal: {
          contexto: "Arredondar 3.560 à centena.",
          casasValor: { numero: 3600, extenso: "três mil e seiscentos", mostrarDecomposicao: true },
          destaque: "Alvo: centena=5. Dezena=6 ≥ 5 → sobe: 5→6. Zero o resto: 3.600.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Some passo a passo: 3.420 + 2.150.",
    resposta: "5.570.",
    casasValor: { numero: 5570, mostrarDecomposicao: true, extenso: "cinco mil, quinhentos e setenta" },
    passos: [
      "U: 0 + 0 = 0.",
      "D: 2 + 5 = 7.",
      "C: 4 + 1 = 5.",
      "UM: 3 + 2 = 5.",
      "Total: 5.570.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Some 4.201 + 3.150.",
    dica: "Comece pela unidade.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [4201, 3150],
      resultado: 7351,
      modo: "explicacao",
      metodologia: "cpa",
      passos: [
        { coluna: "U", fala: "1 + 0 = 1.", digito: 1 },
        { coluna: "D", fala: "0 + 5 = 5.", digito: 5 },
        { coluna: "C", fala: "2 + 1 = 3.", digito: 3 },
        { coluna: "UM", fala: "4 + 3 = 7.", digito: 7 },
      ],
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Some 5.360 + 2.410.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "soma",
      operandos: [5360, 2410],
      resultado: 7770,
      modo: "pratica",
      perguntaFinal: "Total?",
      opcoes: [7770, 7670, 7780],
      feedbackAcerto: "🎯 0+0=0, 6+1=7, 3+4=7, 5+2=7 → 7.770.",
      feedbackErro: "Coluna a coluna: 0+0=0, 6+1=7, 3+4=7, 5+2=7 → 7.770.",
      passos: [
        { coluna: "U", fala: "0 + 0 = 0.", digito: 0 },
        { coluna: "D", fala: "6 + 1 = 7.", digito: 7 },
        { coluna: "C", fala: "3 + 4 = 7.", digito: 7 },
        { coluna: "UM", fala: "5 + 2 = 7.", digito: 7 },
      ],
    },
  },

  momento08_aplicacao: {
    contexto: "O escriba fecha o Censo do ano. Total = 6.380 + 1.550.",
    problema: "Qual é o total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7.930" }, { nome: "7.830" }, { nome: "8.030" }],
      respostaCerta: "7.930",
      feedbackAcerto: "🎯 0+0=0, 8+5=13 (vai 1), 3+5+1=9, 6+1=7 → 7.930.",
      feedbackErro: "Dezena: 8+5=13. Escreve 3, vai 1. Centena: 3+5+1=9. Total 7.930.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Números até 9.999 usam 4 casas: UM, C, D, U.",
      "Comparar/ordenar por casa, esquerda pra direita.",
      "Arredondar: regra do 5 na casa à direita da alvo.",
      "Somar sempre pelas unidades primeiro.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Quanto vale o 6 em 4.632?",
        opcoes: ["6", "60", "600"],
        correta: 2,
        feedbackAcerto: "🎉 Centena → 600.",
        feedbackErro: "6 está na centena. 6 × 100 = 600.",
      },
      {
        pergunta: "Ordem crescente: 2.500, 2.050, 2.550.",
        opcoes: [
          "2.050, 2.500, 2.550",
          "2.550, 2.500, 2.050",
          "2.500, 2.050, 2.550",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Menor → maior.",
        feedbackErro: "C=0<5=5. Entre os dois de C=5: D=0<5 → 2.500 antes de 2.550.",
      },
      {
        pergunta: "Arredonde 8.470 ao milhar:",
        opcoes: ["8.000", "9.000", "8.500"],
        correta: 0,
        feedbackAcerto: "🎉 Centena=4 < 5 → mantém 8.000.",
        feedbackErro: "Centena=4. Menor que 5. Milhar mantém. 8.000.",
      },
      {
        pergunta: "Some 3.240 + 4.130:",
        opcoes: ["7.370", "7.470", "7.270"],
        correta: 0,
        feedbackAcerto: "🎉 0+0=0, 4+3=7, 2+1=3, 3+4=7 → 7.370.",
        feedbackErro: "Coluna por coluna: 7.370.",
      },
      {
        pergunta: "Próximo da sequência: 6.500, 6.600, 6.700, ___",
        opcoes: ["6.800", "6.750", "7.000"],
        correta: 0,
        feedbackAcerto: "🎉 Salto=100 → 6.800.",
        feedbackErro: "Diferença entre vizinhos: 100. Próximo: 6.800.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma do Guardião",
    materiais: ["Papel", "Caneta", "Papel/celular pra registrar"],
    passos: [
      "Reúna alguém da família.",
      "Peça pra escrever 3 números de 4 algarismos com pelo menos um zero no meio.",
      "Leia cada um em voz alta corretamente.",
      "Compare os três e coloque em ordem crescente.",
      "Arredonde cada um ao milhar.",
    ],
    registro: "📸 Foto do papel com números, ordem e arredondamentos.",
  },

  recompensa: {
    xp: 200,
    moedas: 100,
    medalha: "Guardião(ã) do Milhar",
  },
};

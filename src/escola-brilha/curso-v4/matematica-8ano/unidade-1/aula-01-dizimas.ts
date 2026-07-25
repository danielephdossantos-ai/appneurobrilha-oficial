import type { AulaV4 } from "../../types";

export const aula01_dizimas: AulaV4 = {
  slug: "u1-01-dizimas",
  titulo: "Dízimas periódicas e fração geratriz",
  iconeTrilha: "🔧",
  bncc: ["EF08MA01"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Um número que não termina",
    historia:
      "{NOME}, hoje a Oficina abre. Primeira máquina que Brilha coloca pra funcionar: transformar dízimas — números que NUNCA acabam, como 0,333… — em fração exata.",
  },

  momento02_exploracao: {
    instrucao: "Observe o que acontece ao dividir 1 ÷ 3.",
    cenas: [
      { tipo: "texto", texto: "1 ÷ 3 = 0,3333333… (o 3 se repete pra sempre).", destaque: true },
      {
        tipo: "tabela",
        titulo: "Frações que geram dízima",
        cabecalhos: ["Fração", "Decimal", "Período"],
        linhas: [
          { rotulo: "1/3", valores: ["1/3", "0,333…", "3"] },
          { rotulo: "2/3", valores: ["2/3", "0,666…", "6"] },
          { rotulo: "1/9", valores: ["1/9", "0,111…", "1"] },
          { rotulo: "1/11", valores: ["1/11", "0,0909…", "09"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como voltar de 0,333… para fração?",
    pista: "Chame o número de x. Multiplique por uma potência de 10 igual ao tamanho do período.",
    revelacao: "x = 0,333… → 10x = 3,333… → 10x − x = 3 → 9x = 3 → x = 3/9 = 1/3.",
  },

  momento04_explicacao: {
    titulo: "Do decimal para a fração — dízima simples",
    etapas: [
      {
        texto: "Passo a passo da dízima simples (período começa logo após a vírgula).",
        exemploReal: {
          contexto: "Transformar 0,777… em fração.",
          visualMat: {
            tipo: "dizimaGeratriz",
            dizima: "0,777…",
            periodo: "7",
            resultado: "7/9",
            legenda: "Dízima simples — 1 dígito no período",
          },
          destaque: "0,777… = 7/9.",
        },
      },
      {
        texto: "Regra do período: numerador = período, denominador = tantos 9 quanto os dígitos do período.",
        exemploReal: {
          contexto: "0,181818… (período 18, dois dígitos).",
          visualMat: {
            tipo: "dizimaGeratriz",
            dizima: "0,181818…",
            periodo: "18",
            resultado: "2/11",
            resultadoBruto: "18/99",
            legenda: "Dízima simples — 2 dígitos no período",
          },
          destaque: "0,181818… = 18/99 = 2/11.",
        },
      },
      {
        texto: "Dízima composta: parte NÃO periódica (cinza) + parte periódica (vermelho).",
        exemploReal: {
          contexto: "0,04777… tem '04' fixo e o '7' repetindo.",
          visualMat: {
            tipo: "dizimaGeratriz",
            dizima: "0,04777…",
            periodo: "7",
            parteNaoPeriodica: "04",
            resultado: "43/900",
            legenda: "Dízima composta",
          },
          destaque: "0,04777… = 43/900.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva 0,444… como fração.",
    resposta: "4/9",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["x = 0,444…", "10x = 4,444…"] },
        { rotulo: "2", valores: ["10x − x", "9x = 4"] },
        { rotulo: "3", valores: ["isolar x", "x = 4/9"] },
      ],
    },
    passos: [
      "Chame x = 0,444….",
      "Multiplique por 10: 10x = 4,444….",
      "Subtraia: 9x = 4.",
      "x = 4/9.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual a fração geratriz de 0,555…?",
    dica: "Período = 5, um dígito → denominador 9.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5/9" }, { nome: "5/10" }, { nome: "1/2" }],
      respostaCerta: "5/9",
      feedbackAcerto: "🎯 Período 5 sobre 9.",
      feedbackErro: "Um dígito de período → um 9 no denominador.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "0,232323… vale:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "23/99" }, { nome: "23/100" }, { nome: "23/9" }],
      respostaCerta: "23/99",
      feedbackAcerto: "🎯 Período 23 sobre 99.",
      feedbackErro: "Dois dígitos → dois 9 no denominador.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma calculadora simples mostra 0,666… ao dividir 2 por 3.",
    problema: "Qual fração exata a calculadora está aproximando?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/3" }, { nome: "6/9" }, { nome: "3/5" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 2 ÷ 3 = 0,666… → 2/3.",
      feedbackErro: "0,666… é o período 6 → 6/9 = 2/3.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Dízima simples: período sobre tantos 9 quanto os dígitos do período.",
      "Dízima composta: separe a parte não periódica.",
      "Toda dízima periódica é um número racional (vem de uma fração).",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,111… é igual a:", opcoes: ["1/9", "1/10", "1/11"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Período 1 sobre 9." },
      { pergunta: "0,272727… é igual a:", opcoes: ["27/99", "27/100", "3/10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Dois dígitos → 99." },
      { pergunta: "1/3 em decimal:", opcoes: ["0,333…", "0,3", "0,033…"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1 ÷ 3." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça-dízima em casa",
    materiais: ["Calculadora simples ou celular"],
    passos: [
      "Divida 1 por cada número de 1 a 12.",
      "Anote quais deram dízima e qual é o período.",
      "Escolha uma dízima e transforme em fração.",
    ],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 160, moedas: 80 },
};

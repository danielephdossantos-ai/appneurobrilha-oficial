import type { AulaV4 } from "../../types";

/** Aula 05 · U2 — Dízimas periódicas e fração geratriz (missão da unidade). */
export const aula05_dizimas: AulaV4 = {
  slug: "u2-05-dizimas",
  titulo: "Missão — Dízimas e Fração Geratriz",
  iconeTrilha: "🔁",
  bncc: ["EF07MA06"],
  duracaoMin: 32,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O número que nunca acaba",
    historia:
      "{NOME}, 1 ÷ 3 = 0,333333… e não para nunca. Mas esse número infinito veio de uma fração simples. Nesta missão você aprende a fazer o caminho de volta: transformar a dízima em fração.",
  },

  momento02_exploracao: {
    instrucao: "Nem toda divisão termina. Quando o resto se repete, nasce uma dízima.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Tipos de decimal",
        cabecalhos: ["Fração", "Decimal", "Tipo"],
        linhas: [
          { rotulo: "1", valores: ["1/4", "0,25", "exato"] },
          { rotulo: "2", valores: ["1/3", "0,333…", "dízima simples"] },
          { rotulo: "3", valores: ["7/33", "0,2121…", "dízima simples (período 21)"] },
          { rotulo: "4", valores: ["7/12", "0,58333…", "dízima composta"] },
        ],
      },
      {
        tipo: "dizimaGeratriz",
        dizima: "0,333...",
        periodo: "3",
        resultado: "1/3",
        resultadoBruto: "3/9",
        legenda: "Da dízima de volta para a fração",
      },
      { tipo: "texto", texto: "🔑 PERÍODO é o bloco de algarismos que se repete para sempre." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como achar a fração que gera 0,2121…?",
    pista: "Multiplique por 100 para deslocar exatamente um período e subtraia o número original.",
    revelacao: "A subtração elimina a parte infinita e sobra uma equação simples: 99x = 21, logo x = 21/99 = 7/33.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,2121… → fração",
      passos: [
        { expr: "x = 0,2121…", explica: "Chamo a dízima de x.", status: "neutro", professor: "Dar um nome ao número é o truque: assim posso operar com ele como se fosse uma incógnita." },
        { expr: "100x = 21,2121…", explica: "Período tem 2 dígitos → multiplico por 100.", status: "ok" },
        { expr: "100x − x = 21,2121… − 0,2121…", explica: "Subtraio.", status: "ok", professor: "As caudas infinitas são idênticas, então se cancelam por completo. Sobra um número inteiro." },
        { expr: "99x = 21", explica: "A parte infinita sumiu.", status: "ok" },
        { expr: "x = 21/99", explica: "Isolo o x.", status: "ok" },
        { expr: "= 7/33", explica: "Simplifico por 3.", status: "ok", professor: "A resposta DEVE ficar irredutível: MDC(21, 99) = 3, então 21/99 = 7/33." },
      ],
      fatorada: "0,2121… = 7/33",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Regra prática das geratrizes",
    etapas: [
      {
        texto: "DÍZIMA SIMPLES (período começa logo após a vírgula): numerador = período; denominador = tantos noves quantos forem os dígitos do período.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "0,777… e 0,459459…",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Regra dos noves",
            passos: [
              { expr: "0,777… → período 7 (1 dígito)", explica: "Um nove.", status: "neutro" },
              { expr: "= 7/9", explica: "Já irredutível.", status: "ok" },
              { expr: "0,459459… → período 459 (3 dígitos)", explica: "Três noves.", status: "ok" },
              { expr: "= 459/999 = 17/37", explica: "Simplifico por 27.", status: "ok", professor: "459 = 27·17 e 999 = 27·37. Sempre confira se dá para simplificar." },
            ],
            fatorada: "0,777… = 7/9",
          },
          destaque: "Um dígito no período → um 9; dois → 99; três → 999.",
        },
      },
      {
        texto: "DÍZIMA COMPOSTA (existe uma parte que não repete): use noves para o período e zeros para a parte que não repete.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "0,1666…",
          visualMat: {
            tipo: "dizimaGeratriz",
            dizima: "0,1666...",
            periodo: "6",
            parteNaoPeriodica: "1",
            resultado: "1/6",
            resultadoBruto: "15/90",
            legenda: "Dízima composta: 1 não repete, 6 repete",
          },
          destaque: "Numerador: (número todo) − (parte que não repete) = 16 − 1 = 15. Denominador: 90.",
        },
      },
      {
        texto: "Quando a fração gera decimal EXATO? Só quando, na forma irredutível, o denominador tiver apenas os fatores 2 e/ou 5.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Prever antes de dividir",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Exato ou dízima?",
            passos: [
              { expr: "3/8: 8 = 2·2·2", explica: "Só fator 2 → EXATO.", status: "ok", professor: "Nosso sistema é decimal (base 10 = 2·5). Se o denominador só tem 2 e 5, a divisão fecha." },
              { expr: "7/20: 20 = 2·2·5", explica: "Só 2 e 5 → EXATO.", status: "ok" },
              { expr: "5/6: 6 = 2·3", explica: "Apareceu o 3 → DÍZIMA.", status: "x" },
              { expr: "4/7: 7 é primo diferente de 2 e 5", explica: "DÍZIMA.", status: "x" },
            ],
            fatorada: "Denominador só com 2 e 5 → decimal exato",
          },
          destaque: "Simplifique ANTES de aplicar o teste.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 0,4545… como fração irredutível.",
    resposta: "5/11",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,4545… → fração",
      passos: [
        { expr: "Período = 45 (2 dígitos)", explica: "Dízima simples.", status: "neutro" },
        { expr: "= 45/99", explica: "Dois noves.", status: "ok" },
        { expr: "MDC(45, 99) = 9", explica: "Simplifico.", status: "ok", professor: "45 = 9·5 e 99 = 9·11. Sem essa simplificação a resposta ficaria incompleta." },
        { expr: "= 5/11", explica: "Irredutível.", status: "ok" },
      ],
      fatorada: "0,4545… = 5/11",
      legenda: "Brilha resolve",
    },
    passos: [
      "Período 45, com 2 dígitos.",
      "Numerador 45, denominador 99.",
      "MDC(45, 99) = 9.",
      "45/99 = 5/11.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 0,666… vira que fração?",
    dica: "Período de 1 dígito → denominador 9. Depois simplifique.",
    visualMat: {
      tipo: "dizimaGeratriz",
      dizima: "0,666...",
      periodo: "6",
      resultado: "2/3",
      resultadoBruto: "6/9",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/3" }, { nome: "6/9" }, { nome: "6/10" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 6/9 simplificado por 3 dá 2/3.",
      feedbackErro: "6/9 está no caminho certo, mas falta simplificar: 6/9 = 2/3. E 6/10 seria 0,6 exato, não a dízima.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 0,1212… vira que fração irredutível?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,1212…",
      passos: [
        { expr: "Período 12 → 12/99", explica: "Dois noves.", status: "neutro" },
        { expr: "MDC(12, 99) = 3", explica: "Simplifico.", status: "ok" },
      ],
      fatorada: "= 4/33",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4/33" }, { nome: "12/99" }, { nome: "12/100" }],
      respostaCerta: "4/33",
      feedbackAcerto: "🎯 12/99 dividido por 3 é 4/33.",
      feedbackErro: "12/99 é o resultado bruto; simplifique por 3 → 4/33. O 12/100 é 0,12 exato, não a dízima.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Três amigos vão dividir uma conta de R$ 100,00 em partes iguais. A calculadora mostra 33,333333…",
    problema: "Que fração exata cada um deve pagar, e por que a calculadora não fecha?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "100 ÷ 3",
      passos: [
        { expr: "100 ÷ 3 = 33,333…", explica: "Dízima periódica.", status: "neutro" },
        { expr: "Cada um paga 100/3 reais", explica: "Fração exata.", status: "ok", professor: "A fração 100/3 é o valor EXATO. O decimal 33,333… é apenas uma aproximação que nunca fecha." },
        { expr: "3 é fator diferente de 2 e 5", explica: "Por isso não é exato.", status: "ok" },
        { expr: "Na prática: 33,33 + 33,33 + 33,34 = 100,00", explica: "Arredondamento no dinheiro.", status: "ok", professor: "No mundo real arredondamos em centavos, e alguém paga um centavo a mais para fechar a conta." },
      ],
      fatorada: "Cada um deve 100/3 reais ≈ R$ 33,33",
      legenda: "Aplicação — dividir a conta",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "100/3 reais" }, { nome: "33/100 reais" }, { nome: "3/100 reais" }],
      respostaCerta: "100/3 reais",
      feedbackAcerto: "🎯 A fração 100/3 é o valor exato de cada parte.",
      feedbackErro: "Dividir 100 por 3 dá a fração 100/3. Escrever 33/100 inverteria completamente a conta.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Dízima simples: período sobre tantos noves quantos os dígitos do período.",
      "Dízima composta: noves para o período, zeros para a parte que não repete.",
      "Sempre simplificar o resultado.",
      "Decimal exato só quando o denominador irredutível tem apenas fatores 2 e 5.",
      "Toda dízima periódica é um número racional.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,555… em fração irredutível:", opcoes: ["5/9", "5/10", "55/99"], correta: 0, feedbackAcerto: "🎉 Período 5, um dígito → 5/9.", feedbackErro: "Período de 1 dígito → denominador 9: 5/9. O 55/99 também é 5/9, mas não está simplificado." },
      { pergunta: "0,272727… em fração irredutível:", opcoes: ["3/11", "27/99", "27/100"], correta: 0, feedbackAcerto: "🎉 27/99 dividido por 9 dá 3/11.", feedbackErro: "27/99 está correto, mas precisa simplificar: MDC = 9 → 3/11." },
      { pergunta: "Qual fração gera decimal EXATO?", opcoes: ["7/40", "5/12", "2/7"], correta: 0, feedbackAcerto: "🎉 40 = 2·2·2·5, só fatores 2 e 5 → exato (0,175).", feedbackErro: "Fatore os denominadores: 40 = 2³·5 (exato); 12 = 2²·3 (dízima); 7 é primo (dízima)." },
      { pergunta: "0,999… é igual a:", opcoes: ["1", "0,9", "9/10"], correta: 0, feedbackAcerto: "🎉 9/9 = 1. Sim, 0,999… é exatamente 1.", feedbackErro: "Pela regra: período 9, um dígito → 9/9 = 1. Parece estranho, mas 0,999… é o próprio número 1." },
      { pergunta: "Qual é o período de 0,8333…?", opcoes: ["3", "83", "833"], correta: 0, feedbackAcerto: "🎉 Só o 3 se repete; o 8 é a parte não periódica.", feedbackErro: "Olhe o que REPETE para sempre: apenas o 3. O 8 aparece uma vez só, então é parte não periódica." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Caçador de Dízimas",
    materiais: ["Papel", "Calculadora", "Canetas coloridas"],
    passos: [
      "Divida 1 por cada número de 2 a 12 na calculadora e anote os resultados.",
      "Marque quais deram decimal exato e quais deram dízima.",
      "Explique por escrito o padrão: os exatos têm denominador só com fatores 2 e 5.",
    ],
    registro: "📸 Foto da tabela com a conclusão escrita.",
  },
  recompensa: { xp: 240, moedas: 120, medalha: "Caçador de Dízimas" },
};

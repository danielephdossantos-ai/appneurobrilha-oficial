import type { AulaV4 } from "../../types";

/** Aula 01 · U2 — O conjunto dos racionais: fração, decimal e reta. */
export const aula01_racionais: AulaV4 = {
  slug: "u2-01-racionais",
  titulo: "O Conjunto dos Racionais",
  iconeTrilha: "🧩",
  bncc: ["EF07MA05"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Entre dois inteiros cabe infinito",
    historia:
      "{NOME}, entre 0 e 1 não existe nenhum inteiro. Mas existem INFINITOS números: 1/2, 0,3, −0,75… Hoje você conhece o conjunto ℚ, dos racionais, e aprende a escrever o mesmo número de três formas.",
  },

  momento02_exploracao: {
    instrucao: "Todo racional pode ser escrito como fração de inteiros, com denominador diferente de zero.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Três roupas do mesmo número",
        cabecalhos: ["Fração", "Decimal", "Porcentagem"],
        linhas: [
          { rotulo: "1", valores: ["1/2", "0,5", "50%"] },
          { rotulo: "2", valores: ["3/4", "0,75", "75%"] },
          { rotulo: "3", valores: ["−2/5", "−0,4", "−40%"] },
          { rotulo: "4", valores: ["1/3", "0,333…", "33,33…%"] },
        ],
      },
      {
        tipo: "retaNumerica",
        min: -2,
        max: 2,
        passo: 1,
        destacar: [
          { valor: -1, rotulo: "−1" },
          { valor: 0, rotulo: "0" },
          { valor: 1, rotulo: "1" },
        ],
        intervalos: [{ de: 0, ate: 1, rotulo: "aqui cabem infinitos racionais" }],
        legenda: "ℚ preenche os espaços entre os inteiros",
      },
      { tipo: "texto", texto: "🔑 ℚ = { a/b, com a e b inteiros e b ≠ 0 }. Todo inteiro também é racional: 5 = 5/1." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como transformar uma fração em decimal?",
    pista: "Fração é uma divisão esperando para acontecer.",
    revelacao: "Basta dividir o numerador pelo denominador: 3/4 = 3 ÷ 4 = 0,75.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/4 em decimal",
      passos: [
        { expr: "3/4 significa 3 ÷ 4", explica: "A barra é divisão.", status: "neutro", professor: "A barra de fração é literalmente o sinal de divisão. Muita gente esquece disso e trava." },
        { expr: "3 ÷ 4 → 3 é menor que 4", explica: "Coloco vírgula e acrescento zero.", status: "ok" },
        { expr: "30 ÷ 4 = 7, sobra 2", explica: "Primeira casa decimal.", status: "ok" },
        { expr: "20 ÷ 4 = 5, resto 0", explica: "Segunda casa decimal.", status: "ok" },
        { expr: "3/4 = 0,75", explica: "Divisão exata.", status: "ok", professor: "Quando o resto chega a zero, a decimal é EXATA. Se o resto começar a repetir, aparece uma dízima periódica." },
      ],
      fatorada: "3/4 = 0,75 = 75%",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Ler, escrever e localizar racionais",
    etapas: [
      {
        texto: "Frações EQUIVALENTES representam o mesmo ponto na reta. Multiplicar ou dividir numerador e denominador pelo mesmo número não muda o valor.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Simplificar 18/24",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "18/24",
            passos: [
              { expr: "MDC(18, 24) = 6", explica: "Maior divisor comum.", status: "neutro", professor: "Dividir pelo MDC leva direto à forma irredutível, sem precisar simplificar várias vezes." },
              { expr: "18 ÷ 6 = 3", explica: "Numerador.", status: "ok" },
              { expr: "24 ÷ 6 = 4", explica: "Denominador.", status: "ok" },
              { expr: "= 3/4", explica: "Forma irredutível.", status: "ok" },
            ],
            fatorada: "18/24 = 3/4",
          },
          destaque: "Toda resposta em fração deve ficar irredutível.",
        },
      },
      {
        texto: "Decimal exato vira fração pelo valor posicional: décimos, centésimos, milésimos.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "0,35 em fração",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "0,35 → fração",
            passos: [
              { expr: "2 casas decimais → centésimos", explica: "Denominador 100.", status: "neutro" },
              { expr: "= 35/100", explica: "Escrevo a fração.", status: "ok" },
              { expr: "MDC(35, 100) = 5", explica: "Simplifico.", status: "ok" },
              { expr: "= 7/20", explica: "Irredutível.", status: "ok", professor: "Confira dividindo: 7 ÷ 20 = 0,35. Sempre volte para conferir." },
            ],
            fatorada: "0,35 = 7/20",
          },
          destaque: "Uma casa → /10, duas → /100, três → /1000.",
        },
      },
      {
        texto: "Racionais negativos ficam à esquerda do zero. −3/4 fica entre −1 e 0, mais perto de −1.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "",
          visualMat: {
            tipo: "retaNumerica",
            min: -2,
            max: 2,
            passo: 1,
            destacar: [
              { valor: -0.75, rotulo: "−3/4" },
              { valor: 0.5, rotulo: "1/2" },
            ],
            legenda: "−0,75 e +0,5 na reta",
          },
          destaque: "Fração negativa: o sinal vale para a fração inteira.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: escreva 2/5 como decimal e como porcentagem.",
    resposta: "0,4 e 40%",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2/5",
      passos: [
        { expr: "2 ÷ 5", explica: "A barra é divisão.", status: "neutro" },
        { expr: "20 ÷ 5 = 4", explica: "Acrescento zero após a vírgula.", status: "ok" },
        { expr: "= 0,4", explica: "Decimal exato.", status: "ok" },
        { expr: "0,4 · 100 = 40", explica: "Para porcentagem, multiplico por 100.", status: "ok", professor: "Porcentagem é fração de denominador 100: 2/5 = 40/100 = 40%." },
      ],
      fatorada: "2/5 = 0,4 = 40%",
      legenda: "Brilha resolve",
    },
    passos: ["2/5 é 2 ÷ 5.", "2 ÷ 5 = 0,4.", "0,4 × 100 = 40.", "Logo 2/5 = 0,4 = 40%."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: simplifique 12/30.",
    dica: "MDC(12, 30) = 6.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "12/30",
      passos: [
        { expr: "12 ÷ 6 = 2", explica: "Numerador.", status: "neutro" },
        { expr: "30 ÷ 6 = 5", explica: "Denominador.", status: "ok" },
      ],
      fatorada: "= 2/5",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/5" }, { nome: "6/15" }, { nome: "4/10" }],
      respostaCerta: "2/5",
      feedbackAcerto: "🎯 Forma irredutível.",
      feedbackErro: "6/15 e 4/10 são equivalentes, mas ainda dá para simplificar. Divida por 6: 12/30 = 2/5.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 0,6 em fração irredutível.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "0,6 → fração",
      passos: [
        { expr: "= 6/10", explica: "Uma casa → décimos.", status: "neutro" },
        { expr: "÷ 2 em cima e embaixo", explica: "Simplifico.", status: "ok" },
      ],
      fatorada: "= 3/5",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/5" }, { nome: "6/10" }, { nome: "1/6" }],
      respostaCerta: "3/5",
      feedbackAcerto: "🎯 6/10 simplificado por 2 dá 3/5.",
      feedbackErro: "0,6 = 6/10 e ainda dá para simplificar por 2 → 3/5. Não é 1/6.",
    },
  },

  momento08_aplicacao: {
    contexto: "Numa prova de 40 questões, Marcos acertou 28.",
    problema: "Qual fração irredutível, decimal e porcentagem de acertos?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "28 de 40",
      passos: [
        { expr: "Fração: 28/40", explica: "Parte sobre o total.", status: "neutro" },
        { expr: "MDC(28, 40) = 4", explica: "Simplifico.", status: "ok" },
        { expr: "= 7/10", explica: "Forma irredutível.", status: "ok", professor: "Denominador 10 facilita muito: já dá o decimal na hora." },
        { expr: "7 ÷ 10 = 0,7", explica: "Decimal.", status: "ok" },
        { expr: "0,7 = 70%", explica: "Porcentagem.", status: "ok" },
      ],
      fatorada: "7/10 = 0,7 = 70%",
      legenda: "Aplicação — desempenho na prova",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7/10 = 70%" }, { nome: "28/40 = 28%" }, { nome: "4/5 = 80%" }],
      respostaCerta: "7/10 = 70%",
      feedbackAcerto: "🎯 28/40 simplificado é 7/10, ou seja, 70%.",
      feedbackErro: "28/40 não é 28%. Simplifique por 4: 7/10 = 0,7 = 70%.",
    },
  },

  momento09_revisao: {
    pontos: [
      "ℚ = a/b com a, b inteiros e b ≠ 0.",
      "Todo inteiro é racional (5 = 5/1).",
      "Fração → decimal: divida numerador por denominador.",
      "Decimal exato → fração: use o valor posicional e simplifique.",
      "Resposta em fração sempre irredutível.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3/5 em decimal é:", opcoes: ["0,6", "0,35", "1,66"], correta: 0, feedbackAcerto: "🎉 3 ÷ 5 = 0,6.", feedbackErro: "Divida 3 por 5: 3 ÷ 5 = 0,6. O 1,66 seria 5 ÷ 3." },
      { pergunta: "0,25 em fração irredutível é:", opcoes: ["1/4", "25/100", "2/5"], correta: 0, feedbackAcerto: "🎉 25/100 simplificado por 25 dá 1/4.", feedbackErro: "25/100 está certo, mas não é irredutível. Dividindo por 25: 1/4." },
      { pergunta: "Simplifique 45/60:", opcoes: ["3/4", "9/12", "5/6"], correta: 0, feedbackAcerto: "🎉 MDC 15: 45÷15 = 3 e 60÷15 = 4.", feedbackErro: "9/12 ainda simplifica. Use o MDC(45,60) = 15 → 3/4." },
      { pergunta: "Qual NÃO é racional na forma a/b com b ≠ 0?", opcoes: ["7/0", "0/7", "−4/9"], correta: 0, feedbackAcerto: "🎉 Denominador zero é proibido: divisão por zero não existe.", feedbackErro: "0/7 vale 0 e é racional. O problema é 7/0: nenhum número multiplicado por 0 dá 7." },
      { pergunta: "−1/2 fica na reta:", opcoes: ["entre −1 e 0", "entre 0 e 1", "à esquerda de −1"], correta: 0, feedbackAcerto: "🎉 É metade do caminho entre −1 e 0.", feedbackErro: "−0,5 é negativo, então está à esquerda do zero, mas não passa de −1: fica entre −1 e 0." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Caça aos racionais no mercado",
    materiais: ["Papel", "Caneta", "Encarte ou nota fiscal"],
    passos: [
      "Encontre 5 números com vírgula em preços ou embalagens.",
      "Escreva cada um como fração irredutível.",
      "Escolha dois e mostre também em porcentagem.",
    ],
    registro: "📸 Foto da tabela com as três formas de cada número.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Explorador dos Racionais" },
};

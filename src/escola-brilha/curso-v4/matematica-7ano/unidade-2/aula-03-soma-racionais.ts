import type { AulaV4 } from "../../types";

/** Aula 03 · U2 — Adição e subtração de racionais (frações e decimais). */
export const aula03_somaRacionais: AulaV4 = {
  slug: "u2-03-soma-racionais",
  titulo: "Somar e Subtrair Racionais",
  iconeTrilha: "🧮",
  bncc: ["EF07MA08"],
  duracaoMin: 30,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Fatias de tamanhos diferentes",
    historia:
      "{NOME}, você não pode somar 1/2 pizza com 1/3 de pizza direto — as fatias têm tamanhos diferentes. Primeiro é preciso cortar tudo do mesmo tamanho. Esse corte se chama MMC.",
  },

  momento02_exploracao: {
    instrucao: "A regra é a mesma sempre: denominador comum primeiro.",
    cenas: [
      {
        tipo: "somaFracoes",
        operacao: "+",
        a: { num: 1, den: 2 },
        b: { num: 1, den: 3 },
        simplificar: true,
        legenda: "1/2 + 1/3 com denominador comum 6",
      },
      {
        tipo: "tabela",
        titulo: "Roteiro",
        cabecalhos: ["Passo", "O que fazer"],
        linhas: [
          { rotulo: "1", valores: ["Calcular o MMC dos denominadores"] },
          { rotulo: "2", valores: ["Converter cada fração para o novo denominador"] },
          { rotulo: "3", valores: ["Somar (ou subtrair) só os numeradores"] },
          { rotulo: "4", valores: ["Simplificar o resultado"] },
        ],
      },
      { tipo: "texto", texto: "🔑 O denominador NÃO se soma. Ele só indica o tamanho da fatia." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que 1/2 + 1/3 não é 2/5?",
    pista: "Se fosse 2/5, o resultado seria MENOR que 1/2. Isso faz sentido ao somar algo positivo?",
    revelacao: "2/5 = 0,4 é menor que 1/2 = 0,5. Impossível. O correto é 5/6, cortando tudo em sextos.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/2 + 1/3",
      passos: [
        { expr: "1/2 + 1/3 = 2/5 ?", explica: "Somar denominadores.", status: "x", professor: "Somar denominadores é o erro mais comum do 7º ano. Confira sempre com decimal: 0,5 + 0,333 é maior que 0,8, nunca 0,4." },
        { expr: "MMC(2, 3) = 6", explica: "Denominador comum.", status: "ok" },
        { expr: "1/2 = 3/6", explica: "6 ÷ 2 = 3, então multiplico por 3.", status: "ok" },
        { expr: "1/3 = 2/6", explica: "6 ÷ 3 = 2, então multiplico por 2.", status: "ok" },
        { expr: "3/6 + 2/6 = 5/6", explica: "Somo só os numeradores.", status: "ok", professor: "5/6 ≈ 0,833. Bate com 0,5 + 0,333. Sempre confira o resultado em decimal." },
      ],
      fatorada: "1/2 + 1/3 = 5/6",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Frações, decimais e negativos",
    etapas: [
      {
        texto: "Denominadores diferentes: MMC, converta e some os numeradores. O denominador comum permanece.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "3/4 + 5/6",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3/4 + 5/6",
            passos: [
              { expr: "MMC(4, 6) = 12", explica: "Menor múltiplo comum.", status: "neutro", professor: "4 = 2² e 6 = 2·3. O MMC pega 2²·3 = 12." },
              { expr: "3/4 = 9/12", explica: "12 ÷ 4 = 3; 3·3 = 9.", status: "ok" },
              { expr: "5/6 = 10/12", explica: "12 ÷ 6 = 2; 5·2 = 10.", status: "ok" },
              { expr: "9/12 + 10/12 = 19/12", explica: "Somo numeradores.", status: "ok" },
              { expr: "= 1 7/12", explica: "Fração imprópria vira mista.", status: "ok", professor: "19/12 é maior que 1 porque 19 > 12. Deixar como 19/12 também está correto." },
            ],
            fatorada: "3/4 + 5/6 = 19/12",
          },
          destaque: "Denominador comum é obrigatório.",
        },
      },
      {
        texto: "Decimais: alinhe as vírgulas e complete com zeros. É a mesma conta armada dos inteiros.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "12,4 − 7,85",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "12,40 − 7,85",
            passos: [
              { expr: "12,4 → 12,40", explica: "Igualo as casas.", status: "neutro", professor: "Acrescentar zero à direita não muda o valor, mas alinha as colunas para armar a conta." },
              { expr: "0 − 5 → empresto: 10 − 5 = 5", explica: "Centésimos.", status: "ok" },
              { expr: "3 − 8 → empresto: 13 − 8 = 5", explica: "Décimos (o 4 virou 3).", status: "ok" },
              { expr: "11 − 7 = 4", explica: "Unidades (o 12 virou 11).", status: "ok" },
              { expr: "= 4,55", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "12,4 − 7,85 = 4,55",
          },
          destaque: "Vírgula embaixo de vírgula.",
        },
      },
      {
        texto: "Com racionais NEGATIVOS valem as mesmas regras de sinal dos inteiros: sinais iguais somam, diferentes subtraem.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "−3/5 + 1/2",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "−3/5 + 1/2",
            passos: [
              { expr: "MMC(5, 2) = 10", explica: "Denominador comum.", status: "neutro" },
              { expr: "−3/5 = −6/10 e 1/2 = 5/10", explica: "Converto.", status: "ok" },
              { expr: "Sinais diferentes → 6 − 5 = 1", explica: "Subtraio os módulos.", status: "ok" },
              { expr: "Sinal do −6/10", explica: "Módulo maior.", status: "ok", professor: "Confira em decimal: −0,6 + 0,5 = −0,1, que é exatamente −1/10." },
              { expr: "= −1/10", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= −1/10",
          },
          destaque: "Sinal segue a regra dos inteiros.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: 5/6 − 1/4.",
    resposta: "7/12",
    visualMat: {
      tipo: "somaFracoes",
      operacao: "-",
      a: { num: 5, den: 6 },
      b: { num: 1, den: 4 },
      simplificar: true,
      legenda: "Brilha resolve",
    },
    passos: [
      "MMC(6, 4) = 12.",
      "5/6 = 10/12 (12 ÷ 6 = 2; 5·2 = 10).",
      "1/4 = 3/12 (12 ÷ 4 = 3; 1·3 = 3).",
      "10/12 − 3/12 = 7/12. Já é irredutível.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: 1/3 + 1/6 = ?",
    dica: "MMC(3, 6) = 6. Converta só a primeira fração.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "1/3 + 1/6",
      passos: [
        { expr: "1/3 = 2/6", explica: "Multiplico por 2.", status: "neutro" },
        { expr: "2/6 + 1/6 = 3/6", explica: "Somo numeradores.", status: "ok" },
        { expr: "3/6 = 1/2", explica: "Simplifico por 3.", status: "ok" },
      ],
      fatorada: "= 1/2",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/2" }, { nome: "2/9" }, { nome: "3/6" }],
      respostaCerta: "1/2",
      feedbackAcerto: "🎯 3/6 simplificado é 1/2.",
      feedbackErro: "Não some denominadores (isso daria 2/9). O certo é 2/6 + 1/6 = 3/6 = 1/2, já simplificado.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: 4,7 + 2,85 = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4,70 + 2,85",
      passos: [
        { expr: "Igualo casas: 4,70", explica: "Zero à direita.", status: "neutro" },
        { expr: "0 + 5 = 5 (centésimos)", explica: "Primeira coluna.", status: "ok" },
        { expr: "7 + 8 = 15 → escrevo 5, vai 1", explica: "Décimos.", status: "ok" },
        { expr: "4 + 2 + 1 = 7", explica: "Unidades.", status: "ok" },
      ],
      fatorada: "= 7,55",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7,55" }, { nome: "6,92" }, { nome: "7,12" }],
      respostaCerta: "7,55",
      feedbackAcerto: "🎯 Vírgula alinhada e o 'vai 1' respeitado.",
      feedbackErro: "Alinhe as vírgulas: 4,70 + 2,85. Nos décimos 7 + 8 = 15, escreve 5 e sobe 1 → 7,55.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma receita pede 3/4 de xícara de açúcar. João já colocou 1/3 de xícara.",
    problema: "Quanto AINDA falta colocar?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3/4 − 1/3",
      passos: [
        { expr: "Falta = total − já colocado", explica: "Monto a conta.", status: "neutro" },
        { expr: "MMC(4, 3) = 12", explica: "Denominador comum.", status: "ok" },
        { expr: "3/4 = 9/12 e 1/3 = 4/12", explica: "Converto.", status: "ok" },
        { expr: "9/12 − 4/12 = 5/12", explica: "Subtraio numeradores.", status: "ok", professor: "5/12 ≈ 0,42 xícara. Faz sentido: falta um pouco menos da metade da xícara." },
      ],
      fatorada: "Falta 5/12 de xícara",
      legenda: "Aplicação — receita",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5/12" }, { nome: "2/1" }, { nome: "1/2" }],
      respostaCerta: "5/12",
      feedbackAcerto: "🎯 9/12 − 4/12 = 5/12.",
      feedbackErro: "Nunca subtraia numerador com numerador e denominador com denominador. Use MMC 12: 9/12 − 4/12 = 5/12.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Denominadores diferentes → MMC antes de somar.",
      "Some apenas numeradores; o denominador comum fica.",
      "1/2 + 1/3 = 5/6, nunca 2/5.",
      "Decimais: alinhe vírgulas e complete com zeros.",
      "Sinais seguem a regra dos inteiros.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/4 + 1/4 =", opcoes: ["1/2", "2/8", "1/8"], correta: 0, feedbackAcerto: "🎉 2/4 simplificado é 1/2.", feedbackErro: "Mesmo denominador: soma numeradores → 2/4, que simplifica para 1/2. Denominador não soma." },
      { pergunta: "2/3 + 1/6 =", opcoes: ["5/6", "3/9", "1/2"], correta: 0, feedbackAcerto: "🎉 4/6 + 1/6 = 5/6.", feedbackErro: "MMC(3,6) = 6. Então 2/3 = 4/6 e 4/6 + 1/6 = 5/6." },
      { pergunta: "7/8 − 1/2 =", opcoes: ["3/8", "6/6", "1/4"], correta: 0, feedbackAcerto: "🎉 7/8 − 4/8 = 3/8.", feedbackErro: "1/2 = 4/8. Então 7/8 − 4/8 = 3/8." },
      { pergunta: "9,3 − 4,75 =", opcoes: ["4,55", "5,55", "4,45"], correta: 0, feedbackAcerto: "🎉 9,30 − 4,75 = 4,55.", feedbackErro: "Complete: 9,30 − 4,75. Emprestando corretamente o resultado é 4,55." },
      { pergunta: "−1/2 + 1/4 =", opcoes: ["−1/4", "+1/4", "−3/4"], correta: 0, feedbackAcerto: "🎉 −2/4 + 1/4 = −1/4.", feedbackErro: "MMC 4: −2/4 + 1/4. Sinais diferentes: 2 − 1 = 1, com o sinal do maior módulo → −1/4." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Receita fracionada",
    materiais: ["Receita de bolo", "Papel", "Caneta", "Xícara medidora"],
    passos: [
      "Escolha uma receita com medidas em frações.",
      "Some todos os ingredientes secos em xícaras usando MMC.",
      "Escreva a conta completa mostrando o denominador comum.",
    ],
    registro: "📸 Foto da conta ao lado da receita.",
  },
  recompensa: { xp: 210, moedas: 105, medalha: "Chef das Frações" },
};

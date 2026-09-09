import type { AulaV4 } from "../../types";

/** Aula 05 · U4 — Missão final: problemas com equações e introdução às inequações. */
export const aula05_problemasInequacoes: AulaV4 = {
  slug: "u4-05-problemas-inequacoes",
  titulo: "Missão Final: Do Problema à Equação",
  iconeTrilha: "🏁",
  bncc: ["EF07MA17", "EF07MA18"],
  duracaoMin: 35,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Quem monta, resolve",
    historia:
      "{NOME}, na prova o difícil quase nunca é a conta — é montar a equação. Hoje você aprende o método de 4 passos que transforma qualquer problema em símbolos, e ainda conhece as inequações, quando a resposta não é um número só, mas um intervalo inteiro.",
  },

  momento02_exploracao: {
    instrucao: "Observe o método de 4 passos aplicado a problemas diferentes.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Do enunciado à equação",
        cabecalhos: ["Problema", "Quem é x", "Equação"],
        linhas: [
          { rotulo: "1", valores: ["Um número mais 12 dá 30", "o número", "x + 12 = 30"] },
          { rotulo: "2", valores: ["O dobro de um número menos 5 dá 21", "o número", "2x − 5 = 21"] },
          { rotulo: "3", valores: ["Ana tem o triplo da idade de Léo; juntos têm 32", "idade de Léo", "x + 3x = 32"] },
          { rotulo: "4", valores: ["Dois números consecutivos somam 45", "o menor", "x + (x + 1) = 45"] },
        ],
      },
      { tipo: "texto", texto: "🔑 Método de 4 passos: 1) decidir quem é o x; 2) escrever as outras quantidades em função de x; 3) montar a igualdade; 4) resolver e VOLTAR à pergunta original." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Em 'Ana tem o triplo da idade de Léo e juntos têm 32 anos', quem deve ser o x?",
    pista: "Escolha como x a quantidade MENOR — assim a outra vira uma multiplicação, sem frações.",
    revelacao: "x deve ser a idade de Léo: então Ana é 3x e a equação x + 3x = 32 leva a Léo com 8 e Ana com 24.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + 3x = 32",
      passos: [
        { expr: "x = idade de Léo", explica: "Escolho a menor.", status: "neutro", professor: "Se eu chamasse Ana de x, Léo seria x/3 e apareceria uma fração sem necessidade. Escolher bem o x economiza trabalho." },
        { expr: "Ana = 3x", explica: "Triplo de Léo.", status: "ok" },
        { expr: "x + 3x = 32", explica: "Juntos têm 32.", status: "ok" },
        { expr: "4x = 32 → x = 8", explica: "Resolvo.", status: "ok" },
        { expr: "Léo 8, Ana 24 — soma 32 ✓", explica: "Volto à pergunta.", status: "ok", professor: "Resolver a equação não encerra o problema: é preciso responder o que foi perguntado, com as duas idades." },
      ],
      fatorada: "Léo: 8 anos · Ana: 24 anos",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "Montar, resolver e comparar",
    etapas: [
      {
        texto: "NÚMEROS CONSECUTIVOS: se o primeiro é x, os seguintes são x + 1 e x + 2.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Três números consecutivos somam 72",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "x + (x + 1) + (x + 2) = 72",
            passos: [
              { expr: "3x + 3 = 72", explica: "Reduzo termos semelhantes.", status: "neutro" },
              { expr: "3x = 69", explica: "Tiro 3 dos dois lados.", status: "ok" },
              { expr: "x = 23", explica: "Divido por 3.", status: "ok" },
              { expr: "Números: 23, 24 e 25", explica: "Volto à pergunta.", status: "ok", professor: "Conferindo: 23 + 24 + 25 = 72. O resultado também faz sentido porque 72 ÷ 3 = 24, que é justamente o número do meio." },
            ],
            fatorada: "23, 24 e 25",
          },
          destaque: "A soma de três consecutivos é sempre o triplo do número do meio.",
        },
      },
      {
        texto: "PROBLEMAS DE COMPRA: gasto total = preço unitário · quantidade + taxas.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Com R$ 100, após pagar R$ 16 de entrega, dá para comprar quantos itens de R$ 12?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "12n + 16 = 100",
            passos: [
              { expr: "n = número de itens", explica: "Defino a incógnita.", status: "neutro" },
              { expr: "12n + 16 = 100", explica: "Monto a equação.", status: "ok" },
              { expr: "12n = 84", explica: "Tiro 16 dos dois lados.", status: "ok" },
              { expr: "n = 7", explica: "Divido por 12.", status: "ok" },
              { expr: "Verificação: 7 · 12 + 16 = 100 ✓", explica: "Confere.", status: "ok" },
            ],
            fatorada: "7 itens",
          },
          destaque: "Resposta de contagem precisa ser número inteiro e positivo.",
        },
      },
      {
        texto: "INEQUAÇÃO: usa <, >, ≤ ou ≥. Resolve-se igual à equação, MAS ao multiplicar ou dividir por número negativo o sinal se inverte.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "Resolver 3x + 4 ≤ 19 e depois −2x < 8",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Duas inequações",
            passos: [
              { expr: "3x + 4 ≤ 19", explica: "Primeira.", status: "neutro" },
              { expr: "3x ≤ 15 → x ≤ 5", explica: "Sinal permanece: dividi por +3.", status: "ok" },
              { expr: "−2x < 8", explica: "Segunda.", status: "neutro" },
              { expr: "x > −4", explica: "Dividi por −2: o sinal INVERTEU.", status: "ok", professor: "Teste com x = 0: −2 · 0 = 0 < 8, verdadeiro, e 0 > −4, coerente. Se o sinal não invertesse, x < −4 excluiria o 0 e a resposta estaria errada." },
              { expr: "Erro comum: manter −2x < 8 → x < −4", explica: "Sinal esquecido.", status: "x" },
            ],
            fatorada: "x ≤ 5 · x > −4",
          },
          destaque: "Dividiu por negativo? Vire o sinal da desigualdade.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: a soma de dois números consecutivos é 45. Quais são?",
    resposta: "22 e 23",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "x + (x + 1) = 45",
      passos: [
        { expr: "x = menor número", explica: "Defino.", status: "neutro" },
        { expr: "x + x + 1 = 45", explica: "Monto.", status: "ok" },
        { expr: "2x + 1 = 45", explica: "Reduzo.", status: "ok" },
        { expr: "2x = 44 → x = 22", explica: "Resolvo.", status: "ok" },
        { expr: "Números: 22 e 23", explica: "Volto à pergunta.", status: "ok", professor: "Como 45 é ímpar, a soma de dois consecutivos podia mesmo dar esse valor. Se a soma pedida fosse par, não existiriam dois consecutivos inteiros com essa soma." },
      ],
      fatorada: "22 e 23",
      legenda: "Brilha resolve",
    },
    passos: ["Chamo o menor de x.", "O seguinte é x + 1.", "2x + 1 = 45 → x = 22.", "Resposta: 22 e 23."],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: o dobro de um número mais 6 é igual a 20. Qual o número?",
    dica: "Monte 2x + 6 = 20 e desfaça primeiro o +6.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2x + 6 = 20",
      passos: [
        { expr: "2x = 14", explica: "Tiro 6 dos dois lados.", status: "neutro" },
        { expr: "x = 7", explica: "Divido por 2.", status: "ok" },
      ],
      fatorada: "x = 7",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "13" }, { nome: "10" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 2 · 7 + 6 = 20.",
      feedbackErro: "13 aparece quando se tira o 6 sem dividir por 2 depois. Depois de 2x = 14 ainda falta dividir: x = 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: resolva a inequação 4x − 2 ≥ 10.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "4x − 2 ≥ 10",
      passos: [
        { expr: "4x ≥ 12", explica: "Somo 2 dos dois lados.", status: "neutro" },
        { expr: "x ≥ 3", explica: "Divido por +4: sinal mantido.", status: "ok" },
      ],
      fatorada: "x ≥ 3",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "x ≥ 3" }, { nome: "x ≤ 3" }, { nome: "x ≥ 2" }],
      respostaCerta: "x ≥ 3",
      feedbackAcerto: "🎯 O sinal só inverte ao dividir por número negativo — aqui dividimos por +4.",
      feedbackErro: "Como dividimos por +4, o sinal permanece: x ≥ 3. Testando x = 3: 4·3 − 2 = 10, que satisfaz o ≥.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Uma festa cobra R$ 45 de entrada por pessoa e o salão custa R$ 600 fixos. A turma arrecadou R$ 3 300 no total.",
    problema: "Quantas pessoas pagaram entrada e, se o objetivo era arrecadar pelo menos R$ 3 300, qual o número mínimo de pagantes?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "45p + 600 = 3 300",
      passos: [
        { expr: "p = pessoas pagantes", explica: "Defino a incógnita.", status: "neutro" },
        { expr: "45p + 600 = 3 300", explica: "Monto a equação.", status: "ok" },
        { expr: "45p = 2 700", explica: "Tiro 600 dos dois lados.", status: "ok" },
        { expr: "p = 60", explica: "Divido por 45.", status: "ok" },
        { expr: "Inequação: 45p + 600 ≥ 3 300", explica: "Versão 'pelo menos'.", status: "ok", professor: "A inequação dá p ≥ 60. Como pessoas são números inteiros, o mínimo é exatamente 60 pagantes." },
        { expr: "Verificação: 60 · 45 + 600 = 3 300 ✓", explica: "Confere.", status: "ok" },
      ],
      fatorada: "60 pessoas (mínimo p ≥ 60)",
      legenda: "Aplicação — arrecadação da festa",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o número de pagantes:",
      opcoes: [{ nome: "60" }, { nome: "73" }, { nome: "87" }],
      respostaCerta: "60",
      feedbackAcerto: "🎯 45 · 60 = 2 700 e somando os 600 do salão chega-se a 3 300.",
      feedbackErro: "73 vem de dividir 3 300 por 45 sem descontar os R$ 600 do salão. Tire o valor fixo primeiro: 2 700 ÷ 45 = 60.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Método de 4 passos: definir x, escrever o resto em função de x, montar a igualdade, resolver e responder.",
      "Escolha como x a menor quantidade para evitar frações.",
      "Consecutivos: x, x + 1, x + 2.",
      "Resolver a equação não basta: volte e responda a pergunta feita.",
      "Inequação resolve-se igual, mas dividir por negativo inverte o sinal.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "'Um número mais 15 dá 40'. O número é:", opcoes: ["25", "55", "15"], correta: 0, feedbackAcerto: "🎉 x + 15 = 40 → x = 25.", feedbackErro: "Monte x + 15 = 40 e tire 15 dos dois lados: x = 25." },
      { pergunta: "Dois consecutivos somam 37. O menor é:", opcoes: ["18", "19", "17"], correta: 0, feedbackAcerto: "🎉 18 + 19 = 37.", feedbackErro: "Com x e x + 1: 2x + 1 = 37, logo 2x = 36 e x = 18." },
      { pergunta: "2x − 6 < 4 tem solução:", opcoes: ["x < 5", "x > 5", "x < −1"], correta: 0, feedbackAcerto: "🎉 2x < 10 e dividindo por +2 o sinal se mantém.", feedbackErro: "Some 6 dos dois lados: 2x < 10. Dividindo por +2, o sinal continua: x < 5." },
      { pergunta: "−3x > 9 tem solução:", opcoes: ["x < −3", "x > −3", "x > 3"], correta: 0, feedbackAcerto: "🎉 Dividimos por −3, então o sinal inverteu.", feedbackErro: "Ao dividir por número negativo a desigualdade vira: x < −3. Teste com x = −4: −3 · (−4) = 12 > 9, verdadeiro." },
      { pergunta: "Ana tem o dobro da idade de Bia e juntas têm 27. Bia tem:", opcoes: ["9", "13,5", "18"], correta: 0, feedbackAcerto: "🎉 x + 2x = 27 → x = 9, e Ana tem 18.", feedbackErro: "Chame Bia de x: então Ana é 2x e 3x = 27, logo Bia tem 9 e Ana 18." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "O problema da família",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Peça a um adulto que invente um problema real da casa (compras, combustível, tempo de viagem).",
      "Monte a equação seguindo os 4 passos e mostre cada etapa em voz alta.",
      "Resolva, verifique e explique a resposta para quem propôs o problema.",
    ],
    registro: "📸 Foto do problema escrito com a equação e a verificação.",
  },
  recompensa: { xp: 260, moedas: 140, medalha: "Estrategista das Equações" },
};

import type { AulaV4 } from "../../types";

/** Aula 02 · U1 — Adição de números inteiros (mesmo sinal e sinais diferentes). */
export const aula02_somaInteiros: AulaV4 = {
  slug: "u1-02-soma-inteiros",
  titulo: "Somar com Sinais",
  iconeTrilha: "➕",
  bncc: ["EF07MA04"],
  duracaoMin: 30,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Ganhar e perder no mesmo dia",
    historia:
      "{NOME}, imagine o placar de um jogo: você ganha 7 pontos e depois perde 10. Sobrou ou faltou? Hoje você aprende a regra que resolve isso sem chutar.",
  },

  momento02_exploracao: {
    instrucao: "Duas situações, duas regras diferentes.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Adição de inteiros",
        cabecalhos: ["Caso", "O que faço", "Sinal do resultado"],
        linhas: [
          { rotulo: "1", valores: ["Sinais IGUAIS", "SOMO os módulos", "o mesmo sinal dos dois"] },
          { rotulo: "2", valores: ["Sinais DIFERENTES", "SUBTRAIO os módulos", "o do MAIOR módulo"] },
        ],
      },
      {
        tipo: "retaNumerica",
        min: -12,
        max: 12,
        passo: 2,
        destacar: [
          { valor: 7, rotulo: "+7" },
          { valor: -3, rotulo: "resultado" },
        ],
        intervalos: [{ de: -3, ate: 7, rotulo: "andei 10 para a esquerda" }],
        legenda: "(+7) + (−10) = −3",
      },
      { tipo: "texto", texto: "🔑 Somar um negativo é ANDAR PARA A ESQUERDA na reta." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Por que (+7) + (−10) dá negativo?",
    pista: "Ganhei 7 e perdi 10. Quem é mais forte: o ganho ou a perda?",
    revelacao: "Sinais diferentes: subtraio 10 − 7 = 3 e uso o sinal do maior módulo (o −10). Resultado: −3.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(+7) + (−10)",
      passos: [
        { expr: "Sinais diferentes (+ e −)", explica: "Vou SUBTRAIR os módulos.", status: "neutro", professor: "Regra: sinais diferentes brigam entre si; um cancela parte do outro. Por isso subtrai." },
        { expr: "|−10| = 10 e |+7| = 7", explica: "Comparo os módulos.", status: "ok" },
        { expr: "10 − 7 = 3", explica: "Maior módulo menos menor.", status: "ok" },
        { expr: "Sinal do maior módulo: −", explica: "O −10 é mais forte.", status: "ok", professor: "Sempre o sinal do número de maior módulo vence, porque é o que sobra depois do cancelamento." },
        { expr: "(+7) + (−10) = −3", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= −3",
      legenda: "Descoberta guiada",
    },
  },

  momento04_explicacao: {
    titulo: "As duas regras da adição",
    etapas: [
      {
        texto: "SINAIS IGUAIS: some os módulos e conserve o sinal. Dois ganhos ficam ganho maior; duas dívidas ficam dívida maior.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−6) + (−9)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−6) + (−9)",
            passos: [
              { expr: "Sinais iguais (− e −)", explica: "Vou SOMAR os módulos.", status: "neutro" },
              { expr: "6 + 9 = 15", explica: "Somo sem olhar sinal.", status: "ok" },
              { expr: "Conservo o sinal: −", explica: "Os dois eram negativos.", status: "ok", professor: "Se devo 6 e depois devo mais 9, minha dívida cresce: passa a ser 15 negativos. Nunca vira positivo." },
              { expr: "= −15", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= −15",
          },
          destaque: "Duas dívidas → dívida maior.",
        },
      },
      {
        texto: "SINAIS DIFERENTES: subtraia o menor módulo do maior e use o sinal do maior módulo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−12) + (+20)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−12) + (+20)",
            passos: [
              { expr: "Sinais diferentes", explica: "Vou SUBTRAIR.", status: "neutro" },
              { expr: "20 − 12 = 8", explica: "Maior módulo menos menor.", status: "ok" },
              { expr: "Sinal do +20", explica: "Ele tem módulo maior.", status: "ok", professor: "Devia 12 e recebi 20: paguei a dívida e ainda sobraram 8. Por isso o resultado é positivo." },
              { expr: "= +8", explica: "Resultado.", status: "ok" },
            ],
            fatorada: "= +8",
          },
          destaque: "Quem tem módulo maior manda no sinal.",
        },
      },
      {
        texto: "Opostos se cancelam: qualquer número somado ao seu oposto dá ZERO. É o elemento neutro aparecendo.",
        exemploReal: {
          titulo: "🔎 Passo a passo",
          contexto: "(−14) + (+14)",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "(−14) + (+14)",
            passos: [
              { expr: "Módulos iguais, sinais diferentes", explica: "Subtraio.", status: "neutro" },
              { expr: "14 − 14 = 0", explica: "Cancelamento total.", status: "ok", professor: "Zero não tem sinal. Quando os módulos são iguais e os sinais opostos, o resultado é sempre 0." },
            ],
            fatorada: "= 0",
          },
          destaque: "x + (−x) = 0.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha resolve: (−8) + (+3) + (−5).",
    resposta: "−10",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−8) + (+3) + (−5)",
      passos: [
        { expr: "Junto os negativos: (−8) + (−5) = −13", explica: "Sinais iguais → somo.", status: "neutro", professor: "Reagrupar por sinal é o caminho mais seguro em somas com três ou mais parcelas." },
        { expr: "Positivos: +3", explica: "Só um.", status: "ok" },
        { expr: "(−13) + (+3)", explica: "Agora sinais diferentes.", status: "ok" },
        { expr: "13 − 3 = 10, sinal do −13", explica: "Maior módulo é 13.", status: "ok" },
        { expr: "= −10", explica: "Resultado.", status: "ok" },
      ],
      fatorada: "= −10",
      legenda: "Brilha resolve",
    },
    passos: [
      "Agrupo os negativos: −8 e −5 viram −13.",
      "Sobra +3.",
      "Sinais diferentes: 13 − 3 = 10.",
      "Sinal do maior módulo (−13) → resultado −10.",
    ],
  },

  momento06_praticaGuiada: {
    enunciado: "Nós fazemos: (−15) + (+9) = ?",
    dica: "Sinais diferentes → subtrai os módulos (15 − 9) e usa o sinal do 15.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−15) + (+9)",
      passos: [
        { expr: "15 − 9 = 6", explica: "Subtraio os módulos.", status: "neutro" },
        { expr: "Sinal do −15", explica: "Módulo maior.", status: "ok" },
      ],
      fatorada: "= −6",
      legenda: "Nós fazemos",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−6" }, { nome: "+6" }, { nome: "−24" }],
      respostaCerta: "−6",
      feedbackAcerto: "🎯 15 − 9 = 6, com o sinal do −15.",
      feedbackErro: "Sinais DIFERENTES não somam: subtraem. 15 − 9 = 6 e o sinal é do −15 → −6.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Você faz: (−7) + (−13) = ?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−7) + (−13)",
      passos: [
        { expr: "Sinais iguais → somo módulos", explica: "7 + 13 = 20.", status: "neutro" },
        { expr: "Conservo o sinal −", explica: "Os dois negativos.", status: "ok" },
      ],
      fatorada: "= −20",
      legenda: "Você faz",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−20" }, { nome: "+20" }, { nome: "−6" }],
      respostaCerta: "−20",
      feedbackAcerto: "🎯 Duas dívidas somam: −20.",
      feedbackErro: "Sinais iguais → soma os módulos (7 + 13 = 20) e conserva o sinal negativo.",
    },
  },

  momento08_aplicacao: {
    contexto: "O saldo da conta era −85 reais (cheque especial). Entrou um depósito de 240 reais e saiu uma conta de luz de 130 reais.",
    problema: "Qual o saldo final?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "(−85) + (+240) + (−130)",
      passos: [
        { expr: "Negativos: (−85) + (−130) = −215", explica: "Somo as saídas.", status: "neutro", professor: "Junto tudo o que é saída (negativo) e tudo o que é entrada (positivo). Depois faço uma única comparação." },
        { expr: "Positivos: +240", explica: "Só o depósito.", status: "ok" },
        { expr: "240 − 215 = 25", explica: "Sinais diferentes → subtraio.", status: "ok" },
        { expr: "Sinal do +240", explica: "Entrada foi maior.", status: "ok" },
      ],
      fatorada: "Saldo final = +25 reais",
      legenda: "Aplicação — saldo bancário",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "+25 reais" }, { nome: "−25 reais" }, { nome: "+55 reais" }],
      respostaCerta: "+25 reais",
      feedbackAcerto: "🎯 Entradas 240, saídas 215 → sobram 25 positivos.",
      feedbackErro: "Some as saídas: 85 + 130 = 215. Compare com a entrada 240. Como 240 > 215, sobra saldo POSITIVO de 25.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Sinais iguais: soma os módulos e conserva o sinal.",
      "Sinais diferentes: subtrai os módulos e usa o sinal do maior módulo.",
      "x + (−x) = 0.",
      "Somar negativo = andar para a esquerda na reta.",
      "Em somas longas, agrupe negativos e positivos primeiro.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "(−9) + (−4) =", opcoes: ["−13", "+13", "−5"], correta: 0, feedbackAcerto: "🎉 Sinais iguais → soma e conserva o −.", feedbackErro: "Os dois são negativos: 9 + 4 = 13, sinal negativo → −13." },
      { pergunta: "(+18) + (−5) =", opcoes: ["+13", "−13", "+23"], correta: 0, feedbackAcerto: "🎉 18 − 5 = 13, sinal do +18.", feedbackErro: "Sinais diferentes → subtrai: 18 − 5 = 13. O maior módulo é o +18, então o resultado é positivo." },
      { pergunta: "(−11) + (+11) =", opcoes: ["0", "+22", "−22"], correta: 0, feedbackAcerto: "🎉 Opostos se cancelam.", feedbackErro: "Mesmo módulo e sinais opostos: 11 − 11 = 0." },
      { pergunta: "(−3) + (+8) + (−10) =", opcoes: ["−5", "+5", "−21"], correta: 0, feedbackAcerto: "🎉 Negativos −13, positivo +8, 13 − 8 = 5 com sinal −.", feedbackErro: "Agrupe: (−3)+(−10) = −13. Depois (−13)+(+8): 13 − 8 = 5 com o sinal do −13 → −5." },
      { pergunta: "A temperatura era −7 °C e caiu mais 6 °C. Ficou:", opcoes: ["−13 °C", "−1 °C", "+13 °C"], correta: 0, feedbackAcerto: "🎉 Cair é somar negativo: (−7) + (−6) = −13 °C.", feedbackErro: "Cair 6 graus significa somar −6: (−7) + (−6) = −13 °C. Fica mais frio, não menos." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Extrato de ganhos e perdas",
    materiais: ["Papel", "Caneta"],
    passos: [
      "Invente um extrato com 6 lançamentos, misturando entradas (+) e saídas (−).",
      "Calcule o saldo final agrupando primeiro os positivos e depois os negativos.",
      "Mostre a conta para alguém da família explicando cada regra de sinal usada.",
    ],
    registro: "📸 Foto do extrato com o saldo final.",
  },
  recompensa: { xp: 205, moedas: 100, medalha: "Somador de Sinais" },
};

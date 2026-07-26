import type { AulaV4 } from "../../types";

export const aula04_prob: AulaV4 = {
  slug: "u7-04-prob",
  titulo: "Probabilidade",
  iconeTrilha: "🎯",
  bncc: ["EF08MA22"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Medir a chance com número",
    historia:
      "{NOME}, 'talvez', 'quase certo' e 'difícil' são palavras vagas. A Matemática mede chance com número: P = casos favoráveis ÷ casos possíveis. Um dado tem 6 faces e só uma é o 6 — a chance é 1/6, ou seja, cerca de 17%. Hoje você aprende a transformar palpite em número.",
  },
  momento02_exploracao: {
    instrucao: "Toda probabilidade fica entre 0 (impossível) e 1 (certo).",
    cenas: [
      {
        tipo: "escalaProb",
        itens: [
          { evento: "Tirar 7 num dado comum", nivel: "impossivel" },
          { evento: "Tirar o número 6 num dado", nivel: "pouco" },
          { evento: "Tirar cara numa moeda", nivel: "provavel" },
          { evento: "Tirar número menor que 6 num dado", nivel: "muito" },
          { evento: "Tirar número de 1 a 6 num dado", nivel: "certo" },
        ],
      },
      {
        tipo: "tabela",
        titulo: "A fórmula",
        cabecalhos: ["Símbolo", "Significado", "Exemplo (P de par no dado)"],
        linhas: [
          { rotulo: "f", valores: ["casos favoráveis", "3 (faces 2, 4, 6)"] },
          { rotulo: "t", valores: ["casos possíveis", "6 (faces 1 a 6)"] },
          { rotulo: "P = f ÷ t", valores: ["probabilidade", "3/6 = 1/2 = 50%"] },
        ],
      },
      {
        tipo: "texto",
        texto:
          "0 ≤ P ≤ 1. Para virar porcentagem, multiplique por 100. E P(não acontecer) = 1 − P(acontecer).",
        destaque: true,
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Se a chance de chover é 30%, qual a chance de NÃO chover?",
    pista: "As duas possibilidades juntas cobrem tudo, ou seja, 100%.",
    revelacao: "70%. O evento contrário é sempre 1 − P (ou 100% − P%).",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "P(chover) = 30% = 0,3",
      passos: [
        { expr: "P(chover) + P(não chover) = 1", explica: "Cobre todos os casos.", status: "neutro" },
        { expr: "P(não chover) = 1 − 0,3", explica: "Isolando.", status: "neutro" },
        {
          expr: "P(não chover) = 0,7 = 70%",
          explica: "",
          status: "ok",
          professor:
            "Esse é o evento complementar. Em muitos problemas é mais rápido calcular o contrário e subtrair de 1 do que contar todos os casos favoráveis.",
        },
      ],
      fatorada: "P(não chover) = 70%",
    },
  },
  momento04_explicacao: {
    titulo: "Contar favoráveis, contar possíveis, dividir",
    etapas: [
      {
        texto: "Dado comum: 6 casos possíveis, todos com a mesma chance (dado honesto).",
        exemploReal: {
          contexto: "Qual a probabilidade de sair número PAR?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Dado: {1, 2, 3, 4, 5, 6}",
            passos: [
              { expr: "Favoráveis: 2, 4, 6 → f = 3", explica: "Números pares.", status: "neutro" },
              { expr: "Possíveis: t = 6", explica: "Todas as faces.", status: "neutro" },
              { expr: "P = 3/6", explica: "f ÷ t.", status: "neutro" },
              {
                expr: "P = 1/2 = 0,5 = 50%",
                explica: "Simplifiquei.",
                status: "ok",
                professor:
                  "Sempre simplifique a fração e, se o enunciado pedir, apresente também em porcentagem. As três formas — fração, decimal e porcentagem — dizem a mesma coisa.",
              },
            ],
            fatorada: "P(par) = 1/2 = 50%",
          },
          destaque: "P = 50%.",
        },
      },
      {
        texto: "Urna: conte as bolas de cada cor e o total.",
        exemploReal: {
          contexto: "Urna com 3 bolas verdes e 7 azuis. P(verde)?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "3 verdes + 7 azuis",
            passos: [
              { expr: "t = 3 + 7 = 10", explica: "Total de bolas.", status: "neutro" },
              { expr: "f = 3", explica: "Verdes.", status: "neutro" },
              {
                expr: "P = 3/10 = 0,3 = 30%",
                explica: "",
                status: "ok",
                professor:
                  "Erro comum: usar 3/7 (verdes sobre azuis). O denominador é sempre o TOTAL, nunca só o resto.",
              },
            ],
            fatorada: "P(verde) = 3/10 = 30%",
          },
          destaque: "Denominador = TOTAL.",
        },
      },
      {
        texto: "Baralho: 52 cartas, 4 naipes de 13 cartas.",
        exemploReal: {
          contexto: "P de tirar uma carta de copas.",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "Baralho de 52 cartas",
            passos: [
              { expr: "f = 13 (copas)", explica: "Um naipe.", status: "neutro" },
              { expr: "t = 52", explica: "Todas as cartas.", status: "neutro" },
              { expr: "P = 13/52 = 1/4 = 25%", explica: "Simplifiquei por 13.", status: "ok" },
            ],
            fatorada: "P(copas) = 1/4 = 25%",
          },
          destaque: "P = 25%.",
        },
      },
      {
        texto: "Dois eventos independentes seguidos: multiplique as probabilidades.",
        exemploReal: {
          contexto: "Jogar uma moeda duas vezes. P de sair cara nas DUAS?",
          visualMat: {
            tipo: "trinomioPassoAPasso",
            trinomio: "P(cara e cara)",
            passos: [
              { expr: "P(cara) = 1/2", explica: "Em cada jogada.", status: "neutro" },
              { expr: "P = 1/2 · 1/2", explica: "Eventos independentes → multiplica.", status: "neutro" },
              {
                expr: "P = 1/4 = 25%",
                explica: "",
                status: "ok",
                professor:
                  "Os quatro resultados possíveis são (cara, cara), (cara, coroa), (coroa, cara) e (coroa, coroa). Só um deles é 'cara nas duas': 1 em 4. A multiplicação apenas resume essa contagem.",
              },
            ],
            fatorada: "P = 1/4 = 25%",
          },
          destaque: "Independentes: multiplique.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "🤝 Nós fazemos: urna com 4 bolas — 2 azuis e 2 vermelhas. Qual P(azul)?",
    resposta: "1/2 = 50%",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "2 azuis + 2 vermelhas",
      passos: [
        { expr: "t = 4", explica: "Total.", status: "neutro" },
        { expr: "f = 2", explica: "Azuis.", status: "neutro" },
        { expr: "P = 2/4 = 1/2 = 50%", explica: "Simplifiquei.", status: "ok" },
      ],
      fatorada: "P(azul) = 1/2",
    },
    passos: ["Conte o total (4).", "Conte os favoráveis (2).", "P = 2/4 = 1/2 = 50%."],
  },
  momento06_praticaGuiada: {
    enunciado: "💪 Você faz: num dado, qual a probabilidade de sair número ÍMPAR?",
    dica: "Ímpares: 1, 3 e 5.",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Dado: {1, 2, 3, 4, 5, 6}",
      passos: [
        { expr: "f = 3 (1, 3, 5)", explica: "", status: "neutro" },
        { expr: "P = 3/6 = 1/2", explica: "", status: "ok" },
      ],
      fatorada: "P(ímpar) = 1/2",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "P(ímpar) =",
      opcoes: [{ nome: "1/2" }, { nome: "1/6" }, { nome: "1/3" }],
      respostaCerta: "1/2",
      feedbackAcerto: "🎯 3 em 6.",
      feedbackErro: "São TRÊS ímpares (1, 3, 5) em 6 faces: 3/6 = 1/2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Urna com 3 bolas verdes e 7 azuis. Qual P(verde)?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "3 verdes + 7 azuis = 10 bolas",
      passos: [
        { expr: "t = 10", explica: "Total de bolas.", status: "neutro" },
        { expr: "P = 3/10 = 30%", explica: "", status: "ok" },
      ],
      fatorada: "P(verde) = 3/10",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "P(verde) =",
      opcoes: [{ nome: "3/10" }, { nome: "7/10" }, { nome: "3/7" }],
      respostaCerta: "3/10",
      feedbackAcerto: "🎯 favoráveis ÷ total.",
      feedbackErro: "3/7 compara verde com azul. O denominador é o TOTAL: 10.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "🌎 Na vida real: uma rifa tem 200 números e 5 são premiados. Você comprou 1 número.",
    problema: "Qual a probabilidade de você ganhar algum prêmio?",
    visualMat: {
      tipo: "trinomioPassoAPasso",
      trinomio: "Rifa: 200 números, 5 premiados",
      passos: [
        { expr: "f = 5, t = 200", explica: "Favoráveis e possíveis.", status: "neutro" },
        { expr: "P = 5/200", explica: "", status: "neutro" },
        { expr: "P = 1/40 = 0,025 = 2,5%", explica: "Dividi numerador e denominador por 5.", status: "ok" },
        {
          expr: "P(não ganhar) = 1 − 0,025 = 97,5%",
          explica: "Evento complementar.",
          status: "ok",
          professor:
            "Comparar as duas probabilidades ajuda a decidir: 2,5% de ganhar significa que, em média, é preciso comprar cerca de 40 números para esperar 1 prêmio.",
        },
      ],
      fatorada: "P(ganhar) = 1/40 = 2,5%",
    },
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "P de ganhar:",
      opcoes: [{ nome: "1/40" }, { nome: "5/100" }, { nome: "1/5" }],
      respostaCerta: "1/40",
      feedbackAcerto: "🎯 5/200 simplificado.",
      feedbackErro: "5/200 dividido por 5 dá 1/40, que é 2,5%.",
    },
  },
  momento09_revisao: {
    pontos: [
      "P = casos favoráveis ÷ casos possíveis.",
      "O denominador é sempre o TOTAL.",
      "0 ≤ P ≤ 1; × 100 vira porcentagem.",
      "P(não ocorrer) = 1 − P(ocorrer).",
      "Eventos independentes seguidos: multiplique as probabilidades.",
    ],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Moeda: P(cara)", opcoes: ["1/2", "1/4", "1"], correta: 0, feedbackAcerto: "🎉 1 em 2.", feedbackErro: "A moeda tem 2 faces: 1/2." },
      { pergunta: "Dado: P(6)", opcoes: ["1/6", "1/2", "1/3"], correta: 0, feedbackAcerto: "🎉 1 em 6.", feedbackErro: "Só uma face é 6, em 6 faces." },
      { pergunta: "Se P(chover) = 40%, P(não chover) =", opcoes: ["60%", "40%", "140%"], correta: 0, feedbackAcerto: "🎉 100 − 40.", feedbackErro: "Complementar: 100% − 40% = 60%." },
      { pergunta: "Urna 5 brancas e 5 pretas: P(preta)", opcoes: ["1/2", "1/5", "5/5"], correta: 0, feedbackAcerto: "🎉 5/10.", feedbackErro: "5 favoráveis em 10 bolas." },
      { pergunta: "Duas moedas: P(cara nas duas)", opcoes: ["1/4", "1/2", "1"], correta: 0, feedbackAcerto: "🎉 1/2 · 1/2.", feedbackErro: "Multiplique: 1/2 · 1/2 = 1/4." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Experimento da moeda",
    materiais: ["1 moeda", "Papel"],
    passos: [
      "Antes de começar, escreva a probabilidade prevista de cara (1/2 = 50%).",
      "Jogue a moeda 30 vezes e anote os resultados.",
      "Compare a porcentagem obtida com os 50% previstos e converse: por que não dá exatamente igual?",
    ],
    registro: "📸 Foto da tabela de resultados.",
  },
  recompensa: { xp: 175, moedas: 90 },
};

import type { AulaV4 } from "../../types";

export const aula07_missao: AulaV4 = {
  slug: "u1-07-missao",
  titulo: "Missão do Laboratório — Cientista dos Números",
  iconeTrilha: "🏅",
  bncc: ["EF06MA01", "EF06MA02", "EF06MA03"],
  duracaoMin: 25,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Formatura do Laboratório",
    historia:
      "{NOME}, hoje é a MISSÃO. Use TUDO da Unidade 1: ler bilhões, comparar por casa, arredondar, localizar naturais na reta, entender sistemas de numeração e resolver problemas.",
  },

  momento02_exploracao: {
    instrucao: "Cheque suas ferramentas antes da missão.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "🧰 Ferramentas da Unidade 1",
        cabecalhos: ["Ferramenta", "Serve pra…"],
        linhas: [
          { rotulo: "Classes", valores: ["Classes", "Ler bilhões"] },
          { rotulo: "Cmp", valores: ["Casas de valor", "Comparar/ordenar"] },
          { rotulo: "Rd", valores: ["Regra do 5", "Arredondar"] },
          { rotulo: "Rt", valores: ["Reta numérica", "Localizar/ordenar naturais"] },
          { rotulo: "SND", valores: ["Valor posicional", "Ler e decompor"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Cientista trabalha assim: HIPÓTESE → TESTE → CONCLUSÃO.",
    pista: "Antes de responder, pense qual ferramenta usar.",
    revelacao: "Cientistas não chutam: verificam.",
  },

  momento04_explicacao: {
    titulo: "Estratégias em ação",
    etapas: [
      {
        texto: "Números grandes: separe em CLASSES.",
        exemploReal: {
          contexto: "1.500.000.000 → 1 · 500 · 000 · 000.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Bilhão", "Milhão", "Milhar", "Unidade"],
            linhas: [{ rotulo: "Blocos", valores: ["1", "500", "000", "000"] }],
          },
          destaque: "Lê-se: um bilhão e quinhentos milhões.",
        },
      },
      {
        texto: "Arredondar: a reta mostra pra que lado o número está mais perto.",
        exemploReal: {
          contexto: "4.762 → milhar mais próximo?",
          visualMat: {
            tipo: "retaNumerica",
            min: 4000,
            max: 5000,
            passo: 100,
            destacar: [
              { valor: 4000, rotulo: "4.000" },
              { valor: 4500, rotulo: "4.500 (meio)", cor: "#f59e0b" },
              { valor: 4762, rotulo: "4.762", cor: "#10b981" },
              { valor: 5000, rotulo: "5.000" },
            ],
          },
          destaque: "Passou do meio → 5.000.",
        },
      },
      {
        texto: "Números naturais em uma reta com escala constante.",
        exemploReal: {
          contexto: "Ordenar: 50 · 20 · 0 · 10 · 40.",
          visualMat: {
            tipo: "retaNumerica",
            min: 0,
            max: 50,
            passo: 10,
            destacar: [
              { valor: 10, rotulo: "10", cor: "#ef4444" },
              { valor: 20, rotulo: "20", cor: "#f97316" },
              { valor: 0, rotulo: "0" },
              { valor: 40, rotulo: "40", cor: "#22c55e" },
              { valor: 50, rotulo: "50", cor: "#0ea5e9" },
            ],
          },
          destaque: "Da esquerda pra direita = do menor pro maior.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Escreva 1.500.000.000 por extenso.",
    resposta: "Um bilhão e quinhentos milhões",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Bilhão", "Milhão", "Milhar", "Unidade"],
      linhas: [{ rotulo: "Blocos", valores: ["1", "500", "000", "000"] }],
    },
    passos: ["Separe: 1 · 500 · 000 · 000.", "1 bilhão + 500 milhões."],
  },

  momento06_praticaGuiada: {
    enunciado: "Arredonde 4.762 para o milhar.",
    dica: "Dígito à direita da casa dos milhares (centena = 7).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.000" }, { nome: "4.000" }, { nome: "4.700" }],
      respostaCerta: "5.000",
      feedbackAcerto: "🎯 7 ≥ 5 → sobe.",
      feedbackErro: "7 ≥ 5 → sobe pro próximo milhar.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Qual é o valor do algarismo 7 em 7.205?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [
        { nome: "7.000" },
        { nome: "700" },
        { nome: "70" },
        { nome: "7" },
      ],
      respostaCerta: "7.000",
      feedbackAcerto: "🎯 O 7 ocupa a unidade de milhar.",
      feedbackErro: "7.205 = 7.000 + 200 + 5.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma biblioteca tinha 1.800 livros, recebeu 420 e emprestou 350.",
    problema: "Quantos livros permaneceram na biblioteca?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.870 livros" }, { nome: "2.570 livros" }, { nome: "1.030 livros" }, { nome: "2.220 livros" }],
      respostaCerta: "1.870 livros",
      feedbackAcerto: "🎯 1.800 + 420 − 350 = 1.870.",
      feedbackErro: "Primeiro some os recebidos; depois retire os emprestados.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Você virou Cientista dos Números do Laboratório.",
      "Ferramentas dominadas: bilhões, comparação, arredondamento, reta, valor posicional e resolução de problemas.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3.000.000.000 é igual a:", opcoes: ["3 bilhões", "3 milhões", "300 milhões"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9 zeros = bilhão." },
      { pergunta: "Em 4.305, o algarismo 3 vale:", opcoes: ["300", "3.000", "30", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "O 3 ocupa a centena." },
      { pergunta: "Arredondar 78.499 para o milhar:", opcoes: ["78.000", "79.000", "80.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Centena = 4 < 5." },
      { pergunta: "25 caixas com 12 livros totalizam:", opcoes: ["300", "250", "37", "2.500"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "25 × 12 = 300." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma de Cientista dos Números",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça seu diploma: 'Cientista dos Números — Unidade 1'.",
      "Escreva 3 exemplos reais: um número grande, um arredondamento e um problema resolvido.",
      "Mostre pra família.",
    ],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Cientista dos Números" },
};

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
      "{NOME}, hoje é a MISSÃO. Use TUDO da Unidade 1: ler bilhões, comparar por casa, arredondar na reta, localizar negativos, oposto e módulo.",
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
          { rotulo: "Rt", valores: ["Reta numérica", "Localizar/ordenar"] },
          { rotulo: "Mod", valores: ["Módulo |x|", "Distância ao zero"] },
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
        texto: "Negativos e positivos numa reta só.",
        exemploReal: {
          contexto: "Ordenar: −5 · 2 · 0 · −1 · 4.",
          visualMat: {
            tipo: "retaNumerica",
            min: -6,
            max: 6,
            passo: 1,
            destacar: [
              { valor: -5, rotulo: "−5", cor: "#ef4444" },
              { valor: -1, rotulo: "−1", cor: "#f97316" },
              { valor: 0, rotulo: "0" },
              { valor: 2, rotulo: "2", cor: "#22c55e" },
              { valor: 4, rotulo: "4", cor: "#0ea5e9" },
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
    enunciado: "Ordene do menor pro maior: −5 · 2 · 0 · −1 · 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Ordem correta:",
      opcoes: [
        { nome: "−5 · −1 · 0 · 2 · 4" },
        { nome: "0 · −1 · −5 · 2 · 4" },
        { nome: "4 · 2 · 0 · −1 · −5" },
      ],
      respostaCerta: "−5 · −1 · 0 · 2 · 4",
      feedbackAcerto: "🎯 Esquerda → direita.",
      feedbackErro: "Ordem da reta: esquerda → direita.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um submarino desce até −180 m. Depois SOBE 120 m.",
    problema: "Em qual profundidade fica agora? (−180 + 120)",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "−60 m" }, { nome: "−300 m" }, { nome: "60 m" }],
      respostaCerta: "−60 m",
      feedbackAcerto: "🎯 −180 + 120 = −60.",
      feedbackErro: "Subir 120 desde −180 → −60.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Você virou Cientista dos Números do Laboratório.",
      "Ferramentas travadas: bilhões, comparação, arredondamento, reta, negativos, módulo.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3.000.000.000 é igual a:", opcoes: ["3 bilhões", "3 milhões", "300 milhões"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9 zeros = bilhão." },
      { pergunta: "|−12| vale:", opcoes: ["12", "−12", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Módulo é sempre ≥ 0." },
      { pergunta: "Arredondar 78.499 para o milhar:", opcoes: ["78.000", "79.000", "80.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Centena = 4 < 5." },
      { pergunta: "Maior entre −3, 0, −10, 2:", opcoes: ["2", "0", "−3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 fica mais à direita." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma de Cientista dos Números",
    materiais: ["Papel, canetas"],
    passos: [
      "Faça seu diploma: 'Cientista dos Números — Unidade 1'.",
      "Escreva 3 exemplos reais (bilhão, negativo, arredondado).",
      "Mostre pra família.",
    ],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Cientista dos Números" },
};

import type { AulaV4 } from "../../types";

export const aula02_divisores: AulaV4 = {
  slug: "u3-02-divisores",
  titulo: "Divisores e critérios de divisibilidade",
  iconeTrilha: "🧩",
  bncc: ["EF06MA05"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Quem divide certinho?",
    historia: "{NOME}, DIVISOR é o oposto do múltiplo: é quem cabe EXATO em um número. Existem truques ('critérios') pra descobrir rapidinho.",
  },

  momento02_exploracao: {
    instrucao: "d é divisor de n se n ÷ d dá resto ZERO.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Critérios de divisibilidade (decore!)",
        cabecalhos: ["Divisor", "Regra"],
        linhas: [
          { rotulo: "2", valores: ["2", "Termina em 0, 2, 4, 6, 8 (par)"] },
          { rotulo: "3", valores: ["3", "Soma dos algarismos é múltiplo de 3"] },
          { rotulo: "4", valores: ["4", "Últimos 2 algarismos formam múltiplo de 4"] },
          { rotulo: "5", valores: ["5", "Termina em 0 ou 5"] },
          { rotulo: "6", valores: ["6", "Divisível por 2 E por 3"] },
          { rotulo: "9", valores: ["9", "Soma dos algarismos é múltiplo de 9"] },
          { rotulo: "10", valores: ["10", "Termina em 0"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "234 é divisível por 3?",
    pista: "Some os algarismos: 2+3+4 = 9.",
    revelacao: "9 é múltiplo de 3 → SIM, 234 é divisível por 3.",
  },

  momento04_explicacao: {
    titulo: "Aplicando os critérios",
    etapas: [
      {
        texto: "Divisível por 2: par.",
        exemploReal: {
          contexto: "578 é divisível por 2?",
          destaque: "Termina em 8 (par) → SIM.",
        },
      },
      {
        texto: "Divisível por 3: soma dos algarismos.",
        exemploReal: {
          contexto: "1.245 é divisível por 3?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Algarismo", "1", "2", "4", "5", "Soma"],
            linhas: [{ rotulo: "1.245", valores: ["Valor", "1", "2", "4", "5", "12"] }],
          },
          destaque: "12 é múltiplo de 3 → SIM.",
        },
      },
      {
        texto: "Todo divisor DIVIDE, todo múltiplo É DIVIDIDO.",
        exemploReal: {
          contexto: "3 é divisor de 12. 12 é múltiplo de 3.",
          destaque: "São duas faces do mesmo par.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Liste todos os divisores de 24.",
    resposta: "1, 2, 3, 4, 6, 8, 12, 24",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["24 ÷", "Resto", "É divisor?"],
      linhas: [
        { rotulo: "1", valores: ["1", "0", "✅"] },
        { rotulo: "2", valores: ["2", "0", "✅"] },
        { rotulo: "3", valores: ["3", "0", "✅"] },
        { rotulo: "4", valores: ["4", "0", "✅"] },
        { rotulo: "5", valores: ["5", "4", "❌"] },
        { rotulo: "6", valores: ["6", "0", "✅"] },
        { rotulo: "8", valores: ["8", "0", "✅"] },
        { rotulo: "12", valores: ["12", "0", "✅"] },
        { rotulo: "24", valores: ["24", "0", "✅"] },
      ],
    },
    passos: ["Teste 1, 2, 3, … até 24.", "Marque os que dão resto 0."],
  },

  momento06_praticaGuiada: {
    enunciado: "126 é divisível por 9?",
    dica: "Soma: 1+2+6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim" }, { nome: "Não" }],
      respostaCerta: "Sim",
      feedbackAcerto: "🎯 1+2+6 = 9 → múltiplo de 9.",
      feedbackErro: "Soma dos algarismos = 9.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Qual NÃO é divisor de 60?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "6" }, { nome: "10" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 60 ÷ 7 tem resto 4.",
      feedbackErro: "6 e 10 dividem exato; 7 não.",
    },
  },

  momento08_aplicacao: {
    contexto: "Preciso arrumar 48 cadeiras em fileiras iguais.",
    problema: "Quantas opções DIFERENTES de fileiras existem?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "10 opções" }, { nome: "5 opções" }, { nome: "8 opções" }],
      respostaCerta: "10 opções",
      feedbackAcerto: "🎯 Divisores de 48: 1,2,3,4,6,8,12,16,24,48 → 10.",
      feedbackErro: "Conte todos os divisores de 48.",
    },
  },

  momento09_revisao: {
    pontos: ["Divisor = resto 0.", "Use os critérios pra ir rápido.", "Divisores são FINITOS; múltiplos infinitos."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "180 é divisível por 3?", opcoes: ["Sim", "Não"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1+8+0 = 9." },
      { pergunta: "Divisores de 12:", opcoes: ["1,2,3,4,6,12", "1,2,3,4", "2,3,4,6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Inclua 1 e o próprio." },
      { pergunta: "7 é divisor de 100?", opcoes: ["Não", "Sim"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "100 ÷ 7 dá resto 2." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Divisores em casa",
    materiais: ["Objetos: pedras, moedas"],
    passos: ["Pegue 18 objetos.", "Descubra todas as fileiras iguais possíveis.", "Escreva os divisores de 18."],
    registro: "📸 Foto das fileiras.",
  },
  recompensa: { xp: 150, moedas: 80 },
};

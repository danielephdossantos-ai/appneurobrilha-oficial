import type { AulaV4 } from "../../types";

export const aula04_mmcMdc: AulaV4 = {
  slug: "u3-04-mmc-mdc",
  titulo: "MMC e MDC — encontrar em comum",
  iconeTrilha: "🔗",
  bncc: ["EF06MA06"],
  duracaoMin: 26,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Coincidências matemáticas",
    historia: "{NOME}, quando 2 ônibus saem juntos e passam em horários diferentes, QUANDO se reencontram? Isso é MMC. Quando queremos DIVIDIR 2 quantidades em pedaços iguais, é MDC.",
  },

  momento02_exploracao: {
    instrucao: "MMC = Mínimo Múltiplo Comum. MDC = Máximo Divisor Comum.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Diferença",
        cabecalhos: ["Sigla", "O que é", "Quando usar"],
        linhas: [
          { rotulo: "MMC", valores: ["MMC", "Menor múltiplo comum não-nulo", "Reencontro, ciclos, frações"] },
          { rotulo: "MDC", valores: ["MDC", "Maior divisor comum", "Simplificar, dividir em pedaços iguais"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "MMC de 4 e 6?",
    pista: "Múltiplos de 4: 4, 8, 12, 16… De 6: 6, 12, 18… Primeiro comum?",
    revelacao: "MMC(4, 6) = 12.",
  },

  momento04_explicacao: {
    titulo: "Duas maneiras",
    etapas: [
      {
        texto: "Método 1: LISTAR múltiplos.",
        exemploReal: {
          contexto: "MMC(6, 8)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Número", "Múltiplos"],
            linhas: [
              { rotulo: "6", valores: ["6", "6, 12, 18, 24, 30…"] },
              { rotulo: "8", valores: ["8", "8, 16, 24, 32…"] },
            ],
          },
          destaque: "Primeiro comum: 24. MMC(6, 8) = 24.",
        },
      },
      {
        texto: "Método 2: FATORAÇÃO. Pegue TODOS os primos, cada um no MAIOR expoente.",
        exemploReal: {
          contexto: "MMC(12, 18) via fatoração",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Número", "Fatoração"],
            linhas: [
              { rotulo: "12", valores: ["12", "2² × 3"] },
              { rotulo: "18", valores: ["18", "2 × 3²"] },
              { rotulo: "MMC", valores: ["MMC", "2² × 3² = 36"] },
              { rotulo: "MDC", valores: ["MDC", "2 × 3 = 6"] },
            ],
          },
          destaque: "MMC: primos que aparecem com MAIOR expoente. MDC: primos COMUNS com MENOR expoente.",
        },
      },
      {
        texto: "Se um número é primo com o outro (MDC = 1), o MMC é o PRODUTO.",
        exemploReal: {
          contexto: "MMC(5, 7)",
          destaque: "5 e 7 não têm divisores em comum → MMC = 5×7 = 35.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Calcule MMC(10, 15) e MDC(10, 15).",
    resposta: "MMC = 30 · MDC = 5",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Número", "Fatoração"],
      linhas: [
        { rotulo: "10", valores: ["10", "2 × 5"] },
        { rotulo: "15", valores: ["15", "3 × 5"] },
        { rotulo: "MMC", valores: ["MMC", "2 × 3 × 5 = 30"] },
        { rotulo: "MDC", valores: ["MDC", "5 (comum)"] },
      ],
    },
    passos: ["Fatore os dois.", "MMC: todos os primos, maior expoente.", "MDC: só comuns, menor expoente."],
  },

  momento06_praticaGuiada: {
    enunciado: "MMC(4, 5)?",
    dica: "Primos entre si.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "9" }, { nome: "1" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 4 × 5 = 20.",
      feedbackErro: "MDC = 1 → MMC é o produto.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "MDC(24, 36)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "12" }, { nome: "6" }, { nome: "72" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 24 = 2³·3, 36 = 2²·3² → MDC = 2²·3 = 12.",
      feedbackErro: "Comuns com menor expoente.",
    },
  },

  momento08_aplicacao: {
    contexto: "Ônibus A passa de 15 em 15 min, ônibus B de 20 em 20 min. Saíram juntos às 8h.",
    problema: "Quando se reencontram?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9h" }, { nome: "8h30" }, { nome: "9h15" }],
      respostaCerta: "9h",
      feedbackAcerto: "🎯 MMC(15, 20) = 60 min = 1h. 8h + 1h = 9h.",
      feedbackErro: "Precisam do MMC dos intervalos.",
    },
  },

  momento09_revisao: {
    pontos: ["MMC: reencontros e ciclos.", "MDC: dividir em partes iguais e simplificar.", "Use fatoração pra ir rápido."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "MMC(2, 3):", opcoes: ["6", "5", "1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Primos entre si: produto." },
      { pergunta: "MDC(8, 12):", opcoes: ["4", "2", "24"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Comum máximo: 4." },
      { pergunta: "MMC(6, 9):", opcoes: ["18", "54", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2 × 3² = 18." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "MMC do dia a dia",
    materiais: ["Papel"],
    passos: ["Pense em 2 rotinas que se repetem (lixo passa dia sim/não, feira semanal…).", "Ache o MMC delas."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 180, moedas: 95 },
};

import type { AulaV4 } from "../../types";

export const aula03_fracaoDecimal: AulaV4 = {
  slug: "u5-03-fracao-decimal",
  titulo: "Fração ↔ Decimal",
  iconeTrilha: "🔁",
  bncc: ["EF06MA08"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Trocando de roupa",
    historia: "{NOME}, todo decimal pode virar fração e vice-versa. É a MESMA quantidade em roupas diferentes.",
  },

  momento02_exploracao: {
    instrucao: "Duas conversões.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Regras de conversão",
        cabecalhos: ["Direção", "Regra"],
        linhas: [
          { rotulo: "Dec→Frac", valores: ["Decimal → fração", "Numerador = número sem vírgula; denominador = 10ⁿ (n = casas decimais)"] },
          { rotulo: "Frac→Dec", valores: ["Fração → decimal", "Numerador ÷ denominador"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "0,75 em fração?",
    pista: "2 casas → /100. Simplifique.",
    revelacao: "75/100 = 3/4.",
  },

  momento04_explicacao: {
    titulo: "Convertendo",
    etapas: [
      {
        texto: "Decimal → fração: 1 casa → /10; 2 casas → /100; 3 casas → /1000.",
        exemploReal: {
          contexto: "0,6 · 0,25 · 0,125",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Decimal", "Fração", "Simplificada"],
            linhas: [
              { rotulo: "0,6", valores: ["0,6", "6/10", "3/5"] },
              { rotulo: "0,25", valores: ["0,25", "25/100", "1/4"] },
              { rotulo: "0,125", valores: ["0,125", "125/1000", "1/8"] },
            ],
          },
          destaque: "Sempre simplifique.",
        },
      },
      {
        texto: "Fração → decimal: divida (com vírgula).",
        exemploReal: {
          contexto: "3/4",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Conta"],
            linhas: [
              { rotulo: "1", valores: ["3 ÷ 4", "0,75"] },
            ],
          },
          destaque: "3/4 = 0,75.",
        },
      },
      {
        texto: "Algumas frações dão decimais INFINITOS periódicos (1/3 = 0,333…). São as dízimas.",
        exemploReal: {
          contexto: "1/3",
          destaque: "1 ÷ 3 = 0,333… → indica 0,3̄.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Converta 0,45 em fração irredutível.",
    resposta: "9/20",
    passos: ["0,45 → 45/100.", "MDC(45,100) = 5.", "45/100 = 9/20."],
  },

  momento06_praticaGuiada: {
    enunciado: "1/2 em decimal?",
    dica: "1 ÷ 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,5" }, { nome: "0,2" }, { nome: "0,12" }],
      respostaCerta: "0,5",
      feedbackAcerto: "🎯 1 ÷ 2 = 0,5.",
      feedbackErro: "Divida numerador pelo denominador.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "0,8 em fração irredutível?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4/5" }, { nome: "8/10" }, { nome: "1/8" }],
      respostaCerta: "4/5",
      feedbackAcerto: "🎯 8/10 = 4/5.",
      feedbackErro: "8/10 dá pra simplificar.",
    },
  },

  momento08_aplicacao: {
    contexto: "Um desconto: 1/4 do preço fora.",
    problema: "Que decimal representa 1/4 fora?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,25" }, { nome: "0,4" }, { nome: "0,14" }],
      respostaCerta: "0,25",
      feedbackAcerto: "🎯 1 ÷ 4 = 0,25.",
      feedbackErro: "25%.",
    },
  },

  momento09_revisao: {
    pontos: ["Decimal → fração: /10ⁿ.", "Fração → decimal: divide.", "Simplifique sempre."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/10 =", opcoes: ["0,1", "0,01", "1,0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1÷10." },
      { pergunta: "0,25 = ", opcoes: ["1/4", "1/25", "2/5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "25/100." },
      { pergunta: "3/5 =", opcoes: ["0,6", "0,35", "0,53"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3÷5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Duas roupas",
    materiais: ["Papel"],
    passos: ["Escreva 3 frações e 3 decimais.", "Converta um pro outro."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};

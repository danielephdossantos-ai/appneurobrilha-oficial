import type { AulaV4 } from "../../types";

export const aula05_decimaisMilesimos: AulaV4 = {
  slug: "u5-05-decimais-milesimos",
  titulo: "Decimais até milésimos",
  iconeTrilha: "🔢",
  bncc: ["EF05MA05"],
  duracaoMin: 22,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Depois da vírgula",
    historia: "{NOME}, depois da vírgula moram três novas casas: DÉCIMOS (1/10), CENTÉSIMOS (1/100) e MILÉSIMOS (1/1000).",
  },
  momento02_exploracao: {
    instrucao: "Casas decimais.",
    cenas: [
      { tipo: "texto", texto: "0,1 = 1/10 · 0,01 = 1/100 · 0,001 = 1/1000.", destaque: true },
      { tipo: "texto", texto: "0,254 = 2 décimos + 5 centésimos + 4 milésimos." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escrever 3/100 em decimal?",
    pista: "Duas casas depois da vírgula.",
    revelacao: "0,03.",
  },
  momento04_explicacao: {
    titulo: "Ler decimais",
    etapas: [
      { texto: "0,7 = sete décimos = 7/10." },
      { texto: "0,45 = quarenta e cinco centésimos = 45/100." },
      { texto: "0,125 = cento e vinte e cinco milésimos = 125/1000 = 1/8." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 8/1000 em decimal.",
    resposta: "0,008",
    passos: ["Milésimo = 3 casas.", "8 na 3ª casa → 0,008."],
  },
  momento06_praticaGuiada: {
    enunciado: "Qual maior: 0,3 ou 0,25?",
    dica: "Iguale as casas: 0,30 vs 0,25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,3" }, { nome: "0,25" }, { nome: "iguais" }],
      respostaCerta: "0,3",
      feedbackAcerto: "🎯 0,30 > 0,25.",
      feedbackErro: "0,3 = 0,30 > 0,25.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Escreva 47/100 em decimal.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "0,47" }, { nome: "4,7" }, { nome: "0,047" }],
      respostaCerta: "0,47",
      feedbackAcerto: "🎯",
      feedbackErro: "Centésimo = 2 casas.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma corrida marcou 12,435 segundos.",
    problema: "Qual valor é o milésimo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "3" }, { nome: "4" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 3ª casa depois da vírgula.",
      feedbackErro: "12,4|3|5 → milésimo é 5.",
    },
  },
  momento09_revisao: {
    pontos: ["Casa 1 = décimo. Casa 2 = centésimo. Casa 3 = milésimo.", "Iguale as casas antes de comparar."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3/10 em decimal:", opcoes: ["0,3", "0,03", "3,0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,3." },
      { pergunta: "Maior: 0,5 ou 0,45?", opcoes: ["0,5", "0,45", "iguais"], correta: 0, feedbackAcerto: "🎉 0,50 > 0,45.", feedbackErro: "0,5 > 0,45." },
      { pergunta: "125/1000 em decimal:", opcoes: ["0,125", "1,25", "0,0125"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,125." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Preço no mercado",
    materiais: ["Nota"],
    passos: ["Ache 5 preços com vírgula.", "Diga quem é décimo e quem é centésimo."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};

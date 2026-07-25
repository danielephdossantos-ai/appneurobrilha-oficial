import type { AulaV4 } from "../../types";

export const aula06_operarDecimais: AulaV4 = {
  slug: "u5-06-operar-decimais",
  titulo: "Somar, subtrair e multiplicar decimais",
  iconeTrilha: "➗",
  bncc: ["EF05MA07"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Vírgula alinhada",
    historia: "{NOME}, para somar e subtrair decimais, a regra número 1 é: ALINHE A VÍRGULA. O resto é conta comum.",
  },
  momento02_exploracao: {
    instrucao: "Regras.",
    cenas: [
      { tipo: "texto", texto: "Soma/subtração: vírgula alinhada. Complete com zeros se faltar.", destaque: true },
      { tipo: "texto", texto: "Multiplicação por natural: ignore vírgula, calcule, e coloque a vírgula de volta." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "3,25 + 1,4?",
    pista: "Vira 3,25 + 1,40.",
    revelacao: "4,65.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      { texto: "12,375 + 4,25 → 12,375 + 4,250 = 16,625." },
      { texto: "5,3 − 1,45 → 5,30 − 1,45 = 3,85." },
      { texto: "2,45 × 3 → 245 × 3 = 735 → 7,35 (mesmas 2 casas)." },
    ],
  },
  momento05_modelagem: {
    enunciado: "6,7 + 3,45.",
    resposta: "10,15",
    passos: ["Alinha: 6,70 + 3,45.", "= 10,15."],
  },
  momento06_praticaGuiada: {
    enunciado: "8,3 − 2,75.",
    dica: "8,30.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "5,55" }, { nome: "5,45" }, { nome: "6,55" }],
      respostaCerta: "5,55",
      feedbackAcerto: "🎯",
      feedbackErro: "8,30 − 2,75 = 5,55.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3,15 × 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "12,60" }, { nome: "12,6" }, { nome: "126,0" }],
      respostaCerta: "12,60",
      feedbackAcerto: "🎯 315×4=1.260 → 12,60.",
      feedbackErro: "12,60.",
    },
  },
  momento08_aplicacao: {
    contexto: "Pão R$ 4,75 · leite R$ 5,80 · queijo R$ 12,45.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 23,00" }, { nome: "R$ 22,00" }, { nome: "R$ 23,50" }],
      respostaCerta: "R$ 23,00",
      feedbackAcerto: "🎯",
      feedbackErro: "4,75 + 5,80 + 12,45 = 23,00.",
    },
  },
  momento09_revisao: {
    pontos: ["Alinhe a vírgula.", "Complete casas com zero.", "Mult × natural: casas do produto = casas do fator decimal."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2,4 + 3,58 = ?", opcoes: ["5,98", "5,88", "6,08"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5,98." },
      { pergunta: "10 − 3,25 = ?", opcoes: ["6,75", "6,85", "7,25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6,75." },
      { pergunta: "1,25 × 6 = ?", opcoes: ["7,50", "7,05", "7,25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "7,50." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cofre",
    materiais: ["Moedas"],
    passos: ["Some o que tem no cofre.", "Escreva o total com vírgula."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};

import type { AulaV4 } from "../../types";

export const aula03_capacidade: AulaV4 = {
  slug: "u6-03-capacidade",
  titulo: "Capacidade: L e mL",
  iconeTrilha: "🥤",
  bncc: ["EF05MA19"],
  duracaoMin: 18,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Quanto cabe?",
    historia: "{NOME}, para medir líquidos usamos o LITRO (L). Um litro tem 1.000 mL.",
  },
  momento02_exploracao: {
    instrucao: "Escala.",
    cenas: [{ tipo: "texto", texto: "1 L = 1.000 mL.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "1,5 L em mL?",
    pista: "× 1.000.",
    revelacao: "1.500 mL.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      { texto: "Refrigerante de 2 L = 2.000 mL." },
      { texto: "Copo de 250 mL = 0,25 L." },
    ],
  },
  momento05_modelagem: {
    enunciado: "3.750 mL em L.",
    resposta: "3,75 L",
    passos: ["÷ 1.000.", "= 3,75."],
  },
  momento06_praticaGuiada: {
    enunciado: "0,5 L em mL.",
    dica: "× 1.000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "500 mL" }, { nome: "50 mL" }, { nome: "5.000 mL" }],
      respostaCerta: "500 mL",
      feedbackAcerto: "🎯",
      feedbackErro: "500 mL.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "6 garrafas de 750 mL cada.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Total em L:",
      opcoes: [{ nome: "4,5 L" }, { nome: "4 L" }, { nome: "5 L" }],
      respostaCerta: "4,5 L",
      feedbackAcerto: "🎯 6 × 750 = 4.500 mL.",
      feedbackErro: "4,5 L.",
    },
  },
  momento08_aplicacao: {
    contexto: "Receita pede 1,25 L de leite; tenho 3 caixas de 500 mL.",
    problema: "É suficiente?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Sim, sobra 250 mL" }, { nome: "Não, falta 250 mL" }, { nome: "Exato" }],
      respostaCerta: "Sim, sobra 250 mL",
      feedbackAcerto: "🎯 3×500=1.500; 1.500 − 1.250 = 250.",
      feedbackErro: "Sobra 250 mL.",
    },
  },
  momento09_revisao: {
    pontos: ["L ↔ mL: × ou ÷ 1.000."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2 L = ? mL", opcoes: ["2000", "200", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2.000." },
      { pergunta: "750 mL = ? L", opcoes: ["0,75", "7,5", "75"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "0,75." },
      { pergunta: "3 × 500 mL = ? L", opcoes: ["1,5 L", "15 L", "150 L"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1,5 L." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cozinha",
    materiais: ["Jarro medidor"],
    passos: ["Meça 3 líquidos.", "Anote em mL e L."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 130, moedas: 70 },
};

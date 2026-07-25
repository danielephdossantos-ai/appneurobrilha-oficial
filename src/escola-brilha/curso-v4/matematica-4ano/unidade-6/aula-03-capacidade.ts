import type { AulaV4 } from "../../types";

export const aula03_capacidade: AulaV4 = {
  slug: "u6-03-capacidade",
  titulo: "Capacidade — L e mL",
  iconeTrilha: "🥤",
  bncc: ["EF04MA20", "EF04MA21"],
  duracaoMin: 20,
  metodologias: ["cpa", "rme"],

  momento01_motivacao: {
    titulo: "Quanto cabe?",
    historia:
      "{NOME}, líquidos se medem em litro (L) e mililitro (mL). 1 L = 1.000 mL. Refrigerante em litros; xarope em mL.",
  },
  momento02_exploracao: {
    instrucao: "Conversão.",
    cenas: [
      { tipo: "texto", texto: "1 L = 1.000 mL. Meio L = 500 mL.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como converter?",
    pista: "Mesma regra do kg/g.",
    revelacao: "×1.000 (L→mL) ou ÷1.000 (mL→L).",
  },
  momento04_explicacao: {
    titulo: "Conversões",
    etapas: [
      {
        texto: "2 L = ? mL.",
        exemploReal: {
          contexto: "×1000.",
          destaque: "2 L = 2.000 mL.",
        },
      },
      {
        texto: "750 mL em L.",
        exemploReal: {
          contexto: "÷1000.",
          destaque: "750 mL = 0,75 L.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Uma garrafa tem 1 L e 500 mL.",
    passos: ["1 L = 1.000 mL.", "1.000 + 500 = 1.500 mL."],
    resposta: "1.500 mL",
  },
  momento06_praticaGuiada: {
    enunciado: "3 L = ? mL",
    dica: "×1000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.000" }, { nome: "300" }, { nome: "30" }],
      respostaCerta: "3.000",
      feedbackAcerto: "🎯 3.000 mL.",
      feedbackErro: "×1000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "1.250 mL = ? L",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1,25" }, { nome: "12,5" }, { nome: "0,125" }],
      respostaCerta: "1,25",
      feedbackAcerto: "🎯 1,25 L.",
      feedbackErro: "÷1000.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma jarra tem 2 L. Enchi 3 copos de 250 mL cada.",
    problema: "Quanto sobrou (em mL)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1.250 mL" }, { nome: "1.500 mL" }, { nome: "750 mL" }],
      respostaCerta: "1.250 mL",
      feedbackAcerto: "🎯 1.250 mL.",
      feedbackErro: "3×250=750 mL usados. 2.000−750=1.250.",
    },
  },
  momento09_revisao: {
    pontos: ["1 L = 1.000 mL."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5 L = ? mL", opcoes: ["5.000", "500", "50"], correta: 0, feedbackAcerto: "🎉 5.000.", feedbackErro: "×1000." },
      { pergunta: "2.000 mL = ? L", opcoes: ["2", "20", "0,2"], correta: 0, feedbackAcerto: "🎉 2.", feedbackErro: "÷1000." },
      { pergunta: "Meio L = ? mL", opcoes: ["500", "50", "5.000"], correta: 0, feedbackAcerto: "🎉 500.", feedbackErro: "1000÷2." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Enchendo copos",
    materiais: ["Copo medidor", "Água"],
    passos: ["Meça 3 copos de tamanhos diferentes.", "Anote em mL e em L."],
    registro: "📸 Foto do resultado.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

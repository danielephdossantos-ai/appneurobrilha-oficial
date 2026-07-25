import type { AulaV4 } from "../../types";

export const aula02_massa: AulaV4 = {
  slug: "u6-02-massa",
  titulo: "Massa — kg e g",
  iconeTrilha: "⚖️",
  bncc: ["EF04MA20", "EF04MA21"],
  duracaoMin: 20,
  metodologias: ["cpa", "rme"],

  momento01_motivacao: {
    titulo: "Peso e balança",
    historia:
      "{NOME}, a massa (o quanto algo 'pesa') se mede em quilograma (kg) e grama (g). 1 kg = 1.000 g. Uma criança pesa em kg, uma bala em g.",
  },
  momento02_exploracao: {
    instrucao: "Conversão.",
    cenas: [
      { tipo: "texto", texto: "1 kg = 1.000 g. Meio kg = 500 g. Um quarto de kg = 250 g.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como transformar kg em g?",
    pista: "Pense em zeros.",
    revelacao: "×1.000 pra descer. ÷1.000 pra subir.",
  },
  momento04_explicacao: {
    titulo: "Conversões",
    etapas: [
      {
        texto: "3 kg em g.",
        exemploReal: {
          contexto: "×1000.",
          destaque: "3 kg = 3.000 g.",
        },
      },
      {
        texto: "1.500 g em kg.",
        exemploReal: {
          contexto: "÷1000.",
          destaque: "1.500 g = 1,5 kg = 1 kg e 500 g.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Uma sacola tem 2 kg e 300 g. Isso é quantos gramas?",
    passos: ["2 kg = 2.000 g.", "2.000 + 300 = 2.300 g."],
    resposta: "2.300 g",
  },
  momento06_praticaGuiada: {
    enunciado: "5 kg = ? g",
    dica: "×1000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.000" }, { nome: "500" }, { nome: "50" }],
      respostaCerta: "5.000",
      feedbackAcerto: "🎯 5.000 g.",
      feedbackErro: "×1000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "2.500 g = ? kg",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2,5" }, { nome: "25" }, { nome: "0,25" }],
      respostaCerta: "2,5",
      feedbackAcerto: "🎯 2,5 kg.",
      feedbackErro: "÷1000 → 2,5.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma cesta pesa 3 kg. Adicionei 750 g de frutas.",
    problema: "Peso total (em kg):",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3,75 kg" }, { nome: "3,075 kg" }, { nome: "3,5 kg" }],
      respostaCerta: "3,75 kg",
      feedbackAcerto: "🎯 3,75 kg.",
      feedbackErro: "750 g = 0,75 kg. 3+0,75=3,75.",
    },
  },
  momento09_revisao: {
    pontos: ["1 kg = 1.000 g."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 kg = ? g", opcoes: ["4.000", "400", "40"], correta: 0, feedbackAcerto: "🎉 4.000.", feedbackErro: "×1000." },
      { pergunta: "3.000 g = ? kg", opcoes: ["3", "30", "0,3"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "÷1000." },
      { pergunta: "Meio kg = ? g", opcoes: ["500", "50", "5.000"], correta: 0, feedbackAcerto: "🎉 500.", feedbackErro: "1000÷2=500." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Balança da Cozinha",
    materiais: ["Balança"],
    passos: ["Pese 3 alimentos.", "Anote em g e em kg."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

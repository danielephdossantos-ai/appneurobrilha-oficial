import type { AulaV4 } from "../../types";

export const aula02_massa: AulaV4 = {
  slug: "u5-02-massa",
  titulo: "Gramas e Quilos",
  iconeTrilha: "⚖️",
  bncc: ["EF03MA19"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Pesado ou leve?",
    historia: "Uma maçã ≈ 200 g. Uma criança ≈ 30 kg. 1 kg = 1000 g.",
  },
  momento02_exploracao: {
    instrucao: "Unidades de massa.",
    cenas: [
      { tipo: "texto", texto: "1 kg = 1000 g." },
      { tipo: "texto", texto: "Balança mede em g ou kg.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como converter kg em g?",
    pista: "Multiplique por 1000.",
    revelacao: "2 kg = 2000 g. 500 g = meio kg.",
  },
  momento04_explicacao: {
    titulo: "Do quilo ao grama",
    etapas: [
      {
        texto: "3 kg tem quantos gramas?",
        exemploReal: {
          contexto: "1 kg = 1000 g.",
          destaque: "3 kg = 3000 g.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [3, 1000],
            resultado: 3000,
            passos: [{ coluna: "U", fala: "3 × 1000 = 3000 gramas.", digito: 0 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "1500 g = ? kg",
    passos: ["1000 g = 1 kg.", "Sobra 500 g = meio kg.", "1 kg e 500 g."],
    resposta: "1 kg e 500 g",
    casasValor: { numero: 1500, mostrarDecomposicao: true, extenso: "mil e quinhentos" },
  },
  momento06_praticaGuiada: {
    enunciado: "2 kg = ? g",
    dica: "×1000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2000" }, { nome: "200" }, { nome: "20000" }],
      respostaCerta: "2000",
      feedbackAcerto: "🎉 2000 g.",
      feedbackErro: "2×1000=2000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3000 g = ? kg",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "30" }, { nome: "300" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 3.",
      feedbackErro: "3×1000=3000.",
    },
  },
  momento08_aplicacao: {
    contexto: "Comprou 2 kg de arroz e 500 g de feijão.",
    problema: "Total em gramas:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2500" }, { nome: "2050" }, { nome: "2005" }],
      respostaCerta: "2500",
      feedbackAcerto: "🎯 2000+500=2500.",
      feedbackErro: "2 kg = 2000 g.",
    },
  },
  momento09_revisao: {
    pontos: ["1 kg = 1000 g.", "kg → g: ×1000."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Meio kg = ? g",
      opcoes: [{ nome: "500" }, { nome: "50" }, { nome: "5000" }],
      respostaCerta: "500",
      feedbackAcerto: "🎉 500.",
      feedbackErro: "Metade de 1000 = 500.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5 kg = ? g", opcoes: ["5000", "500", "50000"], correta: 0, feedbackAcerto: "🎉 5000.", feedbackErro: "5×1000=5000." },
      { pergunta: "2500 g = ? kg", opcoes: ["2 kg 500 g", "25 kg", "2 kg 5 g"], correta: 0, feedbackAcerto: "🎉 2 kg 500 g.", feedbackErro: "2000+500." },
      { pergunta: "Qual é mais pesado?", opcoes: ["1 kg", "500 g", "800 g"], correta: 0, feedbackAcerto: "🎉 1 kg = 1000 g.", feedbackErro: "1 kg > 500 g e 800 g." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Balança da cozinha",
    materiais: ["Balança"],
    passos: ["Pese 3 alimentos.", "Anote em g.", "Converta para kg se possível."],
    registro: "📸 Foto das pesagens.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

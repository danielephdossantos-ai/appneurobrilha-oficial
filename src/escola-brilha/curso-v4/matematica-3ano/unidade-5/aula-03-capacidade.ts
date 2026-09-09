import type { AulaV4 } from "../../types";

export const aula03_capacidade: AulaV4 = {
  slug: "u5-03-capacidade",
  titulo: "Litros e Mililitros",
  iconeTrilha: "🥛",
  bncc: ["EF03MA20"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Cabe quanto?",
    historia: "1 L de leite = 1000 mL. Uma colher de sopa ≈ 15 mL. Um copo ≈ 200 mL.",
  },
  momento02_exploracao: {
    instrucao: "Unidades de capacidade.",
    cenas: [
      { tipo: "texto", texto: "1 L = 1000 mL." },
      { tipo: "texto", texto: "Garrafa: L. Remédio: mL.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como converter L em mL?",
    pista: "×1000.",
    revelacao: "2 L = 2000 mL.",
  },
  momento04_explicacao: {
    titulo: "Do litro ao mL",
    etapas: [
      {
        texto: "5 L tem quantos mL?",
        exemploReal: {
          contexto: "1 L = 1000 mL.",
          destaque: "5 L = 5000 mL.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [5, 1000],
            resultado: 5000,
            passos: [{ coluna: "U", fala: "5 × 1000 = 5000.", digito: 0 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "2500 mL = ? L",
    passos: ["2000 mL = 2 L.", "Sobra 500 mL.", "2 L e 500 mL."],
    resposta: "2 L e 500 mL",
    casasValor: { numero: 2500, mostrarDecomposicao: true, extenso: "dois mil e quinhentos" },
  },
  momento06_praticaGuiada: {
    enunciado: "3 L = ? mL",
    dica: "×1000.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3000" }, { nome: "300" }, { nome: "30000" }],
      respostaCerta: "3000",
      feedbackAcerto: "🎉 3000.",
      feedbackErro: "3×1000=3000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "1500 mL em L e mL?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1 L 500 mL" }, { nome: "15 L" }, { nome: "1 L 5 mL" }],
      respostaCerta: "1 L 500 mL",
      feedbackAcerto: "🎯 1 L 500 mL.",
      feedbackErro: "1000+500=1500.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma jarra guarda 2 L. Você já colocou 1200 mL.",
    problema: "Falta quanto pra encher?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "800 mL" }, { nome: "1200 mL" }, { nome: "200 mL" }],
      respostaCerta: "800 mL",
      feedbackAcerto: "🎯 2000−1200=800.",
      feedbackErro: "2 L = 2000 mL.",
    },
  },
  momento09_revisao: {
    pontos: ["1 L = 1000 mL.", "×1000 · ÷1000."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Meio litro = ? mL",
      opcoes: [{ nome: "500" }, { nome: "50" }, { nome: "5000" }],
      respostaCerta: "500",
      feedbackAcerto: "🎉 500.",
      feedbackErro: "Metade de 1000 = 500.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 L = ? mL", opcoes: ["4000", "400", "40000"], correta: 0, feedbackAcerto: "🎉 4000.", feedbackErro: "4×1000." },
      { pergunta: "3000 mL = ? L", opcoes: ["3", "30", "300"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "3×1000=3000." },
      { pergunta: "Meia garrafa de 2 L = ?", opcoes: ["1 L", "500 mL", "1500 mL"], correta: 0, feedbackAcerto: "🎉 1 L.", feedbackErro: "Metade de 2 L." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Copo medidor",
    materiais: ["Copo medidor ou garrafa PET"],
    passos: ["Meça 500 mL de água.", "Depois 1 L.", "Compare."],
    registro: "📸 Foto das medidas.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

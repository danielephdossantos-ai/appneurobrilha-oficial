import type { AulaV4 } from "../../types";

export const aula02_inversoMult: AulaV4 = {
  slug: "u4-02-inverso-mult",
  titulo: "Divisão é o Inverso",
  iconeTrilha: "🔁",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Uma conta desfaz a outra",
    historia: "Se 6 × 4 = 24, então 24 ÷ 4 = 6 e 24 ÷ 6 = 4. Toda multiplicação gera duas divisões.",
  },
  momento02_exploracao: {
    instrucao: "Trio da família.",
    cenas: [
      { tipo: "texto", texto: "6 · 4 · 24 formam uma FAMÍLIA." },
      { tipo: "texto", texto: "6×4=24 · 4×6=24 · 24÷4=6 · 24÷6=4.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como usar a tabuada pra dividir?",
    pista: "Procure o número no resultado da tabuada.",
    revelacao: "Se sei que 7×5=35, então 35 ÷ 5 = 7.",
  },
  momento04_explicacao: {
    titulo: "Família de fatos",
    etapas: [
      {
        texto: "Trio 3 · 6 · 18.",
        exemploReal: {
          contexto: "Tabuada do 3.",
          destaque: "3×6=18 e 18 ÷ 6 = 3.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [18, 6],
            resultado: 3,
            passos: [{ coluna: "U", fala: "18 ÷ 6 = 3, porque 3 × 6 = 18.", digito: 3 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "36 ÷ 4 = ?",
    passos: ["Qual número × 4 = 36?", "9 × 4 = 36.", "36 ÷ 4 = 9."],
    resposta: "36 ÷ 4 = 9",
    casasValor: { numero: 9, mostrarDecomposicao: true, extenso: "nove" },
  },
  momento06_praticaGuiada: {
    enunciado: "42 ÷ 6 = ?",
    dica: "Qual × 6 = 42?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "6" }, { nome: "8" }],
      respostaCerta: "7",
      feedbackAcerto: "🎉 7×6=42.",
      feedbackErro: "7×6=42.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "56 ÷ 7 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 8×7=56.",
      feedbackErro: "8×7=56.",
    },
  },
  momento08_aplicacao: {
    contexto: "48 sapatos guardados em pares.",
    problema: "Quantos pares?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "24" }, { nome: "20" }, { nome: "28" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯 48 ÷ 2 = 24.",
      feedbackErro: "24×2=48.",
    },
  },
  momento09_revisao: {
    pontos: ["Tabuada resolve divisão.", "Cada trio dá 4 contas."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "63 ÷ 9 = ?",
      opcoes: [{ nome: "7" }, { nome: "6" }, { nome: "8" }],
      respostaCerta: "7",
      feedbackAcerto: "🎉 7×9=63.",
      feedbackErro: "7×9=63.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "45 ÷ 5 = ?", opcoes: ["9", "8", "10"], correta: 0, feedbackAcerto: "🎉 9.", feedbackErro: "9×5=45." },
      { pergunta: "40 ÷ 8 = ?", opcoes: ["5", "4", "6"], correta: 0, feedbackAcerto: "🎉 5.", feedbackErro: "5×8=40." },
      { pergunta: "72 ÷ 9 = ?", opcoes: ["8", "7", "9"], correta: 0, feedbackAcerto: "🎉 8.", feedbackErro: "8×9=72." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Trio da tabuada",
    materiais: ["Papel"],
    passos: ["Escolha um trio (ex.: 4-5-20).", "Escreva as 4 contas da família."],
    registro: "📸 Foto do trio.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

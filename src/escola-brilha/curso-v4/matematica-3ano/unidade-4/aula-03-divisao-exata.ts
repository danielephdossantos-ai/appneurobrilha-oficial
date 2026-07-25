import type { AulaV4 } from "../../types";

export const aula03_divisaoExata: AulaV4 = {
  slug: "u4-03-divisao-exata",
  titulo: "Divisão Exata",
  iconeTrilha: "✅",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Sem sobrar nada",
    historia: "Quando dá pra dividir tudo igual, sem sobrar, chamamos de divisão EXATA.",
  },
  momento02_exploracao: {
    instrucao: "Exata = resto ZERO.",
    cenas: [
      { tipo: "texto", texto: "20 ÷ 4 = 5. Sobra 0." },
      { tipo: "texto", texto: "Divisão exata: cada grupo recebe a mesma quantidade sem sobrar.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber se é exata?",
    pista: "Se o número está na tabuada do divisor.",
    revelacao: "24 é múltiplo de 4 → 24 ÷ 4 é exata.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo da divisão exata",
    etapas: [
      {
        texto: "48 ÷ 6.",
        exemploReal: {
          contexto: "Pense na tabuada do 6: até chegar em 48.",
          destaque: "8 × 6 = 48 → 48 ÷ 6 = 8.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [48, 6],
            resultado: 8,
            passos: [{ coluna: "U", fala: "48 ÷ 6 = 8. Sem resto.", digito: 8 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "35 ÷ 5 = ?",
    passos: ["Tabuada do 5.", "7 × 5 = 35."],
    resposta: "35 ÷ 5 = 7",
    casasValor: { numero: 7, mostrarDecomposicao: true, extenso: "sete" },
  },
  momento06_praticaGuiada: {
    enunciado: "27 ÷ 3 = ?",
    dica: "Qual × 3 = 27?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "9" }, { nome: "8" }, { nome: "10" }],
      respostaCerta: "9",
      feedbackAcerto: "🎉 9×3=27.",
      feedbackErro: "9×3=27.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "64 ÷ 8 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 8×8=64.",
      feedbackErro: "8×8=64.",
    },
  },
  momento08_aplicacao: {
    contexto: "40 balas divididas em 5 saquinhos iguais.",
    problema: "Cada saquinho:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 40 ÷ 5 = 8.",
      feedbackErro: "8×5=40.",
    },
  },
  momento09_revisao: {
    pontos: ["Exata: resto 0.", "Use a tabuada do divisor."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "81 ÷ 9 = ?",
      opcoes: [{ nome: "9" }, { nome: "8" }, { nome: "10" }],
      respostaCerta: "9",
      feedbackAcerto: "🎉 9×9=81.",
      feedbackErro: "9×9=81.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "54 ÷ 6 = ?", opcoes: ["9", "8", "10"], correta: 0, feedbackAcerto: "🎉 9.", feedbackErro: "9×6=54." },
      { pergunta: "49 ÷ 7 = ?", opcoes: ["7", "6", "8"], correta: 0, feedbackAcerto: "🎉 7.", feedbackErro: "7×7=49." },
      { pergunta: "80 ÷ 10 = ?", opcoes: ["8", "7", "9"], correta: 0, feedbackAcerto: "🎉 8.", feedbackErro: "8×10=80." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sacos iguais",
    materiais: ["Grãos ou tampinhas"],
    passos: ["Separe 30 itens.", "Reparta em 5 saquinhos iguais."],
    registro: "📸 Foto dos saquinhos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

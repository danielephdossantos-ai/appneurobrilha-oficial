import type { AulaV4 } from "../../types";

export const aula05_tabuadas6a9: AulaV4 = {
  slug: "u3-05-tabuadas-6-9",
  titulo: "Tabuadas do 6 ao 9",
  iconeTrilha: "🧠",
  bncc: ["EF03MA07"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "As mais fofocadas",
    historia: "As tabuadas maiores parecem difíceis, mas têm truques.",
  },
  momento02_exploracao: {
    instrucao: "Truques principais.",
    cenas: [
      { tipo: "texto", texto: "×6 = ×5 + o número (ex.: 7×6 = 7×5 + 7 = 35+7=42)." },
      { tipo: "texto", texto: "×9 = ×10 − o número (ex.: 7×9 = 70−7=63).", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que o truque do 9?",
    pista: "9 é um a menos que 10.",
    revelacao: "n×9 = n×10 − n.",
  },
  momento04_explicacao: {
    titulo: "Truques inteligentes",
    etapas: [
      {
        texto: "8 × 7: use 8×5=40 e some 8×2=16. 40+16=56.",
        exemploReal: {
          contexto: "Quebrar a conta em partes conhecidas.",
          destaque: "8 × 7 = 56.",
          contaPassoAPasso: {
            operacao: "mult",
            operandos: [8, 7],
            resultado: 56,
            passos: [
              { coluna: "U", fala: "8 vezes 7 = 56. Escrevo 6 na unidade.", digito: 6 },
              { coluna: "D", fala: "Escrevo 5 na dezena.", digito: 5 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "9 × 6 = ?",
    passos: ["9×10=90.", "90−9=81. Errado: use ×6.", "6×10=60, 60−6=54. 9×6=54."],
    resposta: "9 × 6 = 54",
    casasValor: { numero: 54, mostrarDecomposicao: true, extenso: "cinquenta e quatro" },
  },
  momento06_praticaGuiada: {
    enunciado: "7 × 8 = ?",
    dica: "8×5=40 e 8×2=16. Some.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "56" }, { nome: "48" }, { nome: "64" }],
      respostaCerta: "56",
      feedbackAcerto: "🎉 56.",
      feedbackErro: "40+16=56.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "8 × 9 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "72" }, { nome: "63" }, { nome: "81" }],
      respostaCerta: "72",
      feedbackAcerto: "🎯 72.",
      feedbackErro: "80−8=72.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma caixa de ovos tem 6 ovos. Compra 8 caixas.",
    problema: "Total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "48" }, { nome: "42" }, { nome: "54" }],
      respostaCerta: "48",
      feedbackAcerto: "🎯 8 × 6 = 48.",
      feedbackErro: "8×6=48.",
    },
  },
  momento09_revisao: {
    pontos: ["Quebre em partes conhecidas.", "×9 = ×10 − n."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "6 × 7 = ?",
      opcoes: [{ nome: "42" }, { nome: "36" }, { nome: "48" }],
      respostaCerta: "42",
      feedbackAcerto: "🎉 42.",
      feedbackErro: "6×7=42.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "7 × 6 = ?", opcoes: ["42", "36", "48"], correta: 0, feedbackAcerto: "🎉 42.", feedbackErro: "7×6=42." },
      { pergunta: "8 × 8 = ?", opcoes: ["64", "56", "72"], correta: 0, feedbackAcerto: "🎉 64.", feedbackErro: "8×8=64." },
      { pergunta: "9 × 9 = ?", opcoes: ["81", "72", "90"], correta: 0, feedbackAcerto: "🎉 81.", feedbackErro: "9×9=81." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cartaz-truque",
    materiais: ["Papel"],
    passos: ["Escolha uma tabuada difícil.", "Desenhe um truque de quebrar em partes."],
    registro: "📸 Foto do cartaz.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

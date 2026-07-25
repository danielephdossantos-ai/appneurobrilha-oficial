import type { AulaV4 } from "../../types";

export const aula04_divisaoComResto: AulaV4 = {
  slug: "u4-04-divisao-resto",
  titulo: "E Quando Sobra?",
  iconeTrilha: "🍪",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Nem tudo divide certinho",
    historia: "13 biscoitos para 4 crianças: 3 pra cada e SOBRA 1. Esse 1 é o RESTO.",
  },
  momento02_exploracao: {
    instrucao: "Divisão com resto.",
    cenas: [
      { tipo: "texto", texto: "13 ÷ 4 = 3, sobra 1." },
      { tipo: "texto", texto: "Quociente = 3 · Resto = 1.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como achar o resto?",
    pista: "Multiplique o quociente pelo divisor e veja quanto falta.",
    revelacao: "3 × 4 = 12. Faltam 1 para 13. Resto = 1.",
  },
  momento04_explicacao: {
    titulo: "Quociente e resto",
    etapas: [
      {
        texto: "25 ÷ 4.",
        exemploReal: {
          contexto: "Qual maior número × 4 fica ≤ 25?",
          destaque: "6 × 4 = 24. Resto = 1.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [25, 4],
            resultado: 6,
            passos: [
              { coluna: "U", fala: "25 ÷ 4: 6 vezes o 4 = 24. Escrevo 6.", digito: 6, porque: "Resto = 25 − 24 = 1." },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "17 ÷ 5 = ?",
    passos: ["3 × 5 = 15.", "17 − 15 = 2.", "Q = 3, R = 2."],
    resposta: "17 ÷ 5 = 3, resto 2",
    casasValor: { numero: 3, mostrarDecomposicao: false, extenso: "três" },
  },
  momento06_praticaGuiada: {
    enunciado: "20 ÷ 3 = ? (Q, R)",
    dica: "6 × 3 = 18.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o quociente:",
      opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "7" }],
      respostaCerta: "6",
      feedbackAcerto: "🎉 Q=6, R=2.",
      feedbackErro: "6×3=18, sobra 2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "29 ÷ 4 = ? (quociente)",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "6" }, { nome: "8" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 7×4=28, R=1.",
      feedbackErro: "7×4=28, R=1.",
    },
  },
  momento08_aplicacao: {
    contexto: "22 pães em pacotes de 5.",
    problema: "Quantos pacotes cheios?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "5" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 4×5=20, sobra 2.",
      feedbackErro: "4×5=20, sobra 2.",
    },
  },
  momento09_revisao: {
    pontos: ["Resto = quanto sobrou.", "Resto sempre menor que divisor."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "31 ÷ 6 (Q)?",
      opcoes: [{ nome: "5" }, { nome: "4" }, { nome: "6" }],
      respostaCerta: "5",
      feedbackAcerto: "🎉 5×6=30, R=1.",
      feedbackErro: "5×6=30, R=1.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "19 ÷ 4 (Q)?", opcoes: ["4", "3", "5"], correta: 0, feedbackAcerto: "🎉 4, R=3.", feedbackErro: "4×4=16, R=3." },
      { pergunta: "23 ÷ 5 (Q)?", opcoes: ["4", "3", "5"], correta: 0, feedbackAcerto: "🎉 4, R=3.", feedbackErro: "4×5=20, R=3." },
      { pergunta: "50 ÷ 7 (Q)?", opcoes: ["7", "6", "8"], correta: 0, feedbackAcerto: "🎉 7, R=1.", feedbackErro: "7×7=49, R=1." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sobrou pra quem?",
    materiais: ["Bolinhas ou frutas"],
    passos: ["Pegue 15 objetos.", "Reparta entre 4 pessoas.", "Anote o resto."],
    registro: "📸 Foto do resto.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

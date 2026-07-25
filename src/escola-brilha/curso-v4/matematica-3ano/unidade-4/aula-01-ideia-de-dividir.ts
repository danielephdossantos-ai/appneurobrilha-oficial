import type { AulaV4 } from "../../types";

export const aula01_ideiaDividir: AulaV4 = {
  slug: "u4-01-ideia-dividir",
  titulo: "Repartir Igualmente",
  iconeTrilha: "➗",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Um pra cada",
    historia: "12 balas para 4 amigos: quantas cada um recebe? Dividir = repartir em partes IGUAIS.",
  },
  momento02_exploracao: {
    instrucao: "Dividir é o inverso de multiplicar.",
    cenas: [
      { tipo: "texto", texto: "12 ÷ 4 = 3." },
      { tipo: "texto", texto: "Porque 3 × 4 = 12.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como fazer 20 ÷ 5?",
    pista: "Quantas vezes o 5 cabe em 20?",
    revelacao: "20 ÷ 5 = 4, porque 4 × 5 = 20.",
  },
  momento04_explicacao: {
    titulo: "Repartir em partes iguais",
    etapas: [
      {
        texto: "15 doces para 3 crianças.",
        exemploReal: {
          contexto: "Vá dando 1 pra cada, um por um.",
          destaque: "15 ÷ 3 = 5.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [15, 3],
            resultado: 5,
            passos: [
              { coluna: "U", fala: "15 ÷ 3 = 5. Cada criança ganha 5 doces.", digito: 5 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "18 ÷ 2 = ?",
    passos: ["Dois grupos iguais.", "9+9=18.", "Resultado: 9."],
    resposta: "18 ÷ 2 = 9",
    casasValor: { numero: 9, mostrarDecomposicao: true, extenso: "nove" },
  },
  momento06_praticaGuiada: {
    enunciado: "10 ÷ 5 = ?",
    dica: "Quantas vezes o 5 cabe em 10?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "3" }, { nome: "5" }],
      respostaCerta: "2",
      feedbackAcerto: "🎉 5+5=10.",
      feedbackErro: "2×5=10.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "24 ÷ 4 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "5" }, { nome: "7" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 6.",
      feedbackErro: "6×4=24.",
    },
  },
  momento08_aplicacao: {
    contexto: "16 lápis serão divididos em 4 estojos iguais.",
    problema: "Cada estojo:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "5" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 16 ÷ 4 = 4.",
      feedbackErro: "4×4=16.",
    },
  },
  momento09_revisao: {
    pontos: ["Dividir = repartir igual.", "É o inverso da multiplicação."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "20 ÷ 4 = ?",
      opcoes: [{ nome: "5" }, { nome: "4" }, { nome: "6" }],
      respostaCerta: "5",
      feedbackAcerto: "🎉 5.",
      feedbackErro: "5×4=20.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "12 ÷ 3 = ?", opcoes: ["4", "3", "5"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "4×3=12." },
      { pergunta: "30 ÷ 5 = ?", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "6×5=30." },
      { pergunta: "28 ÷ 4 = ?", opcoes: ["7", "6", "8"], correta: 0, feedbackAcerto: "🎉 7.", feedbackErro: "7×4=28." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Repartir do jantar",
    materiais: ["Fatias de fruta"],
    passos: ["Corte 8 fatias.", "Reparta entre os moradores da casa."],
    registro: "📸 Foto da divisão.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

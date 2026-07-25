import type { AulaV4 } from "../../types";

export const aula06_partesFrac: AulaV4 = {
  slug: "u4-06-partes-fracoes",
  titulo: "Metade, Terça e Quarta Parte",
  iconeTrilha: "🍕",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Repartir pedaços",
    historia: "Metade = 1 de 2 partes iguais. Terça parte = 1 de 3. Quarta parte = 1 de 4.",
  },
  momento02_exploracao: {
    instrucao: "Fração como divisão.",
    cenas: [
      { tipo: "texto", texto: "Metade de 20 = 20 ÷ 2 = 10." },
      { tipo: "texto", texto: "Terça de 21 = 21 ÷ 3 = 7. Quarta de 20 = 20 ÷ 4 = 5.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Fração e divisão são a mesma coisa?",
    pista: "'De' vira divisão.",
    revelacao: "Metade DE 40 = 40 ÷ 2 = 20.",
  },
  momento04_explicacao: {
    titulo: "Pedaço igual",
    etapas: [
      {
        texto: "Quarta parte de 32.",
        exemploReal: {
          contexto: "Corte em 4 pedaços iguais.",
          destaque: "32 ÷ 4 = 8.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [32, 4],
            resultado: 8,
            passos: [{ coluna: "U", fala: "32 ÷ 4 = 8. Cada quarta parte vale 8.", digito: 8 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Terça parte de 27?",
    passos: ["'De' → dividir.", "27 ÷ 3 = 9."],
    resposta: "Terça parte de 27 = 9",
    casasValor: { numero: 9, mostrarDecomposicao: false, extenso: "nove" },
  },
  momento06_praticaGuiada: {
    enunciado: "Metade de 50?",
    dica: "50 ÷ 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "25" }, { nome: "20" }, { nome: "30" }],
      respostaCerta: "25",
      feedbackAcerto: "🎉 25.",
      feedbackErro: "25+25=50.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Quarta parte de 24?",
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
    contexto: "Uma pizza cortada em 8 fatias. Você comeu a QUARTA parte.",
    problema: "Comeu quantas fatias?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2" }, { nome: "1" }, { nome: "4" }],
      respostaCerta: "2",
      feedbackAcerto: "🎯 8 ÷ 4 = 2.",
      feedbackErro: "2×4=8.",
    },
  },
  momento09_revisao: {
    pontos: ["Metade: ÷2.", "Terça: ÷3.", "Quarta: ÷4."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Terça parte de 30?",
      opcoes: [{ nome: "10" }, { nome: "8" }, { nome: "12" }],
      respostaCerta: "10",
      feedbackAcerto: "🎉 10.",
      feedbackErro: "10×3=30.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Metade de 18?", opcoes: ["9", "8", "10"], correta: 0, feedbackAcerto: "🎉 9.", feedbackErro: "9+9=18." },
      { pergunta: "Quarta parte de 40?", opcoes: ["10", "8", "12"], correta: 0, feedbackAcerto: "🎉 10.", feedbackErro: "10×4=40." },
      { pergunta: "Terça parte de 24?", opcoes: ["8", "6", "10"], correta: 0, feedbackAcerto: "🎉 8.", feedbackErro: "8×3=24." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Pedaços iguais",
    materiais: ["Fruta"],
    passos: ["Corte uma fruta em 4 pedaços iguais.", "Coma 1 quarta parte."],
    registro: "📸 Foto do corte.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

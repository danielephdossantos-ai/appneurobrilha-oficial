import type { AulaV4 } from "../../types";

export const aula07_missaoFinalU4: AulaV4 = {
  slug: "u4-07-missao-final",
  titulo: "Repartidor Oficial",
  iconeTrilha: "🏆",
  bncc: ["EF03MA10"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Todo mundo com sua parte",
    historia: "{NOME}, a Cidade te nomeou Repartidor Oficial. Sua missão: garantir que todos recebam partes iguais.",
  },
  momento02_exploracao: {
    instrucao: "Dividir com e sem resto.",
    cenas: [
      { tipo: "texto", texto: "Exata: sobra 0." },
      { tipo: "texto", texto: "Com resto: sobra algo (menor que o divisor).", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como escolher a operação certa?",
    pista: "'Cada', 'grupos', 'igualmente' → divisão.",
    revelacao: "Leia com atenção antes de calcular.",
  },
  momento04_explicacao: {
    titulo: "Revisão final",
    etapas: [
      {
        texto: "56 balas divididas em 7 sacos.",
        exemploReal: {
          contexto: "'Sacos' → divisão.",
          destaque: "56 ÷ 7 = 8.",
          contaPassoAPasso: {
            operacao: "div",
            operandos: [56, 7],
            resultado: 8,
            passos: [{ coluna: "U", fala: "56 ÷ 7 = 8. Cada saco leva 8 balas.", digito: 8 }],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "35 ÷ 8 = ? (Q,R)",
    passos: ["4 × 8 = 32.", "35 − 32 = 3.", "Q = 4, R = 3."],
    resposta: "35 ÷ 8 = 4, resto 3",
    casasValor: { numero: 4, mostrarDecomposicao: false, extenso: "quatro" },
  },
  momento06_praticaGuiada: {
    enunciado: "Metade de 72?",
    dica: "72 ÷ 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "36" }, { nome: "32" }, { nome: "40" }],
      respostaCerta: "36",
      feedbackAcerto: "🎉 36.",
      feedbackErro: "36+36=72.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "63 ÷ 9 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "6" }, { nome: "8" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 7.",
      feedbackErro: "7×9=63.",
    },
  },
  momento08_aplicacao: {
    contexto: "40 mesas em 5 fileiras iguais.",
    problema: "Cada fileira:",
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
    pontos: ["Exata × Com resto.", "Fração como divisão.", "Palavras-chave."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Quarta parte de 100?",
      opcoes: [{ nome: "25" }, { nome: "20" }, { nome: "30" }],
      respostaCerta: "25",
      feedbackAcerto: "🎉 25.",
      feedbackErro: "25×4=100.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "48 ÷ 8 = ?", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "6×8=48." },
      { pergunta: "Metade de 90?", opcoes: ["45", "40", "50"], correta: 0, feedbackAcerto: "🎉 45.", feedbackErro: "45+45=90." },
      { pergunta: "55 ÷ 6 (Q)?", opcoes: ["9", "8", "10"], correta: 0, feedbackAcerto: "🎉 9, R=1.", feedbackErro: "9×6=54, R=1." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diário do repartidor",
    materiais: ["Refeições ou objetos"],
    passos: ["Reparta 3 coisas diferentes ao longo do dia.", "Anote quantos e para quantos."],
    registro: "📸 Foto do diário.",
  },
  recompensa: { xp: 300, moedas: 150 },
};

import type { AulaV4 } from "../../types";

export const aula06_dobrosMetades: AulaV4 = {
  slug: "u3-06-dobros-metades",
  titulo: "Dobros e Metades",
  iconeTrilha: "🔀",
  bncc: ["EF03MA07", "EF03MA09"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Duas ideias amigas",
    historia: "Dobrar é 'ganhar mais um igual'. Metade é 'dividir em dois iguais'. Uma é o inverso da outra.",
  },
  momento02_exploracao: {
    instrucao: "Dobro × Metade.",
    cenas: [
      { tipo: "texto", texto: "Dobro de 8 = 16. Metade de 16 = 8." },
      { tipo: "texto", texto: "Dobro × 2 · Metade ÷ 2.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Todo número tem metade inteira?",
    pista: "Só se for par.",
    revelacao: "Números pares têm metade inteira; ímpares não.",
  },
  momento04_explicacao: {
    titulo: "Dobrar e cortar ao meio",
    etapas: [
      {
        texto: "Dobro de 24: 24+24=48.",
        exemploReal: {
          contexto: "Uma barra dupla.",
          destaque: "Dobro de 24 = 48.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [24, 24],
            resultado: 48,
            passos: [
              { coluna: "U", fala: "4+4=8.", digito: 8 },
              { coluna: "D", fala: "2+2=4.", digito: 4 },
            ],
          },
        },
      },
      {
        texto: "Metade de 30: divide em 2 partes iguais.",
        exemploReal: {
          contexto: "15 + 15 = 30.",
          destaque: "Metade de 30 = 15.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Metade de 60?",
    passos: ["Divida em 2 grupos iguais.", "30 + 30 = 60."],
    resposta: "Metade de 60 = 30",
    casasValor: { numero: 30, mostrarDecomposicao: true, extenso: "trinta" },
  },
  momento06_praticaGuiada: {
    enunciado: "Dobro de 15?",
    dica: "15+15.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30" }, { nome: "25" }, { nome: "35" }],
      respostaCerta: "30",
      feedbackAcerto: "🎉 30.",
      feedbackErro: "15+15=30.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Metade de 40?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "15" }, { nome: "25" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 20.",
      feedbackErro: "20+20=40.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma pizza tem 12 fatias e você comeu a metade.",
    problema: "Comeu quantas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "4" }, { nome: "8" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 Metade de 12 = 6.",
      feedbackErro: "6+6=12.",
    },
  },
  momento09_revisao: {
    pontos: ["Dobro: ×2.", "Metade: ÷2 (só para pares)."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Dobro de 50?",
      opcoes: [{ nome: "100" }, { nome: "80" }, { nome: "120" }],
      respostaCerta: "100",
      feedbackAcerto: "🎉 100.",
      feedbackErro: "50+50=100.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dobro de 18?", opcoes: ["36", "30", "40"], correta: 0, feedbackAcerto: "🎉 36.", feedbackErro: "18+18=36." },
      { pergunta: "Metade de 24?", opcoes: ["12", "10", "14"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "12+12=24." },
      { pergunta: "Metade de 100?", opcoes: ["50", "40", "60"], correta: 0, feedbackAcerto: "🎉 50.", feedbackErro: "50+50=100." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cozinhar dividindo",
    materiais: ["Fruta ou biscoito"],
    passos: ["Corte 1 fruta na metade.", "Divida biscoitos em 2 partes iguais."],
    registro: "📸 Foto da divisão.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

import type { AulaV4 } from "../../types";

export const aula05_dinheiro: AulaV4 = {
  slug: "u5-05-dinheiro",
  titulo: "Reais e Centavos",
  iconeTrilha: "💰",
  bncc: ["EF03MA24"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Contando dinheiro",
    historia: "1 real = 100 centavos. Notas: R$ 2, 5, 10, 20, 50, 100. Moedas: 5, 10, 25, 50 centavos e R$ 1.",
  },
  momento02_exploracao: {
    instrucao: "Real e centavo.",
    cenas: [
      { tipo: "texto", texto: "R$ 1,00 = 100 centavos." },
      { tipo: "texto", texto: "R$ 2,50 = 2 reais e 50 centavos.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como calcular troco?",
    pista: "Subtração.",
    revelacao: "Paguei − Preço = Troco.",
  },
  momento04_explicacao: {
    titulo: "Somar e trocar dinheiro",
    etapas: [
      {
        texto: "Comprou por R$ 7,50 e pagou R$ 10. Troco?",
        exemploReal: {
          contexto: "10,00 − 7,50.",
          destaque: "Troco: R$ 2,50.",
          contaPassoAPasso: {
            operacao: "sub",
            operandos: [1000, 750],
            resultado: 250,
            passos: [
              { coluna: "U", fala: "0 − 0 = 0.", digito: 0 },
              { coluna: "D", fala: "0 − 5: empresta. 10 − 5 = 5.", digito: 5 },
              { coluna: "C", fala: "9 − 7 = 2.", digito: 2 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "R$ 3,25 + R$ 4,50 = ?",
    passos: ["Some centavos: 25+50=75.", "Some reais: 3+4=7.", "R$ 7,75."],
    resposta: "R$ 7,75",
    casasValor: { numero: 775, mostrarDecomposicao: true, extenso: "sete reais e setenta e cinco centavos" },
  },
  momento06_praticaGuiada: {
    enunciado: "Duas moedas de 50 centavos = ?",
    dica: "50+50.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 1,00" }, { nome: "R$ 0,50" }, { nome: "R$ 5,00" }],
      respostaCerta: "R$ 1,00",
      feedbackAcerto: "🎉 R$ 1,00.",
      feedbackErro: "50+50=100 centavos.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Paguei R$ 20 por um item de R$ 12. Troco?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 8" }, { nome: "R$ 12" }, { nome: "R$ 32" }],
      respostaCerta: "R$ 8",
      feedbackAcerto: "🎯 20−12=8.",
      feedbackErro: "20−12=8.",
    },
  },
  momento08_aplicacao: {
    contexto: "Comprei pão a R$ 6,80 e suco a R$ 3,20.",
    problema: "Total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 10,00" }, { nome: "R$ 9,00" }, { nome: "R$ 11,00" }],
      respostaCerta: "R$ 10,00",
      feedbackAcerto: "🎯 6,80+3,20=10,00.",
      feedbackErro: "80+20=100 centavos.",
    },
  },
  momento09_revisao: {
    pontos: ["R$ 1 = 100 centavos.", "Troco: paguei − preço."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "3 moedas de 25 centavos = ?",
      opcoes: [{ nome: "R$ 0,75" }, { nome: "R$ 0,25" }, { nome: "R$ 1,25" }],
      respostaCerta: "R$ 0,75",
      feedbackAcerto: "🎉 75 centavos.",
      feedbackErro: "25×3=75.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "R$ 5 + R$ 3,50 = ?", opcoes: ["R$ 8,50", "R$ 8,00", "R$ 9,00"], correta: 0, feedbackAcerto: "🎉 8,50.", feedbackErro: "5+3,50=8,50." },
      { pergunta: "Troco de R$ 10 pagando R$ 6,25?", opcoes: ["R$ 3,75", "R$ 4,25", "R$ 3,25"], correta: 0, feedbackAcerto: "🎉 R$ 3,75.", feedbackErro: "10−6,25=3,75." },
      { pergunta: "4 moedas de 50 centavos =?", opcoes: ["R$ 2,00", "R$ 1,00", "R$ 4,00"], correta: 0, feedbackAcerto: "🎉 R$ 2,00.", feedbackErro: "50×4=200." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Feirinha em casa",
    materiais: ["Moedas de brinquedo ou papel"],
    passos: ["Faça 3 preços.", "Pratique paga e troco."],
    registro: "📸 Foto da feirinha.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

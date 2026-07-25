import type { AulaV4 } from "../../types";

export const aula05_dinheiro: AulaV4 = {
  slug: "u6-05-dinheiro",
  titulo: "Dinheiro — real e centavos",
  iconeTrilha: "💰",
  bncc: ["EF04MA24", "EF04MA25"],
  duracaoMin: 22,
  metodologias: ["rme", "vergnaud"],

  momento01_motivacao: {
    titulo: "O sistema monetário",
    historia:
      "{NOME}, no Brasil usamos o REAL (R$). Cada real tem 100 centavos. Notas: 2, 5, 10, 20, 50, 100, 200. Moedas: 1 real e 5, 10, 25, 50 centavos.",
  },
  momento02_exploracao: {
    instrucao: "Escrita.",
    cenas: [
      { tipo: "texto", texto: "R$ 12,50 = 12 reais e 50 centavos.", destaque: true },
      { tipo: "texto", texto: "R$ 0,25 = 25 centavos." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual troco posso dar de R$ 20 pra uma compra de R$ 13,75?",
    pista: "Subtraia com a vírgula alinhada.",
    revelacao: "20,00 − 13,75 = 6,25. Troco: R$ 6,25.",
  },
  momento04_explicacao: {
    titulo: "Operar dinheiro",
    etapas: [
      {
        texto: "Some/subtraia com vírgulas alinhadas.",
        exemploReal: {
          contexto: "R$ 34,90 + R$ 15,60.",
          destaque: "R$ 50,50.",
        },
      },
      {
        texto: "Multiplique por quantidade de itens.",
        exemploReal: {
          contexto: "3 sorvetes de R$ 4,50.",
          destaque: "3 × 4,50 = R$ 13,50.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "R$ 45,80 + R$ 12,30 = ?",
    passos: ["Alinhe a vírgula.", "80+30=110 → escreve 10, vai 1.", "45+12+1=58.", "R$ 58,10."],
    resposta: "R$ 58,10",
  },
  momento06_praticaGuiada: {
    enunciado: "R$ 100 − R$ 37,25 = ?",
    dica: "Alinhe a vírgula.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 62,75" }, { nome: "R$ 63,25" }, { nome: "R$ 62,25" }],
      respostaCerta: "R$ 62,75",
      feedbackAcerto: "🎯 R$ 62,75.",
      feedbackErro: "100,00 − 37,25 = 62,75.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "4 sorvetes de R$ 3,50 =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 14,00" }, { nome: "R$ 12,50" }, { nome: "R$ 14,50" }],
      respostaCerta: "R$ 14,00",
      feedbackAcerto: "🎯 R$ 14,00.",
      feedbackErro: "4×3,50=14,00.",
    },
  },
  momento08_aplicacao: {
    contexto: "Compra: R$ 12,50 + R$ 7,80 + R$ 4,20. Pagou R$ 30.",
    problema: "Troco:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 5,50" }, { nome: "R$ 4,50" }, { nome: "R$ 6,50" }],
      respostaCerta: "R$ 5,50",
      feedbackAcerto: "🎯 R$ 5,50.",
      feedbackErro: "12,50+7,80+4,20=24,50. 30−24,50=5,50.",
    },
  },
  momento09_revisao: {
    pontos: ["1 real = 100 centavos.", "Alinhe a vírgula ao operar."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "R$ 20 − R$ 12,50 = ?", opcoes: ["R$ 7,50", "R$ 8,50", "R$ 7,00"], correta: 0, feedbackAcerto: "🎉 R$ 7,50.", feedbackErro: "20,00−12,50=7,50." },
      { pergunta: "3 × R$ 4,25 = ?", opcoes: ["R$ 12,75", "R$ 12,25", "R$ 13,00"], correta: 0, feedbackAcerto: "🎉 R$ 12,75.", feedbackErro: "3×4,25=12,75." },
      { pergunta: "R$ 15,80 + R$ 6,45 = ?", opcoes: ["R$ 22,25", "R$ 21,25", "R$ 22,15"], correta: 0, feedbackAcerto: "🎉 R$ 22,25.", feedbackErro: "80+45=125; 15+6+1=22 → 22,25." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Lista de Compras",
    materiais: ["Papel", "Preços reais"],
    passos: ["Escolha 5 itens com preço.", "Some o total.", "Simule um pagamento e o troco."],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 220, moedas: 110 },
};

import type { AulaV4 } from "../../types";

export const aula05_decimaisCentesimos: AulaV4 = {
  slug: "u5-05-decimais-centesimos",
  titulo: "Centésimos — 0,01 e dinheiro",
  iconeTrilha: "🪙",
  bncc: ["EF04MA10", "EF04MA25"],
  duracaoMin: 22,
  metodologias: ["cpa", "rme"],

  momento01_motivacao: {
    titulo: "Duas casas após a vírgula",
    historia:
      "{NOME}, quando dividimos o inteiro em 100 partes, cada uma é um CENTÉSIMO — 0,01. É o mundo dos CENTAVOS: 1 real = 100 centavos.",
  },
  momento02_exploracao: {
    instrucao: "Fração ↔ decimal ↔ dinheiro.",
    cenas: [
      { tipo: "texto", texto: "1/100 = 0,01 (um centésimo).", destaque: true },
      { tipo: "texto", texto: "25/100 = 0,25 = 25 centavos = R$ 0,25." },
      { tipo: "texto", texto: "1 real = 1,00 = 100 centavos." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "0,5 e 0,50 são iguais?",
    pista: "Compare décimos e centésimos.",
    revelacao: "SIM. 0,5 = 5/10 = 50/100 = 0,50. Zeros à DIREITA depois da vírgula não mudam o valor.",
  },
  momento04_explicacao: {
    titulo: "Casa dos centésimos",
    etapas: [
      {
        texto: "1ª casa após vírgula = décimos. 2ª casa = centésimos.",
        exemploReal: {
          contexto: "3,47 = 3 inteiros + 4 décimos + 7 centésimos.",
          destaque: "3,47 lê-se 'três inteiros e quarenta e sete centésimos'.",
        },
      },
      {
        texto: "Somar/subtrair: alinhe a vírgula.",
        exemploReal: {
          contexto: "R$ 12,45 + R$ 3,20.",
          destaque: "R$ 15,65.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Escreva 75 centavos em real.",
    passos: ["75 centavos = 75/100.", "= 0,75.", "= R$ 0,75."],
    resposta: "R$ 0,75",
  },
  momento06_praticaGuiada: {
    enunciado: "R$ 5,40 + R$ 2,15 = ?",
    dica: "Alinhe as vírgulas.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 7,55" }, { nome: "R$ 7,45" }, { nome: "R$ 7,65" }],
      respostaCerta: "R$ 7,55",
      feedbackAcerto: "🎯 R$ 7,55.",
      feedbackErro: "40+15=55 centavos, 5+2=7 reais.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "R$ 10,00 − R$ 3,25 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 6,75" }, { nome: "R$ 7,25" }, { nome: "R$ 6,25" }],
      respostaCerta: "R$ 6,75",
      feedbackAcerto: "🎯 R$ 6,75.",
      feedbackErro: "Troca em cascata pelos zeros: 6,75.",
    },
  },
  momento08_aplicacao: {
    contexto: "Bruna pagou R$ 20,00 por um lanche de R$ 12,50.",
    problema: "Troco:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 7,50" }, { nome: "R$ 7,00" }, { nome: "R$ 8,50" }],
      respostaCerta: "R$ 7,50",
      feedbackAcerto: "🎯 R$ 7,50.",
      feedbackErro: "20,00 − 12,50 = 7,50.",
    },
  },
  momento09_revisao: {
    pontos: ["Centésimo = 0,01 = 1 centavo.", "Alinhe a vírgula para somar/subtrair."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50 centavos em real:", opcoes: ["R$ 0,50", "R$ 5,00", "R$ 50,00"], correta: 0, feedbackAcerto: "🎉 R$ 0,50.", feedbackErro: "50/100=0,50." },
      { pergunta: "R$ 3,25 + R$ 4,50 = ?", opcoes: ["R$ 7,75", "R$ 7,25", "R$ 8,25"], correta: 0, feedbackAcerto: "🎉 R$ 7,75.", feedbackErro: "25+50=75; 3+4=7." },
      { pergunta: "0,7 é igual a:", opcoes: ["0,70", "0,07", "7,00"], correta: 0, feedbackAcerto: "🎉 0,70.", feedbackErro: "Zero à direita da vírgula não muda." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Troco em casa",
    materiais: ["Moedas ou papel"],
    passos: ["Simule uma compra de R$ 12,80.", "Pague com R$ 20,00.", "Calcule o troco."],
    registro: "📸 Foto da conta.",
  },
  recompensa: { xp: 220, moedas: 110 },
};

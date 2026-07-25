import type { AulaV4 } from "../../types";

export const aula01_comprimento: AulaV4 = {
  slug: "u6-01-comprimento",
  titulo: "Comprimento — m, cm e mm",
  iconeTrilha: "📏",
  bncc: ["EF04MA20", "EF04MA21"],
  duracaoMin: 22,
  metodologias: ["cpa", "rme"],

  momento01_motivacao: {
    titulo: "Régua de verdade",
    historia:
      "{NOME}, medir comprimento tem 3 unidades comuns: metro (m), centímetro (cm) e milímetro (mm). 1 m = 100 cm. 1 cm = 10 mm.",
  },
  momento02_exploracao: {
    instrucao: "Escala de conversões.",
    cenas: [
      { tipo: "texto", texto: "1 m = 100 cm = 1.000 mm.", destaque: true },
      { tipo: "texto", texto: "Prédios: metros. Lápis: centímetros. Formiga: milímetros." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como transformar m em cm?",
    pista: "Pense em zeros.",
    revelacao: "×100 pra descer (m→cm), ÷100 pra subir (cm→m).",
  },
  momento04_explicacao: {
    titulo: "Conversões",
    etapas: [
      {
        texto: "3 m em cm.",
        exemploReal: {
          contexto: "×100.",
          destaque: "3 m = 300 cm.",
        },
      },
      {
        texto: "250 cm em m.",
        exemploReal: {
          contexto: "÷100 → resto vira depois da vírgula.",
          destaque: "250 cm = 2,50 m = 2 m e 50 cm.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Uma corda mede 3 m e 40 cm. Quantos cm ao todo?",
    passos: ["3 m = 300 cm.", "300 + 40 = 340 cm."],
    resposta: "340 cm",
    casasValor: { numero: 340, mostrarDecomposicao: true, extenso: "trezentos e quarenta" },
  },
  momento06_praticaGuiada: {
    enunciado: "5 m = ? cm",
    dica: "×100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "500" }, { nome: "50" }, { nome: "5.000" }],
      respostaCerta: "500",
      feedbackAcerto: "🎯 500 cm.",
      feedbackErro: "×100 → 500.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "8 cm = ? mm",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "80" }, { nome: "8" }, { nome: "800" }],
      respostaCerta: "80",
      feedbackAcerto: "🎯 80 mm.",
      feedbackErro: "×10 → 80.",
    },
  },
  momento08_aplicacao: {
    contexto: "A altura da porta é 2 m e 10 cm.",
    problema: "Isso é quanto em cm?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "210 cm" }, { nome: "201 cm" }, { nome: "21 cm" }],
      respostaCerta: "210 cm",
      feedbackAcerto: "🎯 210 cm.",
      feedbackErro: "2×100+10=210.",
    },
  },
  momento09_revisao: {
    pontos: ["1 m = 100 cm. 1 cm = 10 mm."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "4 m = ? cm", opcoes: ["400", "40", "4.000"], correta: 0, feedbackAcerto: "🎉 400.", feedbackErro: "×100." },
      { pergunta: "600 cm = ? m", opcoes: ["6", "60", "0,6"], correta: 0, feedbackAcerto: "🎉 6.", feedbackErro: "÷100." },
      { pergunta: "5 cm = ? mm", opcoes: ["50", "500", "5"], correta: 0, feedbackAcerto: "🎉 50.", feedbackErro: "×10." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Medindo em casa",
    materiais: ["Régua", "Fita métrica"],
    passos: ["Meça 5 objetos.", "Escreva a medida em cm e depois em m."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

import type { AulaV4 } from "../../types";

export const aula01_equivalentes: AulaV4 = {
  slug: "u5-01-fracoes-equivalentes",
  titulo: "Frações equivalentes",
  iconeTrilha: "🍕",
  bncc: ["EF05MA03", "EF05MA04"],
  duracaoMin: 22,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Mesma parte, jeitos diferentes",
    historia: "{NOME}, 1/2 é o mesmo que 2/4, que é o mesmo que 4/8. São FRAÇÕES EQUIVALENTES — mesmo valor, aparências diferentes.",
  },
  momento02_exploracao: {
    instrucao: "Regra da equivalência.",
    cenas: [
      { tipo: "texto", texto: "Multiplique (ou divida) numerador E denominador pelo mesmo número.", destaque: true },
      { tipo: "texto", texto: "Ex.: 1/2 × 3/3 = 3/6. Mesma pizza, cortada mais fino." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "3/4 é o mesmo que quantos oitavos?",
    pista: "Multiplique cima e baixo por 2.",
    revelacao: "3/4 = 6/8.",
  },
  momento04_explicacao: {
    titulo: "Achar equivalentes",
    etapas: [
      { texto: "1/3 = 2/6 = 3/9 = 4/12 (multiplicando por 2, 3, 4)." },
      { texto: "Também vale simplificar: 8/12 ÷ 4/4 = 2/3." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Ache duas equivalentes a 2/5.",
    resposta: "4/10 e 6/15",
    passos: ["×2/2 = 4/10.", "×3/3 = 6/15."],
  },
  momento06_praticaGuiada: {
    enunciado: "Qual é equivalente a 1/4?",
    dica: "Multiplique por algum número.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/12" }, { nome: "2/6" }, { nome: "3/8" }],
      respostaCerta: "3/12",
      feedbackAcerto: "🎯 1×3/4×3 = 3/12.",
      feedbackErro: "3/12 = 1/4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Simplifique 6/9.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/3" }, { nome: "3/6" }, { nome: "1/2" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 ÷3/3.",
      feedbackErro: "6/9 ÷ 3/3 = 2/3.",
    },
  },
  momento08_aplicacao: {
    contexto: "Bolo cortado em 12 partes; você comeu 4.",
    problema: "Que fração?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Simplificada:",
      opcoes: [{ nome: "1/3" }, { nome: "2/6" }, { nome: "3/4" }],
      respostaCerta: "1/3",
      feedbackAcerto: "🎯 4/12 = 1/3.",
      feedbackErro: "4/12 ÷ 4/4 = 1/3.",
    },
  },
  momento09_revisao: {
    pontos: ["Multiplicar ou dividir cima E baixo pelo MESMO número.", "Simplificar = achar a forma mais 'limpa'."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Equivalente a 1/2:", opcoes: ["5/10", "2/5", "3/5"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5/10." },
      { pergunta: "Simplifique 10/15:", opcoes: ["2/3", "3/5", "5/10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷5/5 = 2/3." },
      { pergunta: "2/3 = ?/9", opcoes: ["6", "5", "7"], correta: 0, feedbackAcerto: "🎉 ×3.", feedbackErro: "6/9." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Pizza equivalente",
    materiais: ["Papel redondo"],
    passos: ["Desenhe uma pizza dividida em 4.", "Divida outra igual em 8.", "Pinte 1/4 na 1ª e 2/8 na 2ª. Confira que é o mesmo."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};

import type { AulaV4 } from "../../types";

export const aula03_somaMesmoDenom: AulaV4 = {
  slug: "u5-03-soma-mesmo-denom",
  titulo: "Somar e subtrair frações (mesmo denominador)",
  iconeTrilha: "➕",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Pedaços do mesmo tamanho",
    historia: "{NOME}, se os pedaços têm o MESMO TAMANHO (denominador igual), é só somar (ou subtrair) os numeradores.",
  },
  momento02_exploracao: {
    instrucao: "Regra dos denominadores iguais.",
    cenas: [{ tipo: "texto", texto: "2/7 + 3/7 = 5/7. Denominador NÃO muda!", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "5/8 − 2/8?",
    pista: "Só o numerador.",
    revelacao: "3/8.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      { texto: "3/10 + 4/10 = 7/10." },
      { texto: "9/12 − 5/12 = 4/12. Simplifica → 1/3." },
      { texto: "Sempre confira se dá pra simplificar no fim." },
    ],
  },
  momento05_modelagem: {
    enunciado: "5/9 + 2/9.",
    resposta: "7/9",
    passos: ["Denominadores iguais.", "5 + 2 = 7.", "= 7/9."],
  },
  momento06_praticaGuiada: {
    enunciado: "7/10 − 3/10.",
    dica: "Só o numerador.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "4/10 ou 2/5" }, { nome: "4/20" }, { nome: "10/10" }],
      respostaCerta: "4/10 ou 2/5",
      feedbackAcerto: "🎯",
      feedbackErro: "7−3 = 4/10 = 2/5.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3/8 + 4/8.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "7/8" }, { nome: "7/16" }, { nome: "12/8" }],
      respostaCerta: "7/8",
      feedbackAcerto: "🎯",
      feedbackErro: "3+4=7 → 7/8.",
    },
  },
  momento08_aplicacao: {
    contexto: "Pizza em 8 fatias. Miguel come 2 e Laura 3.",
    problema: "Quanto restou?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3/8" }, { nome: "5/8" }, { nome: "1/2" }],
      respostaCerta: "3/8",
      feedbackAcerto: "🎯 8/8 − 5/8.",
      feedbackErro: "1 − 5/8 = 3/8.",
    },
  },
  momento09_revisao: {
    pontos: ["Denominador não muda.", "Simplifica no fim se der."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/5 + 3/5 = ?", opcoes: ["4/5", "4/10", "4/25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4/5." },
      { pergunta: "9/12 − 3/12 = ?", opcoes: ["1/2", "6/24", "3/6"], correta: 0, feedbackAcerto: "🎉 6/12 = 1/2.", feedbackErro: "6/12 = 1/2." },
      { pergunta: "2/7 + 4/7 = ?", opcoes: ["6/7", "6/14", "8/7"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6/7." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Fatias iguais",
    materiais: ["Papel"],
    passos: ["Desenhe uma pizza em 6.", "Pinte 2 e depois +2. Some as frações."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};

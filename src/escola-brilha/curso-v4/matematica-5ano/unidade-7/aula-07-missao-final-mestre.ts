import type { AulaV4 } from "../../types";

export const aula07_missaoFinalMestre: AulaV4 = {
  slug: "u7-07-missao-final-mestre",
  titulo: "Missão Final — Mestre do Império",
  iconeTrilha: "👑",
  bncc: ["EF05MA07", "EF05MA14", "EF05MA20", "EF05MA24"],
  duracaoMin: 26,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Formatura",
    historia: "{NOME}, você chegou ao fim do 5º ano. Prova final: números, contas, frações, medidas, geometria e dados. Bora!",
  },
  momento02_exploracao: {
    instrucao: "6 desafios finais.",
    cenas: [{ tipo: "texto", texto: "Um item de cada área.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual sua maior arma?",
    pista: "Pensar antes de calcular.",
    revelacao: "Você já tem tudo.",
  },
  momento04_explicacao: {
    titulo: "Regras",
    etapas: [{ texto: "Uma resposta por item. Registre no papel se ajudar." }],
  },
  momento05_modelagem: {
    enunciado: "125.400 + 84.750.",
    resposta: "210.150",
    passos: ["Alinha CM/DM/UM/C/D/U.", "= 210.150."],
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: 25% de R$ 240.",
    dica: "÷ 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 60" }, { nome: "R$ 50" }, { nome: "R$ 70" }],
      respostaCerta: "R$ 60",
      feedbackAcerto: "🎯",
      feedbackErro: "R$ 60.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: retângulo 12 × 8 m — área.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "96 m²" }, { nome: "40 m²" }, { nome: "48 m²" }],
      respostaCerta: "96 m²",
      feedbackAcerto: "🎯",
      feedbackErro: "96 m².",
    },
  },
  momento08_aplicacao: {
    contexto: "Desafio 3: 2/3 + 1/6.",
    problema: "Resultado:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5/6" }, { nome: "3/9" }, { nome: "1/2" }],
      respostaCerta: "5/6",
      feedbackAcerto: "🎯",
      feedbackErro: "4/6 + 1/6 = 5/6.",
    },
  },
  momento09_revisao: {
    pontos: ["Você é Mestre do Império!", "5º ano concluído."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "50% de 340:", opcoes: ["170", "150", "200"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "170." },
      { pergunta: "0,75 + 1,25:", opcoes: ["2,00", "2,10", "1,90"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2,00." },
      { pergunta: "Cubo aresta 4 cm — volume:", opcoes: ["64 cm³", "48 cm³", "16 cm³"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "64 cm³." },
      { pergunta: "Dado. Sair par:", opcoes: ["1/2", "1/3", "1/6"], correta: 0, feedbackAcerto: "🎉 3/6.", feedbackErro: "1/2." },
      { pergunta: "Ponto (4,7): eixo Y é:", opcoes: ["7", "4", "0"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "7." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do MESTRE DO IMPÉRIO",
    materiais: ["Papel", "Canetinha"],
    passos: [
      "Faça um diploma bonito.",
      "Escreva: 'MESTRE DO IMPÉRIO DOS NÚMEROS'.",
      "Assine e coloque a data.",
      "Mostre pra família e ensine 1 coisa nova pra alguém.",
    ],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 300, moedas: 150, medalha: "Mestre do Império" },
};

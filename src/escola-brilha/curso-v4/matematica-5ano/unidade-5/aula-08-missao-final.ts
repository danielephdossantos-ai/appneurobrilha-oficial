import type { AulaV4 } from "../../types";

export const aula08_missaoFinal: AulaV4 = {
  slug: "u5-08-missao-final",
  titulo: "Missão Final — Cartógrafo das Partes",
  iconeTrilha: "🎖️",
  bncc: ["EF05MA03", "EF05MA04", "EF05MA05", "EF05MA06"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Prova das partes",
    historia: "{NOME}, frações, decimais e porcentagem — tudo é uma parte do todo. Bora provar que você domina!",
  },
  momento02_exploracao: {
    instrucao: "Desafios variados.",
    cenas: [{ tipo: "texto", texto: "Cada item mexe com um formato: fração, decimal ou %.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "1/2, 0,5 e 50% são a mesma coisa?",
    pista: "Traduza tudo pra fração.",
    revelacao: "Sim: 1/2 = 5/10 = 50/100.",
  },
  momento04_explicacao: {
    titulo: "Ponte fração ↔ decimal ↔ %",
    etapas: [
      { texto: "1/4 = 0,25 = 25%." },
      { texto: "3/10 = 0,3 = 30%." },
      { texto: "7/100 = 0,07 = 7%." },
    ],
  },
  momento05_modelagem: {
    enunciado: "1/5 vale quanto em % e decimal?",
    resposta: "0,2 = 20%",
    passos: ["1/5 = 2/10 = 0,2.", "= 20%."],
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: 3/8 + 1/8.",
    dica: "Denom igual.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "1/2" }, { nome: "4/16" }, { nome: "4/8" }],
      respostaCerta: "1/2",
      feedbackAcerto: "🎯 4/8=1/2.",
      feedbackErro: "1/2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: 25% de 160.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "40" }, { nome: "35" }, { nome: "45" }],
      respostaCerta: "40",
      feedbackAcerto: "🎯 ÷4.",
      feedbackErro: "40.",
    },
  },
  momento08_aplicacao: {
    contexto: "Compra: R$ 84,30 + R$ 15,75 − desconto de 10%.",
    problema: "Total a pagar?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 90,05" }, { nome: "R$ 100,05" }, { nome: "R$ 85,05" }],
      respostaCerta: "R$ 90,05",
      feedbackAcerto: "🎯 Total 100,05; desconto 10,005 (~10,00) → 90,05.",
      feedbackErro: "Aproximado: R$ 90,05.",
    },
  },
  momento09_revisao: { pontos: ["Cartógrafo das Partes!"] },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "0,75 em fração:", opcoes: ["3/4", "7/5", "75/10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3/4." },
      { pergunta: "50% de 84:", opcoes: ["42", "40", "44"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "42." },
      { pergunta: "2/3 + 1/6:", opcoes: ["5/6", "3/9", "1/2"], correta: 0, feedbackAcerto: "🎉 4/6 + 1/6.", feedbackErro: "5/6." },
      { pergunta: "12,4 + 3,58:", opcoes: ["15,98", "15,88", "16,08"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "15,98." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma das Partes",
    materiais: ["Papel"],
    passos: ["Faça um diploma.", "Mostre 3 conversões (fração ↔ decimal ↔ %)."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 230, moedas: 120, medalha: "Cartógrafo das Partes" },
};

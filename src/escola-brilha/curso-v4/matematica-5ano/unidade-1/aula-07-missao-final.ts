import type { AulaV4 } from "../../types";

export const aula07_missaoFinal: AulaV4 = {
  slug: "u1-07-missao-final",
  titulo: "Missão Final — Escriba do Império",
  iconeTrilha: "📜",
  bncc: ["EF05MA01", "EF05MA02"],
  duracaoMin: 22,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Prova do escriba",
    historia: "{NOME}, para virar Escriba do Império você precisa ler, escrever, comparar, ordenar e arredondar sem hesitar. Vamos lá!",
  },
  momento02_exploracao: {
    instrucao: "5 desafios em sequência.",
    cenas: [{ tipo: "texto", texto: "Cada acerto libera o próximo pergaminho.", destaque: true }],
  },
  momento03_descoberta: {
    perguntaGuia: "O que o Império pede num escriba?",
    pista: "Precisão e velocidade.",
    revelacao: "Ler, comparar e estimar com confiança.",
  },
  momento04_explicacao: {
    titulo: "Regras da prova",
    etapas: [
      { texto: "Toda pergunta é objetiva. Um erro não elimina — só atrasa." },
      { texto: "Use tudo que aprendeu: 6 casas, 2 classes, comparação da esquerda pra direita, vizinho do arredondamento, salto da sequência." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Modelo: escreva 'seiscentos e um mil, trinta'.",
    resposta: "601.030",
    passos: ["Classe milhares: 601.", "Classe unidades: 030.", "601.030."],
  },
  momento06_praticaGuiada: {
    enunciado: "Desafio 1: qual é o MAIOR — 723.400 ou 732.040?",
    dica: "DM decide.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "732.040" }, { nome: "723.400" }, { nome: "iguais" }],
      respostaCerta: "732.040",
      feedbackAcerto: "🎯 DM 3 > 2.",
      feedbackErro: "Empata em CM. DM: 3 > 2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Desafio 2: arredonde 84.750 pra unidade de milhar.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "85.000" }, { nome: "84.000" }, { nome: "80.000" }],
      respostaCerta: "85.000",
      feedbackAcerto: "🎯 Vizinho 7 ≥ 5.",
      feedbackErro: "Vizinho da UM é 7 → sobe → 85.000.",
    },
  },
  momento08_aplicacao: {
    contexto: "Desafio 3: sequência 3.000 · 6.000 · 12.000 · 24.000 · ___",
    problema: "Próximo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "48.000" }, { nome: "36.000" }, { nome: "30.000" }],
      respostaCerta: "48.000",
      feedbackAcerto: "🎯 Dobro.",
      feedbackErro: "×2 → 48.000.",
    },
  },
  momento09_revisao: {
    pontos: ["Você é Escriba!", "Tudo se resume a olhar as casas e o vizinho certo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Escreva 'novecentos mil e nove'.", opcoes: ["900.009", "900.090", "90.009"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "900 mil + 9 = 900.009." },
      { pergunta: "48.500 __ 48.050", opcoes: [">", "<", "="], correta: 0, feedbackAcerto: "🎉 C: 5 > 0.", feedbackErro: "Empata até UM. C: 5 > 0." },
      { pergunta: "Arredonde 315.480 pra DM.", opcoes: ["320.000", "310.000", "300.000"], correta: 0, feedbackAcerto: "🎉 Vizinho 5.", feedbackErro: "UM = 5 → DM sobe → 320.000." },
      { pergunta: "Sequência 100 · 200 · 400 · 800 · ___", opcoes: ["1.600", "1.000", "1.200"], correta: 0, feedbackAcerto: "🎉 ×2.", feedbackErro: "Dobro → 1.600." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma do Escriba",
    materiais: ["Papel", "Lápis"],
    passos: ["Faça um pergaminho.", "Anote seu nome como 'Escriba do Império'.", "Escreva 3 números de 6 algarismos e leia pra família."],
    registro: "📸 Foto do pergaminho.",
  },
  recompensa: { xp: 200, moedas: 100, medalha: "Escriba do Império" },
};

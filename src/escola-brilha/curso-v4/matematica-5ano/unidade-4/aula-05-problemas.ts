import type { AulaV4 } from "../../types";

export const aula05_problemas: AulaV4 = {
  slug: "u4-05-problemas",
  titulo: "Problemas de divisão",
  iconeTrilha: "🧩",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["vergnaud"],

  momento01_motivacao: {
    titulo: "Repartir com justiça",
    historia: "{NOME}, todo problema de divisão pergunta uma de duas coisas: 'quanto cada um recebe?' ou 'quantos grupos formam?'.",
  },
  momento02_exploracao: {
    instrucao: "Dois tipos.",
    cenas: [
      { tipo: "texto", texto: "PARTITIVA: sei o total e o número de partes → acho quanto cada uma tem.", destaque: true },
      { tipo: "texto", texto: "QUOTITATIVA: sei o total e o tamanho de cada parte → acho quantas partes formam." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "'240 balas para 8 crianças'. Que tipo?",
    pista: "Sei o total e o número de crianças.",
    revelacao: "Partitiva. 240 ÷ 8 = 30 por criança.",
  },
  momento04_explicacao: {
    titulo: "Reconhecendo o tipo",
    etapas: [
      { texto: "'Cada caixa leva 12 doces, temos 240' → quotitativa: 240 ÷ 12 = 20 caixas." },
      { texto: "'240 doces em 12 caixas iguais' → partitiva: 240 ÷ 12 = 20 doces por caixa." },
    ],
  },
  momento05_modelagem: {
    enunciado: "336 páginas em 14 capítulos iguais. Páginas por capítulo?",
    resposta: "24",
    passos: ["Partitiva.", "336 ÷ 14 = 24."],
    contaPassoAPasso: {
      operacao: "div",
      operandos: [336, 14],
      resultado: 24,
      passos: [
        { fala: "33 ÷ 14. Estimo: 14 × 2 = 28. Cabe (14 × 3 = 42 passaria). Escrevo 2. 33 − 28 = 5." },
        { fala: "Desço o 6. Fica 56. 14 × 4 = 56. Escrevo 4. 56 − 56 = 0. Resto 0." },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "500 mudas em bandejas de 25.",
    dica: "Quotitativa.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Bandejas?",
      opcoes: [{ nome: "20" }, { nome: "19" }, { nome: "21" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 500 ÷ 25 = 20.",
      feedbackErro: "20.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Uma loja tem 750 camisetas em 15 prateleiras iguais.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Por prateleira?",
      opcoes: [{ nome: "50" }, { nome: "45" }, { nome: "55" }],
      respostaCerta: "50",
      feedbackAcerto: "🎯 750 ÷ 15 = 50.",
      feedbackErro: "50.",
    },
  },
  momento08_aplicacao: {
    contexto: "R$ 1.440 dividido em 12 parcelas iguais.",
    problema: "Cada parcela?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 120" }, { nome: "R$ 110" }, { nome: "R$ 130" }],
      respostaCerta: "R$ 120",
      feedbackAcerto: "🎯",
      feedbackErro: "1.440 ÷ 12 = 120.",
    },
  },
  momento09_revisao: {
    pontos: ["Leia o que a pergunta quer.", "Partitiva ou quotitativa — a conta é a mesma.", "Verifique multiplicando."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "252 doces em 6 potes: por pote?", opcoes: ["42", "41", "43"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "42." },
      { pergunta: "480 kg em sacos de 20 kg: sacos?", opcoes: ["24", "23", "25"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "24." },
      { pergunta: "R$ 690 em 3 partes iguais: cada?", opcoes: ["R$ 230", "R$ 220", "R$ 240"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "R$ 230." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Divisão do dia",
    materiais: ["Papel"],
    passos: ["Ache uma conta de casa (mensalidade, aluguel).", "Divida por 2, 3 ou 4 pessoas."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};

import type { AulaV4 } from "../../types";

export const aula05_problemas: AulaV4 = {
  slug: "u2-05-problemas",
  titulo: "Problemas de + e −",
  iconeTrilha: "🧩",
  bncc: ["EF05MA07"],
  duracaoMin: 20,
  metodologias: ["vergnaud"],

  momento01_motivacao: {
    titulo: "Quando somar? Quando subtrair?",
    historia: "{NOME}, todo problema pede uma pergunta: 'juntar/aumentar' → SOMA. 'tirar/comparar/faltar' → SUBTRAÇÃO.",
  },
  momento02_exploracao: {
    instrucao: "Palavras-chave.",
    cenas: [
      { tipo: "texto", texto: "Somar: total, juntando, chegaram, ganhou, ao todo.", destaque: true },
      { tipo: "texto", texto: "Subtrair: sobrou, restou, diferença, perdeu, falta." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "'Ana tem 12.500 pontos e Bruno 8.740. Quem tem mais e por quanto?'",
    pista: "Comparação = subtração.",
    revelacao: "12.500 − 8.740 = 3.760. Ana tem 3.760 pontos a mais.",
  },
  momento04_explicacao: {
    titulo: "Como resolver problemas",
    etapas: [
      { texto: "1º Leia devagar. 2º Marque números. 3º Descubra a pergunta. 4º Escolha + ou −. 5º Arme a conta. 6º Confira." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Uma fazenda tinha 24.560 laranjas; colheu mais 8.735. Total?",
    resposta: "33.295",
    passos: ["'Colheu mais' = juntou = SOMA.", "24.560 + 8.735 = 33.295."],
    contaPassoAPasso: {
      operacao: "soma",
      operandos: [24560, 8735],
      resultado: 33295,
      passos: [
        { coluna: "U", fala: "0 + 5 = 5.", digito: 5 },
        { coluna: "D", fala: "6 + 3 = 9.", digito: 9 },
        { coluna: "C", fala: "5 + 7 = 12 · 2, vai 1.", digito: 2, vaiUm: 1 },
        { coluna: "UM", fala: "4 + 8 + 1 = 13 · 3, vai 1.", digito: 3, vaiUm: 1 },
        { coluna: "DM", fala: "2 + 0 + 1 = 3.", digito: 3 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Estádio: 45.000 lugares. Compareceram 32.478. Quantos vagos?",
    dica: "'Vagos' = subtração.",
    interacao: {
      tipo: "contaPassoAPasso",
      operacao: "sub",
      operandos: [45000, 32478],
      resultado: 12522,
      modo: "explicacao",
      passos: [
        { coluna: "U", fala: "Empréstimo em cadeia: 10 − 8 = 2.", digito: 2 },
        { coluna: "D", fala: "9 − 7 = 2.", digito: 2 },
        { coluna: "C", fala: "9 − 4 = 5.", digito: 5 },
        { coluna: "UM", fala: "4 − 2 = 2.", digito: 2 },
        { coluna: "DM", fala: "4 − 3 = 1.", digito: 1 },
      ],
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Carla tinha R$ 3.475. Gastou R$ 1.298 e recebeu R$ 850. Quanto tem agora?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "R$ 3.027" }, { nome: "R$ 2.977" }, { nome: "R$ 3.127" }],
      respostaCerta: "R$ 3.027",
      feedbackAcerto: "🎯 3.475 − 1.298 + 850 = 3.027.",
      feedbackErro: "Passo a passo: 3.475 − 1.298 = 2.177 · 2.177 + 850 = 3.027.",
    },
  },
  momento08_aplicacao: {
    contexto: "Torneio: 8.750 inscritos, 1.845 desistiram, entraram mais 620.",
    problema: "Quantos participam?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7.525" }, { nome: "7.425" }, { nome: "7.625" }],
      respostaCerta: "7.525",
      feedbackAcerto: "🎯 8.750 − 1.845 + 620 = 7.525.",
      feedbackErro: "8.750 − 1.845 = 6.905 · 6.905 + 620 = 7.525.",
    },
  },
  momento09_revisao: {
    pontos: ["Sublinhe números.", "Identifique a pergunta.", "Escolha + ou −.", "Confira estimando."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "12.400 + 8.575 = ?", opcoes: ["20.975", "20.875", "21.075"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "20.975." },
      { pergunta: "30.000 − 14.782 = ?", opcoes: ["15.218", "15.318", "14.218"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "15.218." },
      { pergunta: "'Diferença entre 5.200 e 3.847'?", opcoes: ["1.353", "1.453", "1.253"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5.200 − 3.847 = 1.353." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Problema real",
    materiais: ["Nota fiscal"],
    passos: ["Some 3 valores.", "Descubra o troco de uma nota de R$ 100 ou R$ 200.", "Explique cada passo."],
    registro: "📸 Foto da nota.",
  },
  recompensa: { xp: 140, moedas: 75 },
};

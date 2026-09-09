import type { AulaV4 } from "../../types";

export const aula05_propriedades: AulaV4 = {
  slug: "u3-05-propriedades",
  titulo: "Propriedades da multiplicação",
  iconeTrilha: "🔁",
  bncc: ["EF05MA08"],
  duracaoMin: 20,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Truques que aceleram tudo",
    historia: "{NOME}, três propriedades tornam a multiplicação muito mais fácil.",
  },
  momento02_exploracao: {
    instrucao: "As três propriedades.",
    cenas: [
      { tipo: "texto", texto: "COMUTATIVA: a × b = b × a. Ex.: 4 × 25 = 25 × 4.", destaque: true },
      { tipo: "texto", texto: "ASSOCIATIVA: (a × b) × c = a × (b × c). Ex.: (2 × 5) × 7 = 2 × (5 × 7) = 70." },
      { tipo: "texto", texto: "DISTRIBUTIVA: a × (b + c) = a × b + a × c. Ex.: 6 × 23 = 6×20 + 6×3 = 138." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "8 × 25?",
    pista: "Comutativa e associativa: 8 × 25 = 25 × 8 = 200. Ou 4 × (2 × 25).",
    revelacao: "200.",
  },
  momento04_explicacao: {
    titulo: "Usar propriedades pra fazer mentalmente",
    etapas: [
      { texto: "35 × 4 = 4 × 35 (comutativa). Fica mais fácil mentalmente." },
      { texto: "12 × 25 = (12/2) × (25×2) = 6 × 50 = 300. (Truque com pares.)" },
      { texto: "7 × 102 = 7 × (100 + 2) = 700 + 14 = 714 (distributiva)." },
    ],
  },
  momento05_modelagem: {
    enunciado: "6 × 15 usando distributiva.",
    resposta: "90",
    passos: ["6 × 15 = 6 × (10 + 5).", "6×10 + 6×5.", "60 + 30 = 90."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 8 × 125.",
    dica: "125 = 100 + 25.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "1.000" }, { nome: "900" }, { nome: "1.100" }],
      respostaCerta: "1.000",
      feedbackAcerto: "🎯 8×100 + 8×25 = 800 + 200 = 1.000.",
      feedbackErro: "8 × 125 = 1.000.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 5 × 48 (use distributiva).",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "240" }, { nome: "230" }, { nome: "250" }],
      respostaCerta: "240",
      feedbackAcerto: "🎯 5×50 − 5×2 = 250 − 10 = 240.",
      feedbackErro: "5 × 48 = 240.",
    },
  },
  momento08_aplicacao: {
    contexto: "3 caixas com 4 pacotes de 25 doces cada.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "300" }, { nome: "250" }, { nome: "400" }],
      respostaCerta: "300",
      feedbackAcerto: "🎯 (3×4)×25 = 12×25 = 300.",
      feedbackErro: "Associativa: 3×4=12, 12×25=300.",
    },
  },
  momento09_revisao: {
    pontos: ["Comutativa: troca ordem.", "Associativa: reagrupa fatores.", "Distributiva: quebra em soma/subtração."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "15 × 4 = ?", opcoes: ["60", "50", "70"], correta: 0, feedbackAcerto: "🎉 4×15=60.", feedbackErro: "60." },
      { pergunta: "9 × 101 = ?", opcoes: ["909", "919", "899"], correta: 0, feedbackAcerto: "🎉 9×100 + 9.", feedbackErro: "909." },
      { pergunta: "(5 × 2) × 8 = ?", opcoes: ["80", "70", "90"], correta: 0, feedbackAcerto: "🎉 10×8.", feedbackErro: "80." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Truques mentais",
    materiais: ["Papel"],
    passos: ["Faça 5 contas usando distributiva.", "Compare com o algoritmo tradicional."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 140, moedas: 75 },
};

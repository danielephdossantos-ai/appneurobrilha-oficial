import type { AulaV4 } from "../../types";

export const aula02_multPor10100: AulaV4 = {
  slug: "u3-02-mult-por-10-100-1000",
  titulo: "Multiplicar por 10, 100 e 1.000",
  iconeTrilha: "0️⃣",
  bncc: ["EF05MA07"],
  duracaoMin: 18,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "O truque dos zeros",
    historia: "{NOME}, multiplicar por 10, 100 ou 1.000 é o truque mais rápido da matemática: só acrescentar zeros.",
  },
  momento02_exploracao: {
    instrucao: "Cada zero desloca uma casa pra esquerda.",
    cenas: [
      { tipo: "texto", texto: "× 10 → +1 zero. × 100 → +2 zeros. × 1.000 → +3 zeros.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "347 × 100 = ?",
    pista: "Dois zeros.",
    revelacao: "347 vira 34.700.",
  },
  momento04_explicacao: {
    titulo: "Regra dos zeros",
    etapas: [
      { texto: "25 × 10 = 250 · 25 × 100 = 2.500 · 25 × 1.000 = 25.000." },
      { texto: "Se tiver 2 fatores redondos: 40 × 200 = 4 × 2 seguido dos zeros → 8.000." },
    ],
  },
  momento05_modelagem: {
    enunciado: "60 × 300.",
    resposta: "18.000",
    passos: ["6 × 3 = 18.", "Junte 3 zeros (1 + 2).", "= 18.000."],
  },
  momento06_praticaGuiada: {
    enunciado: "Juntos: 425 × 100.",
    dica: "2 zeros.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "42.500" }, { nome: "4.250" }, { nome: "425.000" }],
      respostaCerta: "42.500",
      feedbackAcerto: "🎯",
      feedbackErro: "425 + 2 zeros = 42.500.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 80 × 500.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "40.000" }, { nome: "4.000" }, { nome: "400.000" }],
      respostaCerta: "40.000",
      feedbackAcerto: "🎯 8×5=40, +3 zeros.",
      feedbackErro: "40.000.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma indústria fabrica 350 peças/dia por 30 dias.",
    problema: "Total?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "10.500" }, { nome: "1.050" }, { nome: "105.000" }],
      respostaCerta: "10.500",
      feedbackAcerto: "🎯 35×3=105, +2 zeros.",
      feedbackErro: "350 × 30 = 10.500.",
    },
  },
  momento09_revisao: {
    pontos: ["Conte zeros dos dois fatores.", "Multiplique só os dígitos não-zero.", "Acrescente os zeros no fim."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "27 × 100 = ?", opcoes: ["2.700", "270", "27.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2.700." },
      { pergunta: "9 × 1.000 = ?", opcoes: ["9.000", "900", "90.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9.000." },
      { pergunta: "50 × 400 = ?", opcoes: ["20.000", "2.000", "200.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "5×4=20, +3 zeros → 20.000." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Truque dos zeros",
    materiais: ["Papel"],
    passos: ["Invente 5 contas × 10, 100 ou 1.000.", "Confira em segundos."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 130, moedas: 70 },
};

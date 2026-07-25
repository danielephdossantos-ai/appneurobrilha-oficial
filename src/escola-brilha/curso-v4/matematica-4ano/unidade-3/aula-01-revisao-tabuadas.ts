import type { AulaV4 } from "../../types";

export const aula01_revisaoTabuadas: AulaV4 = {
  slug: "u3-01-revisao-tabuadas",
  titulo: "Tabuadas — Revisão do Reino",
  iconeTrilha: "✖️",
  bncc: ["EF04MA04", "EF04MA06"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Multiplicar é somar rápido",
    historia:
      "{NOME}, o Reino é grande. Somar um a um leva anos. Multiplicar é um atalho: 6 × 4 já é 4 + 4 + 4 + 4 + 4 + 4 = 24.",
  },
  momento02_exploracao: {
    instrucao: "Olhe as tabuadas fáceis.",
    cenas: [
      { tipo: "tabuada", fator: 2, ate: 10, titulo: "Tabuada do 2" },
      { tipo: "tabuada", fator: 5, ate: 10, titulo: "Tabuada do 5" },
      { tipo: "tabuada", fator: 10, ate: 10, titulo: "Tabuada do 10" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Tem padrão na tabuada do 10?",
    pista: "Olhe o último dígito.",
    revelacao: "×10 termina em 0. ×5 termina em 0 ou 5. ×2 dá sempre par.",
  },
  momento04_explicacao: {
    titulo: "Consulte a tabuada",
    etapas: [
      {
        texto: "Sempre que precisar, olhe a tabuada. É a régua do multiplicador.",
        exemploReal: {
          contexto: "Qual é 7 × 4?",
          destaque: "Procure na linha do 4: 4 · 8 · 12 · 16 · 20 · 24 · 28 → 7 × 4 = 28.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quanto é 8 × 6?",
    passos: ["Linha do 6: 6, 12, 18, 24, 30, 36, 42, 48.", "O 8º termo é 48."],
    resposta: "48",
  },
  momento06_praticaGuiada: {
    enunciado: "7 × 8 = ?",
    dica: "Linha do 8: 8, 16, 24, 32, 40, 48, 56.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "56" }, { nome: "54" }, { nome: "64" }],
      respostaCerta: "56",
      feedbackAcerto: "🎯 56.",
      feedbackErro: "Sétimo termo da tabuada do 8: 56.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "9 × 6 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "54" }, { nome: "56" }, { nome: "48" }],
      respostaCerta: "54",
      feedbackAcerto: "🎯 54.",
      feedbackErro: "6·9=54.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada caixa tem 8 laranjas.",
    problema: "9 caixas têm quantas laranjas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "72" }, { nome: "64" }, { nome: "81" }],
      respostaCerta: "72",
      feedbackAcerto: "🎯 72 laranjas.",
      feedbackErro: "9 × 8 = 72.",
    },
  },
  momento09_revisao: {
    pontos: ["Multiplicar = somar em grupos.", "Use a tabuada como consulta."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "6 × 7 = ?", opcoes: ["42", "36", "48"], correta: 0, feedbackAcerto: "🎉 42.", feedbackErro: "Linha do 7: 42." },
      { pergunta: "8 × 9 = ?", opcoes: ["72", "64", "81"], correta: 0, feedbackAcerto: "🎉 72.", feedbackErro: "8·9=72." },
      { pergunta: "5 × 12 = ?", opcoes: ["60", "50", "70"], correta: 0, feedbackAcerto: "🎉 60.", feedbackErro: "5·12=60." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Quiz da Tabuada",
    materiais: ["Papel"],
    passos: ["Escreva as tabuadas de 6, 7, 8 e 9.", "Peça alguém pra sortear e você responde de cor."],
    registro: "📸 Foto das tabuadas.",
  },
  recompensa: { xp: 180, moedas: 90 },
};

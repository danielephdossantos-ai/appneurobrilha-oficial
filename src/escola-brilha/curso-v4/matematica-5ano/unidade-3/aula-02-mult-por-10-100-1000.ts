import type { AulaV4 } from "../../types";

export const aula02_multPor10100: AulaV4 = {
  slug: "u3-02-mult-por-10-100-1000",
  titulo: "Multiplicar por 10, 100 e 1.000",
  iconeTrilha: "0️⃣",
  bncc: ["EF05MA08"],
  duracaoMin: 18,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Cada algarismo muda de ordem",
    historia: "{NOME}, multiplicar por 10, 100 ou 1.000 ajuda a enxergar como o valor de cada algarismo muda no sistema decimal.",
  },
  momento02_exploracao: {
    instrucao: "Observe quantas ordens cada algarismo se desloca para a esquerda.",
    cenas: [
      { tipo: "texto", texto: "Ao multiplicar um número natural por 10, 100 ou 1.000, cada algarismo passa a valer 10, 100 ou 1.000 vezes mais e se desloca 1, 2 ou 3 ordens para a esquerda.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "347 × 100 = ?",
    pista: "Dois zeros.",
    revelacao: "347 vira 34.700.",
  },
  momento04_explicacao: {
    titulo: "Valor posicional e potências de 10",
    etapas: [
      { texto: "Em 25 × 10, as 2 dezenas passam a 2 centenas e as 5 unidades passam a 5 dezenas: 250. Do mesmo modo, 25 × 100 = 2.500 e 25 × 1.000 = 25.000." },
      { texto: "Em 40 × 200, decomponha: (4 × 10) × (2 × 100) = (4 × 2) × (10 × 100) = 8 × 1.000 = 8.000." },
    ],
  },
  momento05_modelagem: {
    enunciado: "60 × 300.",
    resposta: "18.000",
    passos: ["60 = 6 × 10 e 300 = 3 × 100.", "(6 × 3) × (10 × 100) = 18 × 1.000.", "Resultado: 18.000."],
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
      feedbackErro: "Cada algarismo de 425 se desloca duas ordens para a esquerda: 42.500.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Sua vez: 80 × 500.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado?",
      opcoes: [{ nome: "40.000" }, { nome: "4.000" }, { nome: "400.000" }],
      respostaCerta: "40.000",
      feedbackAcerto: "🎯 (8×10)×(5×100)=40×1.000=40.000.",
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
      feedbackAcerto: "🎯 (35×10)×(3×10)=105×100=10.500.",
      feedbackErro: "350 × 30 = 10.500.",
    },
  },
  momento09_revisao: {
    pontos: ["Decomponha os múltiplos de 10.", "Multiplique os fatores básicos e as potências de 10.", "Confira como cada algarismo mudou de ordem."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "27 × 100 = ?", opcoes: ["2.700", "270", "27.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2.700." },
      { pergunta: "9 × 1.000 = ?", opcoes: ["9.000", "900", "90.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "9.000." },
      { pergunta: "50 × 400 = ?", opcoes: ["20.000", "2.000", "200.000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(5×10)×(4×100)=20×1.000=20.000." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Deslocamento de ordens",
    materiais: ["Papel"],
    passos: ["Invente 5 contas × 10, 100 ou 1.000.", "Explique como cada algarismo mudou de ordem e confira os resultados."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 130, moedas: 70 },
};

import type { AulaV4 } from "../../types";

export const aula02_multPor10E100: AulaV4 = {
  slug: "u3-02-mult-por-10-e-100",
  titulo: "Multiplicar por 10, 100 e 1.000",
  iconeTrilha: "0️⃣",
  bncc: ["EF04MA04"],
  duracaoMin: 20,
  metodologias: ["skemp", "rme"],

  momento01_motivacao: {
    titulo: "O truque dos zeros",
    historia:
      "{NOME}, multiplicar por 10, 100 ou 1.000 é só empurrar zeros pra direita.",
  },
  momento02_exploracao: {
    instrucao: "Repare no padrão.",
    cenas: [
      { tipo: "texto", texto: "×10 → 1 zero. ×100 → 2 zeros. ×1000 → 3 zeros.", destaque: true },
      { tipo: "texto", texto: "Ex.: 34 × 10 = 340. 34 × 100 = 3.400. 34 × 1000 = 34.000." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que funciona?",
    pista: "Pense em casas de valor.",
    revelacao: "Cada zero puxa o número uma casa pra ESQUERDA — pra valer 10 vezes mais.",
  },
  momento04_explicacao: {
    titulo: "Regra dos zeros",
    etapas: [
      {
        texto: "Quantos zeros o multiplicador tem, tantos zeros aparecem no final.",
        exemploReal: {
          contexto: "45 × 100.",
          destaque: "45 × 100 = 4.500. Acrescento 2 zeros ao 45.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quanto é 27 × 1000?",
    passos: ["1000 tem 3 zeros.", "27 → 27 000.", "27.000."],
    resposta: "27.000",
    casasValor: { numero: 27000, mostrarDecomposicao: true, extenso: "vinte e sete mil" },
  },
  momento06_praticaGuiada: {
    enunciado: "56 × 100 = ?",
    dica: "Cole 2 zeros no fim do 56.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5.600" }, { nome: "560" }, { nome: "56.000" }],
      respostaCerta: "5.600",
      feedbackAcerto: "🎯 5.600.",
      feedbackErro: "×100 = 2 zeros.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "82 × 10 = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "820" }, { nome: "82" }, { nome: "8.200" }],
      respostaCerta: "820",
      feedbackAcerto: "🎯 820.",
      feedbackErro: "×10 = 1 zero.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cada caminhão do Reino carrega 100 caixas.",
    problema: "37 caminhões carregam quantas caixas?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3.700" }, { nome: "370" }, { nome: "37.000" }],
      respostaCerta: "3.700",
      feedbackAcerto: "🎯 3.700 caixas.",
      feedbackErro: "37 × 100 = 3.700.",
    },
  },
  momento09_revisao: {
    pontos: ["Cole tantos zeros quantos o multiplicador tiver."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "45 × 10 = ?", opcoes: ["450", "45", "4.500"], correta: 0, feedbackAcerto: "🎉 450.", feedbackErro: "×10 → 1 zero." },
      { pergunta: "12 × 100 = ?", opcoes: ["1.200", "120", "12.000"], correta: 0, feedbackAcerto: "🎉 1.200.", feedbackErro: "×100 → 2 zeros." },
      { pergunta: "8 × 1000 = ?", opcoes: ["8.000", "800", "80.000"], correta: 0, feedbackAcerto: "🎉 8.000.", feedbackErro: "×1000 → 3 zeros." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Cadeia de Zeros",
    materiais: ["Papel"],
    passos: ["Escolha um número de 2 algarismos.", "Multiplique por 10, 100 e 1.000.", "Escreva os três resultados."],
    registro: "📸 Foto dos três resultados.",
  },
  recompensa: { xp: 180, moedas: 90 },
};

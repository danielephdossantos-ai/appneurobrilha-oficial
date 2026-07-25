import type { AulaV4 } from "../../types";

export const aula06_volume: AulaV4 = {
  slug: "u6-06-volume",
  titulo: "Volume: cm³ e m³",
  iconeTrilha: "🧊",
  bncc: ["EF05MA21"],
  duracaoMin: 22,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Quanto cabe dentro?",
    historia: "{NOME}, volume mede o espaço DENTRO de um sólido. Num paralelepípedo: V = comprimento × largura × altura.",
  },
  momento02_exploracao: {
    instrucao: "Unidades.",
    cenas: [
      { tipo: "texto", texto: "1 m³ = 1.000.000 cm³. 1 dm³ = 1 L (importante!).", destaque: true },
      { tipo: "texto", texto: "Paralelepípedo: V = c × l × a." },
      { tipo: "texto", texto: "Cubo: V = aresta³." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Caixa 4 × 3 × 2 cm?",
    pista: "Multiplique tudo.",
    revelacao: "24 cm³.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      { texto: "Aquário 40 × 30 × 20 cm → 24.000 cm³ = 24 L." },
      { texto: "Cubo 5 cm → 5×5×5 = 125 cm³." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Caixa 10 × 5 × 4 cm.",
    resposta: "200 cm³",
    passos: ["10 × 5 = 50.", "50 × 4 = 200."],
  },
  momento06_praticaGuiada: {
    enunciado: "Cubo de 6 cm de aresta.",
    dica: "a³.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Volume:",
      opcoes: [{ nome: "216 cm³" }, { nome: "36 cm³" }, { nome: "18 cm³" }],
      respostaCerta: "216 cm³",
      feedbackAcerto: "🎯 6³.",
      feedbackErro: "216.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Caixa 12 × 8 × 5 cm.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Volume:",
      opcoes: [{ nome: "480 cm³" }, { nome: "460 cm³" }, { nome: "500 cm³" }],
      respostaCerta: "480 cm³",
      feedbackAcerto: "🎯",
      feedbackErro: "480.",
    },
  },
  momento08_aplicacao: {
    contexto: "Piscina 5 m × 3 m × 1 m.",
    problema: "Volume?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15 m³" }, { nome: "9 m³" }, { nome: "8 m³" }],
      respostaCerta: "15 m³",
      feedbackAcerto: "🎯 5×3×1.",
      feedbackErro: "15 m³.",
    },
  },
  momento09_revisao: {
    pontos: ["Paralelepípedo: c × l × a.", "Cubo: a³.", "1 dm³ = 1 L."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Caixa 3×3×3:", opcoes: ["27", "9", "18"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "27." },
      { pergunta: "Caixa 6×4×2:", opcoes: ["48", "44", "52"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "48." },
      { pergunta: "1 L em cm³:", opcoes: ["1000", "100", "10000"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "1.000." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Volume da caixa",
    materiais: ["Régua", "Caixa qualquer"],
    passos: ["Meça c × l × a.", "Multiplique e escreva em cm³."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};

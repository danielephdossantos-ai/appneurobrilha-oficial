import type { AulaV4 } from "../../types";

export const aula03_ladosVertices: AulaV4 = {
  slug: "u6-03-lados-vertices",
  titulo: "Lados, Vértices e Ângulos",
  iconeTrilha: "📐",
  bncc: ["EF03MA14"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "A ficha técnica das figuras",
    historia: "Cada figura tem 'ficha': número de lados, vértices (A, B, C…) e ângulos.",
  },
  momento02_exploracao: {
    instrucao: "Vocabulário geométrico com figuras reais.",
    cenas: [
      { tipo: "figuraPlana", forma: "pentagono", mostrarVertices: true, legenda: "Pentágono — 5 lados" },
      { tipo: "figuraPlana", forma: "hexagono", mostrarVertices: true, legenda: "Hexágono — 6 lados" },
      { tipo: "figuraPlana", forma: "octogono", mostrarVertices: true, legenda: "Octógono — 8 lados" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que é ângulo reto?",
    pista: "Formato de L.",
    revelacao: "Ângulo reto = 90°. Quadrado e retângulo têm 4 ângulos retos.",
  },
  momento04_explicacao: {
    titulo: "Contar direito",
    etapas: [
      {
        texto: "Pentágono: 5 lados, 5 vértices (A, B, C, D, E).",
        exemploReal: {
          contexto: "Home plate do beisebol.",
          destaque: "Penta = 5.",
          visualMat: { tipo: "figuraPlana", forma: "pentagono", mostrarVertices: true },
        },
      },
      {
        texto: "Hexágono: 6 lados, 6 vértices.",
        exemploReal: {
          contexto: "Colmeia de abelha.",
          destaque: "Hexa = 6.",
          visualMat: { tipo: "figuraPlana", forma: "hexagono", mostrarVertices: true },
        },
      },
      {
        texto: "Quadrado: 4 ângulos retos (90°).",
        exemploReal: {
          contexto: "Janela.",
          destaque: "Ângulo reto marcado com o quadradinho.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Um hexágono tem quantos vértices?",
    passos: ["Hexágono = 6 lados.", "6 lados = 6 vértices."],
    resposta: "6 vértices",
    visualMat: { tipo: "figuraPlana", forma: "hexagono", mostrarVertices: true },
  },
  momento06_praticaGuiada: {
    enunciado: "Pentágono tem quantos lados?",
    dica: "Prefixo 'penta'.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "4" }, { nome: "6" }],
      respostaCerta: "5",
      feedbackAcerto: "🎉 5.",
      feedbackErro: "Penta = 5.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Quadrado tem quantos ângulos retos?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4" }, { nome: "2" }, { nome: "0" }],
      respostaCerta: "4",
      feedbackAcerto: "🎯 4.",
      feedbackErro: "Quadrado: 4 cantos de 90°.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma placa 'PARE' tem 8 lados.",
    problema: "Nome:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Octógono" }, { nome: "Hexágono" }, { nome: "Pentágono" }],
      respostaCerta: "Octógono",
      feedbackAcerto: "🎯 Octo = 8.",
      feedbackErro: "8 lados = octógono.",
    },
  },
  momento09_revisao: {
    pontos: ["Nº de lados = nº de vértices.", "Ângulo reto = 90°."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Colmeia lembra qual figura?",
      opcoes: [{ nome: "Hexágono" }, { nome: "Círculo" }, { nome: "Triângulo" }],
      respostaCerta: "Hexágono",
      feedbackAcerto: "🎉 Hexágono.",
      feedbackErro: "Colmeia = hexágono.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Ângulo reto vale?", opcoes: ["90°", "180°", "45°"], correta: 0, feedbackAcerto: "🎉 90°.", feedbackErro: "Reto = 90°." },
      { pergunta: "Triângulo tem quantos ângulos?", opcoes: ["3", "4", "2"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "3 lados = 3 ângulos." },
      { pergunta: "5 lados = ?", opcoes: ["Pentágono", "Hexágono", "Octógono"], correta: 0, feedbackAcerto: "🎉 Pentágono.", feedbackErro: "Penta = 5." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Ficha técnica",
    materiais: ["Papel"],
    passos: ["Escolha 3 objetos.", "Anote lados, vértices e se tem ângulo reto."],
    registro: "📸 Foto da ficha.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

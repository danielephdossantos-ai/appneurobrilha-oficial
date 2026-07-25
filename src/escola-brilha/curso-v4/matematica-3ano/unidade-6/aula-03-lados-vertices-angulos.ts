import type { AulaV4 } from "../../types";

export const aula03_ladosVertices: AulaV4 = {
  slug: "u6-03-lados-vertices",
  titulo: "Lados, Vértices e Cantos",
  iconeTrilha: "📐",
  bncc: ["EF03MA14"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Contar peças",
    historia: "Cada figura tem uma 'ficha técnica': lados, vértices e ângulos.",
  },
  momento02_exploracao: {
    instrucao: "Vocabulário geométrico.",
    cenas: [
      { tipo: "texto", texto: "Lado = borda reta. Vértice = canto. Ângulo = abertura." },
      { tipo: "texto", texto: "Nº de lados = nº de vértices.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Ângulo reto é o quê?",
    pista: "Formato de L.",
    revelacao: "Ângulo reto = 90°. Quadrado e retângulo têm 4 ângulos retos.",
  },
  momento04_explicacao: {
    titulo: "Contar direito",
    etapas: [
      {
        texto: "Pentágono: 5 lados, 5 vértices.",
        exemploReal: { contexto: "Home plate do beisebol.", destaque: "Prefixo penta = 5." },
      },
      {
        texto: "Hexágono: 6 lados.",
        exemploReal: { contexto: "Colmeia de abelha.", destaque: "Hexa = 6." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Um hexágono tem quantos vértices?",
    passos: ["Hexágono = 6 lados.", "6 lados = 6 vértices."],
    resposta: "6 vértices",
    casasValor: { numero: 6, mostrarDecomposicao: false, extenso: "seis" },
  },
  momento06_praticaGuiada: {
    enunciado: "Pentágono tem quantos lados?",
    dica: "Penta.",
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
    pontos: ["Lados = vértices.", "Ângulo reto = 90°."],
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

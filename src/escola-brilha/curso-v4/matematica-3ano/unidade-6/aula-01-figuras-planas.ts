import type { AulaV4 } from "../../types";

export const aula01_figurasPlanas: AulaV4 = {
  slug: "u6-01-figuras-planas",
  titulo: "Figuras Planas",
  iconeTrilha: "⬛",
  bncc: ["EF03MA13"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Olha ao redor",
    historia: "Tudo tem forma. Janela é quadrado. Roda é círculo. Placa de PARE é octógono!",
  },
  momento02_exploracao: {
    instrucao: "As figuras principais — repare em vértices e lados.",
    cenas: [
      { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true, legenda: "Quadrado ABCD" },
      { tipo: "figuraPlana", forma: "retangulo", mostrarVertices: true, mostrarAngulos: true, legenda: "Retângulo ABCD" },
      { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true, legenda: "Triângulo ABC" },
      { tipo: "figuraPlana", forma: "circulo", legenda: "Círculo — centro O" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual a diferença entre quadrado e retângulo?",
    pista: "Compare os lados.",
    revelacao: "Quadrado: 4 lados iguais. Retângulo: 2 pares de lados iguais.",
  },
  momento04_explicacao: {
    titulo: "Identificar figuras",
    etapas: [
      {
        texto: "Quadrado: 4 lados iguais e 4 ângulos retos (90°).",
        exemploReal: {
          contexto: "Azulejo do banheiro.",
          destaque: "4 lados = 4 vértices A, B, C, D.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true, medidasLados: ["4 cm", "4 cm", "4 cm", "4 cm"] },
        },
      },
      {
        texto: "Triângulo: 3 lados, 3 vértices.",
        exemploReal: {
          contexto: "Fatia de pizza.",
          destaque: "Vértices A, B, C.",
          visualMat: { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true },
        },
      },
      {
        texto: "Círculo: sem lados retos, sem vértices — só centro.",
        exemploReal: {
          contexto: "Roda de bicicleta.",
          destaque: "Curva contínua.",
          visualMat: { tipo: "figuraPlana", forma: "circulo" },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantos lados tem um retângulo?",
    passos: ["Retângulo tem 4 lados.", "2 pares de lados iguais."],
    resposta: "4 lados",
    visualMat: { tipo: "figuraPlana", forma: "retangulo", mostrarVertices: true, mostrarAngulos: true, medidasLados: ["6 cm", "3 cm", "6 cm", "3 cm"] },
  },
  momento06_praticaGuiada: {
    enunciado: "Uma janela quadrada tem quantos vértices?",
    dica: "Conte os cantos A, B, C, D.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "4" }, { nome: "3" }, { nome: "6" }],
      respostaCerta: "4",
      feedbackAcerto: "🎉 4 cantos.",
      feedbackErro: "Quadrado: 4 vértices.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Quantos lados tem um triângulo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "4" }, { nome: "5" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 3 lados.",
      feedbackErro: "Triângulo: 3 lados.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma placa de trânsito redonda.",
    problema: "É qual figura?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Círculo" }, { nome: "Quadrado" }, { nome: "Triângulo" }],
      respostaCerta: "Círculo",
      feedbackAcerto: "🎯 Círculo.",
      feedbackErro: "Redonda → círculo.",
    },
  },
  momento09_revisao: {
    pontos: ["Quadrado, retângulo, triângulo, círculo.", "Vértices em A, B, C, D."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Figura sem lados retos?",
      opcoes: [{ nome: "Círculo" }, { nome: "Quadrado" }, { nome: "Retângulo" }],
      respostaCerta: "Círculo",
      feedbackAcerto: "🎉 Círculo é curva.",
      feedbackErro: "Só o círculo é curva.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quantos lados o quadrado tem?", opcoes: ["4", "3", "5"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "4 lados iguais." },
      { pergunta: "Placa de PARE?", opcoes: ["Octógono", "Círculo", "Triângulo"], correta: 0, feedbackAcerto: "🎉 Octógono (8 lados).", feedbackErro: "PARE tem 8 lados." },
      { pergunta: "Triângulo tem quantos vértices?", opcoes: ["3", "4", "5"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "3 lados = 3 vértices." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça-forma",
    materiais: ["Papel"],
    passos: ["Achem 5 quadrados, 5 círculos e 5 triângulos em casa."],
    registro: "📸 Foto da caça.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

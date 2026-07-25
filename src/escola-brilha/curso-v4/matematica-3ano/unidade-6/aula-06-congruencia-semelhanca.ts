import type { AulaV4 } from "../../types";

export const aula06_congruencia: AulaV4 = {
  slug: "u6-06-congruencia",
  titulo: "Iguais ou Parecidas?",
  iconeTrilha: "🔗",
  bncc: ["EF03MA13"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Duas formas",
    historia: "Duas figuras podem ser IGUAIS (congruentes) ou só parecidas (semelhantes).",
  },
  momento02_exploracao: {
    instrucao: "Compare tamanhos e formas.",
    cenas: [
      { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, medidasLados: ["4", "4", "4", "4"], legenda: "Quadrado 4×4" },
      { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, medidasLados: ["4", "4", "4", "4"], legenda: "Quadrado 4×4 (congruente)" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Fotos de tamanhos diferentes são congruentes?",
    pista: "Compare medidas.",
    revelacao: "Se o tamanho é diferente, são apenas semelhantes.",
  },
  momento04_explicacao: {
    titulo: "Comparar figuras",
    etapas: [
      {
        texto: "Congruentes: mesma forma E mesmo tamanho.",
        exemploReal: {
          contexto: "Dois azulejos idênticos.",
          destaque: "Iguais em tudo.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, medidasLados: ["5", "5", "5", "5"] },
        },
      },
      {
        texto: "Semelhantes: mesma forma, tamanhos diferentes.",
        exemploReal: {
          contexto: "Foto e sua ampliação.",
          destaque: "Proporção mantida.",
          visualMat: { tipo: "figuraPlana", forma: "retangulo", mostrarVertices: true, medidasLados: ["6", "3", "6", "3"] },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Dois círculos de raios diferentes: congruentes ou semelhantes?",
    passos: ["Tamanhos diferentes → não são congruentes.", "Mesma forma → semelhantes."],
    resposta: "Semelhantes",
    visualMat: { tipo: "figuraPlana", forma: "circulo" },
  },
  momento06_praticaGuiada: {
    enunciado: "Dois quadrados de 4 cm cada. São:",
    dica: "Mesmo tamanho e forma.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Congruentes" }, { nome: "Semelhantes" }, { nome: "Diferentes" }],
      respostaCerta: "Congruentes",
      feedbackAcerto: "🎉 Iguais em tudo.",
      feedbackErro: "Mesmo tamanho e forma = congruentes.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Um triângulo pequeno e um grande de mesma forma são:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Semelhantes" }, { nome: "Congruentes" }, { nome: "Iguais" }],
      respostaCerta: "Semelhantes",
      feedbackAcerto: "🎯 Semelhantes.",
      feedbackErro: "Forma igual, tamanhos diferentes.",
    },
  },
  momento08_aplicacao: {
    contexto: "Duas cadeiras idênticas de fábrica.",
    problema: "São:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Congruentes" }, { nome: "Semelhantes" }, { nome: "Diferentes" }],
      respostaCerta: "Congruentes",
      feedbackAcerto: "🎯 Idênticas.",
      feedbackErro: "Idênticas = congruentes.",
    },
  },
  momento09_revisao: {
    pontos: ["Congruente: iguais em tudo.", "Semelhante: mesma forma, tamanhos diferentes."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Foto 3x4 e sua ampliação são:",
      opcoes: [{ nome: "Semelhantes" }, { nome: "Congruentes" }, { nome: "Diferentes" }],
      respostaCerta: "Semelhantes",
      feedbackAcerto: "🎉 Semelhantes.",
      feedbackErro: "Ampliação mantém forma.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dois retângulos 3×5 idênticos:", opcoes: ["Congruentes", "Semelhantes", "Diferentes"], correta: 0, feedbackAcerto: "🎉 Congruentes.", feedbackErro: "Idênticos." },
      { pergunta: "Mapa e território são:", opcoes: ["Semelhantes", "Congruentes", "Iguais"], correta: 0, feedbackAcerto: "🎉 Semelhantes.", feedbackErro: "Escalas diferentes." },
      { pergunta: "Duas rodas iguais:", opcoes: ["Congruentes", "Semelhantes", "Diferentes"], correta: 0, feedbackAcerto: "🎉 Congruentes.", feedbackErro: "Iguais." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Pares iguais",
    materiais: ["Objetos em pares"],
    passos: ["Ache 3 pares congruentes e 2 semelhantes em casa."],
    registro: "📸 Foto dos pares.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

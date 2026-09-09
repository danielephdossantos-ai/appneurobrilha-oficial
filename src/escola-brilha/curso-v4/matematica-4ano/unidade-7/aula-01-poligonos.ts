import type { AulaV4 } from "../../types";

export const aula01_poligonos: AulaV4 = {
  slug: "u7-01-poligonos",
  titulo: "Polígonos, prismas e pirâmides",
  iconeTrilha: "🔷",
  bncc: ["EF04MA17"],
  duracaoMin: 20,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Das figuras planas aos sólidos",
    historia:
      "{NOME}, polígonos são figuras planas fechadas formadas por segmentos de reta. Eles aparecem nas faces de prismas e pirâmides, que são figuras espaciais.",
  },
  momento02_exploracao: {
    instrucao: "Veja e conte.",
    cenas: [
      { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true, legenda: "Triângulo ABC (3 lados)" },
      { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true, legenda: "Quadrado ABCD (4 lados)" },
      { tipo: "figuraPlana", forma: "pentagono", mostrarVertices: true, legenda: "Pentágono ABCDE (5 lados)" },
      { tipo: "figuraPlana", forma: "hexagono", mostrarVertices: true, legenda: "Hexágono (6 lados)" },
      { tipo: "figuraPlana", forma: "octogono", mostrarVertices: true, legenda: "Octógono (8 lados) — placa PARE" },
      { tipo: "texto", texto: "Prisma: possui duas bases poligonais iguais e paralelas. Pirâmide: possui uma base e faces laterais triangulares que se encontram em um vértice.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como distinguir um prisma de uma pirâmide?",
    pista: "Conte as bases e observe as faces laterais.",
    revelacao: "O prisma tem duas bases iguais e paralelas. A pirâmide tem uma base e faces laterais triangulares que se encontram em uma ponta.",
  },
  momento04_explicacao: {
    titulo: "Relacionar sólidos e polígonos",
    etapas: [
      {
        texto: "Triângulo: 3 lados e 3 vértices.",
        exemploReal: {
          contexto: "Fatia de pizza.",
          destaque: "3-3.",
          visualMat: { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true },
        },
      },
      {
        texto: "Quadrilátero: 4 lados e 4 vértices.",
        exemploReal: {
          contexto: "Janela.",
          destaque: "4-4. Ângulos retos.",
          visualMat: { tipo: "figuraPlana", forma: "quadrado", mostrarVertices: true, mostrarAngulos: true },
        },
      },
      {
        texto: "Em um prisma, as duas bases são polígonos iguais e paralelos; as demais faces ligam uma base à outra.",
        exemploReal: {
          contexto: "Um cubo pode ser visto como um prisma de bases quadradas.",
          destaque: "Cubo: 6 faces, 12 arestas e 8 vértices.",
        },
      },
      {
        texto: "Em uma pirâmide, o polígono da base dá nome ao sólido e as faces laterais são triângulos.",
        exemploReal: { contexto: "Pirâmide de base quadrada.", destaque: "5 faces, 8 arestas e 5 vértices." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Um prisma triangular tem quais polígonos em suas faces?",
    passos: ["As duas bases são triângulos iguais.", "As três faces laterais são retângulos."],
    resposta: "2 triângulos e 3 retângulos",
  },
  momento06_praticaGuiada: {
    enunciado: "Um cubo tem quantas faces?",
    dica: "Conte frente, trás, direita, esquerda, cima e baixo.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6" }, { nome: "8" }, { nome: "12" }, { nome: "4" }],
      respostaCerta: "6",
      feedbackAcerto: "🎯 O cubo tem 6 faces quadradas.",
      feedbackErro: "Conte as superfícies planas do cubo.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Qual sólido tem uma base e faces laterais triangulares?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Pirâmide" }, { nome: "Prisma" }, { nome: "Círculo" }, { nome: "Retângulo" }],
      respostaCerta: "Pirâmide",
      feedbackAcerto: "🎯 Pirâmide.",
      feedbackErro: "As faces triangulares se encontram em uma ponta.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma embalagem possui duas bases triangulares iguais e três faces laterais retangulares.",
    problema: "Que sólido ela lembra?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Prisma triangular" }, { nome: "Pirâmide quadrada" }, { nome: "Cubo" }, { nome: "Cone" }],
      respostaCerta: "Prisma triangular",
      feedbackAcerto: "🎯 Duas bases triangulares formam um prisma triangular.",
      feedbackErro: "Prismas possuem duas bases iguais e paralelas.",
    },
  },
  momento09_revisao: {
    pontos: ["Faces são superfícies planas; arestas são encontros de faces; vértices são encontros de arestas.", "Prisma tem duas bases iguais e paralelas.", "Pirâmide tem uma base e faces laterais triangulares."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Um prisma possui quantas bases iguais e paralelas?", opcoes: ["2", "1", "3"], correta: 0, feedbackAcerto: "🎉 Duas bases.", feedbackErro: "Observe as duas extremidades iguais." },
      { pergunta: "As faces laterais de uma pirâmide são:", opcoes: ["triângulos", "círculos", "sempre quadrados"], correta: 0, feedbackAcerto: "🎉 Triângulos.", feedbackErro: "Elas se encontram no vértice superior." },
      { pergunta: "Um cubo tem:", opcoes: ["6 faces", "8 faces", "12 faces"], correta: 0, feedbackAcerto: "🎉 6 faces.", feedbackErro: "Frente, trás, lados, cima e baixo." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça aos sólidos",
    materiais: ["Papel"],
    passos: ["Encontre uma embalagem parecida com prisma e outra parecida com pirâmide.", "Desenhe e identifique bases, faces, arestas e vértices."],
    registro: "📸 Foto da lista.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

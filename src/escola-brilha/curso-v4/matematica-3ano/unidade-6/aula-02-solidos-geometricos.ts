import type { AulaV4 } from "../../types";

export const aula02_solidos: AulaV4 = {
  slug: "u6-02-solidos",
  titulo: "Sólidos Geométricos",
  iconeTrilha: "🧊",
  bncc: ["EF03MA13"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Do plano ao 3D",
    historia: "Um quadrado 'cresce' e vira cubo. Um círculo 'cresce' e vira esfera ou cilindro.",
  },
  momento02_exploracao: {
    instrucao: "Sólidos principais — cada um tem faces, vértices e arestas.",
    cenas: [
      { tipo: "solido", forma: "cubo", legenda: "Cubo" },
      { tipo: "solido", forma: "esfera", legenda: "Esfera" },
      { tipo: "solido", forma: "cone", legenda: "Cone" },
      { tipo: "solido", forma: "cilindro", legenda: "Cilindro" },
      { tipo: "solido", forma: "piramide", legenda: "Pirâmide" },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como diferenciar cone de cilindro?",
    pista: "Um tem ponta, o outro tem duas bases iguais.",
    revelacao: "Cone tem ponta. Cilindro tem 2 bases circulares.",
  },
  momento04_explicacao: {
    titulo: "Identificar sólidos",
    etapas: [
      {
        texto: "Cubo: 6 faces quadradas, 8 vértices, 12 arestas.",
        exemploReal: {
          contexto: "Dado de jogar.",
          destaque: "Todas as faces iguais.",
          visualMat: { tipo: "solido", forma: "cubo" },
        },
      },
      {
        texto: "Cilindro: 2 bases circulares e uma face curva.",
        exemploReal: {
          contexto: "Latinha de refrigerante.",
          destaque: "3 faces (2 círculos + 1 curva).",
          visualMat: { tipo: "solido", forma: "cilindro" },
        },
      },
      {
        texto: "Pirâmide: base poligonal + 1 vértice de ponta.",
        exemploReal: {
          contexto: "Pirâmide do Egito.",
          destaque: "1 ponta no topo.",
          visualMat: { tipo: "solido", forma: "piramide" },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantas faces tem um cubo?",
    passos: ["Conte cada face quadrada.", "Cubo = 6 faces iguais."],
    resposta: "6 faces",
    visualMat: { tipo: "solido", forma: "cubo" },
  },
  momento06_praticaGuiada: {
    enunciado: "Latinha é qual sólido?",
    dica: "Duas bases redondas.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Cilindro" }, { nome: "Cubo" }, { nome: "Esfera" }],
      respostaCerta: "Cilindro",
      feedbackAcerto: "🎉 Cilindro.",
      feedbackErro: "Latinha = cilindro.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Uma bola é qual sólido?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Esfera" }, { nome: "Cubo" }, { nome: "Cone" }],
      respostaCerta: "Esfera",
      feedbackAcerto: "🎯 Esfera.",
      feedbackErro: "Bola = esfera.",
    },
  },
  momento08_aplicacao: {
    contexto: "Casquinha de sorvete.",
    problema: "É qual sólido?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Cone" }, { nome: "Cilindro" }, { nome: "Cubo" }],
      respostaCerta: "Cone",
      feedbackAcerto: "🎯 Cone.",
      feedbackErro: "Termina em ponta = cone.",
    },
  },
  momento09_revisao: {
    pontos: ["Cubo · Esfera · Cone · Cilindro · Pirâmide.", "Contamos: faces, vértices e arestas."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Quantos vértices o cubo tem?",
      opcoes: [{ nome: "8" }, { nome: "6" }, { nome: "12" }],
      respostaCerta: "8",
      feedbackAcerto: "🎉 8.",
      feedbackErro: "Cubo: 8 vértices.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dado é qual sólido?", opcoes: ["Cubo", "Esfera", "Cilindro"], correta: 0, feedbackAcerto: "🎉 Cubo.", feedbackErro: "Dado = cubo." },
      { pergunta: "Bola de futebol?", opcoes: ["Esfera", "Cilindro", "Cubo"], correta: 0, feedbackAcerto: "🎉 Esfera.", feedbackErro: "Bola = esfera." },
      { pergunta: "Cubo tem quantas arestas?", opcoes: ["12", "8", "6"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "Cubo: 12 arestas." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça-sólidos",
    materiais: ["Objetos da casa"],
    passos: ["Encontre um cubo, um cilindro e uma esfera."],
    registro: "📸 Foto dos sólidos.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

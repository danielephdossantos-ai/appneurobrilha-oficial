import type { AulaV4 } from "../../types";

export const aula01_poligonos: AulaV4 = {
  slug: "u7-01-poligonos",
  titulo: "Polígonos e ângulos",
  iconeTrilha: "📐",
  bncc: ["EF06MA17", "EF06MA18"],
  duracaoMin: 22,
  metodologias: ["vanHiele" as string, "cpa"],

  momento01_motivacao: {
    titulo: "As formas do mundo",
    historia: "{NOME}, olha ao redor: janelas, telhados, placas. Todas essas formas com lados retos são POLÍGONOS.",
  },

  momento02_exploracao: {
    instrucao: "Polígono = figura FECHADA feita só de segmentos de reta.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Nome pelo número de lados",
        cabecalhos: ["Lados", "Nome"],
        linhas: [
          { rotulo: "3", valores: ["3", "Triângulo"] },
          { rotulo: "4", valores: ["4", "Quadrilátero"] },
          { rotulo: "5", valores: ["5", "Pentágono"] },
          { rotulo: "6", valores: ["6", "Hexágono"] },
          { rotulo: "8", valores: ["8", "Octógono"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Um quadrado tem quantos ângulos retos?",
    pista: "Ângulo reto = 90°.",
    revelacao: "Quatro ângulos de 90°. Total = 360°.",
  },

  momento04_explicacao: {
    titulo: "Vértices, lados e ângulos",
    etapas: [
      {
        texto: "Quadrado: 4 lados iguais, 4 ângulos retos.",
        exemploReal: {
          contexto: "Quadrado ABCD",
          visualMat: {
            tipo: "figuraPlana",
            forma: "quadrado",
            mostrarVertices: true,
            mostrarAngulos: true,
            legenda: "4 lados iguais · 4 ângulos de 90°",
          },
          destaque: "Todos os lados iguais.",
        },
      },
      {
        texto: "Retângulo: 4 ângulos retos, lados opostos iguais.",
        exemploReal: {
          contexto: "Retângulo 5×3",
          visualMat: {
            tipo: "figuraPlana",
            forma: "retangulo",
            medidasLados: ["5 cm", "3 cm", "5 cm", "3 cm"],
            mostrarAngulos: true,
          },
          destaque: "Base × Altura.",
        },
      },
      {
        texto: "Triângulo: 3 lados, 3 vértices, soma dos ângulos = 180°.",
        exemploReal: {
          contexto: "Qualquer triângulo",
          visualMat: {
            tipo: "figuraPlana",
            forma: "triangulo",
            mostrarVertices: true,
          },
          destaque: "α + β + γ = 180°.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Um triângulo tem ângulos 60° e 70°. Qual o terceiro?",
    resposta: "50°",
    passos: ["Soma = 180°.", "60 + 70 = 130.", "180 − 130 = 50°."],
  },

  momento06_praticaGuiada: {
    enunciado: "Polígono de 6 lados chama:",
    dica: "'Hexa' = 6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Hexágono" }, { nome: "Octógono" }, { nome: "Pentágono" }],
      respostaCerta: "Hexágono",
      feedbackAcerto: "🎯",
      feedbackErro: "Octo = 8, Penta = 5.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Soma dos ângulos do triângulo:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "180°" }, { nome: "360°" }, { nome: "90°" }],
      respostaCerta: "180°",
      feedbackAcerto: "🎯",
      feedbackErro: "Todo triângulo.",
    },
  },

  momento08_aplicacao: {
    contexto: "Placa PARE tem 8 lados.",
    problema: "Que polígono é?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Octógono" }, { nome: "Hexágono" }, { nome: "Pentágono" }],
      respostaCerta: "Octógono",
      feedbackAcerto: "🎯 8 lados.",
      feedbackErro: "Octo = 8.",
    },
  },

  momento09_revisao: {
    pontos: ["Polígono fechado, feito de segmentos.", "Nome pelo número de lados.", "Triângulo: soma = 180°."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado tem quantos vértices?", opcoes: ["4", "3", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4 cantos." },
      { pergunta: "Pentágono tem:", opcoes: ["5 lados", "6 lados", "4 lados"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Penta = 5." },
      { pergunta: "Ângulo reto =", opcoes: ["90°", "180°", "45°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Reto = 90." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Polígonos em casa",
    materiais: ["Papel"],
    passos: ["Ache 3 objetos com formatos poligonais.", "Escreva o nome de cada."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};

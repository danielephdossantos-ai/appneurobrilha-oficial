import type { AulaV4 } from "../../types";

export const aula06_perimetro: AulaV4 = {
  slug: "u6-06-perimetro",
  titulo: "Perímetro — a volta da figura",
  iconeTrilha: "🟥",
  bncc: ["EF04MA23"],
  duracaoMin: 22,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Contorno",
    historia:
      "{NOME}, o PERÍMETRO é a soma de TODOS os lados de uma figura. Como se a formiguinha andasse em volta.",
  },
  momento02_exploracao: {
    instrucao: "Formas simples.",
    cenas: [
      {
        tipo: "figuraPlana",
        forma: "quadrado",
        mostrarVertices: true,
        mostrarAngulos: true,
        medidasLados: ["4 cm", "4 cm", "4 cm", "4 cm"],
        legenda: "Quadrado ABCD",
      },
      { tipo: "texto", texto: "Perímetro do quadrado ABCD = 4 + 4 + 4 + 4 = 16 cm.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Do quadrado, é sempre 4 × lado?",
    pista: "Pense: 4 lados iguais.",
    revelacao: "Sim! Perímetro do quadrado = 4 × lado.",
  },
  momento04_explicacao: {
    titulo: "Fórmulas úteis",
    etapas: [
      {
        texto: "Quadrado: P = 4 × lado.",
        exemploReal: {
          contexto: "Lado 6 cm.",
          destaque: "P = 4 × 6 = 24 cm.",
          visualMat: {
            tipo: "figuraPlana",
            forma: "quadrado",
            mostrarVertices: true,
            medidasLados: ["6 cm", "6 cm", "6 cm", "6 cm"],
          },
        },
      },
      {
        texto: "Retângulo: P = 2 × (comprimento + largura).",
        exemploReal: {
          contexto: "5 cm × 3 cm.",
          destaque: "P = 2 × (5+3) = 16 cm.",
          visualMat: {
            tipo: "figuraPlana",
            forma: "retangulo",
            mostrarVertices: true,
            medidasLados: ["5 cm", "3 cm", "5 cm", "3 cm"],
          },
        },
      },
      {
        texto: "Triângulo: P = soma dos 3 lados.",
        exemploReal: {
          contexto: "3, 4 e 5 cm.",
          destaque: "P = 3 + 4 + 5 = 12 cm.",
          visualMat: { tipo: "figuraPlana", forma: "triangulo", mostrarVertices: true, medidasLados: ["3 cm", "4 cm", "5 cm"] },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Perímetro de um retângulo 8 cm × 5 cm.",
    passos: ["P = 2 × (8+5).", "= 2 × 13 = 26 cm."],
    resposta: "26 cm",
  },
  momento06_praticaGuiada: {
    enunciado: "Quadrado de lado 7 cm. Perímetro?",
    dica: "4 × lado.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "28 cm" }, { nome: "14 cm" }, { nome: "49 cm" }],
      respostaCerta: "28 cm",
      feedbackAcerto: "🎯 28 cm.",
      feedbackErro: "4×7=28.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Retângulo 10 cm × 4 cm. Perímetro?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "28 cm" }, { nome: "14 cm" }, { nome: "40 cm" }],
      respostaCerta: "28 cm",
      feedbackAcerto: "🎯 28 cm.",
      feedbackErro: "2×(10+4)=28.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um terreno quadrado de 12 m de lado.",
    problema: "Quanto de cerca (m)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "48 m" }, { nome: "24 m" }, { nome: "144 m" }],
      respostaCerta: "48 m",
      feedbackAcerto: "🎯 48 m.",
      feedbackErro: "4×12=48.",
    },
  },
  momento09_revisao: {
    pontos: ["Perímetro = soma dos lados.", "Quadrado: 4×lado. Retângulo: 2×(c+l)."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado lado 9 cm. P?", opcoes: ["36 cm", "18 cm", "81 cm"], correta: 0, feedbackAcerto: "🎉 36 cm.", feedbackErro: "4×9=36." },
      { pergunta: "Retângulo 6×4. P?", opcoes: ["20", "24", "10"], correta: 0, feedbackAcerto: "🎉 20.", feedbackErro: "2×(6+4)=20." },
      { pergunta: "Triângulo 5+6+7. P?", opcoes: ["18", "17", "20"], correta: 0, feedbackAcerto: "🎉 18.", feedbackErro: "5+6+7=18." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Volta na Sala",
    materiais: ["Fita métrica"],
    passos: ["Meça 3 objetos retangulares (mesa, TV, livro).", "Calcule o perímetro de cada um."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 220, moedas: 110 },
};

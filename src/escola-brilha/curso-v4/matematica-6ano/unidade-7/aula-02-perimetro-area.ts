import type { AulaV4 } from "../../types";

export const aula02_perimetroArea: AulaV4 = {
  slug: "u7-02-perimetro-area",
  titulo: "Perímetro e área",
  iconeTrilha: "📏",
  bncc: ["EF06MA24"],
  duracaoMin: 24,
  metodologias: ["cpa"],

  momento01_motivacao: {
    titulo: "Contorno e superfície",
    historia: "{NOME}, PERÍMETRO é o CONTORNO (a soma dos lados). ÁREA é a SUPERFÍCIE (quanto cabe dentro).",
  },

  momento02_exploracao: {
    instrucao: "Duas medidas diferentes.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Diferença",
        cabecalhos: ["Medida", "O que é", "Unidade"],
        linhas: [
          { rotulo: "Perímetro", valores: ["Perímetro", "Soma dos lados", "m, cm, km"] },
          { rotulo: "Área", valores: ["Área", "Superfície", "m², cm², km²"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Quadrado de lado 5 m: perímetro e área?",
    pista: "P = 4×lado. A = lado².",
    revelacao: "P = 20 m · A = 25 m².",
  },

  momento04_explicacao: {
    titulo: "Fórmulas essenciais",
    etapas: [
      {
        texto: "Retângulo: P = 2·(b + h) · A = b · h.",
        exemploReal: {
          contexto: "Retângulo 6×4",
          visualMat: {
            tipo: "figuraPlana",
            forma: "retangulo",
            medidasLados: ["6 cm", "4 cm", "6 cm", "4 cm"],
          },
          destaque: "P = 2·(6+4) = 20 cm · A = 6·4 = 24 cm².",
        },
      },
      {
        texto: "Quadrado: P = 4·l · A = l².",
        exemploReal: {
          contexto: "Quadrado de lado 8",
          destaque: "P = 32 · A = 64.",
        },
      },
      {
        texto: "Triângulo: A = (base × altura) ÷ 2.",
        exemploReal: {
          contexto: "Base 10 cm, altura 6 cm",
          destaque: "A = 10·6 ÷ 2 = 30 cm².",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Terreno retangular 20 m × 15 m. Perímetro (cerca) e área?",
    resposta: "P = 70 m · A = 300 m²",
    passos: ["P = 2·(20+15) = 70.", "A = 20 × 15 = 300."],
  },

  momento06_praticaGuiada: {
    enunciado: "Quadrado lado 7. Área?",
    dica: "l².",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "49" }, { nome: "28" }, { nome: "14" }],
      respostaCerta: "49",
      feedbackAcerto: "🎯 7².",
      feedbackErro: "7 × 7.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Retângulo 5×3. Perímetro?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "16" }, { nome: "15" }, { nome: "8" }],
      respostaCerta: "16",
      feedbackAcerto: "🎯 2·(5+3).",
      feedbackErro: "Soma todos os lados.",
    },
  },

  momento08_aplicacao: {
    contexto: "Sala 5 m × 4 m.",
    problema: "Quantos m² de piso?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "18" }, { nome: "9" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 5 × 4.",
      feedbackErro: "Área do piso = base × altura.",
    },
  },

  momento09_revisao: {
    pontos: ["Perímetro: contorno.", "Área: superfície.", "Cuidado com unidade²."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Quadrado lado 3. Perímetro:", opcoes: ["12", "9", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "4×3." },
      { pergunta: "Área triângulo b=6 h=4:", opcoes: ["12", "24", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "6·4÷2." },
      { pergunta: "Área do retângulo 10 × 8:", opcoes: ["80", "18", "36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "10 × 8." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Perímetro do quarto",
    materiais: ["Trena, papel"],
    passos: ["Meça o quarto.", "Calcule perímetro e área."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 95 },
};

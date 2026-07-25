import type { AulaV4 } from "../../types";

export const aula02_volumes: AulaV4 = {
  slug: "u7-02-volumes",
  titulo: "Volume de prismas",
  iconeTrilha: "📦",
  bncc: ["EF08MA20"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Quanto cabe dentro",
    historia:
      "{NOME}, volume é o espaço que a figura ocupa. Em prismas, é ÁREA DA BASE × ALTURA.",
  },
  momento02_exploracao: {
    instrucao: "Fórmula.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "V = Ab · h",
        cabecalhos: ["Prisma", "Ab", "V"],
        linhas: [
          { rotulo: "1", valores: ["Cubo l", "l²", "l³"] },
          { rotulo: "2", valores: ["Paralelepípedo", "b·c", "b·c·h"] },
          { rotulo: "3", valores: ["Prisma triangular", "Δ", "Δ · h"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber Ab?",
    pista: "Fórmula da figura da base.",
    revelacao: "Depende da forma da base.",
  },
  momento04_explicacao: {
    titulo: "Casos",
    etapas: [
      {
        texto: "Cubo.",
        exemploReal: {
          contexto: "l=4.",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["4³", "64"] }] },
          destaque: "64 u³.",
        },
      },
      {
        texto: "Paralelepípedo 5×3×2.",
        exemploReal: {
          contexto: "V = 5·3·2",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["30", "30"] }] },
          destaque: "30 u³.",
        },
      },
      {
        texto: "Prisma triangular Ab=12, h=5.",
        exemploReal: {
          contexto: "V = 12·5",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["60", "60"] }] },
          destaque: "60 u³.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Cubo lado 3.",
    resposta: "27",
    visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["3³", "27"] }] },
    passos: ["3³ = 27."],
  },
  momento06_praticaGuiada: {
    enunciado: "Caixa 4×5×2.",
    dica: "Multiplica.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "V =",
      opcoes: [{ nome: "40" }, { nome: "20" }, { nome: "11" }],
      respostaCerta: "40",
      feedbackAcerto: "🎯",
      feedbackErro: "4·5·2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Cubo lado 5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "V =",
      opcoes: [{ nome: "125" }, { nome: "25" }, { nome: "15" }],
      respostaCerta: "125",
      feedbackAcerto: "🎯",
      feedbackErro: "5³.",
    },
  },
  momento08_aplicacao: {
    contexto: "Piscina 8m × 4m × 1,5m.",
    problema: "Litros (1m³=1000L):",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "48.000 L" }, { nome: "12.000 L" }, { nome: "4.800 L" }],
      respostaCerta: "48.000 L",
      feedbackAcerto: "🎯",
      feedbackErro: "V=48 m³ · 1000.",
    },
  },
  momento09_revisao: {
    pontos: ["V = Ab · h.", "Cubo l³.", "Cuidado com unidades."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Cubo 2:", opcoes: ["8", "6", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2³." },
      { pergunta: "Caixa 3×3×3:", opcoes: ["27", "9", "18"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "27." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caixa de casa",
    materiais: ["Fita"],
    passos: ["Meça uma caixa.", "Calcule volume."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};

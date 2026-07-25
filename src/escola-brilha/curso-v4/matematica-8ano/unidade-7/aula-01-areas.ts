import type { AulaV4 } from "../../types";

export const aula01_areas: AulaV4 = {
  slug: "u7-01-areas",
  titulo: "Áreas de polígonos",
  iconeTrilha: "🟩",
  bncc: ["EF08MA19"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Medir o chão",
    historia:
      "{NOME}, área é quanto de chão a figura ocupa. Cada polígono tem uma fórmula.",
  },
  momento02_exploracao: {
    instrucao: "Fórmulas.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Fórmulas de área",
        cabecalhos: ["Figura", "Fórmula"],
        linhas: [
          { rotulo: "1", valores: ["Quadrado", "l²"] },
          { rotulo: "2", valores: ["Retângulo", "b·h"] },
          { rotulo: "3", valores: ["Triângulo", "b·h/2"] },
          { rotulo: "4", valores: ["Paralelogramo", "b·h"] },
          { rotulo: "5", valores: ["Trapézio", "(B+b)·h/2"] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que o triângulo é a metade?",
    pista: "É meio retângulo.",
    revelacao: "Corte um retângulo pela diagonal.",
  },
  momento04_explicacao: {
    titulo: "Exemplos",
    etapas: [
      {
        texto: "Retângulo.",
        exemploReal: {
          contexto: "b=8, h=5.",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["8·5", "40"] }] },
          destaque: "40 u².",
        },
      },
      {
        texto: "Triângulo.",
        exemploReal: {
          contexto: "b=10, h=6.",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["10·6/2", "30"] }] },
          destaque: "30 u².",
        },
      },
      {
        texto: "Trapézio.",
        exemploReal: {
          contexto: "B=10, b=6, h=4.",
          visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["(10+6)·4/2", "32"] }] },
          destaque: "32 u².",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Área do quadrado de lado 7.",
    resposta: "49",
    visualMat: { tipo: "tabela", cabecalhos: ["Passo", "Valor"], linhas: [{ rotulo: "1", valores: ["7²", "49"] }] },
    passos: ["7² = 49."],
  },
  momento06_praticaGuiada: {
    enunciado: "Retângulo 6×4.",
    dica: "b·h.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A =",
      opcoes: [{ nome: "24" }, { nome: "10" }, { nome: "20" }],
      respostaCerta: "24",
      feedbackAcerto: "🎯",
      feedbackErro: "6·4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Triângulo b=8, h=5.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "A =",
      opcoes: [{ nome: "20" }, { nome: "40" }, { nome: "13" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯",
      feedbackErro: "b·h/2.",
    },
  },
  momento08_aplicacao: {
    contexto: "Uma horta trapezoidal com B=10m, b=6m, h=4m.",
    problema: "Área:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "32 m²" }, { nome: "40 m²" }, { nome: "60 m²" }],
      respostaCerta: "32 m²",
      feedbackAcerto: "🎯",
      feedbackErro: "(B+b)·h/2.",
    },
  },
  momento09_revisao: {
    pontos: ["Cada figura, uma fórmula.", "Triângulo = ½ retângulo.", "Trapézio soma bases."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Q lado 5:", opcoes: ["25", "20", "10"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "l²." },
      { pergunta: "Ret 3×7:", opcoes: ["21", "10", "14"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "b·h." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Medir casa",
    materiais: ["Fita"],
    passos: ["Meça 3 cômodos.", "Calcule área."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};

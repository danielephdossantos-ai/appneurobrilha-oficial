import type { AulaV4 } from "../../types";

export const aula02_polig: AulaV4 = {
  slug: "u6-02-polig",
  titulo: "Soma dos ângulos internos dos polígonos",
  iconeTrilha: "🔷",
  bncc: ["EF08MA14"],
  duracaoMin: 22,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Cada polígono tem sua soma",
    historia:
      "{NOME}, o triângulo é 180°. Quadrilátero é 360°. Existe uma fórmula que dá pra QUALQUER polígono.",
  },
  momento02_exploracao: {
    instrucao: "Descubra.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Polígonos",
        cabecalhos: ["Lados", "Nome", "Soma"],
        linhas: [
          { rotulo: "3", valores: ["Triângulo", "180°"] },
          { rotulo: "4", valores: ["Quadrilátero", "360°"] },
          { rotulo: "5", valores: ["Pentágono", "540°"] },
          { rotulo: "6", valores: ["Hexágono", "720°"] },
        ],
      },
      { tipo: "texto", texto: "S = (n − 2) · 180°.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Por que aparece (n − 2)?",
    pista: "Um polígono se divide em (n − 2) triângulos por diagonais.",
    revelacao: "Cada triângulo = 180°.",
  },
  momento04_explicacao: {
    titulo: "Fórmula e regulares",
    etapas: [
      {
        texto: "Soma dos internos.",
        exemploReal: {
          contexto: "Octógono (n=8)",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["(n−2)", "6"] },
              { rotulo: "2", valores: ["×180°", "1080°"] },
            ],
          },
          destaque: "= 1080°.",
        },
      },
      {
        texto: "Regular: cada ângulo = S/n.",
        exemploReal: {
          contexto: "Hexágono regular",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["S", "720°"] },
              { rotulo: "2", valores: ["÷6", "120°"] },
            ],
          },
          destaque: "cada ângulo = 120°.",
        },
      },
      {
        texto: "Ângulos externos: sempre somam 360°.",
        exemploReal: {
          contexto: "Regra fixa",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Regra", "Soma"],
            linhas: [
              { rotulo: "ext.", valores: ["360°"] },
              { rotulo: "cada ext. (reg.)", valores: ["360°/n"] },
            ],
          },
          destaque: "Não depende de n.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Soma dos internos de um decágono (n=10):",
    resposta: "1440°",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["(10−2)·180°", "1440°"] },
      ],
    },
    passos: ["8 × 180° = 1440°."],
  },
  momento06_praticaGuiada: {
    enunciado: "Pentágono (n=5). S=",
    dica: "(5−2)·180.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "S =",
      opcoes: [{ nome: "540°" }, { nome: "360°" }, { nome: "720°" }],
      respostaCerta: "540°",
      feedbackAcerto: "🎯",
      feedbackErro: "3·180.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Cada ângulo interno de um octógono regular:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "135°" }, { nome: "144°" }, { nome: "120°" }],
      respostaCerta: "135°",
      feedbackAcerto: "🎯 1080/8.",
      feedbackErro: "S=1080. ÷8.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um piso é hexagonal regular.",
    problema: "Quanto vale cada ângulo interno?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "120°" }, { nome: "60°" }, { nome: "90°" }],
      respostaCerta: "120°",
      feedbackAcerto: "🎯",
      feedbackErro: "720°/6.",
    },
  },
  momento09_revisao: {
    pontos: ["S = (n−2)·180°.", "Regular: ÷ n.", "Ext. total: 360°."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Triângulo: soma=", opcoes: ["180°", "360°", "540°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "(3−2)·180." },
      { pergunta: "Quadrilátero:", opcoes: ["360°", "180°", "720°"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2·180." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Caça polígonos",
    materiais: ["Casa"],
    passos: ["Ache 4 formas geométricas em casa.", "Diga quantos lados e a soma dos internos."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 80 },
};

import type { AulaV4 } from "../../types";

export const aula03_congruencia: AulaV4 = {
  slug: "u6-03-congruencia",
  titulo: "Congruência de triângulos: LAL, LLL, ALA",
  iconeTrilha: "🔺",
  bncc: ["EF08MA17"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Idênticos ou não?",
    historia:
      "{NOME}, dois triângulos são CONGRUENTES quando dá pra sobrepor um exatamente no outro. Existem 3 testes rápidos.",
  },
  momento02_exploracao: {
    instrucao: "Casos.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Testes",
        cabecalhos: ["Caso", "Precisa"],
        linhas: [
          { rotulo: "LLL", valores: ["3 lados iguais", ""] },
          { rotulo: "LAL", valores: ["2 lados e o ângulo ENTRE eles", ""] },
          { rotulo: "ALA", valores: ["2 ângulos e o lado ENTRE eles", ""] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Basta dois lados iguais?",
    pista: "Falta um terceiro elemento.",
    revelacao: "Sempre 3 pares (com condições).",
  },
  momento04_explicacao: {
    titulo: "Como usar",
    etapas: [
      {
        texto: "LLL — 3 lados batem.",
        exemploReal: {
          contexto: "Δ1: 3, 4, 5. Δ2: 3, 4, 5.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Lado", "Δ1", "Δ2"],
            linhas: [
              { rotulo: "a", valores: ["3", "3"] },
              { rotulo: "b", valores: ["4", "4"] },
              { rotulo: "c", valores: ["5", "5"] },
            ],
          },
          destaque: "Congruentes por LLL.",
        },
      },
      {
        texto: "LAL — ângulo ENTRE.",
        exemploReal: {
          contexto: "Δ: l1=6, l2=8, ang=60°.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Elem.", "Valor"],
            linhas: [
              { rotulo: "l1", valores: ["6"] },
              { rotulo: "ang", valores: ["60° (entre l1 e l2)"] },
              { rotulo: "l2", valores: ["8"] },
            ],
          },
          destaque: "Se outro Δ tem os mesmos → congruente.",
        },
      },
      {
        texto: "ALA — lado ENTRE.",
        exemploReal: {
          contexto: "Ang 50°, lado 7, Ang 70°.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Elem.", "Valor"],
            linhas: [
              { rotulo: "A1", valores: ["50°"] },
              { rotulo: "lado", valores: ["7"] },
              { rotulo: "A2", valores: ["70°"] },
            ],
          },
          destaque: "Se batem → congruentes.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Δ1 tem lados 5, 5, 8. Δ2 tem lados 5, 5, 8. São congruentes?",
    resposta: "Sim, LLL.",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Lado", "Δ1", "Δ2"],
      linhas: [
        { rotulo: "a", valores: ["5", "5"] },
        { rotulo: "b", valores: ["5", "5"] },
        { rotulo: "c", valores: ["8", "8"] },
      ],
    },
    passos: ["3 lados batem → LLL."],
  },
  momento06_praticaGuiada: {
    enunciado: "Δ com lado, ângulo entre eles, lado — qual caso?",
    dica: "L A L.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Caso:",
      opcoes: [{ nome: "LAL" }, { nome: "LLL" }, { nome: "ALA" }],
      respostaCerta: "LAL",
      feedbackAcerto: "🎯",
      feedbackErro: "Ângulo ENTRE.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Δ1: 45°, 60°, 3cm no meio; Δ2: 45°, 60°, 3cm no meio. Caso?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "ALA" }, { nome: "LAL" }, { nome: "LLL" }],
      respostaCerta: "ALA",
      feedbackAcerto: "🎯 Ângulo-Lado-Ângulo.",
      feedbackErro: "Lado ENTRE.",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Uma treliça de telhado precisa ter os dois triângulos IDÊNTICOS. O construtor confere: 3 lados iguais.",
    problema: "Caso?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "LLL" }, { nome: "LAL" }, { nome: "ALA" }],
      respostaCerta: "LLL",
      feedbackAcerto: "🎯",
      feedbackErro: "3 lados.",
    },
  },
  momento09_revisao: {
    pontos: ["3 casos: LLL, LAL, ALA.", "LAL: ângulo ENTRE os lados.", "ALA: lado ENTRE os ângulos."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "3 lados iguais →", opcoes: ["LLL", "LAL", "ALA"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3 L." },
      { pergunta: "Ang-lado-ang →", opcoes: ["ALA", "LAL", "LLL"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Ang no meio? não." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Construtor",
    materiais: ["Palitos"],
    passos: ["Monte 2 triângulos idênticos com palitos.", "Explique qual caso justifica."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 180, moedas: 90 },
};

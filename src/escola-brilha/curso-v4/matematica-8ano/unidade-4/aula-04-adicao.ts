import type { AulaV4 } from "../../types";

export const aula04_adicao: AulaV4 = {
  slug: "u4-04-adicao",
  titulo: "Sistema 2×2 — método da adição",
  iconeTrilha: "➕",
  bncc: ["EF08MA08"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Somar as equações e eliminar uma letra",
    historia:
      "{NOME}, se os coeficientes de uma letra são opostos, ao somar as equações essa letra SUMS. Fica só uma incógnita.",
  },
  momento02_exploracao: {
    instrucao: "Observe.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Coeficientes opostos",
        cabecalhos: ["Sistema", "y"],
        linhas: [
          { rotulo: "I", valores: ["x + y = 10", "+1"] },
          { rotulo: "II", valores: ["x − y = 4", "−1"] },
          { rotulo: "I+II", valores: ["2x = 14", "y sumiu"] },
        ],
      },
      { tipo: "texto", texto: "x = 7. Depois volta em I: 7 + y = 10 → y = 3.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "E se os coeficientes não forem opostos?",
    pista: "Multiplique as equações por números que igualem os coeficientes com sinais opostos.",
    revelacao: "Sempre dá pra 'preparar' antes de somar.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "1) Se coef opostos → some direto.",
        exemploReal: {
          contexto: "I) 2x + 3y = 12. II) 4x − 3y = 6",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["soma", "6x = 18"] },
              { rotulo: "2", valores: ["÷6", "x = 3"] },
              { rotulo: "3", valores: ["volta I", "6 + 3y = 12 → y = 2"] },
            ],
          },
          destaque: "x = 3, y = 2.",
        },
      },
      {
        texto: "2) Se não forem, MULTIPLIQUE antes.",
        exemploReal: {
          contexto: "I) x + y = 5. II) 2x + 3y = 12",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["×(−2) I", "−2x − 2y = −10"] },
              { rotulo: "2", valores: ["soma II", "y = 2"] },
              { rotulo: "3", valores: ["volta I", "x = 3"] },
            ],
          },
          destaque: "x = 3, y = 2.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "I) x + y = 12. II) x − y = 2.",
    resposta: "x = 7, y = 5",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["soma", "2x = 14"] },
        { rotulo: "2", valores: ["÷2", "x = 7"] },
        { rotulo: "3", valores: ["y", "12−7 = 5"] },
      ],
    },
    passos: ["Soma: 2x = 14.", "x = 7, y = 5."],
  },
  momento06_praticaGuiada: {
    enunciado: "I) x + y = 9. II) x − y = 1.",
    dica: "Soma.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "5" }, { nome: "4" }, { nome: "9" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 2x = 10.",
      feedbackErro: "Some as duas.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "I) 3x + 2y = 16. II) 3x − 2y = 4.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "10/3" }, { nome: "3" }, { nome: "10/6" }],
      respostaCerta: "10/3",
      feedbackAcerto: "🎯 6x = 20.",
      feedbackErro: "Y sumiu (2y − 2y = 0).",
    },
  },
  momento08_aplicacao: {
    contexto:
      "Numa lanchonete: 2 sucos + 1 lanche = R$ 20. 2 sucos + 3 lanches = R$ 40.",
    problema: "Quanto custa 1 lanche?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Lanche =",
      opcoes: [{ nome: "R$ 10" }, { nome: "R$ 5" }, { nome: "R$ 8" }],
      respostaCerta: "R$ 10",
      feedbackAcerto: "🎯 Subtraindo eq.: 2 lanches = 20.",
      feedbackErro: "Subtraia I de II.",
    },
  },
  momento09_revisao: {
    pontos: ["Se coef opostos, soma direto.", "Se não, multiplique para igualar.", "Depois volte para achar a outra letra."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x+y=6, x−y=2. x=", opcoes: ["4", "2", "6"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2x=8." },
      { pergunta: "Se somar dá 2x=10, x=", opcoes: ["5", "10", "2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "÷2." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sistema real",
    materiais: ["Papel"],
    passos: ["Crie um sistema com 2 tipos de produto e preços.", "Resolva por adição."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};

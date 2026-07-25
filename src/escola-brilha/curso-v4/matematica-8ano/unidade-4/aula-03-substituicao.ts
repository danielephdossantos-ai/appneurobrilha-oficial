import type { AulaV4 } from "../../types";

export const aula03_substituicao: AulaV4 = {
  slug: "u4-03-substituicao",
  titulo: "Sistema 2×2 — método da substituição",
  iconeTrilha: "🔄",
  bncc: ["EF08MA08"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Duas equações, duas incógnitas",
    historia:
      "{NOME}, quando o problema tem 2 incógnitas, você precisa de 2 equações. Método da substituição = isola uma e SUBSTITUI na outra.",
  },
  momento02_exploracao: {
    instrucao: "Observe.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Sistema",
        cabecalhos: ["Equação", "Escrita"],
        linhas: [
          { rotulo: "I", valores: ["x + y = 10", ""] },
          { rotulo: "II", valores: ["y = 2x", ""] },
        ],
      },
      {
        tipo: "texto",
        texto: "II já está isolada. Substitui em I: x + 2x = 10 → 3x = 10... não fecha inteiro; escolha melhor: II) y = x + 2. Aí I: x + (x+2) = 10 → 2x = 8 → x = 4, y = 6.",
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Qual equação isolo primeiro?",
    pista: "A que tem coeficiente 1 na letra.",
    revelacao: "Escolha o caminho mais fácil.",
  },
  momento04_explicacao: {
    titulo: "Passo a passo",
    etapas: [
      {
        texto: "1) Isole uma letra.",
        exemploReal: {
          contexto: "I) x + y = 12. II) x − y = 4",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["isola I", "x = 12 − y"] },
              { rotulo: "2", valores: ["subst II", "(12−y) − y = 4"] },
              { rotulo: "3", valores: ["resolve y", "12 − 2y = 4 → y = 4"] },
              { rotulo: "4", valores: ["volta x", "x = 12 − 4 = 8"] },
            ],
          },
          destaque: "x = 8, y = 4.",
        },
      },
      {
        texto: "2) Sempre verifique nos DOIS lados.",
        exemploReal: {
          contexto: "Confere: 8+4=12 ✅ e 8−4=4 ✅",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Eq.", "Confere"],
            linhas: [
              { rotulo: "I", valores: ["8+4", "12 ✅"] },
              { rotulo: "II", valores: ["8−4", "4 ✅"] },
            ],
          },
          destaque: "Sistema resolvido.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "I) x + y = 7. II) y = x + 1.",
    resposta: "x = 3, y = 4",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Cálculo"],
      linhas: [
        { rotulo: "1", valores: ["subst", "x + (x+1) = 7"] },
        { rotulo: "2", valores: ["soma", "2x + 1 = 7"] },
        { rotulo: "3", valores: ["resolve", "x = 3"] },
        { rotulo: "4", valores: ["y", "4"] },
      ],
    },
    passos: ["II na I: x + (x+1) = 7.", "2x = 6.", "x = 3, y = 4."],
  },
  momento06_praticaGuiada: {
    enunciado: "I) x + y = 8. II) y = 2x − 1.",
    dica: "Substitui.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "3" }, { nome: "4" }, { nome: "5" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 x + 2x − 1 = 8 → 3x = 9.",
      feedbackErro: "Some 1 dos dois lados.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "I) 2x + y = 11. II) y = x + 2. y =",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "y =",
      opcoes: [{ nome: "5" }, { nome: "3" }, { nome: "7" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 2x + x + 2 = 11 → x=3 → y=5.",
      feedbackErro: "Substitui II na I.",
    },
  },
  momento08_aplicacao: {
    contexto: "Ana + Bruno têm 30 anos. Ana tem 6 anos a mais que Bruno.",
    problema: "Idade de Bruno:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Bruno =",
      opcoes: [{ nome: "12" }, { nome: "18" }, { nome: "10" }],
      respostaCerta: "12",
      feedbackAcerto: "🎯 x+(x+6)=30.",
      feedbackErro: "Ana = x+6.",
    },
  },
  momento09_revisao: {
    pontos: ["Isole a letra mais fácil.", "Substitua na outra equação.", "Volte para achar a outra letra."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "x+y=5, y=x+1. x=", opcoes: ["2", "3", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2x+1=5." },
      { pergunta: "x−y=1, x=y+1 já isolado. y=3. x=", opcoes: ["4", "2", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "x=y+1." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Mistura de valores",
    materiais: ["Papel"],
    passos: ["Crie 2 problemas com 2 incógnitas (ex.: idade, cédulas).", "Resolva por substituição."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};

import type { AulaV4 } from "../../types";

export const aula01_fracaoEquivalencia: AulaV4 = {
  slug: "u4-01-fracao-equivalencia",
  titulo: "O que é fração — e equivalências",
  iconeTrilha: "🍕",
  bncc: ["EF06MA07", "EF06MA08"],
  duracaoMin: 24,
  metodologias: ["cpa", "skemp"],

  momento01_motivacao: {
    titulo: "Partes do todo",
    historia: "{NOME}, fração é dividir um TODO em partes iguais e falar de ALGUMAS delas. 1/2, 1/4, 3/4… O de baixo diz em quantas partes; o de cima diz quantas peguei.",
  },

  momento02_exploracao: {
    instrucao: "Toque nas peças e veja a fração aparecer.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Anatomia da fração",
        cabecalhos: ["Parte", "Nome", "Papel"],
        linhas: [
          { rotulo: "Numerador", valores: ["3 (em cima)", "Numerador", "Quantas partes peguei"] },
          { rotulo: "Denominador", valores: ["4 (embaixo)", "Denominador", "Em quantas dividi o todo"] },
        ],
      },
      { tipo: "texto", texto: "Regra: DENOMINADOR nunca pode ser 0.", destaque: true },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "1/2 e 2/4 são iguais?",
    pista: "Desenhe as duas frações num círculo.",
    revelacao: "SIM! 1/2 = 2/4 = 4/8. São FRAÇÕES EQUIVALENTES.",
  },

  momento04_explicacao: {
    titulo: "Equivalência e simplificação",
    etapas: [
      {
        texto: "Frações equivalentes: multiplique ou divida numerador E denominador pelo MESMO número.",
        exemploReal: {
          contexto: "1/2 = ?",
          visualMat: {
            tipo: "tabela",
            titulo: "Multiplicando por 2, 3, 4…",
            cabecalhos: ["×n", "Fração"],
            linhas: [
              { rotulo: "×2", valores: ["×2", "2/4"] },
              { rotulo: "×3", valores: ["×3", "3/6"] },
              { rotulo: "×4", valores: ["×4", "4/8"] },
              { rotulo: "×5", valores: ["×5", "5/10"] },
            ],
          },
          destaque: "Todas valem 1/2.",
        },
      },
      {
        texto: "Simplificar = dividir os DOIS pelo MDC.",
        exemploReal: {
          contexto: "12/18 → simplificar",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Fração"],
            linhas: [
              { rotulo: "Início", valores: ["Início", "12/18"] },
              { rotulo: "MDC=6", valores: ["÷6 nos dois", "2/3"] },
            ],
          },
          destaque: "12/18 = 2/3 (forma IRREDUTÍVEL).",
        },
      },
      {
        texto: "Fração irredutível: numerador e denominador PRIMOS entre si (MDC = 1).",
        exemploReal: {
          contexto: "2/3, 3/5, 7/10 são irredutíveis.",
          destaque: "Não dá pra simplificar mais.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Simplifique 24/36.",
    resposta: "2/3",
    passos: ["MDC(24, 36) = 12.", "24 ÷ 12 = 2.", "36 ÷ 12 = 3.", "24/36 = 2/3."],
  },

  momento06_praticaGuiada: {
    enunciado: "Qual é equivalente a 3/5?",
    dica: "Multiplique os dois pelo MESMO número.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6/10" }, { nome: "3/10" }, { nome: "6/5" }],
      respostaCerta: "6/10",
      feedbackAcerto: "🎯 ×2 em cima e embaixo.",
      feedbackErro: "Tem que multiplicar OS DOIS pelo mesmo.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Simplifique 20/30.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "2/3" }, { nome: "10/15" }, { nome: "4/6" }],
      respostaCerta: "2/3",
      feedbackAcerto: "🎯 MDC(20,30)=10. Divide os dois.",
      feedbackErro: "10/15 e 4/6 ainda dá pra simplificar.",
    },
  },

  momento08_aplicacao: {
    contexto: "Uma pizza foi cortada em 8. Comeram 4 fatias.",
    problema: "Que fração comeram (irredutível)?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "1/2" }, { nome: "4/8" }, { nome: "2/4" }],
      respostaCerta: "1/2",
      feedbackAcerto: "🎯 4/8 = 1/2 (irredutível).",
      feedbackErro: "Simplifique até acabar.",
    },
  },

  momento09_revisao: {
    pontos: ["Numerador em cima, denominador embaixo.", "Multiplicar/dividir os dois = fração equivalente.", "Simplificar até ser irredutível."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "1/4 é equivalente a:", opcoes: ["2/8", "1/8", "4/1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×2 nos dois." },
      { pergunta: "10/15 simplificada:", opcoes: ["2/3", "5/7", "10/15"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "MDC=5." },
      { pergunta: "3/5 é irredutível?", opcoes: ["Sim", "Não"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "3 e 5 são primos entre si." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Fração da comida",
    materiais: ["Prato de comida"],
    passos: ["Divida um alimento em partes iguais.", "Diga que fração vc comeu.", "Simplifique."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 160, moedas: 85 },
};

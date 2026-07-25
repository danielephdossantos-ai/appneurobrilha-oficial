import type { AulaV4 } from "../../types";

export const aula02_proporcao: AulaV4 = {
  slug: "u6-02-proporcao",
  titulo: "Proporção e regra de três simples",
  iconeTrilha: "🔗",
  bncc: ["EF06MA13"],
  duracaoMin: 26,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Duas razões iguais",
    historia: "{NOME}, quando duas razões são iguais, temos uma PROPORÇÃO. Se 2 kg custa R$ 10, quanto 5 kg?",
  },

  momento02_exploracao: {
    instrucao: "Proporção: a/b = c/d.",
    cenas: [
      { tipo: "texto", texto: "Propriedade fundamental: a × d = b × c (produto dos meios = produto dos extremos).", destaque: true },
      {
        tipo: "tabela",
        titulo: "Regra de três",
        cabecalhos: ["Grandeza 1", "Grandeza 2"],
        linhas: [
          { rotulo: "2 kg", valores: ["2 kg", "R$ 10"] },
          { rotulo: "5 kg", valores: ["5 kg", "x"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "2/10 = 5/x. Ache x.",
    pista: "Cruze: 2x = 50.",
    revelacao: "x = 25. Cinco kg custam R$ 25.",
  },

  momento04_explicacao: {
    titulo: "Regra de três — passo a passo",
    etapas: [
      {
        texto: "Monte a tabela, cruze e resolva.",
        exemploReal: {
          contexto: "3 pessoas comem 6 maçãs. 10 pessoas comem?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Pessoas", "Maçãs"],
            linhas: [
              { rotulo: "3", valores: ["3", "6"] },
              { rotulo: "10", valores: ["10", "x"] },
            ],
          },
          destaque: "3x = 60 → x = 20 maçãs.",
        },
      },
      {
        texto: "Proporção direta: se uma grandeza AUMENTA e a outra também, é DIRETA.",
        exemploReal: {
          contexto: "Mais pessoas → mais comida (direta).",
          destaque: "Cruze normalmente.",
        },
      },
      {
        texto: "Proporção inversa: uma aumenta, outra diminui (INVERSA). Cruze DIFERENTE.",
        exemploReal: {
          contexto: "Mais trabalhadores → menos tempo (inversa).",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Trabalhadores", "Dias"],
            linhas: [
              { rotulo: "4", valores: ["4", "6"] },
              { rotulo: "6", valores: ["6", "x"] },
            ],
          },
          destaque: "Inversa: 4 × 6 = 6 × x → x = 4 dias.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "3 kg custam R$ 24. Quanto custam 8 kg?",
    resposta: "R$ 64",
    passos: ["Direta.", "3/24 = 8/x → 3x = 192 → x = 64."],
  },

  momento06_praticaGuiada: {
    enunciado: "5/x = 15/60. Ache x.",
    dica: "5 × 60 = 15x.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Resultado:",
      opcoes: [{ nome: "20" }, { nome: "10" }, { nome: "12" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 300 ÷ 15 = 20.",
      feedbackErro: "Cruze e divida.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "5 pedreiros levam 12 dias. Quantos dias para 10 pedreiros? (inversa)",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 dias" }, { nome: "24 dias" }, { nome: "12 dias" }],
      respostaCerta: "6 dias",
      feedbackAcerto: "🎯 5×12 = 10×x → x=6.",
      feedbackErro: "Inversa: multiplique 'em pé'.",
    },
  },

  momento08_aplicacao: {
    contexto: "4 litros de tinta pintam 60 m². Quantos litros pra 90 m²?",
    problema: "Direta.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "6 L" }, { nome: "5 L" }, { nome: "8 L" }],
      respostaCerta: "6 L",
      feedbackAcerto: "🎯 4/60 = x/90 → x = 6.",
      feedbackErro: "Cruze.",
    },
  },

  momento09_revisao: {
    pontos: ["Proporção: a×d = b×c.", "Direta: cruze normal.", "Inversa: multiplique 'em pé'."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "2/6 = 4/x. x =", opcoes: ["12", "8", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Cruze." },
      { pergunta: "Se 3 kg = R$ 15, 6 kg =", opcoes: ["R$ 30", "R$ 45", "R$ 18"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Dobro." },
      { pergunta: "Mais trabalhadores → menos tempo. Tipo:", opcoes: ["Inversa", "Direta"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Inversa." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Regra de três da receita",
    materiais: ["Receita"],
    passos: ["Pegue uma receita.", "Refaça pra o dobro de pessoas usando regra de três."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 190, moedas: 100 },
};

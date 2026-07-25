import type { AulaV4 } from "../../types";

export const aula05_missao: AulaV4 = {
  slug: "u6-05-missao",
  titulo: "Missão — Algebrista Iniciante",
  iconeTrilha: "🏅",
  bncc: ["EF06MA13", "EF06MA14", "EF06MA15"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Álgebra chegou",
    historia: "{NOME}, você já usa RAZÃO, PROPORÇÃO, SEQUÊNCIA e EQUAÇÃO. Bem-vinda(o) à álgebra.",
  },

  momento02_exploracao: {
    instrucao: "Kit final.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Ferramentas",
        cabecalhos: ["Ferramenta", "Uso"],
        linhas: [
          { rotulo: "Razão", valores: ["Razão", "Comparar grandezas"] },
          { rotulo: "Proporção", valores: ["Proporção", "Regra de três"] },
          { rotulo: "Sequência", valores: ["Sequência", "Achar padrão"] },
          { rotulo: "Equação", valores: ["Equação", "Achar o x"] },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Junte tudo: 4 kg custa 32. 7 kg é x. Ache x.",
    pista: "Regra de três: 4/32 = 7/x.",
    revelacao: "x = 56.",
  },

  momento04_explicacao: {
    titulo: "Combinações",
    etapas: [
      {
        texto: "Muitas situações reais viram EQUAÇÃO.",
        exemploReal: {
          contexto: "Aluguel de bicicleta: R$ 10 fixo + R$ 5 por hora. Total R$ 30. Quantas horas?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Equação"],
            linhas: [
              { rotulo: "1", valores: ["Monte", "10 + 5x = 30"] },
              { rotulo: "2", valores: ["−10", "5x = 20"] },
              { rotulo: "3", valores: ["÷5", "x = 4"] },
            ],
          },
          destaque: "4 horas.",
        },
      },
      {
        texto: "Regra de três: monte a tabela e cruze.",
        exemploReal: {
          contexto: "4 kg custam R$ 32. Quanto custam 7 kg?",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["kg", "R$"],
            linhas: [
              { rotulo: "1", valores: ["4", "32"] },
              { rotulo: "2", valores: ["7", "x"] },
              { rotulo: "3", valores: ["cruzar", "4 · x = 7 · 32"] },
              { rotulo: "4", valores: ["isolar x", "x = 224 ÷ 4"] },
              { rotulo: "5", valores: ["resposta", "R$ 56"] },
            ],
          },
          destaque: "x = 56.",
        },
      },
      {
        texto: "Sequências: descubra o padrão observando a diferença.",
        exemploReal: {
          contexto: "5, 10, 20, 40, __",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Termo", "Valor", "Operação"],
            linhas: [
              { rotulo: "1º", valores: ["1º", "5", "—"] },
              { rotulo: "2º", valores: ["2º", "10", "×2"] },
              { rotulo: "3º", valores: ["3º", "20", "×2"] },
              { rotulo: "4º", valores: ["4º", "40", "×2"] },
              { rotulo: "5º", valores: ["5º", "80", "×2"] },
            ],
          },
          destaque: "Padrão geométrico ×2 → próximo = 80.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Sequência 5, 10, 20, 40, __.",
    resposta: "80",
    visualMat: {
      tipo: "retaNumerica",
      min: 0,
      max: 90,
      passo: 10,
      destacar: [
        { valor: 5, rotulo: "5" },
        { valor: 10, rotulo: "10" },
        { valor: 20, rotulo: "20" },
        { valor: 40, rotulo: "40" },
        { valor: 80, rotulo: "80", cor: "#10b981" },
      ],
    },
    passos: ["Geométrica ×2.", "40 × 2 = 80."],
  },

  momento06_praticaGuiada: {
    enunciado: "x + 12 = 30.",
    dica: "−12.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "18" }, { nome: "42" }, { nome: "12" }],
      respostaCerta: "18",
      feedbackAcerto: "🎯",
      feedbackErro: "Some/subtraia dos dois lados.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Se 4 kg = R$ 20, 8 kg = ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 40" }, { nome: "R$ 25" }, { nome: "R$ 80" }],
      respostaCerta: "R$ 40",
      feedbackAcerto: "🎯 Dobro do peso, dobro do preço.",
      feedbackErro: "Regra de três direta.",
    },
  },

  momento08_aplicacao: {
    contexto: "Meu irmão tem o triplo da minha idade. Somando dá 32.",
    problema: "Quantos anos eu tenho? (x + 3x = 32)",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "8" }, { nome: "10" }, { nome: "12" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 4x = 32 → x = 8.",
      feedbackErro: "Junte os x's.",
    },
  },

  momento09_revisao: {
    pontos: ["Toda situação de comparação, padrão ou desconhecido vem daqui.", "Missão cumprida."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Se 2/x = 4/8, x =", opcoes: ["4", "16", "1"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Cruze." },
      { pergunta: "3, 6, 12, 24, __:", opcoes: ["48", "30", "36"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "×2." },
      { pergunta: "x − 5 = 10 → x =", opcoes: ["15", "5", "2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "+5." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Diploma Algebrista",
    materiais: ["Papel"],
    passos: ["Diploma.", "Cite 2 problemas que você resolveu com equação."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 220, moedas: 110, medalha: "Algebrista Iniciante" },
};

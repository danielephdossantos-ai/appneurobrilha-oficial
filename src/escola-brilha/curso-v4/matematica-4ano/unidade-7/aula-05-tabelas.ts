import type { AulaV4 } from "../../types";

export const aula05_tabelas: AulaV4 = {
  slug: "u7-05-tabelas",
  titulo: "Lendo tabelas",
  iconeTrilha: "📋",
  bncc: ["EF04MA27", "EF04MA28"],
  duracaoMin: 20,
  metodologias: ["rme"],

  momento01_motivacao: {
    titulo: "Dados em linhas e colunas",
    historia:
      "{NOME}, tabela guarda informação em linhas e colunas. Cabeçalho (em cima) diz o que é cada coluna.",
  },
  momento02_exploracao: {
    instrucao: "Uma tabela.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Nota de 4 provas",
        cabecalhos: ["Aluno", "P1", "P2", "P3", "P4"],
        linhas: [
          { rotulo: "Ana", valores: [8, 7, 9, 10] },
          { rotulo: "Beto", valores: [6, 8, 7, 8] },
          { rotulo: "Carla", valores: [9, 9, 8, 10] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como achar a nota da Ana na P3?",
    pista: "Linha da Ana, coluna P3.",
    revelacao: "Cruze linha e coluna: 9.",
  },
  momento04_explicacao: {
    titulo: "Somar e comparar",
    etapas: [
      {
        texto: "Somar por linha = total do aluno. Por coluna = total daquela prova.",
        exemploReal: {
          contexto: "Ana: 8+7+9+10.",
          destaque: "Total Ana = 34.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Quantos pontos Carla fez ao todo?",
    passos: ["9+9+8+10 = 36."],
    resposta: "36",
  },
  momento06_praticaGuiada: {
    enunciado: "Nota do Beto na P2:",
    dica: "Linha Beto × coluna P2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "8" }, { nome: "6" }, { nome: "7" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯 8.",
      feedbackErro: "Cruze linha/coluna.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Total do Beto (soma das 4 provas):",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "29" }, { nome: "28" }, { nome: "30" }],
      respostaCerta: "29",
      feedbackAcerto: "🎯 29.",
      feedbackErro: "6+8+7+8=29.",
    },
  },
  momento08_aplicacao: {
    contexto: "Quem tem a maior nota total?",
    problema: "Compare os três totais.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Carla (36)" }, { nome: "Ana (34)" }, { nome: "Beto (29)" }],
      respostaCerta: "Carla (36)",
      feedbackAcerto: "🎯 Carla.",
      feedbackErro: "Ana=34, Beto=29, Carla=36.",
    },
  },
  momento09_revisao: {
    pontos: ["Cruze linha × coluna.", "Total por linha ou por coluna."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Total da P1 (Ana+Beto+Carla):", opcoes: ["23", "22", "24"], correta: 0, feedbackAcerto: "🎉 23.", feedbackErro: "8+6+9=23." },
      { pergunta: "Nota da Ana na P4:", opcoes: ["10", "9", "8"], correta: 0, feedbackAcerto: "🎉 10.", feedbackErro: "Linha Ana × P4." },
      { pergunta: "Média das provas do Beto ~", opcoes: ["7", "6", "8"], correta: 0, feedbackAcerto: "🎉 ~7.", feedbackErro: "29÷4 ≈ 7." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Tabela da Casa",
    materiais: ["Papel"],
    passos: ["Anote 3 gastos da semana em 3 categorias.", "Some por linha e por coluna."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

import type { AulaV4 } from "../../types";

export const aula04_estatistica: AulaV4 = {
  slug: "u7-04-estatistica",
  titulo: "Gráficos e estatística",
  iconeTrilha: "📊",
  bncc: ["EF06MA31", "EF06MA32"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Ler dados",
    historia: "{NOME}, jornais, celulares e escolas usam GRÁFICOS todo dia. Aprender a lê-los é essencial.",
  },

  momento02_exploracao: {
    instrucao: "Gráfico de barras: altura = quantidade.",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Sabor preferido de sorvete (turma A)",
        unidade: "alunos",
        barras: [
          { rotulo: "Chocolate", valor: 12 },
          { rotulo: "Morango", valor: 8 },
          { rotulo: "Baunilha", valor: 5 },
          { rotulo: "Flocos", valor: 3 },
        ],
      },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Qual sabor foi mais votado?",
    pista: "A barra mais ALTA.",
    revelacao: "Chocolate, com 12 votos.",
  },

  momento04_explicacao: {
    titulo: "Medidas estatísticas",
    etapas: [
      {
        texto: "Moda: valor que aparece MAIS.",
        exemploReal: {
          contexto: "Notas: 7, 8, 8, 9, 6",
          destaque: "Moda = 8.",
        },
      },
      {
        texto: "Média aritmética: soma tudo, divide pela quantidade.",
        exemploReal: {
          contexto: "Notas 7, 8, 6, 9",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Cálculo"],
            linhas: [
              { rotulo: "1", valores: ["Soma", "30"] },
              { rotulo: "2", valores: ["÷ 4", "7,5"] },
            ],
          },
          destaque: "Média = 7,5.",
        },
      },
      {
        texto: "Pesquisa: coleta → tabela → gráfico → conclusão.",
        exemploReal: {
          contexto: "Perguntando idade preferida de filme.",
          destaque: "Sempre tira uma conclusão do gráfico.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Média das notas: 8, 6, 9, 7, 10.",
    resposta: "8",
    passos: ["Soma = 40.", "÷ 5 = 8."],
  },

  momento06_praticaGuiada: {
    enunciado: "Numa turma: 15 meninas, 12 meninos. Total?",
    dica: "Some.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "27" }, { nome: "23" }, { nome: "3" }],
      respostaCerta: "27",
      feedbackAcerto: "🎯",
      feedbackErro: "Some as duas.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Moda de: 5, 5, 6, 7, 5, 6.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "6" }, { nome: "7" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 5 aparece 3×.",
      feedbackErro: "Quem aparece mais.",
    },
  },

  momento08_aplicacao: {
    contexto: "Vendas por dia: seg 20, ter 35, qua 40, qui 30, sex 25.",
    problema: "Média por dia?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "30" }, { nome: "150" }, { nome: "40" }],
      respostaCerta: "30",
      feedbackAcerto: "🎯 Soma 150 ÷ 5 = 30.",
      feedbackErro: "Soma tudo, divide por 5.",
    },
  },

  momento09_revisao: {
    pontos: ["Gráfico de barras: altura = qtd.", "Moda = mais frequente.", "Média = soma ÷ qtd."],
  },

  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Média de 4 e 6:", opcoes: ["5", "10", "2"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Soma ÷ 2." },
      { pergunta: "Moda de 1,2,2,3:", opcoes: ["2", "1", "3"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Mais frequente." },
      { pergunta: "Gráfico mais alto:", opcoes: ["Mais votos", "Menos votos", "Média"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Altura = qtd." },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Pesquisa em casa",
    materiais: ["Papel"],
    passos: ["Pergunte pra 5 pessoas: fruta preferida.", "Faça a tabela.", "Desenhe o gráfico."],
    registro: "📸 Foto do gráfico.",
  },
  recompensa: { xp: 180, moedas: 95 },
};

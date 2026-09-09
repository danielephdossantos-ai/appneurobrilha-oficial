import type { AulaV4 } from "../../types";

export const aula06_analiseDados: AulaV4 = {
  slug: "u7-06-analise-dados",
  titulo: "Analisar Dados",
  iconeTrilha: "🔎",
  bncc: ["EF03MA27", "EF03MA28"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Concluir com números",
    historia: "Depois de coletar, é hora de decidir. Os números guiam a escolha.",
  },
  momento02_exploracao: {
    instrucao: "Perguntas comuns: maior? menor? diferença? soma? moda?",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Pesquisa de lanche",
        unidade: "votos",
        barras: [
          { rotulo: "Pizza", valor: 15 },
          { rotulo: "Hambúrguer", valor: 10 },
          { rotulo: "Cachorro", valor: 8 },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como decidir o lanche da festa?",
    pista: "Escolha o mais votado.",
    revelacao: "Escolhemos o valor de MAIOR frequência (a moda).",
  },
  momento04_explicacao: {
    titulo: "Do dado à decisão",
    etapas: [
      {
        texto: "Pesquisa: pizza=15, hambúrguer=10, cachorro=8.",
        exemploReal: {
          contexto: "Pizza tem a maior barra.",
          destaque: "Vamos de pizza.",
          visualMat: {
            tipo: "graficoBarras",
            titulo: "Votos por lanche",
            unidade: "votos",
            barras: [
              { rotulo: "Pizza", valor: 15 },
              { rotulo: "Hambúrguer", valor: 10 },
              { rotulo: "Cachorro", valor: 8 },
            ],
          },
        },
      },
      {
        texto: "Diferença = maior − menor.",
        exemploReal: {
          contexto: "15 − 8 = 7.",
          destaque: "A pizza teve 7 votos a mais que o cachorro.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Compare 25, 30, 20. Maior, menor e diferença?",
    passos: ["Maior = 30.", "Menor = 20.", "Diferença = 30 − 20 = 10."],
    resposta: "Maior 30 · Menor 20 · Diferença 10",
    visualMat: {
      tipo: "graficoBarras",
      titulo: "Valores comparados",
      barras: [
        { rotulo: "A", valor: 25 },
        { rotulo: "B", valor: 30 },
        { rotulo: "C", valor: 20 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Vendas seg=12, ter=18, qua=15. Total?",
    dica: "Some.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "45" }, { nome: "40" }, { nome: "50" }],
      respostaCerta: "45",
      feedbackAcerto: "🎉 45.",
      feedbackErro: "12+18+15=45.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Turma A=22, B=25, C=18. Total de alunos?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "65" }, { nome: "60" }, { nome: "70" }],
      respostaCerta: "65",
      feedbackAcerto: "🎯 65.",
      feedbackErro: "22+25+18=65.",
    },
  },
  momento08_aplicacao: {
    contexto: "Chuva na semana: 10, 5, 0, 8, 12 mm.",
    problema: "Total da semana:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "35 mm" }, { nome: "30 mm" }, { nome: "40 mm" }],
      respostaCerta: "35 mm",
      feedbackAcerto: "🎯 10+5+0+8+12=35.",
      feedbackErro: "Some tudo: 35.",
    },
  },
  momento09_revisao: {
    pontos: ["Maior, menor, soma, moda.", "Números guiam decisão."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "3 opções empatam. O que fazer?",
      opcoes: [{ nome: "Nova pesquisa" }, { nome: "Sortear" }, { nome: "Ambos servem" }],
      respostaCerta: "Ambos servem",
      feedbackAcerto: "🎉 Empate = critério novo.",
      feedbackErro: "Empates precisam de critério.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Maior entre 40, 55, 30?", opcoes: ["55", "40", "30"], correta: 0, feedbackAcerto: "🎉 55.", feedbackErro: "55 é o maior." },
      { pergunta: "Diferença entre 100 e 65?", opcoes: ["35", "45", "25"], correta: 0, feedbackAcerto: "🎉 35.", feedbackErro: "100−65=35." },
      { pergunta: "Total 20+15+25?", opcoes: ["60", "50", "70"], correta: 0, feedbackAcerto: "🎉 60.", feedbackErro: "20+15+25=60." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Análise do supermercado",
    materiais: ["Cupom fiscal"],
    passos: ["Pegue um cupom.", "Ache maior gasto, menor gasto, total."],
    registro: "📸 Foto da análise.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

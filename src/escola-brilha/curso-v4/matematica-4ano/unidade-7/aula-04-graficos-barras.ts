import type { AulaV4 } from "../../types";

export const aula04_graficosBarras: AulaV4 = {
  slug: "u7-04-graficos-barras",
  titulo: "Gráficos de colunas",
  iconeTrilha: "📊",
  bncc: ["EF04MA27", "EF04MA28"],
  duracaoMin: 22,
  metodologias: ["rme", "cpa"],

  momento01_motivacao: {
    titulo: "Contando com gráficos",
    historia:
      "{NOME}, gráfico de colunas mostra dados em barras: quanto mais alta, MAIOR o valor. Serve pra comparar quantidades num piscar de olhos.",
  },
  momento02_exploracao: {
    instrucao: "Repare no eixo.",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Fruta preferida — Turma A",
        unidade: "alunos",
        barras: [
          { rotulo: "Maçã", valor: 8 },
          { rotulo: "Banana", valor: 12 },
          { rotulo: "Uva", valor: 5 },
          { rotulo: "Laranja", valor: 7 },
        ],
      },
      { tipo: "texto", texto: "A maior barra é a banana → mais votada.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como saber o total?",
    pista: "Some as barras.",
    revelacao: "Total = 8+12+5+7 = 32 alunos.",
  },
  momento04_explicacao: {
    titulo: "Ler um gráfico",
    etapas: [
      {
        texto: "1) Título. 2) Eixo (o quê). 3) Barras (valores). 4) Escala.",
        exemploReal: {
          contexto: "Ex.: 'Frutas — quantos alunos'.",
          destaque: "Sempre confira a escala.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Qual fruta empatou com nada?",
    passos: ["Nenhuma barra tem 0.", "Todas foram votadas."],
    resposta: "Nenhuma",
    visualMat: {
      tipo: "graficoBarras",
      barras: [
        { rotulo: "Maçã", valor: 8 },
        { rotulo: "Banana", valor: 12 },
        { rotulo: "Uva", valor: 5 },
        { rotulo: "Laranja", valor: 7 },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Diferença entre a mais e a menos votada:",
    dica: "Banana − Uva.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "7" }, { nome: "5" }, { nome: "12" }],
      respostaCerta: "7",
      feedbackAcerto: "🎯 12−5=7.",
      feedbackErro: "Maior − menor.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Total de votos na banana + maçã:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "20" }, { nome: "18" }, { nome: "22" }],
      respostaCerta: "20",
      feedbackAcerto: "🎯 20.",
      feedbackErro: "12+8=20.",
    },
  },
  momento08_aplicacao: {
    contexto: "Escola quer comprar suco. Deve escolher a fruta mais votada.",
    problema: "Qual sabor?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Banana" }, { nome: "Uva" }, { nome: "Maçã" }],
      respostaCerta: "Banana",
      feedbackAcerto: "🎯 Banana.",
      feedbackErro: "Maior barra.",
    },
  },
  momento09_revisao: {
    pontos: ["Barra alta = valor grande.", "Total = soma das barras."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Se tirar a laranja, sobram quantos?", opcoes: ["25", "20", "32"], correta: 0, feedbackAcerto: "🎉 25.", feedbackErro: "8+12+5=25." },
      { pergunta: "Menor votada:", opcoes: ["Uva", "Laranja", "Maçã"], correta: 0, feedbackAcerto: "🎉 Uva.", feedbackErro: "5 é o menor." },
      { pergunta: "Total geral:", opcoes: ["32", "30", "34"], correta: 0, feedbackAcerto: "🎉 32.", feedbackErro: "8+12+5+7=32." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Meu Gráfico",
    materiais: ["Papel quadriculado"],
    passos: ["Pergunte a 10 pessoas a cor preferida.", "Desenhe as barras.", "Escreva a mais escolhida."],
    registro: "📸 Foto do gráfico.",
  },
  recompensa: { xp: 220, moedas: 110 },
};

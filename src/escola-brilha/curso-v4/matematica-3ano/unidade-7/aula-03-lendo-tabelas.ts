import type { AulaV4 } from "../../types";

export const aula03_tabelas: AulaV4 = {
  slug: "u7-03-tabelas",
  titulo: "Lendo Tabelas",
  iconeTrilha: "📑",
  bncc: ["EF03MA27"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Organizar em linhas e colunas",
    historia: "A tabela guarda informação em linhas e colunas — como um armário.",
  },
  momento02_exploracao: {
    instrucao: "Cada linha é um item, cada coluna é uma medida.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Aulas por dia da semana",
        cabecalhos: ["Aulas"],
        linhas: [
          { rotulo: "2ª feira", valores: [4] },
          { rotulo: "3ª feira", valores: [5] },
          { rotulo: "4ª feira", valores: [3] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como ler um dado específico?",
    pista: "Cruze a linha e a coluna.",
    revelacao: "'2ª feira × Aulas' → o número no cruzamento.",
  },
  momento04_explicacao: {
    titulo: "Ler cruzamentos",
    etapas: [
      {
        texto: "Aulas: 2ªF=4, 3ªF=5, 4ªF=3.",
        exemploReal: {
          contexto: "Célula 2ªF × Aulas = 4.",
          destaque: "Cruzamento linha × coluna.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Aulas"],
            linhas: [
              { rotulo: "2ª feira", valores: [4] },
              { rotulo: "3ª feira", valores: [5] },
              { rotulo: "4ª feira", valores: [3] },
            ],
            destacar: { linha: 1, coluna: 1 },
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Vendas segunda=10, terça=15. Total dos 2 dias?",
    passos: ["Some as linhas.", "10 + 15 = 25."],
    resposta: "25 vendas",
    visualMat: {
      tipo: "tabela",
      titulo: "Vendas da semana",
      cabecalhos: ["Vendas"],
      linhas: [
        { rotulo: "Segunda", valores: [10] },
        { rotulo: "Terça", valores: [15] },
      ],
    },
  },
  momento06_praticaGuiada: {
    enunciado: "Vendas seg=10, ter=15. Total?",
    dica: "Some.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "25" }, { nome: "20" }, { nome: "30" }],
      respostaCerta: "25",
      feedbackAcerto: "🎉 25.",
      feedbackErro: "10+15=25.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Turma A=25, Turma B=22. Diferença?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "3" }, { nome: "5" }, { nome: "7" }],
      respostaCerta: "3",
      feedbackAcerto: "🎯 3.",
      feedbackErro: "25−22=3.",
    },
  },
  momento08_aplicacao: {
    contexto: "Frutas colhidas: banana=20, maçã=15, laranja=25.",
    problema: "Total:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "60" }, { nome: "50" }, { nome: "70" }],
      respostaCerta: "60",
      feedbackAcerto: "🎯 20+15+25=60.",
      feedbackErro: "20+15+25=60.",
    },
  },
  momento09_revisao: {
    pontos: ["Linha × Coluna localiza dado.", "Some para totais."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "5+7+8+10=?",
      opcoes: [{ nome: "30" }, { nome: "28" }, { nome: "32" }],
      respostaCerta: "30",
      feedbackAcerto: "🎉 30.",
      feedbackErro: "5+7+8+10=30.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "12+8+5=?", opcoes: ["25", "20", "30"], correta: 0, feedbackAcerto: "🎉 25.", feedbackErro: "12+8+5=25." },
      { pergunta: "30−12=?", opcoes: ["18", "22", "12"], correta: 0, feedbackAcerto: "🎉 18.", feedbackErro: "30−12=18." },
      { pergunta: "Onde está o dado 'quarta × futebol' 6?", opcoes: ["Linha quarta, coluna futebol", "Coluna quarta", "Linha futebol"], correta: 0, feedbackAcerto: "🎉 Cruzamento.", feedbackErro: "Linha × coluna." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Tabela do sono",
    materiais: ["Papel"],
    passos: ["Anote a hora de dormir de 5 dias.", "Faça uma tabela."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

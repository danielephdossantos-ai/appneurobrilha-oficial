import type { AulaV4 } from "../../types";

export const aula03_tabelas: AulaV4 = {
  slug: "u7-03-tabelas",
  titulo: "Lendo Tabelas",
  iconeTrilha: "📑",
  bncc: ["EF03MA27"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Organizar em linhas",
    historia: "A tabela guarda informação em linhas e colunas — como um armário.",
  },
  momento02_exploracao: {
    instrucao: "Partes de uma tabela.",
    cenas: [
      { tipo: "texto", texto: "Cabeçalho: o que cada coluna representa." },
      { tipo: "texto", texto: "Cada linha: um dado.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como ler um dado específico?",
    pista: "Cruzando linha e coluna.",
    revelacao: "'2ª feira, Vôlei' → o número no cruzamento.",
  },
  momento04_explicacao: {
    titulo: "Ler cruzamentos",
    etapas: [
      {
        texto: "Aulas por dia: 2ªF: 4, 3ªF: 5, 4ªF: 3.",
        exemploReal: { contexto: "Cada célula = 1 dia × 1 quantidade.", destaque: "Total da semana somando." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Se 2ªF=4 e 3ªF=5, total?",
    passos: ["4+5=9."],
    resposta: "9 aulas",
    casasValor: { numero: 9, mostrarDecomposicao: false, extenso: "nove" },
  },
  momento06_praticaGuiada: {
    enunciado: "Vendas: seg=10, ter=15. Total 2 dias?",
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
    contexto: "Frutas colhidas: banana 20, maçã 15, laranja 25.",
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
    pontos: ["Linha × Coluna.", "Some para totais."],
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
      { pergunta: "Onde está o dado 'quarta, futebol' 6?", opcoes: ["Linha quarta, coluna futebol", "Coluna quarta", "Linha futebol"], correta: 0, feedbackAcerto: "🎉 Cruzamento.", feedbackErro: "Linha × coluna." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Tabela do consumo",
    materiais: ["Papel"],
    passos: ["Anote a hora de dormir de 5 dias.", "Faça uma tabela."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

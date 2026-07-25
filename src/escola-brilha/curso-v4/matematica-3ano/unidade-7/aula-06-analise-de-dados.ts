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
    historia: "Depois de coletar, é hora de decidir. Os números nos ajudam a escolher.",
  },
  momento02_exploracao: {
    instrucao: "Perguntas comuns.",
    cenas: [
      { tipo: "texto", texto: "Qual o maior? O menor? A diferença?" },
      { tipo: "texto", texto: "Qual a soma? Qual a moda?", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como decidir a próxima festa?",
    pista: "Olhando o que mais gente quer.",
    revelacao: "Escolha o valor de MAIOR frequência (a moda).",
  },
  momento04_explicacao: {
    titulo: "Do dado à decisão",
    etapas: [
      {
        texto: "Pesquisa de lanche: pizza 15, hambúrguer 10, cachorro-quente 8.",
        exemploReal: { contexto: "Pizza tem maior barra.", destaque: "Vamos de pizza." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Compare 25, 30 e 20. Maior e menor?",
    passos: ["Maior 30, menor 20.", "Diferença 10."],
    resposta: "Maior 30, menor 20",
    casasValor: { numero: 30, mostrarDecomposicao: false, extenso: "trinta" },
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
    contexto: "Chuva na semana: 10 mm, 5 mm, 0, 8 mm, 12 mm.",
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
      pergunta: "Se 3 opções empatam, escolha qual?",
      opcoes: [{ nome: "Nova pesquisa" }, { nome: "Sortear" }, { nome: "Ambos podem" }],
      respostaCerta: "Ambos podem",
      feedbackAcerto: "🎉 Empate = decidir de outro jeito.",
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

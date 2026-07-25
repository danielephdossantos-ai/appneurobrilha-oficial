import type { AulaV4 } from "../../types";

export const aula05_graficos: AulaV4 = {
  slug: "u7-05-graficos",
  titulo: "Gráficos: colunas, linha e pizza",
  iconeTrilha: "📊",
  bncc: ["EF05MA24"],
  duracaoMin: 22,
  metodologias: ["skemp"],

  momento01_motivacao: {
    titulo: "Dados que falam",
    historia: "{NOME}, gráficos deixam a informação FÁCIL de ver. Cada tipo conta uma história diferente.",
  },
  momento02_exploracao: {
    instrucao: "Tipos.",
    cenas: [
      { tipo: "texto", texto: "Colunas/barras: comparar categorias.", destaque: true },
      { tipo: "texto", texto: "Linha: mostrar evolução ao longo do tempo." },
      { tipo: "texto", texto: "Pizza (setores): parte do todo (%)." },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Chuva mês a mês — qual gráfico?",
    pista: "Passar do tempo.",
    revelacao: "Linha.",
  },
  momento04_explicacao: {
    titulo: "Ler informação",
    etapas: [
      { texto: "Coluna alta = valor grande. Linha subindo = crescendo." },
      { texto: "Pizza: fatia maior = maior porcentagem." },
    ],
  },
  momento05_modelagem: {
    enunciado: "Pizza com fatias 50%, 25% e 25%.",
    resposta: "Metade e dois quartos",
    passos: ["A maior é metade.", "As outras duas são iguais, cada uma um quarto."],
  },
  momento06_praticaGuiada: {
    enunciado: "Notas: 4 alunos com 6, 8 alunos com 7, 6 alunos com 8. Qual valor tem mais alunos?",
    dica: "Coluna mais alta.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Nota 7" }, { nome: "Nota 8" }, { nome: "Nota 6" }],
      respostaCerta: "Nota 7",
      feedbackAcerto: "🎯 8 alunos.",
      feedbackErro: "Nota 7.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Total de alunos com notas 6, 7 e 8 (4+8+6):",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "18" }, { nome: "16" }, { nome: "20" }],
      respostaCerta: "18",
      feedbackAcerto: "🎯",
      feedbackErro: "18.",
    },
  },
  momento08_aplicacao: {
    contexto: "Sorvete favorito: 40% chocolate, 30% baunilha, 30% morango.",
    problema: "Qual sabor domina?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Chocolate" }, { nome: "Baunilha" }, { nome: "Morango" }],
      respostaCerta: "Chocolate",
      feedbackAcerto: "🎯 40% é maior.",
      feedbackErro: "Chocolate.",
    },
  },
  momento09_revisao: {
    pontos: ["Barras: comparar.", "Linha: evolução.", "Pizza: parte do todo."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Notas ao longo do ano: qual gráfico?", opcoes: ["Linha", "Pizza", "Barras"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Linha." },
      { pergunta: "Distribuição de faixas etárias:", opcoes: ["Pizza", "Linha", "Nenhum"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Pizza." },
      { pergunta: "Comparar vendas em 5 lojas:", opcoes: ["Barras", "Linha", "Pizza"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "Barras." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Sua tabela",
    materiais: ["Papel"],
    passos: ["Pergunte a 10 pessoas a fruta preferida.", "Faça um gráfico de barras."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 150, moedas: 80 },
};

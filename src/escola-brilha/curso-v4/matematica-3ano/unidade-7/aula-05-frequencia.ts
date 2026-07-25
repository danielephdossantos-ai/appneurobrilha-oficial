import type { AulaV4 } from "../../types";

export const aula05_frequencia: AulaV4 = {
  slug: "u7-05-frequencia",
  titulo: "Quantas Vezes Aparece?",
  iconeTrilha: "🔢",
  bncc: ["EF03MA27"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Contar repetições",
    historia: "Frequência = quantas vezes cada coisa aparece.",
  },
  momento02_exploracao: {
    instrucao: "Definição.",
    cenas: [
      { tipo: "texto", texto: "Se 5 pessoas dizem 'banana', a frequência da banana é 5." },
      { tipo: "texto", texto: "Moda = valor com maior frequência.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como achar a moda?",
    pista: "Maior frequência.",
    revelacao: "Se banana=5, uva=3, maçã=2 → moda é banana.",
  },
  momento04_explicacao: {
    titulo: "Frequência e moda",
    etapas: [
      {
        texto: "Dias que choveu na semana: 2, 4, 3, 4, 5, 4, 2.",
        exemploReal: { contexto: "4 aparece 3 vezes.", destaque: "Moda = 4." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Qual a moda de 2,3,3,4,5,3?",
    passos: ["Conte: 3 aparece 3 vezes.", "Moda = 3."],
    resposta: "3",
    casasValor: { numero: 3, mostrarDecomposicao: false, extenso: "três" },
  },
  momento06_praticaGuiada: {
    enunciado: "Cores: azul 4, vermelho 6, verde 2. Qual moda?",
    dica: "Maior frequência.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Vermelho" }, { nome: "Azul" }, { nome: "Verde" }],
      respostaCerta: "Vermelho",
      feedbackAcerto: "🎉 6 é maior.",
      feedbackErro: "6 > 4 > 2.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Números: 5,5,7,8,5,9. Moda?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "5" }, { nome: "7" }, { nome: "9" }],
      respostaCerta: "5",
      feedbackAcerto: "🎯 5 aparece 3 vezes.",
      feedbackErro: "5 aparece mais.",
    },
  },
  momento08_aplicacao: {
    contexto: "Turma: 6 alunos preferem futebol, 4 preferem vôlei, 5 preferem xadrez.",
    problema: "Esporte moda:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Futebol" }, { nome: "Vôlei" }, { nome: "Xadrez" }],
      respostaCerta: "Futebol",
      feedbackAcerto: "🎯 6 é maior.",
      feedbackErro: "Futebol tem 6.",
    },
  },
  momento09_revisao: {
    pontos: ["Frequência = repetições.", "Moda = mais frequente."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Se todos aparecem 1 vez:",
      opcoes: [{ nome: "Sem moda" }, { nome: "Moda 1" }, { nome: "Moda todos" }],
      respostaCerta: "Sem moda",
      feedbackAcerto: "🎉 Amodal.",
      feedbackErro: "Ninguém repete.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Moda de 2,4,4,6?", opcoes: ["4", "2", "6"], correta: 0, feedbackAcerto: "🎉 4.", feedbackErro: "4 aparece 2 vezes." },
      { pergunta: "Frequência do 7 em 3,7,7,5,7?", opcoes: ["3", "2", "1"], correta: 0, feedbackAcerto: "🎉 3.", feedbackErro: "7 aparece 3 vezes." },
      { pergunta: "Moda de A,B,A,A,C?", opcoes: ["A", "B", "C"], correta: 0, feedbackAcerto: "🎉 A.", feedbackErro: "A aparece 3." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "A cor da família",
    materiais: ["Papel"],
    passos: ["Pergunte a cor preferida de todos.", "Ache a moda."],
    registro: "📸 Foto do resultado.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

import type { AulaV4 } from "../../types";

export const aula01_coletaDados: AulaV4 = {
  slug: "u7-01-coleta-dados",
  titulo: "Coletando Informação",
  iconeTrilha: "📋",
  bncc: ["EF03MA26"],
  duracaoMin: 20,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Perguntar pra saber",
    historia: "Qual a fruta preferida da turma? Antes de saber, é preciso PERGUNTAR e ANOTAR.",
  },
  momento02_exploracao: {
    instrucao: "Passos da coleta.",
    cenas: [
      { tipo: "texto", texto: "1) Faça a pergunta. 2) Anote as respostas. 3) Conte." },
      { tipo: "texto", texto: "Cada resposta = um 'palito' no papel.", destaque: true },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "Como não esquecer nenhuma resposta?",
    pista: "Marque um risquinho por resposta.",
    revelacao: "Tabela com contagem preserva o dado.",
  },
  momento04_explicacao: {
    titulo: "Tabela de contagem",
    etapas: [
      {
        texto: "10 crianças escolheram: 4 banana, 3 maçã, 3 uva.",
        exemploReal: { contexto: "Total = 4+3+3=10.", destaque: "Banana venceu." },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "Some 5+3+2 votos de sorvete.",
    passos: ["5+3=8.", "8+2=10.", "Total 10 votos."],
    resposta: "10 votos",
    casasValor: { numero: 10, mostrarDecomposicao: true, extenso: "dez" },
  },
  momento06_praticaGuiada: {
    enunciado: "Se azul teve 6 votos e vermelho 4, qual venceu?",
    dica: "Maior número.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Azul" }, { nome: "Vermelho" }, { nome: "Empate" }],
      respostaCerta: "Azul",
      feedbackAcerto: "🎉 6 > 4.",
      feedbackErro: "6 > 4.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "Somando 7 + 5 + 3 votos:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "15" }, { nome: "12" }, { nome: "18" }],
      respostaCerta: "15",
      feedbackAcerto: "🎯 15.",
      feedbackErro: "7+5+3=15.",
    },
  },
  momento08_aplicacao: {
    contexto: "Turma de 20 alunos. 8 gostam de futebol, 7 de vôlei, 5 de queimada.",
    problema: "Qual venceu?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Futebol" }, { nome: "Vôlei" }, { nome: "Queimada" }],
      respostaCerta: "Futebol",
      feedbackAcerto: "🎯 8 é o maior.",
      feedbackErro: "8 > 7 > 5.",
    },
  },
  momento09_revisao: {
    pontos: ["Pergunte.", "Anote.", "Conte."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Se 3 respostas ficaram sem contagem, o total está?",
      opcoes: [{ nome: "Errado" }, { nome: "Certo" }, { nome: "Ok" }],
      respostaCerta: "Errado",
      feedbackAcerto: "🎉 Faltam dados.",
      feedbackErro: "Falta contar tudo.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "5+4+3 = ?", opcoes: ["12", "10", "14"], correta: 0, feedbackAcerto: "🎉 12.", feedbackErro: "5+4+3=12." },
      { pergunta: "Qual é o passo 1?", opcoes: ["Perguntar", "Contar", "Comparar"], correta: 0, feedbackAcerto: "🎉 Perguntar.", feedbackErro: "Sempre pergunta primeiro." },
      { pergunta: "Total de 6+6+6?", opcoes: ["18", "16", "20"], correta: 0, feedbackAcerto: "🎉 18.", feedbackErro: "3×6=18." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Pesquisa em casa",
    materiais: ["Papel", "Lápis"],
    passos: ["Escolha uma pergunta.", "Pergunte a 5 pessoas.", "Faça uma tabela."],
    registro: "📸 Foto da tabela.",
  },
  recompensa: { xp: 200, moedas: 100 },
};

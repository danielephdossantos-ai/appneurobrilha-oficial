import type { AulaV4 } from "../../types";

export const aula07_missaoFinalCidade: AulaV4 = {
  slug: "u7-07-missao-final-cidade",
  titulo: "Matemático Oficial da Cidade",
  iconeTrilha: "🏆",
  bncc: ["EF03MA25", "EF03MA26", "EF03MA27", "EF03MA28"],
  duracaoMin: 25,
  metodologias: ["skemp", "cpa"],
  momento01_motivacao: {
    titulo: "Formatura oficial",
    historia: "{NOME}, você chegou ao fim da Cidade dos Números. Prova final: contas, geometria e dados.",
  },
  momento02_exploracao: {
    instrucao: "Revisão geral com visuais.",
    cenas: [
      {
        tipo: "graficoBarras",
        titulo: "Pesquisa da cidade",
        unidade: "votos",
        barras: [
          { rotulo: "Parque", valor: 45 },
          { rotulo: "Quadra", valor: 30 },
          { rotulo: "Biblioteca", valor: 25 },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que aprendeu de mais importante?",
    pista: "Todos os conteúdos se conectam.",
    revelacao: "Matemática é uma linguagem que descreve o mundo.",
  },
  momento04_explicacao: {
    titulo: "Prova mestra",
    etapas: [
      {
        texto: "Some 245 + 178.",
        exemploReal: {
          contexto: "Adição com reagrupamento.",
          destaque: "245 + 178 = 423.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [245, 178],
            resultado: 423,
            passos: [
              { coluna: "U", fala: "5+8=13. Escrevo 3, vai 1.", digito: 3, vaiUm: 1 },
              { coluna: "D", fala: "4+7+1=12. Escrevo 2, vai 1.", digito: 2, vaiUm: 1 },
              { coluna: "C", fala: "2+1+1=4.", digito: 4 },
            ],
          },
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "6 × 8 = ?",
    passos: ["6 grupos de 8.", "6 × 8 = 48."],
    resposta: "48",
    casasValor: { numero: 48, mostrarDecomposicao: true, extenso: "quarenta e oito" },
  },
  momento06_praticaGuiada: {
    enunciado: "Metade de 90?",
    dica: "÷ 2.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "45" }, { nome: "40" }, { nome: "50" }],
      respostaCerta: "45",
      feedbackAcerto: "🎉 45.",
      feedbackErro: "45+45=90.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "3 m em cm?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "300" }, { nome: "30" }, { nome: "3000" }],
      respostaCerta: "300",
      feedbackAcerto: "🎯 300.",
      feedbackErro: "3×100=300.",
    },
  },
  momento08_aplicacao: {
    contexto: "Cidade fez pesquisa: parque=45, quadra=30, biblioteca=25.",
    problema: "Ganhou:",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "Parque" }, { nome: "Quadra" }, { nome: "Biblioteca" }],
      respostaCerta: "Parque",
      feedbackAcerto: "🎯 45 é a maior barra.",
      feedbackErro: "45 > 30 > 25.",
    },
  },
  momento09_revisao: {
    pontos: ["Números até 1000.", "Operações.", "Medidas.", "Formas.", "Dados."],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Quadrado tem quantos ângulos retos?",
      opcoes: [{ nome: "4" }, { nome: "2" }, { nome: "6" }],
      respostaCerta: "4",
      feedbackAcerto: "🎉 4.",
      feedbackErro: "4 cantos retos.",
    },
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "324 + 158 = ?", opcoes: ["482", "472", "492"], correta: 0, feedbackAcerto: "🎉 482.", feedbackErro: "324+158=482." },
      { pergunta: "500 − 175 = ?", opcoes: ["325", "335", "315"], correta: 0, feedbackAcerto: "🎉 325.", feedbackErro: "500−175=325." },
      { pergunta: "63 ÷ 7 = ?", opcoes: ["9", "8", "7"], correta: 0, feedbackAcerto: "🎉 9.", feedbackErro: "9×7=63." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Diploma da Cidade dos Números",
    materiais: ["Papel", "Canetinha"],
    passos: ["Escreva 3 coisas que aprendeu.", "Peça pra alguém da família assinar."],
    registro: "📸 Foto do diploma.",
  },
  recompensa: { xp: 500, moedas: 300 },
};

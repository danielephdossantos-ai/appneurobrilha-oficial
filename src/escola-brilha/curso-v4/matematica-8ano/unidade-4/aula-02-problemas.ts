import type { AulaV4 } from "../../types";

export const aula02_problemas: AulaV4 = {
  slug: "u4-02-problemas",
  titulo: "Traduzindo problemas em equações",
  iconeTrilha: "🔍",
  bncc: ["EF08MA07"],
  duracaoMin: 24,
  metodologias: ["skemp"],
  momento01_motivacao: {
    titulo: "Português → Álgebra",
    historia:
      "{NOME}, o segredo é TRADUZIR: 'o triplo', 'o dobro', 'menos', 'mais', 'tanto quanto' viram símbolos.",
  },
  momento02_exploracao: {
    instrucao: "Dicionário.",
    cenas: [
      {
        tipo: "tabela",
        titulo: "Dicionário Português → Álgebra",
        cabecalhos: ["Palavra", "Símbolo"],
        linhas: [
          { rotulo: "1", valores: ["a soma / mais", "+"] },
          { rotulo: "2", valores: ["a diferença / menos", "−"] },
          { rotulo: "3", valores: ["o dobro", "2x"] },
          { rotulo: "4", valores: ["o triplo", "3x"] },
          { rotulo: "5", valores: ["a metade", "x/2"] },
          { rotulo: "6", valores: ["é igual a", "="] },
        ],
      },
    ],
  },
  momento03_descoberta: {
    perguntaGuia: "O que a incógnita representa?",
    pista: "O 'x' costuma ser o que o problema PERGUNTA.",
    revelacao: "Sempre defina x com uma frase: 'seja x = idade'.",
  },
  momento04_explicacao: {
    titulo: "3 passos",
    etapas: [
      {
        texto: "Passo 1: Defina x.",
        exemploReal: {
          contexto: "O dobro de um número mais 5 é 21.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Escrita"],
            linhas: [
              { rotulo: "1", valores: ["x =", "o número"] },
              { rotulo: "2", valores: ["equação", "2x + 5 = 21"] },
              { rotulo: "3", valores: ["resolve", "x = 8"] },
            ],
          },
          destaque: "x = 8.",
        },
      },
      {
        texto: "Passo 2: Monte a equação.",
        exemploReal: {
          contexto: "A idade de Ana + 3 = idade da mãe. Mãe tem 40.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Escrita"],
            linhas: [
              { rotulo: "1", valores: ["x =", "idade da Ana"] },
              { rotulo: "2", valores: ["equação", "x + 3 = 40"] },
              { rotulo: "3", valores: ["resolve", "x = 37"] },
            ],
          },
          destaque: "Ana tem 37 (?). Verifica se faz sentido. Aqui não faz — problema mal formulado; sempre confira o enunciado.",
        },
      },
      {
        texto: "Passo 3: Resolva e INTERPRETE.",
        exemploReal: {
          contexto: "Ana e Bruno têm juntos 30 anos. Ana tem o dobro de Bruno.",
          visualMat: {
            tipo: "tabela",
            cabecalhos: ["Passo", "Escrita"],
            linhas: [
              { rotulo: "1", valores: ["x =", "Bruno"] },
              { rotulo: "2", valores: ["Ana", "2x"] },
              { rotulo: "3", valores: ["equação", "x + 2x = 30"] },
              { rotulo: "4", valores: ["resolve", "x = 10"] },
              { rotulo: "5", valores: ["interpreta", "Bruno=10, Ana=20"] },
            ],
          },
          destaque: "SEMPRE volte pro problema.",
        },
      },
    ],
  },
  momento05_modelagem: {
    enunciado: "O triplo de um número menos 2 é 19. Ache o número.",
    resposta: "7",
    visualMat: {
      tipo: "tabela",
      cabecalhos: ["Passo", "Escrita"],
      linhas: [
        { rotulo: "1", valores: ["equação", "3x − 2 = 19"] },
        { rotulo: "2", valores: ["+2", "3x = 21"] },
        { rotulo: "3", valores: ["÷3", "x = 7"] },
      ],
    },
    passos: ["3x − 2 = 19.", "3x = 21.", "x = 7."],
  },
  momento06_praticaGuiada: {
    enunciado: "O dobro de um número mais 4 é 20.",
    dica: "2x + 4 = 20.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "x =",
      opcoes: [{ nome: "8" }, { nome: "12" }, { nome: "10" }],
      respostaCerta: "8",
      feedbackAcerto: "🎯",
      feedbackErro: "2x = 16.",
    },
  },
  momento07_praticaIndependente: {
    enunciado: "A soma de 3 números consecutivos é 30. Qual é o menor?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "menor =",
      opcoes: [{ nome: "9" }, { nome: "10" }, { nome: "11" }],
      respostaCerta: "9",
      feedbackAcerto: "🎯 x + (x+1) + (x+2) = 30 → 3x+3=30 → x=9.",
      feedbackErro: "Consecutivos: x, x+1, x+2.",
    },
  },
  momento08_aplicacao: {
    contexto: "Um livro custa R$ 15 a mais que uma caneta. Juntos custam R$ 25.",
    problema: "Quanto custa a caneta?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha:",
      opcoes: [{ nome: "R$ 5" }, { nome: "R$ 10" }, { nome: "R$ 15" }],
      respostaCerta: "R$ 5",
      feedbackAcerto: "🎯 x + (x+15) = 25.",
      feedbackErro: "Monte com x = caneta.",
    },
  },
  momento09_revisao: {
    pontos: ["Defina x claramente.", "Traduza cada frase.", "Volte ao problema."],
  },
  momento10_avaliacao: {
    perguntas: [
      { pergunta: "Dobro de x é 12. x=", opcoes: ["6", "10", "24"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "2x=12." },
      { pergunta: "x + 4 = 10. x=", opcoes: ["6", "14", "4"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "−4." },
      { pergunta: "Metade + 3 = 10. x=", opcoes: ["14", "7", "20"], correta: 0, feedbackAcerto: "🎉", feedbackErro: "x/2 = 7 → x = 14." },
    ],
  },
  momento11_missaoFamilia: {
    titulo: "Problema em casa",
    materiais: ["Papel"],
    passos: ["Crie 2 problemas de idades ou dinheiro.", "Resolva com equação."],
    registro: "📸 Foto.",
  },
  recompensa: { xp: 170, moedas: 85 },
};

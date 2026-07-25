import type { AulaV4 } from "../../types";

/**
 * Aula 8 — "Sequências Numéricas (o Pulo)"
 * Curso: Matemática 3º Ano · Unidade 1
 *
 * Foco: descobrir o "pulo" fixo entre termos consecutivos e prever
 * os próximos termos. Pulos de 1, 2, 5, 10 e 100.
 * BNCC: EF03MA03.
 */
export const aula08_sequenciasNumericas: AulaV4 = {
  slug: "08-sequencias-numericas",
  titulo: "O Pulo dos Números",
  iconeTrilha: "🦘",
  bncc: ["EF03MA03"],
  duracaoMin: 20,
  metodologias: ["skemp", "vergnaud"],

  momento01_motivacao: {
    titulo: "Números que PULAM em ritmo",
    historia:
      "A Prefeita mostrou uma trilha numerada: 10, 20, 30, 40, ... 'Qual vem depois?' Você olhou e viu: os números SEMPRE pulam de 10 em 10. Toda sequência tem um pulo escondido — hoje aprendemos a caçar esse pulo.",
  },

  momento02_exploracao: {
    instrucao: "Olhe a sequência: 5, 10, 15, 20, ... Qual é o pulo?",
    cenas: [
      { tipo: "texto", texto: "De 5 pra 10 → pulou 5." },
      { tipo: "texto", texto: "De 10 pra 15 → pulou 5.", destaque: true },
      { tipo: "texto", texto: "Sempre 5! Próximo termo: 25." },
    ],
  },

  momento03_descoberta: {
    perguntaGuia: "Como achar o PULO de qualquer sequência?",
    pista: "Subtraia o número da FRENTE menos o de TRÁS. Isso é o pulo.",
    revelacao:
      "PULO = 2º termo − 1º termo. Se todos os pulos forem iguais, você achou o padrão. Depois é só SOMAR o pulo pra prever o próximo termo.",
  },

  momento04_explicacao: {
    titulo: "Pulos que usamos muito",
    etapas: [
      {
        texto:
          "Pulo de 1 em 1: 47, 48, 49, 50... A contagem normal.",
        exemploReal: {
          contexto:
            "Você conta os degraus da escada da Prefeitura: 1, 2, 3, 4, 5. Pulo constante de 1.",
          destaque: "Pulo = 1. Só somo 1 pra achar o próximo.",
        },
      },
      {
        texto:
          "Pulo de 10 em 10: 120, 130, 140, 150... Só a DEZENA muda.",
        exemploReal: {
          contexto:
            "Os ônibus da linha passam a cada 10 minutos: 8h00, 8h10, 8h20, 8h30. Próximo: 8h40.",
          casasValor: {
            numero: 130,
            extenso: "cento e trinta",
            mostrarDecomposicao: true,
          },
          destaque: "Pulo = 10. A unidade fica igual; só a dezena avança.",
        },
      },
      {
        texto:
          "Pulo de 100 em 100: 250, 350, 450, 550... Só a CENTENA muda.",
        exemploReal: {
          contexto:
            "A biblioteca compra pacotes de 100 livros. Estoque: 200, 300, 400, 500. Próximo pacote: 600.",
          casasValor: {
            numero: 500,
            extenso: "quinhentos",
            mostrarDecomposicao: true,
          },
          destaque: "Pulo = 100. Só a centena aumenta.",
        },
      },
      {
        texto:
          "Pulos menores pra treinar: de 2 em 2 (pares/ímpares) e de 5 em 5 (contagem das mãos).",
        exemploReal: {
          contexto:
            "Contar de 2 em 2 os pares de meias na gaveta: 2, 4, 6, 8, 10. Pulo = 2.",
          destaque: "De 5 em 5: 5, 10, 15, 20, 25. Pulo = 5.",
        },
      },
      {
        texto:
          "Pra achar o pulo de uma sequência dada, SUBTRAIA dois termos consecutivos. Depois some o pulo pra prever.",
        exemploReal: {
          contexto:
            "Sequência: 165, 170, 175, ?, ? — 170 − 165 = 5 (pulo). Somo 5 duas vezes.",
          contaPassoAPasso: {
            operacao: "soma",
            operandos: [175, 5],
            resultado: 180,
            passos: [
              { coluna: "U", fala: "5 + 5 = 10. Escrevo 0, vai 1.", digito: 0, vaiUm: 1 },
              { coluna: "D", fala: "7 + 0 + 1 = 8.", digito: 8 },
              { coluna: "C", fala: "1 + 0 = 1.", digito: 1 },
            ],
          },
          destaque: "175 + 5 = 180. Próximo termo: 180.",
        },
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha descobre o pulo de 30, 40, 50, 60, ?, ?",
    passos: [
      "40 − 30 = 10. Pulo é 10.",
      "50 − 40 = 10. Confirmado.",
      "60 − 50 = 10. Confirmado.",
      "Próximo: 60 + 10 = 70.",
      "Depois: 70 + 10 = 80. 🦘",
    ],
    resposta: "70, 80",
    casasValor: {
      numero: 70,
      mostrarDecomposicao: true,
      extenso: "setenta",
    },
  },

  momento06_praticaGuiada: {
    enunciado: "Juntos! Qual é o próximo termo? 200, 300, 400, ...",
    dica: "Pulo = 300 − 200 = 100.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo termo:",
      opcoes: [{ nome: "401" }, { nome: "410" }, { nome: "500" }],
      respostaCerta: "500",
      feedbackAcerto: "🎉 Pulo 100. 400 + 100 = 500.",
      feedbackErro: "Pulo é de 100 em 100. 400 + 100 = 500.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Sua vez! Qual o próximo termo desta sequência: 8, 10, 12, 14, ?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Próximo termo:",
      opcoes: [{ nome: "15" }, { nome: "16" }, { nome: "20" }],
      respostaCerta: "16",
      feedbackAcerto: "🎯 Pulo 2 (pares). 14 + 2 = 16.",
      feedbackErro: "10 − 8 = 2. Pulo é 2 (números pares). 14 + 2 = 16.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "A Prefeita numera as barracas do mercado: 105, 115, 125, 135, ... Quer saber o número da 5ª barraca.",
    problema: "Descubra o pulo e diga o número da 5ª barraca.",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "5ª barraca:",
      opcoes: [{ nome: "140" }, { nome: "145" }, { nome: "150" }],
      respostaCerta: "145",
      feedbackAcerto: "🎯 Isso! Pulo = 10 (115 − 105). 135 + 10 = 145.",
      feedbackErro: "Pulo é 10 (só muda a dezena). 135 + 10 = 145.",
    },
  },

  momento09_revisao: {
    pontos: [
      "SEQUÊNCIA = fila de números com um PULO fixo.",
      "PULO = próximo termo − termo anterior.",
      "Somando o pulo ao último termo, prevejo o próximo.",
      "Pulos comuns: 1, 2, 5, 10, 100.",
    ],
    miniDesafio: {
      tipo: "escolhaVisual",
      pergunta: "Sequência 165, 170, 175, ... próximo termo?",
      opcoes: [{ nome: "176" }, { nome: "180" }, { nome: "185" }],
      respostaCerta: "180",
      feedbackAcerto: "🎉 Pulo 5. 175 + 5 = 180.",
      feedbackErro: "170 − 165 = 5. Pulo é 5. 175 + 5 = 180.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "Sequência 400, 410, 420, ... próximo?",
        opcoes: ["421", "430", "440"],
        correta: 1,
        feedbackAcerto: "🎉 Pulo 10. 420 + 10 = 430.",
        feedbackErro: "410 − 400 = 10. 420 + 10 = 430.",
      },
      {
        pergunta: "Qual o pulo de 5, 10, 15, 20, 25?",
        opcoes: ["1", "2", "5"],
        correta: 2,
        feedbackAcerto: "Isso! De 5 em 5.",
        feedbackErro: "10 − 5 = 5. Pulo = 5.",
      },
      {
        pergunta: "Sequência 200, 300, 400, ..., 700. Quantos termos tem?",
        opcoes: ["4", "5", "6"],
        correta: 2,
        feedbackAcerto: "🎉 200, 300, 400, 500, 600, 700 → 6 termos.",
        feedbackErro: "Conte na fila: 200, 300, 400, 500, 600, 700. São 6.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "Sequência da Escada",
    materiais: ["Escada da casa OU papel", "Caneta"],
    passos: [
      "Escolha um pulo: 5, 10 ou 100.",
      "Escreva os 5 primeiros termos começando de qualquer número (ex.: 45, 55, 65, ...).",
      "Peça a alguém pra adivinhar os próximos 2 termos.",
      "Depois inverta.",
    ],
    registro: "📸 Foto da sequência escrita.",
  },

  recompensa: {
    xp: 120,
    moedas: 60,
    medalha: "Explorador(a) da Cidade dos Números",
  },
};

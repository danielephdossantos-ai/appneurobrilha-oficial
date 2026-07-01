import type { Aula } from "../types";

/**
 * EF01MA02 — Matemática · 1º Ano
 * Habilidade BNCC: Contar de maneira exata ou aproximada, utilizando
 * diferentes estratégias como o pareamento e outros agrupamentos.
 */
const aula: Aula = {
  codigo: "EF01MA02",
  ano: "1º Ano",
  disciplina: "Matemática",
  titulo: "Jeitos espertos de contar",

  missao:
    "Aprender truques mágicos pra contar muito mais rápido do que contando uma coisinha por vez.",

  objetivos: [
    "Contar de maneira exata, sem pular nenhuma coisinha.",
    "Contar de maneira aproximada (chutando perto do certo).",
    "Usar pareamento (de 2 em 2) pra contar rápido.",
    "Usar agrupamento (de 5 em 5, de 10 em 10) pra contar quantidades grandes.",
  ],

  motivacao:
    "Imagina que a professora esvazia um saco de tampinhas na mesa e pergunta: “Quantas tem aí?”. Você pode contar uma por uma… ou pode ser esperto e usar um truque pra descobrir mais rápido. Bora aprender esses truques?",

  explicacao:
    "Existem dois jeitos de contar:\n\n• EXATO — você conta cada coisa, uma de cada vez: 1, 2, 3, 4…\n• APROXIMADO — você olha e chuta um número perto do certo, sem contar tudo.\n\nE existem TRUQUES que ajudam a contar rápido:\n\n1) PAREAMENTO — juntar de dois em dois. Se a gente forma 5 pares, sabemos que são 10.\n2) AGRUPAMENTO — juntar em grupinhos iguais (de 2, de 5, de 10). Aí conta os grupos: 5, 10, 15, 20.\n\nQuando tem POUCA coisa, contar exato é fácil. Quando tem MUITA, agrupar salva a vida.",

  exemploResolvido: {
    enunciado: "Tem 12 lápis espalhados na mesa. Como contar rápido usando pareamento?",
    passos: [
      "Junte os lápis de 2 em 2 formando pares.",
      "Com 12 lápis, você forma 6 pares.",
      "Conte os pares pulando de 2 em 2: 2, 4, 6, 8, 10, 12.",
    ],
    resposta: "São 12 lápis — bem mais rápido do que contar um por um!",
  },

  atividadeGuiada: {
    enunciado:
      "Tem 8 balas em cima da mesa. Como contar rápido usando PAREAMENTO?",
    resposta: "Formo 4 pares (de 2 em 2) e conto: 2, 4, 6, 8.",
    explicacao:
      "Pareamento é juntar de dois em dois. Cada par vale 2, então 4 pares valem 8.",
  },

  exercicios: [
    {
      enunciado:
        "Olhando rápido pra um pote com muitas jujubas, você diz 'tem umas 30 jujubas'. Isso é exato ou aproximado?",
      resposta: "APROXIMADO — você chutou um número perto sem contar uma por uma.",
      dica: "Se você não contou cada uma, mas deu um palpite bom, é aproximado.",
    },
    {
      enunciado:
        "Você tem 20 figurinhas. Qual o jeito mais rápido: contar uma por uma ou agrupar de 10 em 10?",
      resposta: "Agrupar de 10 em 10 — só 2 grupinhos e você já sabe: 10 e 10 são 20.",
      dica: "Quantos grupos de 10 cabem em 20?",
    },
    {
      enunciado: "Tem 15 estrelinhas. Se você agrupar de 5 em 5, quantos grupos formam?",
      resposta: "3 grupos — porque 5 + 5 + 5 = 15.",
      dica: "Conte pulando de 5 em 5: 5, 10, 15…",
    },
  ],

  desafio: {
    enunciado:
      "Você olha um saco de balas por 2 segundos e não dá pra contar todas. Que tipo de contagem você vai usar, e por quê?",
    resposta:
      "APROXIMADA — porque não deu tempo de contar exato. Você olha o tamanho do monte e chuta um número perto.",
  },

  revisao: {
    pontos: [
      "Contagem exata: contar cada coisinha.",
      "Contagem aproximada: chutar perto do certo.",
      "Pareamento: juntar de 2 em 2.",
      "Agrupamento: juntar de 5 em 5 ou 10 em 10.",
      "Quando tem muita coisa, agrupar é mais rápido.",
    ],
    dica: "Quando tiver muita coisa, não conte uma por uma — junte em grupinhos iguais e conte os grupos.",
  },

  quiz: [
    {
      pergunta: "Contar uma coisinha por vez, sem pular nenhuma, é contagem:",
      opcoes: ["Exata", "Aproximada", "Errada"],
      correta: 0,
      explicacao: "Quando você conta cada uma, o resultado é exato.",
    },
    {
      pergunta: "Você olha um cacho de uvas e diz: 'tem umas 15 uvas'. Isso é:",
      opcoes: ["Contagem exata", "Contagem aproximada", "Pareamento"],
      correta: 1,
      explicacao:
        "Você chutou um número perto sem contar uma por uma — é aproximado.",
    },
    {
      pergunta: "Juntar 10 pedrinhas de 2 em 2 e formar 5 pares é:",
      opcoes: ["Pareamento", "Agrupamento de 10", "Chute"],
      correta: 0,
      explicacao: "Parear é juntar de 2 em 2. 5 pares dão 10.",
    },
    {
      pergunta: "Qual é o jeito mais rápido de contar 30 tampinhas?",
      opcoes: [
        "Contar uma por uma",
        "Agrupar de 10 em 10 e ter 3 grupinhos",
        "Fechar os olhos e chutar",
      ],
      correta: 1,
      explicacao:
        "Com 3 grupos de 10 você já sabe: 10, 20, 30. Muito mais rápido!",
    },
  ],

  conclusao:
    "Agora você tem superpoderes de contagem! Da próxima vez que ver muita coisa junta, lembra: parear de 2, agrupar de 5, agrupar de 10 — escolha o truque e conte rápido.",

  proximaHabilidade: {
    codigo: "EF01MA03",
    titulo: "Comparar quantidades e descobrir qual é maior",
  },
};

export default aula;

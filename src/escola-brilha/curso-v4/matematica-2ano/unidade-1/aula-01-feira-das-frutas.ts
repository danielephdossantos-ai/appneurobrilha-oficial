import type { AulaV4 } from "../../types";
import maca from "@/assets/neuro-treino/objetos/maca.png";
import banana from "@/assets/neuro-treino/objetos/banana.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";

/**
 * Aula 1 — "A Feira das Frutas"
 * Curso: Matemática 2º Ano · Unidade 1: A Feira dos Números
 *
 * Foco pedagógico: estimar e contar coleções (até ~30 unidades),
 * descobrindo que agrupar torna a contagem mais eficiente.
 *
 * BNCC costurada: EF02MA02 (estimar/registrar contagens).
 * Prepara Aula 2 (comparar) e Aula 3 (agrupar de 10 em 10 → dezena).
 */
export const aula01_feiraDasFrutas: AulaV4 = {
  slug: "01-feira-das-frutas",
  titulo: "A Feira das Frutas",
  iconeTrilha: "🍎",
  bncc: ["EF02MA02"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha chega na Feira da Vila!",
    historia:
      "Brilha chegou na feira da Vila dos Números e encontrou a Dona Coruja bem preocupada. Um monte de maçãs caiu da barraca e ela precisa saber quantas são pra vender! 'Brilha, você pode me ajudar a contar?' Vamos ajudar?",
    imagemUrl: brilha,
  },

  momento02_exploracao: {
    instrucao:
      "Antes de contar, olhe bem para as maçãs. Toque em cada uma que você vê:",
    cenas: [
      { tipo: "texto", texto: "🍎 Olha só quantas maçãs caíram!" },
      {
        tipo: "texto",
        texto: "E aí, seu chute: quantas parecem?",
        destaque: true,
      },
    ],
    interacao: {
      tipo: "tapContar",
      imagemUrl: maca,
      quantidade: 12,
      itemPlural: "maçãs",
      pergunta: "Toque em cada maçã e conte junto:",
    },
  },

  momento03_descoberta: {
    perguntaGuia: "Você percebeu algo enquanto contava uma a uma?",
    pista:
      "Quando são muitas, é fácil se perder e contar a mesma duas vezes... será que tem um jeito melhor?",
    revelacao:
      "Se agruparmos as maçãs em pilhinhas de 5 ou de 10, fica muito mais fácil e rápido de contar! Grupos ajudam nossos olhos.",
  },

  momento04_explicacao: {
    titulo: "Três jeitos de contar",
    etapas: [
      {
        texto: "Primeiro: dê um CHUTE (estimativa). Só de olhar, quantas você acha que tem?",
        exemplo: "Parece que tem umas 10... ou 15?",
      },
      {
        texto: "Depois: conte UMA A UMA, tocando em cada uma. Serve pra grupos pequenos.",
        exemplo: "1, 2, 3, 4, 5... funciona bem até uns 10.",
      },
      {
        texto: "Melhor ainda: AGRUPE de 5 em 5 ou de 10 em 10. Aí conta rapidinho!",
        exemplo: "5, 10, 15, 20... zááás, contou 20 sem se perder.",
        imagemUrl: maca,
      },
    ],
  },

  momento05_modelagem: {
    enunciado: "Brilha vai contar 23 maçãs pensando em voz alta:",
    passos: [
      "Primeiro eu chuto... parece que tem mais que 20. Vou anotar meu chute: 25.",
      "Agora vou fazer pilhinhas de 10. Uma pilha... duas pilhas...",
      "Sobraram 3 maçãs soltas.",
      "Então: 10 + 10 + 3. Isso dá 23 maçãs!",
      "Meu chute foi 25 e o certo é 23. Cheguei perto! 🎯",
    ],
    resposta: "23 maçãs",
    visualUrl: maca,
  },

  momento06_praticaGuiada: {
    enunciado: "Agora vamos contar juntos! Conte estas maçãs:",
    dica: "Faça grupinhos de 5 primeiro. Depois some: 5, 10, 15...",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: maca, quantidade: 15, rotulo: "Maçãs" }],
      pergunta: "Quantas maçãs você contou?",
      opcoes: ["13", "15", "18"],
      correta: 1,
      feedbackAcerto:
        "🎉 Muito bem! Você contou 15 maçãs. Se fizermos 3 grupinhos de 5, dá 15 direitinho: 5, 10, 15!",
      feedbackErro:
        "Quase! Vamos contar de novo em grupinhos de 5. Um grupo (5), dois grupos (10), três grupos (15). São 15 maçãs.",
    },
  },

  momento07_praticaIndependente: {
    enunciado: "Agora é com você! Sem dica dessa vez. Conte as bananas:",
    interacao: {
      tipo: "contarQuiz",
      grupos: [{ imagemUrl: banana, quantidade: 27, rotulo: "Bananas" }],
      pergunta: "Quantas bananas tem no cacho?",
      opcoes: ["24", "27", "30"],
      correta: 1,
      feedbackAcerto:
        "Boa! 27 bananas. Você pode ter feito 2 grupos de 10 (dá 20) e mais 7 soltas: 20 + 7 = 27.",
      feedbackErro:
        "Não foi dessa vez. Tente agrupar de 10 em 10: você acha 2 grupos de 10 (20 bananas) e ainda sobram 7. Total: 27.",
    },
  },

  momento08_aplicacao: {
    contexto:
      "Sua mãe pediu para você conferir se o feirante entregou 20 maçãs na sacola. Você abre a sacola e vê um monte de maçãs misturadas.",
    problema:
      "Qual é o jeito mais RÁPIDO e SEGURO de conferir se são 20 maçãs mesmo?",
    interacao: {
      tipo: "escolhaVisual",
      pergunta: "Escolha o melhor jeito:",
      opcoes: [
        { nome: "Chutar só de olhar", imagemUrl: coruja },
        { nome: "Fazer 2 pilhas de 10 maçãs", imagemUrl: maca },
        { nome: "Contar sem parar, bem rápido", imagemUrl: banana },
      ],
      respostaCerta: "Fazer 2 pilhas de 10 maçãs",
      feedbackAcerto:
        "🎯 Isso! Duas pilhas de 10 = 20 maçãs, e você tem certeza sem se perder na contagem. É o jeito dos matemáticos da vila!",
      feedbackErro:
        "Chutar pode errar; contar rápido a gente se perde. O jeito mais seguro é fazer PILHAS iguais — 2 pilhas de 10 dá 20 na certa.",
    },
  },

  momento09_revisao: {
    pontos: [
      "Contar UMA A UMA funciona bem só quando são pouquinhas.",
      "CHUTAR primeiro ajuda a saber se a contagem faz sentido.",
      "AGRUPAR de 5 em 5 ou de 10 em 10 é o jeito mais rápido e seguro.",
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta:
          "Brilha viu 3 grupos de 10 maçãs e mais 4 soltas. Quantas maçãs no total?",
        opcoes: ["24", "30", "34"],
        correta: 2,
        feedbackAcerto:
          "🎉 Perfeito! 10 + 10 + 10 = 30, mais 4 soltas = 34 maçãs.",
        feedbackErro:
          "Vamos juntos: 3 pilhas de 10 dão 30. Mais 4 maçãs soltas: 30 + 4 = 34.",
      },
      {
        pergunta: "Qual é o MELHOR jeito de contar 50 laranjas rapidinho?",
        opcoes: [
          "Chutar um número",
          "Fazer 5 pilhas de 10",
          "Contar duas vezes bem devagar",
        ],
        correta: 1,
        feedbackAcerto:
          "Isso! 5 pilhas de 10 dão 50 e você não se perde. Os matemáticos da vila fariam assim!",
        feedbackErro:
          "Chutar não dá certeza. Contar devagar cansa. O jeito bom é PILHAS: 5 pilhas de 10 = 50.",
      },
      {
        pergunta:
          "Antes de contar de verdade, o que a gente faz para ter uma ideia do quanto tem?",
        opcoes: ["Chuta (estima)", "Fecha os olhos", "Pergunta pro coleguinha"],
        correta: 0,
        feedbackAcerto:
          "Boa! CHUTAR (estimar) ajuda a gente a saber se a contagem final faz sentido.",
        feedbackErro:
          "A gente chuta primeiro! O chute é uma ESTIMATIVA e serve pra conferir se o resultado final ficou parecido.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "A Contagem da Casa",
    materiais: [
      "Um monte de objetos pequenos: feijões, botões, tampinhas ou brinquedos pequenos.",
      "Uma folha para anotar.",
    ],
    passos: [
      "Peça a alguém da família para espalhar entre 20 e 40 objetos na mesa.",
      "Primeiro CHUTE quantos são e escreva seu chute na folha.",
      "Agora AGRUPE de 10 em 10, formando pilinhas iguais.",
      "Some as pilhas de 10 e as sobras. Escreva o total.",
      "Compare: seu chute chegou perto do total?",
    ],
    registro:
      "Tire uma foto das pilhas prontas ou desenhe elas na folha, junto do chute e do total.",
  },

  recompensa: {
    xp: 100,
    moedas: 50,
    medalha: "Contador da Feira",
  },
};

import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as sapo } from "@/assets/neuro-treino/objetos/sapo.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";

/**
 * Unidade 10 · Aula 3 — Eu Leio o Texto Inteiro
 * -------------------------------------------------------------
 * Fase 9. Fechamento: PARA, ELE, ELA, DO, DA. Aqui as teimosas
 * das três aulas se juntam num texto único e a criança lê o
 * parágrafo inteiro sozinha, com releitura cronometrada.
 *
 * BNCC: EF01LP02 · EF01LP04 · EF01LP12 · EF01LP16
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-eu-leio-o-texto-inteiro",
  titulo: "Eu Leio o Texto Inteiro",
  iconeTrilha: "📖",
  bncc: ["EF01LP02", "EF01LP04", "EF01LP12", "EF01LP16"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha lê um texto inteiro sem travar",
    historia:
      "Brilha respirou fundo e leu o texto do começo ao fim. Não travou nenhuma vez! — Como você conseguiu? — perguntou Nina. — Eu já conheço as teimosas de olho — disse Brilha. — Aí sobra cabeça pra entender a história.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas. O que você vai fazer hoje?",
    bloco: {
      titulo: "Eu Leio o Texto Inteiro",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: livro, nome: "Um texto grandinho" },
        { imagemUrl: estrela, nome: "Uma criança lendo sozinha" },
      ],
      pergunta: "O desafio de hoje é...",
      hipoteses: [
        { texto: "Ler um texto inteiro sozinho.", imagemUrl: livro },
        { texto: "Pintar um desenho.", imagemUrl: bola },
        { texto: "Contar até cem.", imagemUrl: estrela },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! Hoje você lê o texto todo.",
      feedbackErro: "As pistas mostram um texto e alguém lendo: hoje é dia de ler sozinho.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas teimosas importantes:",
    cards: [
      {
        palavra: "ele / ela",
        explicacao:
          "São palavrinhas que a gente usa no lugar do nome, pra não repetir toda hora.",
        exemplo: "O pato nadou. ELE nadou rápido.",
        imagemUrl: pato,
      },
      {
        palavra: "para",
        explicacao: "Mostra pra quem uma coisa é ou pra onde alguém vai.",
        exemplo: "Este livro é PARA você.",
        imagemUrl: livro,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Último treino de relance",
    instrucao:
      "As últimas teimosas vão piscar. Depois delas, você lê o texto inteiro.",
    blocos: [
      {
        tipo: "palavraRelampago",
        segundos: 2,
        palavras: [
          { palavra: "para", frase: "É PARA você.", distratores: ["pra", "parra"] },
          { palavra: "ele", frase: "ELE correu.", distratores: ["ela", "elê"] },
          { palavra: "ela", frase: "ELA pulou.", distratores: ["ele", "elá"] },
          { palavra: "do", frase: "A casa DO pato.", distratores: ["da", "od"] },
          { palavra: "da", frase: "A pena DA ave.", distratores: ["do", "ad"] },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia comigo uma vez. Depois você lê sozinho.",
    leitura: {
      titulo: "O Presente do Sapo",
      imagemUrl: sapo,
      legendaImagem: "O sapo levou um presente PARA a rã",
      destacar: ["ELE", "ELA", "PARA", "DO", "DA"],
      paragrafos: [
        "O sapo achou uma bola. ELE pegou a bola DO rio.",
        "ELE levou a bola PARA a rã. ELA gostou muito DA bola.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quem achou a bola?",
        opcoes: ["O sapo", "A rã", "O pato"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O sapo achou.",
        feedbackErro: "Leia a primeira frase: quem achou a bola?",
        ondeEstaNoTexto: "O sapo achou uma bola.",
      },
      {
        pergunta: "No texto, a palavra ELA fala de quem?",
        opcoes: ["Da rã", "Do sapo", "Da bola"],
        correta: 0,
        feedbackAcerto: "🎉 Muito bem! ELA está no lugar de 'a rã'.",
        feedbackErro: "Veja quem aparece logo antes de ELA: 'levou a bola PARA a rã. ELA gostou'.",
        ondeEstaNoTexto: "ELE levou a bola PARA a rã. ELA gostou muito DA bola.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar na história.",
    perguntas: [
      {
        pergunta: "Quantos personagens tem a história?",
        opcoes: ["Dois: o sapo e a rã", "Um só", "Quatro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Conte quem age no texto: o sapo e a rã.",
      },
      {
        pergunta: "De onde veio a bola?",
        opcoes: ["Do rio", "Da escola", "Da feira"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! 'a bola DO rio'.",
        feedbackErro: "Procure a palavra DO no texto e veja o que vem depois dela.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a história na ordem certa.",
    bloco: {
      instrucao: "Do começo ao fim.",
      itens: [
        { id: "p1", texto: "O sapo achou uma bola.", imagemUrl: sapo },
        { id: "p2", texto: "ELE levou a bola PARA a rã.", imagemUrl: bola },
        { id: "p3", texto: "ELA gostou muito DA bola.", imagemUrl: estrela },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Começo, meio e fim.",
      feedbackErro: "Primeiro achar, depois levar, depois gostar. É essa a ordem.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora o texto é todo seu. Leia sozinho, do começo ao fim.",
    leitura: {
      titulo: "O Pato Ajudou",
      imagemUrl: pato,
      destacar: ["ELE", "PARA", "DO", "DA"],
      paragrafos: [
        "O pato viu a rã. ELE nadou PARA o lado DA rã.",
        "ELE deu a folha DO lago PARA ela. A rã subiu na folha.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que o pato deu para a rã?",
        opcoes: ["A folha do lago", "Uma bola", "Um livro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Releia a segunda parte: 'deu a folha DO lago'.",
        ondeEstaNoTexto: "ELE deu a folha DO lago PARA ela.",
      },
      {
        pergunta: "No texto, ELE é quem?",
        opcoes: ["O pato", "A rã", "O lago"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! ELE está no lugar de 'o pato'.",
        feedbackErro: "Quem aparece antes de ELE? 'O pato viu a rã. ELE nadou...'.",
        ondeEstaNoTexto: "O pato viu a rã. ELE nadou PARA o lado DA rã.",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "Teimosas de hoje: PARA, ELE, ELA, DO, DA.",
      "ELE e ELA entram no lugar do nome do personagem.",
      "Quando as teimosas já são conhecidas, sobra atenção pra ENTENDER o texto.",
    ],
    miniDesafio: {
      pergunta: "'O sapo pulou. ___ caiu na água.' Qual completa?",
      opcoes: ["ELE", "ELA", "PARA"],
      correta: 0,
      feedbackAcerto: "🎉 Isso! O sapo é ELE.",
      feedbackErro: "O personagem é 'o sapo'. No lugar dele usamos ELE.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 'A rã pulou. ___ caiu na água.' Qual completa?",
        opcoes: ["ELA", "ELE", "DO", "PARA"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! A rã é ELA.",
        feedbackErro: "'A rã' é feminino, então usamos ELA no lugar do nome.",
      },
      {
        pergunta: "2/5 — 'Este livro é ___ você.' Qual completa?",
        opcoes: ["PARA", "DO", "DA", "ELE"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "A frase diz pra QUEM o livro é. Essa palavra é PARA.",
      },
      {
        pergunta: "3/5 — 'A casa ___ pato é no lago.' Qual completa?",
        opcoes: ["DO", "DA", "PARA", "ELA"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! DO pato.",
        feedbackErro: "'Pato' é masculino: fica DO pato. DA seria pra palavra feminina.",
      },
      {
        pergunta: "4/5 — Pra que servem ELE e ELA num texto?",
        opcoes: [
          "Para não repetir o nome do personagem toda hora",
          "Para deixar o texto mais comprido",
          "Para começar toda frase",
          "Para marcar o fim do texto",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Elas substituem o nome, pra não ficar 'o sapo, o sapo, o sapo' o tempo todo.",
      },
      {
        pergunta: "5/5 — Por que conhecer as teimosas ajuda a ENTENDER a história?",
        opcoes: [
          "Porque você não trava e sobra atenção para o sentido",
          "Porque o texto fica mais curto",
          "Porque as letras mudam de cor",
          "Porque não precisa mais ler",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Exatamente isso!",
        feedbackErro: "O texto continua igual. O que muda é você: sem travar, dá pra pensar no sentido.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 A Leitura da Noite",
    materiais: ["Um livrinho de histórias"],
    passos: [
      "1) O adulto lê uma página em voz alta.",
      "2) A criança lê a mesma página depois, no ritmo dela.",
      "3) Juntos, procurem 3 teimosas na página: PARA, ELE, ELA, DO, DA.",
      "4) A criança conta com as próprias palavras o que aconteceu na página.",
    ],
    registro: "📸 Foto da página lida ou um áudio da criança recontando.",
  },

  momento_fluencia: {
    titulo: "Ler de novo, mais solto",
    instrucao:
      "Esse é o texto de fechamento da unidade. Leia três vezes: comigo, sozinho e mais uma. Você vai ver a diferença.",
    texto: [
      "O SAPO ACHOU UMA BOLA.",
      "ELE LEVOU A BOLA PARA A RÃ.",
      "ELA GOSTOU MUITO DA BOLA.",
    ],
    metaSegundos: 22,
  },

  recompensa: {
    xp: 140,
    moedas: 85,
    medalha: "📖 Leitor de Texto Inteiro",
  },
};

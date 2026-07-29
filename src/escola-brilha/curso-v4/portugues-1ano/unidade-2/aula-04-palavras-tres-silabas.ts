import type { AulaPortuguesV4 } from "../../types";
import { url as esquiloBrilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as robo } from "@/assets/neuro-treino/objetos/robo.png.asset.json";
import { url as bonecaPano } from "@/assets/neuro-treino/objetos/boneca-pano.png.asset.json";
import { url as banana } from "@/assets/neuro-treino/objetos/banana.png.asset.json";
import { url as abelha } from "@/assets/neuro-treino/objetos/abelha.png.asset.json";
import { url as bicicletaModerna } from "@/assets/neuro-treino/objetos/bicicleta-moderna.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";

/**
 * Aula 4 — Palavras Compridas
 * -------------------------------------------------------------
 * Fecha a Unidade 2 (A Fábrica de Sílabas). Palavras com três
 * sílabas: BO-NE-CA, SA-PA-TO, BA-NA-NA, entre outras.
 *
 * Foco pedagógico:
 *  - Reconhecer e ler palavras de três sílabas.
 *  - Montar palavras compridas juntando três pedacinhos.
 *
 * BNCC: EF01LP05, EF01LP06, EF01LP07
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-palavras-tres-silabas",
  titulo: "Palavras Compridas",
  iconeTrilha: "🏆",
  bncc: ["EF01LP05", "EF01LP06", "EF01LP07"],
  duracaoMin: 15,

  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: esquiloBrilha,
      falaMascote: "Oi! Hoje é o desafio final: palavras com TRÊS pedacinhos! Toca pra começar!",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma comigo: BA-NA-NA. Quantas palmas?",
      palavra: "BA-NA-NA",
      silabas: 3,
      imagemUrl: banana,
      elogio: "Três palmas! BA-NA-NA tem três pedacinhos.",
    },
    {
      tipo: "juntarSilabas",
      imagemUrl: banana,
      silabas: ["BA", "NA", "NA"],
      palavra: "BANANA",
      instrucaoAudio: "Toca em BA, depois NA, depois NA de novo.",
      elogio: "Isso! BA + NA + NA faz BANANA porque juntamos os três pedacinhos.",
    },
    {
      tipo: "juntarSilabas",
      imagemUrl: abelha,
      silabas: ["A", "BE", "LHA"],
      palavra: "ABELHA",
      instrucaoAudio: "Toca em A, depois BE, depois LHA.",
      elogio: "Muito bem! A + BE + LHA faz ABELHA.",
    },
    {
      tipo: "juntarSilabas",
      imagemUrl: bicicletaModerna,
      silabas: ["BI", "CI", "CLE"],
      palavra: "BICI",
      instrucaoAudio: "Toca nos pedacinhos na ordem, um de cada vez.",
      elogio: "Isso! Você juntou os pedacinhos de bicicleta.",
    },
    {
      tipo: "leituraSilabica",
      imagemUrl: banana,
      palavra: "BANANA",
      silabas: ["BA", "NA", "NA"],
      instrucaoAudio: "Vamos ouvir a palavra devagar e depois inteira.",
      elogio: "Você leu BANANA! BA-NA-NA junto forma BANANA.",
    },
    {
      tipo: "leituraSilabica",
      imagemUrl: abelha,
      palavra: "ABELHA",
      silabas: ["A", "BE", "LHA"],
      instrucaoAudio: "Agora ouça ABELHA devagar e depois inteira.",
      elogio: "Isso! A-BE-LHA junto forma ABELHA.",
    },
    {
      tipo: "elkoninBoxes",
      imagemUrl: banana,
      palavra: "BANANA",
      fonemas: ["B", "A", "N", "A", "N", "A"],
      instrucaoAudio: "Toca em cada caixinha enquanto eu falo o som.",
      elogio: "Você tocou em todos os sons de BANANA!",
    },
    {
      tipo: "leituraFrase",
      imagemUrl: abelha,
      frase: "A ABELHA FAZ MEL.",
      instrucaoAudio: "Vamos ler essa frase juntos, bem devagar.",
      elogio: "Você leu a frase inteira!",
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "O que a abelha faz, na frase que você leu?",
      opcoes: [
        { texto: "Ela faz mel.", correta: true },
        { texto: "Ela nada no lago.", correta: false },
        { texto: "Ela dorme o dia todo.", correta: false },
      ],
      feedbackAcerto: "Isso! A frase diz 'A abelha faz mel'.",
      feedbackErro: "Escuta de novo a frase: 'A abelha faz mel'.",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Caçada às palavras compridas",
      convite: "Procurem juntos 3 objetos da casa com nomes de três sílabas.",
      dicaAdulto: "Ajude a bater palma em cada pedacinho da palavra.",
    },
    {
      tipo: "celebracao",
      medalha: "Mestre das Sílabas",
      mascoteUrl: esquiloBrilha,
      falaFinal: "Parabéns! Você aprendeu a ler palavras compridas de três pedacinhos!",
    },
  ],

  momento01_motivacao: {
    titulo: "O Desafio das Palavras Compridas",
    historia:
      "O robô da fábrica trouxe uma caixa cheia de TRÊS pedacinhos pra cada palavra! — Essas palavras são mais compridas, têm três sílabas! Você topa o desafio final da fábrica? — perguntou Aurora, com um brilho no olhar.",
    imagemUrl: robo,
  },

  momento02_previsao: {
    instrucao: "Olhe a capa: uma boneca e três caixinhas de sílaba. Do que essa história vai falar?",
    bloco: {
      titulo: "O Desafio das Palavras Compridas",
      capaImagemUrl: bonecaPano,
      pistas: [
        { imagemUrl: bonecaPano, nome: "Uma boneca" },
        { imagemUrl: robo, nome: "O robô com três caixinhas" },
      ],
      pergunta: "Sobre o que essa história vai falar?",
      hipoteses: [
        { texto: "Palavras formadas por três pedacinhos de som.", imagemUrl: bonecaPano },
        { texto: "Um passeio no zoológico.", imagemUrl: banana },
        { texto: "Uma receita de suco.", imagemUrl: banana },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! O título fala de 'palavras compridas' — são palavras com três pedacinhos.",
      feedbackErro: "Releia o título: 'O Desafio das Palavras Compridas'. É sobre palavras de três sílabas.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes do desafio final.",
    cards: [
      {
        palavra: "comprida",
        explicacao: "Quando a palavra tem mais pedacinhos (três sílabas ou mais), a gente diz que ela é comprida.",
        exemplo: "BONECA é uma palavra comprida: BO-NE-CA.",
        imagemUrl: bonecaPano,
      },
      {
        palavra: "desafio",
        explicacao: "É uma missão um pouquinho mais difícil, que a gente se esforça pra vencer.",
        exemplo: "Montar palavras de três sílabas é o desafio de hoje.",
        imagemUrl: robo,
      },
    ],
  },

  momento_ensinoVisual: {
    titulo: "Veja as palavras compridas se formando",
    instrucao: "Observe os três pedacinhos se juntando em cada palavra.",
    blocos: [
      {
        tipo: "fraseComPonto",
        frases: [
          { texto: "BO + NE + CA = BONECA", explicacao: "Três pedacinhos: BO, NE e CA." },
          { texto: "SA + PA + TO = SAPATO", explicacao: "Três pedacinhos: SA, PA e TO." },
          { texto: "BA + NA + NA = BANANA", explicacao: "Três pedacinhos: BA, NA e NA." },
          { texto: "A + BE + LHA = ABELHA", explicacao: "Três pedacinhos: A, BE e LHA." },
        ],
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler juntos. Aperte 🔊 se quiser ouvir.",
    leitura: {
      titulo: "O Desafio das Palavras Compridas",
      imagemUrl: bonecaPano,
      legendaImagem: "BO-NE-CA tem três pedacinhos",
      destacar: ["BO-NE-CA", "SA-PA-TO", "três sílabas"],
      paragrafos: [
        "O robô mostrou a palavra BONECA: BO-NE-CA. Ela tem três sílabas.",
        "Depois mostrou SAPATO: SA-PA-TO. Também três sílabas!",
        "Aurora bateu palma três vezes em cada palavra: uma palma pra cada pedacinho.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Quantas sílabas tem a palavra BONECA?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! 'BO-NE-CA. Ela tem três sílabas.'",
        feedbackErro: "Está na primeira frase: 'Ela tem três sílabas'.",
        ondeEstaNoTexto: "O robô mostrou a palavra BONECA: BO-NE-CA. Ela tem três sílabas.",
      },
      {
        pergunta: "Quantas sílabas tem a palavra SAPATO?",
        opcoes: ["Duas", "Três", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'SA-PA-TO. Também três sílabas!'",
        feedbackErro: "Está no segundo parágrafo: 'Também três sílabas!'",
        ondeEstaNoTexto: "Depois mostrou SAPATO: SA-PA-TO. Também três sílabas!",
      },
      {
        pergunta: "Quantas palmas Aurora bateu em cada palavra?",
        opcoes: ["Uma", "Duas", "Três"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! 'bateu palma três vezes em cada palavra'.",
        feedbackErro: "Está no último parágrafo: 'bateu palma três vezes'.",
        ondeEstaNoTexto: "Aurora bateu palma três vezes em cada palavra.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Quem mostra as palavras e onde acontece o desafio?",
    perguntas: [
      {
        pergunta: "Quem mostrou a palavra BONECA?",
        opcoes: ["O robô", "A boneca", "O sapato"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'O robô mostrou a palavra BONECA'.",
        feedbackErro: "A primeira frase já responde: quem mostrou? O robô.",
      },
      {
        pergunta: "Onde acontece o desafio das palavras compridas?",
        opcoes: ["Na fábrica de sílabas", "No zoológico", "Na praia"],
        correta: 0,
        feedbackAcerto: "🎉 Certo! O desafio é dentro da fábrica de sílabas.",
        feedbackErro: "É a mesma fábrica das aulas anteriores — a fábrica de sílabas.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque na ordem certa como o robô monta a palavra SAPATO.",
    bloco: {
      instrucao: "Do primeiro pedacinho até a palavra pronta.",
      itens: [
        { id: "p1", texto: "O robô pega o pedacinho SA.", imagemUrl: robo },
        { id: "p2", texto: "O robô pega o pedacinho PA.", imagemUrl: robo },
        { id: "p3", texto: "O robô pega o pedacinho TO e junta tudo: SAPATO!", imagemUrl: robo },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Isso! SA, depois PA, depois TO — os três juntos formam SAPATO.",
      feedbackErro: "Pense na ordem dos pedacinhos: primeiro SA, depois PA, por último TO.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda.",
    leitura: {
      titulo: "A Bicicleta da Abelha",
      imagemUrl: bicicletaModerna,
      destacar: ["BI-CI-CLE-TA", "A-BE-LHA"],
      paragrafos: [
        "A ABELHA tem três sílabas: A-BE-LHA.",
        "Já a palavra BICICLETA tem quatro sílabas: BI-CI-CLE-TA. É uma palavra ainda mais comprida!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quantas sílabas tem a palavra ABELHA?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A-BE-LHA tem TRÊS sílabas.",
        feedbackErro: "Está na primeira frase: 'A ABELHA tem três sílabas'.",
        ondeEstaNoTexto: "A ABELHA tem três sílabas: A-BE-LHA.",
      },
      {
        pergunta: "Quantas sílabas tem a palavra BICICLETA?",
        opcoes: ["Três", "Quatro", "Cinco"],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'BICICLETA tem quatro sílabas: BI-CI-CLE-TA'.",
        feedbackErro: "Está na segunda frase: 'tem quatro sílabas'.",
        ondeEstaNoTexto: "a palavra BICICLETA tem quatro sílabas: BI-CI-CLE-TA.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte as Palavras Compridas",
    instrucao: "Junte os três pedacinhos embaralhados pra formar cada palavra.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "O Desafio Final da Fábrica",
      bloco: {
        instrucao: "Toque nas sílabas na ordem certa pra formar a palavra comprida.",
        palavras: [
          { id: "w1", palavraCerta: "BONECA", silabas: ["BO", "NE", "CA"], imagemUrl: bonecaPano, frase: "A BONECA usa vestido." },
          { id: "w2", palavraCerta: "BANANA", silabas: ["BA", "NA", "NA"], imagemUrl: banana, frase: "A BANANA é amarela." },
          { id: "w3", palavraCerta: "ABELHA", silabas: ["A", "BE", "LHA"], imagemUrl: abelha, frase: "A ABELHA faz mel." },
        ],
        feedbackAcerto: "🎉 Você é o Mestre das Sílabas! Montou as palavras compridas!",
        feedbackErro: "Conte os pedacinhos: são três. Toque na ordem certa, um de cada vez.",
      },
    },
  },

  momento_laboratorio: undefined,

  momento09_revisao: {
    pontos: [
      "Palavras compridas têm três (ou mais) sílabas.",
      "BONECA (BO-NE-CA) e SAPATO (SA-PA-TO) têm três sílabas.",
      "BANANA (BA-NA-NA) e ABELHA (A-BE-LHA) também têm três sílabas.",
    ],
    miniDesafio: {
      pergunta: "Quantas sílabas tem a palavra SAPATO?",
      opcoes: ["Duas", "Três", "Quatro"],
      correta: 1,
      feedbackAcerto: "🎉 Isso! SA-PA-TO tem TRÊS sílabas.",
      feedbackErro: "Bata palma: SA (1) - PA (2) - TO (3). São três sílabas.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Quantas sílabas tem uma palavra comprida, como as de hoje?",
        opcoes: ["Uma", "Duas", "Três"],
        correta: 2,
        feedbackAcerto: "🎉 TRÊS sílabas!",
        feedbackErro: "As palavras compridas de hoje têm TRÊS sílabas.",
      },
      {
        pergunta: "2/5 — Quantas sílabas tem BONECA?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 TRÊS: BO-NE-CA.",
        feedbackErro: "BO-NE-CA tem três sílabas.",
      },
      {
        pergunta: "3/5 — Quantas sílabas tem SAPATO?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 TRÊS: SA-PA-TO.",
        feedbackErro: "SA-PA-TO tem três sílabas.",
      },
      {
        pergunta: "4/5 — Quantas sílabas tem BANANA?",
        opcoes: ["Duas", "Três", "Quatro"],
        correta: 1,
        feedbackAcerto: "🎉 TRÊS: BA-NA-NA.",
        feedbackErro: "BA-NA-NA tem três sílabas.",
      },
      {
        pergunta: "5/5 — Juntando A + BE + LHA, formamos qual palavra?",
        opcoes: ["ABELHA", "BONECA", "SAPATO"],
        correta: 0,
        feedbackAcerto: "🎉 ABELHA! Parabéns, você é o Mestre das Sílabas! 🌟🏆",
        feedbackErro: "A + BE + LHA formam a palavra ABELHA.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Caçada às palavras compridas",
    materiais: ["Papel e lápis (ou giz de cera)"],
    passos: [
      "1) Procurem juntos 3 objetos da casa com nomes de três sílabas (ex.: JANELA, CADEIRA, SORVETE).",
      "2) Falem cada palavra bem devagar, batendo uma palma por sílaba.",
      "3) Desenhem os 3 objetos encontrados.",
      "4) Contem juntos: será que encontraram alguma palavra de QUATRO sílabas também?",
    ],
    registro: "🖍️ Desenho com os objetos e o número de sílabas escrito (ou marcado com bolinhas) embaixo de cada um.",
  },

  recompensa: {
    xp: 150,
    moedas: 90,
    medalha: "Mestre das Sílabas",
  },
};

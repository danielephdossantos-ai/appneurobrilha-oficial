import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as lua } from "@/assets/neuro-treino/objetos/lua.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as bola } from "@/assets/neuro-treino/objetos/bola.png.asset.json";
import { url as casa } from "@/assets/neuro-treino/objetos/casa.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";

/**
 * Aula 2 — Parlenda e Cantiga
 * -------------------------------------------------------------
 * Foco: memorizar um texto curto de tradição oral (parlenda/cantiga)
 * e acompanhar o texto escrito enquanto se ouve/recita.
 *
 * BNCC: EF01LP10 · EF12LP18 · EF15LP16
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-parlenda",
  titulo: "Parlenda e Cantiga",
  iconeTrilha: "🎶",
  bncc: ["EF01LP10", "EF12LP18", "EF15LP16"],
  duracaoMin: 15,

  momentosJogo: [
    {
      tipo: "boasVindas",
      mascoteUrl: brilha,
      falaMascote: "Oi! Hoje eu vou te ensinar uma cantiga bem antiga, cheia de ritmo. Vamos cantar juntos?",
    },
    {
      tipo: "escutaRitmada",
      imagemUrl: lua,
      versos: [
        "Ciranda, cirandinha,",
        "vamos todos cirandar.",
        "Vamos dar a meia volta,",
        "volta e meia vamos dar.",
      ],
      legenda: "Escute a cantiga com calma.",
    },
    {
      tipo: "leituraEco",
      titulo: "Ciranda, Cirandinha",
      imagemUrl: lua,
      linhas: [
        "Ciranda, cirandinha,",
        "vamos todos cirandar.",
        "Vamos dar a meia volta,",
        "volta e meia vamos dar.",
      ],
      instrucaoAudio: "Escute cada linha e repita depois de mim.",
      elogio: "Muito bem! Você já sabe a cantiga.",
    },
    {
      tipo: "ritmoCorpo",
      instrucaoAudio: "Bate palma junto comigo: CI-RAN-DA. Quantas palmas?",
      palavra: "CI-RAN-DA",
      silabas: 3,
      imagemUrl: estrela,
      elogio: "Três palmas! Isso mesmo.",
    },
    {
      tipo: "vocabularioVisual",
      instrucaoAudio: "Toca em cada figura pra ouvir o nome dela.",
      itens: [
        { nome: "lua", imagemUrl: lua },
        { nome: "estrela", imagemUrl: estrela },
        { nome: "flor", imagemUrl: flor },
      ],
    },
    {
      tipo: "compreensaoLeitura",
      perguntaAudio: "O que a cantiga diz para fazermos todos juntos?",
      opcoes: [
        { texto: "Cirandar", correta: true },
        { texto: "Dormir", correta: false },
        { texto: "Comer", correta: false },
      ],
      feedbackAcerto: "Isso! 'Vamos todos cirandar' — fazer a roda juntos.",
      feedbackErro: "Escute de novo: 'vamos todos...' o quê?",
    },
    {
      tipo: "missaoFamilia",
      titulo: "Cantiga em Família",
      convite: "Cante a Ciranda, Cirandinha para alguém da sua família, batendo palma no ritmo.",
      dicaAdulto: "Cante junto e faça uma roda de mãos dadas, se puder!",
    },
    {
      tipo: "celebracao",
      medalha: "Cantora de Cirandas",
      mascoteUrl: brilha,
      falaFinal: "Você aprendeu a cantiga inteira! Agora é só cantar com todo mundo.",
    },
  ],

  momento01_motivacao: {
    titulo: "Brilha aprende uma cantiga com a vovó",
    historia:
      "Brilha visitou a vovó Estrela, que bateu palmas e cantou uma parlenda bem antiga, do tempo dela pequena. — Essa cantiga passa de boca em boca há muitos anos! — disse ela. Brilha adorou e quis aprender de cor pra cantar com os amigos.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Veja o título da cantiga. Do que ela pode falar?",
    bloco: {
      titulo: "Ciranda, Cirandinha",
      capaImagemUrl: lua,
      pistas: [
        { imagemUrl: lua, nome: "A lua" },
        { imagemUrl: estrela, nome: "O anel" },
      ],
      pergunta: "Sobre o que essa cantiga vai falar?",
      hipoteses: [
        { texto: "Crianças de mãos dadas cantando em roda.", imagemUrl: estrela },
        { texto: "Um dinossauro gigante.", imagemUrl: casa },
        { texto: "Uma receita de bolo.", imagemUrl: bola },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! 'Ciranda' é uma roda de crianças cantando de mãos dadas.",
      feedbackErro: "O nome 'ciranda' é o nome de uma roda de crianças que cantam juntas.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras novas antes de aprender a cantiga:",
    cards: [
      {
        palavra: "parlenda",
        explicacao: "É um textinho de tradição oral, com rima, que passa de pessoa pra pessoa há muito tempo.",
        exemplo: "'Um, dois, feijão com arroz' é uma parlenda famosa.",
        imagemUrl: livro,
      },
      {
        palavra: "ciranda",
        explicacao: "É uma roda de crianças de mãos dadas cantando e girando juntas.",
        exemplo: "Na festa, todos fizeram uma ciranda no pátio.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Vamos ler essa cantiga bem devagar, batendo palma em cada linha.",
    leitura: {
      titulo: "Ciranda, Cirandinha",
      imagemUrl: lua,
      legendaImagem: "Crianças de mãos dadas em roda",
      destacar: ["CIRANDA", "ANEL", "ROSA"],
      paragrafos: [
        "CIRANDA, cirandinha, vamos todos cirandar.",
        "Vamos dar a meia volta, volta e meia vamos dar.",
        "O ANEL que tu me deste era vidro e se quebrou.",
        "O amor que tu me tinhas era pouco e se acabou.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar.",
    perguntas: [
      {
        pergunta: "Como se chama essa cantiga?",
        opcoes: ["Ciranda, Cirandinha", "A Casa da Vovó", "O Sapo Não Lava o Pé"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! O título está bem no começo do texto.",
        feedbackErro: "O título aparece na primeira linha, repetido duas vezes.",
        ondeEstaNoTexto: "CIRANDA, cirandinha, vamos todos cirandar.",
      },
      {
        pergunta: "O que a cantiga diz que a gente deve fazer 'todos juntos'?",
        opcoes: ["Cirandar", "Dormir", "Comer"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Vamos todos cirandar' — fazer a roda juntos.",
        feedbackErro: "Releia a primeira linha: 'vamos todos ...'.",
        ondeEstaNoTexto: "vamos todos cirandar.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Nessa cantiga, quem canta e onde acontece a brincadeira?",
    perguntas: [
      {
        pergunta: "Quem canta e brinca a ciranda?",
        opcoes: ["Um passarinho sozinho", "Um grupo de crianças de mãos dadas", "Só um adulto"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Ciranda é feita em grupo, de mãos dadas.",
        feedbackErro: "Ciranda é uma roda — precisa de várias pessoas de mãos dadas.",
      },
      {
        pergunta: "Onde geralmente se brinca de ciranda?",
        opcoes: ["Dentro da geladeira", "Em roda, num espaço aberto", "Debaixo da cama"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Precisa de espaço pra formar a roda e girar.",
        feedbackErro: "Pense: pra fazer uma roda de mãos dadas, precisa de espaço.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "As linhas da cantiga se misturaram. Coloque na ordem certa.",
    bloco: {
      instrucao: "Do começo ao fim da cantiga.",
      itens: [
        { id: "p1", texto: "CIRANDA, cirandinha, vamos todos cirandar.", imagemUrl: estrela },
        { id: "p2", texto: "Vamos dar a meia volta, volta e meia vamos dar.", imagemUrl: lua },
        { id: "p3", texto: "O ANEL que tu me deste era vidro e se quebrou.", imagemUrl: sol },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Você lembrou a ordem certinha da cantiga.",
      feedbackErro: "Pense: primeiro chamamos pra cirandar, depois damos a volta, e só depois vem a parte do anel.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho essa outra parlenda bem conhecida.",
    leitura: {
      titulo: "Um, Dois, Feijão com Arroz",
      imagemUrl: bola,
      destacar: ["FEIJÃO", "ARROZ"],
      paragrafos: [
        "Um, dois, FEIJÃO com ARROZ.",
        "Três, quatro, feijão no prato.",
        "Cinco, seis, música outra vez!",
      ],
    },
    perguntas: [
      {
        pergunta: "O que rima com ARROZ nessa parlenda?",
        opcoes: ["Feijão", "Prato", "A parlenda não tem essa rima"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Nessa parlenda o número 'dois' rima com 'arroz'.",
        feedbackErro: "Reveja: 'Um, DOIS, feijão com ARROZ' — repare no final das duas palavras.",
        ondeEstaNoTexto: "Um, dois, FEIJÃO com ARROZ.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Monte a Palavra da Cantiga",
    instrucao: "Junte as sílabas para formar palavras da cantiga que você aprendeu.",
    jogo: {
      tipo: "montarPalavra",
      titulo: "Monte as palavras da parlenda",
      bloco: {
        instrucao: "Arraste as sílabas na ordem certa para formar a palavra.",
        palavras: [
          { id: "ciranda", palavraCerta: "CIRANDA", silabas: ["CI", "RAN", "DA"], imagemUrl: estrela, frase: "Ciranda, cirandinha!" },
          { id: "anel", palavraCerta: "ANEL", silabas: ["A", "NEL"], imagemUrl: sol, frase: "O anel que tu me deste." },
          { id: "roda", palavraCerta: "RODA", silabas: ["RO", "DA"], imagemUrl: lua, frase: "Todos cantam em roda." },
        ],
        feedbackAcerto: "🎉 Isso! Você montou a palavra certinha.",
        feedbackErro: "Tente ouvir de novo a sílaba e repita a cantiga pra lembrar da palavra.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PARLENDA é um textinho de tradição oral com rima.",
      "CIRANDA é uma roda de crianças de mãos dadas, cantando.",
      "A gente memoriza cantigas repetindo e acompanhando o texto escrito.",
    ],
    miniDesafio: {
      pergunta: "O que é uma parlenda?",
      opcoes: [
        "Um texto de tradição oral, com rima, passado de geração em geração",
        "Um tipo de comida",
        "Um brinquedo eletrônico",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Isso mesmo!",
      feedbackErro: "Parlenda é um textinho com rima que a gente aprende de cor e passa adiante.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Qual o nome da cantiga que aprendemos hoje?",
        opcoes: ["Ciranda, Cirandinha", "A Casa da Vovó", "Boi da Cara Preta"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O título estava logo no começo do texto: 'Ciranda, cirandinha'.",
      },
      {
        pergunta: "2/5 — Ciranda é uma brincadeira feita...",
        opcoes: ["Sozinho, em silêncio", "Em roda, de mãos dadas", "Só de noite"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Em roda e de mãos dadas.",
        feedbackErro: "Ciranda precisa de um grupo, de mãos dadas, em roda.",
      },
      {
        pergunta: "3/5 — O que é uma parlenda?",
        opcoes: ["Um texto com rima da tradição oral", "Um tipo de bolo", "Um jogo de tabuleiro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "Parlenda é um textinho com rima, de tradição oral.",
      },
      {
        pergunta: "4/5 — Na parlenda 'Um, dois, feijão com arroz', o que vem depois de 'três, quatro'?",
        opcoes: ["Feijão no prato", "Vamos dormir", "Fim da história"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! 'Três, quatro, feijão no prato.'",
        feedbackErro: "Releia a parlenda: depois de 'três, quatro' vem 'feijão no prato'.",
      },
      {
        pergunta: "5/5 — Pra memorizar uma cantiga, o que ajuda?",
        opcoes: ["Repetir e acompanhar o texto escrito", "Ler só uma vez e esquecer", "Não prestar atenção"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Repetir e acompanhar o texto ajuda a memorizar.",
        feedbackErro: "A gente memoriza repetindo várias vezes e olhando pro texto.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🏠 Cantiga em Família",
    materiais: ["Nenhum material — só cantar!"],
    passos: [
      "1) Peça pra alguém da família cantar uma cantiga ou parlenda antiga.",
      "2) Aprenda a letra repetindo algumas vezes.",
      "3) Cante junto, batendo palma no ritmo.",
      "4) Registre o nome da cantiga aprendida.",
    ],
    registro: "🗣️ Cante a cantiga inteira, de memória, para alguém da família.",
  },

  recompensa: {
    xp: 110,
    moedas: 70,
  },
};

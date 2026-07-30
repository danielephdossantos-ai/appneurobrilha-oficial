import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as balao } from "@/assets/neuro-treino/objetos/balao.png.asset.json";
import { url as feliz } from "@/assets/neuro-treino/objetos/menina.png.asset.json";
import { url as triste } from "@/assets/neuro-treino/objetos/quadro-triste.png.asset.json";
import { url as surpreso } from "@/assets/neuro-treino/objetos/quadro-surpreso.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";
import { url as bibliotecario } from "@/assets/neuro-treino/objetos/bibliotecario.png.asset.json";

/**
 * Unidade 6 · Aula 2 — O Tom da Voz do Texto
 * BNCC: EF02LP27 (efeitos de sentido: pontuação e escolha de palavras)
 */
export const aula02: AulaPortuguesV4 = {
  slug: "aula-02-tom-da-voz",
  titulo: "O Tom da Voz do Texto",
  iconeTrilha: "🎭",
  bncc: ["EF02LP27"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O livro que muda de voz",
    historia:
      "Na Academia, Brilha abre um livro estranho. As MESMAS palavras aparecem 3 vezes… mas cada vez a voz muda! Uma vez alegre. Outra triste. Outra assustada. O bibliotecário sorri: — Descubra o segredo do TOM.",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "Olha as 3 mesmas palavras com sinais diferentes.",
    bloco: {
      titulo: "'Você veio!'",
      capaImagemUrl: balao,
      pistas: [
        { imagemUrl: feliz, nome: "😀 Você veio!" },
        { imagemUrl: triste, nome: "😢 Você veio…" },
        { imagemUrl: surpreso, nome: "😲 Você veio?!" },
      ],
      recado: {
        icone: "🎭",
        rotulo: "Descobre o tom",
        estilo: "papel",
        linhas: [
          "Mesmas palavras.",
          "Sinais diferentes.",
          "Vozes diferentes!",
        ],
      },
      pergunta: "'Você veio!' com ponto de EXCLAMAÇÃO mostra qual voz?",
      hipoteses: [
        { texto: "Voz ALEGRE, animada.", imagemUrl: feliz },
        { texto: "Voz triste, chorando.", imagemUrl: triste },
        { texto: "Voz com sono.", imagemUrl: coracao },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 A exclamação (!) mostra emoção forte, animada!",
      feedbackErro:
        "O ponto de EXCLAMAÇÃO (!) dá voz ANIMADA. Reticências (…) dão voz triste.",
      dica: "Olhe de novo o TÍTULO e as imagens da capa. A previsão precisa combinar com as pistas que você vê.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do TOM.",
    cards: [
      {
        palavra: "tom",
        explicacao: "É a VOZ do texto: alegre, triste, brava, surpresa…",
        exemplo: "O tom de 'AI!' é dor. O tom de 'oi…' é tristeza.",
        imagemUrl: balao,
      },
      {
        palavra: "sinal",
        explicacao:
          "! ? … são SINAIS que mostram o tom da voz sem a gente ouvir.",
        exemplo: "'!' = animado. '?' = pergunta. '…' = pensando ou triste.",
        imagemUrl: livro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Escuta o tom com Brilha (na cabeça).",
    leitura: {
      titulo: "Três vozes da mesma frase",
      imagemUrl: brilha,
      destacar: ["!", "?", "…"],
      paragrafos: [
        "'Achei!' — voz ANIMADA de quem encontrou algo bom.",
        "'Achei?' — voz de DÚVIDA, sem certeza.",
        "'Achei…' — voz TRISTE, meio decepcionada.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Descobre o tom.",
    perguntas: [
      {
        pergunta: "'Vamos brincar!' — qual voz?",
        opcoes: ["ANIMADA", "Brava", "Com sono"],
        correta: 0,
        feedbackAcerto: "🎉 Animada!",
        feedbackErro: "'!' mostra ANIMAÇÃO.",
        dica: "Volte no texto e procure a parte que fala de 'brincar'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: mostra ANIMAÇÃO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "'Cadê o meu urso?' — qual voz?",
        opcoes: ["Voz ALEGRE", "Voz de PERGUNTA", "Voz com raiva"],
        correta: 1,
        feedbackAcerto: "🎉 Pergunta!",
        feedbackErro: "'?' mostra que está PERGUNTANDO.",
        dica: "Volte no texto e procure a parte que responde a pergunta. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: mostra que está PERGUNTANDO. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "'Sumiu…' — qual voz?",
        opcoes: ["ANIMADA", "TRISTE / pensativa", "Brava"],
        correta: 1,
        feedbackAcerto: "🎉 Triste!",
        feedbackErro: "'…' dá tom de tristeza ou pensamento.",
        dica: "Volte no texto e procure a parte que fala de 'sumiu'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: dá tom de tristeza ou pensamento. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Ligue palavra ao TOM.",
    perguntas: [
      {
        pergunta: "'AI!' é palavra de…",
        opcoes: ["Dor / susto", "Fome", "Sono"],
        correta: 0,
        feedbackAcerto: "🎉 Dor ou susto!",
        feedbackErro: "'AI!' é grito de DOR ou SUSTO.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
      {
        pergunta: "'Hummm…' é palavra de…",
        opcoes: ["PENSANDO", "Correndo", "Cantando"],
        correta: 0,
        feedbackAcerto: "🎉 Pensando!",
        feedbackErro: "'Hummm…' é a voz de quem está PENSANDO.",
        dica: "Lembre: PERSONAGEM é quem faz as ações; CENÁRIO é onde a cena acontece. Releia procurando isso.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque as vozes do MAIS ANIMADO pro MAIS TRISTE.",
    bloco: {
      instrucao: "Do animado → dúvida → triste.",
      itens: [
        { id: "t1", texto: "'Vim!' (animado)", imagemUrl: feliz },
        { id: "t2", texto: "'Vim?' (dúvida)", imagemUrl: surpreso },
        { id: "t3", texto: "'Vim…' (triste)", imagemUrl: triste },
      ],
      ordemCerta: ["t1", "t2", "t3"],
      feedbackAcerto: "🎉 Do animado ao triste!",
      feedbackErro: "'!' animado → '?' dúvida → '…' triste.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Você lê e sente o tom.",
    leitura: {
      titulo: "A carta da vovó",
      imagemUrl: coracao,
      destacar: ["!", "?", "…"],
      paragrafos: [
        "'Netinho querido!'",
        "'Você já cresceu tanto?'",
        "'Saudade de você…'",
      ],
    },
    perguntas: [
      {
        pergunta: "'Netinho querido!' — o tom da vovó é…",
        opcoes: ["Bravo", "CARINHOSO / animado", "Com sono"],
        correta: 1,
        feedbackAcerto: "🎉 Carinhoso!",
        feedbackErro: "'!' com 'querido' mostra CARINHO forte.",
        dica: "Volte no texto e procure a parte que fala de 'netinho'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: com 'querido' mostra CARINHO forte. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Netinho querido!",
      },
      {
        pergunta: "'Saudade de você…' — o tom é…",
        opcoes: ["Alegre", "SAUDADE / meio triste", "Brava"],
        correta: 1,
        feedbackAcerto: "🎉 Saudade!",
        feedbackErro: "'…' junto com 'saudade' dá tom TRISTE de quem sente falta.",
        dica: "Volte no texto e procure a parte que fala de 'saudade'. A resposta está escrita lá.",
        reensino: "Vamos entender juntos: junto com 'saudade' dá tom TRISTE de quem sente falta. Agora leia de novo e escolha com calma.",
        ondeEstaNoTexto: "Saudade de você…",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎭 Combine Sinal com Voz",
    instrucao: "Arraste cada frase pro tom certo.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🎭 Combine Sinal com Voz",
      bloco: {
        instrucao: "Cada sinal (! ? …) é um tom.",
        itens: [
          { id: "f1", texto: "'Cheguei!'", alvoId: "animado", imagemUrl: feliz },
          { id: "f2", texto: "'Cheguei?'", alvoId: "duvida", imagemUrl: surpreso },
          { id: "f3", texto: "'Cheguei…'", alvoId: "triste", imagemUrl: triste },
        ],
        alvos: [
          { id: "animado", nome: "😀 Animado", descricao: "Ponto de exclamação !" },
          { id: "duvida", nome: "🤔 Dúvida", descricao: "Ponto de interrogação ?" },
          { id: "triste", nome: "😢 Triste / pensativo", descricao: "Reticências …" },
        ],
        feedbackAcerto: "🎉 Escutou o tom de cada uma!",
        feedbackErro: "! = animado. ? = pergunta. … = triste ou pensando.",
      },
    },
  },

    // ------------------------------------------------------------
  // FLUÊNCIA · releitura do mesmo texto (Fase 4 · 2º ano)
  // ------------------------------------------------------------
  momento_fluencia: {
    titulo: "Ler três vezes: A carta da vovó",
    instrucao:
      "Agora a gente lê o MESMO trechinho três vezes: a primeira comigo em eco, a segunda sozinho no cronômetro e a terceira de novo. Não é corrida — é para a leitura ficar solta e sem tropeço.",
    texto: [
      "'Netinho querido!'",
      "'Você já cresceu tanto?'",
      "'Saudade de você…'",
    ],
    metaSegundos: 10,
  },

momento09_revisao: {
    pontos: [
      "O TOM é a VOZ que o texto tem por dentro.",
      "! → animado.  ? → pergunta.  … → triste/pensando.",
      "As mesmas palavras podem ter TONS diferentes.",
    ],
    miniDesafio: {
      pergunta: "'Ganhei um presente!' — o tom é…",
      opcoes: ["Triste", "ANIMADO", "Com raiva"],
      correta: 1,
      feedbackAcerto: "🎉 Animado!",
      feedbackErro: "'!' + ganhar presente = ANIMAÇÃO.",
      dica: "Pense no que você aprendeu hoje e vá eliminando as opções que não combinam.",
      reensino: "Vamos entender juntos: ganhar presente = ANIMAÇÃO. Agora leia de novo e escolha com calma.",
    },
  },


  // ------------------------------------------------------------
  // ESCRITA (Fase 3) — ditado de palavra e frase + produção real
  // ------------------------------------------------------------
  momento_escrita: {
    titulo: "Oficina de Escrita",
    instrucao: "Agora é você quem escreve! Ouça, monte com as peças e depois escreva de verdade.",
    blocos: [
      {
        tipo: "ditadoSilabas",
        palavras: [
        {
          palavra: "TOM",
          silabas: ["TOM"],
          distratores: ["VOZ", "A"],
          dica: "Bata palmas na palavra TOM: são 1 pedacinhos.",
        },
        {
          palavra: "VOZ",
          silabas: ["VOZ"],
          distratores: ["TOM", "A"],
          dica: "Bata palmas na palavra VOZ: são 1 pedacinhos.",
        },
        {
          palavra: "ALEGRE",
          silabas: ["A", "LE", "GRE"],
          distratores: ["TOM", "VOZ"],
          dica: "Bata palmas na palavra ALEGRE: são 3 pedacinhos.",
        },
        ],
      },
      {
        tipo: "ditadoFrase",
        frases: [
        {
          frase: "A voz do texto está alegre.",
          palavras: ["A", "voz", "do", "texto", "está", "alegre."],
          distratores: ["não", "depois"],
          dica: "A primeira palavra começa com letra MAIÚSCULA e a última tem o ponto final.",
        },
        ],
      },
      {
        tipo: "escritaReal",
        formato: "texto",
        titulo: "Escrevendo com tom",
        comando: "Escreva 2 frases alegres e depois 1 frase triste sobre o mesmo assunto.",
        linhas: 3,
        checklist: [
          "Comecei cada frase com letra MAIÚSCULA.",
          "Coloquei PONTO no fim de cada frase.",
          "Li em voz alta e entendi tudo.",
          "Dá para sentir o tom em cada frase.",
        ],
        cicloRevisao: true,
      },
    ],
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O sinal '!' dá tom de…",
        opcoes: ["Sono", "ANIMAÇÃO / emoção forte", "Pergunta",
          "Alegria",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Sono» não é a resposta. A certa é «ANIMAÇÃO / emoção forte».",
          null,
          "«Pergunta» não é a resposta. A certa é «ANIMAÇÃO / emoção forte».",
          "«Alegria» não é a resposta. A certa é «ANIMAÇÃO / emoção forte».",
        ],
        feedbackAcerto: "🎉 Animação!",
        feedbackErro: "'!' mostra emoção FORTE.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: mostra emoção FORTE. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "2/5 — O sinal '?' dá tom de…",
        opcoes: ["PERGUNTA", "Alegria", "Susto",
          "ALEGRE",
        ],
        correta: 0,
        feedbackOpcoes: [
          null,
          "«Alegria» não é a resposta. A certa é «PERGUNTA».",
          "«Susto» não é a resposta. A certa é «PERGUNTA».",
          "«ALEGRE» não é a resposta. A certa é «PERGUNTA».",
        ],
        feedbackAcerto: "🎉 Pergunta!",
        feedbackErro: "'?' é sempre PERGUNTA.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: é sempre PERGUNTA. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "3/5 — '…' dá tom de…",
        opcoes: ["Grito", "TRISTE ou PENSANDO", "Correndo",
          "ANIMADO",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Grito» não é a resposta. A certa é «TRISTE ou PENSANDO».",
          null,
          "«Correndo» não é a resposta. A certa é «TRISTE ou PENSANDO».",
          "«ANIMADO» não é a resposta. A certa é «TRISTE ou PENSANDO».",
        ],
        feedbackAcerto: "🎉 Triste ou pensando!",
        feedbackErro: "'…' é usado pra tristeza ou pausa pensando.",
        dica: "Pista: a resposta certa começa com a letra 'G'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: é usado pra tristeza ou pausa pensando. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "4/5 — 'Ai!' e 'Ai…' têm o mesmo tom?",
        opcoes: ["Sim", "NÃO, o sinal muda o tom",
          "SAUDADE / meio triste",
          "Susto",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Sim» não é a resposta. A certa é «NÃO, o sinal muda o tom».",
          null,
          "«SAUDADE / meio triste» não é a resposta. A certa é «NÃO, o sinal muda o tom».",
          "«Susto» não é a resposta. A certa é «NÃO, o sinal muda o tom».",
        ],
        feedbackAcerto: "🎉 Não! O sinal muda tudo.",
        feedbackErro: "As palavras iguais mudam o tom por causa do SINAL.",
        dica: "Pista: a resposta certa começa com a letra 'N'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: As palavras iguais mudam o tom por causa do SINAL. Agora leia de novo e escolha com calma.",
      },
      {
        pergunta: "5/5 — 'Que dia lindo!' — tom?",
        opcoes: ["Triste", "ALEGRE", "Com medo",
          "Sim",
        ],
        correta: 1,
        feedbackOpcoes: [
          "«Triste» não é a resposta. A certa é «ALEGRE».",
          null,
          "«Com medo» não é a resposta. A certa é «ALEGRE».",
          "«Sim» não é a resposta. A certa é «ALEGRE».",
        ],
        feedbackAcerto: "🎉 Alegre!",
        feedbackErro: "'dia lindo' + '!' = tom ALEGRE.",
        dica: "Pista: a resposta certa começa com a letra 'A'. Leia as opções de novo com calma.",
        reensino: "Vamos entender juntos: dia lindo' + '!' = tom ALEGRE. Agora leia de novo e escolha com calma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎭 Teatro do tom",
    materiais: ["Uma frase curta escrita num papel"],
    passos: [
      "1) A criança escolhe UMA frase (ex.: 'Você chegou').",
      "2) Fala em 3 tons: animado (!), pergunta (?), triste (…).",
      "3) A família adivinha qual foi qual.",
    ],
    registro: "🎙️ Áudio curto com os 3 tons da mesma frase.",
  },

  recompensa: { xp: 150, moedas: 100 },
};

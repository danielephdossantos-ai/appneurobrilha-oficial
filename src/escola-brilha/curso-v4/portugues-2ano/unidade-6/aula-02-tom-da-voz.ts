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
      },
      {
        pergunta: "'Cadê o meu urso?' — qual voz?",
        opcoes: ["Voz ALEGRE", "Voz de PERGUNTA", "Voz com raiva"],
        correta: 1,
        feedbackAcerto: "🎉 Pergunta!",
        feedbackErro: "'?' mostra que está PERGUNTANDO.",
      },
      {
        pergunta: "'Sumiu…' — qual voz?",
        opcoes: ["ANIMADA", "TRISTE / pensativa", "Brava"],
        correta: 1,
        feedbackAcerto: "🎉 Triste!",
        feedbackErro: "'…' dá tom de tristeza ou pensamento.",
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
      },
      {
        pergunta: "'Hummm…' é palavra de…",
        opcoes: ["PENSANDO", "Correndo", "Cantando"],
        correta: 0,
        feedbackAcerto: "🎉 Pensando!",
        feedbackErro: "'Hummm…' é a voz de quem está PENSANDO.",
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
        ondeEstaNoTexto: "Netinho querido!",
      },
      {
        pergunta: "'Saudade de você…' — o tom é…",
        opcoes: ["Alegre", "SAUDADE / meio triste", "Brava"],
        correta: 1,
        feedbackAcerto: "🎉 Saudade!",
        feedbackErro: "'…' junto com 'saudade' dá tom TRISTE de quem sente falta.",
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
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O sinal '!' dá tom de…",
        opcoes: ["Sono", "ANIMAÇÃO / emoção forte", "Pergunta"],
        correta: 1,
        feedbackAcerto: "🎉 Animação!",
        feedbackErro: "'!' mostra emoção FORTE.",
      },
      {
        pergunta: "2/5 — O sinal '?' dá tom de…",
        opcoes: ["PERGUNTA", "Alegria", "Susto"],
        correta: 0,
        feedbackAcerto: "🎉 Pergunta!",
        feedbackErro: "'?' é sempre PERGUNTA.",
      },
      {
        pergunta: "3/5 — '…' dá tom de…",
        opcoes: ["Grito", "TRISTE ou PENSANDO", "Correndo"],
        correta: 1,
        feedbackAcerto: "🎉 Triste ou pensando!",
        feedbackErro: "'…' é usado pra tristeza ou pausa pensando.",
      },
      {
        pergunta: "4/5 — 'Ai!' e 'Ai…' têm o mesmo tom?",
        opcoes: ["Sim", "NÃO, o sinal muda o tom"],
        correta: 1,
        feedbackAcerto: "🎉 Não! O sinal muda tudo.",
        feedbackErro: "As palavras iguais mudam o tom por causa do SINAL.",
      },
      {
        pergunta: "5/5 — 'Que dia lindo!' — tom?",
        opcoes: ["Triste", "ALEGRE", "Com medo"],
        correta: 1,
        feedbackAcerto: "🎉 Alegre!",
        feedbackErro: "'dia lindo' + '!' = tom ALEGRE.",
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

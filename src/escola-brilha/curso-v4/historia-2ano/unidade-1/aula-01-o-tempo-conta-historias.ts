import type { AulaPortuguesV4 } from "../../types";
import relogio from "@/assets/neuro-treino/objetos/relogio-magico.png";
import bebe from "@/assets/neuro-treino/objetos/bebe.png";
import bebeEng from "@/assets/neuro-treino/objetos/bebe-engatinhando.png";
import crianca from "@/assets/neuro-treino/objetos/crianca-andando.png";
import cameraAntiga from "@/assets/neuro-treino/objetos/camera-antiga.png";
import album from "@/assets/neuro-treino/objetos/album.png";
import calendario from "@/assets/neuro-treino/objetos/calendario.png";
import presente from "@/assets/neuro-treino/objetos/presente.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import bolo from "@/assets/neuro-treino/objetos/bolo.png";
import escola from "@/assets/neuro-treino/objetos/escola.png";
import coruja from "@/assets/neuro-treino/objetos/coruja.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";

/**
 * História · 2º Ano · Unidade 1 · Aula 01
 * "O Tempo Conta Histórias" — Passado, Presente, Futuro.
 *
 * Recupera a 1ª engrenagem (Bronze) do Relógio do Tempo e monta
 * a Sala 1 do Museu Digital: Linha do Tempo Interativa.
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-o-tempo-conta-historias",
  titulo: "O Tempo Conta Histórias",
  iconeTrilha: "⏳",
  bncc: ["EF02HI01", "EF02HI02"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "O Relógio do Tempo perdeu suas engrenagens!",
    historia:
      "Aurora chegou correndo: 'Brilha! O Relógio do Tempo perdeu as 7 engrenagens mágicas e o mundo ficou confuso!' Pra recuperar a PRIMEIRA engrenagem, vamos desvendar os segredos do ONTEM, do HOJE e do AMANHÃ. Pegue sua Lupa do Historiador — a investigação começou!",
    imagemUrl: relogio,
  },

  momento02_previsao: {
    instrucao:
      "Brilha achou uma foto sua de bebê. Olhe o cartaz da missão e imagine sobre o que vamos investigar hoje.",
    bloco: {
      titulo: "Missão do Pequeno Historiador",
      capaImagemUrl: album,
      recado: {
        rotulo: "Cartaz da Aurora",
        icone: "📢",
        estilo: "cartaz",
        linhas: [
          "MISSÃO 1",
          "",
          "Descubra como o TEMPO",
          "muda tudo à sua volta.",
          "Ontem · Hoje · Amanhã.",
          "",
          "— Aurora",
        ],
      },
      pistas: [
        { imagemUrl: bebe, nome: "Foto de bebê" },
        { imagemUrl: crianca, nome: "Você agora" },
        { imagemUrl: presente, nome: "Amanhã" },
      ],
      pergunta: "Sobre o que essa missão vai falar?",
      hipoteses: [
        { texto: "Sobre o TEMPO passando: ontem, hoje e amanhã.", imagemUrl: relogio },
        { texto: "Sobre receitas de comida.", imagemUrl: bolo },
        { texto: "Sobre planetas do espaço.", imagemUrl: estrela },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! As pistas mostram você em épocas diferentes — a missão é sobre o TEMPO.",
      feedbackErro:
        "Olhe de novo: um bebê, uma criança de hoje e um presente do amanhã. Fala do TEMPO!",
    },
  },

  momento03_vocabulario: {
    instrucao:
      "Antes de investigar, conheça 3 palavras mágicas do Pequeno Historiador.",
    cards: [
      {
        palavra: "passado",
        explicacao: "Tudo o que JÁ aconteceu. Ontem, o ano passado, quando você era bebê.",
        exemplo: "A foto de bebê é do PASSADO.",
        imagemUrl: bebe,
      },
      {
        palavra: "presente",
        explicacao: "O que está acontecendo AGORA, neste momento.",
        exemplo: "Você jogando esta aula agora é o PRESENTE.",
        imagemUrl: crianca,
      },
      {
        palavra: "futuro",
        explicacao: "O que AINDA vai acontecer. Amanhã, o próximo aniversário.",
        exemplo: "Seu próximo aniversário é o FUTURO.",
        imagemUrl: presente,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao:
      "Aurora vai ler com você. Preste atenção nas palavras em amarelo — são pistas do tempo.",
    leitura: {
      titulo: "O tempo não para",
      imagemUrl: relogio,
      legendaImagem: "O Relógio do Tempo conta a história de tudo.",
      destacar: ["passado", "presente", "futuro", "fotografia", "história"],
      paragrafos: [
        "O tempo não para nunca. Ele passa devagarzinho, sem a gente ver — e vai mudando o mundo.",
        "Pra organizar tudo, os historiadores dividem o tempo em três partes: passado, presente e futuro.",
        "Uma fotografia antiga é uma pista do passado. Ela mostra como as coisas ERAM. Assim, a foto ajuda a contar a nossa história.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "As respostas estão TODAS no texto. Volte lá se precisar.",
    perguntas: [
      {
        pergunta: "Em quantas partes os historiadores dividem o tempo?",
        opcoes: ["Duas", "Três", "Sete"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Passado, presente e futuro.",
        feedbackErro: "Olhe o segundo parágrafo: 'três partes'.",
        ondeEstaNoTexto: "…três partes: passado, presente e futuro.",
      },
      {
        pergunta: "Uma fotografia antiga é pista de qual tempo?",
        opcoes: ["Do passado", "Do presente", "Do futuro"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! A foto antiga mostra como as coisas ERAM — é do passado.",
        feedbackErro: "No último parágrafo: 'pista do PASSADO'.",
        ondeEstaNoTexto: "Uma fotografia antiga é uma pista do passado.",
      },
      {
        pergunta: "O tempo, segundo o texto…",
        opcoes: ["Para às vezes", "Não para nunca", "Só passa à noite"],
        correta: 1,
        feedbackAcerto: "🎉 Perfeito! O tempo NÃO PARA nunca.",
        feedbackErro: "Primeira frase do texto.",
        ondeEstaNoTexto: "O tempo não para nunca.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "Cada coisa aconteceu num TEMPO. Ligue cada evento ao tempo certo.",
    perguntas: [
      {
        pergunta: "O dia em que você NASCEU é do…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Já aconteceu — passado.",
        feedbackErro: "Você já nasceu. Isso é PASSADO.",
      },
      {
        pergunta: "Você jogando esta aula AGORA é…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Está acontecendo agora — presente.",
        feedbackErro: "Agora, neste momento, é o PRESENTE.",
      },
      {
        pergunta: "Seu PRÓXIMO aniversário é do…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! Ainda vai acontecer — futuro.",
        feedbackErro: "Ainda não chegou. É FUTURO.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao:
      "As páginas da sua vida embaralharam. Coloque na ordem do tempo.",
    bloco: {
      instrucao: "Passado → Presente → Futuro.",
      itens: [
        { id: "s1", texto: "Você era um bebê engatinhando.", imagemUrl: bebeEng },
        { id: "s2", texto: "Você hoje, na aula do Brilha.", imagemUrl: crianca },
        { id: "s3", texto: "Seu próximo aniversário, cheio de presentes.", imagemUrl: presente },
      ],
      ordemCerta: ["s1", "s2", "s3"],
      feedbackAcerto: "🎉 Perfeito! Passado → Presente → Futuro.",
      feedbackErro:
        "Primeiro bebê (passado), depois você hoje (presente), depois o aniversário que vai chegar (futuro).",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho e responda duas perguntas.",
    leitura: {
      titulo: "A foto amarelada",
      imagemUrl: cameraAntiga,
      destacar: ["fotografia", "antiga", "passado"],
      paragrafos: [
        "Uma fotografia amarelada tem cor de papel velho. Foi tirada há muitos e muitos anos, com uma câmera antiga.",
        "Ela é uma FONTE HISTÓRICA: um objeto do PASSADO que conta uma história de verdade sobre as pessoas de antigamente.",
      ],
    },
    perguntas: [
      {
        pergunta: "Por que a foto está AMARELADA?",
        opcoes: ["Foi pintada de amarelo", "É muito antiga", "Foi molhada no suco"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Amarelada = muito antiga.",
        feedbackErro: "Está no texto: 'tirada há muitos e muitos anos'.",
        ondeEstaNoTexto: "…tem cor de papel velho. Foi tirada há muitos anos.",
      },
      {
        pergunta: "O que é uma FONTE HISTÓRICA?",
        opcoes: [
          "Uma fonte de água",
          "Um objeto do passado que conta uma história de verdade",
          "Um tipo de comida",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! Objeto do PASSADO que conta história.",
        feedbackErro: "Segundo parágrafo — logo depois de 'FONTE HISTÓRICA'.",
        ondeEstaNoTexto: "…um objeto do passado que conta uma história de verdade.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "⏱️ O Enigma do Relógio Desregulado",
    instrucao:
      "O ponteiro do Relógio do Tempo está girando! Escolha o tempo certo pra cada pista.",
    jogo: {
      tipo: "arquitetoLugar",
      titulo: "Enigma do Relógio",
      bloco: {
        instrucao: "Olhe a pista e escolha: passado, presente ou futuro.",
        rodadas: [
          {
            id: "r1",
            cenario: {
              nome: "Foto amarelada de bebê",
              emojiLugar: "📷",
              emojiMorador: "👶",
              pista: "Uma foto amarelada, tirada há muitos anos.",
            },
            opcoes: [
              { id: "passado", nome: "Passado", imagemUrl: bebe },
              { id: "presente", nome: "Presente", imagemUrl: crianca },
              { id: "futuro", nome: "Futuro", imagemUrl: presente },
            ],
            correta: "passado",
            feedbackAcerto: "🎉 Foto antiga = PASSADO!",
            feedbackErro: "Foto AMARELADA = muito antiga. É passado.",
          },
          {
            id: "r2",
            cenario: {
              nome: "Você jogando agora",
              emojiLugar: "🎮",
              emojiMorador: "🧒",
              pista: "Está acontecendo neste exato momento.",
            },
            opcoes: [
              { id: "passado", nome: "Passado", imagemUrl: bebe },
              { id: "presente", nome: "Presente", imagemUrl: crianca },
              { id: "futuro", nome: "Futuro", imagemUrl: presente },
            ],
            correta: "presente",
            feedbackAcerto: "🎉 AGORA = PRESENTE!",
            feedbackErro: "Se é AGORA, é presente.",
          },
          {
            id: "r3",
            cenario: {
              nome: "Próximo aniversário",
              emojiLugar: "🎂",
              emojiMorador: "🎉",
              pista: "Ainda vai chegar. Você já está planejando.",
            },
            opcoes: [
              { id: "passado", nome: "Passado", imagemUrl: bebe },
              { id: "presente", nome: "Presente", imagemUrl: crianca },
              { id: "futuro", nome: "Futuro", imagemUrl: presente },
            ],
            correta: "futuro",
            feedbackAcerto: "🎉 Ainda vai chegar = FUTURO!",
            feedbackErro: "Se ainda vai acontecer, é FUTURO.",
          },
          {
            id: "r4",
            cenario: {
              nome: "Diário do ano 1950",
              emojiLugar: "📓",
              emojiMorador: "🕰️",
              pista: "Um diário escrito muito antes de você nascer.",
            },
            opcoes: [
              { id: "passado", nome: "Passado", imagemUrl: livro },
              { id: "presente", nome: "Presente", imagemUrl: crianca },
              { id: "futuro", nome: "Futuro", imagemUrl: presente },
            ],
            correta: "passado",
            feedbackAcerto: "🎉 Escrito em 1950 = PASSADO!",
            feedbackErro: "1950 foi há muito tempo. É passado.",
          },
        ],
        feedbackFinal:
          "Você regulou o Relógio do Tempo! A 1ª engrenagem está brilhando.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "PASSADO = o que JÁ aconteceu.",
      "PRESENTE = o que está acontecendo AGORA.",
      "FUTURO = o que AINDA vai acontecer.",
      "Uma FOTO ANTIGA é uma fonte do passado — conta como as coisas eram.",
      "O tempo NÃO PARA. Cada dia vira uma nova página da sua história.",
    ],
    miniDesafio: {
      pergunta: "Como se chama o desenho que organiza o tempo (ontem → hoje → amanhã)?",
      opcoes: ["Mapa do tesouro", "Linha do tempo", "Receita de bolo"],
      correta: 1,
      feedbackAcerto: "🎉 LINHA DO TEMPO! Sua 1ª sala do museu está pronta.",
      feedbackErro: "Chama LINHA DO TEMPO — organiza os fatos em ordem.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — O que JÁ aconteceu é o…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 0,
        feedbackAcerto: "🎉 Passado!",
        feedbackErro: "Já aconteceu = PASSADO.",
      },
      {
        pergunta: "2/5 — O que está acontecendo AGORA é o…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 1,
        feedbackAcerto: "🎉 Presente!",
        feedbackErro: "Agora = PRESENTE.",
      },
      {
        pergunta: "3/5 — Uma foto amarelada é uma pista do…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 0,
        feedbackAcerto: "🎉 Passado!",
        feedbackErro: "Foto amarelada é antiga = PASSADO.",
      },
      {
        pergunta: "4/5 — Um diário escrito em 1950 conta sobre o…",
        opcoes: ["Passado", "Presente", "Futuro"],
        correta: 0,
        feedbackAcerto: "🎉 Passado!",
        feedbackErro: "1950 foi há muito tempo = PASSADO.",
      },
      {
        pergunta: "5/5 — O nome do desenho que organiza o tempo é…",
        opcoes: ["Árvore", "Linha do tempo", "Mapa"],
        correta: 1,
        feedbackAcerto: "🎉 LINHA DO TEMPO! Engrenagem de Bronze conquistada! 🥉",
        feedbackErro: "LINHA DO TEMPO organiza os fatos em ordem.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🔍 Investigadores de Gaveta",
    materiais: ["Um adulto pra conversar", "Uma foto antiga da família (papel ou celular)"],
    passos: [
      "1) Peça pra um adulto mostrar uma foto dele quando tinha a sua idade.",
      "2) Olhem juntos: o que mudou no cabelo, nas roupas e na cidade?",
      "3) Pergunte em que ANO a foto foi tirada.",
      "4) Guarde essa história — ela virou parte do seu museu!",
    ],
    registro:
      "📸 Uma foto do adulto comparando ontem × hoje, ou um áudio contando o que descobriram.",
  },

  recompensa: {
    xp: 300,
    moedas: 150,
    medalha: "Engrenagem de Bronze",
  },
};

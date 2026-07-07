import type { AulaPortuguesV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bibliotecario from "@/assets/neuro-treino/objetos/bibliotecario.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import biblioteca from "@/assets/neuro-treino/objetos/biblioteca.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import festa from "@/assets/neuro-treino/objetos/festa.png";
import presente from "@/assets/neuro-treino/objetos/presente.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import binoculo from "@/assets/neuro-treino/objetos/binoculo.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import paleta from "@/assets/neuro-treino/objetos/paleta.png";
import setaDir from "@/assets/neuro-treino/objetos/seta-direita.png";
import album from "@/assets/neuro-treino/objetos/album.png";

/**
 * Unidade 7 · Aula 5 — O Grande Festival dos Autores
 * Missão FINAL do curso: apresentar, ler, explicar e publicar o livro.
 * Integra todas as habilidades trabalhadas no 2º ano.
 * BNCC: EF02LP01 · EF02LP24 · EF15LP19 · EF02LP26 · EF02LP27 · EF02LP28
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-grande-festival-dos-autores",
  titulo: "O Grande Festival dos Autores",
  iconeTrilha: "👑",
  bncc: ["EF02LP01", "EF02LP24", "EF15LP19", "EF02LP26", "EF02LP27", "EF02LP28"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O palco está aberto",
    historia:
      "As luzes do palco se acendem. Aurora sorri: — Hoje é o dia. Você planejou, escreveu, revisou e ilustrou. Só falta APRESENTAR seu livro pra virar oficialmente um AUTOR da Biblioteca Encantada!",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "As 6 medalhas de AUTOR que você já ganhou:",
    bloco: {
      titulo: "As 6 medalhas de autor",
      capaImagemUrl: estrela,
      pistas: [
        { imagemUrl: mapa, nome: "📝 Planejar" },
        { imagemUrl: lapis, nome: "✍️ Escrever" },
        { imagemUrl: binoculo, nome: "🔍 Revisar" },
        { imagemUrl: paleta, nome: "🎨 Ilustrar" },
        { imagemUrl: balao, nome: "🎤 Apresentar" },
        { imagemUrl: coracao, nome: "💛 Compartilhar" },
      ],
      recado: {
        icone: "👑",
        rotulo: "Festival dos Autores",
        estilo: "papel",
        linhas: [
          "Hoje seu livro",
          "entra na estante",
          "da Biblioteca Encantada.",
        ],
      },
      pergunta: "O que faz alguém virar AUTOR?",
      hipoteses: [
        { texto: "PLANEJAR, ESCREVER, REVISAR, ILUSTRAR e APRESENTAR o próprio livro.", imagemUrl: livro },
        { texto: "Só ler os livros dos outros.", imagemUrl: livros },
        { texto: "Só desenhar.", imagemUrl: paleta },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Autor faz tudo isso!",
      feedbackErro: "Autor de verdade planeja, escreve, revisa, ilustra e apresenta o próprio livro.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do festival.",
    cards: [
      {
        palavra: "autor",
        explicacao: "Quem ESCREVE um livro. Você virou AUTOR neste festival!",
        exemplo: "Eu sou AUTOR do meu primeiro livro.",
        imagemUrl: lapis,
      },
      {
        palavra: "publicar",
        explicacao: "MOSTRAR o livro pros outros lerem. Colocar na estante do mundo.",
        exemplo: "Hoje vou PUBLICAR meu livro na Biblioteca Encantada.",
        imagemUrl: biblioteca,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Escute o discurso da AURORA no palco.",
    leitura: {
      titulo: "🎤 Aurora fala com você",
      imagemUrl: bibliotecario,
      destacar: ["leitor", "autor", "história", "mundo"],
      paragrafos: [
        "Aurora sorri e fala baixinho:",
        "— Ler nos permite CONHECER o mundo.",
        "— Escrever nos permite DEIXAR nossa marca nele.",
        "— Hoje você não é apenas um LEITOR.",
        "— Você também se tornou um AUTOR.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Sobre a fala da Aurora:",
    perguntas: [
      {
        pergunta: "Segundo Aurora, LER serve pra…",
        opcoes: ["CONHECER o mundo", "Dormir", "Correr"],
        correta: 0,
        feedbackAcerto: "🎉 Conhecer o mundo!",
        feedbackErro: "'Ler nos permite CONHECER o mundo'.",
        ondeEstaNoTexto: "Ler nos permite CONHECER o mundo",
      },
      {
        pergunta: "E ESCREVER?",
        opcoes: [
          "DEIXAR nossa marca no mundo",
          "Só copiar",
          "Nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Deixar marca!",
        feedbackErro: "'Escrever nos permite DEIXAR nossa marca'.",
        ondeEstaNoTexto: "Escrever nos permite DEIXAR nossa marca",
      },
      {
        pergunta: "Aurora diz que HOJE você é…",
        opcoes: [
          "LEITOR e AUTOR",
          "Só leitor",
          "Nem uma coisa",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Os dois!",
        feedbackErro: "'Você não é APENAS um leitor. Você também se tornou um AUTOR'.",
        ondeEstaNoTexto: "você também se tornou um AUTOR",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Revisão do CURSO INTEIRO — use tudo que aprendeu.",
    perguntas: [
      {
        pergunta: "🔍 Léo 'ficou de olhos molhados'. Isso é uma…",
        opcoes: ["PISTA de que estava chorando", "Piada", "Cor"],
        correta: 0,
        feedbackAcerto: "🎉 Pista de choro!",
        feedbackErro: "'Olhos molhados' = PISTA — o texto não disse 'chorou', mas mostrou.",
      },
      {
        pergunta: "🎭 'Que dia LINDO!' — o tom é…",
        opcoes: ["ANIMADO", "Bravo", "Triste"],
        correta: 0,
        feedbackAcerto: "🎉 Animado!",
        feedbackErro: "'!' + 'lindo' = tom ANIMADO.",
      },
      {
        pergunta: "🧩 'Choveu, ENTÃO a rua ficou molhada.' O que a palavra ENTÃO mostra?",
        opcoes: ["O RESULTADO", "O título", "O autor"],
        correta: 0,
        feedbackAcerto: "🎉 O resultado!",
        feedbackErro: "ENTÃO liga causa (chuva) e resultado (rua molhada).",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "A JORNADA COMPLETA de um autor.",
    bloco: {
      instrucao: "Do plano até o festival.",
      itens: [
        { id: "j1", texto: "📝 PLANEJAR o livro", imagemUrl: mapa },
        { id: "j2", texto: "✍️ ESCREVER o texto", imagemUrl: lapis },
        { id: "j3", texto: "🔍 REVISAR com atenção", imagemUrl: binoculo },
        { id: "j4", texto: "🎨 ILUSTRAR e fazer a capa", imagemUrl: paleta },
        { id: "j5", texto: "🎤 APRESENTAR no festival", imagemUrl: balao },
        { id: "j6", texto: "📚 PUBLICAR na estante", imagemUrl: biblioteca },
      ],
      ordemCerta: ["j1", "j2", "j3", "j4", "j5", "j6"],
      feedbackAcerto: "🎉 Jornada completa do autor!",
      feedbackErro: "Planejar → escrever → revisar → ilustrar → apresentar → publicar.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Missão FINAL: leia a última página da Biblioteca Encantada.",
    leitura: {
      titulo: "📖 O último capítulo",
      imagemUrl: brilha,
      destacar: ["chave dourada", "história", "transforma", "autora"],
      paragrafos: [
        "Aurora entregou a CHAVE DOURADA pra Brilha.",
        "As estantes brilharam. Os livros recuperados voltaram pros lugares.",
        "Na estante nova, apareceu O SEU livro — com seu nome na capa.",
        "Brilha sorriu: — Cada HISTÓRIA que lemos nos TRANSFORMA. Cada história que ESCREVEMOS pode transformar outra pessoa.",
        "E a Biblioteca Encantada abriu as portas pra novas aventuras.",
      ],
    },
    perguntas: [
      {
        pergunta: "O que Aurora entregou pra Brilha?",
        opcoes: ["A CHAVE DOURADA", "Um bolo", "Uma flor"],
        correta: 0,
        feedbackAcerto: "🎉 A chave!",
        feedbackErro: "'Aurora entregou a CHAVE DOURADA pra Brilha'.",
        ondeEstaNoTexto: "entregou a CHAVE DOURADA",
      },
      {
        pergunta: "💭 O que Brilha quis dizer com 'cada história nos TRANSFORMA'?",
        opcoes: [
          "Que ler e escrever nos MUDAM por dentro",
          "Que a gente vira outra pessoa fisicamente",
          "Nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Mudam por dentro!",
        feedbackErro: "TRANSFORMAR = mudar por dentro, aprender coisas novas.",
      },
      {
        pergunta: "🔍 Que PISTA mostra que o livro é SEU?",
        opcoes: [
          "'Apareceu o seu livro com seu NOME na capa'",
          "Apareceu vazio",
          "Nem apareceu",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Seu nome na capa!",
        feedbackErro: "A pista é: 'com seu NOME na capa'.",
        ondeEstaNoTexto: "apareceu O SEU livro — com seu nome na capa",
      },
    ],
  },

  momento_minijogo: {
    titulo: "👑 Prova de Autor",
    instrucao: "Ligue cada MOMENTO do livro à etapa certa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "👑 Prova de Autor",
      bloco: {
        instrucao: "Cada tarefa vai numa etapa da jornada.",
        itens: [
          { id: "p1", texto: "Escolhi o tema e o personagem", alvoId: "plano", imagemUrl: mapa },
          { id: "p2", texto: "Escrevi começo, meio e fim", alvoId: "escrever", imagemUrl: lapis },
          { id: "p3", texto: "Coloquei ponto e maiúscula", alvoId: "revisar", imagemUrl: binoculo },
          { id: "p4", texto: "Desenhei a capa", alvoId: "ilustrar", imagemUrl: paleta },
          { id: "p5", texto: "Falei 'meu livro chama-se…'", alvoId: "apresentar", imagemUrl: balao },
          { id: "p6", texto: "Coloquei na estante", alvoId: "publicar", imagemUrl: biblioteca },
        ],
        alvos: [
          { id: "plano", nome: "📝 Planejar" },
          { id: "escrever", nome: "✍️ Escrever" },
          { id: "revisar", nome: "🔍 Revisar" },
          { id: "ilustrar", nome: "🎨 Ilustrar" },
          { id: "apresentar", nome: "🎤 Apresentar" },
          { id: "publicar", nome: "📚 Publicar" },
        ],
        feedbackAcerto: "🎉 GRANDE AUTOR da Biblioteca Encantada!",
        feedbackErro: "Cada tarefa combina com UMA etapa da jornada do autor.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "📝 PLANEJAR: título, personagem, lugar, problema, solução, final.",
      "✍️ ESCREVER: começo, meio, fim — com DEPOIS, ENTÃO, POR FIM.",
      "🔍 REVISAR: título, maiúscula, ponto, ordem, sentido.",
      "🎨 ILUSTRAR: capa + desenhos que combinam com o texto.",
      "🎤 APRESENTAR: nome, personagem, parte favorita.",
      "📚 PUBLICAR: seu livro entra na estante.",
    ],
    miniDesafio: {
      pergunta: "Você é oficialmente…",
      opcoes: [
        "AUTOR(A) da Biblioteca Encantada",
        "Só leitor",
        "Nem uma coisa",
      ],
      correta: 0,
      feedbackAcerto: "🎉 AUTOR(A)!",
      feedbackErro: "Você planejou, escreveu, revisou, ilustrou e apresentou. Você é AUTOR(A)!",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — PLANEJAR vem…",
        opcoes: ["ANTES de escrever", "Depois de tudo", "Nunca"],
        correta: 0,
        feedbackAcerto: "🎉 Antes!",
        feedbackErro: "Planejar SEMPRE vem antes de escrever.",
      },
      {
        pergunta: "2/5 — Toda frase começa com MAIÚSCULA e termina com…",
        opcoes: [". ! ?", "Vírgula", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 . ! ?",
        feedbackErro: "Frase termina com PONTO, EXCLAMAÇÃO ou INTERROGAÇÃO.",
      },
      {
        pergunta: "3/5 — Ilustração serve pra…",
        opcoes: ["AJUDAR o leitor a imaginar", "Confundir", "Esconder"],
        correta: 0,
        feedbackAcerto: "🎉 Ajudar!",
        feedbackErro: "Ilustração ajuda o leitor a VER a história.",
      },
      {
        pergunta: "4/5 — Um bom PALPITE de leitor tem…",
        opcoes: ["MOTIVO do texto", "Chute", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 Motivo do texto!",
        feedbackErro: "Palpite bom = opinião + PORQUÊ que vem do texto.",
      },
      {
        pergunta: "5/5 — Ao final desse curso, você é…",
        opcoes: [
          "LEITOR(A) e AUTOR(A) da Biblioteca Encantada",
          "Só um número",
          "Nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Leitor(a) e Autor(a)! 👑",
        feedbackErro: "Você agora é LEITOR(A) e AUTOR(A) — as duas coisas!",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📖 Noite de Leitura em Família",
    materiais: ["O livro completo da criança", "A família reunida"],
    passos: [
      "1) A criança APRESENTA o livro pra família: nome, personagem, parte favorita.",
      "2) LÊ (ou conta) um trechinho em voz alta.",
      "3) A família conversa: 'O que mais gostaram? Quem foi o personagem favorito? Qual foi a parte mais emocionante?'",
      "4) Todo mundo aplaude o novo AUTOR(A) da casa!",
    ],
    registro: "📸 Foto ou vídeo da noite de leitura — o momento entra no álbum permanente.",
  },

  recompensa: { xp: 200, moedas: 160 },
};

void livros;
void festa;
void presente;
void coracao;
void setaDir;
void album;

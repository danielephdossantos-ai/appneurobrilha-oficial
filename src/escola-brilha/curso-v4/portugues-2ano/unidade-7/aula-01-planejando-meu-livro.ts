import type { AulaPortuguesV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bibliotecario from "@/assets/neuro-treino/objetos/bibliotecario.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import lapis from "@/assets/neuro-treino/objetos/lapis.png";
import papel from "@/assets/neuro-treino/objetos/papel.png";
import mapa from "@/assets/neuro-treino/objetos/mapa.png";
import quebra from "@/assets/neuro-treino/objetos/quebra-cabeca.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";
import princesa from "@/assets/neuro-treino/objetos/princesa.png";
import flor from "@/assets/neuro-treino/objetos/flor.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";

/**
 * Unidade 7 · Aula 1 — Planejando Meu Livro
 * Festival dos Autores: começa a criar o próprio livro.
 * BNCC: EF02LP01 · EF02LP16 · EF02LP17
 */
export const aula01: AulaPortuguesV4 = {
  slug: "aula-01-planejando-meu-livro",
  titulo: "Planejando Meu Livro",
  iconeTrilha: "📝",
  bncc: ["EF02LP01", "EF02LP16", "EF02LP17"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "A estante vazia",
    historia:
      "Brilha entra no grande salão. Aurora aponta uma estante VAZIA: — Esta é pra guardar os livros das crianças que chegaram até aqui. Hoje é o FESTIVAL DOS AUTORES! Você vai fazer o SEU livro. Mas antes… todo bom livro começa com um PLANO!",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "Escolha o TEMA do seu livro.",
    bloco: {
      titulo: "Qual será o tema do seu livro?",
      capaImagemUrl: livro,
      pistas: [
        { imagemUrl: cachorro, nome: "🐶 Aventura" },
        { imagemUrl: princesa, nome: "🧚 Fantasia" },
        { imagemUrl: balao, nome: "😂 Divertida" },
        { imagemUrl: flor, nome: "🌱 Natureza" },
      ],
      recado: {
        icone: "📖",
        rotulo: "Planejamento",
        estilo: "papel",
        linhas: [
          "Todo livro começa",
          "com um PLANO.",
          "Escolha o tema!",
        ],
      },
      pergunta: "O que um AUTOR faz ANTES de escrever?",
      hipoteses: [
        { texto: "PLANEJA: escolhe tema, personagens e o que vai acontecer.", imagemUrl: mapa },
        { texto: "Já sai escrevendo sem pensar.", imagemUrl: lapis },
        { texto: "Só desenha a capa.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Autor de verdade PLANEJA primeiro!",
      feedbackErro: "Antes de escrever, o autor faz um PLANO: tema, personagens, problema, final.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de autor.",
    cards: [
      {
        palavra: "planejar",
        explicacao: "PENSAR ANTES: escolher o quê, quem e como vai ser a história.",
        exemplo: "Vou PLANEJAR meu livro: tema, personagens e final.",
        imagemUrl: mapa,
      },
      {
        palavra: "personagem",
        explicacao: "QUEM aparece na história — pessoa, bicho ou coisa que fala/age.",
        exemplo: "O PERSONAGEM do meu livro é uma gata corajosa.",
        imagemUrl: cachorro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia o plano que Brilha fez pro livro DELA.",
    leitura: {
      titulo: "📖 Plano do livro da Brilha",
      imagemUrl: brilha,
      destacar: ["Título", "Personagem", "Lugar", "Problema", "Solução", "Final"],
      paragrafos: [
        "📖 Título: 'A noz perdida'.",
        "👤 Personagem: Brilha, a esquilinha.",
        "📍 Lugar: a floresta encantada.",
        "⭐ Problema: Brilha perdeu a noz da vovó.",
        "💡 Solução: os amigos ajudam a procurar.",
        "🎉 Final: Brilha acha a noz e faz uma festa.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Sobre o plano da Brilha:",
    perguntas: [
      {
        pergunta: "Qual é o PROBLEMA da história?",
        opcoes: ["Brilha perdeu a noz", "Chove muito", "Brilha dormiu"],
        correta: 0,
        feedbackAcerto: "🎉 O problema é a noz perdida!",
        feedbackErro: "O texto diz: 'Brilha PERDEU a noz da vovó'.",
        ondeEstaNoTexto: "Problema: Brilha perdeu a noz da vovó",
      },
      {
        pergunta: "Qual é a SOLUÇÃO?",
        opcoes: [
          "Os amigos ajudam a procurar",
          "Brilha vai dormir",
          "Ninguém faz nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Amigos ajudam!",
        feedbackErro: "Solução = quem/como RESOLVE. Amigos ajudam a procurar.",
      },
      {
        pergunta: "E o FINAL?",
        opcoes: ["Festa!", "Ela ficou triste", "Perdeu tudo"],
        correta: 0,
        feedbackAcerto: "🎉 Achou a noz → festa!",
        feedbackErro: "O plano termina em 'faz uma festa'.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Um bom PLANO tem 6 partes. Vamos ver.",
    perguntas: [
      {
        pergunta: "📖 Título é o QUÊ?",
        opcoes: ["O NOME do livro", "O final", "O lugar"],
        correta: 0,
        feedbackAcerto: "🎉 O nome!",
        feedbackErro: "TÍTULO = nome do livro na capa.",
      },
      {
        pergunta: "📍 Lugar é o QUÊ?",
        opcoes: ["ONDE a história acontece", "Quem escreve", "Quando termina"],
        correta: 0,
        feedbackAcerto: "🎉 Onde acontece!",
        feedbackErro: "LUGAR = onde a história se passa (casa, floresta, escola…).",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "🧩 Quebra-Cabeça: monte o PLANO na ordem.",
    bloco: {
      instrucao: "Do começo (título) até o final.",
      itens: [
        { id: "p1", texto: "📖 Título", imagemUrl: livro },
        { id: "p2", texto: "👤 Personagem", imagemUrl: brilha },
        { id: "p3", texto: "📍 Lugar", imagemUrl: mapa },
        { id: "p4", texto: "⭐ Problema", imagemUrl: estrela },
        { id: "p5", texto: "💡 Solução", imagemUrl: coracao },
        { id: "p6", texto: "🎉 Final", imagemUrl: balao },
      ],
      ordemCerta: ["p1", "p2", "p3", "p4", "p5", "p6"],
      feedbackAcerto: "🎉 Plano completo!",
      feedbackErro: "Ordem: título → personagem → lugar → problema → solução → final.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia outro plano e responda.",
    leitura: {
      titulo: "📖 Plano: 'O sapo que virou astronauta'",
      imagemUrl: livros,
      destacar: ["Sapo", "lago", "voar", "foguete", "lua"],
      paragrafos: [
        "👤 Personagem: um SAPO chamado Zé.",
        "📍 Lugar: o LAGO azul.",
        "⭐ Problema: Zé queria VOAR, mas era só um sapo.",
        "💡 Solução: construiu um FOGUETE de folhas.",
        "🎉 Final: chegou na LUA e virou herói!",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem é o PERSONAGEM?",
        opcoes: ["O sapo Zé", "A lua", "O lago"],
        correta: 0,
        feedbackAcerto: "🎉 Zé, o sapo!",
        feedbackErro: "Personagem = QUEM age. O texto diz: 'sapo chamado Zé'.",
        ondeEstaNoTexto: "Personagem: um SAPO chamado Zé",
      },
      {
        pergunta: "Qual é o PROBLEMA?",
        opcoes: ["Zé queria voar", "Zé dormia demais", "Zé estava com fome"],
        correta: 0,
        feedbackAcerto: "🎉 Queria voar!",
        feedbackErro: "Problema = o desejo/dificuldade. 'Zé queria VOAR'.",
        ondeEstaNoTexto: "queria VOAR, mas era só um sapo",
      },
      {
        pergunta: "Qual é a SOLUÇÃO?",
        opcoes: [
          "Construiu um foguete de folhas",
          "Pediu ajuda pra chuva",
          "Ficou no lago pra sempre",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Foguete de folhas!",
        feedbackErro: "Solução = como resolveu. 'construiu um FOGUETE de folhas'.",
        ondeEstaNoTexto: "construiu um FOGUETE de folhas",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🧩 Quebra-Cabeça da História",
    instrucao: "Arraste cada peça pro nome certo do plano.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🧩 Quebra-Cabeça da História",
      bloco: {
        instrucao: "Cada peça vai numa parte do plano.",
        itens: [
          { id: "j1", texto: "'A gata voadora'", alvoId: "titulo", imagemUrl: livro },
          { id: "j2", texto: "Uma gata chamada Mimi", alvoId: "personagem", imagemUrl: brilha },
          { id: "j3", texto: "No telhado da casa", alvoId: "lugar", imagemUrl: mapa },
          { id: "j4", texto: "Ela quer voar", alvoId: "problema", imagemUrl: estrela },
        ],
        alvos: [
          { id: "titulo", nome: "📖 Título", descricao: "Nome do livro" },
          { id: "personagem", nome: "👤 Personagem", descricao: "Quem age" },
          { id: "lugar", nome: "📍 Lugar", descricao: "Onde acontece" },
          { id: "problema", nome: "⭐ Problema", descricao: "O que precisa resolver" },
        ],
        feedbackAcerto: "🎉 Plano pronto!",
        feedbackErro: "Título=nome. Personagem=quem. Lugar=onde. Problema=o que precisa resolver.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "📖 Autor PLANEJA antes de escrever.",
      "6 partes: TÍTULO, PERSONAGEM, LUGAR, PROBLEMA, SOLUÇÃO, FINAL.",
      "Sem plano, a história fica perdida.",
    ],
    miniDesafio: {
      pergunta: "O que vem PRIMEIRO?",
      opcoes: ["PLANEJAR", "Publicar", "Ilustrar a capa"],
      correta: 0,
      feedbackAcerto: "🎉 Planejar!",
      feedbackErro: "Primeiro PLANEJAR, depois escrever, revisar, ilustrar e publicar.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — PLANEJAR é…",
        opcoes: ["PENSAR antes de escrever", "Correr", "Dormir"],
        correta: 0,
        feedbackAcerto: "🎉 Pensar antes!",
        feedbackErro: "Planejar = pensar antes de escrever.",
      },
      {
        pergunta: "2/5 — PERSONAGEM é…",
        opcoes: ["QUEM age na história", "O papel", "A capa"],
        correta: 0,
        feedbackAcerto: "🎉 Quem age!",
        feedbackErro: "Personagem = quem aparece e age.",
      },
      {
        pergunta: "3/5 — LUGAR é…",
        opcoes: ["ONDE acontece", "Quem escreve", "O final"],
        correta: 0,
        feedbackAcerto: "🎉 Onde!",
        feedbackErro: "Lugar = onde a história se passa.",
      },
      {
        pergunta: "4/5 — PROBLEMA é…",
        opcoes: ["O que precisa RESOLVER", "O nome", "A cor"],
        correta: 0,
        feedbackAcerto: "🎉 O que resolver!",
        feedbackErro: "Problema = a dificuldade / desejo do personagem.",
      },
      {
        pergunta: "5/5 — FINAL é…",
        opcoes: ["Como TERMINA a história", "O começo", "O meio"],
        correta: 0,
        feedbackAcerto: "🎉 Como termina!",
        feedbackErro: "Final = fim da história.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "📖 Nosso plano de livro",
    materiais: ["Papel", "Lápis de cor"],
    passos: [
      "1) A família conversa: que história a gente inventaria juntos?",
      "2) A criança dita e alguém escreve as 6 partes: título, personagem, lugar, problema, solução, final.",
      "3) A criança guarda o papel — é o PLANO do primeiro livro dela!",
    ],
    registro: "📸 Foto do papel do plano.",
  },

  recompensa: { xp: 200, moedas: 160 },
};

void papel;
void lapis;
void quebra;

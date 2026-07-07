import type { AulaPortuguesV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import pincel from "@/assets/neuro-treino/objetos/pincel.png";
import paleta from "@/assets/neuro-treino/objetos/paleta.png";
import tinta from "@/assets/neuro-treino/objetos/tinta.png";
import quadro from "@/assets/neuro-treino/objetos/quadro.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import gato from "@/assets/neuro-treino/objetos/gato.png";
import sol from "@/assets/neuro-treino/objetos/sol.png";
import chuva from "@/assets/neuro-treino/objetos/chuva.png";

/**
 * Unidade 7 · Aula 4 — Ilustrando e Apresentando
 * Capa, ilustração e apresentação oral do livro.
 * BNCC: EF02LP02 · EF15LP19 · EF02LP24
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-ilustrando-e-apresentando",
  titulo: "Ilustrando e Apresentando",
  iconeTrilha: "🎨",
  bncc: ["EF02LP02", "EF15LP19", "EF02LP24"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O livro fica bonito",
    historia:
      "Brilha pega o texto e diz: — Agora vem a parte MAIS COLORIDA! Todo livro tem CAPA e ILUSTRAÇÕES pra ajudar o leitor a IMAGINAR. Depois, o autor APRESENTA o livro pra galera!",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Pra que servem as ILUSTRAÇÕES?",
    bloco: {
      titulo: "Capa e ilustrações",
      capaImagemUrl: paleta,
      pistas: [
        { imagemUrl: pincel, nome: "🖌️ Pincel" },
        { imagemUrl: paleta, nome: "🎨 Paleta" },
        { imagemUrl: tinta, nome: "🖍️ Tinta" },
      ],
      recado: {
        icone: "🎨",
        rotulo: "O autor também",
        estilo: "papel",
        linhas: [
          "cria a CAPA,",
          "ILUSTRA as páginas",
          "e APRESENTA o livro.",
        ],
      },
      pergunta: "Ilustrações servem pra…",
      hipoteses: [
        { texto: "AJUDAR o leitor a IMAGINAR a história.", imagemUrl: quadro },
        { texto: "Só encher espaço.", imagemUrl: paleta },
        { texto: "Esconder o texto.", imagemUrl: pincel },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Ilustração ajuda a imaginar!",
      feedbackErro: "Ilustrações servem pra AJUDAR o leitor a VER a história.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras do ilustrador.",
    cards: [
      {
        palavra: "capa",
        explicacao: "A PRIMEIRA página do livro. Tem título, autor e um desenho grande.",
        exemplo: "A CAPA do meu livro tem uma gata voadora.",
        imagemUrl: livro,
      },
      {
        palavra: "ilustração",
        explicacao: "DESENHO que acompanha o texto. Mostra o que está acontecendo.",
        exemplo: "A ILUSTRAÇÃO mostra o passarinho no galho.",
        imagemUrl: quadro,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Brilha vai apresentar o livro dela. Escute o modelo.",
    leitura: {
      titulo: "🎤 A apresentação da Brilha",
      imagemUrl: brilha,
      destacar: ["Meu livro", "chama-se", "personagem", "favorita"],
      paragrafos: [
        "🎤 Meu livro CHAMA-SE 'A noz perdida'.",
        "🎤 O PERSONAGEM principal é a Brilha, a esquilinha.",
        "🎤 Minha parte FAVORITA é quando os amigos acham a noz.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Sobre a apresentação:",
    perguntas: [
      {
        pergunta: "O que Brilha fala PRIMEIRO?",
        opcoes: ["O NOME do livro", "A parte favorita", "O final"],
        correta: 0,
        feedbackAcerto: "🎉 O nome!",
        feedbackErro: "'Meu livro chama-se…' — primeiro o NOME.",
        ondeEstaNoTexto: "Meu livro CHAMA-SE 'A noz perdida'",
      },
      {
        pergunta: "Depois ela fala…",
        opcoes: ["Quem é o PERSONAGEM", "A capa", "O preço"],
        correta: 0,
        feedbackAcerto: "🎉 O personagem!",
        feedbackErro: "'O PERSONAGEM principal é…' — depois vem quem age.",
        ondeEstaNoTexto: "O PERSONAGEM principal é a Brilha",
      },
      {
        pergunta: "Por último ela fala…",
        opcoes: [
          "A parte FAVORITA",
          "O nome do autor de outro livro",
          "Nada",
        ],
        correta: 0,
        feedbackAcerto: "🎉 A parte favorita!",
        feedbackErro: "'Minha parte FAVORITA é…' — no fim, o que mais gostou.",
        ondeEstaNoTexto: "Minha parte FAVORITA é",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Escolha a ilustração que combina com cada frase.",
    perguntas: [
      {
        pergunta: "'A gata subiu no telhado num dia de SOL.' Qual ilustração combina?",
        opcoes: ["☀️ Sol brilhando", "☔ Muita chuva", "🌙 Noite escura"],
        correta: 0,
        feedbackAcerto: "🎉 Sol!",
        feedbackErro: "O texto diz 'dia de SOL' — a ilustração combina com sol.",
      },
      {
        pergunta: "'O menino abriu o guarda-chuva PORQUE chovia.' Qual combina?",
        opcoes: ["☔ Chuva caindo", "🌵 Deserto", "❄️ Neve"],
        correta: 0,
        feedbackAcerto: "🎉 Chuva!",
        feedbackErro: "O texto fala em CHUVA — ilustração de chuva combina.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordem da APRESENTAÇÃO do livro.",
    bloco: {
      instrucao: "Do começo até o fim da fala.",
      itens: [
        { id: "a1", texto: "🎤 Meu livro chama-se…", imagemUrl: livro },
        { id: "a2", texto: "👤 O personagem principal é…", imagemUrl: brilha },
        { id: "a3", texto: "💛 Minha parte favorita é…", imagemUrl: coracao },
        { id: "a4", texto: "👏 Muito obrigado(a)!", imagemUrl: estrela },
      ],
      ordemCerta: ["a1", "a2", "a3", "a4"],
      feedbackAcerto: "🎉 Apresentação certinha!",
      feedbackErro: "Nome → personagem → parte favorita → agradecer.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Leia a apresentação de um coleguinha.",
    leitura: {
      titulo: "🎤 O livro do Léo",
      imagemUrl: gato,
      destacar: ["chama-se", "personagem", "favorita"],
      paragrafos: [
        "🎤 Meu livro chama-se 'A gata astronauta'.",
        "🎤 O personagem principal é a gata Estrela.",
        "🎤 Minha parte favorita é quando ela vê a Terra do foguete.",
      ],
    },
    perguntas: [
      {
        pergunta: "Qual o NOME do livro do Léo?",
        opcoes: ["A gata astronauta", "A gata Mimi", "O sapo Zé"],
        correta: 0,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "'Meu livro chama-se A GATA ASTRONAUTA'.",
        ondeEstaNoTexto: "chama-se 'A gata astronauta'",
      },
      {
        pergunta: "Quem é o PERSONAGEM?",
        opcoes: ["A gata Estrela", "Um menino", "Uma flor"],
        correta: 0,
        feedbackAcerto: "🎉 A gata Estrela!",
        feedbackErro: "'O personagem principal é a gata ESTRELA'.",
        ondeEstaNoTexto: "personagem principal é a gata Estrela",
      },
      {
        pergunta: "Qual é a parte FAVORITA?",
        opcoes: [
          "Quando ela vê a Terra do foguete",
          "Quando dorme",
          "Nenhuma",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Do foguete!",
        feedbackErro: "'Minha parte favorita é quando ela vê a Terra do foguete'.",
        ondeEstaNoTexto: "quando ela vê a Terra do foguete",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎨 Estúdio do Ilustrador",
    instrucao: "Escolha a MELHOR ilustração pra cada página.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🎨 Estúdio do Ilustrador",
      bloco: {
        instrucao: "Combine a frase com a ilustração que ajuda o leitor.",
        itens: [
          { id: "i1", texto: "'O sol brilhava forte.'", alvoId: "sol", imagemUrl: sol },
          { id: "i2", texto: "'Choveu a tarde toda.'", alvoId: "chuva", imagemUrl: chuva },
          { id: "i3", texto: "'A gata pulou no muro.'", alvoId: "gato", imagemUrl: gato },
          { id: "i4", texto: "'Ele ficou muito feliz!'", alvoId: "coracao", imagemUrl: coracao },
        ],
        alvos: [
          { id: "sol", nome: "☀️ Sol", imagemUrl: sol },
          { id: "chuva", nome: "☔ Chuva", imagemUrl: chuva },
          { id: "gato", nome: "🐱 Gata", imagemUrl: gato },
          { id: "coracao", nome: "💛 Alegria", imagemUrl: coracao },
        ],
        feedbackAcerto: "🎉 Ilustrações no capricho!",
        feedbackErro: "A ilustração combina com o que a frase mostra: sol→sol, chuva→chuva…",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "🎨 A CAPA tem título, autor e desenho grande.",
      "🖍️ A ILUSTRAÇÃO combina com o texto.",
      "🎤 Apresentar: nome do livro → personagem → parte favorita.",
    ],
    miniDesafio: {
      pergunta: "Na apresentação, começo dizendo…",
      opcoes: [
        "'Meu livro chama-se…'",
        "'Tchau'",
        "'Fim'",
      ],
      correta: 0,
      feedbackAcerto: "🎉 Primeiro o NOME!",
      feedbackErro: "Comece falando o NOME do livro.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — CAPA é…",
        opcoes: ["A PRIMEIRA página com título e desenho", "A última", "O meio"],
        correta: 0,
        feedbackAcerto: "🎉 Primeira página!",
        feedbackErro: "CAPA = primeira página do livro.",
      },
      {
        pergunta: "2/5 — ILUSTRAÇÃO serve pra…",
        opcoes: ["AJUDAR o leitor a imaginar", "Confundir", "Esconder"],
        correta: 0,
        feedbackAcerto: "🎉 Ajudar a imaginar!",
        feedbackErro: "Ilustração ajuda o leitor a VER a história.",
      },
      {
        pergunta: "3/5 — Na apresentação começo com…",
        opcoes: ["O NOME do livro", "O final", "Nada"],
        correta: 0,
        feedbackAcerto: "🎉 O nome!",
        feedbackErro: "'Meu livro chama-se…' vem PRIMEIRO.",
      },
      {
        pergunta: "4/5 — Depois falo do…",
        opcoes: ["PERSONAGEM principal", "Preço", "Ônibus"],
        correta: 0,
        feedbackAcerto: "🎉 Do personagem!",
        feedbackErro: "Depois do nome, fala QUEM é o personagem principal.",
      },
      {
        pergunta: "5/5 — No fim falo da minha…",
        opcoes: ["Parte FAVORITA", "Idade dos pais", "Cor da parede"],
        correta: 0,
        feedbackAcerto: "🎉 Parte favorita!",
        feedbackErro: "No fim: 'Minha parte favorita é…'.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎨 Capa e ensaio",
    materiais: ["Papel grande", "Lápis de cor", "Tinta ou giz"],
    passos: [
      "1) A criança DESENHA a capa do livro (título + autor + desenho grande).",
      "2) Faz 1 ILUSTRAÇÃO pra cena favorita.",
      "3) ENSAIA a apresentação com a família: 'Meu livro chama-se… / O personagem é… / Minha parte favorita é…'.",
    ],
    registro: "📸 Foto da CAPA e vídeo curto do ensaio.",
  },

  recompensa: { xp: 200, moedas: 160 },
};

void tinta;
void balao;

import type { AulaPortuguesV4 } from "../../types";
import bibliotecaria from "@/assets/neuro-treino/objetos/bibliotecario.png";
import coelho from "@/assets/neuro-treino/objetos/coelho.png";
import lua from "@/assets/neuro-treino/objetos/lua.png";
import noite from "@/assets/neuro-treino/objetos/noite.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import nuvem from "@/assets/neuro-treino/objetos/nuvem.png";
import arvore from "@/assets/neuro-treino/objetos/arvore.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import passaro from "@/assets/neuro-treino/objetos/passaro.png";

/**
 * Aula 3 — O Coelho e a Lua
 * -------------------------------------------------------------
 * Terceira missão da Unidade 1. Aurora abre um livro com um
 * DIÁLOGO: um coelho conversa com a lua. A criança aprende que
 * o TRAVESSÃO (—) mostra QUEM está falando.
 *
 * Foco pedagógico:
 *  - Identificar QUEM fala cada frase (marcador: travessão).
 *  - Diferenciar narrador (conta) e personagem (fala).
 *  - Continuar rotina previsão → vocabulário → leitura.
 *
 * BNCC: EF02LP01 · EF02LP03 · EF02LP28
 */
export const aula03: AulaPortuguesV4 = {
  slug: "aula-03-coelho-lua",
  titulo: "O Coelho e a Lua",
  iconeTrilha: "🌙",
  bncc: ["EF02LP01", "EF02LP03", "EF02LP28"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Um livro que fala de noite",
    historia:
      "Já são DOIS livros despertados! Aurora tira o terceiro da estante. — Esse aqui só acorda quando alguém lê no escuro, ela diz sorrindo. Piu apaga a luz com a asa. O livro tem um coelho e a lua na capa. Vamos ler?",
    imagemUrl: bibliotecaria,
  },

  momento02_previsao: {
    instrucao: "Olhe o título e as pistas. Sobre o que essa história vai falar?",
    bloco: {
      titulo: "O Coelho e a Lua",
      capaImagemUrl: lua,
      pistas: [
        { imagemUrl: coelho, nome: "Um coelho" },
        { imagemUrl: lua, nome: "A lua" },
        { imagemUrl: noite, nome: "A noite" },
      ],
      pergunta: "Antes de ler: o que pode acontecer na história?",
      hipoteses: [
        { texto: "Um coelho que conversa com a lua à noite.", imagemUrl: coelho },
        { texto: "Um passarinho que pousa na janela.", imagemUrl: passaro },
        { texto: "Uma semente que vira girassol.", imagemUrl: arvore },
      ],
      respostaCerta: 0,
      feedbackAcerto:
        "🎉 Isso! Pelo TÍTULO e pelas PISTAS, a história é sobre o coelho e a lua conversando.",
      feedbackErro:
        "O título é 'O Coelho e a Lua'. As pistas são coelho, lua e noite. Combina com a primeira opção.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras importantes pra entender essa história.",
    cards: [
      {
        palavra: "travessão",
        explicacao:
          "É esse tracinho comprido: —. Ele aparece antes das FALAS dos personagens. Serve pra mostrar QUEM está falando.",
        exemplo: "— Oi, lua! disse o coelho.  (o travessão mostra que quem fala é o coelho).",
        imagemUrl: livro,
      },
      {
        palavra: "brilhar",
        explicacao: "É soltar luz. A lua brilha. A estrela brilha. Um vaga-lume brilha.",
        exemplo: "A lua brilha no céu escuro.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Preste atenção nos TRAVESSÕES (—). Cada travessão mostra alguém FALANDO.",
    leitura: {
      titulo: "O Coelho e a Lua",
      imagemUrl: coelho,
      legendaImagem: "O coelho e a lua conversando",
      destacar: ["coelho", "lua", "brilha"],
      paragrafos: [
        "Era noite. O coelho olhou pro céu e viu a lua bem grande.",
        "— Oi, lua! Por que você brilha tanto? perguntou o coelho.",
        "— Eu brilho pra você não ter medo do escuro, respondeu a lua.",
        "O coelho sorriu, deitou na grama e ficou olhando a lua até dormir.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no texto se precisar. As respostas estão TODAS lá.",
    perguntas: [
      {
        pergunta: "Em que hora do dia acontece a história?",
        opcoes: ["De manhã", "De tarde", "De noite"],
        correta: 2,
        feedbackAcerto: "🎉 Isso! A primeira palavra do texto é 'Era NOITE'.",
        feedbackErro: "Olhe a primeira frase. Começa com 'Era …'.",
        ondeEstaNoTexto: "Era noite.",
      },
      {
        pergunta: "Quem pergunta 'Por que você brilha tanto?'",
        opcoes: ["A lua", "O coelho", "Aurora"],
        correta: 1,
        feedbackAcerto:
          "🎉 Certo! Depois da fala aparece 'perguntou o COELHO'. Isso mostra quem falou.",
        feedbackErro:
          "Olhe DEPOIS da fala com travessão. Está escrito 'perguntou o …' — quem foi?",
        ondeEstaNoTexto: "— Oi, lua! … perguntou o coelho.",
      },
      {
        pergunta: "Por que a lua brilha, segundo ela mesma?",
        opcoes: [
          "Pra iluminar as flores",
          "Pra o coelho não ter medo do escuro",
          "Pra o passarinho voar",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Boa! 'Pra você não ter medo do escuro'.",
        feedbackErro:
          "Está na fala da LUA (o segundo travessão). Ela diz pra que serve o brilho dela.",
        ondeEstaNoTexto: "— Eu brilho pra você não ter medo do escuro…",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao:
      "O TRAVESSÃO (—) mostra quem FALA. Vamos treinar: quem disse cada frase?",
    perguntas: [
      {
        pergunta: "Quem disse: '— Oi, lua! Por que você brilha tanto?'",
        opcoes: ["A lua", "O coelho", "O narrador"],
        correta: 1,
        feedbackAcerto:
          "🎉 Isso! Logo depois da fala aparece 'perguntou o COELHO'.",
        feedbackErro:
          "Depois da fala, o texto diz 'perguntou o …'. Essa palavra revela quem falou.",
      },
      {
        pergunta: "Quem disse: '— Eu brilho pra você não ter medo do escuro'?",
        opcoes: ["O coelho", "A lua", "Piu, o passarinho"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! 'Respondeu a LUA'.",
        feedbackErro:
          "Depois da fala está escrito 'respondeu a …'. Quem foi?",
      },
      {
        pergunta: "Onde acontece essa história?",
        opcoes: ["Debaixo do céu, com a grama", "Dentro de uma casa", "Na escola"],
        correta: 0,
        feedbackAcerto: "🎉 Boa! Ele deita na GRAMA e olha o CÉU.",
        feedbackErro:
          "No último parágrafo o coelho 'deitou na GRAMA' e ficou olhando a LUA. É lá fora.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Coloque a história em ordem: começo → meio → fim.",
    bloco: {
      instrucao: "O que aconteceu primeiro?",
      itens: [
        { id: "p1", texto: "O coelho olha pro céu e vê a lua bem grande.", imagemUrl: coelho },
        { id: "p2", texto: "O coelho e a lua conversam sobre o brilho.", imagemUrl: lua },
        { id: "p3", texto: "O coelho deita na grama e dorme olhando a lua.", imagemUrl: noite },
      ],
      ordemCerta: ["p1", "p2", "p3"],
      feedbackAcerto: "🎉 Perfeito! Olhar → conversar → dormir.",
      feedbackErro:
        "Primeiro ele VÊ a lua. Depois eles CONVERSAM. Só no fim ele DORME.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho. Preste atenção em QUEM fala.",
    leitura: {
      titulo: "A estrela puxa conversa",
      imagemUrl: estrela,
      destacar: ["estrela", "coelho"],
      paragrafos: [
        "No dia seguinte, uma estrela também apareceu.",
        "— Oi, coelho! Eu também brilho pra você, disse a estrela.",
        "— Que legal! Agora tenho DUAS amigas no céu, respondeu o coelho.",
      ],
    },
    perguntas: [
      {
        pergunta: "Quem começou a conversa dessa vez?",
        opcoes: ["A lua", "A estrela", "Uma nuvem"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A ESTRELA falou primeiro.",
        feedbackErro:
          "A primeira fala termina com 'disse a …'. Quem foi?",
        ondeEstaNoTexto: "— Oi, coelho! … disse a estrela.",
      },
      {
        pergunta: "Quantas amigas o coelho tem no céu agora?",
        opcoes: ["Uma", "Duas", "Três"],
        correta: 1,
        feedbackAcerto: "🎉 DUAS: a lua e a estrela!",
        feedbackErro: "A última fala do coelho diz o número: 'tenho … amigas'.",
        ondeEstaNoTexto: "Agora tenho duas amigas no céu…",
      },
    ],
  },

  momento09_revisao: {
    pontos: [
      "O TRAVESSÃO (—) mostra QUEM está falando na história.",
      "Depois da fala, o texto quase sempre diz 'disse o …', 'respondeu a …' — é uma DICA de quem falou.",
      "O narrador CONTA. Os personagens FALAM.",
      "Toda história tem tempo (quando), lugar (onde) e personagens (quem).",
    ],
    miniDesafio: {
      pergunta: "Pra descobrir QUEM falou uma frase, a gente…",
      opcoes: [
        "Adivinha",
        "Olha DEPOIS da fala pra ver 'disse o …' ou 'respondeu a …'",
        "Pula pra próxima página",
      ],
      correta: 1,
      feedbackAcerto:
        "🎉 Certo! A palavra depois do 'disse' ou 'respondeu' mostra quem falou.",
      feedbackErro:
        "Adivinhar dá errado. A gente OLHA depois da fala pra achar 'disse o …'.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Pra que serve o travessão (—) em uma história?",
        opcoes: [
          "Pra marcar o fim do livro",
          "Pra mostrar que alguém está FALANDO",
          "Pra separar as figuras",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Isso!",
        feedbackErro: "O travessão aparece antes de uma FALA de personagem.",
      },
      {
        pergunta: "2/5 — Em que hora acontecia a história do coelho e da lua?",
        opcoes: ["De manhã", "À tarde", "De noite"],
        correta: 2,
        feedbackAcerto: "🎉 De NOITE!",
        feedbackErro: "A primeira frase é 'Era NOITE'.",
      },
      {
        pergunta: "3/5 — Por que a lua brilha, segundo ela?",
        opcoes: [
          "Pra o coelho não ter medo do escuro",
          "Pra acordar as flores",
          "Porque estava com preguiça",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Boa!",
        feedbackErro: "A lua diz: 'Eu brilho pra você não ter medo do escuro'.",
      },
      {
        pergunta: "4/5 — Quem disse '— Oi, coelho! Eu também brilho pra você'?",
        opcoes: ["A lua", "A estrela", "O passarinho Piu"],
        correta: 1,
        feedbackAcerto: "🎉 A ESTRELA!",
        feedbackErro: "Depois da fala: 'disse a ESTRELA'. É a dica de quem falou.",
      },
      {
        pergunta: "5/5 — 'Brilhar' quer dizer…",
        opcoes: ["Ficar escuro", "Soltar luz", "Fazer barulho"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! Livro despertado! 🌙",
        feedbackErro: "Brilhar = soltar LUZ. A lua brilha, a estrela brilha.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🌙 Uma conversa antes de dormir",
    materiais: ["Só vocês dois — de preferência com a luz apagada e a janela aberta."],
    passos: [
      "1) Antes de dormir, olhem a janela juntos. Tem lua? Tem estrela?",
      "2) A criança inventa UMA pergunta pra lua (ou pra estrela, ou pra nuvem).",
      "3) O adulto responde FINGINDO ser a lua — usando travessão na voz: '— Eu…'",
      "4) Depois trocam: agora a criança é a lua e o adulto pergunta.",
      "5) Conversem: quando a gente inventa uma fala, quem está falando?",
    ],
    registro: "🗣️ Um áudio curto com a pergunta que a criança fez pra lua.",
  },

  recompensa: { xp: 100, moedas: 60 },
};

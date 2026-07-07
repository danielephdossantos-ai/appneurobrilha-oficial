import type { AulaPortuguesV4 } from "../../types";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import bibliotecario from "@/assets/neuro-treino/objetos/bibliotecario.png";
import livros from "@/assets/neuro-treino/objetos/livros.png";
import livro from "@/assets/neuro-treino/objetos/livro.png";
import estrela from "@/assets/neuro-treino/objetos/estrela-brilhante.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import balao from "@/assets/neuro-treino/objetos/balao.png";
import lupa from "@/assets/neuro-treino/objetos/binoculo.png";
import setaDir from "@/assets/neuro-treino/objetos/seta-direita.png";
import menina from "@/assets/neuro-treino/objetos/menina.png";
import menino from "@/assets/neuro-treino/objetos/menino.png";
import cachorro from "@/assets/neuro-treino/objetos/cachorro.png";

/**
 * Unidade 6 · Aula 5 — Formatura na Academia
 * Missão FINAL integradora + avaliação do curso.
 * BNCC: EF02LP26 · EF02LP27 · EF02LP28
 */
export const aula05: AulaPortuguesV4 = {
  slug: "aula-05-formatura-na-academia",
  titulo: "Formatura na Academia",
  iconeTrilha: "🎓",
  bncc: ["EF02LP26", "EF02LP27", "EF02LP28"],
  duracaoMin: 20,

  momento01_motivacao: {
    titulo: "O dia da formatura",
    historia:
      "Brilha chega vestida de FORMANDA. O bibliotecário sorri: — Você aprendeu tudo. Achou PISTAS, escutou o TOM, ligou CAUSA e RESULTADO, deu PALPITES com motivo. Só falta a MISSÃO FINAL pra virar Grande Leitora!",
    imagemUrl: bibliotecario,
  },

  momento02_previsao: {
    instrucao: "Olha as 4 medalhas que Brilha ganhou. O que elas ensinam?",
    bloco: {
      titulo: "As 4 medalhas do leitor",
      capaImagemUrl: estrela,
      pistas: [
        { imagemUrl: lupa, nome: "🔍 Pistas" },
        { imagemUrl: balao, nome: "🎭 Tom" },
        { imagemUrl: setaDir, nome: "🧩 Causa/Resultado" },
        { imagemUrl: coracao, nome: "💭 Palpite" },
      ],
      recado: {
        icone: "🎓",
        rotulo: "Missão final",
        estilo: "papel",
        linhas: [
          "Use as 4 medalhas",
          "pra ler UMA história inteira",
          "como Grande Leitor(a)!",
        ],
      },
      pergunta: "O que um GRANDE LEITOR faz?",
      hipoteses: [
        {
          texto: "Acha pistas, sente o tom, liga causa/resultado e dá palpite com motivo.",
          imagemUrl: estrela,
        },
        { texto: "Só olha as figuras.", imagemUrl: livros },
        { texto: "Só decora as letras.", imagemUrl: livro },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 As 4 medalhas juntas!",
      feedbackErro: "Grande leitor usa TUDO: pistas + tom + causa/resultado + palpite.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras da formatura.",
    cards: [
      {
        palavra: "leitor",
        explicacao:
          "Quem lê PENSANDO — busca pistas, sente o tom, liga ideias e dá palpite.",
        exemplo: "Eu sou LEITOR quando entendo a história inteira.",
        imagemUrl: livro,
      },
      {
        palavra: "biblioteca",
        explicacao:
          "É a casa dos livros. Cada livro é uma história esperando um leitor.",
        exemplo: "A BIBLIOTECA está cheia de amigos de papel.",
        imagemUrl: livros,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia junto com Brilha a história da FORMATURA.",
    leitura: {
      titulo: "O melhor dia da Bia",
      imagemUrl: brilha,
      destacar: ["chuva", "encontrou", "abraço", "!"],
      paragrafos: [
        "Bia acordou triste PORQUE ia chover no dia da festa.",
        "A festa foi cancelada… ENTÃO Bia foi passear na rua.",
        "Na esquina, ENCONTROU um cachorrinho perdido, todo molhado.",
        "Levou pra casa, secou e cuidou. O dono apareceu e deu um ABRAÇO enorme.",
        "'Que dia lindo!' — Bia sorriu de orelha a orelha.",
      ],
    },
  },

  momento05_compreensao: {
    instrucao: "Use as 4 medalhas: pistas, tom, causa, palpite.",
    perguntas: [
      {
        pergunta: "🔍 Sem o texto dizer com essas palavras, Bia AJUDOU o cachorro?",
        opcoes: ["SIM, as pistas mostram", "Não"],
        correta: 0,
        feedbackAcerto: "🎉 As pistas mostram: secou, cuidou.",
        feedbackErro: "Pistas: 'secou', 'cuidou' → AJUDOU.",
      },
      {
        pergunta: "🎭 'Que dia lindo!' — tom da Bia é…",
        opcoes: ["Triste", "ANIMADO / feliz", "Bravo"],
        correta: 1,
        feedbackAcerto: "🎉 Animado!",
        feedbackErro: "'!' + 'lindo' = tom ANIMADO.",
      },
      {
        pergunta: "🧩 Por que a festa foi cancelada?",
        opcoes: [
          "PORQUE ia chover",
          "Porque acabou o bolo",
          "Porque ninguém foi",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Chuva → cancelou.",
        feedbackErro: "PORQUE ia chover, a festa foi cancelada.",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Fecha com palpite de leitor.",
    perguntas: [
      {
        pergunta: "💭 Qual palpite com MOTIVO combina com a Bia?",
        opcoes: [
          "Bia é gentil PORQUE cuidou do cachorro perdido",
          "Bia é chata",
          "Não gosto dela",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Palpite com motivo do texto!",
        feedbackErro: "Bom palpite tem PORQUÊ ligado a algo que aconteceu.",
      },
      {
        pergunta: "O dia ficou LINDO pra Bia PORQUE…",
        opcoes: [
          "ela ajudou e viu o abraço do dono",
          "parou de chover",
          "ganhou um bolo",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Ajudou e viu o abraço!",
        feedbackErro: "A pista do 'dia lindo' é a AJUDA e o ABRAÇO no final.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Ordene os passos do GRANDE LEITOR.",
    bloco: {
      instrucao: "Do começo (ler) até o fim (palpite).",
      itens: [
        { id: "g1", texto: "LER a história.", imagemUrl: livro },
        { id: "g2", texto: "🔍 Achar PISTAS.", imagemUrl: lupa },
        { id: "g3", texto: "🎭 Sentir o TOM.", imagemUrl: balao },
        { id: "g4", texto: "🧩 Ligar CAUSA e RESULTADO.", imagemUrl: setaDir },
        { id: "g5", texto: "💭 Dar PALPITE com motivo.", imagemUrl: coracao },
      ],
      ordemCerta: ["g1", "g2", "g3", "g4", "g5"],
      feedbackAcerto: "🎉 Passo a passo do Grande Leitor!",
      feedbackErro: "Ler → pistas → tom → causa/resultado → palpite.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Missão final: você lê SOZINHO e responde tudo.",
    leitura: {
      titulo: "O time do recreio",
      imagemUrl: menino,
      destacar: ["sozinho", "chamou", "riu"],
      paragrafos: [
        "Léo era novo na escola e ficou SOZINHO no recreio.",
        "Ana viu e CHAMOU Léo pro time de futebol.",
        "Léo fez um gol! Todos ABRAÇARAM ele.",
        "No fim, Léo RIU pela primeira vez na escola.",
      ],
    },
    perguntas: [
      {
        pergunta: "🔍 Léo se sentia BEM antes? (pistas)",
        opcoes: ["Sim", "NÃO — estava sozinho"],
        correta: 1,
        feedbackAcerto: "🎉 Estava sozinho!",
        feedbackErro: "'sozinho' é PISTA de que não estava bem.",
        ondeEstaNoTexto: "Léo era novo… ficou SOZINHO no recreio",
      },
      {
        pergunta: "🧩 Por que Léo RIU no final?",
        opcoes: [
          "PORQUE foi aceito no time e fez gol",
          "Porque estava com sono",
          "Porque perdeu o lanche",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Foi aceito e fez gol!",
        feedbackErro: "Foi aceito (Ana chamou) + fez gol → riu.",
        ondeEstaNoTexto: "chamou Léo pro time / fez um gol / abraçaram",
      },
      {
        pergunta: "💭 Palpite com motivo sobre a Ana:",
        opcoes: [
          "Ana é gentil PORQUE chamou o Léo pro time",
          "Ana é chata",
          "Sei lá",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Palpite com motivo do texto!",
        feedbackErro: "Motivo do texto: Ana CHAMOU Léo pro time.",
        ondeEstaNoTexto: "Ana viu e CHAMOU Léo",
      },
    ],
  },

  momento_minijogo: {
    titulo: "🎓 Prova de Formatura",
    instrucao: "Arraste cada FRASE pra medalha que ela representa.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "🎓 Prova de Formatura",
      bloco: {
        instrucao: "Cada frase usa UMA medalha.",
        itens: [
          {
            id: "m1",
            texto: "'Roupa molhada' = choveu.",
            alvoId: "pistas",
            imagemUrl: lupa,
          },
          {
            id: "m2",
            texto: "'Que dia lindo!' → animado",
            alvoId: "tom",
            imagemUrl: balao,
          },
          {
            id: "m3",
            texto: "Choveu → cancelou a festa",
            alvoId: "causa",
            imagemUrl: setaDir,
          },
          {
            id: "m4",
            texto: "Gostei PORQUE ajudou o cão",
            alvoId: "palpite",
            imagemUrl: coracao,
          },
        ],
        alvos: [
          { id: "pistas", nome: "🔍 Pistas", descricao: "Descobrir sem o texto dizer" },
          { id: "tom", nome: "🎭 Tom", descricao: "A voz do texto" },
          { id: "causa", nome: "🧩 Causa/Resultado", descricao: "PORQUE → ENTÃO" },
          { id: "palpite", nome: "💭 Palpite", descricao: "Opinião com motivo" },
        ],
        feedbackAcerto: "🎉 FORMADO(A) em Grande Leitor(a)!",
        feedbackErro:
          "Pistas → descobrir. Tom → voz. Causa/Resultado → porque/então. Palpite → opinião com motivo.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "🔍 PISTAS: descubro o que o texto não disse.",
      "🎭 TOM: sinto a voz (! ? …).",
      "🧩 CAUSA e RESULTADO: PORQUE ↔ ENTÃO.",
      "💭 PALPITE: opinião com PORQUÊ do texto.",
    ],
    miniDesafio: {
      pergunta: "Um Grande Leitor SEMPRE…",
      opcoes: [
        "usa pistas, tom, causa e palpite",
        "só olha figuras",
        "não gosta de ler",
      ],
      correta: 0,
      feedbackAcerto: "🎉 As 4 medalhas juntas!",
      feedbackErro: "Grande leitor usa as 4: pistas, tom, causa/resultado, palpite.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — 🔍 Pistas servem pra…",
        opcoes: ["DESCOBRIR o que o texto não disse", "Cantar", "Correr"],
        correta: 0,
        feedbackAcerto: "🎉 Descobrir!",
        feedbackErro: "Pistas = dicas pra DESCOBRIR.",
      },
      {
        pergunta: "2/5 — 🎭 '!' dá tom de…",
        opcoes: ["Sono", "ANIMAÇÃO", "Fome"],
        correta: 1,
        feedbackAcerto: "🎉 Animação!",
        feedbackErro: "'!' = animação, emoção forte.",
      },
      {
        pergunta: "3/5 — 🧩 'PORQUE' mostra…",
        opcoes: ["A CAUSA", "O nome", "O título"],
        correta: 0,
        feedbackAcerto: "🎉 A causa!",
        feedbackErro: "PORQUE = motivo, CAUSA.",
      },
      {
        pergunta: "4/5 — 💭 Palpite bom tem…",
        opcoes: ["MOTIVO do texto", "Chute", "Nenhuma pista"],
        correta: 0,
        feedbackAcerto: "🎉 Motivo do texto!",
        feedbackErro: "Palpite bom = OPINIÃO + PORQUÊ do texto.",
      },
      {
        pergunta: "5/5 — Um GRANDE LEITOR usa…",
        opcoes: [
          "as 4 medalhas juntas",
          "só uma",
          "nenhuma",
        ],
        correta: 0,
        feedbackAcerto: "🎉 As 4 juntas!",
        feedbackErro: "Grande leitor usa PISTAS + TOM + CAUSA/RESULTADO + PALPITE.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🎓 Diploma de Grande Leitor",
    materiais: ["Um livrinho favorito", "Papel e lápis"],
    passos: [
      "1) A criança lê (ou escuta) um livrinho.",
      "2) Fala: 🔍 UMA pista, 🎭 o tom, 🧩 UM porque/então, 💭 seu palpite.",
      "3) A família faz um DIPLOMA em papel: 'Grande Leitor(a) da Biblioteca Encantada'.",
    ],
    registro: "📸 Foto da criança com o diploma feito à mão.",
  },

  recompensa: { xp: 250, moedas: 200 },
};

void livros;
void menina;
void cachorro;
void estrela;

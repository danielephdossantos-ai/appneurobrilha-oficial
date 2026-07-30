import type { AulaPortuguesV4 } from "../../types";
import { url as brilha } from "@/assets/neuro-treino/objetos/esquilo-brilha.png.asset.json";
import { url as sol } from "@/assets/neuro-treino/objetos/sol.png.asset.json";
import { url as flor } from "@/assets/neuro-treino/objetos/flor.png.asset.json";
import { url as gato } from "@/assets/neuro-treino/objetos/gato.png.asset.json";
import { url as pato } from "@/assets/neuro-treino/objetos/pato.png.asset.json";
import { url as estrela } from "@/assets/neuro-treino/objetos/estrela-brilhante.png.asset.json";
import { url as livro } from "@/assets/neuro-treino/objetos/livro.png.asset.json";
import { url as coracao } from "@/assets/neuro-treino/objetos/coracao.png.asset.json";

/**
 * Aula 4 — Meu Poeminha
 * -------------------------------------------------------------
 * Fecho do curso do 1º ano. A criança usa tudo que aprendeu
 * (letra → sílaba → palavra → frase → rima) para produzir
 * um poeminha de dois versos que rimam.
 *
 * BNCC: EF01LP09 · EF01LP10 · EF12LP18 · EF15LP05
 */
export const aula04: AulaPortuguesV4 = {
  slug: "aula-04-meu-poeminha",
  titulo: "Meu Poeminha",
  iconeTrilha: "🪶",
  bncc: ["EF01LP09", "EF01LP10", "EF12LP18", "EF15LP05"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Brilha vira poeta",
    historia:
      "Aurora entrega a Brilha uma pena dourada. — Você já conhece as letras, as sílabas, as frases e as rimas. Agora falta a última chave: ESCREVER o seu próprio poeminha! Brilha respira fundo, pensa numa palavra… e a pena começa a brilhar.",
    imagemUrl: brilha,
  },

  momento02_previsao: {
    instrucao: "Olhe as pistas do poeminha que Brilha vai escrever.",
    bloco: {
      titulo: "O Sol e a Flor",
      capaImagemUrl: sol,
      pistas: [
        { imagemUrl: sol, nome: "O sol" },
        { imagemUrl: flor, nome: "Uma flor" },
      ],
      recado: {
        icone: "🪶",
        rotulo: "Dica da Aurora",
        estilo: "papel",
        linhas: ["Poeminha tem VERSOS.", "Os versos terminam", "com sons que RIMAM."],
      },
      pergunta: "Sobre o que o poeminha de Brilha vai falar?",
      hipoteses: [
        { texto: "Sobre o sol e a flor.", imagemUrl: flor },
        { texto: "Sobre um foguete perdido.", imagemUrl: estrela },
        { texto: "Sobre um gato dormindo.", imagemUrl: gato },
      ],
      respostaCerta: 0,
      feedbackAcerto: "🎉 Isso! As pistas mostram o SOL e a FLOR.",
      feedbackErro: "Olhe de novo as pistas: aparece um sol e uma flor.",
    },
  },

  momento03_vocabulario: {
    instrucao: "Duas palavras de poeta:",
    cards: [
      {
        palavra: "verso",
        explicacao: "É cada LINHA do poeminha. Um poeminha pequeno pode ter só dois versos.",
        exemplo: "'O sol saiu' é um verso. 'A flor abriu' é outro verso.",
        imagemUrl: livro,
      },
      {
        palavra: "rima",
        explicacao: "É quando o FIM de dois versos tem o mesmo som.",
        exemplo: "saIU e abrIU terminam com o mesmo som: IU.",
        imagemUrl: estrela,
      },
    ],
  },

  momento04_leituraGuiada: {
    instrucao: "Leia com Aurora, bem devagar. Escute o fim de cada verso.",
    leitura: {
      titulo: "O Sol e a Flor",
      imagemUrl: sol,
      legendaImagem: "O sol acorda e a flor abre",
      destacar: ["saiu", "abriu"],
      paragrafos: ["O sol de manhã saiu.", "E a florzinha abriu."],
    },
  },

  momento05_compreensao: {
    instrucao: "Volte no poeminha se precisar.",
    perguntas: [
      {
        pergunta: "Quantos versos tem esse poeminha?",
        opcoes: ["Um verso", "Dois versos", "Dez versos"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! São duas linhas, ou seja, dois versos.",
        feedbackErro: "Conte as LINHAS do poeminha: são duas.",
        ondeEstaNoTexto: "O sol de manhã saiu. / E a florzinha abriu.",
      },
      {
        pergunta: "Quais palavras rimam no poeminha?",
        opcoes: ["sol e flor", "saiu e abriu", "manhã e sol"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! saIU e abrIU terminam com o mesmo som.",
        feedbackErro: "Escute o FIM de cada verso: sa-IU… abr-IU. Esse é o som que se repete.",
        ondeEstaNoTexto: "saiu / abriu",
      },
    ],
  },

  momento06_personagensCenario: {
    instrucao: "Vamos pensar no poeminha.",
    perguntas: [
      {
        pergunta: "O poeminha fala de que hora do dia?",
        opcoes: ["De manhã", "De madrugada", "À meia-noite"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Está escrito: 'O sol de manhã saiu'.",
        feedbackErro: "Releia o primeiro verso: aparece a palavra 'manhã'.",
      },
      {
        pergunta: "O que a florzinha fez quando o sol saiu?",
        opcoes: ["Fechou", "Abriu", "Foi embora"],
        correta: 1,
        feedbackAcerto: "🎉 Certo! Ela ABRIU.",
        feedbackErro: "O segundo verso diz: 'E a florzinha abriu'.",
      },
    ],
  },

  momento07_sequencia: {
    instrucao: "Os versos se misturaram. Coloque na ordem certa.",
    bloco: {
      instrucao: "Primeiro o sol, depois a flor.",
      itens: [
        { id: "v1", texto: "O sol de manhã saiu.", imagemUrl: sol },
        { id: "v2", texto: "E a florzinha abriu.", imagemUrl: flor },
      ],
      ordemCerta: ["v1", "v2"],
      feedbackAcerto: "🎉 Perfeito! O sol sai primeiro e a flor abre depois.",
      feedbackErro: "Pense na ordem: o sol aparece e AÍ a flor abre.",
    },
  },

  momento08_leituraIndependente: {
    instrucao: "Agora leia sozinho outro poeminha.",
    leitura: {
      titulo: "O Gato e o Pato",
      imagemUrl: gato,
      destacar: ["gato", "sapato", "pato", "mato"],
      paragrafos: ["O gato perdeu o sapato.", "Achou com o pato no mato."],
    },
    perguntas: [
      {
        pergunta: "Quais palavras rimam nesse poeminha?",
        opcoes: ["gato e pato", "sapato e mato", "perdeu e achou"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! sapATO e mATO terminam com o mesmo som — e estão no fim dos versos.",
        feedbackErro: "A rima fica no FIM de cada verso: sapATO… mATO.",
        ondeEstaNoTexto: "o sapato. / no mato.",
      },
    ],
  },

  momento_minijogo: {
    titulo: "Fábrica de Rimas",
    instrucao: "Arraste cada palavra até a que rima com ela.",
    jogo: {
      tipo: "arrastarParaAlvo",
      titulo: "Quem rima com quem?",
      bloco: {
        instrucao: "Escute o FIM de cada palavra.",
        itens: [
          { id: "flor", texto: "FLOR", imagemUrl: flor, alvoId: "rimaOR" },
          { id: "amor", texto: "AMOR", imagemUrl: coracao, alvoId: "rimaOR" },
          { id: "gato", texto: "GATO", imagemUrl: gato, alvoId: "rimaATO" },
          { id: "pato", texto: "PATO", imagemUrl: pato, alvoId: "rimaATO" },
        ],
        alvos: [
          { id: "rimaOR", nome: "Rima com OR", imagemUrl: flor, descricao: "Termina com o som OR" },
          { id: "rimaATO", nome: "Rima com ATO", imagemUrl: gato, descricao: "Termina com o som ATO" },
        ],
        feedbackAcerto: "🎉 Isso! Você separou as rimas certinho.",
        feedbackErro: "Escute o FINAL: flOR e amOR terminam igual; gATO e pATO também.",
      },
    },
  },

  momento09_revisao: {
    pontos: [
      "POEMINHA é feito de VERSOS — cada linha é um verso.",
      "Os versos combinam quando o FIM deles RIMA.",
      "Para criar um poeminha: escolha duas palavras que rimam e monte uma frase terminando em cada uma.",
    ],
    miniDesafio: {
      pergunta: "Para terminar o verso 'Eu ganhei um balão…', qual palavra rima melhor?",
      opcoes: ["…de coração.", "…de papel.", "…azulzinho."],
      correta: 0,
      feedbackAcerto: "🎉 Isso! balÃO e coraçÃO rimam.",
      feedbackErro: "Procure a palavra que termina com o mesmo som de balÃO.",
    },
  },

  momento10_avaliacao: {
    perguntas: [
      {
        pergunta: "1/5 — Cada linha de um poeminha se chama…",
        opcoes: ["Verso", "Estrofe", "Título", "Página"],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Cada linha é um verso.",
        feedbackErro: "Estrofe é o grupinho de linhas. Cada LINHA sozinha é um VERSO.",
      },
      {
        pergunta: "2/5 — Duas palavras RIMAM quando…",
        opcoes: [
          "Começam com a mesma letra",
          "Terminam com o mesmo som",
          "Têm o mesmo tamanho",
          "Falam do mesmo assunto",
        ],
        correta: 1,
        feedbackAcerto: "🎉 Certo! A rima está no FIM da palavra.",
        feedbackErro: "Rima é som igual no FIM da palavra: sol/anzol, flor/amor.",
      },
      {
        pergunta: "3/5 — Qual par RIMA?",
        opcoes: ["casa e bola", "mão e pão", "mão e mala", "gato e livro"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! mÃO e pÃO.",
        feedbackErro: "mão e mala só começam iguais. Escute o FINAL: m-ÃO e p-ÃO.",
      },
      {
        pergunta: "4/5 — No poeminha 'O sol de manhã saiu / E a florzinha abriu', a rima é…",
        opcoes: ["sol e flor", "saiu e abriu", "manhã e florzinha", "sol e florzinha"],
        correta: 1,
        feedbackAcerto: "🎉 Isso! A rima fica sempre no fim dos versos.",
        feedbackErro: "sol e flor estão no meio dos versos. A rima está no FIM: saiu / abriu.",
      },
      {
        pergunta: "5/5 — Para escrever meu poeminha eu preciso…",
        opcoes: [
          "De duas palavras que rimam",
          "De duas palavras que começam iguais",
          "De cem palavras difíceis",
          "De nenhuma ideia",
        ],
        correta: 0,
        feedbackAcerto: "🎉 Isso! Duas palavras que rimam já viram um poeminha.",
        feedbackErro: "Começar igual não é rima. Escolha duas palavras que terminam com o mesmo som e monte um verso terminando em cada uma.",
      },
    ],
  },

  momento11_missaoFamilia: {
    titulo: "🪶 O Poeminha da Família",
    materiais: ["Papel", "Lápis", "Lápis de cor"],
    passos: [
      "1) Escolha duas palavras que rimam (ex.: mão/pão, flor/amor, gato/sapato).",
      "2) Monte um verso terminando na primeira palavra.",
      "3) Monte outro verso terminando na segunda palavra.",
      "4) Leia em voz alta para a família e faça um desenho ao lado.",
    ],
    registro: "📸 Foto do poeminha escrito e ilustrado pela criança.",
  },

  recompensa: {
    xp: 150,
    moedas: 100,
  },
};

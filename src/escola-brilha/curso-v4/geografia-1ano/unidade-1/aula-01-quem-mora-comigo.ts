import type { AulaGeografiaV4 } from "../../types";
import mochila from "@/assets/neuro-treino/objetos/mochila.png";
import brilha from "@/assets/neuro-treino/objetos/esquilo-brilha.png";
import mae from "@/assets/neuro-treino/objetos/mae.png";
import pai from "@/assets/neuro-treino/objetos/pai.png";
import menina from "@/assets/neuro-treino/objetos/menina.png";
import menino from "@/assets/neuro-treino/objetos/menino.png";
import avoM from "@/assets/neuro-treino/objetos/avo-mulher.png";
import avoH from "@/assets/neuro-treino/objetos/avo-homem.png";
import bebe from "@/assets/neuro-treino/objetos/bebe.png";
import coracao from "@/assets/neuro-treino/objetos/coracao.png";
import fTrad from "@/assets/neuro-treino/objetos/familia-tradicional.png";
import fGrande from "@/assets/neuro-treino/objetos/familia-grande.png";
import fMaeF from "@/assets/neuro-treino/objetos/familia-mae-filho.png";
import fPaiF from "@/assets/neuro-treino/objetos/familia-pai-filho.png";
import fAvos from "@/assets/neuro-treino/objetos/familia-avos-neta.png";
import fCoz from "@/assets/neuro-treino/objetos/cozinheiro-familia.png";

/**
 * Aula 1 — Quem Mora Comigo (Família)
 * Missão inaugural do 1º Ano. Brilha ganha a mochila de explorador
 * e a primeira página do Grande Atlas fala do lugar mais importante:
 * a família que cuida da criança.
 */
export const aula01: AulaGeografiaV4 = {
  slug: "aula-01-quem-mora-comigo",
  titulo: "Quem Mora Comigo",
  iconeTrilha: "👨‍👩‍👧",
  bncc: ["EF01GE01", "EF01GE02"],
  duracaoMin: 15,

  momento01_missao: {
    texto: "Descubra quem faz parte da SUA família!",
    imagemUrl: coracao,
  },

  momento02_narrativa: {
    titulo: "Brilha ganha a mochila de explorador",
    historia:
      "Brilha acordou hoje com uma MOCHILA novinha do lado da cama. Dentro tinha um MAPA MÁGICO em branco. — Você virou um pequeno explorador! — disse a vovó esquilo. — A primeira página do mapa fala do lugar mais importante: as pessoas que moram com você. Vamos começar?",
    imagemUrl: mochila,
  },

  momento03_exploracaoVisual: {
    instrucao: "Existem MUITOS jeitos de ser família. Toque em cada uma e conheça:",
    galeria: [
      { imagemUrl: fTrad, legenda: "Pai, mãe e filhos" },
      { imagemUrl: fMaeF, legenda: "Só a mãe e o filho" },
      { imagemUrl: fPaiF, legenda: "Só o pai e o filho" },
      { imagemUrl: fAvos, legenda: "Avós e neta" },
      { imagemUrl: fGrande, legenda: "Família grande" },
      { imagemUrl: fCoz, legenda: "Família cozinhando junta" },
    ],
  },

  momento04_observacao: {
    perguntaGuia: "Todas as famílias são iguais?",
    pistas: [
      "Umas têm pai e mãe. Outras têm só um dos dois.",
      "Umas moram com avós. Outras moram com tios.",
      "Umas são pequenas (2 pessoas). Outras são bem grandes.",
    ],
    revelacao:
      "Cada família é DIFERENTE — mas todas fazem a MESMA coisa: cuidam, ensinam e amam. É isso que forma uma família de verdade.",
  },

  momento05_ensinoExplicito: {
    titulo: "O que a família faz por você",
    etapas: [
      { texto: "A família CUIDA: dá comida, roupa e um lugar pra dormir.", imagemUrl: fCoz },
      { texto: "A família ENSINA: fala, ajuda com tarefas, mostra o que é certo.", imagemUrl: mae },
      { texto: "A família AMA: dá abraço, colo e escuta quando você está triste.", imagemUrl: coracao },
    ],
  },

  momento06_euFaco: {
    enunciado: "Brilha vai mostrar quem mora com ele:",
    passos: [
      "— Na minha casa mora a VOVÓ ESQUILO, que faz meu café.",
      "— Mora meu IRMÃO CAÇULA, que ainda é bebê.",
      "— E mora eu, o BRILHA, o mais curioso de todos!",
      "Somos 3. Cada um cuida do outro. Isso é uma família.",
    ],
    visualUrl: brilha,
  },

  momento07_nosFazemos: {
    enunciado: "Vamos juntos: arraste cada pessoa para o papel dela na família.",
    dica: "A MÃE cuida como mãe. O PAI cuida como pai. Os AVÓS já foram pais das nossas mães e pais!",
    quiz: {
      pergunta: "Quem é a mãe da sua mãe?",
      opcoes: ["A tia", "A avó", "A prima"],
      correta: 1,
      feedbackAcerto:
        "Isso! A mãe da sua mãe é a AVÓ. E o pai da sua mãe é o AVÔ. Eles foram os pais dos seus pais.",
      feedbackErro:
        "Quase! A mãe da sua mãe se chama AVÓ. Pense: a sua mãe também é filha de alguém — e essa pessoa é a sua avó.",
    },
  },

  momento08_voceFaz: {
    enunciado: "Agora sozinho: escolha a pessoa certa.",
    quiz: {
      pergunta: "Quando você está com febre, quem geralmente cuida de você?",
      opcoes: ["Alguém da minha família", "Um vizinho que eu nunca vi", "Ninguém"],
      correta: 0,
      feedbackAcerto:
        "Muito bem! Quando ficamos doentes é a nossa FAMÍLIA que cuida. Pode ser a mãe, o pai, o avô, a tia — qualquer pessoa que mora com você.",
      feedbackErro:
        "Pense de novo: quem faz sopinha, dá remédio e pega no colo quando você está doente? É a sua FAMÍLIA.",
    },
  },

  momento09_aplicacaoCotidiano: {
    contexto: "Você chegou da escola com uma medalha de participação.",
    problema: "A quem você mostra a medalha primeiro quando chega em casa?",
    quiz: {
      pergunta: "A quem você mostra primeiro?",
      opcoes: [
        "Para alguém da minha família",
        "Para o cachorro do vizinho",
        "Para ninguém, escondo",
      ],
      correta: 0,
      feedbackAcerto:
        "Certo! A família é a primeira a comemorar as nossas conquistas. Isso se chama COMPARTILHAR alegrias.",
      feedbackErro:
        "Nossas alegrias ficam maiores quando dividimos com a família. Por isso corremos pra mostrar pra eles primeiro.",
    },
  },

  momento10_minijogo: {
    titulo: "Minha Família",
    instrucao: "Cada família é diferente. Toque em cada pessoa e ouça quem ela pode ser na sua família:",
    jogo: {
      tipo: "galeriaExploracao",
      bloco: {
        instrucao: "Não existe família certa ou errada — a sua família é do jeito dela.",
        cards: [
          { imagemUrl: mae, titulo: "Mãe", descricao: "A mãe cuida, alimenta e ensina. Muita gente mora com a mãe." },
          { imagemUrl: pai, titulo: "Pai", descricao: "O pai também cuida e protege. Algumas crianças moram com o pai." },
          { imagemUrl: avoM, titulo: "Avó", descricao: "A avó é a mãe do seu pai ou da sua mãe. Muitas crianças moram com a avó." },
          { imagemUrl: avoH, titulo: "Avô", descricao: "O avô é o pai do seu pai ou da sua mãe. Ele também pode morar com você." },
          { imagemUrl: menino, titulo: "Irmão", descricao: "O irmão é filho dos mesmos pais que você." },
          { imagemUrl: menina, titulo: "Irmã", descricao: "A irmã é filha dos mesmos pais que você." },
          { imagemUrl: bebe, titulo: "Bebê", descricao: "Um irmãozinho ou irmãzinha bebê também faz parte da família." },
          { imagemUrl: coracao, titulo: "Tios, primos e outros", descricao: "Tios, primos, madrasta, padrasto — todos que cuidam de você com amor são família." },
        ],
      },
    },
  },

  momento11_quiz: {
    instrucao: "Vamos ver o que você aprendeu sobre família:",
    perguntas: [
      {
        pergunta: "Todas as famílias precisam ter pai E mãe pra ser família?",
        opcoes: ["Sim, é obrigatório", "Não, existem vários jeitos de família", "Só se tiver filhos"],
        correta: 1,
        feedbackAcerto:
          "Isso! Existe família só com mãe, só com pai, com avós, com tios. O que importa é o cuidado e o amor.",
        feedbackErro:
          "Lembra da observação: cada família é DIFERENTE. O importante é cuidar, ensinar e amar.",
      },
      {
        pergunta: "Qual é o papel mais importante da família?",
        opcoes: ["Ficar em silêncio", "Cuidar, ensinar e amar", "Comprar brinquedos"],
        correta: 1,
        feedbackAcerto: "Muito bem! Essas são as 3 coisas que TODA família faz: cuidar, ensinar e amar.",
        feedbackErro: "Volte no ensino explícito: a família CUIDA, ENSINA e AMA.",
      },
    ],
  },

  momento12_missaoFamilia: {
    titulo: "🖼 Meu Retrato de Família",
    materiais: ["Uma folha em branco", "Lápis de cor ou giz de cera"],
    passos: [
      "Sente com um adulto e converse: quem mora na sua casa?",
      "Desenhe TODAS as pessoas — inclusive você e seu bicho de estimação, se tiver.",
      "Escreva embaixo o nome de cada uma (peça ajuda pra escrever).",
      "Guarde o desenho — na próxima aula ele será importante!",
    ],
    registro: "Traga o desenho na próxima aula pra colar no seu Grande Atlas.",
  },

  momento13_avaliacao: {
    perguntas: [
      {
        pergunta: "Uma família de 2 pessoas (mãe + filho) também é uma família?",
        opcoes: ["Sim, claro", "Não, precisa ter mais gente"],
        correta: 0,
        feedbackAcerto: "Certíssimo! Duas pessoas que cuidam uma da outra JÁ formam uma família.",
        feedbackErro: "Família não é sobre número — é sobre CUIDAR. Mãe + filho já é família.",
      },
      {
        pergunta: "O que faz um grupo de pessoas ser uma família?",
        opcoes: ["Morar na mesma rua", "Cuidar, ensinar e amar quem mora junto", "Ter o mesmo nome"],
        correta: 1,
        feedbackAcerto: "Muito bem! É o cuidado do dia a dia que forma a família.",
        feedbackErro: "Lembre: o que faz família é CUIDAR, ENSINAR e AMAR.",
      },
    ],
  },

  momento14_continuacao: {
    texto:
      "🌟 Você despertou a 1ª página do Grande Atlas! A próxima aventura é descobrir os cômodos da sua casa.",
    imagemUrl: brilha,
  },

  recompensa: { xp: 100, moedas: 50, medalha: "🏅 Pequeno Explorador da Família" },
};

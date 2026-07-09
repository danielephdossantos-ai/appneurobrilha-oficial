import type { AulaGeoV1 } from "../../types";
import mapaMunicipio from "@/assets/geografia-3ano/mapa-municipio.jpg";

/**
 * Geografia · 3º Ano · Unidade 1 · Aula 01
 * "Meu Município tem Cidade e Campo" — EF03GE01
 *
 * Player customizado (exceção formal ao padrão único, ver
 * .lovable/mem/constraints/geografia-3ao9-player-custom.md).
 * Cena 1 já entregue com interação real (lupa arrastável revelando o
 * mapa). Cenas 2–11 entram como placeholder navegável — vão ser
 * construídas uma por uma com aprovação cena a cena.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-nosso-municipio",
  titulo: "Meu Município: Cidade + Campo",
  iconeTrilha: "🗺️",
  bncc: ["EF03GE01"],
  duracaoMin: 20,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Você vai descobrir que o município tem DOIS pedaços: um com casinhas juntas e outro com plantação.",
    mapaUrl: mapaMunicipio,
    aurora:
      "Brilha, cheguei com uma mesa de cartógrafo! Cartógrafo é quem faz mapas. Nossa missão é DESCOBRIR o município — pega a lupa e passa devagar sobre o mapa.",
    falaFinal:
      "Viu? De um lado a CIDADE — muitas casinhas juntas. Do outro lado o CAMPO — plantações e o rio. Os DOIS pedaços juntos formam UM município.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de abrir o mapa inteiro, quero seu palpite, explorador! O que você acha que tem dentro do nosso município?",
    pergunta: "O que forma o nosso município?",
    opcoes: [
      {
        id: "so-cidade",
        titulo: "Só cidade",
        subtitulo: "prédios, ruas e praças",
        emoji: "🏙️",
        cor: "from-sky-400 to-indigo-500",
      },
      {
        id: "cidade-campo",
        titulo: "Cidade + campo juntos",
        subtitulo: "casas, plantações e rio",
        emoji: "🏙️🌾",
        cor: "from-emerald-400 to-amber-500",
      },
    ],
    respostaCerta: "cidade-campo",
    feedbackAcerto:
      "Isso mesmo! O município é feito da cidade E do campo — os dois pedaços juntos.",
    feedbackErro:
      "Quase! Só a cidade é uma parte. O município inteiro tem cidade E campo dentro dele.",
    falaFinal:
      "Guarda esse palpite. Nas próximas cenas você vai ver com seus olhos: casas juntas de um lado, plantações do outro — tudo dentro do mesmo município.",
  },
  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo cartógrafo tem um caderno de campo. Aqui estão os meus: toca em cada um pra descobrir 4 palavras importantes que a gente vai usar hoje.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "municipio",
        capa: "Município",
        emoji: "🗺️",
        cor: "from-emerald-500 to-teal-700",
        conteudo:
          "É o pedaço do país que tem UMA prefeitura, UM prefeito, e junta cidade + campo.",
        exemplo: "A gente mora no município de _______ (fala o seu!).",
      },
      {
        id: "zona-urbana",
        capa: "Zona Urbana",
        emoji: "🏙️",
        cor: "from-sky-500 to-indigo-700",
        conteudo:
          "É a parte do município com muitas casas juntas, ruas, prédios, praças e lojas. É a CIDADE.",
        exemplo: "Padaria, escola no meio dos prédios, semáforo — zona urbana.",
      },
      {
        id: "zona-rural",
        capa: "Zona Rural",
        emoji: "🌾",
        cor: "from-lime-500 to-emerald-700",
        conteudo:
          "É a parte do município com plantações, animais, matas e rios. É o CAMPO.",
        exemplo: "Sítio, fazenda, roça de milho — zona rural.",
      },
      {
        id: "fronteira",
        capa: "Fronteira",
        emoji: "🚧",
        cor: "from-amber-500 to-rose-600",
        conteudo:
          "É a linha imaginária que separa UM município do outro. Do outro lado, começa outra prefeitura.",
        exemplo: "A placa 'Bem-vindo a...' avisa que você cruzou uma fronteira.",
      },
    ],
    falaFinal:
      "Agora você tem as 4 palavras do cartógrafo. Vamos usar TODAS elas nas próximas cenas!",
  },
  cena04_leituraGuiada: {
    tipo: "placeholder",
    titulo: "Aurora narra o mapa",
    descricao: "Balões flutuando sobre o mapa, Aurora lê em voz alta.",
  },
  cena05_compreensao: {
    tipo: "placeholder",
    titulo: "Quiz do Radar",
    descricao: "Radar gira e pousa no card certo (3 perguntas).",
  },
  cena06_personagensLugar: {
    tipo: "placeholder",
    titulo: "Mapa de Camadas",
    descricao: "Toggle 🏙️ Urbana / 🌾 Rural que acende ou apaga metade do mapa.",
  },
  cena07_sequencia: {
    tipo: "placeholder",
    titulo: "Linha da Estrada",
    descricao: "Arrastar 4 pontos: fazenda → estrada → mercado → casa.",
  },
  cena08_voceLe: {
    tipo: "placeholder",
    titulo: "Você lê sozinho",
    descricao: "Balão sem áudio; botão ‘li’ libera a próxima cena.",
  },
  cena09_minijogo: {
    tipo: "placeholder",
    titulo: "Fronteiras Vivas",
    descricao: "Arrastar a linha pontilhada até a fronteira certa entre 2 municípios.",
  },
  cena10_revisao: {
    tipo: "placeholder",
    titulo: "Pizza do Município",
    descricao: "Pizza clicável (urbana × rural) que fala % ao tocar.",
  },
  cena11_avaliacao: {
    tipo: "placeholder",
    titulo: "Selo do Atlas",
    descricao: "Adicionar página no Atlas Municipal — insígnia ‘Mestre dos Mapas e Fronteiras’.",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Cartógrafo Iniciante" },
};

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
    tipo: "placeholder",
    titulo: "Voto do Explorador",
    descricao:
      "Em breve: 2 cards grandes — ‘só cidade’ vs ‘cidade + campo juntos’. A criança vota antes de descobrir.",
  },
  cena03_vocabulario: {
    tipo: "placeholder",
    titulo: "Cadernos de Campo",
    descricao: "4 cadernos que abrem: município, zona urbana, zona rural, fronteira.",
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

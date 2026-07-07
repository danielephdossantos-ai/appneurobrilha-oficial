import type { AulaGeografiaV4 } from "../../types";
import ribeirinhaImg from "@/assets/geografia/moradias/ribeirinha.jpg";

/**
 * EF02GE01 · Aula 01 — "Por que nem toda casa é igual?"
 * Etapa A (piloto): Motivação + Galeria + Modo Investigador da Casa
 * Ribeirinha completos. Demais seções entram nas Etapas B/C.
 */
const aula: AulaGeografiaV4 = {
  slug: "aula-01-lugares-onde-vivemos",
  titulo: "Por que nem toda casa é igual?",
  iconeTrilha: "🛖",
  bncc: ["EF02GE01"],
  duracaoMin: 25,

  momento01_motivacao: {
    titulo: "O GeoScanner chegou",
    personagem: "Aurora",
    historia:
      "Aurora te deu um equipamento chamado GeoScanner. Ele mostra o que os olhos comuns não veem — mas só funciona pra quem observa com atenção.\n\nHoje você não vai só olhar uma casa. Você vai descobrir por que ela foi construída exatamente desse jeito.",
  },

  momento02_galeria: {
    bloco: {
      instrucao:
        "5 lugares reais do Brasil. Toque em qualquer um pra investigar — comece pelo que te chamou mais atenção.",
      lugares: [
        {
          id: "apartamento",
          nome: "Apartamento",
          emoji: "🏢",
          corPlaceholder:
            "linear-gradient(160deg,#334155,#0f172a 55%,#020617)",
        },
        {
          id: "casa-urbana",
          nome: "Casa na cidade",
          emoji: "🏠",
          corPlaceholder:
            "linear-gradient(160deg,#78350f,#7c2d12 55%,#431407)",
        },
        {
          id: "sitio",
          nome: "Sítio no campo",
          emoji: "🌾",
          corPlaceholder:
            "linear-gradient(160deg,#65a30d,#3f6212 55%,#1a2e05)",
        },
        {
          id: "ribeirinha",
          nome: "Casa ribeirinha",
          emoji: "🌊",
          imagemUrl: ribeirinhaImg,
        },
        {
          id: "aldeia",
          nome: "Aldeia indígena",
          emoji: "🛖",
          corPlaceholder:
            "linear-gradient(160deg,#a16207,#713f12 55%,#3f2e0f)",
        },
      ],
    },
  },

  momento03_investigador: {
    blocos: [
      {
        lugarId: "ribeirinha",
        nomeLugar: "Casa Ribeirinha",
        emoji: "🌊",
        imagemUrl: ribeirinhaImg,
        fechamento:
          "Essa casa foi construída sobre estacas de madeira porque o rio sobe e desce o ano todo. Assim, quando a água enche, a família continua seca. O barco é o carro da porta de casa.",
        pistas: [
          { icone: "🏠", rotulo: "casa de madeira", x: 55, y: 42 },
          { icone: "⬆️", rotulo: "construída sobre estacas", x: 55, y: 72 },
          { icone: "🌊", rotulo: "rio embaixo da casa", x: 30, y: 88 },
          { icone: "🛶", rotulo: "canoa presa na escada", x: 82, y: 82 },
          { icone: "🌳", rotulo: "floresta ao redor", x: 12, y: 25 },
          { icone: "🌧️", rotulo: "região de muita chuva", x: 88, y: 15 },
        ],
      },
    ],
  },

  // Placeholders mínimos — as Etapas B/C preenchem de verdade.
  momento04_hipoteses: { perguntas: [] },
  momento05_comparar: { comparacoes: [] },
  momento06_painel: {
    bloco: {
      colunas: ["Lugar", "Clima", "Construção", "Motivo"],
      linhas: [],
      sintese: "Em construção — Etapa B.",
    },
  },
  momento07_investigacaoLivre: {
    bloco: {
      instrucao: "Em construção — Etapa C.",
      pistas: [],
      conclusao: "",
    },
  },

  momento10_missaoFamilia: {
    titulo: "Diário do GeoExplorador",
    passos: [
      "Passeie pela sua rua com alguém da família.",
      "Escolha 2 casas ou prédios bem diferentes.",
      "Observe: o tamanho, o material, o telhado, quem mora ali.",
      "Volte pra casa e responda no diário: o que mudou entre uma e outra? Por quê?",
    ],
    registro:
      "Registre com foto, desenho ou áudio contando o que descobriu.",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Investigador das Moradias",
  },
};

export default aula;

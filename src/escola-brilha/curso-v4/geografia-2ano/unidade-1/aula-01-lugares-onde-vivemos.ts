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
          {
            icone: "🏠",
            rotulo: "casa de madeira",
            x: 55,
            y: 42,
            explicacao:
              "A casa é feita de madeira porque a floresta amazônica tem MUITA árvore por perto. Fica mais fácil e barato construir com o material que já existe ali.",
            curiosidade:
              "Sabia? Os moradores escolhem madeiras que não estragam com a umidade, como itaúba e maçaranduba.",
          },
          {
            icone: "⬆️",
            rotulo: "construída sobre estacas",
            x: 55,
            y: 72,
            explicacao:
              "Essas 'perninhas' de madeira são chamadas de PALAFITAS. Elas erguem a casa bem alta pra que a água do rio, quando sobe, passe POR BAIXO — e não por dentro.",
            curiosidade:
              "Sabia? Na cheia, o rio pode subir mais de 10 metros. É a altura de um prédio de 3 andares!",
          },
          {
            icone: "🌊",
            rotulo: "rio embaixo da casa",
            x: 30,
            y: 88,
            explicacao:
              "O rio é o QUINTAL e a RUA dessas famílias. É por ele que chega comida, remédio, escola e visita. Sem o rio, ninguém sai de casa.",
            curiosidade:
              "Sabia? Existem escolas flutuantes na Amazônia — a criança vai estudar de barco.",
          },
          {
            icone: "🛶",
            rotulo: "canoa presa na escada",
            x: 82,
            y: 82,
            explicacao:
              "A canoa fica amarrada na escada igual a gente estaciona o carro na garagem. É o transporte principal da família ribeirinha.",
            curiosidade:
              "Sabia? Muitas crianças ribeirinhas aprendem a remar antes de aprender a andar de bicicleta.",
          },
          {
            icone: "🌳",
            rotulo: "floresta ao redor",
            x: 12,
            y: 25,
            explicacao:
              "A floresta dá tudo: madeira pra casa, frutas pra comer, remédio das plantas e sombra pro calor. A família vive JUNTO da floresta, não contra ela.",
            curiosidade:
              "Sabia? Do açaí ao guaraná, muita coisa que a gente come vem daí.",
          },
          {
            icone: "🌧️",
            rotulo: "região de muita chuva",
            x: 88,
            y: 15,
            explicacao:
              "Na Amazônia chove quase todo dia. Por isso o telhado é bem inclinado — pra água escorrer rápido e não empoçar em cima da casa.",
            curiosidade:
              "Sabia? Chove tanto que existem só duas estações: o 'inverno' (muita chuva) e o 'verão' (menos chuva). Frio de verdade não tem.",
          },
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

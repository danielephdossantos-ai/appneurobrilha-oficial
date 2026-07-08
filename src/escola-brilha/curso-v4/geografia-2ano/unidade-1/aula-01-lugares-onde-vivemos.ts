import type { AulaGeografiaV4 } from "../../types";
import ribeirinhaImg from "@/assets/geografia/moradias/ribeirinha.jpg";
import apartamentoImg from "@/assets/geografia/moradias/apartamento.jpg";
import casaUrbanaImg from "@/assets/geografia/moradias/casa-urbana.jpg";
import sitioImg from "@/assets/geografia/moradias/sitio.jpg";
import aldeiaImg from "@/assets/geografia/moradias/aldeia.jpg";

/**
 * EF02GE01 · Aula 01 — "Por que nem toda casa é igual?"
 *
 * ⚠️ Padrão 2º ano (INFANTIL): imagens reais + pins com frases MUITO
 * curtas, tipo "dica". Nada de hipóteses / comparações / painel — esse
 * padrão avançado fica pro 5º ano em diante.
 */
const aula: AulaGeografiaV4 = {
  slug: "aula-01-lugares-onde-vivemos",
  titulo: "Por que nem toda casa é igual?",
  iconeTrilha: "🛖",
  bncc: ["EF02GE01"],
  duracaoMin: 15,

  momento01_motivacao: {
    titulo: "Aurora te chamou!",
    personagem: "Aurora",
    historia:
      "Oi, explorador! 👋\n\nEu sou a Aurora. Hoje a gente vai olhar 5 casas de VERDADE do Brasil.\n\nCada uma é de um jeito. Vamos descobrir por quê? 🔎",
  },

  momento02_galeria: {
    bloco: {
      instrucao:
        "Toque em uma casa pra investigar. Comece pela que você achou mais legal! 👇",
      lugares: [
        { id: "apartamento", nome: "Apartamento", emoji: "🏢", imagemUrl: apartamentoImg },
        { id: "casa-urbana", nome: "Casa da cidade", emoji: "🏠", imagemUrl: casaUrbanaImg },
        { id: "sitio", nome: "Sítio", emoji: "🌾", imagemUrl: sitioImg },
        { id: "ribeirinha", nome: "Casa do rio", emoji: "🌊", imagemUrl: ribeirinhaImg },
        { id: "aldeia", nome: "Aldeia", emoji: "🛖", imagemUrl: aldeiaImg },
      ],
    },
  },

  momento03_investigador: {
    blocos: [
      {
        lugarId: "apartamento",
        nomeLugar: "Apartamento",
        emoji: "🏢",
        imagemUrl: apartamentoImg,
        fechamento:
          "Na cidade grande mora MUITA gente. Por isso a casa cresce pra cima! 🏢",
        pistas: [
          {
            icone: "⬆️", rotulo: "prédio bem alto", x: 50, y: 25,
            explicacao: "O prédio é alto porque na cidade tem pouco chão. 🏙️",
            curiosidade: "Cada andar é uma casa diferente!",
          },
          {
            icone: "🪟", rotulo: "muitas janelas", x: 35, y: 55,
            explicacao: "Cada janela é de uma família. 👨‍👩‍👧",
            curiosidade: "Um prédio pode ter mais de 100 casas dentro!",
          },
          {
            icone: "🚗", rotulo: "rua com carros", x: 78, y: 88,
            explicacao: "A rua é de asfalto pros carros passarem. 🛣️",
            curiosidade: "Os carros ficam guardados na garagem embaixo do prédio.",
          },
          {
            icone: "🌳", rotulo: "poucas árvores", x: 92, y: 78,
            explicacao: "Na cidade quase não tem verde. 🌳",
            curiosidade: "Por isso a gente vai no parque pra ver árvore!",
          },
        ],
      },
      {
        lugarId: "casa-urbana",
        nomeLugar: "Casa da cidade",
        emoji: "🏠",
        imagemUrl: casaUrbanaImg,
        fechamento:
          "Essa casa é da cidade também. Tem quintal, telhado e portão pra proteger a família. 🏠",
        pistas: [
          {
            icone: "🧱", rotulo: "paredes de tijolo", x: 55, y: 55,
            explicacao: "As paredes são de tijolo. São bem fortes! 💪",
            curiosidade: "Uma casa dessas dura mais que a vovó!",
          },
          {
            icone: "🏘️", rotulo: "telhado vermelho", x: 40, y: 25,
            explicacao: "O telhado é inclinado pra chuva escorrer. 🌧️",
            curiosidade: "A telha vermelha é feita de barro cozido no forno.",
          },
          {
            icone: "🚪", rotulo: "portão", x: 15, y: 70,
            explicacao: "O portão protege a casa. 🔒",
            curiosidade: "Antigamente as casas nem tinham muro!",
          },
          {
            icone: "🌿", rotulo: "jardim", x: 60, y: 78,
            explicacao: "Um cantinho verde na frente. 🌷",
            curiosidade: "Dá pra plantar flor e ter uma arvorezinha.",
          },
        ],
      },
      {
        lugarId: "sitio",
        nomeLugar: "Sítio no campo",
        emoji: "🌾",
        imagemUrl: sitioImg,
        fechamento:
          "No sítio tem muito espaço e muitos bichos. É de lá que vem quase toda a comida do mercado! 🥕",
        pistas: [
          {
            icone: "🏠", rotulo: "casa com varanda", x: 55, y: 40,
            explicacao: "A casa tem varanda pra descansar na sombra. ☀️",
            curiosidade: "É ali que a família toma café olhando o pôr do sol.",
          },
          {
            icone: "🐔", rotulo: "galinhas soltas", x: 30, y: 72,
            explicacao: "As galinhas vivem soltas ciscando o chão. 🐣",
            curiosidade: "Uma galinha bota quase 1 ovo por dia!",
          },
          {
            icone: "🌳", rotulo: "árvore grande", x: 18, y: 30,
            explicacao: "No campo a árvore cresce bem grande. 🌳",
            curiosidade: "Ela pode ser mais velha que o vovô!",
          },
          {
            icone: "🌾", rotulo: "muito espaço", x: 90, y: 55,
            explicacao: "Aqui não tem prédio. Tudo é aberto! 🌅",
            curiosidade: "Arroz, feijão e leite vêm daqui.",
          },
        ],
      },
      {
        lugarId: "ribeirinha",
        nomeLugar: "Casa do rio",
        emoji: "🌊",
        imagemUrl: ribeirinhaImg,
        fechamento:
          "A casa fica em cima de perninhas de madeira. Assim, quando o rio enche, a água passa por baixo! 🌊",
        pistas: [
          {
            icone: "🏠", rotulo: "casa de madeira", x: 55, y: 42,
            explicacao: "A casa é de madeira da floresta. 🌳",
            curiosidade: "Perto da Amazônia tem MUITA árvore!",
          },
          {
            icone: "⬆️", rotulo: "sobre perninhas", x: 55, y: 72,
            explicacao: "Essas perninhas se chamam PALAFITAS. 🪵",
            curiosidade: "Elas erguem a casa pra água não entrar!",
          },
          {
            icone: "🌊", rotulo: "rio embaixo", x: 30, y: 88,
            explicacao: "O rio é a rua da família! 🛶",
            curiosidade: "É pelo rio que chega comida e a escola.",
          },
          {
            icone: "🛶", rotulo: "canoa", x: 82, y: 82,
            explicacao: "A canoa é o carro deles. 🚗➡️🛶",
            curiosidade: "Muita criança rema antes de andar de bicicleta!",
          },
          {
            icone: "🌧️", rotulo: "muita chuva", x: 88, y: 15,
            explicacao: "Na Amazônia chove quase todo dia. ☔",
            curiosidade: "Por isso o telhado é bem inclinado.",
          },
        ],
      },
      {
        lugarId: "aldeia",
        nomeLugar: "Aldeia",
        emoji: "🛖",
        imagemUrl: aldeiaImg,
        fechamento:
          "A oca é feita com o que a floresta dá: madeira, cipó e palha. E fica todo mundo pertinho! 💚",
        pistas: [
          {
            icone: "🛖", rotulo: "oca de palha", x: 22, y: 55,
            explicacao: "A oca é a casa indígena. 🏡",
            curiosidade: "Numa oca pode morar a família toda junta!",
          },
          {
            icone: "🌴", rotulo: "teto de palha", x: 55, y: 22,
            explicacao: "O teto é de folha de palmeira trançada. 🌴",
            curiosidade: "Ele deixa a oca fresquinha no calor!",
          },
          {
            icone: "🔥", rotulo: "fogueira no meio", x: 60, y: 68,
            explicacao: "O fogo fica no meio da aldeia. 🔥",
            curiosidade: "É ali que todo mundo se reúne pra cozinhar e contar histórias.",
          },
          {
            icone: "🌳", rotulo: "floresta em volta", x: 82, y: 30,
            explicacao: "A aldeia fica dentro da floresta. 🌳🌳",
            curiosidade: "No Brasil tem mais de 300 povos indígenas!",
          },
        ],
      },
    ],
  },

  // Padrão avançado (hipóteses, comparar, painel) NÃO é usado no 2º ano.
  // Fica reservado pro 5º ano em diante.
  momento04_hipoteses: { perguntas: [] },
  momento05_comparar: { comparacoes: [] },
  momento06_painel: {
    bloco: { colunas: [], linhas: [], sintese: "" },
  },
  momento07_investigacaoLivre: {
    bloco: { instrucao: "", pistas: [], conclusao: "" },
  },

  momento10_missaoFamilia: {
    titulo: "Missão em casa 🏠",
    passos: [
      "Dê uma volta na sua rua com alguém da família. 🚶",
      "Escolha 2 casas bem diferentes. 👀",
      "Conte pra Aurora: o que muda entre elas? 💬",
    ],
    registro:
      "Você pode desenhar, tirar foto ou gravar um áudio contando o que viu. 🎨📸🎙️",
  },

  recompensa: {
    xp: 200,
    moedas: 120,
    medalha: "Investigador das Moradias",
  },
};

export default aula;

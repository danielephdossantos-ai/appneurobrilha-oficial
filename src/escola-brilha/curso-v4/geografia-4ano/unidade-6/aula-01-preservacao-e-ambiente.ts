import type { AulaGeoV1 } from "../../types";
import { url as contraste } from "@/assets/geografia-4ano/desmatamento-vs-preservacao.jpg.asset.json";
import { url as crianca } from "@/assets/geografia-4ano/sustentabilidade-crianca.jpg.asset.json";
import { url as amazonia } from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg.asset.json";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 6 · Aula 01
 * "Preservação e Impactos Ambientais" — EF04GE06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-preservacao-e-ambiente",
  titulo: "Cuidar da Natureza: Preservação e Impactos",
  iconeTrilha: "♻️",
  bncc: ["EF04GE06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe os dois lados. Um lado destruído. O outro protegido.",
    mapaUrl: contraste,
    imagemDestaqueUrl: contraste,
    aurora:
      "Explorador, o ser humano MODIFICA a natureza pra viver — planta, constrói, tira madeira, cria gado. Sem cuidado, isso vira DESTRUIÇÃO: floresta virada em pasto, rio poluído, ar sujo. Com cuidado, vira SUSTENTABILIDADE.",
    falaFinal: "Nossa missão: usar a natureza SEM destruir. É isso que essa aula ensina.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: quando cortam MUITAS árvores da floresta, os bichos...",
    pergunta: "Cortar muitas árvores faz com que os bichos...",
    opcoes: [
      {
        id: "casa",
        titulo: "FIQUEM SEM CASA",
        subtitulo: "e podem sumir",
        emoji: "🐒",
        cor: "from-red-500 to-rose-700",
      },
      {
        id: "ok",
        titulo: "FIQUEM FELIZES",
        subtitulo: "porque tem mais espaço",
        emoji: "😊",
        cor: "from-green-500 to-emerald-700",
      },
    ],
    respostaCerta: "casa",
    feedbackAcerto:
      "Isso! Árvore é CASA e COMIDA. Sem árvore, o bicho perde tudo. Muitas espécies podem ficar EXTINTAS (sumir pra sempre).",
    feedbackErro:
      "Bicho não fica feliz sem casa. Cada árvore derrubada tira o abrigo de MUITOS bichos.",
    falaFinal: "Cuidar da árvore = cuidar do bicho = cuidar da gente.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "5 palavras da preservação ambiental. Toque e leia.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      {
        id: "desmatamento",
        capa: "1. Desmatamento",
        emoji: "🪓",
        cor: "from-red-600 to-rose-800",
        conteudo:
          "DESMATAMENTO é cortar árvores em grande quantidade. Faz sumir a mata, tira a casa dos bichos e piora o clima.",
        exemplo: "Ex.: derrubar floresta pra virar pasto ou plantação.",
        fotoUrl: contraste,
      },
      {
        id: "poluicao",
        capa: "2. Poluição",
        emoji: "🏭",
        cor: "from-slate-600 to-gray-800",
        conteudo:
          "POLUIÇÃO é sujar o ar, a água ou o solo. Fumaça de carro, lixo no rio, agrotóxico no chão.",
        exemplo: "Ex.: fumaça preta da fábrica, plástico no mar.",
      },
      {
        id: "sustentavel",
        capa: "3. Sustentabilidade",
        emoji: "♻️",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "SUSTENTÁVEL é usar hoje sem estragar pra AMANHÃ. Consumir só o necessário, reciclar, plantar árvore.",
        exemplo: "Ex.: pescar só o suficiente e deixar peixinho crescer pra próxima safra.",
        fotoUrl: crianca,
      },
      {
        id: "reciclar",
        capa: "4. Reciclar",
        emoji: "🔄",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "RECICLAR é transformar LIXO em coisa nova. Garrafa PET vira camiseta, papel usado vira caderno.",
        exemplo: "Ex.: separar lixo em casa: seco (reciclável) e orgânico.",
      },
      {
        id: "reflorestar",
        capa: "5. Reflorestar",
        emoji: "🌱",
        cor: "from-lime-500 to-emerald-700",
        conteudo:
          "REFLORESTAR é plantar árvore onde já teve floresta. Devolve casa pros bichos e limpa o ar.",
        exemplo: "Ex.: mutirões que plantam mudas de ipê e jequitibá.",
        fotoUrl: crianca,
      },
    ],
    falaFinal: "5 palavras que definem quem CUIDA do planeta.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Marquei 4 problemas ambientais do Brasil. Toque e ouça a história.",
    instrucao: "Toque em cada balão",
    mapaUrl: mapaEstados,
    pontos: [
      {
        id: "amazonia",
        x: 25,
        y: 30,
        emoji: "🔥",
        cor: "from-red-600 to-orange-700",
        titulo: "Queimadas na Amazônia",
        texto:
          "Todo ano, milhares de incêndios criminosos destroem a floresta pra virar pasto. Bicho foge, ar fica com fumaça.",
        fotoUrl: amazonia,
      },
      {
        id: "cerrado",
        x: 50,
        y: 50,
        emoji: "🌾",
        cor: "from-amber-600 to-orange-800",
        titulo: "Cerrado desmatado",
        texto:
          "Muito cerrado virou plantação de soja. Perdeu bicho, perdeu rio, perdeu diversidade.",
      },
      {
        id: "rios",
        x: 60,
        y: 65,
        emoji: "💧",
        cor: "from-slate-600 to-gray-800",
        titulo: "Rios poluídos",
        texto:
          "Esgoto sem tratamento e lixo urbano poluem rios que atravessam cidades. Peixe morre, água não serve pra beber.",
      },
      {
        id: "mata",
        x: 68,
        y: 75,
        emoji: "🌲",
        cor: "from-emerald-500 to-green-700",
        titulo: "Mata Atlântica: 12% do que era",
        texto:
          "Quando os portugueses chegaram, quase todo o litoral era Mata Atlântica. Hoje sobrou só 12%. O resto virou cidade.",
      },
    ],
    falaFinal: "4 alertas. 4 lugares que precisam da nossa ação.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas sobre cuidar da natureza.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Cortar MUITAS árvores da floresta chama-se...",
        fotoUrl: contraste,
        cards: [
          { id: "des", emoji: "🪓", titulo: "Desmatamento", cor: "from-red-600 to-rose-800" },
          { id: "ref", emoji: "🌱", titulo: "Reflorestamento", cor: "from-lime-500 to-emerald-700" },
          { id: "rec", emoji: "🔄", titulo: "Reciclagem", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "des",
        feedbackAcerto: "Isso! DESMATAMENTO — o mal maior das florestas.",
        feedbackErro: "Cortar em massa = DESMATAMENTO.",
      },
      {
        id: "q2",
        pergunta: "Transformar garrafa PET em camiseta é...",
        cards: [
          { id: "des", emoji: "🪓", titulo: "Desmatar", cor: "from-red-600 to-rose-800" },
          { id: "rec", emoji: "🔄", titulo: "Reciclar", cor: "from-sky-500 to-blue-700" },
          { id: "pol", emoji: "🏭", titulo: "Poluir", cor: "from-slate-600 to-gray-800" },
        ],
        correta: "rec",
        feedbackAcerto: "Perfeito! RECICLAR = lixo vira produto novo.",
        feedbackErro: "Lixo → produto novo = RECICLAGEM.",
      },
      {
        id: "q3",
        pergunta: "Consumir hoje SEM ESTRAGAR pra amanhã é ser...",
        fotoUrl: crianca,
        cards: [
          { id: "sus", emoji: "♻️", titulo: "Sustentável", cor: "from-emerald-500 to-green-700" },
          { id: "cons", emoji: "🛒", titulo: "Consumista", cor: "from-red-500 to-rose-700" },
          { id: "des", emoji: "🪓", titulo: "Desmatador", cor: "from-slate-600 to-gray-800" },
        ],
        correta: "sus",
        feedbackAcerto: "Isso! SUSTENTÁVEL = usa sem esgotar.",
        feedbackErro: "Usar sem estragar pro futuro = SUSTENTÁVEL.",
      },
    ],
    falaFinal: "Radar afiado! Você já pensa como um EcoGuardião.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Vamos pintar o Brasil pelas ÁREAS DE PROTEÇÃO. Toque nos estados com maiores unidades de conservação.",
    instrucao: "Acenda os estados com grandes áreas protegidas",
    missao: {
      tipo: "selecionar",
      siglas: ["AM", "PA", "AC", "RR", "AP", "MT"],
      pergunta: "Quais estados têm as MAIORES áreas de proteção ambiental?",
    },
    falaFinal:
      "Norte concentra as maiores reservas — Amazônia protegida é oxigênio pro planeta inteiro.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar os 5 R'S da sustentabilidade.",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordene os 5 R'S do consumo consciente:",
    paradas: [
      {
        id: "repensar",
        emoji: "🤔",
        rotulo: "1. REPENSAR",
        descricao: "Antes de comprar, pense: eu realmente preciso disso?",
      },
      {
        id: "recusar",
        emoji: "🚫",
        rotulo: "2. RECUSAR",
        descricao: "Recuse embalagens desnecessárias e canudinhos de plástico.",
      },
      {
        id: "reduzir",
        emoji: "⬇️",
        rotulo: "3. REDUZIR",
        descricao: "Consuma menos. Só o necessário.",
      },
      {
        id: "reutilizar",
        emoji: "♻️",
        rotulo: "4. REUTILIZAR",
        descricao: "Use várias vezes: sacola de pano, garrafa reutilizável.",
      },
      {
        id: "reciclar",
        emoji: "🔄",
        rotulo: "5. RECICLAR",
        descricao: "Separe o lixo pra virar produto novo.",
      },
    ],
    ordemCerta: ["repensar", "recusar", "reduzir", "reutilizar", "reciclar"],
    feedbackAcerto: "5 R's dominados! Você já sabe consumir com consciência.",
    feedbackErro: "Repensa: começa pensando ANTES de comprar (repensar) e termina reciclando.",
    falaFinal: "5 R's. 5 atitudes. 1 planeta melhor.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia sozinho.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 9 — Cuidar do Planeta",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O ser humano MODIFICA a natureza pra viver. Mas quando exagera, causa DESMATAMENTO e POLUIÇÃO.",
        chaves: ["modifica", "desmatamento", "poluição"],
      },
      {
        id: "p2",
        texto:
          "SUSTENTÁVEL é usar hoje sem esgotar pra AMANHÃ. Pescar sem acabar com o peixe. Cortar árvore e plantar outra.",
        chaves: ["sustentável", "hoje", "amanhã"],
      },
      {
        id: "p3",
        texto:
          "RECICLAR transforma lixo em produto novo. REFLORESTAR planta árvore onde tinha floresta.",
        chaves: ["reciclar", "reflorestar"],
      },
      {
        id: "p4",
        texto:
          "Cuidar da natureza é dever de TODOS: governo, empresa e cada CIDADÃO. Você também.",
        chaves: ["cuidar", "todos", "cidadão"],
      },
    ],
    falaFinal: "Leu tudo. Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ECO-EXPRESS. Qual atitude cabe em cada situação?",
    instrucao: "⏱️ Qual atitude é a certa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "reciclar", emoji: "🔄", rotulo: "Reciclar" },
      { id: "reutilizar", emoji: "♻️", rotulo: "Reutilizar" },
      { id: "reduzir", emoji: "⬇️", rotulo: "Reduzir" },
      { id: "reflorestar", emoji: "🌱", rotulo: "Reflorestar" },
      { id: "recusar", emoji: "🚫", rotulo: "Recusar" },
      { id: "denunciar", emoji: "📢", rotulo: "Denunciar" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Garrafa PET usada", emoji: "🥤", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Pode virar camiseta", emoji: "👕", cor: "from-cyan-500 to-blue-700" },
        contexto: "Garrafa vazia que pode virar produto novo:",
        pecaCertaId: "reciclar",
        feedbackAcerto: "Isso! RECICLAR.",
        feedbackErro: "Lixo → produto novo = RECICLAR.",
      },
      {
        id: "r2",
        municipioA: { nome: "Sacola de pano", emoji: "🛍️", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Usada muitas vezes", emoji: "🔁", cor: "from-lime-500 to-emerald-700" },
        contexto: "Sacola de pano no lugar de plástica é:",
        pecaCertaId: "reutilizar",
        feedbackAcerto: "Perfeito! REUTILIZAR — usa várias vezes.",
        feedbackErro: "Usar várias vezes = REUTILIZAR.",
      },
      {
        id: "r3",
        municipioA: { nome: "Canudo de plástico", emoji: "🥤", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Melhor dizer não", emoji: "🚫", cor: "from-rose-500 to-red-700" },
        contexto: "O garçom oferece canudo plástico. Você deve:",
        pecaCertaId: "recusar",
        feedbackAcerto: "Boa! RECUSAR o que polui.",
        feedbackErro: "Dizer não pra poluição = RECUSAR.",
      },
      {
        id: "r4",
        municipioA: { nome: "Área queimada", emoji: "🔥", cor: "from-red-600 to-orange-700" },
        municipioB: { nome: "Plantar mudas novas", emoji: "🌱", cor: "from-lime-500 to-emerald-700" },
        contexto: "Depois de uma queimada, o certo é:",
        pecaCertaId: "reflorestar",
        feedbackAcerto: "Combo! REFLORESTAR — plantar onde tinha floresta.",
        feedbackErro: "Plantar de novo = REFLORESTAR.",
      },
      {
        id: "r5",
        municipioA: { nome: "Torneira aberta escovando", emoji: "🚰", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Feche enquanto escova", emoji: "💧", cor: "from-cyan-500 to-blue-700" },
        contexto: "Fechar a torneira ao escovar os dentes é:",
        pecaCertaId: "reduzir",
        feedbackAcerto: "Isso! REDUZIR o consumo de água.",
        feedbackErro: "Usar menos = REDUZIR.",
      },
      {
        id: "r6",
        municipioA: { nome: "Fábrica jogando esgoto no rio", emoji: "🏭", cor: "from-slate-600 to-gray-800" },
        municipioB: { nome: "Isso é crime ambiental", emoji: "📢", cor: "from-amber-500 to-orange-700" },
        contexto: "Viu uma fábrica poluindo o rio. O certo é:",
        pecaCertaId: "denunciar",
        feedbackAcerto: "Perfeito! DENUNCIAR (Disque 181, IBAMA).",
        feedbackErro: "Poluição ilegal = DENUNCIAR aos órgãos ambientais.",
      },
    ],
    falaFinal: "6 atitudes eco! Você é um EcoGuardião de verdade.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da AMAZÔNIA: quanto ainda está de pé?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "preservada",
        rotulo: "Floresta em pé (80%)",
        emoji: "🌳",
        percentual: 80,
        cor: "#059669",
        descricao:
          "A boa notícia: cerca de 80% da Amazônia AINDA está preservada. É a maior floresta tropical do mundo.",
        exemplos: ["🌳 Floresta", "🐆 Onças", "🦜 Araras"],
      },
      {
        id: "desmatada",
        rotulo: "Já desmatada (20%)",
        emoji: "🪓",
        percentual: 20,
        cor: "#dc2626",
        descricao:
          "A má notícia: 1 em cada 5 hectares JÁ FOI derrubado. Se continuar, os bichos podem sumir.",
        exemplos: ["🔥 Queimadas", "🐄 Pasto", "🌾 Soja"],
      },
    ],
    falaFinal: "Ainda dá tempo. Mas depende de todos nós CUIDAREM da floresta.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia EcoGuardião Nacional.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "O que significa CONSUMO SUSTENTÁVEL?",
        opcoes: [
          { id: "a", texto: "Comprar tudo que ver na TV sem pensar.", correta: false },
          {
            id: "b",
            texto: "Consumir só o necessário, sem desperdício, protegendo a natureza.",
            correta: true,
          },
          { id: "c", texto: "Nunca mais comprar nada.", correta: false },
        ],
        feedbackAcerto:
          "Isso! SUSTENTÁVEL = consumir com CONSCIÊNCIA, protegendo o amanhã.",
        feedbackErro:
          "Não é comprar tudo nem parar de comprar. É consumir com CONSCIÊNCIA.",
      },
      {
        id: "av2",
        pergunta: "Cortar em massa árvores da floresta se chama...",
        opcoes: [
          { id: "a", texto: "Reflorestamento", correta: false },
          { id: "b", texto: "Desmatamento", correta: true },
          { id: "c", texto: "Reciclagem", correta: false },
        ],
        feedbackAcerto: "Perfeito! DESMATAMENTO = cortar em massa.",
        feedbackErro: "Reflorestar é PLANTAR. Cortar é DESMATAR.",
      },
      {
        id: "av3",
        pergunta: "De quem é a responsabilidade de cuidar da natureza?",
        opcoes: [
          { id: "a", texto: "Só do governo.", correta: false },
          { id: "b", texto: "De todos: governo, empresas E cada cidadão.", correta: true },
          { id: "c", texto: "Só das crianças.", correta: false },
        ],
        feedbackAcerto:
          "Isso! TODOS somos responsáveis. Governo, empresa e cada um de nós.",
        feedbackErro:
          "Cada um faz sua parte: governo, empresa e CIDADÃO. Você também.",
      },
    ],
    selo: {
      nome: "EcoGuardião Nacional",
      subtitulo: "Insígnia da Unidade 6 completa",
      emoji: "♻️",
      cor: "from-emerald-500 to-green-700",
    },
    falaFinal:
      "PARABÉNS, ECOGUARDIÃO! O Brasil precisa de gente como você pra continuar verde.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "EcoGuardião Nacional" },
};

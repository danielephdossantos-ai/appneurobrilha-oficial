import type { AulaGeoV1 } from "../../types";
import hero from "@/assets/geografia-7ano/amazonia.jpg";

/**
 * Geografia · 7º Ano · Unidade 6 · Aula 01
 * Amazônia e Fronteiras Agrícolas
 * BNCC: EF07GE11, EF07GE12
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-amazonia",
  titulo: "Amazônia e Fronteiras Agrícolas",
  iconeTrilha: "🌳",
  bncc: ["EF07GE11", "EF07GE12"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "A maior floresta tropical do planeta está sendo derrubada. Bora ver por quê.",
    mapaUrl: hero,
    imagemDestaqueUrl: hero,
    aurora:
      "Explorador, a AMAZÔNIA tem 5,5 milhões de km² — 60% dentro do Brasil. É a maior floresta tropical do mundo, o maior estoque de biodiversidade do planeta e o principal regulador do clima da América do Sul. Mas em 40 anos, o Brasil já derrubou 20% da floresta pra plantar soja, criar boi e vender madeira.",
    falaFinal: "Bora entender essa pressão sobre a Amazônia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O que MAIS derruba floresta na Amazônia hoje?",
    pergunta: "Principal causa do desmatamento atual:",
    opcoes: [
      { id: "madeira", titulo: "Só a MADEIRA ilegal", subtitulo: "corte pra vender toras", emoji: "🪵", cor: "from-amber-400 to-orange-600" },
      { id: "pecuaria", titulo: "PECUÁRIA + SOJA", subtitulo: "abrir pasto pra boi e plantação", emoji: "🐄", cor: "from-emerald-400 to-teal-600" },
    ],
    respostaCerta: "pecuaria",
    feedbackAcerto: "Isso! 80% do desmatamento é pra virar pasto pra boi. A soja vem depois.",
    feedbackErro: "Madeira ilegal existe, mas 80% do desmatamento é pra PECUÁRIA e SOJA.",
    falaFinal: "A floresta cai pra abrir pasto. Boi na frente, soja atrás.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da Amazônia.",
    instrucao: "Leia cada caderno",
    cadernos: [
      { id: "biodiv", capa: "1. Biodiversidade", emoji: "🦜", cor: "from-emerald-500 to-teal-700", conteudo: "BIODIVERSIDADE: variedade de espécies num ecossistema. A Amazônia tem 10% de todas as espécies conhecidas do planeta.", exemplo: "Ex.: 40.000 espécies de plantas, 1.300 aves, 3.000 peixes, 400 mamíferos." },
      { id: "fron", capa: "2. Fronteira Agrícola", emoji: "🚜", cor: "from-amber-500 to-orange-700", conteudo: "FRONTEIRA AGRÍCOLA: linha em que a floresta é derrubada pra virar plantação ou pasto. Avança sem parar sobre a Amazônia.", exemplo: "Ex.: 'Arco do desmatamento' — do PA ao MT, a soja avança 20 km por ano." },
      { id: "grilagem", capa: "3. Grilagem", emoji: "📜", cor: "from-red-500 to-rose-700", conteudo: "GRILAGEM: falsificação de documentos pra roubar terras públicas ou de povos originários. Nome vem do 'grilo' que amarelava papel falso.", exemplo: "Ex.: fazendeiros invadem terra indígena, falsificam escritura, viram 'donos'." },
      { id: "sust", capa: "4. Uso Sustentável", emoji: "🌱", cor: "from-sky-500 to-blue-700", conteudo: "USO SUSTENTÁVEL: aproveitar a floresta EM PÉ (castanha, açaí, borracha, ecoturismo) sem derrubar.", exemplo: "Ex.: extrativismo de açaí no PA gera renda sem cortar árvores." },
    ],
    falaFinal: "Biodiversidade, fronteira, grilagem, uso sustentável. Vocabulário do jogo amazônico.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "5 pontos-chave da Amazônia atual.",
    instrucao: "Toque em cada balão",
    mapaUrl: hero,
    pontos: [
      { id: "extensao", x: 40, y: 30, emoji: "🌳", cor: "from-emerald-500 to-teal-700", titulo: "5,5 milhões de km²", texto: "60% no Brasil. Também toca Peru, Colômbia, Venezuela, Bolívia, Equador, Guianas e Suriname." },
      { id: "arco", x: 55, y: 55, emoji: "🔥", cor: "from-red-500 to-rose-700", titulo: "Arco do Desmatamento", texto: "Faixa que vai do MA ao MT/RO. É onde a floresta cai mais rápido. Boi, soja, grilagem." },
      { id: "povos", x: 45, y: 45, emoji: "🏹", cor: "from-purple-500 to-fuchsia-700", titulo: "Povos originários", texto: "180 mil indígenas vivem só em terra amazônica brasileira. 305 povos, 274 línguas." },
      { id: "zfm", x: 35, y: 40, emoji: "📱", cor: "from-sky-500 to-blue-700", titulo: "Zona Franca de Manaus", texto: "Polo industrial (TVs, celulares, motos). Criada em 1967 pra dar alternativa econômica à floresta." },
      { id: "carajas", x: 60, y: 40, emoji: "⛏️", cor: "from-slate-500 to-slate-700", titulo: "Carajás (PA) — maior mina de ferro", texto: "Vale opera lá. Ferro sai por trem 900 km até o porto de Itaqui (MA), vai pra China." },
    ],
    falaFinal: "Floresta, arco, povos, ZFM, Carajás. 5 realidades numa só região.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas de ambientalista.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1", pergunta: "A principal causa do desmatamento na Amazônia é:",
        cards: [
          { id: "a", emoji: "🐄", titulo: "Pecuária extensiva", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🪵", titulo: "Madeira ilegal", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "⛏️", titulo: "Mineração", cor: "from-sky-500 to-indigo-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! 80% vira pasto pra boi.", feedbackErro: "É a PECUÁRIA — 80% do desmatamento é pra virar pasto.",
      },
      {
        id: "q2", pergunta: "A Zona Franca de Manaus foi criada pra:",
        cards: [
          { id: "a", emoji: "🌳", titulo: "Preservar a floresta com alternativa industrial", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🌾", titulo: "Plantar soja", cor: "from-amber-500 to-orange-700" },
          { id: "c", emoji: "⛏️", titulo: "Facilitar mineração", cor: "from-sky-500 to-indigo-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Criada em 1967 pra dar emprego sem derrubar floresta.", feedbackErro: "Foi criada pra dar ALTERNATIVA econômica e evitar desmatamento.",
      },
      {
        id: "q3", pergunta: "Grilagem é:",
        cards: [
          { id: "a", emoji: "📜", titulo: "Roubo de terras com documento falso", cor: "from-emerald-500 to-teal-700" },
          { id: "b", emoji: "🦗", titulo: "Praga de grilos na plantação", cor: "from-sky-500 to-indigo-700" },
          { id: "c", emoji: "🌳", titulo: "Reflorestamento", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a", feedbackAcerto: "Isso! Nome vem do 'grilo' que amarelava o papel falso.", feedbackErro: "É ROUBO de terra pública com escritura falsa.",
      },
    ],
    falaFinal: "Radar ambiental ok.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Acenda os 9 estados da AMAZÔNIA LEGAL (área oficial).",
    instrucao: "Marque os estados da Amazônia Legal",
    missao: { tipo: "selecionar", siglas: ["AC", "AM", "RR", "RO", "PA", "AP", "TO", "MT", "MA"], pergunta: "Quais estados compõem a Amazônia Legal brasileira?" },
    falaFinal: "9 estados = 60% do território nacional. A Amazônia Legal é maior que a União Europeia.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize o processo de desmatamento na Amazônia.",
    instrucao: "Arraste na ordem em que acontece",
    pergunta: "Como uma área de floresta vira pasto de boi:",
    paradas: [
      { id: "e1", emoji: "🌳", rotulo: "1. Floresta em pé", descricao: "Floresta original com biodiversidade e povos indígenas. Ponto de partida." },
      { id: "e2", emoji: "🪵", rotulo: "2. Extração de madeira nobre", descricao: "Madeireiros ilegais tiram árvores de valor (ipê, mogno, cerejeira)." },
      { id: "e3", emoji: "🔥", rotulo: "3. Queimada", descricao: "O resto da floresta é queimado pra 'limpar' a área. Fumaça vai a milhares de km." },
      { id: "e4", emoji: "🐄", rotulo: "4. Pasto pra boi", descricao: "Terra fica pouco fértil, então vira PASTO. Poucas cabeças por hectare." },
      { id: "e5", emoji: "🌾", rotulo: "5. Soja substitui o pasto", descricao: "Anos depois, fazendeiro vende pra sojicultor. Pasto vira monocultura de soja." },
    ],
    ordemCerta: ["e1", "e2", "e3", "e4", "e5"],
    feedbackAcerto: "Perfeito! Esse é o 'arco do desmatamento' funcionando.",
    feedbackErro: "Começa pela floresta em pé e termina na soja.",
    falaFinal: "5 etapas. Da floresta à soja em poucos anos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com atenção. Marque as palavras-chave.",
    tituloLivro: "📘 Manual da Amazônia",
    subtitulo: "Capítulo 6 — Floresta sob pressão",
    paragrafos: [
      { id: "p1", texto: "A AMAZÔNIA tem 5,5 milhões de km² — 60% no BRASIL. É a maior floresta TROPICAL do planeta e concentra 10% da biodiversidade mundial.", chaves: ["amazônia", "5,5 milhões", "biodiversidade"] },
      { id: "p2", texto: "20% da floresta brasileira já foi DERRUBADA. A principal causa é a PECUÁRIA extensiva — 80% do desmatamento vira pasto pra boi.", chaves: ["desmatamento", "20%", "pecuária"] },
      { id: "p3", texto: "A FRONTEIRA AGRÍCOLA avança pelo 'ARCO DO DESMATAMENTO' — MA, TO, MT, RO, PA. Grileiros falsificam documentos pra roubar terras.", chaves: ["fronteira agrícola", "arco", "grileiros"] },
      { id: "p4", texto: "Existe outra saída: o USO SUSTENTÁVEL da floresta em pé (castanha, açaí, ecoturismo) rende mais dinheiro que derrubar — sem destruir.", chaves: ["uso sustentável", "floresta em pé", "castanha"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo AMBIENTALISTA EXPRESS! Qual conceito explica cada situação?",
    instrucao: "⏱️ Escolha o conceito certo",
    duracaoSegundos: 15,
    pecas: [
      { id: "bio", emoji: "🦜", rotulo: "Biodiversidade" },
      { id: "fron", emoji: "🚜", rotulo: "Fronteira Agrícola" },
      { id: "gril", emoji: "📜", rotulo: "Grilagem" },
      { id: "sust", emoji: "🌱", rotulo: "Uso Sustentável" },
      { id: "arco", emoji: "🔥", rotulo: "Arco do Desmatamento" },
      { id: "zfm", emoji: "📱", rotulo: "Zona Franca de Manaus" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "40.000 plantas", emoji: "🌿", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "1.300 aves", emoji: "🦜", cor: "from-green-400 to-emerald-600" }, contexto: "Variedade de espécies num ecossistema:", pecaCertaId: "bio", feedbackAcerto: "Isso! BIODIVERSIDADE.", feedbackErro: "Variedade de espécies = BIODIVERSIDADE." },
      { id: "r2", municipioA: { nome: "Soja avança", emoji: "🌾", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "20 km/ano", emoji: "📏", cor: "from-red-400 to-rose-600" }, contexto: "Linha em que a floresta vira plantação:", pecaCertaId: "fron", feedbackAcerto: "Boa! FRONTEIRA AGRÍCOLA.", feedbackErro: "Linha que avança sobre floresta = FRONTEIRA AGRÍCOLA." },
      { id: "r3", municipioA: { nome: "Escritura falsa", emoji: "📜", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Rouba terra pública", emoji: "🚨", cor: "from-orange-400 to-red-600" }, contexto: "Falsificação de documentos pra apropriar terras:", pecaCertaId: "gril", feedbackAcerto: "Isso! GRILAGEM.", feedbackErro: "Documento falso pra roubar terra = GRILAGEM." },
      { id: "r4", municipioA: { nome: "Açaí no PA", emoji: "🫐", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Castanha do Pará", emoji: "🌰", cor: "from-amber-400 to-orange-600" }, contexto: "Ganhar dinheiro com a floresta em pé:", pecaCertaId: "sust", feedbackAcerto: "Boa! USO SUSTENTÁVEL.", feedbackErro: "Floresta em pé rendendo = USO SUSTENTÁVEL." },
      { id: "r5", municipioA: { nome: "MA-TO-MT-RO-PA", emoji: "🗺️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Onde mais desmata", emoji: "🔥", cor: "from-orange-400 to-red-600" }, contexto: "Faixa que concentra o desmatamento amazônico:", pecaCertaId: "arco", feedbackAcerto: "Isso! ARCO DO DESMATAMENTO.", feedbackErro: "Faixa MA-RO com mais desmate = ARCO DO DESMATAMENTO." },
      { id: "r6", municipioA: { nome: "1967 — pólo industrial", emoji: "🏭", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "TVs e celulares", emoji: "📱", cor: "from-indigo-400 to-purple-600" }, contexto: "Alternativa econômica à derrubada da floresta:", pecaCertaId: "zfm", feedbackAcerto: "Isso! ZONA FRANCA DE MANAUS.", feedbackErro: "Pólo industrial de Manaus = ZONA FRANCA." },
    ],
    falaFinal: "6 conceitos dominados. Ambientalista aprovado!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza da FLORESTA amazônica brasileira: como está hoje?",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "pe", rotulo: "Floresta em pé", emoji: "🌳", percentual: 80, cor: "#059669", descricao: "80% da Amazônia brasileira ainda está preservada. Maior floresta tropical do mundo.", exemplos: ["🦜 40.000 plantas", "🐒 400 mamíferos", "🐟 3.000 peixes"] },
      { id: "past", rotulo: "Pasto pra boi", emoji: "🐄", percentual: 12, cor: "#f59e0b", descricao: "12% virou pasto extensivo pra pecuária. Principal causa do desmatamento.", exemplos: ["🐄 Pará, MT, RO", "🥩 Frigoríficos JBS", "🌱 Baixa produtividade"] },
      { id: "soja", rotulo: "Soja e agricultura", emoji: "🌾", percentual: 5, cor: "#dc2626", descricao: "5% virou plantação, principalmente SOJA. Avança sobre o pasto e a floresta.", exemplos: ["🌾 Sinop MT", "🚛 Escoa por Santarém", "🐷 Vai pra ração"] },
      { id: "outros", rotulo: "Cidades, mineração, estradas", emoji: "🏙️", percentual: 3, cor: "#7c3aed", descricao: "3% em usos urbanos e minerários. Manaus, Belém, Carajás, Belo Monte.", exemplos: ["🏙️ Manaus (2mi)", "⛏️ Carajás (ferro)", "⚡ Belo Monte (hidrelétrica)"] },
    ],
    falaFinal: "80% em pé é bom — mas 20% já é muito. E a fronteira avança.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Guardião da Amazônia.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A principal causa do desmatamento amazônico é:", opcoes: [{ id: "a", texto: "Pecuária extensiva", correta: true }, { id: "b", texto: "Mineração", correta: false }, { id: "c", texto: "Turismo", correta: false }], feedbackAcerto: "Isso! 80% vira pasto pra boi.", feedbackErro: "É a PECUÁRIA — 80% do desmatamento." },
      { id: "av2", pergunta: "Grilagem é:", opcoes: [{ id: "a", texto: "Reflorestamento", correta: false }, { id: "b", texto: "Roubo de terra com documento falso", correta: true }, { id: "c", texto: "Colheita legal de castanha", correta: false }], feedbackAcerto: "Perfeito!", feedbackErro: "É ROUBO de terra com escritura falsa." },
      { id: "av3", pergunta: "A Zona Franca de Manaus foi criada pra:", opcoes: [{ id: "a", texto: "Facilitar mineração", correta: false }, { id: "b", texto: "Dar alternativa econômica e evitar desmatamento", correta: true }, { id: "c", texto: "Plantar soja", correta: false }], feedbackAcerto: "Isso! Emprego industrial sem cortar floresta.", feedbackErro: "É pra dar ALTERNATIVA econômica sem derrubar floresta." },
    ],
    selo: { nome: "Guardião da Amazônia", subtitulo: "Insígnia da Floresta", emoji: "🌳", cor: "from-emerald-400 to-teal-600" },
    falaFinal: "Insígnia conquistada! Você defende a maior floresta do planeta.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Guardião da Amazônia" },
};

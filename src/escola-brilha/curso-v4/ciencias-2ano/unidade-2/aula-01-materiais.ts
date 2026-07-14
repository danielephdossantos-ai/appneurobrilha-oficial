import type { AulaGeoV1 } from "../../types";
import brilhaImg from "@/assets/ciencias-2ano/u1-a1/brilha-cientista.png";
import oficinaImg from "@/assets/ciencias-2ano/u2-a1/oficina-materiais.jpg";
import quatroImg from "@/assets/ciencias-2ano/u2-a1/quatro-materiais.jpg";
import mapaCamu2_naturaisImg from "@/assets/ciencias-2ano/mapa-camadas/u2-naturais.jpg";
import mapaCamu2_industriaisImg from "@/assets/ciencias-2ano/mapa-camadas/u2-industriais.jpg";

/**
 * Ciências · 2º Ano · Unidade 2 · Aula 01
 * "Do que são feitas as coisas?" — EF02CI01 / EF02CI02
 * Cristal dos Materiais.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-materiais",
  titulo: "Do que são feitas as coisas?",
  iconeTrilha: "🧱",
  bncc: ["EF02CI01", "EF02CI02"],
  duracaoMin: 25,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a lupa pela oficina. Quantos MATERIAIS diferentes você encontra?",
    mapaUrl: oficinaImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Brilha, o 2º cristal está guardado numa oficina. Só quem descobrir de QUE MATERIAL cada objeto é feito consegue destravar!",
    falaFinal:
      "Tudo à nossa volta é feito de algum material: madeira, vidro, metal, plástico, tecido... Vamos descobrir!",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Antes de investigar: qual material você acha que é o MAIS DURO?",
    pergunta: "Qual material é o MAIS DURO destes três?",
    fotoUrl: quatroImg,
    opcoes: [
      { id: "madeira", titulo: "Madeira", subtitulo: "colher de pau", emoji: "🪵", cor: "from-amber-600 to-yellow-800" },
      { id: "metal", titulo: "Metal", subtitulo: "chave", emoji: "🔑", cor: "from-slate-400 to-slate-700" },
      { id: "plastico", titulo: "Plástico", subtitulo: "patinho", emoji: "🦆", cor: "from-yellow-400 to-amber-500" },
    ],
    respostaCerta: "metal",
    feedbackAcerto:
      "HIPÓTESE CONFIRMADA! Metal é bem mais duro — por isso a gente usa em chaves, panelas, pregos.",
    feedbackErro:
      "Quase! Madeira e plástico dobram ou riscam mais fácil. METAL é o mais duro.",
    falaFinal:
      "Cada material tem PROPRIEDADES diferentes: uns são duros, outros flexíveis, outros transparentes.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Abre cada caderno e conheça 4 materiais do dia a dia.",
    instrucao: "As 4 famílias de materiais",
    cadernos: [
      {
        id: "madeira",
        capa: "MADEIRA",
        emoji: "🪵",
        cor: "from-amber-600 to-yellow-800",
        conteudo: "Vem das árvores. É leve, quente ao toque e pode ser cortada.",
        exemplo: "Ex.: colher de pau, mesa, lápis.",
        fotoUrl: quatroImg,
      },
      {
        id: "vidro",
        capa: "VIDRO",
        emoji: "🫙",
        cor: "from-cyan-300 to-sky-600",
        conteudo: "É TRANSPARENTE — dá pra ver através. Mas quebra fácil!",
        exemplo: "Ex.: garrafa, janela, copo.",
        fotoUrl: quatroImg,
      },
      {
        id: "metal",
        capa: "METAL",
        emoji: "🔑",
        cor: "from-slate-400 to-slate-700",
        conteudo: "É DURO e frio ao toque. Não quebra fácil e conduz calor.",
        exemplo: "Ex.: chave, panela, prego.",
        fotoUrl: quatroImg,
      },
      {
        id: "plastico",
        capa: "PLÁSTICO",
        emoji: "🦆",
        cor: "from-yellow-400 to-amber-500",
        conteudo: "É LEVE e flexível. Feito pelo ser humano, não vem da natureza pronto.",
        exemplo: "Ex.: patinho de banho, garrafa PET, brinquedo.",
        fotoUrl: quatroImg,
      },
    ],
    falaFinal:
      "Madeira, vidro, metal e plástico. Cada um serve pra um tipo de objeto!",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Toque em cada objeto da oficina pra descobrir de QUE MATERIAL ele é feito.",
    instrucao: "Toque em cada objeto",
    layout: "personagem",
    personagemImg: brilhaImg,
    mapaUrl: oficinaImg,
    pontos: [
      { id: "colher", x: 15, y: 60, emoji: "🥄", cor: "from-amber-600 to-yellow-800", titulo: "Colher de pau", texto: "Feita de MADEIRA. Não esquenta rápido — por isso é usada na cozinha.", fotoUrl: quatroImg },
      { id: "jarra", x: 40, y: 55, emoji: "🫙", cor: "from-cyan-300 to-sky-600", titulo: "Jarra", texto: "Feita de VIDRO. Você vê o que tem dentro, mas se cair quebra.", fotoUrl: quatroImg },
      { id: "chave", x: 60, y: 65, emoji: "🔑", cor: "from-slate-400 to-slate-700", titulo: "Chave", texto: "Feita de METAL. É dura, entra na fechadura e não dobra.", fotoUrl: quatroImg },
      { id: "pato", x: 80, y: 60, emoji: "🦆", cor: "from-yellow-400 to-amber-500", titulo: "Patinho", texto: "Feito de PLÁSTICO. É leve, flutua e não enferruja na água.", fotoUrl: quatroImg },
      { id: "caixa", x: 90, y: 30, emoji: "📦", cor: "from-orange-400 to-amber-700", titulo: "Caixa", texto: "Feita de PAPELÃO — um tipo de papel duro que vem da árvore também.", fotoUrl: oficinaImg },
    ],
    falaFinal:
      "Uma oficina é cheia de materiais. Cada um foi escolhido pra uma função!",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Radar ligado! 3 perguntas sobre materiais.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual material é TRANSPARENTE?",
        fotoUrl: quatroImg,
        cards: [
          { id: "a", emoji: "🫙", titulo: "Vidro", cor: "from-cyan-400 to-sky-600" },
          { id: "b", emoji: "🪵", titulo: "Madeira", cor: "from-amber-600 to-yellow-800" },
          { id: "c", emoji: "🔑", titulo: "Metal", cor: "from-slate-400 to-slate-600" },
        ],
        correta: "a",
        feedbackAcerto: "Isso! Só o VIDRO deixa a gente ver através.",
        feedbackErro: "Madeira e metal são opacos. Só o VIDRO é transparente.",
      },
      {
        id: "q2",
        pergunta: "De qual material se faz uma panela?",
        fotoUrl: quatroImg,
        cards: [
          { id: "a", emoji: "🧻", titulo: "Papel", cor: "from-orange-300 to-amber-500" },
          { id: "b", emoji: "🔑", titulo: "Metal", cor: "from-slate-400 to-slate-700" },
          { id: "c", emoji: "🫙", titulo: "Vidro", cor: "from-cyan-400 to-sky-600" },
        ],
        correta: "b",
        feedbackAcerto: "Certo! METAL aguenta o fogo do fogão.",
        feedbackErro: "Papel queima e vidro quebra no calor. Panela é de METAL.",
      },
      {
        id: "q3",
        pergunta: "Qual objeto NÃO é feito de plástico?",
        fotoUrl: oficinaImg,
        cards: [
          { id: "a", emoji: "🦆", titulo: "Patinho", cor: "from-yellow-400 to-amber-500" },
          { id: "b", emoji: "🍶", titulo: "Garrafa PET", cor: "from-cyan-300 to-sky-600" },
          { id: "c", emoji: "🌳", titulo: "Tronco", cor: "from-amber-700 to-yellow-900" },
        ],
        correta: "c",
        feedbackAcerto: "Perfeito! Tronco é MADEIRA, vem da árvore.",
        feedbackErro: "Patinho e garrafa PET são plástico. Tronco é MADEIRA.",
      },
    ],
    falaFinal: "Você já reconhece os materiais no mundo à sua volta!",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores: um mostra os materiais NATURAIS (que vêm da natureza), outro os FEITOS pelo ser humano.",
    instrucao: "Toque nos interruptores",
    mapaUrl: oficinaImg,
    camadas: [
      {
        id: "naturais",
        rotulo: "Naturais",
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        rect: { x: 5, y: 40, w: 45, h: 50 },
        descricao: "Madeira e vidro vêm de coisas da natureza: árvores e areia derretida.",,
        fotoUrl: mapaCamu2_naturaisImg,
      },
      {
        id: "feitos",
        rotulo: "Feitos pelo ser humano",
        emoji: "🏭",
        cor: "from-purple-500 to-fuchsia-700",
        rect: { x: 50, y: 40, w: 45, h: 50 },
        descricao: "Plástico e metal são fabricados em indústrias, transformando o que vem da natureza.",,
        fotoUrl: mapaCamu2_industriaisImg,
      },
    ],
    falaFinal:
      "Todo material começa na natureza, mas alguns passam por muita transformação até virar objeto!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos montar a viagem da MADEIRA, do início ao objeto pronto?",
    instrucao: "Toque nas paradas na ORDEM certa",
    pergunta: "Como a madeira vira uma cadeira?",
    paradas: [
      { id: "arvore", emoji: "🌳", rotulo: "1. Árvore", descricao: "Tudo começa numa árvore da floresta.", fotoUrl: oficinaImg },
      { id: "corte", emoji: "🪓", rotulo: "2. Corte", descricao: "A árvore é cortada em toras de madeira.", fotoUrl: quatroImg },
      { id: "tabua", emoji: "🪵", rotulo: "3. Tábuas", descricao: "As toras viram tábuas finas na serraria.", fotoUrl: quatroImg },
      { id: "cadeira", emoji: "🪑", rotulo: "4. Cadeira", descricao: "O marceneiro monta as tábuas e vira uma cadeira.", fotoUrl: oficinaImg },
    ],
    ordemCerta: ["arvore", "corte", "tabua", "cadeira"],
    feedbackAcerto: "Viagem completa! Da árvore até a cadeira, cada passo na ordem.",
    feedbackErro: "Essa não é a próxima. Pensa: o que vem ANTES?",
    falaFinal: "Antes de existir cadeira, existiu tábua. Antes de tábua, uma árvore!",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia sozinho o Diário dos Materiais.",
    tituloLivro: "📓 Diário dos Materiais",
    subtitulo: "Página 2 — De que é feito?",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Todo objeto é feito de um MATERIAL. Madeira vem das árvores. Vidro vem da areia derretida no forno. Metal vem de pedras chamadas minérios.",
        chaves: ["material", "madeira", "vidro", "metal"],
        definicoes: {
          material: "Aquilo de que um objeto é feito.",
          madeira: "Material que vem do tronco das árvores.",
          vidro: "Material transparente, feito de areia derretida.",
          metal: "Material duro que vem de minérios da terra.",
        },
        fotoUrl: quatroImg,
      },
      {
        id: "p2",
        texto:
          "Cada material tem PROPRIEDADES: o vidro é transparente, o metal é duro, o plástico é flexível, a madeira é quente ao toque.",
        chaves: ["propriedades", "transparente", "flexível"],
        definicoes: {
          propriedades: "Características de um material — dureza, cor, transparência.",
          transparente: "Que deixa a luz passar e a gente enxerga através.",
          flexível: "Que dobra sem quebrar.",
        },
        fotoUrl: oficinaImg,
      },
      {
        id: "p3",
        texto:
          "Antigamente, brinquedos eram quase todos de MADEIRA. Hoje, muitos são de PLÁSTICO. Os materiais mudam com o tempo!",
        chaves: ["antigamente", "plástico"],
        definicoes: {
          antigamente: "Há muito tempo, no passado.",
          plástico: "Material leve, fabricado pelo ser humano.",
        },
        fotoUrl: quatroImg,
      },
    ],
    falaFinal: "Você já sabe que cada objeto conta a história do material dele!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado! Cada rodada mostra um objeto — escolha o MATERIAL certo!",
    instrucao: "⏱️ Leia a pista e toque no material certo!",
    duracaoSegundos: 15,
    pecas: [
      { id: "madeira", emoji: "🪵", rotulo: "Madeira" },
      { id: "vidro", emoji: "🫙", rotulo: "Vidro" },
      { id: "metal", emoji: "🔑", rotulo: "Metal" },
      { id: "plastico", emoji: "🦆", rotulo: "Plástico" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Colher de pau", emoji: "🥄", cor: "from-amber-600 to-yellow-800" },
        municipioB: { nome: "Não esquenta", emoji: "🍲", cor: "from-orange-500 to-amber-700" },
        contexto: "A colher que a vovó usa pra mexer o feijão é feita de qual material?",
        pecaCertaId: "madeira",
        fotoUrl: quatroImg,
        feedbackAcerto: "Isso! Colher de pau é MADEIRA — não esquenta a mão.",
        feedbackErro: "Colher de pau é MADEIRA, por isso serve pro fogão.",
      },
      {
        id: "r2",
        municipioA: { nome: "Janela", emoji: "🪟", cor: "from-cyan-400 to-sky-700" },
        municipioB: { nome: "Deixa ver fora", emoji: "👀", cor: "from-sky-400 to-blue-700" },
        contexto: "A janela deixa ver a rua. É feita de qual material transparente?",
        pecaCertaId: "vidro",
        fotoUrl: quatroImg,
        feedbackAcerto: "Combo! Janela é VIDRO — transparente.",
        feedbackErro: "Só o VIDRO deixa a gente ver através. É a janela!",
      },
      {
        id: "r3",
        municipioA: { nome: "Chave da porta", emoji: "🔑", cor: "from-slate-400 to-slate-700" },
        municipioB: { nome: "Duro e frio", emoji: "❄️", cor: "from-slate-500 to-slate-800" },
        contexto: "A chave é dura, não dobra e é fria ao toque. Que material é?",
        pecaCertaId: "metal",
        fotoUrl: quatroImg,
        feedbackAcerto: "Perfeito! Chave é METAL — duro e frio.",
        feedbackErro: "Chave é dura e não quebra: é METAL.",
      },
      {
        id: "r4",
        municipioA: { nome: "Garrafa PET", emoji: "🍶", cor: "from-cyan-300 to-sky-600" },
        municipioB: { nome: "Leve e flutua", emoji: "🌊", cor: "from-blue-400 to-cyan-600" },
        contexto: "A garrafa PET boia na água e é bem leve. É de qual material?",
        pecaCertaId: "plastico",
        fotoUrl: quatroImg,
        feedbackAcerto: "Isso! Garrafa PET é PLÁSTICO — leve e flexível.",
        feedbackErro: "PET não é vidro (não quebra fácil): é PLÁSTICO.",
      },
    ],
    falaFinal: "Você identifica o material só de olhar e tocar. Cientista dos materiais!",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Dividimos os materiais em duas metades: NATURAIS e FABRICADOS.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: oficinaImg,
    fatias: [
      {
        id: "naturais",
        rotulo: "Naturais",
        emoji: "🌳",
        percentual: 50,
        cor: "#22c55e",
        descricao: "Madeira e vidro têm origem na natureza (árvore e areia).",
        exemplos: ["Colher de pau", "Copo de vidro", "Papel"],
        fotoUrl: quatroImg,
      },
      {
        id: "fabricados",
        rotulo: "Fabricados",
        emoji: "🏭",
        percentual: 50,
        cor: "#a855f7",
        descricao: "Plástico e metais são muito transformados em indústrias.",
        exemplos: ["Patinho de plástico", "Chave de metal", "Garrafa PET"],
        fotoUrl: quatroImg,
      },
    ],
    falaFinal: "Naturais + fabricados = todos os objetos do mundo!",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Última missão pra recuperar o Cristal dos Materiais! 3 perguntas.",
    instrucao: "Responda 3 perguntas rápidas",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "Copo transparente é feito de:",
        fotoUrl: quatroImg,
        opcoes: [
          { id: "a", texto: "Vidro", correta: true },
          { id: "b", texto: "Madeira" },
        ],
        feedbackAcerto: "Isso! Só VIDRO é transparente.",
        feedbackErro: "Madeira não deixa ver através. É VIDRO.",
      },
      {
        id: "q2",
        pergunta: "Panela do fogão é de:",
        fotoUrl: quatroImg,
        opcoes: [
          { id: "a", texto: "Metal", correta: true },
          { id: "b", texto: "Plástico" },
        ],
        feedbackAcerto: "Certo! METAL aguenta o fogo.",
        feedbackErro: "Plástico derreteria. Panela é METAL.",
      },
      {
        id: "q3",
        pergunta: "Colher de pau é de:",
        fotoUrl: quatroImg,
        opcoes: [
          { id: "a", texto: "Madeira", correta: true },
          { id: "b", texto: "Vidro" },
        ],
        feedbackAcerto: "PERFEITO! MADEIRA é ótima porque não esquenta.",
        feedbackErro: "Colher 'de pau' — pau é MADEIRA.",
      },
    ],
    selo: {
      nome: "Cristal dos Materiais",
      subtitulo: "2º cristal desbloqueado!",
      emoji: "💎",
      cor: "from-amber-400 via-orange-500 to-red-600",
    },
    falaFinal: "Você recuperou o Cristal dos Materiais! A oficina está brilhando!",
  },

  recompensa: { xp: 100, moedas: 20, medalha: "Pequeno Inventor" },
};

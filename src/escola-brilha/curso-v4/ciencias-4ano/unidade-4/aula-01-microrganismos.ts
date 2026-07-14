import type { AulaGeoV1 } from "../../types";
import { url as brilhaImg } from "@/assets/ciencias-4ano/u1-a1/brilha-pesquisador.png.asset.json";
import { url as microscopioImg } from "@/assets/ciencias-4ano/u1-a1/microscopio-real.jpg.asset.json";
import { url as bacteriasImg } from "@/assets/ciencias-4ano/u4-a1/bacterias-micro.jpg.asset.json";
import { url as fungoPaoImg } from "@/assets/ciencias-4ano/u4-a1/fungo-pao.jpg.asset.json";
import { url as maosImg } from "@/assets/ciencias-4ano/u4-a1/maos-lavando.jpg.asset.json";
import { url as iogurteImg } from "@/assets/ciencias-4ano/u4-a1/iogurte.jpg.asset.json";
import { url as vacinaImg } from "@/assets/ciencias-4ano/u4-a1/vacina.jpg.asset.json";
import { url as decomposicaoImg } from "@/assets/ciencias-4ano/u4-a1/decomposicao.jpg.asset.json";

/**
 * Ciências · 4º Ano · Unidade 4 · Aula 01
 * "Microrganismos: o mundo invisível" — EF04CI08
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-microrganismos",
  titulo: "Microrganismos",
  iconeTrilha: "🦠",
  bncc: ["EF04CI08"],
  duracaoMin: 30,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Passe a lupa pelo microscópio. Descubra o mundo invisível.",
    mapaUrl: microscopioImg,
    imagemDestaqueUrl: brilhaImg,
    aurora:
      "Equipe, atenção. Há um mundo INTEIRO invisível ao olho nu: bactérias, fungos e vírus. Alguns nos ajudam (iogurte, adubo), outros nos adoecem. Todo cientista precisa entender essa fronteira.",
    falaFinal:
      "Sem microscópio, nunca teríamos descoberto os microrganismos. Ferramenta certa revela mundos novos.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Numa mão SEM lavar após brincar na rua, quantas bactérias existem em média?",
    pergunta: "Hipótese: quantas bactérias moram numa mão suja?",
    fotoUrl: maosImg,
    opcoes: [
      { id: "poucas", titulo: "10 a 100", subtitulo: "quase nada", emoji: "🤏", cor: "from-slate-400 to-slate-600" },
      { id: "medias", titulo: "1.000 a 10.000", subtitulo: "razoável", emoji: "👌", cor: "from-amber-500 to-orange-700" },
      { id: "milhoes", titulo: "MILHÕES", subtitulo: "invisíveis mas muitas", emoji: "🦠", cor: "from-red-500 to-rose-700" },
    ],
    respostaCerta: "milhoes",
    feedbackAcerto:
      "Confirmado pelos dados: uma mão suja carrega em média 3 MILHÕES de bactérias. Por isso lavar as mãos protege tanto.",
    feedbackErro:
      "A resposta correta é MILHÕES. Cada centímetro da pele tem milhares de bactérias — e uma mão inteira, milhões.",
    falaFinal:
      "O invisível é enorme. Ciência é reconhecer que existe muito mais do que os nossos olhos veem.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Cinco termos do mundo microscópico. Estuda cada caderno.",
    instrucao: "Vocabulário técnico da microbiologia",
    cadernos: [
      {
        id: "microrganismo",
        capa: "MICRORGANISMO",
        emoji: "🔬",
        cor: "from-cyan-500 to-sky-700",
        conteudo: "Ser vivo tão pequeno que só é visto com MICROSCÓPIO. Existe às milhões em tudo.",
        exemplo: "Ex.: bactérias, fungos microscópicos, protozoários, vírus.",
        fotoUrl: microscopioImg,
      },
      {
        id: "bacteria",
        capa: "BACTÉRIA",
        emoji: "🦠",
        cor: "from-fuchsia-500 to-purple-700",
        conteudo: "Ser vivo microscópico de UMA célula. Existem bactérias BOAS (intestino, iogurte) e RUINS (que causam doenças).",
        exemplo: "Ex.: lactobacilos (iogurte), Escherichia coli (intestino).",
        fotoUrl: bacteriasImg,
      },
      {
        id: "fungo",
        capa: "FUNGO",
        emoji: "🍄",
        cor: "from-emerald-500 to-green-700",
        conteudo: "Alguns são grandes (cogumelo), outros microscópicos (mofo). Decompõem matéria orgânica ou causam doenças.",
        exemplo: "Ex.: mofo no pão, fermento do pão, cogumelo.",
        fotoUrl: fungoPaoImg,
      },
      {
        id: "beneficos",
        capa: "MICROS BONS",
        emoji: "🥛",
        cor: "from-teal-500 to-emerald-700",
        conteudo: "Fabricam iogurte, queijo, pão, cerveja. Ajudam na digestão. Decompõem lixo natural.",
        exemplo: "Ex.: bactérias do iogurte, fermento do pão, bactérias intestinais.",
        fotoUrl: iogurteImg,
      },
      {
        id: "prevencao",
        capa: "PREVENÇÃO",
        emoji: "🧼",
        cor: "from-cyan-500 to-blue-700",
        conteudo: "Lavar as mãos, cozinhar bem os alimentos, vacinar-se. Métodos de bloquear microrganismos ruins.",
        exemplo: "Ex.: sabão, álcool 70%, vacinas, cozinhar carne.",
        fotoUrl: vacinaImg,
      },
    ],
    falaFinal: "Microrganismo, bactéria, fungo, benéficos e prevenção. Vocabulário de saúde científica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toca em cada morador do mundo microscópico pra ver o que ele faz.",
    instrucao: "Toque em cada microrganismo",
    mapaUrl: microscopioImg,
    pontos: [
      {
        id: "bacteria", x: 25, y: 45, emoji: "🦠", cor: "from-fuchsia-500 to-purple-700",
        titulo: "Bactéria",
        texto: "Uma única célula. Se reproduz rápido dividindo-se em duas. Vive em tudo: solo, água, comida, dentro do nosso corpo.",
        fotoUrl: bacteriasImg,
      },
      {
        id: "fungo", x: 50, y: 35, emoji: "🍄", cor: "from-emerald-500 to-green-700",
        titulo: "Fungo",
        texto: "Cresce em ambientes úmidos. Decompõe alimentos e madeira. Alguns são bons (queijo), outros estragam a comida.",
        fotoUrl: fungoPaoImg,
      },
      {
        id: "iogurte", x: 75, y: 60, emoji: "🥛", cor: "from-teal-500 to-emerald-700",
        titulo: "Fermentação",
        texto: "Bactérias transformam leite em iogurte e queijo. Fermento transforma trigo+água em pão. Microrganismo trabalhando pra gente.",
        fotoUrl: iogurteImg,
      },
      {
        id: "sabao", x: 40, y: 75, emoji: "🧼", cor: "from-cyan-500 to-sky-700",
        titulo: "Sabão",
        texto: "O sabão QUEBRA a membrana das bactérias e vírus. Por isso lavar as mãos remove tantos micros de uma vez.",
        fotoUrl: maosImg,
      },
      {
        id: "vacina", x: 15, y: 75, emoji: "💉", cor: "from-red-500 to-rose-700",
        titulo: "Vacina",
        texto: "Ensina o corpo a se DEFENDER de vírus e bactérias antes de ficar doente. Salva milhões de vidas todo ano.",
        fotoUrl: vacinaImg,
      },
    ],
    falaFinal: "Micros estão em toda parte. Aprender a conviver com eles — usando ciência — é sobrevivência.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas técnicas de microbiologia.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Como se enxerga uma bactéria?",
        fotoUrl: microscopioImg,
        cards: [
          { id: "a", emoji: "🔬", titulo: "Com microscópio", cor: "from-cyan-500 to-sky-700" },
          { id: "b", emoji: "👁️", titulo: "A olho nu", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "🔍", titulo: "Só com lupa", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "a",
        feedbackAcerto: "Sim. Bactéria é MUITO pequena — só microscópio revela.",
        feedbackErro: "Bactéria é invisível a olho nu e à lupa. Só MICROSCÓPIO amplia o suficiente.",
      },
      {
        id: "q2",
        pergunta: "Qual desses é feito por microrganismos BONS?",
        fotoUrl: iogurteImg,
        cards: [
          { id: "a", emoji: "🥛", titulo: "Iogurte", cor: "from-teal-500 to-emerald-700" },
          { id: "b", emoji: "🪨", titulo: "Pedra", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "💧", titulo: "Água pura", cor: "from-cyan-500 to-sky-700" },
        ],
        correta: "a",
        feedbackAcerto: "Correto. Iogurte é feito por BACTÉRIAS que fermentam o leite.",
        feedbackErro: "Iogurte, queijo e pão são feitos por microrganismos BONS.",
      },
      {
        id: "q3",
        pergunta: "Lavar as mãos serve pra:",
        fotoUrl: maosImg,
        cards: [
          { id: "a", emoji: "🧼", titulo: "Remover micros ruins", cor: "from-cyan-500 to-sky-700" },
          { id: "b", emoji: "💧", titulo: "Só molhar a pele", cor: "from-slate-500 to-slate-700" },
          { id: "c", emoji: "✨", titulo: "Fazer bolhas bonitas", cor: "from-fuchsia-500 to-pink-700" },
        ],
        correta: "a",
        feedbackAcerto: "Isso. Sabão + água QUEBRAM as bactérias e vírus grudados na pele.",
        feedbackErro: "Sabão não é só pra molhar. Ele DESTRÓI a membrana dos micros ruins.",
      },
    ],
    falaFinal: "Você entende como cientistas de saúde pensam.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "O mundo microscópico se divide em duas grandes zonas: os que AJUDAM e os que ATRAPALHAM.",
    instrucao: "Toque nos interruptores",
    mapaUrl: microscopioImg,
    camadas: [
      {
        id: "bons",
        rotulo: "Micros aliados",
        emoji: "🥛",
        cor: "from-teal-500 to-emerald-700",
        rect: { x: 5, y: 5, w: 90, h: 45 },
        descricao: "Fermentam iogurte, queijo e pão. Ajudam a digerir comida no intestino. Decompõem lixo natural.",
        fotoUrl: iogurteImg,
      },
      {
        id: "ruins",
        rotulo: "Micros patogênicos",
        emoji: "🦠",
        cor: "from-red-500 to-rose-700",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao: "Causam doenças (gripe, cárie, infecções). Combatidos com higiene, cozimento e vacinas.",
        fotoUrl: bacteriasImg,
      },
    ],
    falaFinal: "Nem todo micro é vilão. Ciência é aprender a diferença.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Rota da prevenção: como impedir que micros ruins entrem no corpo?",
    instrucao: "Toque nas paradas na ORDEM correta",
    pergunta: "Sequência da prevenção:",
    paradas: [
      { id: "lavar", emoji: "🧼", rotulo: "1. Lavar as mãos", descricao: "Sabão remove milhões de micros da pele.", fotoUrl: maosImg },
      { id: "cozinhar", emoji: "🔥", rotulo: "2. Cozinhar bem", descricao: "Calor mata bactérias na carne, no ovo, no leite.", fotoUrl: fungoPaoImg },
      { id: "vacinar", emoji: "💉", rotulo: "3. Vacinar", descricao: "Ensina o corpo a se defender antes de adoecer.", fotoUrl: vacinaImg },
      { id: "saude", emoji: "💪", rotulo: "4. Corpo saudável", descricao: "Sistema imune forte enfrenta o resto.", fotoUrl: iogurteImg },
    ],
    ordemCerta: ["lavar", "cozinhar", "vacinar", "saude"],
    feedbackAcerto: "Rota da saúde completa. Higiene + alimentação segura + vacina = prevenção real.",
    feedbackErro: "Pensa em barreiras: primeiro a pele (lavar), depois a comida (cozinhar), depois o corpo (vacinar).",
    falaFinal: "Prevenção salva mais vidas que qualquer remédio.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua leitura. Relatório do laboratório de microbiologia.",
    tituloLivro: "📓 Relatório · Laboratório de Microbiologia",
    subtitulo: "Investigação: o mundo invisível",
    paragrafos: [
      {
        id: "p1",
        texto:
          "MICRORGANISMOS são seres vivos tão pequenos que só se enxergam com MICROSCÓPIO. Estão em todo lugar: no ar, na água, no solo, na comida, no nosso corpo. Os principais grupos são BACTÉRIAS, FUNGOS e VÍRUS.",
        chaves: ["microrganismos", "microscópio", "bactérias"],
        definicoes: {
          microrganismos: "Seres vivos invisíveis a olho nu.",
          microscópio: "Instrumento que amplia milhares de vezes.",
          bactérias: "Microrganismos de uma única célula.",
        },
        fotoUrl: microscopioImg,
      },
      {
        id: "p2",
        texto:
          "Nem todo micro é ruim. FERMENTAÇÃO usa bactérias e fungos pra fazer iogurte, queijo, pão e vinho. No nosso intestino, bilhões de bactérias BOAS ajudam a digerir a comida. Decompositores no solo reciclam matéria morta.",
        chaves: ["fermentação", "bactérias boas"],
        definicoes: {
          fermentação: "Transformação de alimento por micros bons.",
          "bactérias boas": "Que vivem em harmonia com o corpo e ajudam.",
        },
        fotoUrl: iogurteImg,
      },
      {
        id: "p3",
        texto:
          "Micros RUINS causam doenças. Bactérias podem causar cárie, infecção; vírus causam gripe, dengue; fungos causam micoses. A CIÊNCIA da saúde ensina 3 defesas: HIGIENE (lavar mãos), CUIDADO COM COMIDA (cozinhar, geladeira) e VACINAS (treinar o corpo).",
        chaves: ["higiene", "vacinas"],
        definicoes: {
          higiene: "Práticas de limpeza que removem micros da pele e do ambiente.",
          vacinas: "Preparados que ensinam o corpo a se defender de micros específicos.",
        },
        fotoUrl: vacinaImg,
      },
    ],
    falaFinal: "Você agora enxerga o mundo invisível — e sabe como se proteger dele.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Cronômetro ligado. Classifica cada situação — micro BOM ou RUIM?",
    instrucao: "⏱️ Escolha certo",
    duracaoSegundos: 20,
    pecas: [
      { id: "bom", emoji: "🥛", rotulo: "Micro bom" },
      { id: "ruim", emoji: "🦠", rotulo: "Micro ruim" },
      { id: "higiene", emoji: "🧼", rotulo: "Prevenção" },
      { id: "instrumento", emoji: "🔬", rotulo: "Instrumento" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Bactéria do iogurte", emoji: "🥛", cor: "from-teal-500 to-emerald-700" },
        municipioB: { nome: "Fermenta o leite", emoji: "🧫", cor: "from-cyan-500 to-sky-700" },
        contexto: "Lactobacilos transformando leite em iogurte cremoso no laboratório de fermentação.",
        pecaCertaId: "bom",
        fotoUrl: iogurteImg,
        feedbackAcerto: "Sim. Bactéria útil = MICRO BOM.",
        feedbackErro: "Iogurte é feito por bactérias BOAS. Fermentação = útil.",
      },
      {
        id: "r2",
        municipioA: { nome: "Bolor no pão", emoji: "🍞", cor: "from-slate-500 to-slate-700" },
        municipioB: { nome: "Estraga a comida", emoji: "🍄", cor: "from-red-500 to-rose-700" },
        contexto: "Pão esquecido há dias com manchas verdes e brancas de mofo.",
        pecaCertaId: "ruim",
        fotoUrl: fungoPaoImg,
        feedbackAcerto: "Correto. Estraga comida = MICRO RUIM (nesse caso).",
        feedbackErro: "Mofo estraga o pão — não pode comer. Micro RUIM.",
      },
      {
        id: "r3",
        municipioA: { nome: "Sabão + água", emoji: "🧼", cor: "from-cyan-500 to-sky-700" },
        municipioB: { nome: "Lavar as mãos", emoji: "💧", cor: "from-teal-500 to-emerald-700" },
        contexto: "Depois de brincar na rua, a criança usa sabão e água pra lavar as mãos por 20 segundos.",
        pecaCertaId: "higiene",
        fotoUrl: maosImg,
        feedbackAcerto: "Isso. Sabão remove micros ruins = PREVENÇÃO.",
        feedbackErro: "Lavar mãos com sabão é medida de PREVENÇÃO — não é o micro em si.",
      },
      {
        id: "r4",
        municipioA: { nome: "Microscópio ligado", emoji: "🔬", cor: "from-slate-600 to-slate-900" },
        municipioB: { nome: "Amplia 1000 vezes", emoji: "🔍", cor: "from-amber-500 to-orange-700" },
        contexto: "Cientista olhando por um microscópio pra ver bactérias que são invisíveis a olho nu.",
        pecaCertaId: "instrumento",
        fotoUrl: microscopioImg,
        feedbackAcerto: "Sim. Microscópio é o INSTRUMENTO — não é o micro.",
        feedbackErro: "Microscópio é a ferramenta pra ver os micros. Não é o micro em si.",
      },
    ],
    falaFinal: "Você classifica micros e medidas de saúde como um profissional.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "O mundo microscópico se divide em duas grandes categorias por efeito.",
    instrucao: "🍕 Toque nas fatias",
    fotoUrl: microscopioImg,
    fatias: [
      {
        id: "uteis",
        rotulo: "Micros úteis",
        emoji: "🥛",
        percentual: 60,
        cor: "#0d9488",
        descricao: "A maioria dos micros é NEUTRA ou BOA. Fermentam comida, decompõem lixo, vivem no nosso intestino.",
        exemplos: ["Iogurte", "Queijo", "Pão", "Compostagem"],
        fotoUrl: iogurteImg,
      },
      {
        id: "doenca",
        rotulo: "Micros patogênicos",
        emoji: "🦠",
        percentual: 40,
        cor: "#dc2626",
        descricao: "Alguns causam doenças. Combatidos com higiene, alimentação segura e vacinas.",
        exemplos: ["Gripe", "Cárie", "Infecção", "Mofo estragando comida"],
        fotoUrl: bacteriasImg,
      },
    ],
    falaFinal: "A maioria dos micros nos ajuda. Só uma parte precisa ser combatida.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Missão final. 3 perguntas.",
    instrucao: "Responda 3 perguntas para receber o selo",
    fotoUrl: brilhaImg,
    perguntas: [
      {
        id: "q1",
        pergunta: "Bactérias podem ser vistas com:",
        fotoUrl: microscopioImg,
        opcoes: [
          { id: "a", texto: "Microscópio", correta: true },
          { id: "b", texto: "Olho nu" },
        ],
        feedbackAcerto: "Sim. Só microscópio amplia o suficiente.",
        feedbackErro: "A olho nu não dá. Precisa de MICROSCÓPIO.",
      },
      {
        id: "q2",
        pergunta: "Iogurte é feito por:",
        fotoUrl: iogurteImg,
        opcoes: [
          { id: "a", texto: "Bactérias boas (fermentação)", correta: true },
          { id: "b", texto: "Bactérias que causam gripe" },
        ],
        feedbackAcerto: "Certo. Lactobacilos fermentam o leite.",
        feedbackErro: "Iogurte usa bactérias BOAS. Gripe é vírus, e é ruim.",
      },
      {
        id: "q3",
        pergunta: "A melhor forma de PREVENIR doenças por micros:",
        fotoUrl: maosImg,
        opcoes: [
          { id: "a", texto: "Higiene, cozimento e vacinas", correta: true },
          { id: "b", texto: "Torcer pra não pegar" },
        ],
        feedbackAcerto: "Sim. Três defesas cientificamente comprovadas.",
        feedbackErro: "Ciência salva vidas: HIGIENE + COZIMENTO + VACINAS.",
      },
    ],
    selo: {
      nome: "Selo da Microbiologia",
      subtitulo: "Unidade 4 concluída · Microbiólogo Iniciante",
      emoji: "🔬",
      cor: "from-fuchsia-400 via-purple-500 to-indigo-700",
    },
    falaFinal: "Selo da microbiologia registrado. Próxima missão: sol, sombras e pontos cardeais.",
  },

  recompensa: { xp: 150, moedas: 30, medalha: "Microbiólogo Júnior" },
};

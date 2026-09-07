import type { AulaGeoV1 } from "../../types";
import { url as imgDir } from "@/assets/historia-9ano/u6-diretas-ja.jpg.asset.json";
import { url as imgRes } from "@/assets/historia-9ano/u6-resistencia-cultural.jpg.asset.json";
import { url as imgTanqueDit } from "@/assets/historia-9ano/u6-tanque-ditadura.jpg.asset.json";
import { url as imgMpb } from "@/assets/historia-9ano/u6-mpb-resistencia.jpg.asset.json";
import { url as imgDiretas } from "@/assets/historia-9ano/u6-diretas-comicio.jpg.asset.json";
export const aula02: AulaGeoV1 = {
  slug: "aula-02-golpe-memoria-justica",
  titulo: "O Golpe de 1964: Processo, Memória e Justiça",
  iconeTrilha: "📁",
  bncc: ["EF09HI19"],
  duracaoMin: 30,
  estilo: "teen",


  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgTanqueDit,
    imagemDestaqueUrl: imgDiretas,
    aurora:
      "31 de março de 1964: tropas se movem sobre o Rio de Janeiro. João Goulart, presidente eleito em chapa com Jânio Quadros, foge para o Uruguai. O golpe teve participação de generais, mas também de políticos civis, empresários, grandes jornais e setores da Igreja, unidos pelo medo do 'comunismo' em plena Guerra Fria. Décadas depois, comissões da verdade tentam reconstruir o que aconteceu e responsabilizar os culpados por mortes e torturas.",
    falaFinal: "Golpe civil-militar: nem só farda, nem só decisão de um dia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Por que os historiadores usam o termo 'golpe CIVIL-militar' e não apenas 'golpe militar'?",
    pergunta: "O golpe de 1964 teve apoio de quem, além dos militares?",
    fotoUrl: imgDir,
    opcoes: [
      { id: "civ", titulo: "SETORES CIVIS", subtitulo: "empresários, políticos, jornais e parte da Igreja", emoji: "🤝", cor: "from-amber-800 to-slate-950" },
      { id: "so", titulo: "NINGUÉM MAIS", subtitulo: "decisão isolada dos generais", emoji: "❌", cor: "from-teal-800 to-slate-950" },
          { id: "extra2", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "civ",
    feedbackAcerto:
      "Correto. A Marcha da Família com Deus pela Liberdade reuniu milhares de civis nas ruas antes do golpe; grandes jornais como O Estado de S. Paulo apoiaram; empresários financiaram campanhas anticomunistas. Por isso os historiadores falam em golpe CIVIL-militar.",
    feedbackErro:
      "Não foi só militar. Empresários, políticos, jornais e parte da Igreja apoiaram e ajudaram a preparar o golpe — por isso o termo correto é golpe CIVIL-militar.",
    falaFinal: "Golpe é sempre resultado de uma aliança de forças, não de um grupo isolado.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave sobre o processo do golpe e a memória sobre ele.",
    instrucao: "",
    cadernos: [
      {
        id: "gcm",
        capa: "Golpe Civil-Militar",
        emoji: "🎖️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTanqueDit,
        conteudo:
          "GOLPE CIVIL-MILITAR é o termo usado por historiadores para descrever a ruptura institucional de 1964: os militares assumiram o poder, mas com apoio decisivo de civis — políticos conservadores, empresários, latifundiários, grandes meios de comunicação e setores da Igreja Católica.",
        exemplo:
          "Exemplo: a Marcha da Família com Deus pela Liberdade (São Paulo, 19 de março de 1964) reuniu cerca de 500 mil pessoas contra o governo Goulart, dias antes do golpe.",
      },
      {
        id: "jang",
        capa: "Reformas de Base",
        emoji: "🌾",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgDir,
        conteudo:
          "REFORMAS DE BASE eram o programa de João Goulart: reforma agrária, reforma urbana, reforma tributária e nacionalização de setores estratégicos. Assustaram elites econômicas e foram usadas como justificativa para o golpe.",
        exemplo:
          "Exemplo: em 13 de março de 1964, no Comício da Central do Brasil (Rio), Jango anunciou a nacionalização de refinarias de petróleo e a reforma agrária — 12 dias antes do golpe.",
      },
      {
        id: "cnv",
        capa: "Comissão Nacional da Verdade",
        emoji: "📁",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMpb,
        conteudo:
          "COMISSÃO NACIONAL DA VERDADE (CNV, 2012-2014) investigou violações de direitos humanos cometidas entre 1946 e 1988, principalmente durante a ditadura. Concluiu que houve pelo menos 434 mortos e desaparecidos políticos e identificou mais de 300 agentes responsáveis por torturas.",
        exemplo:
          "Exemplo: o relatório final da CNV (dezembro de 2014) recomendou a responsabilização dos torturadores — mas a Lei de Anistia (1979) segue impedindo, até hoje, que eles sejam julgados no Brasil.",
      },
      {
        id: "anis",
        capa: "Lei de Anistia (1979)",
        emoji: "⚖️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgDiretas,
        conteudo:
          "LEI DE ANISTIA (Lei 6.683/1979) perdoou crimes políticos cometidos entre 1961 e 1979 — tanto de opositores presos quanto, segundo interpretação do STF em 2010, de agentes do Estado que torturaram. É a chamada 'ANISTIA AMPLA, GERAL E IRRESTRITA'.",
        exemplo:
          "Exemplo: em 2018, a Corte Interamericana de Direitos Humanos condenou o Brasil no caso Guerrilha do Araguaia por não investigar e punir os responsáveis, mesmo com a Lei de Anistia.",
      },
    ],
    falaFinal: "Golpe civil-militar + Reformas de Base + CNV + Lei de Anistia. As peças da memória e da justiça de transição.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três etapas do processo que levou ao golpe. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgTanqueDit,
    pontos: [
      {
        id: "cri",
        x: 22,
        y: 30,
        emoji: "⚡",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgDir,
        titulo: "CRISE POLÍTICA (1961-64)",
        texto:
          "Jânio Quadros renuncia em 1961; Jango assume sob crise, com poderes reduzidos (parlamentarismo). Um plebiscito devolve poderes presidenciais em 1963, mas a polarização entre esquerda e direita cresce.",
      },
      {
        id: "mob",
        x: 52,
        y: 55,
        emoji: "📢",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMpb,
        titulo: "MOBILIZAÇÕES OPOSTAS",
        texto:
          "De um lado, Comício da Central do Brasil (13/03/1964) defende reformas de base. De outro, Marcha da Família com Deus pela Liberdade (19/03/1964) reúne conservadores contra o governo.",
      },
      {
        id: "golp",
        x: 80,
        y: 38,
        emoji: "🎖️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTanqueDit,
        titulo: "GOLPE (31/03-01/04/1964)",
        texto:
          "Tropas do general Mourão Filho saem de Minas Gerais rumo ao Rio. Jango não resiste e vai para o Uruguai. O Congresso, sob pressão, declara vaga a presidência.",
      },
    ],
    falaFinal: "Crise política + mobilizações opostas + ação militar. O golpe teve etapas, não foi um raio em céu azul.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Por que se usa o termo 'golpe CIVIL-militar' de 1964?",
        fotoUrl: imgDir,
        cards: [
          { id: "c", emoji: "🤝", titulo: "Teve apoio de civis organizados", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "🎖️", titulo: "Foi decisão isolada dos generais", cor: "from-amber-600 to-slate-900" },
          { id: "e", emoji: "🌍", titulo: "Foi ordem direta da ONU", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. Empresários, políticos, jornais e a Igreja apoiaram o golpe.",
        feedbackErro: "É porque teve apoio civil organizado, não decisão isolada dos militares.",
      },
      {
        id: "q2",
        pergunta: "O que a Comissão Nacional da Verdade (2012-2014) concluiu?",
        fotoUrl: imgMpb,
        cards: [
          { id: "m", emoji: "📁", titulo: "Ao menos 434 mortos e desaparecidos políticos", cor: "from-teal-600 to-slate-900" },
          { id: "n", emoji: "❌", titulo: "Que não houve violações de direitos humanos", cor: "from-amber-600 to-slate-900" },
          { id: "z", emoji: "🕊️", titulo: "Que a ditadura nunca existiu", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "m",
        feedbackAcerto: "Correto. A CNV documentou 434 mortos/desaparecidos e centenas de torturadores identificados.",
        feedbackErro: "A CNV comprovou graves violações de direitos humanos, com pelo menos 434 mortos e desaparecidos.",
      },
      {
        id: "q3",
        pergunta: "O que fez a Lei de Anistia de 1979?",
        fotoUrl: imgDiretas,
        cards: [
          { id: "p", emoji: "⚖️", titulo: "Perdoou crimes políticos de 1961 a 1979", cor: "from-teal-600 to-slate-900" },
          { id: "j", emoji: "🔒", titulo: "Condenou todos os torturadores", cor: "from-amber-600 to-slate-900" },
          { id: "x", emoji: "🗳️", titulo: "Convocou eleições diretas imediatas", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. A Lei de Anistia perdoou crimes políticos — e até hoje impede julgamento de torturadores.",
        feedbackErro: "A Lei de Anistia perdoou os crimes políticos do período — não condenou ninguém.",
      },
    ],
    falaFinal: "Você já entende o processo do golpe e os limites da memória e da justiça no Brasil.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois grupos que se enfrentaram em março de 1964.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgDiretas,
    camadas: [
      {
        id: "pgo",
        rotulo: "Apoiadores das Reformas de Base",
        emoji: "🌾",
        cor: "from-teal-700 to-slate-900",
        rect: { x: 5, y: 10, w: 90, h: 40 },
        descricao:
          "João Goulart, sindicatos, União Nacional dos Estudantes (UNE), Ligas Camponesas. Defendiam reforma agrária, urbana e nacionalizações.",
      },
      {
        id: "cgo",
        rotulo: "Aliança golpista",
        emoji: "🎖️",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "Generais como Castelo Branco e Costa e Silva, políticos como Carlos Lacerda, grandes empresários, jornais como O Estado de S. Paulo e setores da Igreja. Uniram-se contra o 'perigo comunista'.",
      },
    ],
    falaFinal: "Dois projetos de Brasil em rota de colisão — a força venceu em 1964.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as etapas do processo do golpe.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Do comício às tropas na rua",
    paradas: [
      { id: "com", emoji: "📢", rotulo: "1. Comício da Central (13/03/1964)", fotoUrl: imgDir, descricao: "Jango anuncia reformas de base." },
      { id: "mar", emoji: "🙏", rotulo: "2. Marcha da Família (19/03/1964)", fotoUrl: imgDiretas, descricao: "Conservadores saem às ruas contra o governo." },
      { id: "tro", emoji: "🎖️", rotulo: "3. Tropas avançam (31/03/1964)", fotoUrl: imgTanqueDit, descricao: "General Mourão Filho sai de Minas rumo ao Rio." },
      { id: "cnv", emoji: "📁", rotulo: "4. Comissão da Verdade (2012-2014)", fotoUrl: imgMpb, descricao: "Décadas depois, o país tenta apurar os fatos." },
    ],
    ordemCerta: ["com", "mar", "tro", "cnv"],
    feedbackAcerto: "Perfeito. Do confronto político ao golpe — e décadas depois, a busca por memória e justiça.",
    feedbackErro: "Comece pelo comício de Jango (13/03) e siga a cronologia.",
    falaFinal: "4 marcos, quase 50 anos entre o golpe e sua apuração oficial.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 6-B da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 6-B — O processo do golpe, memória e justiça",
    paragrafos: [
      {
        id: "p1",
        texto:
          "O golpe de 1964 não surgiu do nada. Desde a renúncia de Jânio Quadros (1961), o Brasil vivia forte polarização. João Goulart defendia as REFORMAS DE BASE — agrária, urbana, tributária — que assustavam proprietários de terra e empresários.",
        chaves: ["Reformas de Base"],
        definicoes: {
          "Reformas de Base": "Programa de mudanças estruturais proposto por João Goulart: reforma agrária, urbana, tributária e nacionalizações.",
        },
        fotoUrl: imgDir,
      },
      {
        id: "p2",
        texto:
          "O golpe foi GOLPE CIVIL-MILITAR: teve participação decisiva de políticos, empresários, grandes jornais e setores da Igreja, além dos militares que efetivamente tomaram o poder em 31 de março e 1º de abril de 1964.",
        chaves: ["Golpe Civil-Militar"],
        definicoes: {
          "Golpe Civil-Militar": "Ruptura institucional de 1964 com participação conjunta de militares e civis (políticos, empresários, imprensa, Igreja).",
        },
        fotoUrl: imgTanqueDit,
      },
      {
        id: "p3",
        texto:
          "Décadas depois, a COMISSÃO NACIONAL DA VERDADE (2012-2014) investigou os crimes da ditadura e concluiu que houve pelo menos 434 mortos e desaparecidos políticos, além de milhares de casos de tortura documentados.",
        chaves: ["Comissão Nacional da Verdade"],
        definicoes: {
          "Comissão Nacional da Verdade": "Órgão criado em 2012 para investigar violações de direitos humanos ocorridas principalmente durante a ditadura militar.",
        },
        fotoUrl: imgMpb,
      },
      {
        id: "p4",
        texto:
          "A LEI DE ANISTIA (1979) segue impedindo, na prática, que torturadores sejam julgados no Brasil — mesmo com a condenação do país pela Corte Interamericana de Direitos Humanos. Por isso a memória e a justiça sobre o período ainda são debate atual.",
        chaves: ["Lei de Anistia"],
        definicoes: {
          "Lei de Anistia": "Lei de 1979 que perdoou crimes políticos do período, hoje usada para impedir julgamento de agentes torturadores.",
        },
        fotoUrl: imgDiretas,
      },
    ],
    falaFinal: "Leitura concluída. Golpe, memória e justiça continuam sendo discutidos no Brasil de hoje.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria no processo do golpe.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "gov", emoji: "🌾", rotulo: "Governo Goulart" },
      { id: "gol", emoji: "🎖️", rotulo: "Golpe civil-militar" },
      { id: "mem", emoji: "📁", rotulo: "Memória e justiça" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Reformas de Base", emoji: "🌾", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Anunciadas em 13/03/1964", emoji: "📢", cor: "from-teal-600 to-slate-900" }, contexto: "Programa de Jango.", pecaCertaId: "gov", feedbackAcerto: "Correto. Reformas de Base = governo Goulart.", feedbackErro: "É Governo Goulart." },
      { id: "r2", municipioA: { nome: "Marcha da Família com Deus", emoji: "🙏", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Mobilização conservadora", emoji: "📣", cor: "from-amber-600 to-slate-900" }, contexto: "19/03/1964.", pecaCertaId: "gol", feedbackAcerto: "Correto. Faz parte da preparação do golpe civil-militar.", feedbackErro: "É Golpe civil-militar." },
      { id: "r3", municipioA: { nome: "Comissão Nacional da Verdade", emoji: "📁", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "434 mortos e desaparecidos documentados", emoji: "🕯️", cor: "from-cyan-600 to-slate-900" }, contexto: "2012-2014.", pecaCertaId: "mem", feedbackAcerto: "Correto. CNV = memória e justiça.", feedbackErro: "É Memória e justiça." },
      { id: "r4", municipioA: { nome: "General Mourão Filho", emoji: "🎖️", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Tropas saem de Minas Gerais", emoji: "🚚", cor: "from-amber-600 to-slate-900" }, contexto: "31/03/1964.", pecaCertaId: "gol", feedbackAcerto: "Correto. Ação militar do golpe.", feedbackErro: "É Golpe civil-militar." },
      { id: "r5", municipioA: { nome: "Lei de Anistia (1979)", emoji: "⚖️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Impede julgar torturadores até hoje", emoji: "🔒", cor: "from-cyan-600 to-slate-900" }, contexto: "Debate atual.", pecaCertaId: "mem", feedbackAcerto: "Correto. Lei de Anistia = memória e justiça.", feedbackErro: "É Memória e justiça." },
      { id: "r6", municipioA: { nome: "Comício da Central do Brasil", emoji: "📢", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Nacionalização de refinarias", emoji: "🛢️", cor: "from-teal-600 to-slate-900" }, contexto: "13/03/1964.", pecaCertaId: "gov", feedbackAcerto: "Correto. Comício = governo Goulart.", feedbackErro: "É Governo Goulart." },
    ],
    falaFinal: "6 rodadas. Você já organiza governo, golpe e memória/justiça.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Composição da aliança que apoiou o golpe de 1964, por setor.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgTanqueDit,
    fatias: [
      { id: "mil", rotulo: "Forças Armadas (~40%)", emoji: "🎖️", percentual: 40, cor: "#b45309", descricao: "Alto-comando do Exército, Marinha e Aeronáutica lideraram a movimentação militar e assumiram o governo a partir de 1964.", exemplos: ["🎖️ Exército", "⚓ Marinha", "✈️ Aeronáutica"] },
      { id: "civ", rotulo: "Setores civis (~60%)", emoji: "🤝", percentual: 60, cor: "#0f766e", descricao: "Políticos conservadores, empresários, grandes jornais e parte da Igreja apoiaram e legitimaram o golpe perante a opinião pública.", exemplos: ["🏢 Empresários", "📰 Imprensa", "⛪ Igreja"] },
    ],
    falaFinal: "Golpe não foi 'coisa de militar' isolado — foi aliança de forças. Por isso 'civil-militar'.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre o processo do golpe.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDiretas,
    perguntas: [
      { id: "av1", pergunta: "O golpe de 1964 é chamado de 'civil-militar' porque:", opcoes: [
        { id: "a", texto: "Teve apoio de políticos, empresários, imprensa e Igreja.", correta: true },
        { id: "b", texto: "Foi feito só por civis, sem militares.", correta: false },
        { id: "c", texto: "Foi organizado pela ONU.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Foi aliança entre militares e setores civis.", feedbackErro: "É porque teve apoio civil organizado, além dos militares." },
      { id: "av2", pergunta: "A Comissão Nacional da Verdade concluiu que houve, no mínimo:", opcoes: [
        { id: "a", texto: "434 mortos e desaparecidos políticos.", correta: true },
        { id: "b", texto: "Nenhuma vítima.", correta: false },
        { id: "c", texto: "1 milhão de mortos.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Número documentado pela CNV (2014).", feedbackErro: "É 434 mortos e desaparecidos políticos documentados." },
      { id: "av3", pergunta: "A Lei de Anistia de 1979, na prática, ainda hoje:", opcoes: [
        { id: "a", texto: "Impede o julgamento de agentes torturadores.", correta: true },
        { id: "b", texto: "Condenou todos os responsáveis.", correta: false },
        { id: "c", texto: "Foi revogada em 1985.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. É um dos maiores debates sobre justiça de transição no Brasil.", feedbackErro: "Ela impede, na prática, o julgamento dos torturadores até hoje." },
    ],
    selo: { nome: "EF09HI19", subtitulo: "Golpe civil-militar, memória e justiça", emoji: "📁", cor: "from-amber-500 to-slate-900", fotoUrl: imgTanqueDit },
    falaFinal: "Você entende hoje por que golpe, memória e justiça ainda são debate no Brasil.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Golpe, Memória e Justiça" },

};

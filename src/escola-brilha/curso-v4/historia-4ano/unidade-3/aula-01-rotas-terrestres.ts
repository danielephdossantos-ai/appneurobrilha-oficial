import type { AulaGeoV1 } from "../../types";
import { url as imgTropeiros } from "@/assets/historia-4ano/tropeiros-mulas.jpg.asset.json";
import { url as imgFeijao } from "@/assets/historia-4ano/feijao-tropeiro.jpg.asset.json";
import { url as imgMapa } from "@/assets/historia-4ano/mapa-tropeiros.jpg.asset.json";
import { url as imgFerradura } from "@/assets/historia-4ano/ferradura.jpg.asset.json";
/**
 * História · 4º Ano · Unidade 3 · Aula 01
 * "As Rotas Terrestres: Ouro e Tropeirismo" — trilhas do interior do Brasil.
 * Restaura a Página 3 das Crônicas: As Trilhas do Interior.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-rotas-terrestres",
  titulo: "As Rotas Terrestres: Ouro e Tropeirismo",
  iconeTrilha: "🐴",
  bncc: ["EF04HI05", "EF04HI09"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a fotografia. Uma ferradura de ferro enterrada no chão vermelho — talvez de um cavalo de tropeiro do século XVIII.",
    mapaUrl: imgFerradura,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, antes de existir caminhão, trem ou avião, TODA mercadoria do interior do Brasil viajava no lombo de mulas conduzidas por homens corajosos: os TROPEIROS. Eles cruzavam serras, rios e florestas por meses.",
    falaFinal:
      "Nesta aula você acende o terceiro ponto do mapa das Crônicas: As Trilhas do Interior.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: por que muitas cidades brasileiras nasceram justamente nos pontos onde as tropas paravam pra descansar (chamados de POUSOS)?",
    pergunta: "Por que pousos viraram cidades?",
    fotoUrl: imgTropeiros,
    opcoes: [
      {
        id: "comercio",
        titulo: "Comerciantes se instalaram para vender aos tropeiros",
        subtitulo: "comida, ferramentas, roupas e ferraduras",
        emoji: "🛖",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgTropeiros,
      },
      {
        id: "acaso",
        titulo: "Foi puro acaso e não teve motivo",
        subtitulo: "as cidades surgiram aleatoriamente",
        emoji: "🎲",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgFerradura,
      },
    ],
    respostaCerta: "comercio",
    feedbackAcerto:
      "Correto! Onde a tropa parava, alguém abria uma venda, uma pousada, uma ferraria. Aí surgia um povoado, depois uma cidade.",
    feedbackErro:
      "Não foi acaso. Os POUSOS atraíam COMÉRCIO — vendas, ferrarias, pousadas — e viraram cidades.",
    falaFinal:
      "Guarde: história econômica desenha o mapa das cidades.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Três palavras técnicas do vocabulário tropeiro do 4º ano.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "tropeiros",
        capa: "Tropeiros",
        emoji: "🐴",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgTropeiros,
        conteudo:
          "TROPEIROS eram homens que transportavam mercadorias em TROPAS (grupos) de mulas e cavalos pelo interior do Brasil, dos séculos XVIII e XIX. Vestiam couro grosso, dormiam em pousos e cruzavam serras carregando sal, tecido, ferro.",
        exemplo:
          "Exemplo: um tropeiro podia levar 3 meses pra ir de Sorocaba (SP) até as minas de ouro em Ouro Preto (MG).",
      },
      {
        id: "bandeirantes",
        capa: "Bandeirantes",
        emoji: "⚔️",
        cor: "from-slate-600 to-slate-800",
        fotoUrl: imgMapa,
        conteudo:
          "BANDEIRANTES eram grupos paulistas que entravam nas matas em BANDEIRAS (expedições) procurando ouro, pedras preciosas e capturando indígenas. Abriram muitos caminhos pelo interior — mas de forma violenta.",
        exemplo:
          "Exemplo: os bandeirantes descobriram o ouro de Minas Gerais no final do século XVII, iniciando o Ciclo do Ouro.",
      },
      {
        id: "pouso",
        capa: "Pouso",
        emoji: "🛖",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgFeijao,
        conteudo:
          "POUSO era o local combinado onde as tropas paravam pra dormir, alimentar as mulas e comprar mantimentos. Cada pouso ficava a um dia de viagem do próximo. Muitos pousos viraram CIDADES.",
        exemplo:
          "Exemplo: cidades como Lages (SC), Vacaria (RS) e Itararé (SP) nasceram como pousos tropeiros.",
      },
    ],
    falaFinal:
      "Tropeiros + Bandeirantes + Pouso: o vocabulário técnico das rotas terrestres do Brasil colonial.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Este é o mapa oficial dos Caminhos dos Tropeiros. Toque em cada ponto pra ouvir a história.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "sorocaba",
        x: 42,
        y: 45,
        emoji: "🏘️",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgTropeiros,
        titulo: "1. SOROCABA (SP) — o centro tropeiro",
        texto:
          "Sorocaba era o principal centro de comércio de mulas do Brasil. As tropas chegavam do Sul e saíam pras minas de MG. Tinha a maior feira de muares da América do Sul.",
      },
      {
        id: "minas",
        x: 68,
        y: 20,
        emoji: "⛏️",
        cor: "from-yellow-600 to-orange-800",
        fotoUrl: imgFerradura,
        titulo: "2. MINAS GERAIS — o ouro",
        texto:
          "Vila Rica (hoje Ouro Preto), Mariana, São João del-Rei. As tropas subiam a Serra da Mantiqueira levando comida e voltavam carregadas de OURO e diamantes.",
      },
      {
        id: "sul",
        x: 25,
        y: 78,
        emoji: "🐄",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgMapa,
        titulo: "3. RIO GRANDE DO SUL — o gado",
        texto:
          "Os tropeiros desciam pra buscar mulas, gado e charque (carne salgada) nas estâncias gaúchas, subindo depois pra vender em São Paulo e Minas.",
      },
      {
        id: "pousos",
        x: 48,
        y: 62,
        emoji: "🛖",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgFeijao,
        titulo: "4. POUSOS — os pontos de parada",
        texto:
          "A cada dia de viagem, um pouso. Vendas de comida, ferrarias, capelas. Muitos viraram cidades: Lages, Vacaria, Itararé, Palmas.",
      },
    ],
    falaFinal:
      "Sul → Sorocaba → Minas, com pousos no caminho. Essa foi a ESPINHA DORSAL do Brasil interior.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre o vocabulário tropeiro.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem transportava mercadorias no lombo de mulas pelo interior do Brasil?",
        fotoUrl: imgTropeiros,
        cards: [
          { id: "t", emoji: "🐴", titulo: "Tropeiros", cor: "from-amber-500 to-orange-700" },
          { id: "n", emoji: "⛵", titulo: "Navegadores", cor: "from-sky-500 to-blue-700" },
          { id: "b", emoji: "⚔️", titulo: "Bandeirantes", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "t",
        feedbackAcerto: "Certeza. TROPEIROS transportavam em tropas de mulas.",
        feedbackErro: "Navegadores iam pelo mar; bandeirantes buscavam ouro/índios. Quem TRANSPORTAVA era o TROPEIRO.",
      },
      {
        id: "q2",
        pergunta: "Por que a MULA era o animal preferido pra atravessar o interior do Brasil?",
        fotoUrl: imgFerradura,
        cards: [
          { id: "r", emoji: "💪", titulo: "Muito resistente em terreno íngreme", cor: "from-amber-500 to-orange-700" },
          { id: "v", emoji: "⚡", titulo: "Corria muito rápido", cor: "from-orange-500 to-red-700" },
          { id: "p", emoji: "🐾", titulo: "Era pequena e cabia em barco", cor: "from-slate-500 to-slate-700" },
        ],
        correta: "r",
        feedbackAcerto: "Exato. Mulas aguentam MUITO peso em caminhos íngremes e pedregosos.",
        feedbackErro: "Mulas não são rápidas nem cabem em barco. O forte é a RESISTÊNCIA no relevo brasileiro.",
      },
      {
        id: "q3",
        pergunta: "O que era um POUSO nas rotas tropeiras?",
        fotoUrl: imgFeijao,
        cards: [
          { id: "p", emoji: "🛖", titulo: "Local de parada da tropa que virou cidade", cor: "from-emerald-500 to-teal-700" },
          { id: "n", emoji: "🌙", titulo: "Só um sonho da noite", cor: "from-slate-500 to-slate-700" },
          { id: "m", emoji: "⛏️", titulo: "Uma mina de ouro", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "p",
        feedbackAcerto: "Isso. Pouso = ponto de parada. Muitos viraram CIDADES.",
        feedbackErro: "Pouso é PARADA da tropa. Comerciantes se instalaram e virou cidade.",
      },
    ],
    falaFinal: "Vocabulário técnico dominado. Você conhece o mundo dos tropeiros.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores no mesmo mapa: um mostra o Caminho DO SUL (tropas subindo com gado), outro mostra a Estrada Real (levando comida às minas de ouro).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "sul",
        rotulo: "Caminho do Sul",
        emoji: "🐄",
        cor: "from-emerald-600 to-teal-800",
        rect: { x: 15, y: 40, w: 35, h: 55 },
        descricao:
          "Ligava o Rio Grande do Sul a Sorocaba (SP). Por ele desciam sal e tecidos e subiam mulas, cavalos, charque e couro.",
      },
      {
        id: "real",
        rotulo: "Estrada Real",
        emoji: "⛏️",
        cor: "from-amber-600 to-orange-800",
        rect: { x: 45, y: 10, w: 40, h: 55 },
        descricao:
          "Ligava Sorocaba/São Paulo às minas de OURO em Minas Gerais e ao porto do Rio de Janeiro. Foi por ela que o ouro saiu do Brasil.",
      },
    ],
    falaFinal: "Duas rotas, uma rede: Caminho do Sul + Estrada Real amarraram o Brasil colonial.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar as 4 etapas de uma viagem tropeira típica.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Como acontecia uma viagem de tropeiro?",
    paradas: [
      {
        id: "carregar",
        emoji: "📦",
        rotulo: "1. Carregar as mulas",
        fotoUrl: imgTropeiros,
        descricao: "Em Sorocaba, o tropeiro carregava sal, tecidos, ferro e ferraduras nas BRUACAS (bolsas de couro).",
      },
      {
        id: "trilha",
        emoji: "🥾",
        rotulo: "2. Subir a trilha",
        fotoUrl: imgTropeiros,
        descricao: "A tropa caminhava dias a fio por serras íngremes, cruzando rios e desviando de atoleiros.",
      },
      {
        id: "pouso",
        emoji: "🛖",
        rotulo: "3. Descansar no pouso",
        fotoUrl: imgFeijao,
        descricao: "Ao entardecer, parada no pouso. Comia-se feijão tropeiro, alimentava-se as mulas, ferrava-se quem precisava.",
      },
      {
        id: "entregar",
        emoji: "⛏️",
        rotulo: "4. Entregar em Minas",
        fotoUrl: imgFerradura,
        descricao: "Chegava nas minas, entregava a carga e voltava carregando OURO pra vender em São Paulo/Rio.",
      },
    ],
    ordemCerta: ["carregar", "trilha", "pouso", "entregar"],
    feedbackAcerto: "Ordem perfeita: carrega → caminha → descansa → entrega. Ciclo tropeiro completo.",
    feedbackErro: "Essa não é a próxima. Pense: o que a tropa faz DEPOIS de carregar as mulas?",
    falaFinal: "Você mapeou o ciclo de trabalho do tropeiro colonial.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia a Página 3 e toque nas palavras destacadas.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 3 — As Trilhas do Interior",
    paragrafos: [
      {
        id: "p1",
        texto:
          "No fim do século XVII, os BANDEIRANTES paulistas descobriram OURO em Minas Gerais. Milhares de pessoas correram pra lá. Precisava chegar comida, sal e tecido no interior — e sair o ouro. Nasceram assim as rotas dos TROPEIROS.",
        chaves: ["Bandeirantes", "Tropeiros"],
        definicoes: {
          Bandeirantes:
            "Grupos paulistas que entravam nas matas em expedições longas (bandeiras) procurando ouro, pedras e indígenas.",
          Tropeiros:
            "Homens que conduziam tropas de mulas pelo interior transportando mercadorias entre as regiões.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p2",
        texto:
          "A mula era o animal preferido: aguentava peso em SERRAS, cruzava rios, comia pouco. Cada tropa levava dezenas de mulas com BRUACAS (bolsas de couro) recheadas de sal, ferramentas, tecidos.",
        chaves: ["bruacas"],
        definicoes: {
          bruacas: "Bolsas grandes de couro cru penduradas no lombo das mulas para transportar cargas.",
        },
        fotoUrl: imgTropeiros,
      },
      {
        id: "p3",
        texto:
          "Todo entardecer a tropa parava num POUSO. Ali comia-se FEIJÃO TROPEIRO (feijão + farinha + torresmo + linguiça) — comida que durava dias no calor das trilhas. Muitos pousos viraram cidades.",
        chaves: ["pouso", "Feijão Tropeiro"],
        definicoes: {
          pouso: "Local combinado onde a tropa parava pra dormir, comer e ferrar mulas.",
          "Feijão Tropeiro": "Prato típico criado pelos tropeiros com ingredientes que não estragavam na viagem.",
        },
        fotoUrl: imgFeijao,
      },
      {
        id: "p4",
        texto:
          "As tropas subiam pela ESTRADA REAL (rota do ouro entre SP, MG e RJ) e desciam pelo Caminho do Sul (RS até Sorocaba). Muitas rodovias asfaltadas de hoje foram desenhadas em cima dessas antigas trilhas.",
        chaves: ["Estrada Real"],
        definicoes: {
          "Estrada Real": "Principal rota do ouro do Brasil colonial, ligando Sorocaba a Vila Rica (Ouro Preto).",
        },
        fotoUrl: imgMapa,
      },
    ],
    falaFinal: "Leitura concluída. Você domina o mundo tropeiro do Brasil colonial.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão de arqueólogo: cada rodada mostra um traço de povo antigo. Classifique: era TROPEIRO ou BANDEIRANTE?",
    instrucao: "⏱️ Leia e toque",
    duracaoSegundos: 18,
    pecas: [
      { id: "t", emoji: "🐴", rotulo: "Tropeiro" },
      { id: "b", emoji: "⚔️", rotulo: "Bandeirante" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Levava sal e tecido nas mulas", emoji: "🧂", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Transportava mercadoria", emoji: "📦", cor: "from-orange-500 to-red-700" },
        contexto: "Homem viajava com tropas de mulas carregando produtos entre cidades.",
        pecaCertaId: "t",
        feedbackAcerto: "Sim! Transportar mercadoria = TROPEIRO.",
        feedbackErro: "Bandeirante buscava ouro/índios. Transportar carga é do TROPEIRO.",
      },
      {
        id: "r2",
        municipioA: { nome: "Entrava nas matas atrás de ouro", emoji: "⛏️", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "Expedição longa e violenta", emoji: "⚔️", cor: "from-red-500 to-orange-700" },
        contexto: "Grupo paulista partiu numa BANDEIRA de 2 anos matas adentro em busca de metais preciosos.",
        pecaCertaId: "b",
        feedbackAcerto: "Correto. Buscar ouro nas matas = BANDEIRANTE.",
        feedbackErro: "Tropeiro só transportava. Buscar ouro/índios = BANDEIRANTE.",
      },
      {
        id: "r3",
        municipioA: { nome: "Comia feijão tropeiro no pouso", emoji: "🍲", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Dormia perto das mulas", emoji: "🛖", cor: "from-orange-500 to-red-700" },
        contexto: "Homem parou no pouso, alimentou as mulas, comeu feijão e dormiu na tulha.",
        pecaCertaId: "t",
        feedbackAcerto: "Isso. Vida de pouso é do TROPEIRO.",
        feedbackErro: "Bandeirante andava por matas sem pouso fixo. Feijão de pouso = TROPEIRO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Descobriu ouro em Minas Gerais", emoji: "💰", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "Expedição paulista do século XVII", emoji: "🏹", cor: "from-red-500 to-orange-700" },
        contexto: "Grupo saiu de São Paulo, andou meses e achou veios de ouro na região das Minas.",
        pecaCertaId: "b",
        feedbackAcerto: "Perfeito. Descobrir ouro = BANDEIRANTE.",
        feedbackErro: "Tropeiro LEVAVA carga pra minas. Quem DESCOBRIU o ouro = BANDEIRANTE.",
      },
      {
        id: "r5",
        municipioA: { nome: "Cruzava rios com mulas", emoji: "🏞️", cor: "from-amber-600 to-orange-800" },
        municipioB: { nome: "Vivia na estrada meses", emoji: "🥾", cor: "from-orange-500 to-red-700" },
        contexto: "Homem seguia trilha da Estrada Real com sua tropa de 30 mulas rumo a Ouro Preto.",
        pecaCertaId: "t",
        feedbackAcerto: "Sim. Estrada Real + mulas = TROPEIRO.",
        feedbackErro: "Estrada Real era rota do TROPEIRO com mulas.",
      },
      {
        id: "r6",
        municipioA: { nome: "Capturava indígenas nas matas", emoji: "🏴", cor: "from-slate-600 to-slate-800" },
        municipioB: { nome: "Fazia bandeiras de dois anos", emoji: "🚩", cor: "from-red-500 to-orange-700" },
        contexto: "Expedição partia de São Paulo, entrava em matas nunca antes visitadas, capturando povos originários.",
        pecaCertaId: "b",
        feedbackAcerto: "Correto (e cruel): capturar indígenas era prática dos BANDEIRANTES.",
        feedbackErro: "Tropeiro só transportava carga. Capturar indígenas = BANDEIRANTE.",
      },
    ],
    falaFinal: "6 rodadas! Você diferencia tropeiro e bandeirante como um historiador.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da tropa: dos 100% da carga que uma tropa levava pras minas, o que mais pesava?",
    instrucao: "Toque nas fatias",
    fotoUrl: imgTropeiros,
    fatias: [
      {
        id: "sal",
        rotulo: "Sal e mantimentos (~60%)",
        emoji: "🧂",
        percentual: 60,
        cor: "#c2410c",
        descricao:
          "Sal era essencial pra conservar carne. Junto viajavam farinha, feijão, açúcar — comida pros mineiros.",
        exemplos: ["🧂 Sal", "🍚 Farinha", "🫘 Feijão"],
      },
      {
        id: "ferro",
        rotulo: "Ferramentas e tecidos (~40%)",
        emoji: "⚒️",
        percentual: 40,
        cor: "#0f766e",
        descricao:
          "Ferro, ferraduras, machados, roupa, sabão. Tudo que a região das minas precisava e não produzia.",
        exemplos: ["⚒️ Ferro", "🧵 Tecidos", "🧼 Sabão"],
      },
    ],
    falaFinal: "Sal e mantimentos dominavam. Sem eles, ninguém aguentava o trabalho nas minas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra conquistar a insígnia das Trilhas do Interior.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgFerradura,
    perguntas: [
      {
        id: "av1",
        pergunta: "Por que as mulas eram os animais preferidos dos tropeiros?",
        opcoes: [
          { id: "a", texto: "Porque eram muito rápidas em corridas.", correta: false },
          { id: "b", texto: "Porque eram fortes e aguentavam caminhos íngremes.", correta: true },
          { id: "c", texto: "Porque cantavam durante a viagem.", correta: false },
        ],
        feedbackAcerto: "Correto! Mulas = RESISTÊNCIA em relevo pedregoso.",
        feedbackErro: "Mula não é rápida nem canta. A força é a RESISTÊNCIA no relevo.",
      },
      {
        id: "av2",
        pergunta: "O que era um POUSO nas rotas tropeiras?",
        opcoes: [
          { id: "a", texto: "Uma mina de ouro.", correta: false },
          { id: "b", texto: "Local de parada da tropa — muitos viraram cidades.", correta: true },
          { id: "c", texto: "Um tipo de mula pequena.", correta: false },
        ],
        feedbackAcerto: "Isso! POUSO = ponto de parada. Muitas cidades do Brasil nasceram assim.",
        feedbackErro: "Mina é onde tira ouro; mula é o animal. POUSO é PARADA da tropa.",
      },
      {
        id: "av3",
        pergunta: "Qual era o principal produto que os tropeiros LEVAVAM pras minas de Minas Gerais?",
        opcoes: [
          { id: "a", texto: "Ouro em barra.", correta: false },
          { id: "b", texto: "Sal e mantimentos.", correta: true },
          { id: "c", texto: "Celulares e computadores.", correta: false },
        ],
        feedbackAcerto: "Perfeito! Tropeiro LEVAVA sal e mantimentos e VOLTAVA com ouro.",
        feedbackErro: "Ouro saía das minas (não entrava). O que ENTRAVA era SAL e MANTIMENTOS.",
      },
    ],
    selo: {
      nome: "Trilhas do Interior",
      subtitulo: "Insígnia do Tropeirismo",
      emoji: "🐴",
      cor: "from-amber-400 to-orange-600",
      fotoUrl: imgTropeiros,
    },
    falaFinal:
      "Insígnia conquistada! Página 3 restaurada. O terceiro ponto brilha no mapa: As Trilhas do Interior.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Trilhas do Interior" },
};

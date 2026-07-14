import type { AulaGeoV1 } from "../../types";
import { url as mapaLegenda } from "@/assets/geografia-4ano/mapa-com-legenda.jpg.asset.json";
import { url as escalaMapa } from "@/assets/geografia-4ano/escala-do-mapa.jpg.asset.json";
import { url as legendaSimbolos } from "@/assets/geografia-4ano/legenda-simbolos.jpg.asset.json";
import { url as cartografoMestre } from "@/assets/geografia-4ano/cartografo-mestre.jpg.asset.json";
import { url as mapaEstados } from "@/assets/geografia-4ano/mapa-brasil-estados.jpg.asset.json";
import { url as rosaDosVentos } from "@/assets/geografia-4ano/rosa-dos-ventos.jpg.asset.json";
import { url as norte } from "@/assets/geografia-4ano/regiao-norte-amazonia.jpg.asset.json";
import { url as sudeste } from "@/assets/geografia-4ano/regiao-sudeste-metropole.jpg.asset.json";
import { url as simboloEscola } from "@/assets/geografia-4ano/simbolo-escola.jpg.asset.json";
import { url as simboloHospital } from "@/assets/geografia-4ano/simbolo-hospital.jpg.asset.json";
import { url as simboloParque } from "@/assets/geografia-4ano/simbolo-parque.jpg.asset.json";
import { url as simboloRio } from "@/assets/geografia-4ano/simbolo-rio.jpg.asset.json";
/**
 * Geografia · 4º Ano · Unidade 1 · Aula 04
 * "Ler o Mapa: título, legenda, escala e rosa dos ventos" — EF04GE10
 *
 * A criança descobre que todo mapa tem 4 elementos essenciais:
 * TÍTULO (do que fala), LEGENDA (o que cada símbolo/cor significa),
 * ESCALA (quantos km cabem em 1 cm) e ROSA DOS VENTOS (pra se orientar).
 * Fecha a Unidade 1 com o selo do Cartógrafo Mestre.
 */
export const aula04: AulaGeoV1 = {
  slug: "aula-04-ler-o-mapa",
  titulo: "Ler o Mapa: Legenda, Escala e Símbolos",
  iconeTrilha: "🗺️",
  bncc: ["EF04GE10"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Arraste a LUPA sobre o mapa. Cada cor, cada símbolo, cada linha CONTA UMA COISA — se você souber ler!",
    mapaUrl: mapaLegenda,
    imagemDestaqueUrl: mapaLegenda,
    aurora:
      "Explorador, todo mapa é como um LIVRO cheio de pistas. Verde = mata. Azul = rio. Vermelho = estrada. Um quadradinho pode ser uma escola, uma cruz pode ser um hospital. Bora aprender a LER o mapa!",
    falaFinal:
      "4 chaves abrem qualquer mapa: TÍTULO, LEGENDA, ESCALA e ROSA DOS VENTOS.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite rápido: se um mapa mostra um SÍMBOLO desconhecido (tipo uma cruz vermelha ou uma estrela), onde você descobre o que ele significa?",
    pergunta: "Onde descobrir o que um símbolo do mapa quer dizer?",
    opcoes: [
      {
        id: "legenda",
        titulo: "Na LEGENDA",
        subtitulo: "quadradinho que explica cada símbolo",
        emoji: "🔑",
        cor: "from-emerald-500 to-green-700",
      },
      {
        id: "titulo",
        titulo: "No TÍTULO do mapa",
        subtitulo: "nome que aparece em cima",
        emoji: "🏷️",
        cor: "from-amber-400 to-yellow-600",
      },
    ],
    respostaCerta: "legenda",
    feedbackAcerto:
      "Isso! A LEGENDA é a 'chave secreta' do mapa — mostra o que cada cor e cada símbolo significa.",
    feedbackErro:
      "Repensa: o TÍTULO só diz o assunto do mapa. Quem explica os SÍMBOLOS é a LEGENDA.",
    falaFinal:
      "Guarda essa: legenda = tradutor. Bora abrir os 4 cadernos dos elementos do mapa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Todo bom mapa tem 4 elementos. Abre cada caderno pra descobrir pra que serve cada um.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "titulo",
        capa: "1. Título",
        emoji: "🏷️",
        cor: "from-amber-400 to-yellow-600",
        conteudo:
          "TÍTULO é o nome do mapa. Fica em cima, com letra grande. Diz de que ASSUNTO o mapa está falando.",
        exemplo:
          "Ex.: 'Mapa Político do Brasil', 'Mapa das Chuvas', 'Mapa Turístico do Rio'.",
        fotoUrl: mapaEstados,
      },
      {
        id: "legenda",
        capa: "2. Legenda",
        emoji: "🔑",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "LEGENDA é o quadradinho lateral que explica o que cada COR e cada SÍMBOLO significam. É a chave que traduz o mapa.",
        exemplo:
          "Ex.: 🌳 = parque · 🏫 = escola · ✝️ = igreja · 🍴 = restaurante.",
        fotoUrl: legendaSimbolos,
      },
      {
        id: "escala",
        capa: "3. Escala",
        emoji: "📏",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "ESCALA mostra quantos QUILÔMETROS de verdade cabem em 1 centímetro do mapa. Sem ela, você não sabe se um caminho é curto ou gigante.",
        exemplo:
          "Ex.: 'escala 1:100.000' quer dizer que 1 cm no mapa = 1 km no mundo real.",
        fotoUrl: escalaMapa,
      },
      {
        id: "rosaventos",
        capa: "4. Rosa dos Ventos",
        emoji: "🧭",
        cor: "from-purple-500 to-indigo-700",
        conteudo:
          "A ROSA DOS VENTOS mostra as 4 direções (N, S, L, O). Sem ela, você não sabe pra onde está indo no mapa!",
        exemplo:
          "Ex.: mesmo virando o papel de cabeça pra baixo, a rosa dos ventos te diz onde é o Norte.",
        fotoUrl: rosaDosVentos,
      },
    ],
    falaFinal:
      "TÍTULO + LEGENDA + ESCALA + ROSA DOS VENTOS. Todo mapa completo tem esses 4.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Marquei 4 SÍMBOLOS num mapa turístico. Toca em cada um pra Aurora contar o que ele significa.",
    instrucao: "Toque em cada balão pra ouvir a legenda",
    mapaUrl: mapaLegenda,
    pontos: [
      {
        id: "escola",
        x: 30,
        y: 30,
        emoji: "🏫",
        cor: "from-sky-500 to-blue-700",
        titulo: "🏫 — ESCOLA",
        texto:
          "Significa ESCOLA. Mostra no mapa onde as crianças estudam.",
        fotoUrl: simboloEscola,
      },
      {
        id: "hospital",
        x: 60,
        y: 35,
        emoji: "🏥",
        cor: "from-red-500 to-rose-700",
        titulo: "🏥 — HOSPITAL",
        texto:
          "Significa HOSPITAL ou posto de saúde. É um símbolo universal, funciona em qualquer país.",
        fotoUrl: simboloHospital,
      },
      {
        id: "parque",
        x: 25,
        y: 70,
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        titulo: "🌳 — PARQUE / ÁREA VERDE",
        texto:
          "Marca parques, praças e áreas de mata: lugares de natureza pra passear e brincar.",
        fotoUrl: simboloParque,
      },
      {
        id: "rio",
        x: 75,
        y: 75,
        emoji: "🌊",
        cor: "from-cyan-500 to-blue-700",
        titulo: "🌊 — RIO / ÁGUA",
        texto:
          "Representa ÁGUA: rios, lagos e mar. Quanto mais grossa a marcação, maior é o rio.",
        fotoUrl: simboloRio,
      },
    ],
    falaFinal:
      "4 símbolos, 4 significados. Da próxima vez que abrir um mapa, procura a LEGENDA pra traduzir.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora:
      "Radar ligado! 3 perguntas rápidas sobre os elementos do mapa.",
    instrucao: "Toque no card certo pra o radar pousar",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual elemento explica o SIGNIFICADO das cores e símbolos do mapa?",
        fotoUrl: legendaSimbolos,
        cards: [
          { id: "titulo", emoji: "🏷️", titulo: "Título", cor: "from-amber-400 to-yellow-600" },
          { id: "legenda", emoji: "🔑", titulo: "Legenda", cor: "from-emerald-500 to-green-700" },
          { id: "escala", emoji: "📏", titulo: "Escala", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "legenda",
        feedbackAcerto: "Isso! LEGENDA = tradutor das cores e símbolos.",
        feedbackErro: "Repensa: título só diz o assunto. Quem explica símbolos é a LEGENDA.",
      },
      {
        id: "q2",
        pergunta: "Qual elemento mostra QUANTOS KM cabem em 1 cm do mapa?",
        fotoUrl: escalaMapa,
        cards: [
          { id: "rosa", emoji: "🧭", titulo: "Rosa dos Ventos", cor: "from-purple-500 to-indigo-700" },
          { id: "escala", emoji: "📏", titulo: "Escala", cor: "from-sky-500 to-blue-700" },
          { id: "legenda", emoji: "🔑", titulo: "Legenda", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "escala",
        feedbackAcerto: "Perfeito! ESCALA = régua do mapa. Diz o tamanho real das coisas.",
        feedbackErro: "Rosa dos ventos aponta direção. Quem mede é a ESCALA.",
      },
      {
        id: "q3",
        pergunta: "Uma LINHA AZUL serpenteando pelo mapa geralmente é...",
        fotoUrl: mapaLegenda,
        cards: [
          { id: "estrada", emoji: "🛣️", titulo: "Estrada", cor: "from-slate-400 to-slate-600" },
          { id: "rio", emoji: "🌊", titulo: "Rio", cor: "from-cyan-500 to-blue-700" },
          { id: "fronteira", emoji: "📍", titulo: "Fronteira", cor: "from-red-500 to-rose-700" },
        ],
        correta: "rio",
        feedbackAcerto: "Boa! Linha AZUL = ÁGUA. Rio, lago ou mar.",
        feedbackErro: "Estrada geralmente é vermelha/amarela. Azul quase sempre é ÁGUA (rio).",
      },
    ],
    falaFinal:
      "Radar afiado! Legenda, escala e cores — você já sabe traduzir.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "Vamos aplicar a LEITURA DE MAPA no Brasil inteiro! Toca em cada estado e observa a LEGENDA das regiões (cores). Cada cor é uma região diferente.",
    instrucao: "Toque em cada estado — a cor da legenda diz a região",
    missao: {
      tipo: "grupos",
      grupos: [
        {
          id: "norte",
          rotulo: "Norte (verde-floresta)",
          emoji: "🌳",
          cor: "from-emerald-500 to-green-700",
          siglas: ["AM", "PA", "AC", "RO", "RR", "AP", "TO"],
          descricao: "Verde = região NORTE, dominada pela Floresta Amazônica.",
        },
        {
          id: "nordeste",
          rotulo: "Nordeste (amarelo-praia)",
          emoji: "🏖️",
          cor: "from-amber-400 to-yellow-600",
          siglas: ["MA", "PI", "CE", "RN", "PB", "PE", "AL", "SE", "BA"],
          descricao: "Amarelo = região NORDESTE, terra de praias e sertão.",
        },
        {
          id: "centro-oeste",
          rotulo: "Centro-Oeste (laranja-cerrado)",
          emoji: "⭐",
          cor: "from-orange-400 to-amber-600",
          siglas: ["MT", "MS", "GO", "DF"],
          descricao: "Laranja = CENTRO-OESTE, cerrado e capital Brasília.",
        },
        {
          id: "sudeste",
          rotulo: "Sudeste (vermelho-cidade)",
          emoji: "🏙️",
          cor: "from-red-500 to-rose-700",
          siglas: ["MG", "ES", "RJ", "SP"],
          descricao: "Vermelho = SUDESTE, região mais povoada.",
        },
        {
          id: "sul",
          rotulo: "Sul (azul-serra)",
          emoji: "🍇",
          cor: "from-sky-500 to-blue-700",
          siglas: ["PR", "SC", "RS"],
          descricao: "Azul = SUL, serras e vinhedos.",
        },
      ],
    },
    falaFinal:
      "5 cores, 5 regiões. Isso é uma LEGENDA em ação — cor + região = mapa lido!",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Você é o cartógrafo! Vamos MONTAR um mapa do zero. Toca na ordem correta em que se desenha cada elemento.",
    instrucao: "Toque na ordem certa pra montar o mapa",
    pergunta: "Ordene os passos pra criar um mapa completo:",
    paradas: [
      {
        id: "titulo",
        emoji: "🏷️",
        rotulo: "1. Escreve o TÍTULO",
        descricao: "Primeiro, o nome do mapa: 'Mapa da Escola', 'Mapa do Bairro'.",
      },
      {
        id: "desenho",
        emoji: "✏️",
        rotulo: "2. Desenha o TERRITÓRIO",
        descricao: "Depois, o contorno da área: ruas, quarteirões, rios.",
      },
      {
        id: "simbolos",
        emoji: "🎨",
        rotulo: "3. Coloca os SÍMBOLOS",
        descricao: "Marca os prédios, escolas, hospitais, parques com símbolos.",
      },
      {
        id: "legenda",
        emoji: "🔑",
        rotulo: "4. Adiciona a LEGENDA",
        descricao: "Explica o que cada símbolo significa num quadradinho lateral.",
      },
      {
        id: "escala",
        emoji: "📏",
        rotulo: "5. Coloca ESCALA + ROSA DOS VENTOS",
        descricao: "Por fim: a régua da escala e a rosa dos ventos, pra ninguém se perder.",
      },
    ],
    ordemCerta: ["titulo", "desenho", "simbolos", "legenda", "escala"],
    feedbackAcerto:
      "Mapa completo! Você seguiu a ordem certa e agora sabe MONTAR um mapa de verdade.",
    feedbackErro:
      "Essa não é a próxima etapa. Lembra: TÍTULO → DESENHO → SÍMBOLOS → LEGENDA → ESCALA/ROSA.",
    falaFinal:
      "5 passos, 1 mapa. É assim que os cartógrafos trabalham há séculos.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez! Aurora fica caladinha. Leia e toque nas palavras-chave pra provar que entendeu.",
    tituloLivro: "📔 Atlas do Explorador Brasileiro",
    subtitulo: "Página 4 — Como Ler um Mapa",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Todo MAPA tem 4 elementos essenciais: TÍTULO (do que fala), LEGENDA (traduz símbolos), ESCALA (mede distância) e ROSA DOS VENTOS (direções).",
        chaves: ["mapa", "título", "legenda", "escala"],
      },
      {
        id: "p2",
        texto:
          "A LEGENDA é a chave secreta do mapa. Ela diz que 🌳 é parque, 🏥 é hospital, 🏫 é escola. Sem a legenda, os SÍMBOLOS ficam mudos.",
        chaves: ["legenda", "símbolos", "chave"],
      },
      {
        id: "p3",
        texto:
          "A ESCALA mostra quantos QUILÔMETROS cabem em cada centímetro do papel. Ela avisa se um caminho é CURTO ou GIGANTE.",
        chaves: ["escala", "quilômetros", "centímetro"],
      },
      {
        id: "p4",
        texto:
          "Existem MUITOS tipos de mapa: político (mostra estados), físico (mostra montanhas e rios), turístico (mostra pontos legais), climático (mostra temperatura).",
        chaves: ["mapa", "político", "físico", "turístico"],
      },
    ],
    falaFinal:
      "Você leu sozinho e já sabe traduzir qualquer mapa. Bora pro minijogo final!",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Minijogo do LEITOR DE MAPA RELÂMPAGO! Cada rodada mostra um símbolo ou pista. Aponte o significado certo antes do relógio zerar!",
    instrucao: "⏱️ Leia a pista e toque no significado certo!",
    duracaoSegundos: 12,
    pecas: [
      { id: "escola", emoji: "🏫", rotulo: "Escola" },
      { id: "hospital", emoji: "🏥", rotulo: "Hospital" },
      { id: "parque", emoji: "🌳", rotulo: "Parque / Mata" },
      { id: "rio", emoji: "🌊", rotulo: "Rio / Água" },
      { id: "estrada", emoji: "🛣️", rotulo: "Estrada" },
      { id: "igreja", emoji: "⛪", rotulo: "Igreja" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cruz vermelha", emoji: "🏥", cor: "from-red-500 to-rose-700" },
        municipioB: { nome: "Símbolo universal", emoji: "➕", cor: "from-rose-400 to-red-600" },
        contexto: "Prédio com cruz vermelha no mapa significa...",
        pecaCertaId: "hospital",
        feedbackAcerto: "Boa! Cruz vermelha = HOSPITAL. Símbolo universal.",
        feedbackErro: "Cruz vermelha sempre é HOSPITAL / posto de saúde.",
      },
      {
        id: "r2",
        municipioA: { nome: "Mancha verde grande", emoji: "🌳", cor: "from-emerald-500 to-green-700" },
        municipioB: { nome: "Área de árvores", emoji: "🌲", cor: "from-lime-400 to-emerald-600" },
        contexto: "Área verde no mapa geralmente representa...",
        pecaCertaId: "parque",
        feedbackAcerto: "Perfeito! Verde = PARQUE, praça ou área de mata.",
        feedbackErro: "Verde quase sempre é natureza — parques e matas.",
      },
      {
        id: "r3",
        municipioA: { nome: "Linha azul serpenteando", emoji: "🌊", cor: "from-cyan-500 to-blue-700" },
        municipioB: { nome: "Aquilo que corre no chão", emoji: "💧", cor: "from-blue-400 to-cyan-600" },
        contexto: "Linha azul torta no mapa é...",
        pecaCertaId: "rio",
        feedbackAcerto: "Combo! Azul serpenteando = RIO.",
        feedbackErro: "Linha azul = água. É um RIO.",
      },
      {
        id: "r4",
        municipioA: { nome: "Prédio com bandeirinha", emoji: "🏫", cor: "from-sky-500 to-blue-700" },
        municipioB: { nome: "Onde as crianças estudam", emoji: "📚", cor: "from-blue-400 to-indigo-600" },
        contexto: "Prédio com bandeirinha e livros no mapa é...",
        pecaCertaId: "escola",
        feedbackAcerto: "Isso! Bandeirinha + livros = ESCOLA.",
        feedbackErro: "Bandeirinha e livros = ESCOLA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Linha grossa amarela", emoji: "🛣️", cor: "from-yellow-400 to-orange-600" },
        municipioB: { nome: "Onde os carros passam", emoji: "🚗", cor: "from-amber-400 to-yellow-600" },
        contexto: "Linha grossa amarela/vermelha no mapa é...",
        pecaCertaId: "estrada",
        feedbackAcerto: "Boa! Linha grossa amarela = ESTRADA / rodovia.",
        feedbackErro: "Amarelo/vermelho grosso = ESTRADA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Prédio com cruz em cima", emoji: "⛪", cor: "from-purple-500 to-indigo-700" },
        municipioB: { nome: "Onde tem missa", emoji: "🕊️", cor: "from-violet-400 to-purple-600" },
        contexto: "Prédio pequeno com cruz no telhado é...",
        pecaCertaId: "igreja",
        feedbackAcerto: "Perfeito! Cruz no telhado = IGREJA.",
        feedbackErro: "Cruz no telhado = IGREJA.",
      },
    ],
    falaFinal:
      "6 símbolos dominados! Você agora lê qualquer mapa turístico do Brasil.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza dos TIPOS DE MAPA! Cada fatia mostra um mapa diferente que existe.",
    instrucao: "Toque em cada fatia pra ouvir a explicação",
    fatias: [
      {
        id: "politico",
        rotulo: "Mapa Político",
        emoji: "🚩",
        percentual: 50,
        cor: "#ef4444",
        descricao:
          "Mostra as DIVISÕES: países, estados, cidades, fronteiras. Cada estado com uma cor. É o mais comum na escola.",
        exemplos: ["🇧🇷 Estados", "🏙️ Cidades", "📍 Fronteiras"],
      },
      {
        id: "fisico-tematico",
        rotulo: "Mapa Físico + Temático",
        emoji: "⛰️",
        percentual: 50,
        cor: "#0ea5e9",
        descricao:
          "FÍSICO mostra relevo (montanhas, rios, planícies). TEMÁTICO mostra um assunto: chuva, população, produção de café, turismo.",
        exemplos: ["⛰️ Relevo", "🌧️ Chuva", "☕ Café"],
      },
    ],
    falaFinal:
      "Muitos mapas, muitas leituras. Um cartógrafo escolhe o mapa certo pra cada pergunta.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Última etapa da UNIDADE 1! 3 perguntas pra ganhar a insígnia final: Cartógrafo Mestre.",
    instrucao: "Responda as 3 e ganhe seu selo",
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual elemento do mapa EXPLICA o que cada símbolo significa?",
        opcoes: [
          { id: "a", texto: "Título", correta: false },
          { id: "b", texto: "Legenda", correta: true },
          { id: "c", texto: "Escala", correta: false },
        ],
        feedbackAcerto: "Isso! A LEGENDA é a chave que traduz os símbolos.",
        feedbackErro: "Repensa: título só diz o assunto. Quem explica símbolos é a LEGENDA.",
      },
      {
        id: "av2",
        pergunta: "Uma LINHA AZUL serpenteando no mapa quase sempre representa...",
        opcoes: [
          { id: "a", texto: "Uma estrada", correta: false },
          { id: "b", texto: "Um rio", correta: true },
          { id: "c", texto: "Uma fronteira", correta: false },
        ],
        feedbackAcerto: "Perfeito! Linha AZUL = ÁGUA (rio, lago).",
        feedbackErro: "Azul quase sempre é ÁGUA. É um RIO.",
      },
      {
        id: "av3",
        pergunta: "Qual elemento mostra QUANTOS KM cabem em 1 cm do mapa?",
        opcoes: [
          { id: "a", texto: "Rosa dos Ventos", correta: false },
          { id: "b", texto: "Escala", correta: true },
          { id: "c", texto: "Legenda", correta: false },
        ],
        feedbackAcerto:
          "Isso! A ESCALA é a régua do mapa — traduz cm de papel em km de verdade.",
        feedbackErro:
          "Rosa dos ventos aponta direção. Quem mede distância é a ESCALA.",
      },
    ],
    selo: {
      nome: "Cartógrafo Mestre",
      subtitulo: "Insígnia da Unidade 1 completa",
      emoji: "🗺️",
      cor: "from-blue-500 to-indigo-700",
    },
    falaFinal:
      "PARABÉNS, CARTÓGRAFO MESTRE! Você fechou a Unidade 1: mapas, regiões, estados, direções e leitura de mapa. Brasil na palma da mão!",
  },

  recompensa: {
    xp: 400,
    moedas: 300,
    medalha: "Cartógrafo Mestre",
  },
};

void cartografoMestre;

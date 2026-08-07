import type { AulaGeoV1 } from "../../types";
import { url as imgMuro } from "@/assets/historia-9ano/u5-guerra-fria.jpg.asset.json";
import { url as imgLua } from "@/assets/historia-9ano/u5-corrida-espacial.jpg.asset.json";
import { url as imgArmas } from "@/assets/historia-9ano/u5-corrida-armas.jpg.asset.json";
import { url as imgApollo } from "@/assets/historia-9ano/u5-lua-apollo.jpg.asset.json";
import { url as imgBerlim } from "@/assets/historia-9ano/u5-muro-berlim.jpg.asset.json";

export const aula02: AulaGeoV1 = {
  slug: "aula-02-tensoes-dentro-dos-blocos",
  titulo: "Rachaduras na Guerra Fria: Tensões Dentro dos Blocos",
  iconeTrilha: "🧨",
  bncc: ["EF09HI28"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgBerlim,
    imagemDestaqueUrl: imgArmas,
    aurora:
      "1956: tanques soviéticos esmagam a revolta popular na Hungria. 1968: tropas do Pacto de Varsóvia invadem a Tchecoslováquia para acabar com a Primavera de Praga. 1968 também: nos EUA, jovens ocupam universidades e queimam convocações militares contra a Guerra do Vietnã, enquanto na França o Maio de 68 paralisa Paris. A Guerra Fria não era um bloco sólido de cada lado — havia rachaduras, revoltas e dissidências dentro do capitalismo e dentro do socialismo.",
    falaFinal: "Nenhum dos blocos era unido por dentro. Hoje vamos ver as fissuras.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Pense: dentro de um bloco liderado por uma superpotência, os países aliados sempre concordavam com tudo?",
    pergunta: "O que aconteceu quando países do bloco soviético tentaram reformas próprias (Hungria 1956, Tchecoslováquia 1968)?",
    fotoUrl: imgBerlim,
    opcoes: [
      { id: "rep", titulo: "REPRESSÃO MILITAR", subtitulo: "a URSS enviou tanques para sufocar as reformas", emoji: "🪖", cor: "from-red-800 to-slate-950" },
      { id: "lib", titulo: "LIBERDADE TOTAL", subtitulo: "a URSS deixou cada país seguir seu caminho", emoji: "🕊️", cor: "from-teal-800 to-slate-950" },
    ],
    respostaCerta: "rep",
    feedbackAcerto:
      "Correto. A chamada 'Doutrina Brejnev' (1968) afirmava que a URSS tinha o direito de intervir militarmente em qualquer país socialista que ameaçasse o sistema — foi assim na Hungria (1956) e na Tchecoslováquia (1968).",
    feedbackErro:
      "Não houve liberdade: a URSS reprimiu militarmente a Hungria em 1956 e a Tchecoslováquia em 1968, mostrando que o bloco socialista também tinha conflitos internos duros.",
    falaFinal: "Nem todo aliado obedecia por livre vontade — e isso custou caro a quem discordou.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro episódios que racharam a suposta unidade dos blocos.",
    instrucao: "",
    cadernos: [
      {
        id: "hun",
        capa: "Revolução Húngara (1956)",
        emoji: "🇭🇺",
        cor: "from-red-700 to-slate-900",
        fotoUrl: imgBerlim,
        conteudo:
          "Em outubro de 1956, estudantes e trabalhadores húngaros se revoltaram contra o governo comunista imposto por Moscou, pedindo liberdade e saída do Pacto de Varsóvia. A URSS enviou tanques e esmagou o movimento em poucos dias, com milhares de mortos.",
        exemplo: "Exemplo: o líder reformista Imre Nagy foi preso e executado em 1958 por apoiar a revolta.",
      },
      {
        id: "pra",
        capa: "Primavera de Praga (1968)",
        emoji: "🌷",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgArmas,
        conteudo:
          "Em 1968, o líder tchecoslovaco Alexander Dubček tentou o 'socialismo de face humana' — mais liberdade de imprensa e reformas econômicas. Em agosto de 1968, tropas do Pacto de Varsóvia invadiram o país e encerraram as reformas.",
        exemplo: "Exemplo: a invasão consolidou a Doutrina Brejnev, que justificava intervenções em nome da 'segurança do bloco socialista'.",
      },
      {
        id: "vie",
        capa: "Contracultura e Guerra do Vietnã",
        emoji: "✌️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgLua,
        conteudo:
          "Nos EUA dos anos 1960, o movimento hippie, o movimento por direitos civis e os protestos contra a Guerra do Vietnã (1955-1975) mostraram que o bloco capitalista também tinha profundas divisões internas sobre a Guerra Fria.",
        exemplo: "Exemplo: em 1968, mais de 500 mil manifestantes protestaram contra a guerra em Washington D.C.",
      },
      {
        id: "cis",
        capa: "Cisma Sino-Soviético",
        emoji: "☯️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgApollo,
        conteudo:
          "A partir do fim dos anos 1950, China (sob Mao Tsé-tung) e URSS romperam: divergiam sobre como aplicar o comunismo e disputavam a liderança do movimento comunista mundial. Em 1969 houve até confrontos militares na fronteira dos dois países.",
        exemplo: "Exemplo: em 1972, o presidente dos EUA Richard Nixon visitou a China comunista, aproveitando essa divisão entre os 'aliados' socialistas.",
      },
    ],
    falaFinal: "Hungria, Praga, contracultura nos EUA, cisma sino-soviético: nenhum bloco era homogêneo.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três frentes de tensão interna aos blocos. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgBerlim,
    pontos: [
      {
        id: "les",
        x: 25,
        y: 35,
        emoji: "🪖",
        cor: "from-red-700 to-slate-900",
        fotoUrl: imgArmas,
        titulo: "LESTE EUROPEU REPRIMIDO",
        texto: "Hungria (1956) e Tchecoslováquia (1968) tentaram reformas e foram esmagadas por tanques soviéticos, revelando o autoritarismo dentro do bloco socialista.",
      },
      {
        id: "oes",
        x: 55,
        y: 55,
        emoji: "✌️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgLua,
        titulo: "OESTE EM PROTESTO",
        texto: "Nos EUA e na Europa Ocidental, movimentos estudantis, contracultura e protestos contra o Vietnã (culminando no Maio de 1968 francês) desafiaram o consenso capitalista da Guerra Fria.",
      },
      {
        id: "chi",
        x: 80,
        y: 30,
        emoji: "☯️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgApollo,
        titulo: "CISMA SINO-SOVIÉTICO",
        texto: "China e URSS, ambas comunistas, romperam por disputas de liderança e estratégia, mostrando que 'bloco socialista' não era um bloco único de fato.",
      },
    ],
    falaFinal: "Autoritarismo interno, protesto interno e disputa entre aliados. As três faces da rachadura.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que foi a Doutrina Brejnev?",
        fotoUrl: imgBerlim,
        cards: [
          { id: "c", emoji: "🪖", titulo: "Justificava intervenção militar soviética em países socialistas", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "🤝", titulo: "Garantia liberdade total aos países do Pacto de Varsóvia", cor: "from-amber-600 to-slate-900" },
          { id: "e", emoji: "🌍", titulo: "Foi criada pela ONU", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. Foi usada para justificar a invasão da Tchecoslováquia em 1968.",
        feedbackErro: "A Doutrina Brejnev justificava intervenções militares soviéticas, como na Tchecoslováquia em 1968.",
      },
      {
        id: "q2",
        pergunta: "O que motivou os protestos de 1968 nos EUA?",
        fotoUrl: imgLua,
        cards: [
          { id: "m", emoji: "✌️", titulo: "Guerra do Vietnã e direitos civis", cor: "from-teal-600 to-slate-900" },
          { id: "n", emoji: "🎖️", titulo: "Apoio total à corrida armamentista", cor: "from-amber-600 to-slate-900" },
          { id: "z", emoji: "🕊️", titulo: "Aliança com a URSS", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "m",
        feedbackAcerto: "Correto. A guerra do Vietnã e a luta por direitos civis mobilizaram milhões de jovens americanos.",
        feedbackErro: "Foram a Guerra do Vietnã e a luta por direitos civis que mobilizaram os protestos.",
      },
      {
        id: "q3",
        pergunta: "O que foi o cisma sino-soviético?",
        fotoUrl: imgApollo,
        cards: [
          { id: "p", emoji: "☯️", titulo: "Rompimento entre China e URSS por divergências e disputa de liderança", cor: "from-teal-600 to-slate-900" },
          { id: "j", emoji: "🔒", titulo: "União militar entre China e EUA", cor: "from-amber-600 to-slate-900" },
          { id: "x", emoji: "🗳️", titulo: "Eleição multipartidária na China", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. China e URSS, apesar de ambas comunistas, romperam relações e disputaram a liderança do comunismo mundial.",
        feedbackErro: "Foi o rompimento entre China e URSS, apesar de ambas serem comunistas.",
      },
    ],
    falaFinal: "Você já entende que os blocos da Guerra Fria tinham tensões profundas por dentro.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Duas frentes de contestação interna aos blocos.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgBerlim,
    camadas: [
      {
        id: "les",
        rotulo: "Contestação no bloco socialista",
        emoji: "🪖",
        cor: "from-red-700 to-slate-900",
        rect: { x: 5, y: 10, w: 90, h: 40 },
        descricao: "Húngaros (1956) e tchecoslovacos (1968) pediram reformas e liberdade — e foram reprimidos por tanques do Pacto de Varsóvia.",
      },
      {
        id: "oes",
        rotulo: "Contestação no bloco capitalista",
        emoji: "✌️",
        cor: "from-teal-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao: "Estudantes, movimento negro e pacifistas nos EUA e na Europa questionaram a guerra e o modelo social vigente no Ocidente.",
      },
    ],
    falaFinal: "Repressão de um lado, protesto do outro — mas contestação interna dos dois lados.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os episódios de tensão interna aos blocos.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Da Hungria ao cisma sino-soviético",
    paradas: [
      { id: "hun", emoji: "🇭🇺", rotulo: "1. Revolução Húngara (1956)", fotoUrl: imgBerlim, descricao: "URSS esmaga revolta com tanques." },
      { id: "cis", emoji: "☯️", rotulo: "2. Cisma sino-soviético (fim dos anos 1950)", fotoUrl: imgApollo, descricao: "China e URSS rompem relações." },
      { id: "pra", emoji: "🌷", rotulo: "3. Primavera de Praga (1968)", fotoUrl: imgArmas, descricao: "Pacto de Varsóvia invade a Tchecoslováquia." },
      { id: "vie", emoji: "✌️", rotulo: "4. Protestos contra o Vietnã (1968)", fotoUrl: imgLua, descricao: "Manifestações em massa nos EUA e na Europa." },
    ],
    ordemCerta: ["hun", "cis", "pra", "vie"],
    feedbackAcerto: "Perfeito. Da Hungria ao ano de 1968, as fissuras dos dois blocos ficaram cada vez mais visíveis.",
    feedbackErro: "Comece pela Revolução Húngara de 1956 e siga a cronologia.",
    falaFinal: "4 marcos que mostram: nenhum bloco era realmente unido.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 5-A da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 5-A — Tensões dentro dos blocos da Guerra Fria",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A Guerra Fria (1947-1991) opôs EUA e URSS, mas nenhum dos dois blocos era internamente unido. No Leste Europeu, países como Hungria e Tchecoslováquia tentaram reformas e sofreram intervenção militar soviética, justificada pela DOUTRINA BREJNEV.",
        chaves: ["Doutrina Brejnev"],
        definicoes: {
          "Doutrina Brejnev": "Política soviética (1968) que justificava intervenção militar em países socialistas que ameaçassem o sistema comunista.",
        },
        fotoUrl: imgBerlim,
      },
      {
        id: "p2",
        texto:
          "Em 1956, a REVOLUÇÃO HÚNGARA pediu liberdade e saída do Pacto de Varsóvia; foi esmagada em dias, com milhares de mortos. Em 1968, a PRIMAVERA DE PRAGA tentou um 'socialismo de face humana' e também foi reprimida por tropas soviéticas.",
        chaves: ["Revolução Húngara", "Primavera de Praga"],
        definicoes: {
          "Revolução Húngara": "Levante popular de 1956 na Hungria contra o regime comunista, esmagado por tanques soviéticos.",
          "Primavera de Praga": "Movimento reformista de 1968 na Tchecoslováquia, encerrado pela invasão do Pacto de Varsóvia.",
        },
        fotoUrl: imgArmas,
      },
      {
        id: "p3",
        texto:
          "No bloco capitalista, os EUA viveram intensa contestação nos anos 1960: o movimento por direitos civis, a contracultura e os protestos contra a GUERRA DO VIETNÃ mobilizaram milhões de jovens, culminando nas grandes manifestações de 1968.",
        chaves: ["Guerra do Vietnã"],
        definicoes: {
          "Guerra do Vietnã": "Conflito (1955-1975) entre o Vietnã do Norte comunista e o Vietnã do Sul apoiado pelos EUA, alvo de forte oposição popular nos EUA.",
        },
        fotoUrl: imgLua,
      },
      {
        id: "p4",
        texto:
          "Mesmo entre 'aliados' comunistas houve ruptura: o CISMA SINO-SOVIÉTICO separou China e URSS por divergências ideológicas e disputa de liderança, chegando a confrontos militares na fronteira em 1969 — prova de que a Guerra Fria não era um jogo de apenas dois times uniformes.",
        chaves: ["Cisma Sino-Soviético"],
        definicoes: {
          "Cisma Sino-Soviético": "Rompimento entre China e URSS a partir do fim dos anos 1950, por divergências sobre o comunismo e disputa de liderança do movimento comunista mundial.",
        },
        fotoUrl: imgApollo,
      },
    ],
    falaFinal: "Leitura concluída. Os blocos da Guerra Fria eram bem mais rachados do que parecia.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada episódio ao seu bloco de origem.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "les", emoji: "🪖", rotulo: "Bloco socialista" },
      { id: "oes", emoji: "✌️", rotulo: "Bloco capitalista" },
      { id: "cis", emoji: "☯️", rotulo: "Ruptura entre aliados" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Revolução Húngara", emoji: "🇭🇺", cor: "from-red-700 to-slate-900" }, municipioB: { nome: "1956", emoji: "📅", cor: "from-red-600 to-slate-900" }, contexto: "Reforma reprimida por tanques.", pecaCertaId: "les", feedbackAcerto: "Correto. Foi no bloco socialista.", feedbackErro: "É Bloco socialista." },
      { id: "r2", municipioA: { nome: "Primavera de Praga", emoji: "🌷", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "1968", emoji: "📅", cor: "from-teal-600 to-slate-900" }, contexto: "Invasão do Pacto de Varsóvia.", pecaCertaId: "les", feedbackAcerto: "Correto. Bloco socialista.", feedbackErro: "É Bloco socialista." },
      { id: "r3", municipioA: { nome: "Protestos contra o Vietnã", emoji: "✌️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "EUA, 1968", emoji: "🇺🇸", cor: "from-cyan-600 to-slate-900" }, contexto: "Manifestações em massa.", pecaCertaId: "oes", feedbackAcerto: "Correto. Bloco capitalista.", feedbackErro: "É Bloco capitalista." },
      { id: "r4", municipioA: { nome: "Maio de 1968 francês", emoji: "🇫🇷", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Greve geral e protestos estudantis", emoji: "📣", cor: "from-amber-600 to-slate-900" }, contexto: "Paris, 1968.", pecaCertaId: "oes", feedbackAcerto: "Correto. Bloco capitalista.", feedbackErro: "É Bloco capitalista." },
      { id: "r5", municipioA: { nome: "Cisma Sino-Soviético", emoji: "☯️", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "China x URSS", emoji: "⚔️", cor: "from-slate-600 to-slate-900" }, contexto: "Fim dos anos 1950 em diante.", pecaCertaId: "cis", feedbackAcerto: "Correto. Ruptura entre aliados comunistas.", feedbackErro: "É Ruptura entre aliados." },
      { id: "r6", municipioA: { nome: "Doutrina Brejnev", emoji: "🪖", cor: "from-red-700 to-slate-900" }, municipioB: { nome: "Justifica intervenção soviética", emoji: "📜", cor: "from-red-600 to-slate-900" }, contexto: "1968.", pecaCertaId: "les", feedbackAcerto: "Correto. Bloco socialista.", feedbackErro: "É Bloco socialista." },
    ],
    falaFinal: "6 rodadas. Você já reconhece as tensões dentro de cada bloco da Guerra Fria.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Onde ocorreram as principais tensões internas aos blocos, por região.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgBerlim,
    fatias: [
      { id: "les", rotulo: "Bloco socialista (~50%)", emoji: "🪖", percentual: 50, cor: "#b91c1c", descricao: "Hungria (1956), Tchecoslováquia (1968) e o cisma com a China mostraram fortes tensões internas no bloco liderado pela URSS.", exemplos: ["🇭🇺 Hungria", "🌷 Praga", "☯️ China"] },
      { id: "oes", rotulo: "Bloco capitalista (~50%)", emoji: "✌️", percentual: 50, cor: "#0f766e", descricao: "Protestos contra o Vietnã, movimento por direitos civis e o Maio de 1968 francês mostraram forte contestação interna no bloco liderado pelos EUA.", exemplos: ["🇺🇸 EUA", "🇫🇷 França", "✌️ Contracultura"] },
    ],
    falaFinal: "Metade das tensões em cada lado — nenhum bloco era realmente uniforme.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre tensões dentro dos blocos.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgBerlim,
    perguntas: [
      { id: "av1", pergunta: "A Doutrina Brejnev foi usada para justificar:", opcoes: [
        { id: "a", texto: "Intervenções militares soviéticas em países socialistas rebeldes.", correta: true },
        { id: "b", texto: "A retirada total da URSS do Leste Europeu.", correta: false },
        { id: "c", texto: "A entrada da URSS na OTAN.", correta: false },
      ], feedbackAcerto: "Correto. Foi usada na invasão da Tchecoslováquia em 1968.", feedbackErro: "Ela justificava intervenções militares soviéticas, como na Tchecoslováquia." },
      { id: "av2", pergunta: "Os protestos de 1968 nos EUA estavam ligados principalmente a:", opcoes: [
        { id: "a", texto: "Guerra do Vietnã e direitos civis.", correta: true },
        { id: "b", texto: "Apoio incondicional ao governo.", correta: false },
        { id: "c", texto: "Aliança com a URSS.", correta: false },
      ], feedbackAcerto: "Correto. Foram motivados pela guerra e pela luta por direitos civis.", feedbackErro: "Foram a Guerra do Vietnã e os direitos civis que motivaram os protestos." },
      { id: "av3", pergunta: "O cisma sino-soviético mostra que:", opcoes: [
        { id: "a", texto: "Mesmo países comunistas podiam romper relações entre si.", correta: true },
        { id: "b", texto: "China e URSS sempre foram aliadas inseparáveis.", correta: false },
        { id: "c", texto: "A China nunca foi comunista.", correta: false },
      ], feedbackAcerto: "Correto. China e URSS romperam por divergências e disputa de liderança.", feedbackErro: "Ele mostra que mesmo países comunistas podiam romper relações." },
    ],
    selo: { nome: "EF09HI28", subtitulo: "Tensões dentro dos blocos da Guerra Fria", emoji: "🧨", cor: "from-red-500 to-slate-900", fotoUrl: imgBerlim },
    falaFinal: "Você entende agora que a Guerra Fria tinha rachaduras internas em ambos os blocos.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Rachaduras da Guerra Fria" },
};

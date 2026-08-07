import type { AulaGeoV1 } from "../../types";
import { url as imgMuro } from "@/assets/historia-9ano/u5-guerra-fria.jpg.asset.json";
import { url as imgLua } from "@/assets/historia-9ano/u5-corrida-espacial.jpg.asset.json";
import { url as imgArmas } from "@/assets/historia-9ano/u5-corrida-armas.jpg.asset.json";
import { url as imgApollo } from "@/assets/historia-9ano/u5-lua-apollo.jpg.asset.json";
import { url as imgBerlim } from "@/assets/historia-9ano/u5-muro-berlim.jpg.asset.json";

export const aula03: AulaGeoV1 = {
  slug: "aula-03-ditaduras-america-latina",
  titulo: "Ditaduras na América Latina e a Contestação Popular",
  iconeTrilha: "🪖",
  bncc: ["EF09HI29"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgArmas,
    imagemDestaqueUrl: imgMuro,
    aurora:
      "Entre as décadas de 1960 e 1980, boa parte da América Latina viveu sob ditaduras militares: Brasil (1964), Argentina (1976), Chile (1973), Uruguai (1973), Paraguai (1954), entre outras. Muitas foram apoiadas pelos Estados Unidos, que temiam a expansão do comunismo depois da Revolução Cubana (1959). Mas em todos esses países, também houve resistência: sindicatos, estudantes, artistas e as Mães e Avós da Praça de Maio, na Argentina, que nunca deixaram de lutar por verdade e justiça.",
    falaFinal: "Repressão de um lado, resistência do outro — em quase todo o continente.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Pense: por que os EUA apoiaram ditaduras militares na América Latina durante a Guerra Fria?",
    pergunta: "Qual foi o principal motivo do apoio dos EUA às ditaduras latino-americanas?",
    fotoUrl: imgArmas,
    opcoes: [
      { id: "com", titulo: "CONTER O COMUNISMO", subtitulo: "temor de novas revoluções como a cubana (1959)", emoji: "🚫", cor: "from-red-800 to-slate-950" },
      { id: "eco", titulo: "PROMOVER DEMOCRACIA", subtitulo: "incentivo a eleições livres na região", emoji: "🗳️", cor: "from-teal-800 to-slate-950" },
    ],
    respostaCerta: "com",
    feedbackAcerto:
      "Correto. Na Doutrina de Segurança Nacional, os EUA e as forças armadas locais viam qualquer movimento de esquerda como ameaça comunista, e apoiaram golpes e ditaduras para 'conter' essa possibilidade após a Revolução Cubana de 1959.",
    feedbackErro:
      "Não foi para promover democracia: os EUA apoiaram ditaduras justamente para conter o avanço do comunismo na região, temendo repetições da Revolução Cubana.",
    falaFinal: "A Guerra Fria transformou a América Latina em palco de repressão anticomunista.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave sobre as ditaduras latino-americanas.",
    instrucao: "",
    cadernos: [
      {
        id: "dsn",
        capa: "Doutrina de Segurança Nacional",
        emoji: "🛡️",
        cor: "from-red-700 to-slate-900",
        fotoUrl: imgArmas,
        conteudo:
          "A DOUTRINA DE SEGURANÇA NACIONAL, difundida pelos EUA durante a Guerra Fria, via o 'inimigo interno' (opositores, sindicalistas, estudantes de esquerda) como ameaça tão grave quanto um inimigo externo. Justificou repressão, tortura e censura em várias ditaduras latino-americanas.",
        exemplo: "Exemplo: escolas militares como a Escola das Américas (Panamá) treinaram oficiais latino-americanos nessa doutrina.",
      },
      {
        id: "con",
        capa: "Operação Condor",
        emoji: "🦅",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMuro,
        conteudo:
          "A OPERAÇÃO CONDOR (a partir de 1975) foi uma aliança secreta entre as ditaduras do Brasil, Argentina, Chile, Uruguai, Paraguai e Bolívia para perseguir, sequestrar e assassinar opositores políticos além das fronteiras nacionais, com apoio dos EUA.",
        exemplo: "Exemplo: em 1976, o ex-chanceler chileno Orlando Letelier foi assassinado a mando da ditadura chilena, em Washington D.C.",
      },
      {
        id: "des",
        capa: "Desaparecidos Políticos",
        emoji: "🕯️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgLua,
        conteudo:
          "DESAPARECIDOS POLÍTICOS eram opositores presos, torturados e mortos secretamente pelas ditaduras, sem informação às famílias. Na Argentina, estima-se cerca de 30 mil desaparecidos entre 1976 e 1983; no Chile, cerca de 3 mil sob Pinochet (1973-1990).",
        exemplo: "Exemplo: bebês nascidos em cativeiro na Argentina foram entregues ilegalmente a famílias ligadas ao regime — muitos foram identificados décadas depois por exames de DNA.",
      },
      {
        id: "pdm",
        capa: "Mães da Praça de Maio",
        emoji: "🧕",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgApollo,
        conteudo:
          "As MÃES DA PRAÇA DE MAIO são um grupo de mães argentinas que, a partir de 1977, passaram a se reunir semanalmente na Praça de Maio, em Buenos Aires, exigindo informações sobre seus filhos desaparecidos pela ditadura militar (1976-1983).",
        exemplo: "Exemplo: elas usavam lenços brancos na cabeça como símbolo, e ainda hoje realizam a 'Marcha da Resistência' anual.",
      },
    ],
    falaFinal: "Doutrina de Segurança Nacional + Operação Condor + desaparecidos + Mães da Praça de Maio: repressão e resistência lado a lado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três países, três ditaduras. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgArmas,
    pontos: [
      {
        id: "arg",
        x: 25,
        y: 70,
        emoji: "🇦🇷",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMuro,
        titulo: "ARGENTINA (1976-1983)",
        texto: "A ditadura de Jorge Videla promoveu a 'Guerra Suja' contra opositores: cerca de 30 mil desaparecidos. As Mães da Praça de Maio lutaram por justiça e memória.",
      },
      {
        id: "chi",
        x: 15,
        y: 55,
        emoji: "🇨🇱",
        cor: "from-red-700 to-slate-900",
        fotoUrl: imgLua,
        titulo: "CHILE (1973-1990)",
        texto: "O general Augusto Pinochet tomou o poder em golpe contra o presidente eleito Salvador Allende (11/09/1973). Prendeu e torturou milhares no Estádio Nacional de Santiago.",
      },
      {
        id: "bra",
        x: 55,
        y: 45,
        emoji: "🇧🇷",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgApollo,
        titulo: "BRASIL (1964-1985)",
        texto: "Ditadura civil-militar de 21 anos, com o AI-5 (1968) suspendendo direitos civis. A resistência incluiu greves, imprensa alternativa e o movimento pelas Diretas Já.",
      },
    ],
    falaFinal: "Três ditaduras diferentes, um mesmo padrão: repressão, censura e resistência popular.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que foi a Operação Condor?",
        fotoUrl: imgMuro,
        cards: [
          { id: "c", emoji: "🦅", titulo: "Aliança entre ditaduras para perseguir opositores além das fronteiras", cor: "from-teal-600 to-slate-900" },
          { id: "s", emoji: "🕊️", titulo: "Programa de ajuda humanitária da ONU", cor: "from-amber-600 to-slate-900" },
          { id: "e", emoji: "🌍", titulo: "Tratado de livre comércio latino-americano", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto: "Correto. Ditaduras da região se aliaram para perseguir e assassinar opositores mesmo em outros países.",
        feedbackErro: "Foi uma aliança entre ditaduras para perseguir opositores além das fronteiras nacionais.",
      },
      {
        id: "q2",
        pergunta: "Quem eram as Mães da Praça de Maio?",
        fotoUrl: imgApollo,
        cards: [
          { id: "m", emoji: "🧕", titulo: "Mães que buscavam filhos desaparecidos pela ditadura argentina", cor: "from-teal-600 to-slate-900" },
          { id: "n", emoji: "🎖️", titulo: "Grupo de apoio ao governo militar argentino", cor: "from-amber-600 to-slate-900" },
          { id: "z", emoji: "🕊️", titulo: "Organização internacional de turismo", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "m",
        feedbackAcerto: "Correto. Elas se reuniam na Praça de Maio exigindo informações sobre seus filhos desaparecidos.",
        feedbackErro: "Eram mães que buscavam informações sobre filhos desaparecidos pela ditadura.",
      },
      {
        id: "q3",
        pergunta: "Como Pinochet chegou ao poder no Chile?",
        fotoUrl: imgLua,
        cards: [
          { id: "p", emoji: "🎖️", titulo: "Golpe militar contra o presidente eleito Salvador Allende (1973)", cor: "from-teal-600 to-slate-900" },
          { id: "j", emoji: "🗳️", titulo: "Vitória em eleições livres", cor: "from-amber-600 to-slate-900" },
          { id: "x", emoji: "👑", titulo: "Herança de um regime monárquico", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. O golpe de 11 de setembro de 1973 derrubou Allende e instalou a ditadura de Pinochet.",
        feedbackErro: "Foi por golpe militar contra o presidente eleito Salvador Allende, em 1973.",
      },
    ],
    falaFinal: "Você já compreende o padrão repressivo e a resistência nas ditaduras latino-americanas.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois lados da história das ditaduras latino-americanas.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgMuro,
    camadas: [
      {
        id: "rep",
        rotulo: "Aparato repressivo",
        emoji: "🎖️",
        cor: "from-red-700 to-slate-900",
        rect: { x: 5, y: 10, w: 90, h: 40 },
        descricao: "Militares, Operação Condor e Doutrina de Segurança Nacional promoveram prisões, torturas e desaparecimentos em vários países.",
      },
      {
        id: "res",
        rotulo: "Resistência popular",
        emoji: "🧕",
        cor: "from-teal-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao: "Mães da Praça de Maio, sindicatos, estudantes e artistas resistiram, denunciaram e mantiveram viva a memória das vítimas.",
      },
    ],
    falaFinal: "Repressão organizada de um lado, resistência corajosa do outro.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene os marcos das ditaduras latino-americanas.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Do golpe brasileiro à Operação Condor",
    paradas: [
      { id: "bra", emoji: "🇧🇷", rotulo: "1. Golpe no Brasil (1964)", fotoUrl: imgApollo, descricao: "Início da ditadura civil-militar brasileira." },
      { id: "chi", emoji: "🇨🇱", rotulo: "2. Golpe no Chile (1973)", fotoUrl: imgLua, descricao: "Pinochet derruba Salvador Allende." },
      { id: "con", emoji: "🦅", rotulo: "3. Operação Condor (1975)", fotoUrl: imgMuro, descricao: "Ditaduras se aliam para perseguir opositores." },
      { id: "arg", emoji: "🇦🇷", rotulo: "4. Golpe na Argentina (1976)", fotoUrl: imgArmas, descricao: "Início da ditadura de Videla e da 'Guerra Suja'." },
    ],
    ordemCerta: ["bra", "chi", "con", "arg"],
    feedbackAcerto: "Perfeito. Do Brasil à Argentina, as ditaduras se espalharam e se conectaram na América Latina.",
    feedbackErro: "Comece pelo golpe no Brasil (1964) e siga a cronologia.",
    falaFinal: "4 marcos que mostram o avanço e a articulação das ditaduras na região.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 5-B da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 5-B — Ditaduras na América Latina",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Durante a Guerra Fria, os EUA apoiaram ditaduras militares em vários países latino-americanos, seguindo a DOUTRINA DE SEGURANÇA NACIONAL, que tratava opositores internos como inimigos a serem combatidos.",
        chaves: ["Doutrina de Segurança Nacional"],
        definicoes: {
          "Doutrina de Segurança Nacional": "Estratégia que via opositores políticos internos como ameaça à segurança do Estado, usada para justificar repressão.",
        },
        fotoUrl: imgArmas,
      },
      {
        id: "p2",
        texto:
          "No Chile, o golpe de 11 de setembro de 1973 derrubou o presidente eleito Salvador Allende e instalou a ditadura de Augusto Pinochet (até 1990). Na Argentina, a ditadura de 1976 a 1983 promoveu a chamada 'Guerra Suja', com cerca de 30 mil DESAPARECIDOS POLÍTICOS.",
        chaves: ["Desaparecidos Políticos"],
        definicoes: {
          "Desaparecidos Políticos": "Opositores presos, torturados e mortos secretamente pelos regimes, sem informação oficial às famílias.",
        },
        fotoUrl: imgLua,
      },
      {
        id: "p3",
        texto:
          "A partir de 1975, as ditaduras da região se uniram na OPERAÇÃO CONDOR, uma rede secreta de perseguição a opositores além das fronteiras nacionais, com apoio dos serviços de inteligência dos EUA.",
        chaves: ["Operação Condor"],
        definicoes: {
          "Operação Condor": "Aliança secreta entre ditaduras latino-americanas (a partir de 1975) para perseguir e eliminar opositores políticos.",
        },
        fotoUrl: imgMuro,
      },
      {
        id: "p4",
        texto:
          "Mas houve resistência em todos esses países. As MÃES DA PRAÇA DE MAIO, na Argentina, tornaram-se símbolo mundial da luta por memória e justiça, reunindo-se desde 1977 para exigir informações sobre seus filhos desaparecidos — luta que continua até hoje.",
        chaves: ["Mães da Praça de Maio"],
        definicoes: {
          "Mães da Praça de Maio": "Grupo de mães argentinas que, desde 1977, protesta por informações sobre filhos desaparecidos pela ditadura.",
        },
        fotoUrl: imgApollo,
      },
    ],
    falaFinal: "Leitura concluída. Repressão e resistência marcaram as ditaduras latino-americanas.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento ao seu país ou categoria.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "chi", emoji: "🇨🇱", rotulo: "Chile" },
      { id: "arg", emoji: "🇦🇷", rotulo: "Argentina" },
      { id: "reg", emoji: "🦅", rotulo: "Fenômeno regional" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Augusto Pinochet", emoji: "🎖️", cor: "from-red-700 to-slate-900" }, municipioB: { nome: "Golpe de 1973", emoji: "📅", cor: "from-red-600 to-slate-900" }, contexto: "Contra Salvador Allende.", pecaCertaId: "chi", feedbackAcerto: "Correto. É o Chile.", feedbackErro: "É Chile." },
      { id: "r2", municipioA: { nome: "Mães da Praça de Maio", emoji: "🧕", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Desde 1977", emoji: "📅", cor: "from-teal-600 to-slate-900" }, contexto: "Buenos Aires.", pecaCertaId: "arg", feedbackAcerto: "Correto. É a Argentina.", feedbackErro: "É Argentina." },
      { id: "r3", municipioA: { nome: "Operação Condor", emoji: "🦅", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Aliança entre ditaduras (1975)", emoji: "🤝", cor: "from-slate-600 to-slate-900" }, contexto: "Vários países.", pecaCertaId: "reg", feedbackAcerto: "Correto. Fenômeno regional.", feedbackErro: "É Fenômeno regional." },
      { id: "r4", municipioA: { nome: "'Guerra Suja'", emoji: "⚔️", cor: "from-teal-700 to-slate-900" }, municipioB: { nome: "Cerca de 30 mil desaparecidos", emoji: "🕯️", cor: "from-teal-600 to-slate-900" }, contexto: "1976-1983.", pecaCertaId: "arg", feedbackAcerto: "Correto. É a Argentina.", feedbackErro: "É Argentina." },
      { id: "r5", municipioA: { nome: "Estádio Nacional de Santiago", emoji: "🏟️", cor: "from-red-700 to-slate-900" }, municipioB: { nome: "Centro de detenção e tortura", emoji: "⛓️", cor: "from-red-600 to-slate-900" }, contexto: "Pós-golpe de 1973.", pecaCertaId: "chi", feedbackAcerto: "Correto. É o Chile.", feedbackErro: "É Chile." },
      { id: "r6", municipioA: { nome: "Doutrina de Segurança Nacional", emoji: "🛡️", cor: "from-slate-700 to-slate-900" }, municipioB: { nome: "Justificativa ideológica comum", emoji: "📜", cor: "from-slate-600 to-slate-900" }, contexto: "Toda a região.", pecaCertaId: "reg", feedbackAcerto: "Correto. Fenômeno regional.", feedbackErro: "É Fenômeno regional." },
    ],
    falaFinal: "6 rodadas. Você já reconhece os padrões e as especificidades das ditaduras latino-americanas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Balanço entre repressão e resistência nas ditaduras latino-americanas.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgMuro,
    fatias: [
      { id: "rep", rotulo: "Repressão estatal (~55%)", emoji: "🎖️", percentual: 55, cor: "#b91c1c", descricao: "Prisões, torturas, censura e a rede da Operação Condor marcaram o período em quase todos os países da região.", exemplos: ["⛓️ Tortura", "🦅 Condor", "📰 Censura"] },
      { id: "res", rotulo: "Resistência e memória (~45%)", emoji: "🧕", percentual: 45, cor: "#0f766e", descricao: "Mães da Praça de Maio, sindicatos, imprensa alternativa e movimentos estudantis resistiram e mantêm viva a luta por justiça.", exemplos: ["🧕 Mães de Maio", "✊ Sindicatos", "🕯️ Memória"] },
    ],
    falaFinal: "Repressão predominou, mas a resistência garantiu que a história não fosse esquecida.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre as ditaduras latino-americanas.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgMuro,
    perguntas: [
      { id: "av1", pergunta: "A Operação Condor foi:", opcoes: [
        { id: "a", texto: "Uma aliança secreta entre ditaduras para perseguir opositores.", correta: true },
        { id: "b", texto: "Um programa espacial latino-americano.", correta: false },
        { id: "c", texto: "Um tratado de paz entre Chile e Argentina.", correta: false },
      ], feedbackAcerto: "Correto. Ditaduras se aliaram para perseguir opositores além das fronteiras.", feedbackErro: "Foi uma aliança secreta entre ditaduras para perseguir opositores políticos." },
      { id: "av2", pergunta: "No Chile, o golpe de 1973 derrubou:", opcoes: [
        { id: "a", texto: "O presidente eleito Salvador Allende.", correta: true },
        { id: "b", texto: "Augusto Pinochet.", correta: false },
        { id: "c", texto: "Uma monarquia.", correta: false },
      ], feedbackAcerto: "Correto. Pinochet derrubou Allende, que havia sido eleito democraticamente.", feedbackErro: "Foi o presidente eleito Salvador Allende quem foi derrubado pelo golpe." },
      { id: "av3", pergunta: "As Mães da Praça de Maio lutavam por:", opcoes: [
        { id: "a", texto: "Informações sobre filhos desaparecidos pela ditadura argentina.", correta: true },
        { id: "b", texto: "Apoio ao governo militar.", correta: false },
        { id: "c", texto: "Direitos de propriedade rural.", correta: false },
      ], feedbackAcerto: "Correto. Elas exigiam informações sobre os desaparecidos políticos.", feedbackErro: "Elas lutavam por informações sobre seus filhos desaparecidos." },
    ],
    selo: { nome: "EF09HI29", subtitulo: "Ditaduras na América Latina e contestação", emoji: "🪖", cor: "from-red-500 to-slate-900", fotoUrl: imgMuro },
    falaFinal: "Você entende agora o padrão repressivo e a resistência nas ditaduras latino-americanas.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Memória Latino-Americana" },
};

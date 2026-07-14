import type { AulaGeoV1 } from "../../types";
import { url as imgHoplita } from "@/assets/historia-6ano/u4-hoplita.jpg.asset.json";
import { url as imgAtenas } from "@/assets/historia-6ano/u4-atenas.jpg.asset.json";
import { url as imgOstracon } from "@/assets/historia-6ano/u4-ostracon.jpg.asset.json";
import { url as imgVaso } from "@/assets/historia-6ano/u4-vaso-grego.jpg.asset.json";
import { url as imgAtEs } from "@/assets/historia-6ano/u4-infografico-atenas-esparta.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-grecia-antiga",
  titulo: "Grécia Antiga: Democracia e Cidadania",
  iconeTrilha: "🛡️",
  bncc: ["EF06HI07", "EF06HI08"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgAtenas,
    imagemDestaqueUrl: imgAtEs,
    aurora:
      "A palavra DEMOCRACIA nasceu aqui, em Atenas, há ~2500 anos. Mas era uma democracia restrita: só homens atenienses adultos votavam — mulheres, escravos e estrangeiros ficavam de fora. Entender essa GRÉCIA REAL é diferente da versão de livro didático.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 4 do Códice: O Escudo do Hoplita.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Duas grandes cidades-estado dominavam a Grécia antiga: Atenas e Esparta. Uma inventou a democracia; a outra vivia como quartel militar.",
    pergunta: "Qual cidade grega inventou a DEMOCRACIA direta?",
    fotoUrl: imgAtenas,
    opcoes: [
      {
        id: "at",
        titulo: "ATENAS",
        subtitulo: "cidadãos votavam em assembleia na Ágora",
        emoji: "🏛️",
        cor: "from-cyan-800 to-slate-950",
      },
      {
        id: "es",
        titulo: "ESPARTA",
        subtitulo: "sociedade militar rígida",
        emoji: "🛡️",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "at",
    feedbackAcerto:
      "Correto. ATENAS inventou a DEMOCRACIA DIRETA no século V a.C. Cidadãos votavam em assembleias públicas — mas 'cidadão' era só uma minoria: homens atenienses adultos.",
    feedbackErro:
      "Não. Esparta era uma OLIGARQUIA militar (poder concentrado em poucos). Foi ATENAS que criou a democracia direta.",
    falaFinal:
      "Guarde: democracia grega ≠ democracia atual. Era direta, mas MUITO restrita.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave da Grécia Antiga.",
    instrucao: "",
    cadernos: [
      {
        id: "polis",
        capa: "Pólis",
        emoji: "🏛️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgAtenas,
        conteudo:
          "PÓLIS é a cidade-estado grega. Cada pólis era independente, com suas próprias leis, exército e moeda. Atenas, Esparta, Corinto, Tebas — todas rivais.",
        exemplo:
          "Exemplo: a Grécia antiga NUNCA foi um país unificado. Eram centenas de pólis competindo (e às vezes se unindo contra inimigos como a Pérsia).",
      },
      {
        id: "democracia",
        capa: "Democracia",
        emoji: "🗳️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgOstracon,
        conteudo:
          "DEMOCRACIA vem do grego: 'demos' (povo) + 'kratos' (poder). Governo do povo. Em Atenas era DIRETA: os cidadãos votavam eles mesmos as leis.",
        exemplo:
          "Exemplo: o OSTRACISMO era votação em cacos de cerâmica (ostraca) pra decidir se alguém devia ser expulso da cidade por 10 anos. Democracia direta na prática.",
      },
      {
        id: "cidadao",
        capa: "Cidadão",
        emoji: "🗿",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgVaso,
        conteudo:
          "CIDADÃO em Atenas era só o homem adulto, ateniense por nascimento, livre. Mulheres, escravos, estrangeiros e crianças estavam FORA. Só ~10-15% da população era cidadã.",
        exemplo:
          "Exemplo: numa Atenas de 300 mil habitantes, apenas ~30 mil eram cidadãos com direito de voto. O resto sustentava a democracia sem participar dela.",
      },
      {
        id: "hoplita",
        capa: "Hoplita",
        emoji: "🛡️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgHoplita,
        conteudo:
          "HOPLITA era o soldado grego cidadão, com armadura de bronze, escudo redondo e lança. Lutava em formação de FALANGE — muralha compacta de escudos.",
        exemplo:
          "Exemplo: nas Guerras Médicas (490 e 480 a.C.), os hoplitas gregos derrotaram o gigantesco exército persa em Maratona, Termópilas e Salamina.",
      },
    ],
    falaFinal:
      "Pólis + Democracia + Cidadão + Hoplita. Base política e militar da Grécia clássica.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico ATENAS × ESPARTA. Duas pólis, dois modelos opostos. Toque nos pontos pra comparar.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgAtEs,
    pontos: [
      {
        id: "at-gov",
        x: 25,
        y: 30,
        emoji: "🗳️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgAtenas,
        titulo: "ATENAS · Governo",
        texto:
          "DEMOCRACIA DIRETA. Cidadãos reuniam-se na Ágora e votavam pessoalmente as leis. Instituições: Assembleia, Bulé (conselho), Tribunais.",
      },
      {
        id: "es-gov",
        x: 75,
        y: 30,
        emoji: "⚔️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgHoplita,
        titulo: "ESPARTA · Governo",
        texto:
          "OLIGARQUIA MILITAR. Governada por 2 reis + Conselho de Anciãos (Gerúsia) + Éforos. Poucos decidiam pelo resto. Foco: guerra.",
      },
      {
        id: "at-cul",
        x: 25,
        y: 70,
        emoji: "🎭",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgVaso,
        titulo: "ATENAS · Cultura",
        texto:
          "Filosofia (Sócrates, Platão), teatro, escultura, arquitetura (Partenon), matemática. Cidade da arte e do debate.",
      },
      {
        id: "es-cul",
        x: 75,
        y: 70,
        emoji: "🛡️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgHoplita,
        titulo: "ESPARTA · Cultura",
        texto:
          "Educação exclusivamente militar (agogê) desde os 7 anos. Meninos treinavam para guerra. Simplicidade rígida, pouca arte.",
      },
    ],
    falaFinal:
      "Duas pólis, dois projetos de sociedade. E rivalizavam entre si.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de investigador clássico.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que significa a palavra DEMOCRACIA em grego?",
        fotoUrl: imgOstracon,
        cards: [
          { id: "p", emoji: "🗳️", titulo: "Poder do povo", cor: "from-teal-600 to-slate-900" },
          { id: "r", emoji: "👑", titulo: "Poder do rei", cor: "from-amber-600 to-slate-900" },
          { id: "d", emoji: "💰", titulo: "Poder do dinheiro", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "p",
        feedbackAcerto: "Correto. Demos (povo) + kratos (poder) = poder do povo.",
        feedbackErro: "É PODER DO POVO. Demos + kratos.",
      },
      {
        id: "q2",
        pergunta: "Quem podia VOTAR na democracia ateniense?",
        fotoUrl: imgAtenas,
        cards: [
          {
            id: "h",
            emoji: "👨",
            titulo: "Só homens atenienses adultos livres",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "t",
            emoji: "👥",
            titulo: "Todos os moradores da cidade",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "m",
            emoji: "👩",
            titulo: "Só mulheres",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "h",
        feedbackAcerto:
          "Correto. Mulheres, escravos e estrangeiros ficavam de fora — cerca de 85-90% da população.",
        feedbackErro:
          "Só HOMENS ATENIENSES ADULTOS LIVRES. Democracia grega era restrita.",
      },
      {
        id: "q3",
        pergunta: "Qual pólis grega era famosa pela vida militar rígida?",
        fotoUrl: imgHoplita,
        cards: [
          { id: "e", emoji: "🛡️", titulo: "Esparta", cor: "from-amber-600 to-slate-900" },
          { id: "a", emoji: "🏛️", titulo: "Atenas", cor: "from-teal-600 to-slate-900" },
          { id: "c", emoji: "⚓", titulo: "Corinto", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "e",
        feedbackAcerto:
          "Correto. ESPARTA — meninos entravam pra agogê (treinamento militar) aos 7 anos.",
        feedbackErro:
          "É ESPARTA. Atenas era mais focada em democracia e cultura.",
      },
    ],
    falaFinal: "Radar afiado. Você já compara pólis como um historiador clássico.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a sociedade ateniense. Um mostra quem TINHA poder político, outro quem sustentava a cidade sem votar.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgAtEs,
    camadas: [
      {
        id: "cid",
        rotulo: "Cidadãos (~10-15%)",
        emoji: "🗳️",
        cor: "from-teal-700 to-slate-900",
        rect: { x: 20, y: 15, w: 60, h: 30 },
        descricao:
          "Homens atenienses adultos livres. Votavam nas leis, iam pra guerra, ocupavam cargos. Cerca de 30 mil pessoas em 300 mil habitantes.",
      },
      {
        id: "fora",
        rotulo: "Sem direitos políticos (~85-90%)",
        emoji: "🚫",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 5, y: 50, w: 90, h: 45 },
        descricao:
          "Mulheres, crianças, escravos, metecos (estrangeiros). Trabalhavam, criavam filhos, sustentavam a economia — mas não votavam nem opinavam publicamente.",
      },
    ],
    falaFinal:
      "A democracia grega foi um avanço radical — mas MUITO menos inclusiva do que costuma parecer.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo da democracia ateniense clássica.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Da monarquia à democracia",
    paradas: [
      {
        id: "mon",
        emoji: "👑",
        rotulo: "1. Monarquias arcaicas",
        fotoUrl: imgVaso,
        descricao: "Grécia arcaica: pólis governadas por reis.",
      },
      {
        id: "oli",
        emoji: "👥",
        rotulo: "2. Oligarquias",
        fotoUrl: imgHoplita,
        descricao: "Poder passa a nobres proprietários de terra.",
      },
      {
        id: "sol",
        emoji: "📜",
        rotulo: "3. Reformas de Sólon e Clístenes",
        fotoUrl: imgOstracon,
        descricao: "Séculos VI-V a.C.: abrem participação a mais cidadãos.",
      },
      {
        id: "dem",
        emoji: "🗳️",
        rotulo: "4. Democracia direta de Péricles",
        fotoUrl: imgAtenas,
        descricao: "Séc. V a.C.: apogeu da democracia ateniense.",
      },
    ],
    ordemCerta: ["mon", "oli", "sol", "dem"],
    feedbackAcerto:
      "Perfeito. Rei → nobres → reformas → povo. Cada degrau abriu mais espaço.",
    feedbackErro: "Essa não é a próxima. Pense: quem começou com poder foi diminuindo aos poucos.",
    falaFinal: "Democracia não caiu do céu — foi conquistada em etapas.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 4 do Códice. Toque nos termos técnicos.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 4 — O Escudo do Hoplita",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A Grécia antiga não era um país unificado, mas um conjunto de PÓLIS independentes, cada uma com leis, exército e moeda próprios. As duas mais famosas: ATENAS (democracia, cultura, comércio) e ESPARTA (oligarquia militar).",
        chaves: ["Pólis"],
        definicoes: {
          Pólis:
            "Cidade-estado grega independente. Havia centenas delas. Atenas, Esparta, Corinto, Tebas, Argos.",
        },
        fotoUrl: imgAtEs,
      },
      {
        id: "p2",
        texto:
          "Em Atenas, no século V a.C., nasceu a DEMOCRACIA DIRETA. Os cidadãos reuniam-se na Ágora e votavam as leis pessoalmente. Instituições como a Assembleia, a Bulé (conselho) e os Tribunais organizavam as decisões.",
        chaves: ["Democracia Direta"],
        definicoes: {
          "Democracia Direta":
            "Modelo em que os cidadãos votam eles mesmos as leis, sem representantes. Só funcionava em cidades pequenas como as pólis.",
        },
        fotoUrl: imgOstracon,
      },
      {
        id: "p3",
        texto:
          "Mas a cidadania era restrita: só homens atenienses adultos livres eram CIDADÃOS. Mulheres, escravos e estrangeiros (metecos) sustentavam a economia mas não tinham voz política. Cerca de 85-90% da população estava fora do voto.",
        chaves: ["Cidadão"],
        definicoes: {
          Cidadão:
            "Na Atenas antiga: homem adulto, ateniense por nascimento, livre. Só ele podia votar, ocupar cargo e ir à guerra como hoplita.",
        },
        fotoUrl: imgAtenas,
      },
      {
        id: "p4",
        texto:
          "O soldado grego era o HOPLITA — cidadão com armadura de bronze, escudo e lança. Lutava em formação compacta chamada FALANGE. Os hoplitas gregos derrotaram o gigantesco Império Persa nas Guerras Médicas (490 e 480 a.C.).",
        chaves: ["Hoplita", "Falange"],
        definicoes: {
          Hoplita:
            "Soldado cidadão grego. Comprava a própria armadura. Direito ao voto vinha junto com o dever militar.",
          Falange:
            "Formação de batalha em bloco compacto de hoplitas com escudos e lanças. Muito eficiente contra cavalaria e exércitos maiores.",
        },
        fotoUrl: imgHoplita,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com nuance, o berço da democracia — e suas exclusões.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de historiador clássico. Classifique cada característica em ATENAS ou ESPARTA.",
    instrucao: "⏱️ Toque na pólis correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "at", emoji: "🏛️", rotulo: "Atenas" },
      { id: "es", emoji: "🛡️", rotulo: "Esparta" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Democracia direta na Ágora", emoji: "🗳️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Assembleia de cidadãos", emoji: "👥", cor: "from-teal-600 to-slate-900" },
        contexto: "Cidadãos votando pessoalmente as leis.",
        pecaCertaId: "at",
        feedbackAcerto: "Correto. Democracia direta = ATENAS.",
        feedbackErro: "Democracia direta é ATENAS.",
      },
      {
        id: "r2",
        municipioA: { nome: "Agogê: treino militar desde os 7 anos", emoji: "⚔️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Escola militar", emoji: "🛡️", cor: "from-amber-600 to-slate-900" },
        contexto: "Crianças treinadas para guerra em regime coletivo.",
        pecaCertaId: "es",
        feedbackAcerto: "Correto. Agogê = ESPARTA.",
        feedbackErro: "Agogê é o treino espartano — ESPARTA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Filosofia de Sócrates e Platão", emoji: "🧠", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Debate filosófico", emoji: "💭", cor: "from-cyan-600 to-slate-900" },
        contexto: "Pensadores debatendo virtude e política.",
        pecaCertaId: "at",
        feedbackAcerto: "Correto. Filosofia clássica = ATENAS.",
        feedbackErro: "Sócrates e Platão eram atenienses. ATENAS.",
      },
      {
        id: "r4",
        municipioA: { nome: "Oligarquia militar com 2 reis", emoji: "👑", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Governo militar", emoji: "⚔️", cor: "from-slate-600 to-slate-900" },
        contexto: "Poder concentrado em poucos, foco em guerra.",
        pecaCertaId: "es",
        feedbackAcerto: "Correto. Oligarquia militar = ESPARTA.",
        feedbackErro: "ESPARTA — oligarquia militar com dois reis.",
      },
      {
        id: "r5",
        municipioA: { nome: "Partenon e teatro grego", emoji: "🏛️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Arte e arquitetura", emoji: "🎭", cor: "from-teal-600 to-slate-900" },
        contexto: "Templos monumentais e peças de teatro em pedra.",
        pecaCertaId: "at",
        feedbackAcerto: "Correto. Partenon e teatro = ATENAS.",
        feedbackErro: "Partenon fica em ATENAS.",
      },
      {
        id: "r6",
        municipioA: { nome: "Ostracismo em cacos de cerâmica", emoji: "🏺", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Voto em pedaços de vaso", emoji: "🗳️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Cidadãos escrevendo nomes de quem deve ser expulso.",
        pecaCertaId: "at",
        feedbackAcerto: "Correto. Ostracismo = ATENAS (democracia direta).",
        feedbackErro: "Ostracismo é prática ateniense — ATENAS.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já separa Atenas de Esparta como um professor de história clássica.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da democracia ateniense: quem realmente TINHA voz política e quem estava excluído.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgOstracon,
    fatias: [
      {
        id: "cid",
        rotulo: "Cidadãos com voto (~12%)",
        emoji: "🗳️",
        percentual: 12,
        cor: "#0f766e",
        descricao:
          "Homens atenienses adultos livres. Aproximadamente 30 mil pessoas em uma cidade de 300 mil habitantes.",
        exemplos: ["👨 Homens adultos", "🏛️ Atenienses natos", "🛡️ Hoplitas"],
      },
      {
        id: "exc",
        rotulo: "Excluídos (~88%)",
        emoji: "🚫",
        percentual: 88,
        cor: "#b45309",
        descricao:
          "Mulheres, crianças, escravos e metecos (estrangeiros livres). Trabalhavam e sustentavam a cidade, mas não votavam nem podiam ocupar cargos públicos.",
        exemplos: ["👩 Mulheres", "⛓️ Escravos", "🌍 Estrangeiros"],
      },
    ],
    falaFinal:
      "A democracia grega abriu caminho. Mas a inclusão real só cresceu com séculos de luta.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Escudo do Hoplita.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgHoplita,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual é o significado da palavra DEMOCRACIA em grego?",
        opcoes: [
          { id: "a", texto: "Poder do rei.", correta: false },
          { id: "b", texto: "Poder do povo (demos + kratos).", correta: true },
          { id: "c", texto: "Poder dos ricos.", correta: false },
        ],
        feedbackAcerto: "Correto. DEMOS (povo) + KRATOS (poder) = poder do povo.",
        feedbackErro: "É PODER DO POVO. Vem de demos + kratos.",
      },
      {
        id: "av2",
        pergunta: "Quem podia VOTAR na democracia ateniense do século V a.C.?",
        opcoes: [
          { id: "a", texto: "Toda a população da cidade.", correta: false },
          { id: "b", texto: "Só homens atenienses adultos livres.", correta: true },
          { id: "c", texto: "Só as mulheres.", correta: false },
        ],
        feedbackAcerto:
          "Correto. Mulheres, escravos e estrangeiros ficavam de fora — cerca de 88% da população.",
        feedbackErro:
          "Só HOMENS ATENIENSES ADULTOS LIVRES. Democracia era restrita.",
      },
      {
        id: "av3",
        pergunta: "Como se chama a cidade-estado grega e independente?",
        opcoes: [
          { id: "a", texto: "Pólis.", correta: true },
          { id: "b", texto: "Império.", correta: false },
          { id: "c", texto: "Comuna.", correta: false },
        ],
        feedbackAcerto: "Correto. PÓLIS. Cada uma com leis, exército e moeda próprios.",
        feedbackErro: "É PÓLIS. Grécia era um mosaico de pólis independentes.",
      },
    ],
    selo: {
      nome: "Escudo do Hoplita",
      subtitulo: "Fragmento 4 do Códice",
      emoji: "🛡️",
      cor: "from-cyan-500 to-slate-900",
      fotoUrl: imgHoplita,
    },
    falaFinal:
      "Fragmento 4 restaurado. Você agora entende o berço da democracia — e o alto preço da cidadania grega.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Escudo do Hoplita" },
};

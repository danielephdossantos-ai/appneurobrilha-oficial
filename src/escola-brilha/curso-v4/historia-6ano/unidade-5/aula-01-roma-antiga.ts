import type { AulaGeoV1 } from "../../types";
import { url as imgColiseu } from "@/assets/historia-6ano/u5-coliseu.jpg.asset.json";
import { url as imgForum } from "@/assets/historia-6ano/u5-forum.jpg.asset.json";
import { url as imgAqueduto } from "@/assets/historia-6ano/u5-aqueduto.jpg.asset.json";
import { url as imgPompeia } from "@/assets/historia-6ano/u5-pompeia.jpg.asset.json";
import { url as imgFases } from "@/assets/historia-6ano/u5-infografico-fases.jpg.asset.json";
export const aula01: AulaGeoV1 = {
  slug: "aula-01-roma-antiga",
  titulo: "Roma Antiga: da República ao Império",
  iconeTrilha: "🦅",
  bncc: ["EF06HI09", "EF06HI10"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgColiseu,
    imagemDestaqueUrl: imgFases,
    aurora:
      "O Coliseu comportava 50 mil espectadores. Os aquedutos romanos ainda estão de pé depois de 2 mil anos. Roma passou por 3 grandes fases em cerca de 1.200 anos: Monarquia, República e Império. Foi o Estado mais duradouro da Antiguidade ocidental.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 5 do Códice: A Águia Imperial.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Roma teve três formas de governo em sequência. Uma delas foi um SISTEMA que dividia o poder entre magistrados e assembleias — antes da concentração no imperador.",
    pergunta: "Qual foi a fase em que Roma era uma REPÚBLICA?",
    fotoUrl: imgForum,
    opcoes: [
      {
        id: "rep",
        titulo: "REPÚBLICA (509–27 a.C.)",
        subtitulo: "cônsules, Senado, tribunos da plebe",
        emoji: "🏛️",
        cor: "from-teal-800 to-slate-950",
      },
      {
        id: "imp",
        titulo: "IMPÉRIO (27 a.C.–476 d.C.)",
        subtitulo: "poder concentrado no imperador",
        emoji: "👑",
        cor: "from-amber-900 to-slate-950",
      },
    ],
    respostaCerta: "rep",
    feedbackAcerto:
      "Correto. A REPÚBLICA (509–27 a.C.) tinha poder DIVIDIDO: cônsules governavam por 1 ano, o Senado dominava, e tribunos defendiam a plebe. Depois virou Império.",
    feedbackErro:
      "Não. O IMPÉRIO era o oposto: um só homem (imperador) concentrava o poder. República é DIVISÃO de poder entre instituições.",
    falaFinal:
      "Guarde: Monarquia → República → Império. Três fases em ~1.200 anos.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave da história romana.",
    instrucao: "",
    cadernos: [
      {
        id: "rep",
        capa: "República",
        emoji: "🏛️",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgForum,
        conteudo:
          "REPÚBLICA vem do latim RES PUBLICA — 'coisa pública'. Sistema onde o poder é dividido entre instituições e governantes eleitos com mandato temporário, para evitar tirania.",
        exemplo:
          "Exemplo: em Roma, 2 cônsules eram eleitos por 1 ano. Se um abusasse, o outro podia vetar. Modelo que inspira repúblicas modernas — inclusive o Brasil.",
      },
      {
        id: "sen",
        capa: "Senado Romano",
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgForum,
        conteudo:
          "SENADO era a assembleia de 300 patrícios (nobres) que aconselhava e controlava a política externa, as finanças e a guerra. Instituição mais poderosa da República.",
        exemplo:
          "Exemplo: a sigla SPQR ('Senatus Populusque Romanus' — o Senado e o Povo Romano) aparecia em estandartes, moedas e prédios. Marca da autoridade romana.",
      },
      {
        id: "imp",
        capa: "Império",
        emoji: "👑",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgColiseu,
        conteudo:
          "IMPÉRIO ROMANO começou em 27 a.C. com Augusto, o primeiro imperador. Poder militar, político e religioso concentrados em uma pessoa. Durou até 476 d.C. no Ocidente.",
        exemplo:
          "Exemplo: no auge (século II d.C.), o Império Romano ia da Inglaterra ao Egito, do Marrocos ao Iraque. Governou mais de 60 milhões de pessoas.",
      },
      {
        id: "cid",
        capa: "Cidadania Romana",
        emoji: "🦅",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgAqueduto,
        conteudo:
          "CIDADANIA ROMANA dava direitos jurídicos: voto, casamento legal, propriedade, proteção contra tortura. Foi se expandindo — em 212 d.C. Caracala deu cidadania a todos os homens livres do Império.",
        exemplo:
          "Exemplo: o apóstolo Paulo, do Novo Testamento, era cidadão romano de nascimento. Isso lhe deu direito a ser julgado em Roma, e não crucificado como escravo.",
      },
    ],
    falaFinal:
      "República + Senado + Império + Cidadania. Base do direito e da política ocidental.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico oficial das 3 fases de Roma. Toque nos pontos pra ver as características de cada fase.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgFases,
    pontos: [
      {
        id: "mon",
        x: 20,
        y: 45,
        emoji: "👑",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgForum,
        titulo: "1. MONARQUIA (753–509 a.C.)",
        texto:
          "7 reis lendários. O último, Tarquínio, foi expulso por tirania. Nesse período nasceram instituições religiosas e políticas iniciais.",
      },
      {
        id: "rep",
        x: 50,
        y: 40,
        emoji: "🏛️",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgForum,
        titulo: "2. REPÚBLICA (509–27 a.C.)",
        texto:
          "Poder dividido: 2 cônsules anuais + Senado + Assembleias + tribunos da plebe. Fase das grandes conquistas: Cartago, Gália, Grécia, Egito.",
      },
      {
        id: "imp",
        x: 80,
        y: 40,
        emoji: "👑",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgColiseu,
        titulo: "3. IMPÉRIO (27 a.C.–476 d.C.)",
        texto:
          "Augusto vira o 1º imperador. Poder concentrado. Auge: Pax Romana, estradas, aquedutos, cidadania para todos os livres (212 d.C.). Queda em 476.",
      },
      {
        id: "leg",
        x: 50,
        y: 80,
        emoji: "⚖️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgAqueduto,
        titulo: "LEGADO",
        texto:
          "Direito romano, latim (base do português), calendário, engenharia (arcos, aquedutos, estradas), cristianismo como religião oficial. Ainda molda o Ocidente.",
      },
    ],
    falaFinal:
      "Roma organizou o Mediterrâneo por séculos. Seu legado ainda pulsa no direito e na língua.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de historiador romano.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Quem foi o PRIMEIRO imperador romano?",
        fotoUrl: imgColiseu,
        cards: [
          { id: "a", emoji: "👑", titulo: "Augusto", cor: "from-teal-600 to-slate-900" },
          { id: "j", emoji: "🗡️", titulo: "Júlio César", cor: "from-amber-600 to-slate-900" },
          { id: "n", emoji: "🎻", titulo: "Nero", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto:
          "Correto. AUGUSTO (27 a.C.). Júlio César foi ditador antes, mas assassinado. Augusto criou o Império.",
        feedbackErro:
          "É AUGUSTO. Júlio César foi ditador, mas morreu antes de virar imperador oficialmente.",
      },
      {
        id: "q2",
        pergunta: "O que significa REPÚBLICA em latim?",
        fotoUrl: imgForum,
        cards: [
          {
            id: "c",
            emoji: "🏛️",
            titulo: "Coisa pública (res publica)",
            cor: "from-teal-600 to-slate-900",
          },
          { id: "r", emoji: "👑", titulo: "Reino divino", cor: "from-amber-600 to-slate-900" },
          { id: "m", emoji: "🗡️", titulo: "Guerra sagrada", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "c",
        feedbackAcerto:
          "Correto. RES PUBLICA = coisa pública. O governo é assunto de todos os cidadãos.",
        feedbackErro:
          "É COISA PÚBLICA (res publica). Ideia oposta ao rei que trata o Estado como propriedade privada.",
      },
      {
        id: "q3",
        pergunta: "Qual é um dos principais LEGADOS de Roma para o mundo atual?",
        fotoUrl: imgAqueduto,
        cards: [
          {
            id: "d",
            emoji: "⚖️",
            titulo: "Direito e línguas latinas",
            cor: "from-teal-600 to-slate-900",
          },
          {
            id: "e",
            emoji: "💻",
            titulo: "Internet",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "a",
            emoji: "✈️",
            titulo: "Aviação",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "d",
        feedbackAcerto:
          "Correto. DIREITO ROMANO ainda inspira códigos jurídicos. E o português vem do latim.",
        feedbackErro:
          "É o DIREITO ROMANO e as línguas latinas (português, espanhol, italiano, francês, romeno).",
      },
    ],
    falaFinal: "Radar afiado. Você já pensa como um historiador do mundo romano.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a sociedade romana. PATRÍCIOS (elite) × PLEBEUS + ESCRAVOS.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgFases,
    camadas: [
      {
        id: "pat",
        rotulo: "Patrícios (elite)",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 30, y: 15, w: 40, h: 35 },
        descricao:
          "Famílias nobres, donas de grandes terras. Ocupavam o Senado e os cargos mais altos. Minoria com poder concentrado.",
      },
      {
        id: "ple",
        rotulo: "Plebeus e escravos",
        emoji: "⚒️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 10, y: 55, w: 80, h: 40 },
        descricao:
          "Plebeus (cidadãos livres não-nobres): trabalhadores, comerciantes, camponeses e soldados. Escravos: sem direitos, base da economia romana. Conquistaram direitos aos poucos: tribunos, Lei das Doze Tábuas.",
      },
    ],
    falaFinal:
      "A luta entre patrícios e plebeus moldou a história romana por séculos.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo das grandes fases de Roma.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Fases de Roma",
    paradas: [
      {
        id: "mon",
        emoji: "👑",
        rotulo: "1. Monarquia (753–509 a.C.)",
        fotoUrl: imgForum,
        descricao: "7 reis lendários. Roma nasce à margem do rio Tibre.",
      },
      {
        id: "rep",
        emoji: "🏛️",
        rotulo: "2. República (509–27 a.C.)",
        fotoUrl: imgForum,
        descricao: "Poder dividido: cônsules, Senado, tribunos.",
      },
      {
        id: "imp",
        emoji: "🦅",
        rotulo: "3. Império (27 a.C.–476 d.C.)",
        fotoUrl: imgColiseu,
        descricao: "Augusto e sucessores. Roma domina o Mediterrâneo.",
      },
      {
        id: "qu",
        emoji: "💥",
        rotulo: "4. Queda do Império Ocidental",
        fotoUrl: imgPompeia,
        descricao: "476 d.C. Invasões germânicas encerram Roma no Ocidente.",
      },
    ],
    ordemCerta: ["mon", "rep", "imp", "qu"],
    feedbackAcerto:
      "Perfeito. Rei → República → Imperador → Queda. Ciclo de 1.200 anos.",
    feedbackErro: "Essa não é a próxima. Pense na ordem: 1 rei → poder dividido → poder concentrado → colapso.",
    falaFinal: "Roma leva 1.200 anos entre nascer, expandir e cair.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 5 do Códice. Toque nos termos técnicos.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 5 — A Águia Imperial",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A história de Roma se divide em três grandes fases. A MONARQUIA (753–509 a.C.), com 7 reis lendários. A REPÚBLICA (509–27 a.C.), com poder dividido entre cônsules, Senado e assembleias. E o IMPÉRIO (27 a.C.–476 d.C.), com o poder concentrado no imperador.",
        chaves: ["República", "Império"],
        definicoes: {
          República:
            "Do latim RES PUBLICA. Governo em que o poder é público, dividido entre instituições, com mandatos temporários.",
          Império:
            "Fase em que Roma passa a ter um imperador com poder concentrado sobre um território gigantesco.",
        },
        fotoUrl: imgFases,
      },
      {
        id: "p2",
        texto:
          "Na República romana, o SENADO era a instituição mais poderosa: 300 patrícios que decidiam guerra, finanças e política externa. A sigla SPQR (Senatus Populusque Romanus) simbolizava a união entre Senado e povo.",
        chaves: ["Senado"],
        definicoes: {
          Senado:
            "Assembleia romana de 300 patrícios que orientava a política. Instituição central da República.",
        },
        fotoUrl: imgForum,
      },
      {
        id: "p3",
        texto:
          "AUGUSTO tornou-se o primeiro imperador em 27 a.C., iniciando a PAX ROMANA — dois séculos de relativa paz e prosperidade. Roma construiu estradas, aquedutos, teatros e o Coliseu. Governou mais de 60 milhões de pessoas.",
        chaves: ["Pax Romana"],
        definicoes: {
          "Pax Romana":
            "'Paz Romana', ~200 anos (27 a.C.–180 d.C.) de estabilidade relativa que permitiu comércio e obras monumentais.",
        },
        fotoUrl: imgAqueduto,
      },
      {
        id: "p4",
        texto:
          "O LEGADO ROMANO é enorme: o DIREITO ROMANO ainda é base dos sistemas jurídicos ocidentais. O latim gerou o português, espanhol, italiano e francês. A engenharia romana (arcos, cimento, estradas) e o cristianismo como religião oficial marcaram toda a Europa medieval e moderna.",
        chaves: ["Direito Romano"],
        definicoes: {
          "Direito Romano":
            "Conjunto de leis, jurisprudência e conceitos jurídicos criados pelos romanos. Base do direito civil no Brasil e em quase toda a Europa.",
        },
        fotoUrl: imgColiseu,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com nuance, por que Roma virou modelo — e por que caiu.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de historiador. Classifique cada característica em REPÚBLICA ou IMPÉRIO.",
    instrucao: "⏱️ Toque na fase correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "re", emoji: "🏛️", rotulo: "República" },
      { id: "im", emoji: "🦅", rotulo: "Império" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Governo de 2 cônsules eleitos por 1 ano", emoji: "🗳️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Poder dividido", emoji: "🏛️", cor: "from-teal-600 to-slate-900" },
        contexto: "Dois magistrados que se controlavam mutuamente.",
        pecaCertaId: "re",
        feedbackAcerto: "Correto. 2 cônsules = REPÚBLICA.",
        feedbackErro: "Cônsules anuais = REPÚBLICA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Augusto governa por 40 anos", emoji: "👑", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Imperador vitalício", emoji: "🦅", cor: "from-amber-600 to-slate-900" },
        contexto: "Poder concentrado em uma só pessoa.",
        pecaCertaId: "im",
        feedbackAcerto: "Correto. Augusto = 1º imperador = IMPÉRIO.",
        feedbackErro: "Augusto abriu o IMPÉRIO.",
      },
      {
        id: "r3",
        municipioA: { nome: "Senado com 300 patrícios manda", emoji: "📜", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Poder do Senado", emoji: "🏛️", cor: "from-cyan-600 to-slate-900" },
        contexto: "Senado como principal instituição decisória.",
        pecaCertaId: "re",
        feedbackAcerto: "Correto. Senado forte = REPÚBLICA.",
        feedbackErro: "Senado forte é típico da REPÚBLICA.",
      },
      {
        id: "r4",
        municipioA: { nome: "Pax Romana: 200 anos de paz relativa", emoji: "🕊️", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Estabilidade imperial", emoji: "🦅", cor: "from-slate-600 to-slate-900" },
        contexto: "Dois séculos de comércio e obras públicas.",
        pecaCertaId: "im",
        feedbackAcerto: "Correto. Pax Romana = IMPÉRIO.",
        feedbackErro: "Pax Romana foi no IMPÉRIO.",
      },
      {
        id: "r5",
        municipioA: { nome: "Tribunos da plebe defendem os plebeus", emoji: "⚖️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Direitos da plebe", emoji: "👥", cor: "from-teal-600 to-slate-900" },
        contexto: "Cargo criado para proteger os cidadãos comuns.",
        pecaCertaId: "re",
        feedbackAcerto: "Correto. Tribunos da plebe = REPÚBLICA.",
        feedbackErro: "Tribunos surgiram na REPÚBLICA.",
      },
      {
        id: "r6",
        municipioA: { nome: "Coliseu com jogos de gladiadores", emoji: "⚔️", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Grande espetáculo", emoji: "🎭", cor: "from-amber-600 to-slate-900" },
        contexto: "Anfiteatro com espetáculos para 50 mil pessoas.",
        pecaCertaId: "im",
        feedbackAcerto: "Correto. Coliseu = IMPÉRIO (construído no séc. I d.C.).",
        feedbackErro: "Coliseu foi construído no IMPÉRIO.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já separa República de Império como um professor de história antiga.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da sociedade romana: proporção entre ELITE PATRÍCIA e o resto (plebeus + escravos).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgForum,
    fatias: [
      {
        id: "pat",
        rotulo: "Elite patrícia (~5%)",
        emoji: "👑",
        percentual: 5,
        cor: "#b45309",
        descricao:
          "Famílias nobres, senadores, grandes proprietários. Concentravam terras, cargos e riqueza.",
        exemplos: ["👑 Senadores", "🏛️ Nobres", "💰 Latifundiários"],
      },
      {
        id: "res",
        rotulo: "Plebeus e escravos (~95%)",
        emoji: "⚒️",
        percentual: 95,
        cor: "#0f766e",
        descricao:
          "Plebeus livres (comerciantes, artesãos, camponeses, soldados) e escravos (base da economia). Sustentavam Roma com trabalho.",
        exemplos: ["🛠️ Plebeus livres", "⛓️ Escravos", "🌾 Camponeses"],
      },
    ],
    falaFinal:
      "Roma foi grande — mas a grandeza foi sustentada pelo trabalho de muitos.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear a Águia Imperial.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgColiseu,
    perguntas: [
      {
        id: "av1",
        pergunta: "Quais foram as três GRANDES FASES de Roma na ordem correta?",
        opcoes: [
          { id: "a", texto: "Império → República → Monarquia.", correta: false },
          { id: "b", texto: "Monarquia → República → Império.", correta: true },
          { id: "c", texto: "República → Império → Monarquia.", correta: false },
        ],
        feedbackAcerto: "Correto. Monarquia (7 reis) → República (509 a.C.) → Império (27 a.C.).",
        feedbackErro: "MONARQUIA → REPÚBLICA → IMPÉRIO.",
      },
      {
        id: "av2",
        pergunta: "Quem foi o PRIMEIRO imperador romano?",
        opcoes: [
          { id: "a", texto: "Nero.", correta: false },
          { id: "b", texto: "Augusto.", correta: true },
          { id: "c", texto: "Rômulo.", correta: false },
        ],
        feedbackAcerto: "Correto. AUGUSTO, em 27 a.C., inaugurou o Império.",
        feedbackErro: "É AUGUSTO. Nero veio depois. Rômulo é mito de fundação.",
      },
      {
        id: "av3",
        pergunta: "Qual é um LEGADO importante de Roma para o mundo atual?",
        opcoes: [
          { id: "a", texto: "Internet.", correta: false },
          { id: "b", texto: "Direito e línguas latinas (português, espanhol...).", correta: true },
          { id: "c", texto: "Democracia direta grega.", correta: false },
        ],
        feedbackAcerto: "Correto. Direito Romano e línguas latinas moldam o Ocidente até hoje.",
        feedbackErro: "É o DIREITO ROMANO e as línguas latinas.",
      },
    ],
    selo: {
      nome: "Águia Imperial",
      subtitulo: "Fragmento 5 do Códice",
      emoji: "🦅",
      cor: "from-amber-500 to-slate-900",
      fotoUrl: imgColiseu,
    },
    falaFinal:
      "Fragmento 5 restaurado. Você agora entende as três fases de Roma — e por que o direito romano ainda molda o mundo.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Águia Imperial" },
};

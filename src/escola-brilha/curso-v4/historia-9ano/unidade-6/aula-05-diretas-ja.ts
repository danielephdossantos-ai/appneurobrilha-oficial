import type { AulaGeoV1 } from "../../types";
import { url as imgDiretas } from "@/assets/historia-9ano/u6-diretas-comicio.jpg.asset.json";
import { url as imgDir } from "@/assets/historia-9ano/u6-diretas-ja.jpg.asset.json";
import { url as imgRes } from "@/assets/historia-9ano/u6-resistencia-cultural.jpg.asset.json";
import { url as imgTanqueDit } from "@/assets/historia-9ano/u6-tanque-ditadura.jpg.asset.json";
import { url as imgMpb } from "@/assets/historia-9ano/u6-mpb-resistencia.jpg.asset.json";

export const aula05: AulaGeoV1 = {
  slug: "aula-05-diretas-ja",
  titulo: "Diretas Já: A Mobilização que Levou à Constituição de 1988",
  iconeTrilha: "🗳️",
  bncc: ["EF09HI22"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgDiretas,
    imagemDestaqueUrl: imgDir,
    aurora:
      "16 de abril de 1984: mais de 1 milhão de pessoas ocupam a Praça da Sé, em São Paulo, gritando por eleições diretas para presidente. É o auge da campanha DIRETAS JÁ, que reuniu sindicatos, artistas, estudantes, a Igreja e políticos de oposição. A emenda Dante de Oliveira, que restauraria o voto direto, é derrotada no Congresso por poucos votos. Mas a mobilização não parou: ela abriu caminho para a Assembleia Nacional Constituinte de 1987-88, que redigiu a Constituição de 1988.",
    falaFinal: "Diretas Já não venceu no Congresso em 1984 — mas venceu na história.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "O Congresso derrotou a emenda das Diretas Já em 1984. A mobilização foi inútil?",
    pergunta: "O que a campanha Diretas Já (1983-84) conseguiu, mesmo derrotada no Congresso?",
    fotoUrl: imgDiretas,
    opcoes: [
      { id: "cam", titulo: "MANTEVE PRESSÃO POPULAR", subtitulo: "abriu caminho para a Constituinte de 1987-88", emoji: "✊", cor: "from-emerald-800 to-slate-950" },
      { id: "nada", titulo: "NÃO MUDOU NADA", subtitulo: "o país continuou igual", emoji: "❌", cor: "from-slate-700 to-slate-950" },
          { id: "extra2", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
    ],
    respostaCerta: "cam",
    feedbackAcerto:
      "Correto. Mesmo com a derrota da emenda Dante de Oliveira, a força das ruas mostrou que a sociedade queria democracia. Isso pressionou a escolha de Tancredo Neves (via Colégio Eleitoral, 1985) e garantiu a convocação da Assembleia Constituinte, que resultou na Constituição de 1988.",
    feedbackErro:
      "Errado. A pressão popular das Diretas Já não parou com a derrota no Congresso — ela manteve viva a exigência por democracia até a Constituinte de 1987-88.",
    falaFinal: "Mobilização social muda o rumo da história, mesmo quando perde uma votação.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Quatro conceitos-chave da redemocratização.",
    instrucao: "",
    cadernos: [
      {
        id: "dj",
        capa: "Diretas Já",
        emoji: "🗳️",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgDiretas,
        conteudo:
          "DIRETAS JÁ foi o movimento popular de 1983-84 que exigiu eleições diretas para presidente da República, extintas desde 1964. Reuniu comícios com centenas de milhares de pessoas em várias capitais.",
        exemplo:
          "Exemplo: o comício de 16 de abril de 1984 na Praça da Sé (São Paulo) reuniu mais de 1 milhão de pessoas — um dos maiores atos políticos da história do Brasil.",
      },
      {
        id: "edo",
        capa: "Emenda Dante de Oliveira",
        emoji: "📜",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgDir,
        conteudo:
          "EMENDA DANTE DE OLIVEIRA (deputado do PMDB-MT) propunha restaurar as eleições diretas para presidente já em 1985. Foi votada em 25 de abril de 1984 e derrotada por faltarem 22 votos para os 2/3 necessários — muitos deputados do governo faltaram à sessão por pressão do Palácio do Planalto.",
        exemplo:
          "Exemplo: apesar da derrota, o Colégio Eleitoral acabou escolhendo Tancredo Neves (oposição) em janeiro de 1985 — sinal de que a pressão das ruas havia funcionado politicamente.",
      },
      {
        id: "anc",
        capa: "Assembleia Nacional Constituinte",
        emoji: "🏛️",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgTanqueDit,
        conteudo:
          "ASSEMBLEIA NACIONAL CONSTITUINTE (1987-1988) foi formada por deputados e senadores eleitos em 1986, com a missão de redigir uma nova Constituição democrática para o Brasil, superando o regime militar. Recebeu milhares de sugestões populares.",
        exemplo:
          "Exemplo: a Constituinte recebeu mais de 12 milhões de assinaturas em 'emendas populares' propostas por movimentos sociais — prova de mobilização direta da sociedade.",
      },
      {
        id: "cf88",
        capa: "Constituição de 1988",
        emoji: "📖",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMpb,
        conteudo:
          "CONSTITUIÇÃO DE 1988, promulgada em 5 de outubro de 1988, é chamada de 'Constituição Cidadã' por ampliar direitos sociais, civis e políticos e restaurar o voto direto (usado a partir da eleição presidencial de 1989).",
        exemplo:
          "Exemplo: em 1989, 35 milhões de eleitores(as) a mais votaram para presidente do que em 1960 — resultado direto da redemocratização.",
      },
    ],
    falaFinal: "Diretas Já + Emenda Dante de Oliveira + Constituinte + CF/88. O caminho da rua até a lei.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Três etapas da mobilização até a Constituição. Toque nos pontos.",
    instrucao: "Toque nos pontos",
    mapaUrl: imgDiretas,
    pontos: [
      {
        id: "mob",
        x: 20,
        y: 32,
        emoji: "✊",
        cor: "from-emerald-700 to-slate-900",
        fotoUrl: imgDir,
        titulo: "COMÍCIOS DIRETAS JÁ (1983-84)",
        texto:
          "Comícios em várias capitais culminam no ato de 16 de abril de 1984 na Praça da Sé, com mais de 1 milhão de pessoas.",
      },
      {
        id: "der",
        x: 52,
        y: 55,
        emoji: "📜",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgTanqueDit,
        titulo: "EMENDA DERROTADA (25/04/1984)",
        texto:
          "A emenda Dante de Oliveira é derrotada no Congresso, mas a pressão popular já havia mudado o clima político do país.",
      },
      {
        id: "con",
        x: 80,
        y: 38,
        emoji: "🏛️",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgMpb,
        titulo: "CONSTITUINTE E CF/88",
        texto:
          "Eleita em 1986, a Assembleia Constituinte trabalha por 20 meses e promulga, em 5 de outubro de 1988, a nova Constituição democrática.",
      },
    ],
    falaFinal: "Mobilização + derrota parcial + conquista final. A democracia não veio de graça.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "O que pedia a campanha Diretas Já (1983-84)?",
        fotoUrl: imgDiretas,
        cards: [
          { id: "v", emoji: "🗳️", titulo: "Eleições diretas para presidente", cor: "from-emerald-600 to-slate-900" },
          { id: "n", emoji: "🎖️", titulo: "Volta dos militares ao poder", cor: "from-amber-600 to-slate-900" },
          { id: "z", emoji: "🌍", titulo: "Saída do Brasil da ONU", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "v",
        feedbackAcerto: "Correto. Pedia o direito de eleger diretamente o presidente da República.",
        feedbackErro: "Pedia eleições DIRETAS para presidente — voto extinto desde 1964.",
      },
      {
        id: "q2",
        pergunta: "O que aconteceu com a emenda Dante de Oliveira?",
        fotoUrl: imgTanqueDit,
        cards: [
          { id: "d", emoji: "📜", titulo: "Foi derrotada por 22 votos", cor: "from-emerald-600 to-slate-900" },
          { id: "a", emoji: "✅", titulo: "Foi aprovada por unanimidade", cor: "from-amber-600 to-slate-900" },
          { id: "x", emoji: "❌", titulo: "Nunca foi votada", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "d",
        feedbackAcerto: "Correto. Faltaram 22 votos para atingir os 2/3 exigidos, em 25 de abril de 1984.",
        feedbackErro: "Foi derrotada por faltarem 22 votos — muitos deputados governistas faltaram à sessão.",
      },
      {
        id: "q3",
        pergunta: "Quando foi promulgada a Constituição de 1988?",
        fotoUrl: imgMpb,
        cards: [
          { id: "88", emoji: "📖", titulo: "5 de outubro de 1988", cor: "from-emerald-600 to-slate-900" },
          { id: "64", emoji: "🎖️", titulo: "31 de março de 1964", cor: "from-amber-600 to-slate-900" },
          { id: "85", emoji: "🗳️", titulo: "15 de janeiro de 1985", cor: "from-slate-600 to-slate-900" },
          { id: "extra3", emoji: "🔎", titulo: "Preciso comparar outras evidências", cor: "from-blue-500 to-indigo-700" },
        ],
        correta: "88",
        feedbackAcerto: "Correto. A 'Constituição Cidadã' foi promulgada em 5 de outubro de 1988.",
        feedbackErro: "Foi em 5 de outubro de 1988 — data de 1964 é do golpe, e 1985 é da eleição de Tancredo pelo Colégio Eleitoral.",
      },
    ],
    falaFinal: "Você já entende a diferença entre uma derrota pontual e uma vitória histórica.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora: "Dois grupos da mobilização pelas Diretas Já.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgDiretas,
    camadas: [
      {
        id: "mob",
        rotulo: "Mobilização social",
        emoji: "✊",
        cor: "from-emerald-700 to-slate-900",
        rect: { x: 5, y: 10, w: 90, h: 40 },
        descricao:
          "Sindicatos (CUT), UNE, artistas (Fafá de Belém, Chico Buarque), Igreja Católica e movimentos de bairro organizaram os grandes comícios pelo Brasil.",
      },
      {
        id: "pol",
        rotulo: "Arena política",
        emoji: "🏛️",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 5, y: 55, w: 90, h: 40 },
        descricao:
          "PMDB, PT e outros partidos de oposição levaram a pressão das ruas para dentro do Congresso, via emenda Dante de Oliveira e depois na Constituinte de 1987-88.",
      },
    ],
    falaFinal: "Rua e Congresso se conectaram: a mobilização virou pauta política concreta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene as etapas rumo à Constituição de 1988.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Da praça à Constituição",
    paradas: [
      { id: "com", emoji: "✊", rotulo: "1. Comício da Sé (16/04/1984)", fotoUrl: imgDiretas, descricao: "Mais de 1 milhão nas ruas por eleições diretas." },
      { id: "der", emoji: "📜", rotulo: "2. Emenda derrotada (25/04/1984)", fotoUrl: imgTanqueDit, descricao: "Faltaram 22 votos no Congresso." },
      { id: "tan", emoji: "🗳️", rotulo: "3. Tancredo eleito (15/01/1985)", fotoUrl: imgDir, descricao: "Colégio Eleitoral escolhe candidato da oposição." },
      { id: "cf", emoji: "📖", rotulo: "4. Constituição promulgada (05/10/1988)", fotoUrl: imgMpb, descricao: "Nova Constituição democrática entra em vigor." },
    ],
    ordemCerta: ["com", "der", "tan", "cf"],
    feedbackAcerto: "Perfeito. Da mobilização de 1984 à Constituição de 1988 — quatro anos decisivos.",
    feedbackErro: "Comece pelo comício da Sé (16/04/1984) e siga a cronologia.",
    falaFinal: "4 marcos, 4 anos: da rua até a lei fundamental do país.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Página 7-A da Teia. Toque nos termos técnicos.",
    tituloLivro: "🌐 A Teia do Tempo Presente",
    subtitulo: "Página 7-A — Diretas Já e o caminho até a Constituição de 1988",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Entre 1983 e 1984 o Brasil viveu a campanha DIRETAS JÁ, que exigia o direito de eleger diretamente o presidente da República — voto extinto desde o golpe de 1964. O ápice foi o comício de 16 de abril de 1984 na Praça da Sé, em São Paulo, com mais de 1 milhão de pessoas.",
        chaves: ["Diretas Já"],
        definicoes: {
          "Diretas Já": "Movimento popular de 1983-84 que exigiu eleições diretas para presidente da República.",
        },
        fotoUrl: imgDiretas,
      },
      {
        id: "p2",
        texto:
          "A EMENDA DANTE DE OLIVEIRA, que restauraria o voto direto, foi votada em 25 de abril de 1984 e derrotada — faltaram 22 votos. Ainda assim, a mobilização havia deixado claro que a sociedade não aceitava mais o regime militar.",
        chaves: ["Emenda Dante de Oliveira"],
        definicoes: {
          "Emenda Dante de Oliveira": "Proposta de emenda constitucional de 1984 que restauraria eleições diretas para presidente; foi derrotada no Congresso.",
        },
        fotoUrl: imgTanqueDit,
      },
      {
        id: "p3",
        texto:
          "Em 1985, o Colégio Eleitoral escolheu Tancredo Neves, da oposição, como presidente — sinal de que a pressão das Diretas Já havia mudado os rumos da política. Em 1986, o país elegeu deputados e senadores para formar a ASSEMBLEIA NACIONAL CONSTITUINTE.",
        chaves: ["Assembleia Nacional Constituinte"],
        definicoes: {
          "Assembleia Nacional Constituinte": "Órgão formado em 1987-88 para redigir uma nova Constituição democrática para o Brasil.",
        },
        fotoUrl: imgDir,
      },
      {
        id: "p4",
        texto:
          "Depois de 20 meses de trabalho e mais de 12 milhões de assinaturas em emendas populares, a CONSTITUIÇÃO DE 1988 foi promulgada em 5 de outubro de 1988. Ela restaurou o voto direto e ampliou direitos — por isso é chamada de 'Constituição Cidadã'.",
        chaves: ["Constituição de 1988"],
        definicoes: {
          "Constituição de 1988": "Constituição democrática do Brasil, promulgada em 5 de outubro de 1988, também chamada de 'Constituição Cidadã'.",
        },
        fotoUrl: imgMpb,
      },
    ],
    falaFinal: "Leitura concluída. A mobilização social de 1984 foi a semente da democracia de 1988.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Associe cada elemento à sua categoria no processo das Diretas Já.",
    instrucao: "⏱️ Toque na peça correta",
    duracaoSegundos: 22,
    pecas: [
      { id: "mob", emoji: "✊", rotulo: "Mobilização popular" },
      { id: "der", emoji: "📜", rotulo: "Derrota no Congresso" },
      { id: "con", emoji: "🏛️", rotulo: "Constituinte e CF/88" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Comício da Praça da Sé", emoji: "✊", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Mais de 1 milhão de pessoas", emoji: "👥", cor: "from-emerald-600 to-slate-900" }, contexto: "16/04/1984.", pecaCertaId: "mob", feedbackAcerto: "Correto. Comício = mobilização popular.", feedbackErro: "É Mobilização popular." },
      { id: "r2", municipioA: { nome: "Emenda Dante de Oliveira", emoji: "📜", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Faltaram 22 votos", emoji: "❌", cor: "from-amber-600 to-slate-900" }, contexto: "25/04/1984.", pecaCertaId: "der", feedbackAcerto: "Correto. É a derrota no Congresso.", feedbackErro: "É Derrota no Congresso." },
      { id: "r3", municipioA: { nome: "12 milhões de assinaturas", emoji: "✍️", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "Emendas populares na Constituinte", emoji: "🏛️", cor: "from-cyan-600 to-slate-900" }, contexto: "1987-88.", pecaCertaId: "con", feedbackAcerto: "Correto. Faz parte da Constituinte e CF/88.", feedbackErro: "É Constituinte e CF/88." },
      { id: "r4", municipioA: { nome: "Fafá de Belém e Chico Buarque", emoji: "🎤", cor: "from-emerald-700 to-slate-900" }, municipioB: { nome: "Artistas nos comícios", emoji: "🎶", cor: "from-emerald-600 to-slate-900" }, contexto: "Diretas Já.", pecaCertaId: "mob", feedbackAcerto: "Correto. Mobilização popular.", feedbackErro: "É Mobilização popular." },
      { id: "r5", municipioA: { nome: "Constituição promulgada", emoji: "📖", cor: "from-cyan-700 to-slate-900" }, municipioB: { nome: "5 de outubro de 1988", emoji: "📅", cor: "from-cyan-600 to-slate-900" }, contexto: "Fim do processo.", pecaCertaId: "con", feedbackAcerto: "Correto. Constituinte e CF/88.", feedbackErro: "É Constituinte e CF/88." },
      { id: "r6", municipioA: { nome: "Deputados governistas faltam à sessão", emoji: "🚪", cor: "from-amber-700 to-slate-900" }, municipioB: { nome: "Emenda perde por pouco", emoji: "📉", cor: "from-amber-600 to-slate-900" }, contexto: "25/04/1984.", pecaCertaId: "der", feedbackAcerto: "Correto. Derrota no Congresso.", feedbackErro: "É Derrota no Congresso." },
    ],
    falaFinal: "6 rodadas. Você já organiza mobilização, derrota e conquista final.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Votação da emenda Dante de Oliveira em 25 de abril de 1984.",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgTanqueDit,
    fatias: [
      { id: "fav", rotulo: "Votos favoráveis (~78%)", emoji: "✅", percentual: 78, cor: "#0f766e", descricao: "298 deputados votaram a favor da emenda — a maioria da Câmara, mas ainda insuficiente para os 2/3 exigidos (320 votos).", exemplos: ["🗳️ PMDB", "🗳️ PT", "🗳️ PDT"] },
      { id: "con", rotulo: "Votos contrários/ausentes (~22%)", emoji: "❌", percentual: 22, cor: "#b45309", descricao: "Faltaram apenas 22 votos para aprovar a emenda; muitos deputados governistas se ausentaram por pressão do Palácio do Planalto.", exemplos: ["🚪 Ausências", "❌ Contrários"] },
    ],
    falaFinal: "298 a favor, mas faltaram 22. Uma derrota por muito pouco — que não deteve a democracia.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais sobre as Diretas Já.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgDiretas,
    perguntas: [
      { id: "av1", pergunta: "A campanha Diretas Já (1983-84) pedia:", opcoes: [
        { id: "a", texto: "Eleições diretas para presidente da República.", correta: true },
        { id: "b", texto: "A volta dos militares ao poder.", correta: false },
        { id: "c", texto: "A saída do Brasil da ONU.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Eleições diretas eram a bandeira central.", feedbackErro: "Era eleições diretas para presidente." },
      { id: "av2", pergunta: "A emenda Dante de Oliveira, em 1984:", opcoes: [
        { id: "a", texto: "Foi derrotada por faltarem 22 votos.", correta: true },
        { id: "b", texto: "Foi aprovada por unanimidade.", correta: false },
        { id: "c", texto: "Nunca chegou a ser votada.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Faltaram 22 votos para os 2/3 necessários.", feedbackErro: "Foi derrotada por faltarem 22 votos." },
      { id: "av3", pergunta: "A Constituição de 1988 é chamada de 'Constituição Cidadã' porque:", opcoes: [
        { id: "a", texto: "Ampliou direitos civis, políticos e sociais.", correta: true },
        { id: "b", texto: "Manteve a censura da ditadura.", correta: false },
        { id: "c", texto: "Aboliu o voto direto.", correta: false },
          { id: "extra3", texto: "Preciso comparar outras evidências" },
      ], feedbackAcerto: "Correto. Ela ampliou direitos e restaurou o voto direto.", feedbackErro: "É porque ampliou direitos civis, políticos e sociais." },
    ],
    selo: { nome: "EF09HI22", subtitulo: "Diretas Já e a Constituição de 1988", emoji: "🗳️", cor: "from-emerald-500 to-slate-900", fotoUrl: imgDir },
    falaFinal: "Você entende como a mobilização social de 1984 conquistou a democracia de 1988.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Diretas Já" },
};

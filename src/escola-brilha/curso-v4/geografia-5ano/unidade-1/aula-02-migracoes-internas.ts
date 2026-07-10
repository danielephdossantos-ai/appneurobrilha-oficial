import type { AulaGeoV1 } from "../../types";

const IMG_MIGRA = "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800";
const IMG_ESTRADA = "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800";
const IMG_SP = "https://images.unsplash.com/photo-1543832923-44667a44c804?w=800";
const IMG_BAIRRO = "https://images.unsplash.com/photo-1519752594763-2633d68b0e4c?w=800";

/**
 * Geografia · 5º Ano · Unidade 1 · Aula 02
 * "Migrações Internas: O Brasil em Movimento" — EF05GE02
 */
export const aula02: AulaGeoV1 = {
  slug: "aula-02-migracoes-internas",
  titulo: "Migrações Internas: O Brasil em Movimento",
  iconeTrilha: "🧳",
  bncc: ["EF05GE02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Olhe as malas. Uma família se muda de estado.",
    mapaUrl: IMG_MIGRA,
    imagemDestaqueUrl: IMG_MIGRA,
    aurora:
      "Explorador, o Brasil se moveu muito! Milhões saíram do Nordeste e foram pro Sudeste em busca de trabalho. Isso é MIGRAÇÃO INTERNA — mudar de estado dentro do mesmo país. Hoje muita gente também está voltando pra casa.",
    falaFinal: "Bora entender quem vai, quem volta e por quê.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: qual foi o MAIOR motivo pra tanta gente sair do Nordeste no século 20?",
    pergunta: "Por que migraram?",
    opcoes: [
      {
        id: "trabalho",
        titulo: "Buscar TRABALHO",
        subtitulo: "seca no campo, fábrica no Sudeste",
        emoji: "🏭",
        cor: "from-amber-400 to-orange-600",
      },
      {
        id: "turismo",
        titulo: "Fazer TURISMO",
        subtitulo: "conhecer praias novas",
        emoji: "🏖️",
        cor: "from-sky-400 to-blue-600",
      },
    ],
    respostaCerta: "trabalho",
    feedbackAcerto: "Isso! Seca + fábricas em SP e RJ = migração em massa por TRABALHO.",
    feedbackErro: "Turismo é passeio curto. Migração é mudança pra ficar — por TRABALHO.",
    falaFinal: "Trabalho e seca puxaram gente pro Sudeste. Vamos ver como.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras da migração brasileira.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "migracao",
        capa: "1. Migração",
        emoji: "🧳",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "MIGRAÇÃO é mudar de lugar pra viver. INTERNA é dentro do país. EXTERNA é entre países.",
        exemplo: "Ex.: família baiana que se muda pra São Paulo = migração interna.",
        fotoUrl: IMG_MIGRA,
      },
      {
        id: "exodo",
        capa: "2. Êxodo rural",
        emoji: "🚚",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "ÊXODO RURAL é a saída em MASSA de gente do campo pra cidade. Aconteceu muito no Brasil entre 1950 e 1980.",
        exemplo: "Ex.: milhares saindo do sertão pra trabalhar em fábricas de SP.",
        fotoUrl: IMG_ESTRADA,
      },
      {
        id: "retirante",
        capa: "3. Retirante",
        emoji: "👨‍👩‍👧",
        cor: "from-red-500 to-rose-700",
        conteudo:
          "RETIRANTE é quem foge da SECA do sertão nordestino. Muitas famílias iam de pau-de-arara (caminhão) pro Sudeste.",
        exemplo: "Ex.: cena do filme 'Vidas Secas' — família fugindo da seca.",
        fotoUrl: IMG_BAIRRO,
      },
      {
        id: "retorno",
        capa: "4. Migração de retorno",
        emoji: "🔄",
        cor: "from-emerald-500 to-green-700",
        conteudo:
          "MIGRAÇÃO DE RETORNO é quando quem migrou VOLTA pra terra natal. Muitos nordestinos estão voltando hoje porque o Nordeste cresceu.",
        exemplo: "Ex.: paulistano nascido de pais cearenses volta pra Fortaleza.",
      },
    ],
    falaFinal: "Migração, êxodo, retirante, retorno. 4 chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Toque em cada balão pra ouvir o fluxo migratório.",
    instrucao: "Toque nos pontos",
    mapaUrl: IMG_MIGRA,
    pontos: [
      {
        id: "ne_saida",
        x: 70,
        y: 30,
        emoji: "🏜️",
        cor: "from-amber-500 to-orange-700",
        titulo: "SAÍDA do Nordeste (1950-1980)",
        texto: "Seca no sertão fez milhões saírem pra buscar trabalho no Sudeste.",
      },
      {
        id: "se_chegada",
        x: 55,
        y: 65,
        emoji: "🏭",
        cor: "from-red-500 to-rose-700",
        titulo: "CHEGADA no Sudeste",
        texto: "SP e RJ receberam esses migrantes pra trabalhar em fábricas e construção.",
        fotoUrl: IMG_SP,
      },
      {
        id: "norte",
        x: 25,
        y: 40,
        emoji: "🌳",
        cor: "from-emerald-500 to-green-700",
        titulo: "SUL → NORTE (1970-hoje)",
        texto: "Gaúchos e paranaenses foram pro Mato Grosso e Rondônia plantar soja.",
      },
      {
        id: "retorno",
        x: 65,
        y: 45,
        emoji: "🔄",
        cor: "from-sky-500 to-blue-700",
        titulo: "RETORNO ao Nordeste (hoje)",
        texto: "Hoje muitos voltam: Nordeste cresceu, tem emprego e a família ficou lá.",
        fotoUrl: IMG_BAIRRO,
      },
    ],
    falaFinal: "Nordeste saiu, Sul foi pro Norte, e agora o povo volta. Brasil em movimento.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas sobre migração.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Migração INTERNA é...",
        cards: [
          { id: "dentro", emoji: "🇧🇷", titulo: "Dentro do país", cor: "from-sky-500 to-blue-700" },
          { id: "fora", emoji: "✈️", titulo: "Pra outro país", cor: "from-red-500 to-rose-700" },
          { id: "ferias", emoji: "🏖️", titulo: "Férias curtas", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "dentro",
        feedbackAcerto: "Isso! Interna = dentro do Brasil.",
        feedbackErro: "Pra outro país é externa. Férias é passeio. Interna é MUDAR dentro do país.",
      },
      {
        id: "q2",
        pergunta: "'Êxodo rural' é a saída de gente...",
        fotoUrl: IMG_ESTRADA,
        cards: [
          { id: "cc", emoji: "🚚", titulo: "Do campo pra cidade", cor: "from-amber-500 to-orange-700" },
          { id: "cf", emoji: "🌳", titulo: "Da cidade pro campo", cor: "from-emerald-500 to-green-700" },
          { id: "int", emoji: "🌊", titulo: "Do país pro exterior", cor: "from-sky-500 to-blue-700" },
        ],
        correta: "cc",
        feedbackAcerto: "Perfeito! Êxodo RURAL = sai do rural (campo) pra cidade.",
        feedbackErro: "É o contrário: sai do CAMPO pra CIDADE.",
      },
      {
        id: "q3",
        pergunta: "Quem foge da SECA do sertão pro Sudeste é chamado de...",
        cards: [
          { id: "ret", emoji: "👨‍👩‍👧", titulo: "Retirante", cor: "from-amber-500 to-orange-700" },
          { id: "tur", emoji: "📷", titulo: "Turista", cor: "from-sky-500 to-blue-700" },
          { id: "vend", emoji: "🛒", titulo: "Vendedor", cor: "from-emerald-500 to-green-700" },
        ],
        correta: "ret",
        feedbackAcerto: "Isso! RETIRANTE = quem se retira, foge da seca.",
        feedbackErro: "Turista passeia. Retirante FOGE da seca.",
      },
    ],
    falaFinal: "Radar afiado! Você entende os fluxos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Os 4 estados do Nordeste que MAIS mandaram gente pro Sudeste. Toca em cada um.",
    instrucao: "Acenda os estados que mais migraram",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "PE", "CE", "PB"],
      pergunta: "Quais estados MAIS mandaram migrantes pro Sudeste?",
    },
    falaFinal: "BA, PE, CE, PB — o coração da migração nordestina.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize a jornada de uma família retirante na ordem certa.",
    instrucao: "Toque na ordem cronológica",
    pergunta: "A viagem do sertão pra SP:",
    paradas: [
      {
        id: "seca",
        emoji: "🏜️",
        rotulo: "1. Seca no sertão",
        descricao: "Plantação morre, gado morre, sem água nem comida.",
      },
      {
        id: "decisao",
        emoji: "💭",
        rotulo: "2. Decidem migrar",
        descricao: "A família reúne o que tem e escolhe partir.",
      },
      {
        id: "paudearara",
        emoji: "🚛",
        rotulo: "3. Viagem de pau-de-arara",
        descricao: "Caminhão lotado atravessando o Brasil por dias.",
      },
      {
        id: "chegada",
        emoji: "🏙️",
        rotulo: "4. Chegada em SP",
        descricao: "Descem na rodoviária, procuram parentes e emprego.",
      },
      {
        id: "trabalho",
        emoji: "🏭",
        rotulo: "5. Trabalho na fábrica ou obra",
        descricao: "Começam nova vida em fábrica, construção ou como doméstica.",
      },
    ],
    ordemCerta: ["seca", "decisao", "paudearara", "chegada", "trabalho"],
    feedbackAcerto: "Ordem perfeita! Essa foi a rota de milhões.",
    feedbackErro: "Repense: seca vem antes, trabalho depois. É uma jornada.",
    falaFinal: "5 passos, uma vida inteira reconstruída.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia e marque as palavras-chave.",
    tituloLivro: "📔 Atlas do Eco-Cidadão",
    subtitulo: "Página 2 — Migrações do Brasil",
    paragrafos: [
      {
        id: "p1",
        texto: "MIGRAÇÃO INTERNA é mudar de estado dentro do Brasil. EXTERNA é sair pra outro país.",
        chaves: ["migração", "interna", "externa"],
      },
      {
        id: "p2",
        texto: "ÊXODO RURAL foi o maior movimento do século 20: milhões saíram do CAMPO pra CIDADE.",
        chaves: ["êxodo", "campo", "cidade"],
      },
      {
        id: "p3",
        texto: "Nordestinos foram pro Sudeste fugindo da SECA. Muitos eram chamados de RETIRANTES.",
        chaves: ["nordestinos", "seca", "retirantes"],
      },
      {
        id: "p4",
        texto: "Hoje existe a MIGRAÇÃO DE RETORNO: gente voltando pra terra natal porque o Nordeste melhorou.",
        chaves: ["retorno", "nordeste"],
      },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo ROTA MIGRANTE! Cada rodada, escolha o motivo certo da migração.",
    instrucao: "⏱️ Por que essa família migrou?",
    duracaoSegundos: 12,
    pecas: [
      { id: "seca", emoji: "🏜️", rotulo: "Seca" },
      { id: "emprego", emoji: "🏭", rotulo: "Emprego" },
      { id: "estudo", emoji: "🎓", rotulo: "Estudo" },
      { id: "familia", emoji: "❤️", rotulo: "Reencontro" },
      { id: "soja", emoji: "🌾", rotulo: "Plantar soja" },
      { id: "melhoria", emoji: "🏘️", rotulo: "Vida melhor" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Sertão do Ceará", emoji: "🌵", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "São Paulo", emoji: "🏙️", cor: "from-slate-400 to-gray-600" },
        contexto: "Família cearense em 1970 pega pau-de-arara pra SP. Motivo principal?",
        pecaCertaId: "seca",
        feedbackAcerto: "Isso! A SECA de 1970 empurrou milhares pro Sudeste.",
        feedbackErro: "Naquela época o motivo maior era a SECA.",
      },
      {
        id: "r2",
        municipioA: { nome: "Bahia", emoji: "🎶", cor: "from-red-400 to-rose-600" },
        municipioB: { nome: "Rio de Janeiro", emoji: "🌊", cor: "from-sky-400 to-blue-600" },
        contexto: "Jovem baiano vai pro RJ trabalhar em obra. Motivo?",
        pecaCertaId: "emprego",
        feedbackAcerto: "Perfeito! Cidades grandes atraem por EMPREGO.",
        feedbackErro: "É EMPREGO — obra, fábrica, serviços.",
      },
      {
        id: "r3",
        municipioA: { nome: "Rio Grande do Sul", emoji: "🐴", cor: "from-emerald-400 to-green-600" },
        municipioB: { nome: "Mato Grosso", emoji: "🌾", cor: "from-amber-400 to-orange-600" },
        contexto: "Gaúcho vai pro MT abrir fazenda enorme. Motivo?",
        pecaCertaId: "soja",
        feedbackAcerto: "Isso! Migração Sul → Centro-Oeste = plantar SOJA.",
        feedbackErro: "É plantar SOJA — o boom do agro no Centro-Oeste.",
      },
      {
        id: "r4",
        municipioA: { nome: "Pequena cidade", emoji: "🏘️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Capital", emoji: "🏙️", cor: "from-sky-400 to-blue-600" },
        contexto: "Jovem vai pra capital cursar universidade. Motivo?",
        pecaCertaId: "estudo",
        feedbackAcerto: "Boa! Universidades atraem migração por ESTUDO.",
        feedbackErro: "É ESTUDO — universidades ficam nas capitais.",
      },
      {
        id: "r5",
        municipioA: { nome: "SP", emoji: "🏙️", cor: "from-slate-400 to-gray-600" },
        municipioB: { nome: "Fortaleza", emoji: "🌴", cor: "from-emerald-400 to-green-600" },
        contexto: "Paulistano de pais cearenses volta pra Fortaleza aposentado. Motivo?",
        pecaCertaId: "familia",
        feedbackAcerto: "Isso! REENCONTRO com raízes e família.",
        feedbackErro: "É REENCONTRO — voltar pra família e origem.",
      },
      {
        id: "r6",
        municipioA: { nome: "Recife", emoji: "🌊", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Bairro melhor", emoji: "🏘️", cor: "from-purple-400 to-indigo-600" },
        contexto: "Família muda de bairro em busca de escola boa e segurança. Motivo?",
        pecaCertaId: "melhoria",
        feedbackAcerto: "Perfeito! Migração por qualidade de VIDA MELHOR.",
        feedbackErro: "É VIDA MELHOR — escola, saúde, segurança.",
      },
    ],
    falaFinal: "6 rotas, 6 motivos. Migração é vida em busca de futuro.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: pra ONDE vão os migrantes brasileiros hoje?",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "sudeste",
        rotulo: "Sudeste (45%)",
        emoji: "🏙️",
        percentual: 45,
        cor: "#ef4444",
        descricao: "SP e RJ continuam sendo o maior destino — emprego e serviços.",
        exemplos: ["🏭 Indústria", "🏢 Escritórios", "🏥 Hospitais"],
      },
      {
        id: "co",
        rotulo: "Centro-Oeste (25%)",
        emoji: "🌾",
        percentual: 25,
        cor: "#eab308",
        descricao: "MT, GO e DF atraem pelo agronegócio e serviço público.",
        exemplos: ["🚜 Fazendas", "🌱 Soja", "🏛️ Brasília"],
      },
      {
        id: "retorno",
        rotulo: "Nordeste retorno (20%)",
        emoji: "🔄",
        percentual: 20,
        cor: "#0ea5e9",
        descricao: "Migração de RETORNO cresceu — Nordeste tem gerado empregos.",
        exemplos: ["🏖️ Turismo", "🏭 Novas fábricas", "❤️ Voltar pra família"],
      },
      {
        id: "norte",
        rotulo: "Norte (10%)",
        emoji: "🌳",
        percentual: 10,
        cor: "#10b981",
        descricao: "Amazônia recebe gente do Sul pelo agro e mineração.",
        exemplos: ["🌾 Soja", "⛏️ Minério"],
      },
    ],
    falaFinal: "Sudeste lidera, Centro-Oeste cresce, Nordeste recupera. Brasil dinâmico.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Cartógrafo das Migrações.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "MIGRAÇÃO INTERNA é...",
        opcoes: [
          { id: "a", texto: "Mudar dentro do próprio país", correta: true },
          { id: "b", texto: "Passar férias em outro estado", correta: false },
          { id: "c", texto: "Ir morar em outro país", correta: false },
        ],
        feedbackAcerto: "Isso! Interna = dentro do Brasil.",
        feedbackErro: "Outro país é externa. Férias é curto. Interna = MUDAR dentro do país.",
      },
      {
        id: "av2",
        pergunta: "O êxodo rural do século 20 foi principalmente:",
        opcoes: [
          { id: "a", texto: "Cidade → campo, buscando ar puro", correta: false },
          { id: "b", texto: "Campo → cidade, buscando emprego", correta: true },
          { id: "c", texto: "Estrangeiros pro Brasil", correta: false },
        ],
        feedbackAcerto: "Perfeito! Campo pra cidade, buscando trabalho.",
        feedbackErro: "É CAMPO → CIDADE, atrás de emprego.",
      },
      {
        id: "av3",
        pergunta: "Nordestino que hoje volta pra sua cidade natal é exemplo de:",
        opcoes: [
          { id: "a", texto: "Turismo", correta: false },
          { id: "b", texto: "Migração de retorno", correta: true },
          { id: "c", texto: "Êxodo rural", correta: false },
        ],
        feedbackAcerto: "Isso! Voltar pra terra natal = MIGRAÇÃO DE RETORNO.",
        feedbackErro: "É MIGRAÇÃO DE RETORNO — voltar pra terra de origem.",
      },
    ],
    selo: {
      nome: "Cartógrafo das Migrações",
      subtitulo: "Insígnia do Explorador Eco-Cidadão",
      emoji: "🧳",
      cor: "from-amber-400 to-orange-600",
    },
    falaFinal: "Insígnia conquistada! Você entende como o Brasil se move.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Cartógrafo das Migrações" },
};

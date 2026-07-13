import type { AulaGeoV1 } from "../../types";
import imgMeroe from "@/assets/historia-6ano/u6-meroe.jpg";
import imgMoeda from "@/assets/historia-6ano/u6-moeda-axum.jpg";
import imgObelisco from "@/assets/historia-6ano/u6-obelisco-axum.jpg";
import imgCandace from "@/assets/historia-6ano/u6-candace.jpg";
import imgAfrica from "@/assets/historia-6ano/u6-infografico-africa.jpg";

export const aula01: AulaGeoV1 = {
  slug: "aula-01-reinos-africanos",
  titulo: "Reinos Africanos: Kush e Axum",
  iconeTrilha: "👑",
  bncc: ["EF06HI11", "EF06HI12"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: imgMeroe,
    imagemDestaqueUrl: imgAfrica,
    aurora:
      "Isto NÃO é Egito. São as pirâmides de MEROÉ, no atual Sudão — capital do REINO DE KUSH. Enquanto Roma crescia, reinos africanos como Kush e Axum tinham escrita própria, moedas de ouro e comerciavam com Índia e China. Livro didático conta pouco disso.",
    falaFinal:
      "Nesta aula você desbloqueia o Fragmento 6 do Códice: O Painel das Rainhas Candaces.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Muita gente acha que a África antiga foi 'só primitiva'. Isso é MITO. Grandes civilizações africanas cunhavam moeda, escreviam e comerciavam com o mundo inteiro.",
    pergunta: "Em qual desses reinos africanos as MULHERES podiam governar como rainhas soberanas?",
    fotoUrl: imgCandace,
    opcoes: [
      {
        id: "kush",
        titulo: "REINO DE KUSH",
        subtitulo: "as poderosas CANDACES governavam",
        emoji: "👑",
        cor: "from-amber-800 to-slate-950",
      },
      {
        id: "nenhum",
        titulo: "NENHUM",
        subtitulo: "mulheres nunca governavam na África antiga",
        emoji: "❌",
        cor: "from-slate-900 to-slate-950",
      },
    ],
    respostaCerta: "kush",
    feedbackAcerto:
      "Correto. As CANDACES (rainhas de Kush) governavam com poder de vida e morte, comandavam exércitos e enfrentaram Roma. Amanirenas venceu batalhas contra o imperador Augusto.",
    feedbackErro:
      "Não. No REINO DE KUSH, as CANDACES eram rainhas soberanas com poder militar e político. Uma delas — Amanirenas — derrotou tropas romanas.",
    falaFinal:
      "Guarde: a África antiga teve reinos organizados, ricos e com liderança feminina.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora:
      "Quatro conceitos-chave dos reinos africanos antigos.",
    instrucao: "",
    cadernos: [
      {
        id: "kush",
        capa: "Reino de Kush",
        emoji: "🔺",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgMeroe,
        conteudo:
          "REINO DE KUSH (~2500 a.C.–350 d.C.) ficava ao sul do Egito, na região da Núbia (atual Sudão). Rival, aliado e por vezes conquistador do Egito. Capital em Meroé, famosa por suas pirâmides estreitas.",
        exemplo:
          "Exemplo: entre 747 e 656 a.C., faraós NÚBIOS (do reino de Kush) governaram o Egito — a 25ª dinastia egípcia. A elite egípcia era negra.",
      },
      {
        id: "candace",
        capa: "Candace",
        emoji: "👑",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgCandace,
        conteudo:
          "CANDACE era o título das RAINHAS soberanas de Kush. Muitas comandavam exércitos, cobravam impostos, davam ordens de execução. Poder equivalente ao dos reis homens.",
        exemplo:
          "Exemplo: Amanirenas, candace por volta de 25 a.C., liderou pessoalmente ataques contra o Império Romano e negociou tratado favorável com o próprio imperador Augusto.",
      },
      {
        id: "axum",
        capa: "Império de Axum",
        emoji: "⚓",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgObelisco,
        conteudo:
          "IMPÉRIO DE AXUM (~100 d.C.–700 d.C.) ficava no Chifre da África (atual Etiópia e Eritreia). Controlou o comércio do Mar Vermelho, cunhou moedas de OURO e adotou o cristianismo no século IV.",
        exemplo:
          "Exemplo: Axum foi um dos primeiros Estados do mundo a se declarar CRISTÃO oficialmente, em ~330 d.C., quase junto com o Império Romano. A Igreja Ortodoxa Etíope existe até hoje.",
      },
      {
        id: "rota",
        capa: "Rota do Mar Vermelho",
        emoji: "🌊",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgAfrica,
        conteudo:
          "A ROTA DO MAR VERMELHO ligava África, Arábia, Índia e China. Marfim, incenso, ouro, escravos e especiarias circulavam. Axum era o hub africano dessa rota — daí veio sua riqueza.",
        exemplo:
          "Exemplo: mercadores axumitas trocavam ouro africano por seda chinesa e pimenta indiana séculos ANTES de os europeus imaginarem que essas rotas existiam.",
      },
    ],
    falaFinal:
      "Kush + Candace + Axum + Rota. A África antiga era conectada, rica e complexa.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Infográfico oficial dos reinos africanos antigos. Toque nos pontos.",
    instrucao: "Toque nos pontos do infográfico",
    mapaUrl: imgAfrica,
    pontos: [
      {
        id: "egi",
        x: 55,
        y: 35,
        emoji: "🔺",
        cor: "from-teal-700 to-slate-900",
        fotoUrl: imgMeroe,
        titulo: "EGITO",
        texto:
          "Ao longo do rio Nilo. Uma das mais antigas civilizações do mundo. Hieróglifos, pirâmides, faraós. Influenciou (e foi influenciado por) os reinos vizinhos ao sul.",
      },
      {
        id: "ku",
        x: 60,
        y: 55,
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        fotoUrl: imgMeroe,
        titulo: "REINO DE KUSH",
        texto:
          "Sul do Egito (atual Sudão). Capital em Meroé, com pirâmides próprias. Governado por reis e CANDACES (rainhas). Chegou a controlar o próprio Egito.",
      },
      {
        id: "ax",
        x: 68,
        y: 65,
        emoji: "⚓",
        cor: "from-cyan-700 to-slate-900",
        fotoUrl: imgObelisco,
        titulo: "IMPÉRIO DE AXUM",
        texto:
          "Chifre da África (Etiópia e Eritreia). Controlou o Mar Vermelho, cunhou moedas de ouro, adotou o cristianismo. Um dos maiores impérios da Antiguidade.",
      },
      {
        id: "mar",
        x: 75,
        y: 45,
        emoji: "🌊",
        cor: "from-slate-700 to-slate-900",
        fotoUrl: imgMoeda,
        titulo: "MAR VERMELHO",
        texto:
          "Corredor comercial entre África, Arábia, Índia e China. Marfim, ouro, incenso, especiarias e ideias circulavam por essa rota há mais de 2 mil anos.",
      },
    ],
    falaFinal:
      "Egito NÃO era sozinho. Havia toda uma rede de reinos africanos conectados ao mundo.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas de africanista.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Onde ficava o REINO DE KUSH?",
        fotoUrl: imgMeroe,
        cards: [
          {
            id: "s",
            emoji: "🏜️",
            titulo: "Ao sul do Egito (atual Sudão)",
            cor: "from-amber-600 to-slate-900",
          },
          { id: "e", emoji: "🏔️", titulo: "Na Europa Central", cor: "from-teal-600 to-slate-900" },
          { id: "b", emoji: "🌴", titulo: "No Brasil", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "s",
        feedbackAcerto: "Correto. AO SUL DO EGITO, no atual Sudão. Capital: Meroé.",
        feedbackErro: "É AO SUL DO EGITO (atual Sudão). Região histórica chamada Núbia.",
      },
      {
        id: "q2",
        pergunta: "O que era uma CANDACE?",
        fotoUrl: imgCandace,
        cards: [
          {
            id: "r",
            emoji: "👑",
            titulo: "Rainha soberana do Reino de Kush",
            cor: "from-cyan-600 to-slate-900",
          },
          {
            id: "m",
            emoji: "💰",
            titulo: "Uma moeda romana",
            cor: "from-amber-600 to-slate-900",
          },
          {
            id: "t",
            emoji: "🍞",
            titulo: "Um tipo de comida",
            cor: "from-slate-600 to-slate-900",
          },
        ],
        correta: "r",
        feedbackAcerto:
          "Correto. RAINHA SOBERANA de Kush. Amanirenas enfrentou Roma pessoalmente.",
        feedbackErro:
          "Candace era RAINHA SOBERANA de Kush. Poder militar, político e religioso.",
      },
      {
        id: "q3",
        pergunta: "Qual foi um dos primeiros Estados do mundo a adotar oficialmente o CRISTIANISMO?",
        fotoUrl: imgObelisco,
        cards: [
          { id: "a", emoji: "⚓", titulo: "Império de Axum (~330 d.C.)", cor: "from-teal-600 to-slate-900" },
          { id: "j", emoji: "🗾", titulo: "Japão feudal", cor: "from-amber-600 to-slate-900" },
          { id: "b", emoji: "🌴", titulo: "Brasil pré-cabralino", cor: "from-slate-600 to-slate-900" },
        ],
        correta: "a",
        feedbackAcerto:
          "Correto. AXUM adotou o cristianismo em ~330 d.C., quase junto com o Império Romano.",
        feedbackErro:
          "É AXUM, na atual Etiópia. Junto com Roma, foi dos primeiros a se tornar cristão.",
      },
    ],
    falaFinal: "Radar afiado. Você já rompe com o mito de que 'na África não tinha civilização'.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois filtros sobre a África antiga. Um destaca a REDE COMERCIAL, outro os REINOS ORGANIZADOS.",
    instrucao: "Toque nos filtros",
    mapaUrl: imgAfrica,
    camadas: [
      {
        id: "rede",
        rotulo: "Rede comercial",
        emoji: "🌍",
        cor: "from-cyan-700 to-slate-900",
        rect: { x: 55, y: 30, w: 40, h: 45 },
        descricao:
          "Rotas de caravanas e de barcos ligavam África, Arábia, Índia e Mediterrâneo. Ouro, marfim, incenso, especiarias circulavam. A África NÃO era isolada.",
      },
      {
        id: "estados",
        rotulo: "Estados organizados",
        emoji: "👑",
        cor: "from-amber-700 to-slate-900",
        rect: { x: 45, y: 35, w: 30, h: 40 },
        descricao:
          "Egito, Kush, Axum e outros reinos tinham reis, exércitos, cobrança de impostos, escrita própria e diplomacia com potências como Roma e Pérsia.",
      },
    ],
    falaFinal:
      "África antiga: reinos organizados dentro de redes globais de comércio.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora:
      "Ordene a linha do tempo dos grandes reinos africanos.",
    instrucao: "Toque nas etapas na ordem certa",
    pergunta: "Linha do tempo africana",
    paradas: [
      {
        id: "egi",
        emoji: "🔺",
        rotulo: "1. Egito antigo",
        fotoUrl: imgMeroe,
        descricao: "~3100 a.C. — surge no vale do Nilo.",
      },
      {
        id: "ku",
        emoji: "👑",
        rotulo: "2. Reino de Kush",
        fotoUrl: imgMeroe,
        descricao: "~2500 a.C. — cresce ao sul do Egito.",
      },
      {
        id: "ca",
        emoji: "🗡️",
        rotulo: "3. Candaces de Meroé enfrentam Roma",
        fotoUrl: imgCandace,
        descricao: "~25 a.C. — Amanirenas negocia com Augusto.",
      },
      {
        id: "ax",
        emoji: "⚓",
        rotulo: "4. Império de Axum",
        fotoUrl: imgObelisco,
        descricao: "~100 d.C. — controla o Mar Vermelho, adota cristianismo.",
      },
    ],
    ordemCerta: ["egi", "ku", "ca", "ax"],
    feedbackAcerto:
      "Perfeito. Egito → Kush → Candaces → Axum. Continuidade e sucessão.",
    feedbackErro: "Essa não é a próxima. Pense em ordem cronológica: Egito é o mais antigo.",
    falaFinal: "Cadeia contínua de civilizações africanas — por milênios.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora:
      "Sua vez. Fragmento 6 do Códice. Toque nos termos técnicos.",
    tituloLivro: "📜 Códice dos Impérios Perdidos",
    subtitulo: "Fragmento 6 — As Rainhas Candaces",
    paragrafos: [
      {
        id: "p1",
        texto:
          "A África antiga era palco de grandes civilizações. Ao sul do Egito, o REINO DE KUSH cresceu por mais de 2 mil anos. Sua capital, MEROÉ, tem pirâmides próprias, mais estreitas e íngremes que as egípcias.",
        chaves: ["Reino de Kush", "Meroé"],
        definicoes: {
          "Reino de Kush":
            "Civilização africana ao sul do Egito (Núbia, atual Sudão), ~2500 a.C.–350 d.C.",
          Meroé:
            "Capital de Kush a partir do século VI a.C. Ficou famosa pelas suas pirâmides estreitas e por sua elite governante feminina.",
        },
        fotoUrl: imgMeroe,
      },
      {
        id: "p2",
        texto:
          "Em Kush, as MULHERES podiam governar como CANDACES — título das rainhas soberanas. Amanirenas, uma delas, liderou pessoalmente batalhas contra o Império Romano por volta de 25 a.C., e conquistou um tratado favorável com o imperador Augusto.",
        chaves: ["Candaces"],
        definicoes: {
          Candaces:
            "Título das rainhas soberanas de Kush. Governavam com poderes militares, políticos e religiosos plenos.",
        },
        fotoUrl: imgCandace,
      },
      {
        id: "p3",
        texto:
          "No Chifre da África, o IMPÉRIO DE AXUM cresceu entre os séculos I e VII d.C. Cunhou suas próprias moedas de OURO, criou a escrita ge'ez e controlou o comércio do Mar Vermelho — conectando África, Arábia, Índia e China.",
        chaves: ["Império de Axum"],
        definicoes: {
          "Império de Axum":
            "Reino no atual território da Etiópia e Eritreia. Um dos maiores impérios da Antiguidade, com moeda, escrita e diplomacia próprias.",
        },
        fotoUrl: imgObelisco,
      },
      {
        id: "p4",
        texto:
          "Axum foi um dos PRIMEIROS Estados do mundo a adotar o cristianismo oficialmente, por volta de 330 d.C. — praticamente junto com o Império Romano. A Igreja Ortodoxa Etíope continua ativa e é uma das mais antigas cristandades do planeta.",
        chaves: ["Cristianismo em Axum"],
        definicoes: {
          "Cristianismo em Axum":
            "Adoção oficial da fé cristã pelo rei Ezana, ~330 d.C. Deu origem à Igreja Ortodoxa Etíope, ativa até hoje.",
        },
        fotoUrl: imgMoeda,
      },
    ],
    falaFinal:
      "Leitura concluída. Você já explica, com evidência, por que a África antiga foi berço de grandes civilizações — e por que boa parte dos livros didáticos ignora isso.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora:
      "Missão de africanista. Classifique cada característica em KUSH ou AXUM.",
    instrucao: "⏱️ Toque no reino correto",
    duracaoSegundos: 22,
    pecas: [
      { id: "ku", emoji: "👑", rotulo: "Kush" },
      { id: "ax", emoji: "⚓", rotulo: "Axum" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Pirâmides de Meroé (Sudão)", emoji: "🔺", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "Túmulos reais", emoji: "🏛️", cor: "from-amber-600 to-slate-900" },
        contexto: "Pirâmides estreitas e íngremes no deserto do Sudão.",
        pecaCertaId: "ku",
        feedbackAcerto: "Correto. Meroé = KUSH.",
        feedbackErro: "Meroé é a capital de KUSH.",
      },
      {
        id: "r2",
        municipioA: { nome: "Moeda de ouro cunhada", emoji: "🪙", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Sistema monetário próprio", emoji: "💰", cor: "from-cyan-600 to-slate-900" },
        contexto: "Cunhagem de ouro para comércio internacional.",
        pecaCertaId: "ax",
        feedbackAcerto: "Correto. Moeda de ouro = AXUM.",
        feedbackErro: "AXUM cunhava moedas de ouro.",
      },
      {
        id: "r3",
        municipioA: { nome: "Candace Amanirenas enfrenta Roma", emoji: "⚔️", cor: "from-teal-700 to-slate-900" },
        municipioB: { nome: "Rainha guerreira", emoji: "👑", cor: "from-teal-600 to-slate-900" },
        contexto: "Rainha liderando exército contra romanos.",
        pecaCertaId: "ku",
        feedbackAcerto: "Correto. Candaces = KUSH.",
        feedbackErro: "Candaces eram de KUSH.",
      },
      {
        id: "r4",
        municipioA: { nome: "Adoção oficial do cristianismo em 330 d.C.", emoji: "✝️", cor: "from-slate-700 to-slate-900" },
        municipioB: { nome: "Cristianismo estatal", emoji: "⛪", cor: "from-slate-600 to-slate-900" },
        contexto: "Rei Ezana declara o cristianismo religião oficial.",
        pecaCertaId: "ax",
        feedbackAcerto: "Correto. Cristianismo oficial = AXUM.",
        feedbackErro: "AXUM adotou o cristianismo antes.",
      },
      {
        id: "r5",
        municipioA: { nome: "Faraós núbios governam o Egito", emoji: "🔺", cor: "from-amber-700 to-slate-900" },
        municipioB: { nome: "25ª dinastia egípcia", emoji: "👑", cor: "from-amber-600 to-slate-900" },
        contexto: "Reis africanos ocupam o trono egípcio no séc. VIII a.C.",
        pecaCertaId: "ku",
        feedbackAcerto: "Correto. Faraós núbios = KUSH.",
        feedbackErro: "Faraós núbios vieram de KUSH.",
      },
      {
        id: "r6",
        municipioA: { nome: "Controle do comércio no Mar Vermelho", emoji: "🌊", cor: "from-cyan-700 to-slate-900" },
        municipioB: { nome: "Hub marítimo internacional", emoji: "⚓", cor: "from-cyan-600 to-slate-900" },
        contexto: "Reino domina rotas entre África, Arábia, Índia e China.",
        pecaCertaId: "ax",
        feedbackAcerto: "Correto. Mar Vermelho = AXUM.",
        feedbackErro: "AXUM dominava o Mar Vermelho.",
      },
    ],
    falaFinal:
      "6 rodadas! Você já separa Kush de Axum como um historiador africanista.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza do continente africano na Antiguidade: proporção entre a África narrada nos livros didáticos (basicamente Egito) e a África REAL (Egito + reinos ao sul + reinos do Sahel).",
    instrucao: "Toque em cada fatia",
    fotoUrl: imgAfrica,
    fatias: [
      {
        id: "eg",
        rotulo: "Egito nos livros (~50%)",
        emoji: "🔺",
        percentual: 50,
        cor: "#b45309",
        descricao:
          "A maioria dos livros escolares dedica quase todo o espaço ao Egito — como se fosse a única civilização africana da Antiguidade.",
        exemplos: ["🔺 Pirâmides", "👑 Faraós", "📜 Hieróglifos"],
      },
      {
        id: "out",
        rotulo: "Outros reinos africanos (~50%)",
        emoji: "🌍",
        percentual: 50,
        cor: "#0f766e",
        descricao:
          "Kush, Axum, Gana, Mali, Songai, Zimbábue — dezenas de reinos poderosos que os livros mal citam. Historiografia atual busca corrigir essa ausência.",
        exemplos: ["👑 Kush", "⚓ Axum", "💰 Mali"],
      },
    ],
    falaFinal:
      "A África antiga não cabe em um só reino. Rompa o mito.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora:
      "Três perguntas finais pra desbloquear o Painel das Rainhas Candaces.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgCandace,
    perguntas: [
      {
        id: "av1",
        pergunta: "O que era uma CANDACE?",
        opcoes: [
          { id: "a", texto: "Um faraó egípcio.", correta: false },
          { id: "b", texto: "Uma rainha soberana do Reino de Kush.", correta: true },
          { id: "c", texto: "Uma dança religiosa.", correta: false },
        ],
        feedbackAcerto: "Correto. Rainha soberana de KUSH — com poder militar, político e religioso.",
        feedbackErro: "Rainha soberana de KUSH. Amanirenas enfrentou Roma.",
      },
      {
        id: "av2",
        pergunta: "O IMPÉRIO DE AXUM ficava em qual região da África?",
        opcoes: [
          { id: "a", texto: "Chifre da África (atual Etiópia e Eritreia).", correta: true },
          { id: "b", texto: "Norte do Marrocos.", correta: false },
          { id: "c", texto: "África do Sul.", correta: false },
        ],
        feedbackAcerto: "Correto. Chifre da África — atual Etiópia e Eritreia.",
        feedbackErro: "Chifre da África (Etiópia/Eritreia). Controlou o Mar Vermelho.",
      },
      {
        id: "av3",
        pergunta: "Qual reino africano adotou oficialmente o cristianismo em ~330 d.C.?",
        opcoes: [
          { id: "a", texto: "Egito.", correta: false },
          { id: "b", texto: "Império de Axum.", correta: true },
          { id: "c", texto: "Reino do Mali.", correta: false },
        ],
        feedbackAcerto: "Correto. AXUM foi um dos primeiros Estados cristãos do mundo.",
        feedbackErro: "É AXUM — adotou o cristianismo quase junto com o Império Romano.",
      },
    ],
    selo: {
      nome: "Painel das Rainhas Candaces",
      subtitulo: "Fragmento 6 do Códice",
      emoji: "👑",
      cor: "from-amber-500 to-slate-900",
      fotoUrl: imgCandace,
    },
    falaFinal:
      "Fragmento 6 restaurado. Você agora enxerga a África antiga com olhos de historiador — não de estereótipo.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Painel das Rainhas Candaces" },
};

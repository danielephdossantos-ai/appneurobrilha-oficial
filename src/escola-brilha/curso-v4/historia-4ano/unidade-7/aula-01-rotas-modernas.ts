import type { AulaGeoV1 } from "../../types";
import imgCargueiro from "@/assets/historia-4ano/navio-cargueiro.jpg";
import imgCabo from "@/assets/historia-4ano/cabo-submarino.jpg";
import imgMapa from "@/assets/historia-4ano/mapa-globalizacao.jpg";
import imgVideo from "@/assets/historia-4ano/videochamada.jpg";

/**
 * História · 4º Ano · Unidade 7 · Aula 01 (FINAL)
 * "As Rotas Modernas: A Era Digital e Global" — globalização.
 * Restaura a Página 7 das Crônicas e completa o Grande Mapa das Rotas.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-rotas-modernas",
  titulo: "As Rotas Modernas: A Era Digital e Global",
  iconeTrilha: "🌐",
  bncc: ["EF04HI10", "EF04HI11"],
  duracaoMin: 24,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao:
      "Passe a LUPA sobre a foto. É um cabo submarino de FIBRA ÓPTICA descansando no fundo do oceano. Por dentro dele passa cada mensagem, vídeo, jogo e chamada que atravessa o mar.",
    mapaUrl: imgCabo,
    imagemDestaqueUrl: imgMapa,
    aurora:
      "Pequeno Historiador, os antepassados atravessavam oceanos em meses de caravela. Hoje uma mensagem cruza o mundo em MILÉSIMOS de segundo. Isso muda TUDO. Chamamos essa era de GLOBALIZAÇÃO.",
    falaFinal:
      "Nesta última aula você acende o SÉTIMO e último ponto do mapa: O Globo das Conexões Digitais.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: hoje uma pessoa pode viver no Brasil e trabalhar pra uma empresa dos EUA sem sair de casa. Isso é possível por causa de qual invenção?",
    pergunta: "O que permite trabalho global sem viajar?",
    fotoUrl: imgVideo,
    opcoes: [
      {
        id: "internet",
        titulo: "Internet + satélites + cabos submarinos",
        subtitulo: "as rotas DIGITAIS conectam tudo em tempo real",
        emoji: "📡",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgCabo,
      },
      {
        id: "pombo",
        titulo: "Pombos-correios modernos",
        subtitulo: "levam mensagens de avião",
        emoji: "🕊️",
        cor: "from-slate-500 to-slate-700",
        fotoUrl: imgCargueiro,
      },
    ],
    respostaCerta: "internet",
    feedbackAcerto:
      "Correto. INTERNET + SATÉLITES + CABOS SUBMARINOS formam as rotas digitais — dados cruzam o mundo instantaneamente.",
    feedbackErro:
      "Pombos-correios são antigos. Hoje o que conecta o mundo é a INTERNET (cabos submarinos + satélites).",
    falaFinal: "Guarde: pela primeira vez na história, uma informação viaja MAIS RÁPIDO que uma pessoa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "Três palavras técnicas do vocabulário da era digital.",
    instrucao: "Leia os três cadernos abertos",
    cadernos: [
      {
        id: "global",
        capa: "Globalização",
        emoji: "🌐",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgMapa,
        conteudo:
          "GLOBALIZAÇÃO é o processo de INTEGRAÇÃO entre países no comércio, cultura, informação e tecnologia. Começou com as Grandes Navegações e explodiu depois da internet. Hoje um produto passa por vários países antes de chegar até você.",
        exemplo:
          "Exemplo: um celular pode ter tela feita na Coreia, chip nos EUA, montagem na China e ser vendido no Brasil.",
      },
      {
        id: "cabo",
        capa: "Cabo Submarino",
        emoji: "🔌",
        cor: "from-blue-600 to-indigo-800",
        fotoUrl: imgCabo,
        conteudo:
          "CABO SUBMARINO DE FIBRA ÓPTICA é um cabo enterrado no fundo dos oceanos que carrega quase TODA a internet do mundo. São mais de 500 cabos atualmente. Se um deles se rompe, países inteiros podem ficar sem internet.",
        exemplo:
          "Exemplo: o Brasil está conectado à Europa e aos EUA por cabos que atravessam o Atlântico.",
      },
      {
        id: "conteiner",
        capa: "Contêiner",
        emoji: "📦",
        cor: "from-orange-600 to-red-800",
        fotoUrl: imgCargueiro,
        conteudo:
          "CONTÊINER é a grande CAIXA METÁLICA padronizada usada nos navios cargueiros. Inventada nos anos 1950, revolucionou o comércio mundial: produtos são empilhados, transportados e descarregados em qualquer porto do mundo.",
        exemplo:
          "Exemplo: um único navio cargueiro moderno leva mais de 20 mil contêineres — produtos de milhares de fábricas.",
      },
    ],
    falaFinal:
      "Globalização + Cabo Submarino + Contêiner: as 3 palavras que explicam o mundo atual.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Este é o mapa da globalização atual. Toque em cada ponto pra ouvir a explicação.",
    instrucao: "Toque nos pontos do mapa",
    mapaUrl: imgMapa,
    pontos: [
      {
        id: "brasil",
        x: 30,
        y: 60,
        emoji: "🇧🇷",
        cor: "from-emerald-600 to-teal-800",
        fotoUrl: imgCargueiro,
        titulo: "1. BRASIL — conectado a todos",
        texto:
          "O Brasil exporta soja, minério, carne e café pra China, EUA e Europa. E importa eletrônicos, remédios e tecnologia. Está conectado por cabos submarinos e por rotas aéreas globais.",
      },
      {
        id: "eua",
        x: 20,
        y: 30,
        emoji: "🇺🇸",
        cor: "from-sky-600 to-blue-800",
        fotoUrl: imgVideo,
        titulo: "2. ESTADOS UNIDOS — polo de tecnologia",
        texto:
          "Sede das maiores empresas de internet do mundo (Google, Apple, Meta, Microsoft). Muitas plataformas que você usa hoje têm servidores nos EUA.",
      },
      {
        id: "china",
        x: 78,
        y: 35,
        emoji: "🇨🇳",
        cor: "from-red-600 to-orange-800",
        fotoUrl: imgCargueiro,
        titulo: "3. CHINA — a fábrica do mundo",
        texto:
          "A maioria dos produtos que você tem em casa foi fabricado ou montado na China. Ela virou o principal fornecedor mundial de eletrônicos, roupas e brinquedos.",
      },
      {
        id: "europa",
        x: 50,
        y: 25,
        emoji: "🇪🇺",
        cor: "from-amber-600 to-orange-800",
        fotoUrl: imgMapa,
        titulo: "4. EUROPA — comércio e cultura",
        texto:
          "Europa é grande parceiro comercial do Brasil, além de fonte de moda, música, cinema e turismo. Um voo Brasil-Europa demora 10 horas — o que Vasco da Gama fez em anos.",
      },
    ],
    falaFinal:
      "4 pontos, um mundo conectado. Todo país depende de todos os outros — isso é GLOBALIZAÇÃO.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "Três perguntas rápidas sobre a era digital global.",
    instrucao: "Toque no card correto",
    perguntas: [
      {
        id: "q1",
        pergunta: "Qual o processo de integração entre países no comércio, cultura e informação?",
        fotoUrl: imgMapa,
        cards: [
          { id: "g", emoji: "🌐", titulo: "Globalização", cor: "from-sky-500 to-blue-700" },
          { id: "n", emoji: "🚫", titulo: "Nacionalismo isolado", cor: "from-slate-500 to-slate-700" },
          { id: "s", emoji: "🏝️", titulo: "Separação", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "g",
        feedbackAcerto: "Certeza. Integração entre países = GLOBALIZAÇÃO.",
        feedbackErro: "Nacionalismo/separação são o oposto. Integração global = GLOBALIZAÇÃO.",
      },
      {
        id: "q2",
        pergunta: "Por onde passa quase toda a internet do mundo?",
        fotoUrl: imgCabo,
        cards: [
          { id: "c", emoji: "🔌", titulo: "Cabos submarinos de fibra óptica", cor: "from-blue-500 to-indigo-700" },
          { id: "s", emoji: "🛸", titulo: "Só por naves espaciais", cor: "from-slate-500 to-slate-700" },
          { id: "p", emoji: "🕊️", titulo: "Pombos-correios", cor: "from-amber-500 to-orange-700" },
        ],
        correta: "c",
        feedbackAcerto: "Exato. CABOS SUBMARINOS carregam 95% da internet.",
        feedbackErro: "Não é nave nem pombo. Internet passa por CABOS SUBMARINOS.",
      },
      {
        id: "q3",
        pergunta: "Como se chamam as grandes CAIXAS METÁLICAS usadas nos navios cargueiros modernos?",
        fotoUrl: imgCargueiro,
        cards: [
          { id: "c", emoji: "📦", titulo: "Contêineres", cor: "from-orange-500 to-red-700" },
          { id: "b", emoji: "👜", titulo: "Bruacas", cor: "from-amber-500 to-orange-700" },
          { id: "m", emoji: "🧳", titulo: "Malas de imigrante", cor: "from-emerald-500 to-teal-700" },
        ],
        correta: "c",
        feedbackAcerto: "Isso. CONTÊINERES revolucionaram o comércio nos anos 50.",
        feedbackErro: "Bruacas são das mulas tropeiras. Malas são dos imigrantes. Navios modernos usam CONTÊINERES.",
      },
    ],
    falaFinal: "Vocabulário técnico da era digital dominado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaCamadas",
    aurora:
      "Dois interruptores no mesmo mapa: um mostra as ROTAS FÍSICAS (aviões e navios cargueiros), outro mostra as ROTAS DIGITAIS (cabos submarinos e satélites).",
    instrucao: "Toque nos interruptores",
    mapaUrl: imgMapa,
    camadas: [
      {
        id: "fisicas",
        rotulo: "Rotas Físicas",
        emoji: "✈️",
        cor: "from-orange-600 to-red-800",
        rect: { x: 10, y: 25, w: 80, h: 45 },
        descricao:
          "AVIÕES cargueiros e NAVIOS PORTA-CONTÊINERES levam produtos físicos pelo mundo. Um contêiner pode sair da China e chegar em Santos em 30 dias.",
      },
      {
        id: "digitais",
        rotulo: "Rotas Digitais",
        emoji: "📡",
        cor: "from-sky-600 to-blue-800",
        rect: { x: 5, y: 30, w: 90, h: 50 },
        descricao:
          "CABOS SUBMARINOS + SATÉLITES levam informação pelo mundo em MILÉSIMOS de segundo. Uma videochamada Brasil-Japão parece que vocês estão na mesma sala.",
      },
    ],
    falaFinal: "As duas redes juntas formam a base da GLOBALIZAÇÃO moderna.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Vamos organizar os meios de transporte comercial do MAIS LENTO ao MAIS RÁPIDO.",
    instrucao: "Toque na ordem certa",
    pergunta: "Ordene do mais lento pro mais rápido",
    paradas: [
      {
        id: "mula",
        emoji: "🐴",
        rotulo: "1. Tropa de mulas (Séc. XVIII)",
        fotoUrl: imgMapa,
        descricao: "Meses de viagem por trilhas de terra, entre 10 e 20 km por dia.",
      },
      {
        id: "caravela",
        emoji: "⛵",
        rotulo: "2. Caravela a vento (Séc. XV)",
        fotoUrl: imgCargueiro,
        descricao: "Semanas ou meses no mar dependendo do vento. Sem controle sobre a velocidade.",
      },
      {
        id: "cargueiro",
        emoji: "🚢",
        rotulo: "3. Navio cargueiro moderno",
        fotoUrl: imgCargueiro,
        descricao: "20 a 30 dias entre continentes, com 20 mil contêineres. Motor a diesel.",
      },
      {
        id: "aviao",
        emoji: "✈️",
        rotulo: "4. Avião cargueiro a jato",
        fotoUrl: imgVideo,
        descricao: "Menos de 24h entre continentes. Mais caro, mas ultra rápido.",
      },
    ],
    ordemCerta: ["mula", "caravela", "cargueiro", "aviao"],
    feedbackAcerto: "Ordem correta: mula → caravela → cargueiro → avião. Cada era foi mais rápida.",
    feedbackErro: "Essa não é a próxima. Pense qual seria MAIS lento ainda.",
    falaFinal: "Do lombo da mula ao jato: em 300 anos a humanidade multiplicou a velocidade por 1000.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia a Página 7 (a ÚLTIMA das Crônicas) e toque nas palavras destacadas.",
    tituloLivro: "📜 As Crônicas das Grandes Rotas",
    subtitulo: "Página 7 — O Globo das Conexões Digitais",
    paragrafos: [
      {
        id: "p1",
        texto:
          "Hoje vivemos na era da GLOBALIZAÇÃO. As rotas humanas não dependem só de mulas ou caravelas — elas se dividem em dois mundos velozes: as ROTAS FÍSICAS (aviões e navios cargueiros) e as ROTAS DIGITAIS (internet, cabos submarinos, satélites).",
        chaves: ["Globalização"],
        definicoes: {
          Globalização:
            "Processo de integração mundial no comércio, cultura, informação e tecnologia, acelerado pela internet.",
        },
        fotoUrl: imgMapa,
      },
      {
        id: "p2",
        texto:
          "Navios PORTA-CONTÊINERES gigantes atravessam oceanos com 20 mil caixas metálicas cheias de produtos. AVIÕES cargueiros ligam continentes em menos de 24 horas. É por essas rotas que chega a comida importada, o celular, a roupa.",
        chaves: ["porta-contêineres"],
        definicoes: {
          "porta-contêineres":
            "Navio cargueiro projetado pra transportar milhares de contêineres empilhados — a base do comércio mundial.",
        },
        fotoUrl: imgCargueiro,
      },
      {
        id: "p3",
        texto:
          "Sob os oceanos existem mais de 500 CABOS SUBMARINOS de fibra óptica. Eles carregam 95% de toda a internet mundial. Também usamos SATÉLITES no espaço pra GPS, TV e telefone. É por eles que a videochamada com um parente em outro país acontece em tempo real.",
        chaves: ["fibra óptica", "satélites"],
        definicoes: {
          "fibra óptica":
            "Fio finíssimo de vidro que carrega informação em forma de LUZ — muito mais rápido que fios de metal.",
          satélites:
            "Aparelhos em órbita ao redor da Terra que recebem e enviam sinais de comunicação e GPS.",
        },
        fotoUrl: imgCabo,
      },
      {
        id: "p4",
        texto:
          "Um jogo criado no Japão chega ao seu celular no mesmo dia do lançamento. Uma música dos EUA toca em Recife na mesma hora. Um cientista brasileiro trabalha por vídeo pra uma universidade da Alemanha. O planeta virou UMA vizinhança conectada.",
        chaves: ["conectada"],
        definicoes: {
          conectada: "Ligada em rede, com troca constante de informações, produtos e ideias.",
        },
        fotoUrl: imgVideo,
      },
    ],
    falaFinal:
      "Leitura concluída. Você compreende a era em que VIVE — a era global e digital.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Missão final: cada rodada mostra uma tecnologia. Classifique: ROTA FÍSICA ou ROTA DIGITAL?",
    instrucao: "⏱️ Leia e toque",
    duracaoSegundos: 18,
    pecas: [
      { id: "f", emoji: "✈️", rotulo: "Física" },
      { id: "d", emoji: "📡", rotulo: "Digital" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "Cabo submarino de fibra óptica", emoji: "🔌", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Leva internet entre continentes", emoji: "🌐", cor: "from-blue-500 to-indigo-700" },
        contexto: "Cabo enterrado no fundo do oceano carrega bilhões de mensagens por segundo.",
        pecaCertaId: "d",
        feedbackAcerto: "Sim! Cabo submarino = ROTA DIGITAL.",
        feedbackErro: "Cabo carrega dados, não produto. É ROTA DIGITAL.",
      },
      {
        id: "r2",
        municipioA: { nome: "Navio porta-contêineres", emoji: "🚢", cor: "from-orange-600 to-red-800" },
        municipioB: { nome: "Leva 20 mil contêineres", emoji: "📦", cor: "from-amber-500 to-orange-700" },
        contexto: "Navio gigante carrega produtos entre China e Brasil em 30 dias.",
        pecaCertaId: "f",
        feedbackAcerto: "Correto. Navio carrega produto físico = ROTA FÍSICA.",
        feedbackErro: "Navio leva PRODUTOS. É ROTA FÍSICA.",
      },
      {
        id: "r3",
        municipioA: { nome: "Satélite em órbita da Terra", emoji: "🛰️", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Envia sinal de GPS pro celular", emoji: "📱", cor: "from-blue-500 to-indigo-700" },
        contexto: "Aparelho no espaço envia sinais que o celular usa pra mostrar a rota do carro.",
        pecaCertaId: "d",
        feedbackAcerto: "Isso. Satélite carrega sinal = ROTA DIGITAL.",
        feedbackErro: "Satélite carrega DADOS. É ROTA DIGITAL.",
      },
      {
        id: "r4",
        municipioA: { nome: "Avião cargueiro a jato", emoji: "✈️", cor: "from-orange-600 to-red-800" },
        municipioB: { nome: "Leva mercadoria em 12 horas", emoji: "⏱️", cor: "from-amber-500 to-orange-700" },
        contexto: "Boeing cargueiro cruza o Atlântico com produtos em 12 horas.",
        pecaCertaId: "f",
        feedbackAcerto: "Sim. Avião leva PRODUTOS = ROTA FÍSICA.",
        feedbackErro: "Avião carrega PRODUTOS. FÍSICA.",
      },
      {
        id: "r5",
        municipioA: { nome: "Videochamada com o Japão", emoji: "📹", cor: "from-sky-600 to-blue-800" },
        municipioB: { nome: "Imagem em tempo real", emoji: "⚡", cor: "from-blue-500 to-indigo-700" },
        contexto: "Você fala por vídeo com um primo que mora do outro lado do planeta.",
        pecaCertaId: "d",
        feedbackAcerto: "Correto. Vídeo = dados = ROTA DIGITAL.",
        feedbackErro: "Videochamada carrega IMAGEM digital = DIGITAL.",
      },
      {
        id: "r6",
        municipioA: { nome: "Contêiner refrigerado", emoji: "🥶", cor: "from-orange-600 to-red-800" },
        municipioB: { nome: "Leva comida congelada", emoji: "🍖", cor: "from-amber-500 to-orange-700" },
        contexto: "Contêiner com geladeira transporta carne congelada pra outros continentes.",
        pecaCertaId: "f",
        feedbackAcerto: "Perfeito. Contêiner carrega COMIDA = ROTA FÍSICA.",
        feedbackErro: "Contêiner carrega PRODUTO físico. FÍSICA.",
      },
    ],
    falaFinal: "6 rodadas! Você diferencia rotas físicas e digitais como um logista global.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora:
      "Pizza da internet do mundo: por onde passam os 100% da informação global?",
    instrucao: "Toque nas fatias",
    fotoUrl: imgCabo,
    fatias: [
      {
        id: "cabos",
        rotulo: "Cabos submarinos (~95%)",
        emoji: "🔌",
        percentual: 95,
        cor: "#1d4ed8",
        descricao:
          "Mais de 500 cabos de fibra óptica no fundo dos oceanos carregam 95% de toda a internet mundial.",
        exemplos: ["🔌 Fibra óptica", "🌊 Fundo do mar", "⚡ Velocidade da luz"],
      },
      {
        id: "satelites",
        rotulo: "Satélites (~5%)",
        emoji: "🛰️",
        percentual: 5,
        cor: "#7c3aed",
        descricao:
          "Satélites em órbita carregam só 5% da internet, mas fazem funcionar GPS, TV via satélite e comunicação em áreas remotas.",
        exemplos: ["🛰️ Órbita", "📡 GPS", "📺 TV via satélite"],
      },
    ],
    falaFinal: "95% da internet passa por baixo do mar. A rede é literalmente OCEÂNICA.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "Três perguntas finais pra conquistar a insígnia derradeira e restaurar TODAS as Crônicas.",
    instrucao: "Responda as 3 perguntas",
    fotoUrl: imgMapa,
    perguntas: [
      {
        id: "av1",
        pergunta: "Qual o nome do processo de integração cultural, econômica e digital entre todos os países?",
        opcoes: [
          { id: "a", texto: "Nacionalismo isolado.", correta: false },
          { id: "b", texto: "Globalização.", correta: true },
          { id: "c", texto: "Migração forçada.", correta: false },
        ],
        feedbackAcerto: "Perfeito! GLOBALIZAÇÃO — o planeta virou uma comunidade conectada.",
        feedbackErro: "Nacionalismo é o oposto. Integração mundial = GLOBALIZAÇÃO.",
      },
      {
        id: "av2",
        pergunta: "Por onde passa a MAIOR parte (95%) da internet do mundo?",
        opcoes: [
          { id: "a", texto: "Por satélites.", correta: false },
          { id: "b", texto: "Por cabos submarinos de fibra óptica.", correta: true },
          { id: "c", texto: "Por caravelas.", correta: false },
        ],
        feedbackAcerto: "Isso! CABOS SUBMARINOS carregam 95% da internet.",
        feedbackErro: "Satélite tem só 5%; caravela é do século XV. 95% = CABOS SUBMARINOS.",
      },
      {
        id: "av3",
        pergunta: "Ordene do MAIS LENTO ao MAIS RÁPIDO:",
        opcoes: [
          { id: "a", texto: "Avião → Navio → Caravela → Mula.", correta: false },
          { id: "b", texto: "Mula → Caravela → Navio cargueiro → Avião a jato.", correta: true },
          { id: "c", texto: "Todos são iguais em velocidade.", correta: false },
        ],
        feedbackAcerto: "Correto! Do lombo da mula ao jato: 4 eras da história do transporte.",
        feedbackErro: "Ordem correta é do mais LENTO (mula) pro mais RÁPIDO (avião).",
      },
    ],
    selo: {
      nome: "Globo das Conexões Digitais",
      subtitulo: "Insígnia FINAL das Crônicas das Grandes Rotas",
      emoji: "🌐",
      cor: "from-indigo-400 to-blue-600",
      fotoUrl: imgMapa,
    },
    falaFinal:
      "🎉 CRÔNICAS COMPLETAS! Todas as 7 páginas restauradas. O mapa das grandes rotas humanas brilha por inteiro. Você é oficialmente um Historiador das Grandes Rotas.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Globo das Conexões Digitais" },
};

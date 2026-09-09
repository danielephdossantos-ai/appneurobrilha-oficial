import type { AulaGeoV1 } from "../../types";
import { url as parlamento } from "@/assets/geografia-9ano/parlamento-europeu.jpg.asset.json";
import { url as alpes } from "@/assets/geografia-9ano/alpes-europeus.jpg.asset.json";
import { url as londres } from "@/assets/geografia-9ano/londres-city.jpg.asset.json";
import { url as trem } from "@/assets/geografia-9ano/trem-alta-velocidade.jpg.asset.json";
/**
 * Geografia · 9º Ano · Unidade 2 · Aula 01
 * "Europa" — BNCC EF09GE03, EF09GE04
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-europa",
  titulo: "Europa: União Europeia e Potências",
  iconeTrilha: "🇪🇺",
  bncc: ["EF09GE03", "EF09GE04"],
  duracaoMin: 30,
  estilo: "teen",

  cena01_motivacao: {
    tipo: "mesaCartografo",
    estilo: "teen",
    instrucao: "Toque na imagem para começar.",
    mapaUrl: parlamento,
    imagemDestaqueUrl: parlamento,
    aurora:
      "Em 1945, a Europa estava em RUÍNAS. Duas guerras mundiais mataram 80 milhões de europeus e destruíram cidades inteiras. Em 1957, seis países (França, Alemanha, Itália, Bélgica, Holanda, Luxemburgo) fizeram uma aposta radical: juntar economias pra nunca mais guerrear. Nasceu a UNIÃO EUROPEIA. Hoje são 27 países, 450 milhões de pessoas, uma moeda comum (EURO) e fronteiras abertas — você viaja de Portugal à Estônia sem mostrar passaporte.",
    falaFinal: "De ruínas a bloco unido. 70 anos de integração europeia.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Chuta antes: quantos países usam o EURO como moeda oficial?",
    pergunta: "Quantos países da União Europeia adotaram o euro?",
    opcoes: [
      { id: "todos", titulo: "Todos os 27", subtitulo: "de Portugal à Estônia", emoji: "💶", cor: "from-blue-800 to-slate-950" },
      { id: "20", titulo: "20 países (Zona do Euro)", subtitulo: "7 mantêm moeda própria", emoji: "🇪🇺", cor: "from-slate-700 to-slate-950" },
    ],
    respostaCerta: "20",
    feedbackAcerto:
      "Exato! Só 20 dos 27 países da UE usam o euro. Os outros 7 mantêm moeda própria — como Suécia (coroa), Polônia (zloty) e Dinamarca (coroa).",
    feedbackErro:
      "Não. Só 20 países usam o EURO (a Zona do Euro). 7 mantêm moeda própria por escolha política ou econômica.",
    falaFinal: "20 países, 1 moeda. Nem todo mundo da UE topou. É união, não fusão.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 conceitos-chave da Europa contemporânea. Explicação + exemplo real + curiosidade.",
    instrucao: "",
    cadernos: [
      {
        id: "ue",
        capa: "1. União Europeia",
        emoji: "🇪🇺",
        cor: "from-blue-800 to-slate-950",
        conteudo:
          "UNIÃO EUROPEIA é o bloco econômico e político formado por 27 países europeus. Nasceu em 1957 e virou UE em 1993. Tem parlamento (Estrasburgo), comissão (Bruxelas), moeda (euro) e passaporte comum.",
        exemplo:
          "Curiosidade: em 2012, a União Europeia ganhou o PRÊMIO NOBEL DA PAZ. Motivo: 70 anos sem guerra entre potências europeias — recorde histórico depois de séculos de conflitos. Só a França e a Alemanha se enfrentaram 5 vezes em 100 anos antes disso.",
        fotoUrl: parlamento,
      },
      {
        id: "euro",
        capa: "2. Zona do Euro",
        emoji: "💶",
        cor: "from-emerald-800 to-slate-950",
        conteudo:
          "ZONA DO EURO é o grupo de 20 países da UE que adotaram o EURO como moeda em 2002. Alemanha, França, Itália, Espanha, Portugal, Grécia e outros. Reino Unido nunca entrou. Suécia e Dinamarca escolheram ficar de fora.",
        exemplo:
          "Curiosidade: o euro é a 2ª moeda mais usada do mundo (só perde pro dólar americano). 25% das reservas dos bancos centrais globais estão em euros. E cerca de 340 milhões de pessoas o usam todo dia.",
        fotoUrl: londres,
      },
      {
        id: "sch",
        capa: "3. Schengen",
        emoji: "🛂",
        cor: "from-slate-700 to-slate-950",
        conteudo:
          "ESPAÇO SCHENGEN é a zona sem fronteiras internas na Europa. 29 países (nem todos da UE) permitem que você viaje sem passaporte entre eles. Você pode ir de Lisboa a Berlim de trem sem parar em nenhuma alfândega.",
        exemplo:
          "Curiosidade: o nome vem da cidadezinha de SCHENGEN (400 habitantes) em Luxemburgo, onde o acordo foi assinado em 1985. Um vilarejo minúsculo deu nome ao maior espaço de livre circulação do mundo.",
        fotoUrl: trem,
      },
      {
        id: "bre",
        capa: "4. Brexit",
        emoji: "🇬🇧",
        cor: "from-orange-800 to-slate-950",
        conteudo:
          "BREXIT (British + exit) foi a saída do REINO UNIDO da União Europeia. Em 2016, 52% dos britânicos votaram pra sair. A saída se completou em 2020. Foi o 1º e único país a abandonar o bloco.",
        exemplo:
          "Curiosidade: depois do Brexit, o Reino Unido perdeu 4% do PIB, muitas empresas mudaram para Dublin (Irlanda), e brasileiros com passaporte português agora entram no Reino Unido só como turistas — não podem mais trabalhar sem visto.",
        fotoUrl: londres,
      },
    ],
    falaFinal: "UE, euro, Schengen e Brexit. 4 palavras = Europa hoje.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 cenas da Europa contemporânea. Toque em cada card pra ver a imagem e ouvir.",
    instrucao: "Toque nos 4 cards",
    mapaUrl: parlamento,
    pontos: [
      { id: "bxl", x: 25, y: 30, emoji: "🇪🇺", cor: "from-blue-800 to-slate-950",
        titulo: "Bruxelas — capital da UE",
        texto: "Sede da Comissão Europeia. Aqui se decide o orçamento comum, as leis do bloco e a política externa dos 27 países.",
        fotoUrl: parlamento },
      { id: "alp", x: 55, y: 45, emoji: "🏔️", cor: "from-slate-700 to-slate-950",
        titulo: "Alpes — coração natural",
        texto: "Cadeia de 1.200 km que atravessa 8 países. Fonte de rios (Reno, Ródano), turismo (esqui) e energia hidrelétrica.",
        fotoUrl: alpes },
      { id: "lnd", x: 20, y: 60, emoji: "💷", cor: "from-slate-800 to-slate-950",
        titulo: "Londres — capital financeira",
        texto: "3ª maior bolsa do mundo. Depois do Brexit, perdeu força pra Frankfurt e Amsterdã, mas ainda concentra US$ 3 trilhões em ativos.",
        fotoUrl: londres },
      { id: "trm", x: 70, y: 75, emoji: "🚄", cor: "from-emerald-800 to-slate-950",
        titulo: "Trens de alta velocidade",
        texto: "TGV francês, ICE alemão, Eurostar Londres–Paris. 300+ km/h. Você atravessa a Europa em 6 horas sem entrar em avião.",
        fotoUrl: trem },
    ],
    falaFinal: "Bruxelas, Alpes, Londres, trens. Europa: pequena, densa, conectada.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "4 perguntas de europólogo pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Quantos países formam a União Europeia hoje?",
        fotoUrl: parlamento,
        cards: [
          { id: "a", emoji: "🇪🇺", titulo: "27 países", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🌍", titulo: "50 países", cor: "from-red-800 to-slate-950" },
          { id: "c", emoji: "🇺🇳", titulo: "193 países", cor: "from-slate-700 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 27 países desde 2020 (após saída do Reino Unido).",
        feedbackErro: "São 27 países. 50 é a Europa geográfica; 193 são todos os países do mundo (ONU)." },
      { id: "q2", pergunta: "O euro é usado por quantos países da UE?",
        fotoUrl: londres,
        cards: [
          { id: "a", emoji: "💶", titulo: "20 países (Zona do Euro)", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🇪🇺", titulo: "Todos os 27", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "1️⃣", titulo: "Só a Alemanha", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. 20 países da Zona do Euro. Os outros 7 mantêm moeda própria.",
        feedbackErro: "É 20. Suécia, Polônia, Dinamarca e outros ficaram de fora por escolha." },
      { id: "q3", pergunta: "Schengen permite:",
        fotoUrl: trem,
        cards: [
          { id: "a", emoji: "🛂", titulo: "Viajar sem passaporte entre 29 países", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "🎓", titulo: "Estudar de graça em qualquer país", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "🏥", titulo: "Cirurgia grátis em todo lugar", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. Fronteiras abertas entre 29 países — Lisboa a Berlim sem parar.",
        feedbackErro: "É LIVRE CIRCULAÇÃO. Estudo grátis e cirurgia são outras políticas nacionais." },
      { id: "q4", pergunta: "Brexit foi:",
        fotoUrl: londres,
        cards: [
          { id: "a", emoji: "🇬🇧", titulo: "Saída do Reino Unido da UE", cor: "from-emerald-800 to-slate-950" },
          { id: "b", emoji: "☕", titulo: "Nome de um chá britânico", cor: "from-slate-700 to-slate-950" },
          { id: "c", emoji: "👑", titulo: "Coroação do rei Charles", cor: "from-red-800 to-slate-950" },
        ], correta: "a",
        feedbackAcerto: "Isso. British + exit = saída do Reino Unido em 2020.",
        feedbackErro: "É a SAÍDA do Reino Unido da UE (2016 voto, 2020 saída efetiva)." },
    ],
    falaFinal: "4 acertos = europólogo iniciante.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "A Europa marcou o Brasil pela imigração. Os 3 estados que MAIS receberam imigrantes europeus (italianos, alemães, poloneses) entre 1870 e 1930 foram SP, RS e SC. Acenda os 3.",
    instrucao: "Acenda SP, RS e SC",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RS", "SC"],
      pergunta: "Quais estados brasileiros mais receberam imigrantes europeus?",
    },
    falaFinal: "SP (italianos), RS e SC (alemães, italianos). Europa moldou o sul do Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Organize as 5 fases da União Europeia em ordem cronológica.",
    instrucao: "Toque na ordem",
    pergunta: "Do mais antigo ao mais recente:",
    paradas: [
      { id: "1957", emoji: "🤝", rotulo: "1. Tratado de Roma (1957)",
        descricao: "6 países fundam a CEE (Comunidade Econômica Europeia). Semente da UE." },
      { id: "1985", emoji: "🛂", rotulo: "2. Acordo de Schengen (1985)",
        descricao: "Fronteiras abertas entre 5 países. Hoje são 29.", fotoUrl: trem },
      { id: "1993", emoji: "🇪🇺", rotulo: "3. Tratado de Maastricht (1993)",
        descricao: "CEE vira UNIÃO EUROPEIA. Cria a cidadania europeia.", fotoUrl: parlamento },
      { id: "2002", emoji: "💶", rotulo: "4. Euro em circulação (2002)",
        descricao: "12 países substituem suas moedas pelo EURO. Hoje são 20." },
      { id: "2020", emoji: "🇬🇧", rotulo: "5. Brexit (2020)",
        descricao: "Reino Unido sai da UE. 1º país a abandonar o bloco.", fotoUrl: londres },
    ],
    ordemCerta: ["1957", "1985", "1993", "2002", "2020"],
    feedbackAcerto: "Perfeito! 63 anos de integração europeia em 5 marcos.",
    feedbackErro: "Roma (1957), Schengen (1985), Maastricht (1993), Euro (2002), Brexit (2020).",
    falaFinal: "5 marcos contam como a Europa virou (quase) um só país.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Leia com calma. Termos-chave destacados — toque em qualquer um pra ver a definição.",
    tituloLivro: "📘 Manual do Explorador do Planeta",
    subtitulo: "Capítulo 2 — Europa e União Europeia",
    paragrafos: [
      { id: "p1",
        texto: "A UNIÃO EUROPEIA reúne 27 países e 450 milhões de pessoas. Nasceu em 1957 como CEE e virou UE em 1993, com o Tratado de MAASTRICHT.",
        chaves: ["UNIÃO EUROPEIA", "MAASTRICHT"],
        definicoes: {
          "UNIÃO EUROPEIA": "Bloco econômico e político de 27 países. Prêmio Nobel da Paz em 2012 por 70 anos sem guerras entre potências europeias.",
          "MAASTRICHT": "Cidade holandesa onde foi assinado o tratado de 1993 que transformou a CEE em UE e criou a cidadania europeia.",
        },
        fotoUrl: parlamento },
      { id: "p2",
        texto: "O EURO é a moeda comum de 20 dos 27 países da UE (Zona do Euro). Criado em 1999 (virtual) e 2002 (em circulação), é a 2ª moeda mais usada do mundo.",
        chaves: ["EURO"],
        definicoes: {
          "EURO": "Moeda única da Zona do Euro. Símbolo €. 25% das reservas cambiais mundiais. 340 milhões de usuários.",
        },
        fotoUrl: londres },
      { id: "p3",
        texto: "O acordo de SCHENGEN (1985) permite viajar sem passaporte entre 29 países europeus. Você atravessa em TREM DE ALTA VELOCIDADE (300+ km/h) sem parar em nenhuma fronteira.",
        chaves: ["SCHENGEN", "TREM DE ALTA VELOCIDADE"],
        definicoes: {
          "SCHENGEN": "Área de livre circulação entre 29 países europeus. Nome vem de um vilarejo de 400 habitantes em Luxemburgo.",
          "TREM DE ALTA VELOCIDADE": "TGV francês, ICE alemão, Eurostar Londres–Paris. Atravessam a Europa em 6 horas — mais rápido que avião curto.",
        },
        fotoUrl: trem },
      { id: "p4",
        texto: "Em 2016, 52% dos britânicos votaram pelo BREXIT. Em 2020, o Reino Unido deixou a UE — 1º país a sair. Perdeu 4% do PIB e sofreu êxodo de empresas para Dublin e Frankfurt.",
        chaves: ["BREXIT"],
        definicoes: {
          "BREXIT": "British + exit. Saída do Reino Unido da União Europeia. Voto em 2016, saída efetiva em 2020. Único caso na história do bloco.",
        },
        fotoUrl: londres },
    ],
    falaFinal: "Leu tudo? Bora pro quiz final antes da insígnia.",
  },

  cena09_minijogo: (() => {
    const cards = [
      { id: "ue", emoji: "", titulo: "União Europeia", cor: "from-slate-800 to-slate-900" },
      { id: "eur", emoji: "", titulo: "Euro", cor: "from-slate-800 to-slate-900" },
      { id: "sch", emoji: "", titulo: "Schengen", cor: "from-slate-800 to-slate-900" },
      { id: "bre", emoji: "", titulo: "Brexit", cor: "from-slate-800 to-slate-900" },
      { id: "otan", emoji: "", titulo: "OTAN", cor: "from-slate-800 to-slate-900" },
      { id: "roma", emoji: "", titulo: "Tratado de Roma", cor: "from-slate-800 to-slate-900" },
    ];
    return {
      tipo: "quizRadar" as const,
      aurora: "Quiz rápido: pra cada descrição, escolha o conceito europeu correto.",
      instrucao: "Escolha o conceito correto",
      perguntas: [
        { id: "r1", pergunta: "Bloco de 27 países com parlamento, comissão e política externa comum.", cards, correta: "ue",
          feedbackAcerto: "Isso. 27 países integrados = UNIÃO EUROPEIA.", feedbackErro: "É a UNIÃO EUROPEIA. Ganhou o Nobel da Paz em 2012." },
        { id: "r2", pergunta: "Moeda usada por 20 dos 27 países da UE desde 2002.", cards, correta: "eur",
          feedbackAcerto: "Isso. Moeda comum = EURO.", feedbackErro: "É o EURO. Símbolo € — 2ª moeda mais usada do mundo." },
        { id: "r3", pergunta: "Acordo de 1985 que permite viajar sem passaporte entre 29 países europeus.", cards, correta: "sch",
          feedbackAcerto: "Isso. Fronteiras abertas = SCHENGEN.", feedbackErro: "É SCHENGEN. Nome vem de um vilarejo em Luxemburgo." },
        { id: "r4", pergunta: "Saída do Reino Unido da União Europeia em 2020.", cards, correta: "bre",
          feedbackAcerto: "Isso. British + exit = BREXIT.", feedbackErro: "É o BREXIT. Voto em 2016, saída em 2020." },
        { id: "r5", pergunta: "Aliança militar que reúne EUA, Canadá e países europeus contra ameaças externas.", cards, correta: "otan",
          feedbackAcerto: "Isso. Aliança militar = OTAN.", feedbackErro: "É a OTAN. Criada em 1949 contra a URSS." },
        { id: "r6", pergunta: "Acordo de 1957 que fundou a Comunidade Econômica Europeia (semente da UE).", cards, correta: "roma",
          feedbackAcerto: "Isso. 1957 + CEE = TRATADO DE ROMA.", feedbackErro: "É o TRATADO DE ROMA. Assinado por 6 países em 25/03/1957." },
      ],
      falaFinal: "6 perguntas, 6 conceitos. Europólogo formado.",
    };
  })(),

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza dos países da UE (2024): quem está dentro / fora da Zona do Euro.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "in", rotulo: "Zona do Euro (20 países)", emoji: "💶", percentual: 74, cor: "#2563eb",
        descricao: "Alemanha, França, Itália, Espanha, Portugal, Grécia e outros 14. Usam euro.",
        exemplos: ["🇩🇪 Alemanha", "🇫🇷 França", "🇵🇹 Portugal"] },
      { id: "out", rotulo: "Fora da Zona do Euro (7)", emoji: "💰", percentual: 26, cor: "#64748b",
        descricao: "Suécia, Polônia, Dinamarca, República Tcheca, Hungria, Romênia, Bulgária. Mantêm moeda própria.",
        exemplos: ["🇸🇪 Coroa sueca", "🇵🇱 Zloty", "🇩🇰 Coroa dinamarquesa"] },
    ],
    falaFinal: "74% dos países da UE usam euro. É união, mas nem todo mundo topa tudo.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra ganhar a insígnia Europólogo.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "A União Europeia hoje tem quantos países?",
        opcoes: [
          { id: "a", texto: "27", correta: true },
          { id: "b", texto: "50", correta: false },
          { id: "c", texto: "12", correta: false },
        ],
        feedbackAcerto: "Isso! 27 desde a saída do Reino Unido em 2020.",
        feedbackErro: "São 27. 50 é a Europa geográfica; 12 foi o número inicial dos fundadores do euro." },
      { id: "av2", pergunta: "O euro entrou em circulação em:",
        opcoes: [
          { id: "a", texto: "2002", correta: true },
          { id: "b", texto: "1957", correta: false },
          { id: "c", texto: "2020", correta: false },
        ],
        feedbackAcerto: "Isso! Notas e moedas físicas em 01/01/2002.",
        feedbackErro: "Foi em 2002. 1957 é o Tratado de Roma; 2020 é o Brexit." },
      { id: "av3", pergunta: "Brexit é a saída do:",
        opcoes: [
          { id: "a", texto: "Reino Unido da UE", correta: true },
          { id: "b", texto: "França da OTAN", correta: false },
          { id: "c", texto: "Alemanha do euro", correta: false },
        ],
        feedbackAcerto: "Isso! British + exit = saída do Reino Unido em 2020.",
        feedbackErro: "É o Reino Unido saindo da UE. Único caso na história do bloco." },
    ],
    selo: { nome: "Europólogo", subtitulo: "Insígnia do Explorador do Planeta", emoji: "🇪🇺", cor: "from-blue-800 to-slate-950" },
    falaFinal: "Insígnia conquistada! Você entende a Europa integrada.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Europólogo" },
};

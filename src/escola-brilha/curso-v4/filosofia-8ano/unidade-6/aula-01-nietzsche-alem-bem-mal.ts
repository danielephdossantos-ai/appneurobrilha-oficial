import type { AulaGeoV1 } from "../../types";
import { url as montanha } from "@/assets/filosofia-8ano/u6-nietzsche-montanha.jpg.asset.json";
import { url as bemMal } from "@/assets/filosofia-8ano/u6-alem-bem-mal.jpg.asset.json";

/**
 * Filosofia · 8º Ano · Unidade 6 · Aula 01
 * "Nietzsche: Além do Bem e do Mal" — EF08FI06 (autoral)
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-nietzsche-alem-bem-mal",
  titulo: "Além do Bem e do Mal",
  iconeTrilha: "⚡",
  bncc: ["EF08FI06"],
  duracaoMin: 27,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Antes de pensar, imagine a cena.",
    mapaUrl: montanha,
    imagemDestaqueUrl: montanha,
    aurora:
      "Investigador, Alpes suíços, verão de 1883. Um filósofo alemão de 39 anos, cabelo revolto e bigode farto, sobe todo dia sozinho as montanhas com um caderno. Friedrich Nietzsche está escrevendo o livro mais explosivo da filosofia moderna: 'Assim Falou Zaratustra'. Sua tese é uma bomba: os valores que aprendemos como 'bem' e 'mal' NÃO são naturais nem eternos — foram INVENTADOS em algum momento da história por interesses específicos. E, se foram inventados, podem ser REAVALIADOS. Nietzsche não vem trazer respostas — ele vem com um martelo, testar quais ídolos ainda soam ocos.",
    falaFinal: "Nesta aula: transvaloração de valores, moral dos senhores × moral dos escravos, super-homem.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: os valores morais que você aprendeu (o que é bom, o que é mau)…",
    pergunta: "Os valores 'bem' e 'mal' são…",
    opcoes: [
      { id: "eternos", titulo: "ETERNOS e NATURAIS", subtitulo: "sempre foram assim, sempre serão", emoji: "🗿", cor: "from-slate-400 to-gray-600" },
      { id: "historicos", titulo: "HISTÓRICOS e INVENTADOS", subtitulo: "surgiram em época e lugar, por interesses específicos", emoji: "⚡", cor: "from-amber-400 to-orange-600" },
    ],
    respostaCerta: "historicos",
    feedbackAcerto: "Boa. Pra Nietzsche, todo valor tem uma HISTÓRIA — quem inventou, quando, pra quê.",
    feedbackErro: "Cuidado: Nietzsche mostra que valores considerados 'eternos' têm ORIGEM histórica bem específica. Nada caiu do céu.",
    falaFinal: "Todo valor tem genealogia — origem, autor, interesse.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave pra entrar em Nietzsche.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "genealogia",
        capa: "1. Genealogia da moral",
        emoji: "🔍",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "GENEALOGIA DA MORAL é o método de Nietzsche: em vez de perguntar 'o que é o bem?', ele pergunta 'QUEM INVENTOU esse valor, QUANDO e A QUE INTERESSE ele servia?'. Todo valor tem origem histórica, autor, contexto. Não existe 'bem em si' — existem escolhas de pessoas concretas em momentos concretos.",
        exemplo: "Ex.: 'humildade é virtude' — Nietzsche investiga: quem se beneficiou de pregar isso? Talvez quem já era humilde por falta de poder, e transformou fraqueza em virtude.",
        fotoUrl: bemMal,
      },
      {
        id: "senhores-escravos",
        capa: "2. Moral dos senhores × moral dos escravos",
        emoji: "⚔️",
        cor: "from-red-500 to-orange-700",
        conteudo:
          "MORAL DOS SENHORES: os fortes chamam a si mesmos de 'bons' (nobre, poderoso, ousado) e chamam os fracos de 'maus' (ruins). MORAL DOS ESCRAVOS: os fracos INVERTEM — chamam os fortes de 'malvados' (agressivos, orgulhosos) e a si mesmos de 'bons' (humildes, mansos, obedientes). Pra Nietzsche, a moral cristã ocidental é uma vitória histórica da moral dos escravos.",
        exemplo: "Ex.: em Homero, o herói é o forte, ousado, vencedor. Séculos depois, a moral do 'manso é bem-aventurado' inverte tudo. Não é natureza — é história.",
        fotoUrl: bemMal,
      },
      {
        id: "super-homem",
        capa: "3. Super-homem (Übermensch)",
        emoji: "⚡",
        cor: "from-amber-400 to-orange-600",
        conteudo:
          "SUPER-HOMEM (Übermensch) NÃO é força bruta nem raça superior (essa distorção veio depois, foi FALSIFICADA pelo nazismo). Pra Nietzsche, é a pessoa que consegue CRIAR seus próprios valores — que não recebe pronto o que é bom e mau, mas TRANSVALORIZA: examina, descarta o que não faz sentido, afirma o que a fortalece pra vida. É superar o 'último homem' conformado.",
        exemplo: "Ex.: alguém que percebe que 'sucesso = ter carro caro' é valor imposto e cria o próprio critério de vida boa — está no caminho do Übermensch.",
        fotoUrl: montanha,
      },
    ],
    falaFinal: "Genealogia × senhores/escravos × super-homem. Trio nietzschiano.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 momentos do pensamento de Nietzsche.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: montanha,
    pontos: [
      {
        id: "grega",
        x: 22,
        y: 30,
        emoji: "🏛️",
        cor: "from-amber-500 to-orange-700",
        titulo: "A Grécia trágica",
        texto: "Nietzsche começa estudando os gregos e descobre: antes de Sócrates, os gregos tinham uma cultura AFIRMADORA DA VIDA — arte, força, honra, tragédia. Depois de Sócrates e do cristianismo, a cultura ocidental teria virado contra a vida — pregando renúncia, culpa, além-mundo.",
        fotoUrl: bemMal,
      },
      {
        id: "morte-deus",
        x: 74,
        y: 30,
        emoji: "⚰️",
        cor: "from-slate-500 to-gray-700",
        titulo: "'Deus morreu'",
        texto: "A famosa frase de 1882 NÃO é uma comemoração — é um diagnóstico assustado. Com a ciência moderna, o fundamento absoluto (Deus) perdeu força cultural. E agora? Sem alicerce dado, precisamos INVENTAR novos valores — ou cair no niilismo (nada vale nada).",
        fotoUrl: bemMal,
      },
      {
        id: "genealogia-obra",
        x: 26,
        y: 70,
        emoji: "🔍",
        cor: "from-sky-500 to-blue-700",
        titulo: "1887 — Genealogia da Moral",
        texto: "Nietzsche publica a 'Genealogia da Moral': investigação histórica de como 'bom' e 'mau' foram inventados. Descobre que a moral cristã é vitória histórica dos fracos, que transformaram sua incapacidade em virtude (humildade, mansidão, obediência).",
        fotoUrl: bemMal,
      },
      {
        id: "zaratustra",
        x: 76,
        y: 70,
        emoji: "⛰️",
        cor: "from-amber-400 to-orange-600",
        titulo: "Zaratustra e o super-homem",
        texto: "Em 'Assim Falou Zaratustra', Nietzsche propõe: o ser humano é uma PONTE, não um fim. Precisa criar valores próprios, dizer SIM à vida com toda sua dor e alegria, e chegar ao ÜBERMENSCH — quem transvaloriza e afirma a vida.",
        fotoUrl: montanha,
      },
    ],
    falaFinal: "Grécia → morte de Deus → genealogia → super-homem. Nietzsche em 4 tempos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "GENEALOGIA DA MORAL pergunta…",
        fotoUrl: bemMal,
        cards: [
          { id: "quem-inventou", emoji: "🔍", titulo: "Quem inventou esse valor, quando e a que interesse serviu?", cor: "from-sky-500 to-blue-700" },
          { id: "familia", emoji: "👨‍👩‍👧", titulo: "Qual a árvore genealógica da minha família?", cor: "from-amber-400 to-orange-600" },
          { id: "eterno", emoji: "🗿", titulo: "Quais valores são eternos e imutáveis?", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "quem-inventou",
        feedbackAcerto: "Isso. Nietzsche investiga a ORIGEM histórica de cada valor.",
        feedbackErro: "Genealogia da MORAL — investiga origem histórica de valores, não árvore familiar.",
      },
      {
        id: "q2",
        pergunta: "MORAL DOS ESCRAVOS (segundo Nietzsche) é…",
        fotoUrl: bemMal,
        cards: [
          { id: "inversao", emoji: "🔄", titulo: "A inversão em que os fracos chamam os fortes de 'maus' e a si mesmos de 'bons'", cor: "from-red-500 to-orange-700" },
          { id: "regras", emoji: "📜", titulo: "Regras que escravos escreviam para si mesmos", cor: "from-slate-400 to-gray-600" },
          { id: "cinema", emoji: "🎬", titulo: "Um filme sobre a escravidão", cor: "from-amber-400 to-orange-600" },
        ],
        correta: "inversao",
        feedbackAcerto: "Perfeito. Inversão de valores — fraqueza vira virtude, força vira maldade.",
        feedbackErro: "É INVERSÃO: os que não podem exercer força chamam a força de 'mal' e a submissão de 'bem'.",
      },
      {
        id: "q3",
        pergunta: "SUPER-HOMEM (Übermensch) é…",
        fotoUrl: montanha,
        cards: [
          { id: "cria-valores", emoji: "⚡", titulo: "Quem cria seus próprios valores em vez de receber prontos", cor: "from-amber-400 to-orange-600" },
          { id: "raca", emoji: "🚫", titulo: "Uma raça biologicamente superior", cor: "from-slate-400 to-gray-600" },
          { id: "musculo", emoji: "💪", titulo: "Alguém muito forte fisicamente", cor: "from-red-400 to-orange-600" },
        ],
        correta: "cria-valores",
        feedbackAcerto: "Isso. Nada de raça, nada de músculo — é CRIAÇÃO de valores próprios afirmadores da vida.",
        feedbackErro: "Não é biologia nem força bruta: é CRIAÇÃO ÉTICA. O nazismo falsificou o conceito.",
      },
    ],
    falaFinal: "3 acertos = radar nietzschiano calibrado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Nietzsche influenciou fortemente a filosofia, a arte e a psicologia no Brasil. Acenda 5 estados-referência.",
    instrucao: "Acenda 5 estados-referência",
    missao: {
      tipo: "selecionar",
      siglas: ["SP", "RJ", "MG", "RS", "PR"],
      pergunta: "Quais 5 estados abrigam programas de referência em Nietzsche (USP, UFRJ, UFMG, UFRGS, UFPR)?",
    },
    falaFinal: "SP, RJ, MG, RS e PR — cinco polos da crítica genealógica no Brasil.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como fazer uma genealogia de um valor. 5 passos.",
    instrucao: "Toque na ordem correta",
    pergunta: "Investigando um valor moral:",
    paradas: [
      { id: "escolha", emoji: "🎯", rotulo: "1. Escolha um valor 'óbvio'", descricao: "Ex.: 'humildade é virtude'." },
      { id: "origem", emoji: "🔎", rotulo: "2. Busque a ORIGEM histórica", descricao: "Quando surgiu essa ideia? Em que cultura? Antes disso, o que se pregava?" },
      { id: "beneficiado", emoji: "💰", rotulo: "3. Pergunte QUEM se beneficiou", descricao: "Que grupo ganhou poder ou legitimidade ao espalhar esse valor?" },
      { id: "efeito", emoji: "🌱", rotulo: "4. Analise o EFEITO na vida", descricao: "Esse valor fortalece a vida ou enfraquece? Afirma ou nega o que somos?" },
      { id: "reavaliar", emoji: "⚡", rotulo: "5. TRANSVALORIZE se necessário", descricao: "Mantenha, transforme ou substitua o valor — mas conscientemente." },
    ],
    ordemCerta: ["escolha", "origem", "beneficiado", "efeito", "reavaliar"],
    feedbackAcerto: "Exato. Escolher → buscar origem → quem se beneficia → efeito na vida → transvalorar. Método genealógico em 5 passos.",
    feedbackErro: "A ordem é: escolher, buscar origem, ver quem se beneficia, analisar efeito, transvalorizar.",
    falaFinal: "5 passos. Método genealógico em uma escada.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Leia com atenção.",
    tituloLivro: "📔 Caderno do Investigador",
    subtitulo: "Página 6 — Nietzsche e a transvaloração",
    paragrafos: [
      { id: "p1", texto: "Friedrich Nietzsche (1844-1900) desconfia dos valores considerados 'naturais' ou 'eternos'. Sua tese: todo valor tem uma HISTÓRIA — foi inventado em uma época, por certas pessoas, servindo a certos interesses. Isso é a GENEALOGIA DA MORAL.", chaves: ["Nietzsche", "genealogia"] },
      { id: "p2", texto: "Ele descobre: houve uma MORAL DOS SENHORES (fortes que se chamavam bons, fracos = ruins) e uma MORAL DOS ESCRAVOS (fracos que INVERTERAM tudo — chamaram os fortes de maus e a si mesmos de bons: humildes, mansos, obedientes). A moral ocidental cristã seria vitória histórica dessa inversão.", chaves: ["senhores", "escravos"] },
      { id: "p3", texto: "Sua frase famosa 'Deus morreu' NÃO é comemoração: é diagnóstico. Sem o fundamento absoluto, ou caímos no NIILISMO (nada vale nada) ou aprendemos a CRIAR NOVOS VALORES que afirmem a vida.", chaves: ["Deus morreu", "niilismo"] },
      { id: "p4", texto: "A saída é o SUPER-HOMEM (Übermensch): pessoa que TRANSVALORIZA — examina os valores herdados, descarta o que nega a vida e cria o que a afirma. Cuidado: nada a ver com raça (nazismo distorceu depois). É criação ética e afirmação da vida.", chaves: ["super-homem", "afirmação"] },
    ],
    falaFinal: "Leu? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LABORATÓRIO DO MARTELO! Cada caso ilustra qual conceito?",
    instrucao: "⏱️ Qual conceito nietzschiano é este?",
    duracaoSegundos: 15,
    pecas: [
      { id: "genealogia", emoji: "🔍", rotulo: "Genealogia" },
      { id: "moral-escravos", emoji: "🐑", rotulo: "Moral dos escravos" },
      { id: "moral-senhores", emoji: "🦁", rotulo: "Moral dos senhores" },
      { id: "super-homem", emoji: "⚡", rotulo: "Super-homem" },
    ],
    rodadas: [
      {
        id: "r1",
        municipioA: { nome: "'Vou investigar POR QUE consideramos ambição vergonhosa'", emoji: "🔍", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Buscar a origem histórica do valor", emoji: "📚", cor: "from-sky-400 to-blue-600" },
        contexto: "Investigar quem inventou e por quê.",
        pecaCertaId: "genealogia",
        feedbackAcerto: "Isso. GENEALOGIA — buscar origem e interesse por trás do valor.",
        feedbackErro: "É GENEALOGIA: investigar a história e o interesse por trás de cada valor.",
      },
      {
        id: "r2",
        municipioA: { nome: "'Herói homérico: forte, ousado, vencedor = BOM'", emoji: "🦁", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Força chamada de virtude", emoji: "⚔️", cor: "from-amber-400 to-orange-600" },
        contexto: "Modelo aristocrático antigo.",
        pecaCertaId: "moral-senhores",
        feedbackAcerto: "Perfeito. MORAL DOS SENHORES — os fortes se autonomeiam bons.",
        feedbackErro: "É MORAL DOS SENHORES: os fortes chamam a si mesmos de bons.",
      },
      {
        id: "r3",
        municipioA: { nome: "'Bem-aventurados os mansos, os humildes, os pobres'", emoji: "🐑", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Fraqueza chamada de virtude", emoji: "🕊️", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Inversão histórica de valores.",
        pecaCertaId: "moral-escravos",
        feedbackAcerto: "Isso. MORAL DOS ESCRAVOS — inversão que transforma limitação em virtude.",
        feedbackErro: "É MORAL DOS ESCRAVOS: os fracos invertem — chamam a própria condição de bem.",
      },
      {
        id: "r4",
        municipioA: { nome: "'Não vou aceitar que sucesso = ter carro caro. Vou criar meu próprio critério.'", emoji: "⚡", cor: "from-amber-400 to-orange-600" },
        municipioB: { nome: "Cria valores próprios afirmadores da vida", emoji: "🌟", cor: "from-amber-400 to-orange-600" },
        contexto: "Transvaloração consciente.",
        pecaCertaId: "super-homem",
        feedbackAcerto: "Perfeito. SUPER-HOMEM — caminho de quem transvaloriza.",
        feedbackErro: "É SUPER-HOMEM (Übermensch): criar critérios próprios afirmadores da vida.",
      },
      {
        id: "r5",
        municipioA: { nome: "'De onde veio a ideia de que trabalho duro é sempre virtude?'", emoji: "🔍", cor: "from-sky-400 to-blue-600" },
        municipioB: { nome: "Rastrear origem do 'valor trabalho'", emoji: "📜", cor: "from-sky-400 to-blue-600" },
        contexto: "Perguntar pela história do valor.",
        pecaCertaId: "genealogia",
        feedbackAcerto: "Isso. GENEALOGIA — questionar de onde vem a ideia herdada.",
        feedbackErro: "É GENEALOGIA: rastrear quem inventou e beneficiou o valor.",
      },
      {
        id: "r6",
        municipioA: { nome: "'Ser obediente e não reclamar é o mais importante'", emoji: "🐑", cor: "from-purple-400 to-fuchsia-600" },
        municipioB: { nome: "Submissão elogiada como bondade", emoji: "🙇", cor: "from-purple-400 to-fuchsia-600" },
        contexto: "Fraqueza posta como virtude suprema.",
        pecaCertaId: "moral-escravos",
        feedbackAcerto: "Perfeito. MORAL DOS ESCRAVOS — obediência transformada em virtude central.",
        feedbackErro: "É MORAL DOS ESCRAVOS: exalta a submissão como o mais alto valor.",
      },
    ],
    falaFinal: "6 casos, 4 categorias. Martelo genealógico em ação.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: 2 tipos de vida diante dos valores.",
    instrucao: "Toque em cada fatia",
    fatias: [
      {
        id: "ultimo-homem",
        rotulo: "ÚLTIMO HOMEM (conformado)",
        emoji: "🐑",
        percentual: 50,
        cor: "#94a3b8",
        descricao:
          "Aceita os valores herdados sem questionar. Busca conforto, evita risco, faz o que 'todo mundo faz'. Pra Nietzsche, é a vida ENFRAQUECIDA pela renúncia a criar.",
        exemplos: ["📱 'Compro o que os influencers indicam'", "🙇 'Faço o que esperam de mim'", "😴 'Não penso — obedeço'"],
      },
      {
        id: "super-homem",
        rotulo: "SUPER-HOMEM (criador)",
        emoji: "⚡",
        percentual: 50,
        cor: "#f59e0b",
        descricao:
          "Faz genealogia dos valores, examina o que recebe, descarta o que nega a vida e cria o que a afirma. Diz SIM à existência com dor e alegria. Vida como obra de arte.",
        exemplos: ["🔍 'Investigo por que penso o que penso'", "🎨 'Crio meus próprios critérios'", "🌟 'Afirmo a vida como ela é'"],
      },
    ],
    falaFinal: "Último homem × Super-homem. Duas atitudes diante dos valores.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia FILÓSOFO COM MARTELO.",
    instrucao: "Responda as 3",
    perguntas: [
      {
        id: "av1",
        pergunta: "GENEALOGIA DA MORAL (Nietzsche) investiga…",
        opcoes: [
          { id: "a", texto: "A origem histórica dos valores: quem inventou, quando e a que interesse serviu", correta: true },
          { id: "b", texto: "A árvore familiar de cada pessoa", correta: false },
          { id: "c", texto: "Quais valores são eternos e imutáveis", correta: false },
        ],
        feedbackAcerto: "Isso. Todo valor tem história — Nietzsche escava.",
        feedbackErro: "É investigação HISTÓRICA da origem de cada valor moral.",
      },
      {
        id: "av2",
        pergunta: "MORAL DOS ESCRAVOS é…",
        opcoes: [
          { id: "a", texto: "A inversão em que os fracos chamam a força de 'mal' e a submissão de 'bem'", correta: true },
          { id: "b", texto: "Regras escritas por escravos", correta: false },
          { id: "c", texto: "Uma moral defendida por Nietzsche", correta: false },
        ],
        feedbackAcerto: "Perfeito. Inversão histórica — fraqueza vira virtude.",
        feedbackErro: "É INVERSÃO: os fracos, ao chamarem os fortes de maus e a si de bons, invertem valores.",
      },
      {
        id: "av3",
        pergunta: "SUPER-HOMEM (Übermensch) é…",
        opcoes: [
          { id: "a", texto: "Quem cria seus próprios valores em vez de receber prontos, afirmando a vida", correta: true },
          { id: "b", texto: "Uma raça superior (interpretação nazista, FALSA)", correta: false },
          { id: "c", texto: "Alguém muito forte fisicamente", correta: false },
        ],
        feedbackAcerto: "Isso. Nada a ver com raça — é CRIAÇÃO ÉTICA afirmadora da vida.",
        feedbackErro: "Nunca é raça (isso foi falsificação nazista): é CRIADOR de valores próprios.",
      },
    ],
    selo: { nome: "Filósofo com Martelo", subtitulo: "Insígnia da Transvaloração", emoji: "⚡", cor: "from-amber-400 to-orange-700" },
    falaFinal: "Insígnia conquistada! Você aprendeu a examinar ídolos com o martelo de Nietzsche.",
  },

  recompensa: { xp: 400, moedas: 300, medalha: "Filósofo com Martelo" },
};

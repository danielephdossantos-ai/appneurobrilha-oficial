import type { AulaGeoV1 } from "../../types";
import { url as interpretacoes } from "@/assets/ensino-religioso-5ano/u2-interpretacoes.jpg.asset.json";
import { url as textos } from "@/assets/ensino-religioso-5ano/u2-textos.jpg.asset.json";
import { url as diversidade } from "@/assets/ensino-religioso-5ano/01-diversidade.jpg.asset.json";
import { url as natal } from "@/assets/ensino-religioso-5ano/02-natal-crista.jpg.asset.json";
import { url as indigena } from "@/assets/ensino-religioso-5ano/05-indigena.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 2 · Aula 01
 * "O Mesmo Acontecimento, Muitas Leituras" — EF05ER02
 *
 * NÃO CONFESSIONAL. Foco: entender que o mesmo acontecimento sagrado
 * pode ser interpretado de formas diferentes por diferentes tradições
 * — e isso não é problema, é RIQUEZA.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-interpretacoes-do-sagrado",
  titulo: "Muitas Leituras do Mesmo Sagrado",
  iconeTrilha: "📖",
  bncc: ["EF05ER02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: uma cena, muitas leituras.",
    mapaUrl: interpretacoes,
    imagemDestaqueUrl: interpretacoes,
    aurora:
      "Explorador, olha essa família reunida. Todos ouviram a mesma história dos avós. Mas cada um ENTENDE de um jeito: um vê como aviso, outro como esperança, outro como memória. Ninguém está errado — cada um lê com a sua vida.",
    falaFinal:
      "Nesta aula, vamos ver como o MESMO acontecimento sagrado é lido de jeitos diferentes por tradições diferentes.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora:
      "Palpite: se duas tradições contam a mesma história do sagrado com DETALHES diferentes, qual é a certa?",
    pergunta: "Qual está certa?",
    opcoes: [
      {
        id: "todas",
        titulo: "As DUAS podem ter valor",
        subtitulo: "cada tradição lê à sua maneira",
        emoji: "🌈",
        cor: "from-emerald-400 to-teal-600",
      },
      {
        id: "primeira",
        titulo: "Só a MAIS antiga",
        subtitulo: "a mais velha vence",
        emoji: "⏳",
        cor: "from-slate-400 to-gray-600",
      },
    ],
    respostaCerta: "todas",
    feedbackAcerto:
      "Isso! Cada tradição interpreta com sua própria memória e cultura. Não é competição.",
    feedbackErro:
      "Idade não define verdade sagrada. Cada tradição LÊ o sagrado a partir de sua história.",
    falaFinal: "Muitas leituras, mesmo mistério. Bora entender.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave pra hoje.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      {
        id: "interpretacao",
        capa: "1. Interpretação",
        emoji: "🔍",
        cor: "from-sky-500 to-blue-700",
        conteudo:
          "INTERPRETAÇÃO é o SIGNIFICADO que uma pessoa ou tradição dá a um acontecimento, texto ou símbolo. A mesma coisa pode ganhar interpretações diferentes.",
        exemplo: "Ex.: um arco-íris pode ser 'promessa' pra uns e 'ponte espiritual' pra outros.",
        fotoUrl: interpretacoes,
      },
      {
        id: "narrativa",
        capa: "2. Narrativa sagrada",
        emoji: "📜",
        cor: "from-amber-500 to-orange-700",
        conteudo:
          "NARRATIVA SAGRADA é uma HISTÓRIA que uma tradição considera importante, guardada e recontada com respeito. Pode estar em livros ou na oralidade.",
        exemplo: "Ex.: a história da criação, contada por cada povo do seu jeito.",
        fotoUrl: textos,
      },
      {
        id: "diversidade",
        capa: "3. Pluralidade",
        emoji: "🌈",
        cor: "from-purple-500 to-fuchsia-700",
        conteudo:
          "PLURALIDADE é a existência de MUITAS interpretações válidas ao mesmo tempo. Aceitar a pluralidade é entender que ninguém tem toda a verdade sozinho.",
        exemplo: "Ex.: várias explicações sobre o começo do mundo convivem no Brasil.",
        fotoUrl: diversidade,
      },
    ],
    falaFinal: "Interpretação, narrativa, pluralidade. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora:
      "Vamos ver 4 interpretações diferentes sobre A CRIAÇÃO DO MUNDO. Toque em cada balão pra ouvir. Nenhuma é 'a certa'.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: textos,
    pontos: [
      {
        id: "biblica",
        x: 25,
        y: 30,
        emoji: "📖",
        cor: "from-amber-500 to-orange-700",
        titulo: "TRADIÇÃO JUDAICO-CRISTÃ",
        texto:
          "Conta que Deus criou o mundo em seis momentos: separou luz e escuridão, criou céu, terra, plantas, animais, seres humanos — e no sétimo descansou. É narrativa central do Gênesis, presente na Torá e na Bíblia.",
        fotoUrl: textos,
      },
      {
        id: "indigena",
        x: 70,
        y: 30,
        emoji: "🪶",
        cor: "from-emerald-500 to-green-700",
        titulo: "TRADIÇÕES INDÍGENAS",
        texto:
          "Cada povo indígena tem sua narrativa. Os Guarani contam que Nhanderu criou tudo cantando; os Yanomami falam de Omama que moldou a floresta. Cada história ensina o respeito pela terra e pelos ancestrais.",
        fotoUrl: indigena,
      },
      {
        id: "iorubana",
        x: 30,
        y: 70,
        emoji: "🌍",
        cor: "from-red-500 to-rose-700",
        titulo: "TRADIÇÃO IORUBÁ (candomblé)",
        texto:
          "Olodumaré, o Criador, enviou Obatalá pra moldar a terra a partir das águas. Cada orixá recebeu parte da natureza pra cuidar: Iemanjá dos mares, Oxum dos rios, Iansã dos ventos.",
        fotoUrl: diversidade,
      },
      {
        id: "cientifica",
        x: 75,
        y: 70,
        emoji: "🔬",
        cor: "from-sky-500 to-blue-700",
        titulo: "LEITURA CIENTÍFICA",
        texto:
          "A ciência oferece outra leitura: o universo começou há 13,8 bilhões de anos com o Big Bang. Não é 'religião', é outra forma de tentar entender de onde tudo veio. Muita gente aceita ciência E tradição sem conflito.",
        fotoUrl: interpretacoes,
      },
    ],
    falaFinal:
      "Quatro leituras, um mesmo mistério: de onde tudo veio. Cada tradição responde com sua sabedoria.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas pra fixar.",
    instrucao: "Toque no card certo",
    perguntas: [
      {
        id: "q1",
        pergunta: "Duas tradições contam a criação do mundo de jeitos diferentes. Isso significa que...",
        fotoUrl: textos,
        cards: [
          { id: "valem", emoji: "🌈", titulo: "Ambas podem ter valor", cor: "from-emerald-500 to-green-700" },
          { id: "errada", emoji: "❌", titulo: "Uma tem que ser falsa", cor: "from-red-500 to-rose-700" },
          { id: "moderna", emoji: "🆕", titulo: "Só a mais moderna vale", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "valem",
        feedbackAcerto: "Isso! Cada tradição lê o mistério com sua sabedoria própria.",
        feedbackErro: "Diferenças não anulam. Ambas podem ter valor para quem as guarda.",
      },
      {
        id: "q2",
        pergunta: "O que é INTERPRETAÇÃO de um acontecimento sagrado?",
        fotoUrl: interpretacoes,
        cards: [
          { id: "sig", emoji: "🔍", titulo: "O significado dado a ele", cor: "from-sky-500 to-blue-700" },
          { id: "prova", emoji: "🔬", titulo: "A prova científica dele", cor: "from-amber-500 to-orange-700" },
          { id: "regra", emoji: "📏", titulo: "Uma regra fixa", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "sig",
        feedbackAcerto: "Perfeito! Interpretar = dar SIGNIFICADO a partir da sua vida e cultura.",
        feedbackErro: "Interpretação é o SIGNIFICADO que se dá — não é prova nem regra fixa.",
      },
      {
        id: "q3",
        pergunta: "Aceitar PLURALIDADE religiosa é...",
        fotoUrl: diversidade,
        cards: [
          { id: "resp", emoji: "🤝", titulo: "Respeitar várias leituras", cor: "from-emerald-500 to-green-700" },
          { id: "abandonar", emoji: "🚪", titulo: "Abandonar a própria fé", cor: "from-red-500 to-rose-700" },
          { id: "misturar", emoji: "🌀", titulo: "Misturar tudo à força", cor: "from-slate-400 to-gray-600" },
        ],
        correta: "resp",
        feedbackAcerto: "Isso! Pluralidade = respeitar que existem várias leituras válidas.",
        feedbackErro: "Pluralidade NÃO é abandonar ou misturar. É RESPEITAR o direito de outras leituras existirem.",
      },
    ],
    falaFinal: "Radar afinado. Você entende o valor das muitas leituras.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora:
      "O Brasil é um país onde MUITAS interpretações religiosas convivem. Toque em 5 estados onde essa pluralidade se manifesta em festas populares.",
    instrucao: "Acenda 5 estados de forte pluralidade religiosa",
    missao: {
      tipo: "selecionar",
      siglas: ["BA", "MA", "PE", "MG", "RS"],
      pergunta: "Quais 5 estados combinam fortes tradições cristãs, afro-brasileiras e populares?",
    },
    falaFinal: "Bahia, Maranhão (Bumba-meu-boi), Pernambuco, Minas (barroco + congados), Rio Grande do Sul (imigração diversa). Brasil é mosaico.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma pessoa CONSTRÓI sua interpretação do sagrado? Coloque na ordem.",
    instrucao: "Toque na ordem correta",
    pergunta: "Como se forma uma interpretação?",
    paradas: [
      { id: "familia", emoji: "👨‍👩‍👧", rotulo: "1. FAMÍLIA transmite", descricao: "A pessoa nasce dentro de uma família que já tem suas leituras do sagrado." },
      { id: "comunidade", emoji: "🏘️", rotulo: "2. COMUNIDADE reforça", descricao: "Vizinhos, escola, cidade — todos ajudam a moldar o que se aprende." },
      { id: "vivencia", emoji: "🌱", rotulo: "3. VIVÊNCIA acontece", descricao: "A pessoa vive coisas boas e difíceis, e isso muda como ela entende o sagrado." },
      { id: "reflexao", emoji: "💭", rotulo: "4. REFLEXÃO amadurece", descricao: "Com o tempo, cada um pensa por si e desenvolve sua própria leitura." },
      { id: "respeito", emoji: "🤝", rotulo: "5. RESPEITO ao diferente", descricao: "O adulto consciente reconhece que sua leitura não é a única." },
    ],
    ordemCerta: ["familia", "comunidade", "vivencia", "reflexao", "respeito"],
    feedbackAcerto: "Isso! Família → comunidade → vivência → reflexão → respeito ao diferente.",
    feedbackErro: "Começa em FAMÍLIA, cresce na COMUNIDADE, amadurece na VIVÊNCIA, se aprofunda na REFLEXÃO, e culmina no RESPEITO ao diferente.",
    falaFinal: "5 passos de uma interpretação madura.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez. Aurora fica quieta.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 2 — Muitas Leituras",
    paragrafos: [
      { id: "p1", texto: "Um MESMO acontecimento sagrado pode ser INTERPRETADO de formas diferentes por diferentes tradições. Isso não significa que uma esteja certa e as outras erradas.", chaves: ["interpretado", "diferentes"] },
      { id: "p2", texto: "Cada NARRATIVA sagrada nasce de um povo com sua história, sua língua e sua terra. Ela responde às perguntas daquele povo com a sabedoria daquele povo.", chaves: ["narrativa", "sabedoria"] },
      { id: "p3", texto: "PLURALIDADE religiosa é aceitar que existem muitas leituras válidas convivendo. Não é abandonar a própria fé — é reconhecer o direito das outras existirem.", chaves: ["pluralidade", "convivendo"] },
      { id: "p4", texto: "Ciência e tradição religiosa não são inimigas. Elas respondem a perguntas diferentes: a ciência pergunta 'COMO?'; a religião pergunta 'POR QUÊ?'.", chaves: ["ciência", "tradição"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LEITOR DE NARRATIVAS! Ligue cada trecho à tradição que o guarda.",
    instrucao: "⏱️ Qual tradição guarda essa narrativa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "judaico", emoji: "📖", rotulo: "Judaico-cristã" },
      { id: "indigena", emoji: "🪶", rotulo: "Indígena Guarani" },
      { id: "ioruba", emoji: "🥁", rotulo: "Iorubá / Candomblé" },
      { id: "ciencia", emoji: "🔬", rotulo: "Leitura científica" },
      { id: "budista", emoji: "☸️", rotulo: "Budista" },
      { id: "islamica", emoji: "🌙", rotulo: "Islâmica" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Gênesis", emoji: "📖", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "6 dias + descanso", emoji: "🕯️", cor: "from-yellow-400 to-amber-600" }, contexto: "Narrativa da criação em 6 momentos.", pecaCertaId: "judaico", feedbackAcerto: "Isso! Torá e Bíblia guardam essa narrativa.", feedbackErro: "É a tradição JUDAICO-CRISTÃ: Gênesis, 6 momentos + descanso." },
      { id: "r2", municipioA: { nome: "Nhanderu cantando", emoji: "🪶", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Palavra criadora", emoji: "🗣️", cor: "from-teal-400 to-emerald-600" }, contexto: "Criador que canta e faz surgir tudo.", pecaCertaId: "indigena", feedbackAcerto: "Perfeito! Guarani: Nhanderu cria cantando.", feedbackErro: "É a tradição INDÍGENA GUARANI: Nhanderu canta e o mundo surge." },
      { id: "r3", municipioA: { nome: "Obatalá", emoji: "⚪", cor: "from-slate-300 to-slate-500" }, municipioB: { nome: "Orixás cuidam da natureza", emoji: "🌊", cor: "from-sky-400 to-blue-600" }, contexto: "Divindades responsáveis por partes da natureza.", pecaCertaId: "ioruba", feedbackAcerto: "Isso! Candomblé de matriz iorubá.", feedbackErro: "É a tradição IORUBÁ: Olodumaré e os orixás cuidam da natureza." },
      { id: "r4", municipioA: { nome: "Big Bang", emoji: "💥", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "13,8 bilhões de anos", emoji: "🔭", cor: "from-indigo-400 to-purple-600" }, contexto: "Explicação do início do universo por evidências.", pecaCertaId: "ciencia", feedbackAcerto: "Perfeito! Leitura científica — não anula tradição, responde outra pergunta.", feedbackErro: "É a LEITURA CIENTÍFICA: Big Bang, 13,8 bilhões de anos." },
      { id: "r5", municipioA: { nome: "Buda sob a figueira", emoji: "🌳", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Iluminação", emoji: "☸️", cor: "from-amber-400 to-yellow-600" }, contexto: "Um mestre encontra a compreensão profunda.", pecaCertaId: "budista", feedbackAcerto: "Isso! Buda alcançou a iluminação sob a árvore Bodhi.", feedbackErro: "É a tradição BUDISTA: Siddhartha vira Buda sob a figueira Bodhi." },
      { id: "r6", municipioA: { nome: "Alcorão", emoji: "📕", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Revelação a Muhammad", emoji: "🌙", cor: "from-green-400 to-emerald-600" }, contexto: "Livro sagrado revelado durante 23 anos.", pecaCertaId: "islamica", feedbackAcerto: "Perfeito! Alcorão, revelado ao Profeta Muhammad.", feedbackErro: "É a tradição ISLÂMICA: o Alcorão foi revelado a Muhammad." },
    ],
    falaFinal: "6 narrativas reconhecidas! Você vira Leitor de Tradições.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza rápida: 2 tipos de resposta que as tradições dão às grandes perguntas.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "significado", rotulo: "Respostas de SIGNIFICADO (~60%)", emoji: "💡", percentual: 60, cor: "#f59e0b", descricao: "Tradições religiosas focam em POR QUÊ existimos, o que tem valor, como viver bem — perguntas de sentido.", exemplos: ["🕯️ Por que sofremos?", "🌱 Qual é o propósito?"] },
      { id: "processo", rotulo: "Respostas de PROCESSO (~40%)", emoji: "🔬", percentual: 40, cor: "#3b82f6", descricao: "A ciência foca em COMO as coisas funcionam — mede, testa e explica por evidências.", exemplos: ["🌌 Como o universo se formou?", "🧬 Como a vida evolui?"] },
    ],
    falaFinal: "Perguntas diferentes, respostas diferentes. Não competem — se completam.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia LEITOR DE TRADIÇÕES.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Se duas tradições contam a criação do mundo de jeitos diferentes:", opcoes: [{ id: "a", texto: "Uma tem que estar mentindo", correta: false }, { id: "b", texto: "Ambas podem ter valor pra quem as guarda", correta: true }, { id: "c", texto: "A mais nova sempre vence", correta: false }], feedbackAcerto: "Isso! Cada uma lê o mistério com sua sabedoria.", feedbackErro: "Diferenças não são mentiras. Cada tradição tem seu valor." },
      { id: "av2", pergunta: "Ciência e religião:", opcoes: [{ id: "a", texto: "São sempre inimigas", correta: false }, { id: "b", texto: "Respondem perguntas diferentes: COMO e POR QUÊ", correta: true }, { id: "c", texto: "Falam da mesma coisa", correta: false }], feedbackAcerto: "Perfeito! COMO ≠ POR QUÊ. Se completam.", feedbackErro: "Ciência pergunta COMO; religião pergunta POR QUÊ. Não são inimigas." },
      { id: "av3", pergunta: "Aceitar pluralidade religiosa é:", opcoes: [{ id: "a", texto: "Abandonar a própria fé", correta: false }, { id: "b", texto: "Reconhecer o direito de outras leituras existirem", correta: true }, { id: "c", texto: "Achar que tudo é igual", correta: false }], feedbackAcerto: "Isso! Reconhecer o direito das outras leituras existirem.", feedbackErro: "Pluralidade NÃO é abandonar nem misturar. É reconhecer o direito das outras." },
    ],
    selo: { nome: "Leitor de Tradições", subtitulo: "Insígnia da Pluralidade", emoji: "📖", cor: "from-sky-400 to-blue-600" },
    falaFinal: "Insígnia conquistada! Você reconhece que existem muitas leituras — e todas merecem escuta.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Leitor de Tradições" },
};

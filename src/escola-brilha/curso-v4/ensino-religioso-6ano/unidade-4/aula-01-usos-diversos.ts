import type { AulaGeoV1 } from "../../types";
import { url as usoColetivo } from "@/assets/ensino-religioso-6ano/u4-uso-coletivo.jpg.asset.json";
import { url as sutras } from "@/assets/ensino-religioso-6ano/u2-sutras.jpg.asset.json";
import { url as alcorao } from "@/assets/ensino-religioso-6ano/u1-alcorao.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 4 · Aula 01
 * "O Mesmo Texto, Muitos Usos" — EF06ER04
 * NÃO CONFESSIONAL. Foco: os textos são usados de MANEIRAS diversas pelas tradições
 * (leitura, canto, meditação, oração, dança, arte).
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-usos-diversos",
  titulo: "O Mesmo Texto, Muitos Usos",
  iconeTrilha: "🎼",
  bncc: ["EF06ER04"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: uma leitura coletiva em silêncio respeitoso.",
    mapaUrl: usoColetivo,
    imagemDestaqueUrl: usoColetivo,
    aurora:
      "Decifrador, mesmo texto pode ser usado de mil formas. Um versículo da Bíblia pode ser LIDO em silêncio, CANTADO num coral, PINTADO num quadro, TATUADO no braço, ORADO em voz alta, DEBATIDO num estudo bíblico. Um trecho do Alcorão pode ser RECITADO em melodia, CALIGRAFADO em azulejos. Um sutra pode virar MANTRA em meditação.",
    falaFinal: "Nesta aula, vamos ver as MUITAS FORMAS de usar um mesmo texto sagrado.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta: "Um texto sagrado só pode ser LIDO — certo ou errado?",
    opcoes: [
      { id: "errado", titulo: "ERRADO — vira canto, oração, arte, dança", subtitulo: "muitos usos possíveis", emoji: "🎼", cor: "from-emerald-400 to-teal-600" },
      { id: "certo", titulo: "CERTO — só serve pra ler", subtitulo: "leitura silenciosa", emoji: "📖", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "errado",
    feedbackAcerto: "Isso! O mesmo texto ganha mil formas dependendo da tradição e do momento.",
    feedbackErro: "Errado. Um texto sagrado vira CANTO, ORAÇÃO, ARTE, DANÇA, MEDITAÇÃO — muito além da leitura silenciosa.",
    falaFinal: "Muitos usos. Bora ver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "liturgia", capa: "1. Liturgia", emoji: "🕯️", cor: "from-amber-500 to-orange-700", conteudo: "LITURGIA é o CONJUNTO ORGANIZADO de gestos, palavras e leituras que uma comunidade religiosa realiza durante uma celebração. Cada tradição tem a sua.", exemplo: "Ex.: a missa católica, o Shabat judaico, a oração muçulmana das 5 vezes ao dia.", fotoUrl: usoColetivo },
      { id: "recitacao", capa: "2. Recitação", emoji: "🎵", cor: "from-emerald-500 to-green-700", conteudo: "RECITAÇÃO é falar o texto EM VOZ ALTA, muitas vezes com melodia e ritmo. Não é canto normal — é uma forma treinada de dar corpo às palavras.", exemplo: "Ex.: a recitação do Alcorão (tajwid) é uma arte com regras precisas de pronúncia.", fotoUrl: alcorao },
      { id: "meditacao", capa: "3. Meditação com texto", emoji: "🧘", cor: "from-sky-500 to-blue-700", conteudo: "MEDITAÇÃO com texto é USAR uma frase ou parágrafo pra silenciar a mente e contemplar. A pessoa repete internamente ou reflete lentamente sobre cada palavra.", exemplo: "Ex.: mantras budistas; lectio divina cristã; contemplação de versículos.", fotoUrl: sutras },
    ],
    falaFinal: "Liturgia, recitação, meditação. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 formas concretas de USAR textos sagrados. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: usoColetivo,
    pontos: [
      { id: "leitura", x: 22, y: 30, emoji: "📖", cor: "from-sky-500 to-blue-700", titulo: "LEITURA COLETIVA", texto: "Em quase todas as tradições, o texto é LIDO EM VOZ ALTA numa celebração. Na sinagoga, o rabino puxa a Torá; na missa, o padre lê o Evangelho; na mesquita, o imã recita o Alcorão. Todos ouvem juntos.", fotoUrl: usoColetivo },
      { id: "canto", x: 70, y: 30, emoji: "🎼", cor: "from-emerald-500 to-green-700", titulo: "CANTO E RECITAÇÃO", texto: "Muitos textos VIRAM CANTO. Salmos são cantados em corais; sutras budistas são entoados em melodias antigas; a recitação do Alcorão (tajwid) tem regras rígidas de melodia. A palavra vira som pra tocar mais fundo.", fotoUrl: alcorao },
      { id: "meditacao", x: 30, y: 72, emoji: "🧘", cor: "from-purple-500 to-fuchsia-700", titulo: "MEDITAÇÃO E CONTEMPLAÇÃO", texto: "Uma frase se torna MANTRA. Um versículo vira objeto de contemplação silenciosa. Monges cristãos praticam a 'lectio divina'; budistas repetem 'Om mani padme hum'. A palavra vira portal pra dentro.", fotoUrl: sutras },
      { id: "danca-arte", x: 76, y: 72, emoji: "💃", cor: "from-red-500 to-rose-700", titulo: "DANÇA, ARTE E CORPO", texto: "No candomblé, cantos sagrados VIRAM DANÇA dos orixás. Em tradições sufis (islâmicas), a recitação vira giro do corpo. Em tradições hindus, versos dos Vedas são gravados em templos. A palavra vira gesto, imagem, pedra.", fotoUrl: oralidade },
    ],
    falaFinal: "4 formas. Um só texto, mil vidas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "LITURGIA é:", fotoUrl: usoColetivo, cards: [
        { id: "conj", emoji: "🕯️", titulo: "Conjunto organizado de gestos e leituras", cor: "from-amber-500 to-orange-700" },
        { id: "musica", emoji: "🎸", titulo: "Um estilo de música", cor: "from-slate-400 to-gray-600" },
        { id: "livro", emoji: "📕", titulo: "Um único livro sagrado", cor: "from-sky-500 to-blue-700" },
      ], correta: "conj", feedbackAcerto: "Isso! Liturgia = a organização da celebração.", feedbackErro: "LITURGIA é o CONJUNTO ORGANIZADO de gestos, palavras e leituras de uma celebração." },
      { id: "q2", pergunta: "A recitação do Alcorão em melodia (tajwid):", fotoUrl: alcorao, cards: [
        { id: "arte", emoji: "🎵", titulo: "É uma arte com regras precisas", cor: "from-emerald-500 to-green-700" },
        { id: "improviso", emoji: "🎤", titulo: "É improviso livre", cor: "from-slate-400 to-gray-600" },
        { id: "silenciosa", emoji: "🤫", titulo: "É sempre silenciosa", cor: "from-red-500 to-rose-700" },
      ], correta: "arte", feedbackAcerto: "Perfeito! Tajwid tem regras rígidas de pronúncia e melodia.", feedbackErro: "Tajwid é ARTE com regras precisas — não é improviso nem silenciosa." },
      { id: "q3", pergunta: "Cantos sagrados no candomblé viram:", fotoUrl: oralidade, cards: [
        { id: "danca", emoji: "💃", titulo: "Dança dos orixás", cor: "from-red-500 to-rose-700" },
        { id: "esporte", emoji: "⚽", titulo: "Esporte competitivo", cor: "from-slate-400 to-gray-600" },
        { id: "novela", emoji: "📺", titulo: "Novela de TV", cor: "from-sky-500 to-blue-700" },
      ], correta: "danca", feedbackAcerto: "Isso! No candomblé, cantos e danças formam a celebração.", feedbackErro: "Cantos sagrados do candomblé viram DANÇA dos orixás." },
    ],
    falaFinal: "Radar afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados com forte tradição MUSICAL religiosa (cantos, corais, atabaques).",
    instrucao: "Acenda 5 estados de forte música religiosa",
    missao: { tipo: "selecionar", siglas: ["MG", "BA", "PE", "MA", "RS"], pergunta: "Quais 5 estados brasileiros têm forte tradição de música religiosa?" },
    falaFinal: "MG (barroco mineiro), BA (afro), PE (frevo/maracatu de baque virado), MA (tambor de crioula), RS (imigrante). Brasil canta orando.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um texto sagrado ganha MÚLTIPLOS usos ao longo do tempo? Ordene.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da leitura à vida cotidiana:",
    paradas: [
      { id: "leitura", emoji: "📖", rotulo: "1. Nasce como LEITURA", descricao: "Alguém escreve e passa a ler em voz alta pra comunidade." },
      { id: "melodia", emoji: "🎵", rotulo: "2. Ganha MELODIA", descricao: "Comunidade começa a cantar o texto — fica mais fácil lembrar." },
      { id: "gesto", emoji: "🙏", rotulo: "3. Vira GESTO ritual", descricao: "Palavras acompanham movimentos: erguer as mãos, ajoelhar, dançar." },
      { id: "arte", emoji: "🎨", rotulo: "4. Aparece na ARTE", descricao: "É pintado em quadros, esculpido em pedra, caligrafado em azulejos." },
      { id: "cotidiano", emoji: "🏠", rotulo: "5. Entra no COTIDIANO", descricao: "Vira frase de abençoar comida, cumprimentar, começar o dia. Vira jeito de viver." },
    ],
    ordemCerta: ["leitura", "melodia", "gesto", "arte", "cotidiano"],
    feedbackAcerto: "Isso! Leitura → melodia → gesto → arte → cotidiano.",
    feedbackErro: "É LEITURA → MELODIA → GESTO → ARTE → COTIDIANO. Um texto vai se espalhando por camadas da vida.",
    falaFinal: "5 camadas. Texto vira modo de vida.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 4 — Muitos Usos",
    paragrafos: [
      { id: "p1", texto: "Um mesmo TEXTO SAGRADO pode ser usado de MUITAS maneiras diferentes por uma mesma tradição — lido, cantado, meditado, dançado, pintado, tatuado, orado.", chaves: ["muitas", "diferentes"] },
      { id: "p2", texto: "LITURGIA é o conjunto organizado de gestos, palavras e leituras que uma comunidade faz nas celebrações. Cada tradição tem a sua estrutura própria.", chaves: ["liturgia", "organizado"] },
      { id: "p3", texto: "RECITAÇÃO e CANTO transformam palavras em SOM que toca o corpo. Não é a mesma coisa que leitura silenciosa — é outra forma de fazer o texto entrar.", chaves: ["recitação", "som"] },
      { id: "p4", texto: "MEDITAÇÃO com texto (mantras, lectio divina, contemplação) usa a palavra como PORTAL de silêncio. A mesma frase pode ser ferramenta muito diferente conforme o uso.", chaves: ["meditação", "portal"] },
    ],
    falaFinal: "Leu tudo?",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo MESTRE DOS USOS! Ligue cada prática ao TIPO DE USO textual.",
    instrucao: "⏱️ Que tipo de uso é esse?",
    duracaoSegundos: 12,
    pecas: [
      { id: "leitura", emoji: "📖", rotulo: "Leitura coletiva" },
      { id: "canto", emoji: "🎼", rotulo: "Canto litúrgico" },
      { id: "recitacao", emoji: "🎵", rotulo: "Recitação melódica" },
      { id: "meditacao", emoji: "🧘", rotulo: "Meditação/mantra" },
      { id: "danca", emoji: "💃", rotulo: "Dança sagrada" },
      { id: "arte", emoji: "🎨", rotulo: "Arte/caligrafia" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Padre lê o Evangelho", emoji: "📖", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Congregação escuta", emoji: "👥", cor: "from-indigo-400 to-blue-600" }, contexto: "Momento da missa.", pecaCertaId: "leitura", feedbackAcerto: "Isso! Leitura coletiva.", feedbackErro: "É LEITURA COLETIVA — o padre lê e todos escutam." },
      { id: "r2", municipioA: { nome: "Coral canta salmos", emoji: "🎼", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Igreja em pé", emoji: "⛪", cor: "from-teal-400 to-emerald-600" }, contexto: "Momento musical da celebração.", pecaCertaId: "canto", feedbackAcerto: "Perfeito! Canto litúrgico.", feedbackErro: "É CANTO LITÚRGICO — texto sagrado virado canção." },
      { id: "r3", municipioA: { nome: "Imã recita Alcorão", emoji: "🎵", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Regras de tajwid", emoji: "☪️", cor: "from-green-400 to-emerald-600" }, contexto: "Melodia treinada de recitar em árabe.", pecaCertaId: "recitacao", feedbackAcerto: "Isso! Recitação melódica.", feedbackErro: "É RECITAÇÃO MELÓDICA — o tajwid segue regras estritas." },
      { id: "r4", municipioA: { nome: "Repetição de 'Om mani...'", emoji: "🧘", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Mala de contas", emoji: "📿", cor: "from-violet-400 to-purple-600" }, contexto: "Prática budista silenciosa.", pecaCertaId: "meditacao", feedbackAcerto: "Perfeito! Meditação/mantra.", feedbackErro: "É MEDITAÇÃO/MANTRA — repetição pra silenciar a mente." },
      { id: "r5", municipioA: { nome: "Roda de Iemanjá", emoji: "💃", cor: "from-blue-400 to-sky-600" }, municipioB: { nome: "Canto vira coreografia", emoji: "🥁", cor: "from-cyan-400 to-blue-600" }, contexto: "Terreiro em festa.", pecaCertaId: "danca", feedbackAcerto: "Isso! Dança sagrada.", feedbackErro: "É DANÇA SAGRADA — o canto vira coreografia dos orixás." },
      { id: "r6", municipioA: { nome: "Versículo em azulejo", emoji: "🎨", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Caligrafia árabe", emoji: "🖋️", cor: "from-yellow-400 to-amber-600" }, contexto: "Texto vira decoração de mesquita.", pecaCertaId: "arte", feedbackAcerto: "Boa! Arte/caligrafia.", feedbackErro: "É ARTE/CALIGRAFIA — texto vira imagem sagrada." },
    ],
    falaFinal: "6 usos dominados! Você virou Mestre dos Usos.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: dois grandes contextos de uso dos textos sagrados.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "coletivo", rotulo: "USO COLETIVO em celebrações (~65%)", emoji: "👥", percentual: 65, cor: "#3b82f6", descricao: "Leitura pública, canto de coral, recitação por sacerdote, dança sagrada, arte e arquitetura em templos.", exemplos: ["📖 Missa", "🎼 Coral", "💃 Dança", "🕌 Caligrafia"] },
      { id: "individual", rotulo: "USO INDIVIDUAL / cotidiano (~35%)", emoji: "🙏", percentual: 35, cor: "#10b981", descricao: "Oração silenciosa, meditação com mantras, leitura pessoal, bênçãos de comida e frases do dia a dia.", exemplos: ["🧘 Mantra", "📖 Lectio", "🍞 Bênção"] },
    ],
    falaFinal: "Coletivo, individual, arte, cotidiano. Um texto ocupa a vida inteira.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Um texto sagrado é usado APENAS pra leitura silenciosa?", opcoes: [
        { id: "a", texto: "Sim", correta: false },
        { id: "b", texto: "Não — vira canto, oração, arte, dança, cotidiano", correta: true },
        { id: "c", texto: "Só serve pra decorar", correta: false },
      ], feedbackAcerto: "Isso! Um texto vive de MIL formas nas tradições.", feedbackErro: "Não. O texto sagrado ocupa CANTO, ARTE, DANÇA, COTIDIANO — muito além da leitura silenciosa." },
      { id: "av2", pergunta: "LITURGIA é:", opcoes: [
        { id: "a", texto: "Um estilo de música pop", correta: false },
        { id: "b", texto: "O conjunto organizado de gestos, palavras e leituras de uma celebração", correta: true },
        { id: "c", texto: "Um livro sagrado específico", correta: false },
      ], feedbackAcerto: "Perfeito! Liturgia = organização da celebração.", feedbackErro: "LITURGIA é o conjunto organizado de gestos, palavras e leituras de uma celebração religiosa." },
      { id: "av3", pergunta: "Recitação, canto e meditação com texto são:", opcoes: [
        { id: "a", texto: "Formas inferiores de usar o texto", correta: false },
        { id: "b", texto: "Maneiras diferentes e legítimas de usar o texto sagrado", correta: true },
        { id: "c", texto: "Modismos modernos sem valor", correta: false },
      ], feedbackAcerto: "Isso! São formas legítimas — cada tradição valoriza combinações diferentes.", feedbackErro: "São formas DIFERENTES e LEGÍTIMAS de usar textos sagrados. Nenhuma é 'menor'." },
    ],
    selo: { nome: "Mestre dos Usos", subtitulo: "Insígnia da Liturgia", emoji: "🎼", cor: "from-amber-400 to-orange-600" },
    falaFinal: "Insígnia conquistada! Você entende as muitas vidas de um mesmo texto.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Mestre dos Usos" },
};

import type { AulaGeoV1 } from "../../types";
import { url as simbolos } from "@/assets/ensino-religioso-5ano/u6-simbolos.jpg.asset.json";
import { url as mandala } from "@/assets/ensino-religioso-5ano/u6-mandala.jpg.asset.json";
import { url as textos } from "@/assets/ensino-religioso-5ano/u2-textos.jpg.asset.json";
import { url as diversidade } from "@/assets/ensino-religioso-5ano/01-diversidade.jpg.asset.json";
import { url as afro } from "@/assets/ensino-religioso-5ano/06-afro-brasileira.jpg.asset.json";

/**
 * Ensino Religioso · 5º Ano · Unidade 6 · Aula 01
 * "Mitos, Ritos, Símbolos e Textos Sagrados" — EF05ER06
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-mitos-ritos-simbolos",
  titulo: "As 4 Linguagens do Sagrado",
  iconeTrilha: "✨",
  bncc: ["EF05ER06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: 4 objetos, 4 tradições, 4 formas de dizer o sagrado.",
    mapaUrl: simbolos,
    imagemDestaqueUrl: simbolos,
    aurora:
      "Explorador, olha essa mesa. Uma vela, um candelabro pequeno, um colar de miçangas, uma pena, um livro aberto. Cada objeto é uma forma diferente de uma tradição DIZER o que ela sente sobre o sagrado. Nenhuma tradição usa só palavras — todas usam MITOS, RITOS, SÍMBOLOS e TEXTOS.",
    falaFinal: "Nesta aula vamos entender essas 4 grandes LINGUAGENS que toda tradição religiosa usa.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: um MITO religioso é a mesma coisa que uma MENTIRA?",
    pergunta: "Mito = mentira?",
    opcoes: [
      { id: "nao", titulo: "NÃO — mito é história com SENTIDO", subtitulo: "carrega verdade profunda", emoji: "📜", cor: "from-amber-400 to-orange-600" },
      { id: "sim", titulo: "Sim, é sempre invenção", subtitulo: "não vale nada", emoji: "❌", cor: "from-slate-400 to-gray-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! MITO tem outro sentido nas ciências humanas — é história com verdade profunda.",
    feedbackErro: "No estudo das religiões, MITO NÃO é mentira. É história que carrega uma verdade profunda sobre o mundo.",
    falaFinal: "Palavra 'mito' é técnica aqui. Bora entender direito.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "As 4 linguagens do sagrado.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "mito", capa: "1. Mito", emoji: "📜", cor: "from-amber-500 to-orange-700", conteudo: "MITO é uma NARRATIVA sagrada que uma tradição usa pra responder às grandes perguntas: de onde viemos? Por que existimos? Não é mentira — é história que carrega verdade em forma de imagem.", exemplo: "Ex.: o mito da criação, a história dos orixás, a lenda dos ancestrais.", fotoUrl: textos },
      { id: "rito", capa: "2. Rito", emoji: "🕯️", cor: "from-red-500 to-rose-700", conteudo: "RITO é um GESTO ORGANIZADO que se repete, marcando um momento sagrado. Acender uma vela, dar as mãos antes da refeição, jejuar, batizar. O rito faz o sagrado ACONTECER.", exemplo: "Ex.: acender a menorá no Hanuká, benzer com ervas, dançar no terreiro.", fotoUrl: afro },
      { id: "simbolo", capa: "3. Símbolo", emoji: "✨", cor: "from-sky-500 to-blue-700", conteudo: "SÍMBOLO é uma IMAGEM ou OBJETO que representa algo maior. A cruz, a lua crescente, a menorá, a pena, o atabaque — cada um diz muito sem precisar de palavras.", exemplo: "Ex.: uma pomba pode representar paz em várias tradições.", fotoUrl: simbolos },
      { id: "texto", capa: "4. Texto sagrado", emoji: "📖", cor: "from-emerald-500 to-green-700", conteudo: "TEXTO SAGRADO é o CONJUNTO ESCRITO que uma tradição guarda como referência. Bíblia, Torá, Alcorão, Vedas, Livro de Mórmon. Nem toda tradição tem — indígenas e afros usam oralidade.", exemplo: "Ex.: Alcorão no islamismo; Bíblia no cristianismo.", fotoUrl: textos },
    ],
    falaFinal: "Mito, rito, símbolo, texto. As 4 linguagens.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Vamos ver as 4 linguagens em ação em tradições diferentes.",
    instrucao: "Toque em cada balão",
    mapaUrl: simbolos,
    pontos: [
      { id: "mito", x: 25, y: 30, emoji: "📜", cor: "from-amber-500 to-orange-700", titulo: "MITO — exemplo: Iemanjá", texto: "Nas tradições afro-brasileiras, Iemanjá é a mãe dos peixes e das águas. Seu mito ensina que somos como as águas: fluímos, cuidamos, acolhemos. Não é mentira — é sabedoria em forma de história.", fotoUrl: afro },
      { id: "rito", x: 70, y: 30, emoji: "🕯️", cor: "from-red-500 to-rose-700", titulo: "RITO — exemplo: acender vela", texto: "Cristãos, judeus, budistas, umbandistas acendem velas em momentos importantes. O gesto é simples, mas organiza o silêncio, a atenção, o pedido. O rito prepara o coração.", fotoUrl: diversidade },
      { id: "simbolo", x: 30, y: 70, emoji: "✨", cor: "from-sky-500 to-blue-700", titulo: "SÍMBOLO — exemplo: mandala", texto: "A mandala (círculo com padrão) é usada em tradições budistas, hindus e indígenas. Representa o UNIVERSO em harmonia. Contemplar uma mandala é meditar sobre o todo.", fotoUrl: mandala },
      { id: "texto", x: 75, y: 68, emoji: "📖", cor: "from-emerald-500 to-green-700", titulo: "TEXTO SAGRADO — exemplo: livros", texto: "Torá, Bíblia, Alcorão, Bhagavad Gita, Livro dos Mórmons. Cada tradição escrita guarda seu texto com muito cuidado, num lugar de honra, e o lê em voz alta nas celebrações.", fotoUrl: textos },
    ],
    falaFinal: "4 linguagens, uma coisa em comum: dizer o que só palavras comuns não dão conta.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "MITO religioso é:", fotoUrl: textos, cards: [{ id: "hist", emoji: "📜", titulo: "História com sentido profundo", cor: "from-amber-500 to-orange-700" }, { id: "ment", emoji: "❌", titulo: "Uma mentira comprovada", cor: "from-red-500 to-rose-700" }, { id: "piada", emoji: "😂", titulo: "Uma piada antiga", cor: "from-slate-400 to-gray-600" }], correta: "hist", feedbackAcerto: "Isso! Mito é história com verdade profunda.", feedbackErro: "Mito NÃO é mentira. É história que carrega sabedoria em forma de imagem." },
      { id: "q2", pergunta: "Acender uma vela é exemplo de:", fotoUrl: diversidade, cards: [{ id: "rito", emoji: "🕯️", titulo: "Rito (gesto organizado)", cor: "from-red-500 to-rose-700" }, { id: "mito", emoji: "📜", titulo: "Mito", cor: "from-amber-500 to-orange-700" }, { id: "texto", emoji: "📖", titulo: "Texto sagrado", cor: "from-emerald-500 to-green-700" }], correta: "rito", feedbackAcerto: "Perfeito! Rito organiza o momento sagrado.", feedbackErro: "Acender vela é um RITO: gesto que se repete pra marcar o sagrado." },
      { id: "q3", pergunta: "Toda tradição religiosa tem um TEXTO SAGRADO escrito?", fotoUrl: mandala, cards: [{ id: "nao", emoji: "🌍", titulo: "Não — muitas usam só oralidade", cor: "from-emerald-500 to-green-700" }, { id: "sim", emoji: "📚", titulo: "Sim, todas têm", cor: "from-sky-500 to-blue-700" }, { id: "digital", emoji: "💻", titulo: "Só as digitais", cor: "from-slate-400 to-gray-600" }], correta: "nao", feedbackAcerto: "Isso! Muitas indígenas e afros guardam pela ORALIDADE.", feedbackErro: "Nem toda tradição tem texto escrito. Muitas guardam só pela ORALIDADE." },
    ],
    falaFinal: "Radar afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados onde SÍMBOLOS religiosos populares aparecem forte na paisagem urbana e rural.",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["MG", "BA", "CE", "PE", "SP"], pergunta: "Quais 5 estados são famosos por igrejas históricas, terreiros e festas com símbolos religiosos visíveis?" },
    falaFinal: "Minas (barroco), Bahia (Bonfim), Ceará (Padre Cícero), Pernambuco (Frevo e Xangô), São Paulo (mosaico total).",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Ordene: como um rito religioso se organiza (usando o exemplo do jantar de Sabá judaico).",
    instrucao: "Toque na ordem correta",
    pergunta: "Como se organiza um rito?",
    paradas: [
      { id: "prep", emoji: "🍽️", rotulo: "1. PREPARAÇÃO", descricao: "A família prepara a mesa com pão trançado (chalá), vinho e velas antes do sol se pôr na sexta-feira." },
      { id: "reun", emoji: "👨‍👩‍👧", rotulo: "2. REUNIÃO", descricao: "Todos se reúnem à mesa no momento certo, com roupas melhores." },
      { id: "vela", emoji: "🕯️", rotulo: "3. GESTO simbólico", descricao: "A mãe acende as duas velas de Shabat e faz uma bênção com as mãos." },
      { id: "palavra", emoji: "🗣️", rotulo: "4. PALAVRA sagrada", descricao: "Recita-se a bênção sobre o vinho e sobre o pão em hebraico." },
      { id: "com", emoji: "🍞", rotulo: "5. COMUNHÃO", descricao: "Todos compartilham o pão e o vinho e começam a refeição — o rito une a família." },
    ],
    ordemCerta: ["prep", "reun", "vela", "palavra", "com"],
    feedbackAcerto: "Isso! Preparação → reunião → gesto → palavra → comunhão.",
    feedbackErro: "Todo rito segue: PREPARAÇÃO → REUNIÃO → GESTO → PALAVRA → COMUNHÃO.",
    falaFinal: "5 passos, uma estrutura universal.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Explorador de Tradições",
    subtitulo: "Página 6 — As 4 Linguagens",
    paragrafos: [
      { id: "p1", texto: "Toda tradição religiosa se expressa por quatro grandes LINGUAGENS: MITOS, RITOS, SÍMBOLOS e TEXTOS sagrados.", chaves: ["mitos", "ritos", "símbolos", "textos"] },
      { id: "p2", texto: "MITO não é mentira. É narrativa que responde às grandes perguntas com sabedoria. RITO é gesto organizado que faz o sagrado acontecer.", chaves: ["narrativa", "gesto"] },
      { id: "p3", texto: "SÍMBOLO é imagem que representa algo maior — cruz, lua, menorá, mandala, pena. TEXTO SAGRADO é o conjunto escrito guardado com honra pelas tradições que têm escrita.", chaves: ["símbolo", "escrito"] },
      { id: "p4", texto: "Nem toda tradição tem texto escrito. Indígenas, afros e ciganas usam principalmente mitos, ritos e símbolos guardados pela ORALIDADE — e isso é igualmente válido.", chaves: ["oralidade", "válido"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo LEITOR DE LINGUAGENS! Classifique cada elemento nas 4 linguagens.",
    instrucao: "⏱️ Qual linguagem do sagrado é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "mito", emoji: "📜", rotulo: "Mito" },
      { id: "rito", emoji: "🕯️", rotulo: "Rito" },
      { id: "simbolo", emoji: "✨", rotulo: "Símbolo" },
      { id: "texto", emoji: "📖", rotulo: "Texto sagrado" },
      { id: "musica", emoji: "🎵", rotulo: "Canto sagrado" },
      { id: "espaco", emoji: "🏛️", rotulo: "Espaço sagrado" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "História da criação", emoji: "🌍", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Gênesis, Nhanderu", emoji: "📜", cor: "from-yellow-400 to-amber-600" }, contexto: "Narrativa sobre o início do mundo.", pecaCertaId: "mito", feedbackAcerto: "Isso! É MITO — narrativa fundadora.", feedbackErro: "É MITO: narrativa sagrada sobre o início." },
      { id: "r2", municipioA: { nome: "Acender vela", emoji: "🕯️", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Rezar em voz alta", emoji: "🙏", cor: "from-orange-400 to-red-600" }, contexto: "Gesto organizado repetido em ocasiões sagradas.", pecaCertaId: "rito", feedbackAcerto: "Perfeito! É RITO — gesto que faz o sagrado acontecer.", feedbackErro: "É RITO: gesto organizado que se repete." },
      { id: "r3", municipioA: { nome: "Cruz cristã", emoji: "✝️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Lua crescente islâmica", emoji: "🌙", cor: "from-emerald-400 to-green-600" }, contexto: "Imagem que representa uma tradição sem precisar de palavras.", pecaCertaId: "simbolo", feedbackAcerto: "Isso! É SÍMBOLO — imagem que representa.", feedbackErro: "É SÍMBOLO: imagem que representa algo maior." },
      { id: "r4", municipioA: { nome: "Torá", emoji: "📜", cor: "from-blue-400 to-indigo-600" }, municipioB: { nome: "Alcorão", emoji: "📕", cor: "from-emerald-400 to-teal-600" }, contexto: "Conjunto escrito guardado com honra.", pecaCertaId: "texto", feedbackAcerto: "Perfeito! É TEXTO SAGRADO.", feedbackErro: "É TEXTO SAGRADO: conjunto escrito guardado com honra." },
      { id: "r5", municipioA: { nome: "Ave-Maria cantada", emoji: "🎵", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Canto no terreiro", emoji: "🥁", cor: "from-red-400 to-rose-600" }, contexto: "Melodia que expressa devoção ou invoca o sagrado.", pecaCertaId: "musica", feedbackAcerto: "Isso! Canto sagrado — linguagem forte de várias tradições.", feedbackErro: "É CANTO SAGRADO: melodia que expressa devoção." },
      { id: "r6", municipioA: { nome: "Igreja / templo", emoji: "⛪", cor: "from-slate-300 to-slate-500" }, municipioB: { nome: "Terreiro / mesquita", emoji: "🕌", cor: "from-emerald-400 to-green-600" }, contexto: "Lugar preparado especialmente pra encontros sagrados.", pecaCertaId: "espaco", feedbackAcerto: "Perfeito! ESPAÇO SAGRADO — lugar preparado.", feedbackErro: "É ESPAÇO SAGRADO: lugar preparado pra encontro com o sagrado." },
    ],
    falaFinal: "6 linguagens dominadas.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as tradições MISTURAM as 4 linguagens?",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "todas", rotulo: "Usam AS 4 linguagens (~65%)", emoji: "✨", percentual: 65, cor: "#8b5cf6", descricao: "A maioria das tradições combina mitos + ritos + símbolos + textos. Cristianismo, islamismo, judaísmo, hinduísmo, budismo.", exemplos: ["📜 Mito", "🕯️ Rito", "✨ Símbolo", "📖 Texto"] },
      { id: "sem_texto", rotulo: "Usam 3 (sem texto escrito) (~35%)", emoji: "🌳", percentual: 35, cor: "#059669", descricao: "Tradições indígenas, afro-brasileiras e ciganas usam mitos + ritos + símbolos guardados pela oralidade, sem texto escrito oficial.", exemplos: ["🪶 Indígena", "🥁 Afro", "🎪 Cigana"] },
    ],
    falaFinal: "4 ou 3 linguagens — todas legítimas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Um MITO religioso é:", opcoes: [{ id: "a", texto: "Uma mentira comprovada", correta: false }, { id: "b", texto: "Uma narrativa sagrada com verdade profunda", correta: true }, { id: "c", texto: "Só uma piada", correta: false }], feedbackAcerto: "Isso! Mito carrega verdade em forma de imagem.", feedbackErro: "MITO é narrativa com verdade profunda — não é mentira." },
      { id: "av2", pergunta: "Acender uma vela numa cerimônia é um exemplo de:", opcoes: [{ id: "a", texto: "Rito — gesto organizado sagrado", correta: true }, { id: "b", texto: "Texto sagrado", correta: false }, { id: "c", texto: "Mito", correta: false }], feedbackAcerto: "Perfeito! Rito organiza o sagrado.", feedbackErro: "É RITO: gesto que se repete pra marcar o sagrado." },
      { id: "av3", pergunta: "Nem toda tradição tem TEXTO escrito. Isso significa que:", opcoes: [{ id: "a", texto: "Ela vale menos", correta: false }, { id: "b", texto: "Ela guarda o sagrado por outras linguagens — igualmente válidas", correta: true }, { id: "c", texto: "Ela precisa escrever logo", correta: false }], feedbackAcerto: "Isso! Oralidade e ritos são igualmente válidos.", feedbackErro: "Não vale menos. Guarda o sagrado por outras linguagens igualmente válidas." },
    ],
    selo: { nome: "Leitor de Linguagens", subtitulo: "Insígnia das 4 Linguagens", emoji: "✨", cor: "from-purple-400 to-fuchsia-600" },
    falaFinal: "Insígnia conquistada! Você reconhece as 4 linguagens do sagrado.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Leitor de Linguagens" },
};

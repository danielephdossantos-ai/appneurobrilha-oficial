import type { AulaGeoV1 } from "../../types";
import { url as interprete } from "@/assets/ensino-religioso-6ano/u5-interprete.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as alcorao } from "@/assets/ensino-religioso-6ano/u1-alcorao.jpg.asset.json";
import { url as torah } from "@/assets/ensino-religioso-6ano/u1-torah.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 5 · Aula 01
 * "Cada Um Lê à Sua Maneira" — EF06ER05
 * NÃO CONFESSIONAL. Foco: como o ESTUDO e a INTERPRETAÇÃO dos textos influenciam
 * a vida dos adeptos — quem interpreta, como interpreta, e por que existem diferenças.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-interpretacao-textos",
  titulo: "Cada Um Lê à Sua Maneira",
  iconeTrilha: "🔎",
  bncc: ["EF06ER05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: um mesmo texto, muitas leituras.",
    mapaUrl: interprete,
    imagemDestaqueUrl: interprete,
    aurora:
      "Decifrador, um mesmo versículo pode ser lido de jeitos DIFERENTES por pessoas da MESMA tradição — e todos podem ser sinceros. Um rabino ortodoxo lê a Torá de um jeito; um rabino reformista, de outro. Um católico entende a mesma passagem diferente de um evangélico. Não é mentira nem má-fé: é INTERPRETAÇÃO — e cada tradição tem regras próprias sobre quem pode fazer isso.",
    falaFinal: "Nesta aula, vamos entender COMO cada tradição forma seus intérpretes e por que existem diferenças mesmo dentro da mesma fé.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta: "Duas pessoas da MESMA religião podem interpretar o mesmo versículo de jeitos diferentes?",
    opcoes: [
      { id: "sim", titulo: "SIM — e isso é comum", subtitulo: "cada uma traz sua história", emoji: "🔎", cor: "from-emerald-400 to-teal-600" },
      { id: "nao", titulo: "NÃO — texto tem UM só sentido", subtitulo: "leitura é objetiva", emoji: "1️⃣", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "sim",
    feedbackAcerto: "Isso! Interpretar é humano. Duas pessoas sinceras da mesma fé podem ler o mesmo texto de jeitos diferentes.",
    feedbackErro: "Não. Interpretação é humana — mesmo dentro da mesma religião existem correntes que leem o texto de formas diferentes.",
    falaFinal: "Interpretar é humano. Bora entender.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "exegese", capa: "1. Exegese", emoji: "🔍", cor: "from-sky-500 to-blue-700", conteudo: "EXEGESE é o ESTUDO CUIDADOSO de um texto sagrado pra entender o que ele DIZIA no tempo em que foi escrito — considerando a língua original, a cultura antiga e o contexto histórico.", exemplo: "Ex.: entender que 'olho por olho' era uma LIMITAÇÃO da vingança na época — não um estímulo.", fotoUrl: interprete },
      { id: "hermeneutica", capa: "2. Hermenêutica", emoji: "🌉", cor: "from-emerald-500 to-green-700", conteudo: "HERMENÊUTICA é a ARTE de trazer o sentido antigo pro presente. Depois da exegese, pergunta: 'o que isso significa PRA MIM hoje, na minha vida?'", exemplo: "Ex.: aplicar hoje o princípio 'não faças ao outro o que não queres pra ti'.", fotoUrl: biblia },
      { id: "correntes", capa: "3. Correntes internas", emoji: "🌊", cor: "from-purple-500 to-fuchsia-700", conteudo: "Toda grande tradição tem CORRENTES INTERNAS que leem o texto de formas diferentes: ortodoxos e reformistas no judaísmo; sunitas e xiitas no islamismo; católicos, ortodoxos e evangélicos no cristianismo.", exemplo: "Ex.: mesmo texto, escolas diferentes de leitura.", fotoUrl: alcorao },
    ],
    falaFinal: "Exegese, hermenêutica, correntes. Três chaves.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 figuras que INTERPRETAM textos sagrados nas grandes tradições. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: interprete,
    pontos: [
      { id: "rabino", x: 22, y: 30, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "RABINO — tradição judaica", texto: "O rabino estuda a Torá E o Talmude (comentários rabínicos milenares) por muitos anos antes de ensinar. Diferente de um padre, ele não é 'sacerdote' — é primeiro um MESTRE INTÉRPRETE. Cada rabino traz sua leitura pro debate.", fotoUrl: torah },
      { id: "padre", x: 70, y: 30, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "PADRE / PASTOR — tradições cristãs", texto: "No catolicismo, o padre interpreta com base na Tradição da Igreja e no Papa. No protestantismo, cada pastor pode interpretar mais livremente ('livre exame das escrituras'). Por isso existem tantas igrejas diferentes lendo a MESMA Bíblia.", fotoUrl: biblia },
      { id: "sheik", x: 30, y: 72, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "XEIQUE / IMÃ — tradição islâmica", texto: "Um xeique estuda o Alcorão E os Hadith (falas atribuídas ao Profeta Muhammad) e o Fiqh (jurisprudência islâmica). Sunitas e xiitas têm escolas diferentes de interpretação, sempre buscando a intenção original da revelação.", fotoUrl: alcorao },
      { id: "paje-baba", x: 76, y: 72, emoji: "🔥", cor: "from-red-500 to-rose-700", titulo: "PAJÉ / BABALORIXÁ — tradições orais", texto: "Em povos indígenas, o pajé (xamã) é quem GUARDA e INTERPRETA as histórias sagradas — passadas oralmente. No candomblé, o babalorixá ou ialorixá interpreta os cantos, mitos dos orixás e mensagens do jogo de búzios. É formação de anos de convivência.", fotoUrl: oralidade },
    ],
    falaFinal: "4 figuras. 4 modos de FORMAR quem tem autoridade pra interpretar.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "EXEGESE é o estudo pra entender o que o texto:", fotoUrl: interprete, cards: [
        { id: "dizia", emoji: "🔍", titulo: "DIZIA no tempo em que foi escrito", cor: "from-sky-500 to-blue-700" },
        { id: "esconde", emoji: "🎭", titulo: "Esconde de propósito", cor: "from-red-500 to-rose-700" },
        { id: "vende", emoji: "💰", titulo: "Rende de dinheiro", cor: "from-slate-400 to-gray-600" },
      ], correta: "dizia", feedbackAcerto: "Isso! Exegese busca o sentido original do texto.", feedbackErro: "EXEGESE = estudar o que o texto DIZIA na época em que foi escrito, com sua língua e contexto." },
      { id: "q2", pergunta: "No JUDAÍSMO, o rabino é principalmente:", fotoUrl: torah, cards: [
        { id: "mestre", emoji: "🕎", titulo: "Um mestre intérprete", cor: "from-amber-500 to-orange-700" },
        { id: "vendedor", emoji: "💼", titulo: "Um vendedor de livros", cor: "from-slate-400 to-gray-600" },
        { id: "atleta", emoji: "🏃", titulo: "Um atleta profissional", cor: "from-emerald-500 to-green-700" },
      ], correta: "mestre", feedbackAcerto: "Perfeito! Rabino = mestre e intérprete da Torá e do Talmude.", feedbackErro: "Rabino é MESTRE INTÉRPRETE — estuda Torá e Talmude por muitos anos antes de ensinar." },
      { id: "q3", pergunta: "No candomblé, quem principalmente interpreta cantos e mitos dos orixás?", fotoUrl: oralidade, cards: [
        { id: "baba", emoji: "🔥", titulo: "Babalorixá ou ialorixá", cor: "from-red-500 to-rose-700" },
        { id: "papa", emoji: "⛪", titulo: "O Papa", cor: "from-sky-500 to-blue-700" },
        { id: "prefeito", emoji: "🏛️", titulo: "O prefeito", cor: "from-slate-400 to-gray-600" },
      ], correta: "baba", feedbackAcerto: "Isso! Babalorixá (homem) ou ialorixá (mulher) são as autoridades interpretativas do candomblé.", feedbackErro: "É o BABALORIXÁ ou a IALORIXÁ — autoridades religiosas do candomblé, formadas por anos." },
    ],
    falaFinal: "Radar afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados com forte tradição de FORMAÇÃO RELIGIOSA (seminários, madraçais, terreiros escola).",
    instrucao: "Acenda 5 estados de forte formação religiosa",
    missao: { tipo: "selecionar", siglas: ["SP", "MG", "RJ", "BA", "RS"], pergunta: "Quais 5 estados brasileiros concentram seminários, faculdades teológicas e terreiros-escola?" },
    falaFinal: "SP e MG (seminários católicos), RJ, BA (terreiros-mãe), RS (formação luterana). Brasil forma muitos intérpretes.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como se FORMA um intérprete religioso? Ordene.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do curioso ao mestre:",
    paradas: [
      { id: "curiosidade", emoji: "🤔", rotulo: "1. CURIOSIDADE pessoal", descricao: "A pessoa se interessa pelos textos e vai além da fé só de família." },
      { id: "estudo", emoji: "📚", rotulo: "2. ESTUDO formal", descricao: "Entra num seminário, faculdade teológica, madraça ou terreiro-escola." },
      { id: "linguas", emoji: "🔤", rotulo: "3. LÍNGUAS antigas", descricao: "Aprende hebraico, grego, árabe, sânscrito ou línguas africanas pra ler no original." },
      { id: "mestres", emoji: "👥", rotulo: "4. Convívio com MESTRES", descricao: "Passa anos ao lado de intérpretes experientes, aprendendo o método." },
      { id: "autoridade", emoji: "🎓", rotulo: "5. RECONHECIMENTO como intérprete", descricao: "A comunidade reconhece que aquela pessoa tem preparo pra ensinar publicamente." },
    ],
    ordemCerta: ["curiosidade", "estudo", "linguas", "mestres", "autoridade"],
    feedbackAcerto: "Isso! Curiosidade → estudo → línguas → mestres → autoridade.",
    feedbackErro: "É CURIOSIDADE → ESTUDO → LÍNGUAS → MESTRES → AUTORIDADE. Formar intérprete leva anos.",
    falaFinal: "5 passos. Não vira intérprete de um dia pro outro.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 5 — Interpretação",
    paragrafos: [
      { id: "p1", texto: "INTERPRETAR um texto sagrado é humano. Duas pessoas SINCERAS da mesma religião podem ler o mesmo versículo de formas diferentes — e as duas podem estar contribuindo pra tradição.", chaves: ["interpretar", "sinceras"] },
      { id: "p2", texto: "EXEGESE busca entender o que o texto DIZIA na época em que foi escrito. HERMENÊUTICA busca entender o que ele SIGNIFICA hoje. As duas trabalham juntas.", chaves: ["exegese", "hermenêutica"] },
      { id: "p3", texto: "Toda grande tradição tem CORRENTES INTERNAS: ortodoxos e reformistas no judaísmo; sunitas e xiitas no islamismo; católicos, ortodoxos e evangélicos no cristianismo. Diferenças de interpretação são normais.", chaves: ["correntes", "normais"] },
      { id: "p4", texto: "Cada tradição forma seus INTÉRPRETES de um jeito: rabinos estudam Talmude, xeiques estudam Fiqh, pastores fazem teologia, pajés convivem anos com anciãos. Nenhuma leitura séria é improviso.", chaves: ["intérpretes", "improviso"] },
    ],
    falaFinal: "Leu tudo?",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo GUIA DE INTÉRPRETES! Ligue cada intérprete à tradição certa.",
    instrucao: "⏱️ De que tradição é esse intérprete?",
    duracaoSegundos: 12,
    pecas: [
      { id: "judaica", emoji: "🕎", rotulo: "Judaica" },
      { id: "catolica", emoji: "⛪", rotulo: "Católica" },
      { id: "evangelica", emoji: "📖", rotulo: "Evangélica" },
      { id: "islamica", emoji: "☪️", rotulo: "Islâmica" },
      { id: "indigena", emoji: "🪶", rotulo: "Indígena" },
      { id: "afro", emoji: "🥁", rotulo: "Afro-brasileira" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Rabino", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Estuda Talmude", emoji: "📜", cor: "from-yellow-400 to-amber-600" }, contexto: "Autoridade da sinagoga.", pecaCertaId: "judaica", feedbackAcerto: "Isso! Rabino = judaica.", feedbackErro: "É JUDAICA — rabino estuda Torá e Talmude." },
      { id: "r2", municipioA: { nome: "Padre", emoji: "⛪", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Interpretação guiada pela Igreja", emoji: "✝️", cor: "from-indigo-400 to-blue-600" }, contexto: "Ordem sacerdotal.", pecaCertaId: "catolica", feedbackAcerto: "Perfeito! Padre = católica.", feedbackErro: "É CATÓLICA — padre interpreta com base na Tradição da Igreja." },
      { id: "r3", municipioA: { nome: "Pastor(a)", emoji: "📖", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Livre exame das escrituras", emoji: "🔍", cor: "from-teal-400 to-emerald-600" }, contexto: "Autoridade da igreja protestante.", pecaCertaId: "evangelica", feedbackAcerto: "Isso! Pastor(a) = evangélica.", feedbackErro: "É EVANGÉLICA — pastor(a) usa 'livre exame' das escrituras." },
      { id: "r4", municipioA: { nome: "Xeique / Imã", emoji: "☪️", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Estuda Hadith e Fiqh", emoji: "📕", cor: "from-green-400 to-emerald-600" }, contexto: "Líder de oração e jurista.", pecaCertaId: "islamica", feedbackAcerto: "Perfeito! Xeique = islâmica.", feedbackErro: "É ISLÂMICA — xeique/imã estuda Alcorão, Hadith e Fiqh." },
      { id: "r5", municipioA: { nome: "Pajé", emoji: "🪶", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Guarda histórias da aldeia", emoji: "🔥", cor: "from-red-400 to-orange-600" }, contexto: "Autoridade espiritual indígena.", pecaCertaId: "indigena", feedbackAcerto: "Isso! Pajé = indígena.", feedbackErro: "É INDÍGENA — pajé é xamã, guarda e intérprete das narrativas sagradas." },
      { id: "r6", municipioA: { nome: "Babalorixá / Ialorixá", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Interpreta cantos e búzios", emoji: "⚪", cor: "from-orange-400 to-red-600" }, contexto: "Sacerdote do candomblé.", pecaCertaId: "afro", feedbackAcerto: "Boa! Babalorixá = afro-brasileira.", feedbackErro: "É AFRO-BRASILEIRA — babalorixá/ialorixá interpreta cantos, mitos e búzios." },
    ],
    falaFinal: "6 intérpretes reconhecidos! Você virou Guia de Intérpretes.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as duas grandes camadas do estudo dos textos sagrados.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "exegese", rotulo: "EXEGESE — o que o texto dizia (~60%)", emoji: "🔍", percentual: 60, cor: "#3b82f6", descricao: "Estudo textual e histórico: ler no original, comparar versões, entender a cultura e a política do tempo em que o texto foi escrito.", exemplos: ["🔤 Original", "🏺 Contexto"] },
      { id: "hermeneutica", rotulo: "HERMENÊUTICA — o que diz PRA HOJE (~40%)", emoji: "🌱", percentual: 40, cor: "#10b981", descricao: "Como aquele princípio antigo se traduz nas escolhas da vida atual, sem forçar nem trair o sentido original.", exemplos: ["🌍 Aplicação", "💡 Sentido"] },
    ],
    falaFinal: "Textual, histórico, aplicado. Três camadas de qualquer boa leitura.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Duas pessoas SINCERAS da mesma religião podem interpretar o mesmo versículo diferentemente?", opcoes: [
        { id: "a", texto: "Não — texto tem UM só sentido", correta: false },
        { id: "b", texto: "Sim — é comum, e as duas podem contribuir", correta: true },
        { id: "c", texto: "Só se estiverem mentindo", correta: false },
      ], feedbackAcerto: "Isso! Interpretação é humana; diferenças sinceras são normais.", feedbackErro: "SIM — é normal. Interpretar é humano, e diferenças sinceras enriquecem a tradição." },
      { id: "av2", pergunta: "EXEGESE é:", opcoes: [
        { id: "a", texto: "Um tipo de dança", correta: false },
        { id: "b", texto: "O estudo cuidadoso pra entender o texto no tempo em que foi escrito", correta: true },
        { id: "c", texto: "A cor da capa do livro", correta: false },
      ], feedbackAcerto: "Perfeito! Exegese = estudo cuidadoso do sentido original.", feedbackErro: "EXEGESE é o estudo cuidadoso pra entender o texto NA ÉPOCA em que foi escrito." },
      { id: "av3", pergunta: "Formar um intérprete religioso sério exige:", opcoes: [
        { id: "a", texto: "1 dia de leitura", correta: false },
        { id: "b", texto: "Anos de estudo, línguas antigas e convívio com mestres", correta: true },
        { id: "c", texto: "Só dinheiro pra pagar", correta: false },
      ], feedbackAcerto: "Isso! Formação séria leva ANOS de estudo, línguas e mestres.", feedbackErro: "Formação séria exige ANOS de estudo, línguas antigas e convívio com mestres experientes." },
    ],
    selo: { nome: "Guia de Intérpretes", subtitulo: "Insígnia da Exegese", emoji: "🔎", cor: "from-purple-400 to-fuchsia-600" },
    falaFinal: "Insígnia conquistada! Você entende como se interpreta um texto sagrado.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Guia de Intérpretes" },
};

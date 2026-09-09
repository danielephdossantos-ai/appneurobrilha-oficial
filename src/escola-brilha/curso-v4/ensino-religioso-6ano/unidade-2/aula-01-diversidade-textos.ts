import type { AulaGeoV1 } from "../../types";
import { url as vedas } from "@/assets/ensino-religioso-6ano/u2-vedas.jpg.asset.json";
import { url as sutras } from "@/assets/ensino-religioso-6ano/u2-sutras.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";
import { url as torah } from "@/assets/ensino-religioso-6ano/u1-torah.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as alcorao } from "@/assets/ensino-religioso-6ano/u1-alcorao.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 2 · Aula 01
 * "Muitos Livros, Muitas Vozes" — EF06ER02
 * NÃO CONFESSIONAL. Foco: valorizar a DIVERSIDADE de textos religiosos escritos e orais.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-diversidade-textos",
  titulo: "Muitos Livros, Muitas Vozes",
  iconeTrilha: "📚",
  bncc: ["EF06ER02"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: uma biblioteca do mundo inteiro.",
    mapaUrl: vedas,
    imagemDestaqueUrl: vedas,
    aurora:
      "Decifrador, imagina uma prateleira gigante. Nela cabem os Vedas em sânscrito, os Sutras budistas, a Torá em hebraico, a Bíblia em português, o Alcorão em árabe, o Livro dos Mórmons, o Guru Granth Sahib dos sikhs, os cantos yorubás anotados no Brasil. Cada um foi feito por um povo, num tempo, com um propósito. Nenhum copia o outro.",
    falaFinal: "Nesta aula, vamos conhecer essa BIBLIOTECA RELIGIOSA MUNDIAL e entender por que a diversidade dela é uma riqueza.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite rápido:",
    pergunta: "Quantos livros religiosos DIFERENTES o mundo tem?",
    opcoes: [
      { id: "muitos", titulo: "DEZENAS de grandes tradições", subtitulo: "escritas e orais", emoji: "📚", cor: "from-emerald-400 to-teal-600" },
      { id: "um", titulo: "Só UM: o verdadeiro", subtitulo: "os outros são cópias", emoji: "1️⃣", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "muitos",
    feedbackAcerto: "Isso! Cada povo produziu o seu — cada um responde perguntas da sua terra e sua época.",
    feedbackErro: "Não. O mundo tem DEZENAS de tradições com textos próprios. Nenhuma é cópia da outra.",
    falaFinal: "Diversidade é a regra. Bora conhecer.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "diversidade", capa: "1. Diversidade textual", emoji: "🌍", cor: "from-emerald-500 to-green-700", conteudo: "DIVERSIDADE TEXTUAL religiosa é a existência de MUITOS textos sagrados diferentes convivendo no mundo — em várias línguas, formatos, e origens.", exemplo: "Ex.: Vedas em sânscrito, Torá em hebraico, Alcorão em árabe, Bíblia em português.", fotoUrl: vedas },
      { id: "escrita-oral", capa: "2. Escrito × Oral", emoji: "🗣️", cor: "from-amber-500 to-orange-700", conteudo: "Nem toda tradição optou pela ESCRITA. Muitos povos preservaram e ainda preservam suas narrativas sagradas na ORALIDADE — na palavra dita e passada com cuidado.", exemplo: "Ex.: cantos yorubás no candomblé; histórias de Nhanderu contadas pelos Guarani.", fotoUrl: oralidade },
      { id: "traducao", capa: "3. Tradução", emoji: "🔤", cor: "from-sky-500 to-blue-700", conteudo: "TRADUZIR um texto sagrado é passar de uma língua pra outra sem perder o sentido. Algumas tradições permitem tradução livre, outras acham que só o ORIGINAL preserva a força.", exemplo: "Ex.: o Alcorão é sempre recitado em árabe; a Bíblia é traduzida em mais de 3000 línguas.", fotoUrl: alcorao },
    ],
    falaFinal: "Diversidade, oralidade, tradução. Três chaves da biblioteca mundial.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "4 tradições textuais bem diferentes. Toque em cada balão. Todas com o mesmo respeito.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: sutras,
    pontos: [
      { id: "vedas", x: 22, y: 30, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "VEDAS — tradição hindu", texto: "Os Vedas são um dos conjuntos de textos sagrados mais antigos da humanidade AINDA em uso — mais de 3500 anos. Escritos em sânscrito, foram passados oralmente por gerações antes de serem registrados. Rigveda, Samaveda, Yajurveda e Atharvaveda são os 4 principais.", fotoUrl: vedas },
      { id: "sutras", x: 70, y: 30, emoji: "☸️", cor: "from-yellow-500 to-orange-700", titulo: "SUTRAS — tradição budista", texto: "Os Sutras guardam ensinamentos atribuídos a Siddhartha Gautama, o Buda. Foram escritos em pali, sânscrito, chinês, tibetano — cada versão adaptada à cultura local. Ensinam o caminho pra reduzir o sofrimento humano.", fotoUrl: sutras },
      { id: "orais-indigenas", x: 30, y: 72, emoji: "🪶", cor: "from-emerald-500 to-green-700", titulo: "TRADIÇÕES ORAIS INDÍGENAS", texto: "Povos como Guarani, Yanomami, Kayapó e Xavante nunca precisaram de livro impresso pra guardar suas narrativas. Os anciãos as contam ao redor do fogo, com precisão treinada por milênios. A oralidade também é técnica.", fotoUrl: oralidade },
      { id: "orais-afro", x: 76, y: 72, emoji: "🥁", cor: "from-red-500 to-rose-700", titulo: "TRADIÇÕES ORAIS AFRO-BRASILEIRAS", texto: "No candomblé e na umbanda, os cantos, rezas e histórias dos orixás foram trazidos da África e mantidos vivos pela oralidade dos babalorixás e ialorixás. Só recentemente algumas coisas começaram a ser escritas.", fotoUrl: torah },
    ],
    falaFinal: "Quatro tradições, quatro formatos. Nenhuma vale menos.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "Os VEDAS são textos sagrados de qual tradição?", fotoUrl: vedas, cards: [
        { id: "hindu", emoji: "🕉️", titulo: "Hindu", cor: "from-orange-500 to-red-700" },
        { id: "cristã", emoji: "✝️", titulo: "Cristã", cor: "from-sky-500 to-blue-700" },
        { id: "islamica", emoji: "☪️", titulo: "Islâmica", cor: "from-emerald-500 to-green-700" },
      ], correta: "hindu", feedbackAcerto: "Isso! Vedas são a base da tradição hindu.", feedbackErro: "Os VEDAS pertencem à tradição HINDU, escritos em sânscrito." },
      { id: "q2", pergunta: "Uma tradição sem livro impresso...", fotoUrl: oralidade, cards: [
        { id: "vale", emoji: "🗣️", titulo: "Preserva por oralidade, com o mesmo valor", cor: "from-emerald-500 to-green-700" },
        { id: "menor", emoji: "❌", titulo: "É uma tradição menor", cor: "from-red-500 to-rose-700" },
        { id: "sumir", emoji: "🚪", titulo: "Vai sumir logo", cor: "from-slate-400 to-gray-600" },
      ], correta: "vale", feedbackAcerto: "Isso! Oralidade tem o mesmo valor da escrita.", feedbackErro: "Sem livro NÃO é sem valor. Oralidade é forma legítima de preservação." },
      { id: "q3", pergunta: "Por que o Alcorão é recitado em ÁRABE mesmo em países que não falam a língua?", fotoUrl: alcorao, cards: [
        { id: "original", emoji: "📕", titulo: "Pra manter a musicalidade original", cor: "from-emerald-500 to-green-700" },
        { id: "dificil", emoji: "😅", titulo: "Porque ninguém quer traduzir", cor: "from-slate-400 to-gray-600" },
        { id: "moda", emoji: "🎈", titulo: "Só por tradição estética", cor: "from-red-500 to-rose-700" },
      ], correta: "original", feedbackAcerto: "Perfeito! Muçulmanos preservam a MUSICALIDADE original das palavras árabes.", feedbackErro: "É pra preservar a MUSICALIDADE ORIGINAL das palavras — parte do que os muçulmanos consideram sagrado." },
    ],
    falaFinal: "Radar afinado. Você entende que a biblioteca do mundo é grande.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados que abrigam FORTE presença de tradições religiosas MENOS conhecidas (hindus, budistas, sikhs, orixás).",
    instrucao: "Acenda 5 estados de forte diversidade textual",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "BA", "PR", "AM"], pergunta: "Quais 5 estados têm forte presença de tradições diversas além das cristãs?" },
    falaFinal: "SP (japoneses e árabes), RJ, BA (candomblé forte), PR (imigração hindu/budista), AM (indígenas). Biblioteca aberta.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um texto oral vira ESCRITO em outra língua? Ordene.",
    instrucao: "Toque na ordem correta",
    pergunta: "Da voz ao livro traduzido:",
    paradas: [
      { id: "oral", emoji: "🗣️", rotulo: "1. Vive na ORALIDADE", descricao: "Os mais velhos contam de boca em boca por gerações." },
      { id: "registro", emoji: "✍️", rotulo: "2. Alguém REGISTRA no papel", descricao: "Um escriba anota na língua original a versão mais aceita." },
      { id: "canone", emoji: "📚", rotulo: "3. Vira parte do CÂNONE", descricao: "A comunidade oficializa o texto como sagrado." },
      { id: "traducao", emoji: "🔤", rotulo: "4. Ganha TRADUÇÕES", descricao: "Estudiosos passam pra outras línguas — cada um com desafios de sentido." },
      { id: "difusao", emoji: "🌍", rotulo: "5. DIFUNDE pelo mundo", descricao: "O texto chega a povos que nunca falaram a língua original." },
    ],
    ordemCerta: ["oral", "registro", "canone", "traducao", "difusao"],
    feedbackAcerto: "Isso! Oral → registro → cânone → tradução → difusão. Ciclo real da propagação textual.",
    feedbackErro: "Começa ORAL, depois alguém REGISTRA, vira CÂNONE, ganha TRADUÇÕES e só então se DIFUNDE.",
    falaFinal: "5 passos. Da voz do ancião ao livro na estante da escola.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 2 — Muitos Livros, Muitas Vozes",
    paragrafos: [
      { id: "p1", texto: "O mundo tem DEZENAS de tradições religiosas com seus próprios textos — nenhuma é cópia das outras. Cada uma nasce numa terra, num tempo, respondendo às perguntas daquele povo.", chaves: ["dezenas", "próprios"] },
      { id: "p2", texto: "Vedas, Sutras, Torá, Bíblia, Alcorão e muitos outros formam uma verdadeira BIBLIOTECA RELIGIOSA MUNDIAL, com séculos de sabedoria acumulada.", chaves: ["biblioteca", "sabedoria"] },
      { id: "p3", texto: "Nem toda tradição escolheu a ESCRITA. Povos indígenas e afro-brasileiros mantêm sua memória sagrada pela ORALIDADE — palavra falada com técnica e disciplina.", chaves: ["escrita", "oralidade"] },
      { id: "p4", texto: "TRADUZIR um texto sagrado é uma decisão. Algumas tradições traduzem livremente; outras (como o islamismo) preservam sempre a língua original. Ambas as escolhas têm sentido.", chaves: ["traduzir", "escolha"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo BIBLIOTECÁRIO MUNDIAL! Ligue cada característica ao texto certo.",
    instrucao: "⏱️ Qual texto tem essa característica?",
    duracaoSegundos: 12,
    pecas: [
      { id: "vedas", emoji: "🕉️", rotulo: "Vedas" },
      { id: "sutras", emoji: "☸️", rotulo: "Sutras budistas" },
      { id: "torah", emoji: "🕎", rotulo: "Torá" },
      { id: "biblia", emoji: "📖", rotulo: "Bíblia" },
      { id: "alcorao", emoji: "☪️", rotulo: "Alcorão" },
      { id: "oral-afro", emoji: "🥁", rotulo: "Oralidade afro-brasileira" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Sânscrito", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Rigveda", emoji: "📜", cor: "from-amber-400 to-orange-600" }, contexto: "Textos hindus mais antigos ainda em uso.", pecaCertaId: "vedas", feedbackAcerto: "Isso! Vedas em sânscrito.", feedbackErro: "É VEDAS — hindu, escritos em sânscrito." },
      { id: "r2", municipioA: { nome: "Ensinamento do Buda", emoji: "☸️", cor: "from-yellow-400 to-orange-600" }, municipioB: { nome: "Escritos em pali", emoji: "📃", cor: "from-amber-400 to-yellow-600" }, contexto: "Textos budistas.", pecaCertaId: "sutras", feedbackAcerto: "Perfeito! Sutras.", feedbackErro: "São os SUTRAS — textos budistas em pali/chinês/tibetano." },
      { id: "r3", municipioA: { nome: "Rolo hebraico", emoji: "🕎", cor: "from-yellow-400 to-amber-600" }, municipioB: { nome: "5 primeiros livros", emoji: "📜", cor: "from-amber-400 to-orange-600" }, contexto: "Guarda os 10 mandamentos.", pecaCertaId: "torah", feedbackAcerto: "Isso! Torá.", feedbackErro: "É a TORÁ — 5 primeiros livros hebraicos." },
      { id: "r4", municipioA: { nome: "Antigo + Novo Testamento", emoji: "📖", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "3000 traduções", emoji: "🌍", cor: "from-indigo-400 to-blue-600" }, contexto: "Livro mais traduzido do mundo.", pecaCertaId: "biblia", feedbackAcerto: "Perfeito! Bíblia.", feedbackErro: "É a BÍBLIA — traduzida pra mais de 3000 idiomas." },
      { id: "r5", municipioA: { nome: "Sempre em árabe", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Revelação a Muhammad", emoji: "🌙", cor: "from-teal-400 to-emerald-600" }, contexto: "Recitado em árabe até hoje.", pecaCertaId: "alcorao", feedbackAcerto: "Isso! Alcorão.", feedbackErro: "É o ALCORÃO — recitado sempre em árabe, tradição islâmica." },
      { id: "r6", municipioA: { nome: "Cantos em terreiro", emoji: "🥁", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Sem livro impresso", emoji: "🗣️", cor: "from-orange-400 to-red-600" }, contexto: "Trazido da África, guardado na voz.", pecaCertaId: "oral-afro", feedbackAcerto: "Boa! Oralidade afro-brasileira.", feedbackErro: "É ORALIDADE AFRO-BRASILEIRA — candomblé/umbanda, cantos em terreiro." },
    ],
    falaFinal: "6 tradições organizadas! Você virou Bibliotecário Mundial.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: os textos religiosos por número de adeptos no mundo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "abraamicas", rotulo: "Bíblia + Alcorão + Torá (~56%)", emoji: "📖", percentual: 56, cor: "#3b82f6", descricao: "As três grandes tradições abraâmicas: cristianismo, islamismo e judaísmo. Compartilham raízes históricas e algumas narrativas.", exemplos: ["✝️ Bíblia", "☪️ Alcorão", "🕎 Torá"] },
      { id: "outras", rotulo: "Vedas + Sutras + Orais (~44%)", emoji: "🌍", percentual: 44, cor: "#f59e0b", descricao: "Hinduísmo, budismo, sikhismo, tradições indígenas, afro-brasileiras e pessoas sem religião. Enorme diversidade.", exemplos: ["🕉️ Vedas", "☸️ Sutras", "🪶 Indígenas", "🥁 Afro"] },
    ],
    falaFinal: "Diversidade real. Nenhuma tradição é dona sozinha do sagrado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "O que a existência de MUITOS textos sagrados diferentes mostra?", opcoes: [
        { id: "a", texto: "Que um é verdadeiro e os outros mentem", correta: false },
        { id: "b", texto: "Que cada povo produziu sua própria sabedoria — todos com valor", correta: true },
        { id: "c", texto: "Que os antigos eram desorganizados", correta: false },
      ], feedbackAcerto: "Isso! Cada povo respondeu com sua própria sabedoria — todos merecem escuta.", feedbackErro: "Diversidade não é bagunça nem mentira. É prova de que cada povo pensou o sagrado com sua própria voz." },
      { id: "av2", pergunta: "Uma tradição ORAL (sem livro impresso) vale...", opcoes: [
        { id: "a", texto: "Menos que uma tradição escrita", correta: false },
        { id: "b", texto: "O mesmo que uma tradição escrita", correta: true },
        { id: "c", texto: "Nada — sem livro não é religião", correta: false },
      ], feedbackAcerto: "Perfeito! Oralidade tem o MESMO valor da escrita como forma de preservação.", feedbackErro: "Oralidade e escrita são DUAS formas legítimas — nenhuma vale mais que a outra." },
      { id: "av3", pergunta: "Traduzir um texto sagrado:", opcoes: [
        { id: "a", texto: "É proibido em todas as tradições", correta: false },
        { id: "b", texto: "É uma escolha — algumas traduzem, outras preservam a língua original", correta: true },
        { id: "c", texto: "Sempre destrói o significado", correta: false },
      ], feedbackAcerto: "Isso! Cada tradição decide se traduz ou preserva a língua original.", feedbackErro: "Traduzir é uma ESCOLHA de cada tradição. Bíblia traduz muito; Alcorão preserva o árabe." },
    ],
    selo: { nome: "Bibliotecário Mundial", subtitulo: "Insígnia da Diversidade Textual", emoji: "📚", cor: "from-sky-400 to-blue-600" },
    falaFinal: "Insígnia conquistada! Você conhece a biblioteca religiosa do mundo.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Bibliotecário Mundial" },
};

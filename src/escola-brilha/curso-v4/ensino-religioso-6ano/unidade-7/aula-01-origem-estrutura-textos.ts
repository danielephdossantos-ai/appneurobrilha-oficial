import type { AulaGeoV1 } from "../../types";
import { url as escriba } from "@/assets/ensino-religioso-6ano/u7-escriba.jpg.asset.json";
import { url as torah } from "@/assets/ensino-religioso-6ano/u1-torah.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as alcorao } from "@/assets/ensino-religioso-6ano/u1-alcorao.jpg.asset.json";
import { url as vedas } from "@/assets/ensino-religioso-6ano/u2-vedas.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 7 · Aula 01
 * "Como Nasce um Livro Sagrado" — EF06ER07
 * NÃO CONFESSIONAL. Foco: ORIGEM, ESTRUTURA e FUNÇÕES dos textos religiosos.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-origem-estrutura-textos",
  titulo: "Como Nasce um Livro Sagrado",
  iconeTrilha: "📜",
  bncc: ["EF06ER07"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: séculos condensados num livro.",
    mapaUrl: escriba,
    imagemDestaqueUrl: escriba,
    aurora:
      "Decifrador, um livro sagrado NÃO aparece pronto do céu. Ele leva SÉCULOS pra existir: começa com experiências vividas por um povo, vira oralidade, depois vira escrita, depois é copiado à mão por escribas dedicados, depois é traduzido, revisado, organizado. Do primeiro sopro à última encadernação — dá pra passar 1000 anos.",
    falaFinal: "Nesta aula, vamos entender COMO se produz um livro sagrado, QUE PARTES ele tem e QUAIS funções ele cumpre.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta: "Um livro sagrado é escrito por UMA pessoa numa noite?",
    opcoes: [
      { id: "muitos", titulo: "NÃO — muitas pessoas, muitos séculos", subtitulo: "obra coletiva", emoji: "🏛️", cor: "from-emerald-400 to-teal-600" },
      { id: "uma", titulo: "SIM — um autor famoso", subtitulo: "num único momento", emoji: "✍️", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "muitos",
    feedbackAcerto: "Isso! A Bíblia, por exemplo, foi escrita por dezenas de autores ao longo de mais de 1000 anos.",
    feedbackErro: "Não. Os grandes livros sagrados foram construídos por MUITAS pessoas ao longo de MUITOS séculos.",
    falaFinal: "Obra coletiva, colossal. Bora ver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 palavras-chave.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "autoria", capa: "1. Autoria coletiva", emoji: "👥", cor: "from-sky-500 to-blue-700", conteudo: "AUTORIA COLETIVA é quando um livro NÃO tem um único autor. Muitas mãos escreveram, editaram, copiaram e organizaram ao longo de gerações — cada uma acrescentando um trecho ou refinando o todo.", exemplo: "Ex.: A Bíblia foi escrita por mais de 40 autores, em 3 línguas, ao longo de mais de 1000 anos.", fotoUrl: escriba },
      { id: "compilacao", capa: "2. Compilação", emoji: "📚", cor: "from-amber-500 to-orange-700", conteudo: "COMPILAÇÃO é o TRABALHO de reunir textos que existiam soltos e organizá-los num único livro estruturado. Muita gente decide juntos o que entra e como.", exemplo: "Ex.: os 4 Evangelhos foram escolhidos entre outros que existiam; os Vedas foram organizados em 4 grandes coleções.", fotoUrl: vedas },
      { id: "funcoes", capa: "3. Funções do texto", emoji: "🛠️", cor: "from-emerald-500 to-green-700", conteudo: "Um texto sagrado cumpre MÚLTIPLAS FUNÇÕES ao mesmo tempo: ENSINA, CONSOLA, ORIENTA condutas, DEFINE identidade do grupo, INSPIRA arte e ORGANIZA celebrações.", exemplo: "Ex.: os Salmos consolam, os Evangelhos ensinam, o Levítico define regras, o Cântico dos Cânticos inspira poetas.", fotoUrl: biblia },
    ],
    falaFinal: "Autoria coletiva, compilação, múltiplas funções.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Vamos ver como 4 livros sagrados NASCERAM e como estão ESTRUTURADOS. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: escriba,
    pontos: [
      { id: "torah-origem", x: 22, y: 30, emoji: "🕎", cor: "from-amber-500 to-orange-700", titulo: "TORÁ — origem e estrutura", texto: "A Torá contém 5 livros (Pentateuco). Segundo a tradição judaica, foi transmitida por Moisés; historiadores mostram que foi COMPILADA a partir de tradições orais e escritas ao longo de séculos, tomando forma final por volta do século V a.C.", fotoUrl: torah },
      { id: "biblia-origem", x: 70, y: 30, emoji: "📖", cor: "from-sky-500 to-blue-700", titulo: "BÍBLIA — origem e estrutura", texto: "A Bíblia cristã tem 2 partes: Antigo Testamento (46 livros na católica, 39 na protestante, herdados do judaísmo) e Novo Testamento (27 livros sobre Jesus e a Igreja primitiva). Escrita por mais de 40 autores em 3 línguas.", fotoUrl: biblia },
      { id: "alcorao-origem", x: 30, y: 72, emoji: "☪️", cor: "from-emerald-500 to-green-700", titulo: "ALCORÃO — origem e estrutura", texto: "O Alcorão tem 114 capítulos (suras). Segundo a tradição islâmica, foi revelado ao Profeta Muhammad em partes ao longo de 23 anos. Foi COMPILADO na forma atual pouco depois da morte do Profeta, para preservar a versão única.", fotoUrl: alcorao },
      { id: "vedas-origem", x: 76, y: 72, emoji: "🕉️", cor: "from-orange-500 to-red-700", titulo: "VEDAS — origem e estrutura", texto: "Os Vedas são 4 coleções (Rigveda, Samaveda, Yajurveda, Atharvaveda). Foram COMPOSTOS oralmente entre 1500 e 500 a.C. e transmitidos com PRECISÃO ORAL surpreendente antes de serem escritos em sânscrito.", fotoUrl: vedas },
    ],
    falaFinal: "4 livros. 4 histórias longas de compilação e cuidado.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "AUTORIA COLETIVA de um livro sagrado significa:", fotoUrl: escriba, cards: [
        { id: "coletiva", emoji: "👥", titulo: "Muitas pessoas escreveram ao longo do tempo", cor: "from-sky-500 to-blue-700" },
        { id: "unica", emoji: "1️⃣", titulo: "Uma só pessoa escreveu tudo", cor: "from-red-500 to-rose-700" },
        { id: "robo", emoji: "🤖", titulo: "Foi escrito por robôs", cor: "from-slate-400 to-gray-600" },
      ], correta: "coletiva", feedbackAcerto: "Isso! Muitas mãos, muitos séculos.", feedbackErro: "AUTORIA COLETIVA = muitas pessoas ao longo de gerações escreveram e editaram." },
      { id: "q2", pergunta: "Quantos capítulos (suras) tem o Alcorão?", fotoUrl: alcorao, cards: [
        { id: "114", emoji: "☪️", titulo: "114", cor: "from-emerald-500 to-green-700" },
        { id: "10", emoji: "🔟", titulo: "10", cor: "from-slate-400 to-gray-600" },
        { id: "1000", emoji: "1️⃣", titulo: "1000", cor: "from-red-500 to-rose-700" },
      ], correta: "114", feedbackAcerto: "Perfeito! Alcorão tem 114 suras.", feedbackErro: "Alcorão tem 114 capítulos, chamados SURAS." },
      { id: "q3", pergunta: "Um texto sagrado geralmente cumpre:", fotoUrl: biblia, cards: [
        { id: "multiplas", emoji: "🛠️", titulo: "Múltiplas funções simultâneas", cor: "from-emerald-500 to-green-700" },
        { id: "unica", emoji: "1️⃣", titulo: "Uma só função", cor: "from-slate-400 to-gray-600" },
        { id: "nada", emoji: "❌", titulo: "Nenhuma função concreta", cor: "from-red-500 to-rose-700" },
      ], correta: "multiplas", feedbackAcerto: "Isso! Ensina, consola, orienta, define identidade, inspira arte.", feedbackErro: "Cumpre MÚLTIPLAS FUNÇÕES ao mesmo tempo — ensinar, consolar, orientar, inspirar." },
    ],
    falaFinal: "Radar afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados brasileiros com bibliotecas ou museus que guardam MANUSCRITOS religiosos antigos.",
    instrucao: "Acenda 5 estados de guarda documental",
    missao: { tipo: "selecionar", siglas: ["RJ", "MG", "BA", "PE", "SP"], pergunta: "Quais 5 estados guardam grandes acervos de manuscritos religiosos antigos?" },
    falaFinal: "RJ (Biblioteca Nacional), MG (mosteiros mineiros), BA (Museu de Arte Sacra), PE (arquivos coloniais), SP (grandes museus). Memória preservada.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como um livro sagrado NASCE ao longo dos séculos? Ordene.",
    instrucao: "Toque na ordem correta",
    pergunta: "Do sopro ao livro:",
    paradas: [
      { id: "vivencia", emoji: "🌟", rotulo: "1. VIVÊNCIA original", descricao: "Um povo passa por experiências consideradas sagradas — libertação, revelação, encontro." },
      { id: "oralidade", emoji: "🗣️", rotulo: "2. ORALIDADE por gerações", descricao: "As histórias são contadas e recontadas com precisão treinada por séculos." },
      { id: "registro", emoji: "✍️", rotulo: "3. REGISTRO por escribas", descricao: "Escribas começam a anotar as versões que a comunidade reconhece como fiéis." },
      { id: "compilacao", emoji: "📚", rotulo: "4. COMPILAÇÃO e seleção", descricao: "Sábios reúnem textos soltos, decidem quais entram no cânone e organizam a estrutura." },
      { id: "copia", emoji: "🖋️", rotulo: "5. CÓPIAS à mão por séculos", descricao: "Monges e escribas copiam manualmente por 1000+ anos, com cuidado extremo pra não errar." },
      { id: "traducao", emoji: "🔤", rotulo: "6. TRADUÇÕES e difusão", descricao: "O texto ganha versões em outras línguas e chega a povos distantes." },
    ],
    ordemCerta: ["vivencia", "oralidade", "registro", "compilacao", "copia", "traducao"],
    feedbackAcerto: "Isso! Vivência → oralidade → registro → compilação → cópia → tradução.",
    feedbackErro: "É VIVÊNCIA → ORALIDADE → REGISTRO → COMPILAÇÃO → CÓPIA → TRADUÇÃO. Milênios de trabalho coletivo.",
    falaFinal: "6 passos. Séculos condensados num livro que a gente segura na mão.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 7 — Como nasce um livro sagrado",
    paragrafos: [
      { id: "p1", texto: "Um livro sagrado NÃO aparece pronto. Ele nasce de VIVÊNCIA, atravessa a ORALIDADE, é REGISTRADO por escribas, COMPILADO por sábios, COPIADO por gerações e finalmente TRADUZIDO pra outras línguas.", chaves: ["vivência", "traduzido"] },
      { id: "p2", texto: "A maioria dos grandes textos religiosos tem AUTORIA COLETIVA — muitas pessoas, muitas gerações, muitas edições. Não é obra de um só autor num só momento.", chaves: ["autoria", "coletiva"] },
      { id: "p3", texto: "A ESTRUTURA de cada texto é específica: Torá com 5 livros, Bíblia com Antigo e Novo Testamento, Alcorão com 114 suras, Vedas com 4 coleções. Cada estrutura carrega uma lógica interna.", chaves: ["estrutura", "lógica"] },
      { id: "p4", texto: "As FUNÇÕES são múltiplas e simultâneas: ENSINAR, CONSOLAR, ORIENTAR conduta, DEFINIR identidade do grupo, INSPIRAR arte, ORGANIZAR celebrações. Um livro só cumpre TUDO.", chaves: ["funções", "múltiplas"] },
    ],
    falaFinal: "Leu tudo?",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo HISTORIADOR DOS LIVROS! Ligue cada característica ao livro certo.",
    instrucao: "⏱️ Qual livro tem essa característica?",
    duracaoSegundos: 12,
    pecas: [
      { id: "torah", emoji: "🕎", rotulo: "Torá" },
      { id: "biblia-crista", emoji: "📖", rotulo: "Bíblia cristã" },
      { id: "alcorao", emoji: "☪️", rotulo: "Alcorão" },
      { id: "vedas", emoji: "🕉️", rotulo: "Vedas" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "5 livros (Pentateuco)", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Gênesis a Deuteronômio", emoji: "📜", cor: "from-yellow-400 to-amber-600" }, contexto: "Base do judaísmo.", pecaCertaId: "torah", feedbackAcerto: "Isso! Torá = 5 livros.", feedbackErro: "É a TORÁ — 5 livros do Pentateuco." },
      { id: "r2", municipioA: { nome: "Antigo + Novo Testamento", emoji: "📖", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "66 ou 73 livros", emoji: "✝️", cor: "from-indigo-400 to-blue-600" }, contexto: "Livro cristão.", pecaCertaId: "biblia-crista", feedbackAcerto: "Perfeito! Bíblia cristã.", feedbackErro: "É a BÍBLIA CRISTÃ — Antigo + Novo Testamento." },
      { id: "r3", municipioA: { nome: "114 suras", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Revelado em 23 anos", emoji: "🌙", cor: "from-teal-400 to-emerald-600" }, contexto: "Livro islâmico.", pecaCertaId: "alcorao", feedbackAcerto: "Isso! Alcorão = 114 suras.", feedbackErro: "É o ALCORÃO — 114 suras, revelado em 23 anos." },
      { id: "r4", municipioA: { nome: "4 coleções", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Rigveda, Samaveda, Yajurveda, Atharvaveda", emoji: "📜", cor: "from-amber-400 to-orange-600" }, contexto: "Textos hindus mais antigos.", pecaCertaId: "vedas", feedbackAcerto: "Perfeito! Vedas = 4 coleções.", feedbackErro: "São os VEDAS — 4 coleções em sânscrito." },
      { id: "r5", municipioA: { nome: "Compilado no séc. V a.C.", emoji: "🏛️", cor: "from-yellow-400 to-amber-600" }, municipioB: { nome: "Lido em rolos hebraicos", emoji: "🕎", cor: "from-amber-400 to-orange-600" }, contexto: "Século 5 antes de Cristo.", pecaCertaId: "torah", feedbackAcerto: "Isso! Torá compilada no séc. V a.C.", feedbackErro: "É a TORÁ — sua forma final foi compilada por volta do século V a.C." },
      { id: "r6", municipioA: { nome: "Escrito por 40+ autores", emoji: "👥", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Em 3 línguas (hebraico, aramaico, grego)", emoji: "🔤", cor: "from-indigo-400 to-blue-600" }, contexto: "Obra coletiva ao longo de mais de 1000 anos.", pecaCertaId: "biblia-crista", feedbackAcerto: "Boa! Bíblia = autoria coletiva imensa.", feedbackErro: "É a BÍBLIA CRISTÃ — mais de 40 autores em 3 línguas, ao longo de 1000+ anos." },
    ],
    falaFinal: "6 respostas certas! Você virou Historiador dos Livros Sagrados.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: as 5 FUNÇÕES que um texto sagrado cumpre ao mesmo tempo.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "ensinar", rotulo: "ENSINAR (~25%)", emoji: "🎓", percentual: 25, cor: "#3b82f6", descricao: "Explica o mundo, a origem, o sentido da vida, os princípios éticos.", exemplos: ["📖 Sabedoria", "📚 Regras"] },
      { id: "consolar", rotulo: "CONSOLAR (~20%)", emoji: "🕊️", percentual: 20, cor: "#10b981", descricao: "Dá palavras pra momentos de dor, medo, luto e esperança.", exemplos: ["🕯️ Salmos", "🌈 Esperança"] },
      { id: "orientar", rotulo: "ORIENTAR conduta (~20%)", emoji: "🧭", percentual: 20, cor: "#f59e0b", descricao: "Mostra o que fazer e o que evitar — comportamento, ritos, relações.", exemplos: ["⚖️ Leis", "🤝 Convivência"] },
      { id: "identidade", rotulo: "DEFINIR IDENTIDADE (~20%)", emoji: "🪶", percentual: 20, cor: "#8b5cf6", descricao: "Diz quem o povo É, de onde veio, o que faz dele único.", exemplos: ["🕎 Povo eleito", "☸️ Sangha"] },
      { id: "inspirar", rotulo: "INSPIRAR arte (~15%)", emoji: "🎨", percentual: 15, cor: "#ef4444", descricao: "Alimenta música, pintura, escultura, arquitetura e literatura por séculos.", exemplos: ["🎼 Cânticos", "⛪ Catedrais"] },
    ],
    falaFinal: "Ensinar, consolar, orientar, identidade, inspirar. Um livro só, muitas funções.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais. Você chega no CERTIFICADO do 6º ano!",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "Um livro sagrado como a Bíblia foi escrito:", opcoes: [
        { id: "a", texto: "Por um único autor numa noite", correta: false },
        { id: "b", texto: "Por dezenas de autores ao longo de mais de 1000 anos", correta: true },
        { id: "c", texto: "Por uma inteligência artificial moderna", correta: false },
      ], feedbackAcerto: "Isso! Bíblia = obra coletiva colossal.", feedbackErro: "Foi obra COLETIVA de mais de 40 autores, em 3 línguas, ao longo de mais de 1000 anos." },
      { id: "av2", pergunta: "COMPILAÇÃO é:", opcoes: [
        { id: "a", texto: "Reunir textos soltos e organizá-los num livro estruturado", correta: true },
        { id: "b", texto: "Escrever um livro novo do zero em 1 dia", correta: false },
        { id: "c", texto: "Destruir livros antigos", correta: false },
      ], feedbackAcerto: "Perfeito! Compilação = reunião e organização de textos.", feedbackErro: "COMPILAÇÃO é o trabalho de REUNIR textos soltos e ORGANIZÁ-los num livro estruturado." },
      { id: "av3", pergunta: "Um texto sagrado cumpre quantas funções ao mesmo tempo?", opcoes: [
        { id: "a", texto: "Uma só", correta: false },
        { id: "b", texto: "Múltiplas — ensinar, consolar, orientar, definir identidade, inspirar", correta: true },
        { id: "c", texto: "Nenhuma", correta: false },
      ], feedbackAcerto: "Isso! Múltiplas funções ao mesmo tempo — por isso duram séculos.", feedbackErro: "Cumpre MÚLTIPLAS funções simultâneas: ensinar, consolar, orientar, identidade, inspirar arte." },
    ],
    selo: { nome: "Historiador dos Livros Sagrados", subtitulo: "Certificado do 6º Ano", emoji: "📜", cor: "from-indigo-400 to-purple-600" },
    falaFinal: "Insígnia final conquistada! Você terminou o 6º ano de Ensino Religioso.",
  },

  recompensa: { xp: 500, moedas: 400, medalha: "Decifrador dos Textos Sagrados" },
};

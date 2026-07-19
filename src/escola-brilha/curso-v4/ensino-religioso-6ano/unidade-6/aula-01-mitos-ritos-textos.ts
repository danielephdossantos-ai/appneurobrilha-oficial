import type { AulaGeoV1 } from "../../types";
import { url as usoColetivo } from "@/assets/ensino-religioso-6ano/u4-uso-coletivo.jpg.asset.json";
import { url as biblia } from "@/assets/ensino-religioso-6ano/u1-biblia.jpg.asset.json";
import { url as sutras } from "@/assets/ensino-religioso-6ano/u2-sutras.jpg.asset.json";
import { url as oralidade } from "@/assets/ensino-religioso-6ano/u2-oralidade.jpg.asset.json";
import { url as torah } from "@/assets/ensino-religioso-6ano/u1-torah.jpg.asset.json";

/**
 * Ensino Religioso · 6º Ano · Unidade 6 · Aula 01
 * "Mitos, Ritos, Símbolos & Textos" — EF06ER06
 * NÃO CONFESSIONAL. Foco: as 4 LINGUAGENS RELIGIOSAS integradas — como narrativa,
 * gesto, símbolo e texto se combinam pra sustentar uma tradição.
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-mitos-ritos-textos",
  titulo: "Mitos, Ritos, Símbolos & Textos",
  iconeTrilha: "🎭",
  bncc: ["EF06ER06"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe: 4 forças agindo juntas.",
    mapaUrl: usoColetivo,
    imagemDestaqueUrl: usoColetivo,
    aurora:
      "Decifrador, uma tradição religiosa nunca é SÓ um livro. Ela é feita de 4 forças agindo juntas: MITOS (as histórias fundadoras), RITOS (os gestos organizados), SÍMBOLOS (as imagens que carregam significado) e TEXTOS (as palavras registradas). Nenhuma das quatro sozinha basta.",
    falaFinal: "Nesta aula, vamos ver COMO essas 4 forças se combinam pra fazer uma tradição religiosa funcionar.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite:",
    pergunta: "Uma religião pode viver só com o LIVRO, sem ritos, sem símbolos, sem mitos?",
    opcoes: [
      { id: "nao", titulo: "NÃO — as 4 se sustentam mutuamente", subtitulo: "cada uma completa as outras", emoji: "🎭", cor: "from-emerald-400 to-teal-600" },
      { id: "sim", titulo: "SIM — só o livro basta", subtitulo: "o resto é decoração", emoji: "📖", cor: "from-red-400 to-rose-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Sem ritos, símbolos e mitos, o livro vira só letra morta.",
    feedbackErro: "Não. Uma tradição religiosa PRECISA das 4 forças agindo juntas — texto sozinho não sustenta a fé.",
    falaFinal: "As 4 se complementam. Bora ver.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "4 palavras-chave — uma por linguagem.",
    instrucao: "Toque em cada caderno pra abrir",
    cadernos: [
      { id: "mito", capa: "1. Mito", emoji: "📜", cor: "from-amber-500 to-orange-700", conteudo: "MITO religioso NÃO é 'mentira'. É uma NARRATIVA SAGRADA que carrega verdades profundas em forma de história — como a criação do mundo, a origem do povo, o encontro com o divino.", exemplo: "Ex.: a história de Adão e Eva (judaico-cristã); a lenda de Iemanjá; os mitos guarani da criação.", fotoUrl: torah },
      { id: "rito", capa: "2. Rito", emoji: "🕯️", cor: "from-sky-500 to-blue-700", conteudo: "RITO é um GESTO ORGANIZADO que a comunidade repete em momentos importantes. Não é hábito qualquer — é ação carregada de sentido sagrado.", exemplo: "Ex.: batismo, casamento, jejum do Ramadã, dança dos orixás, oração de sexta-feira.", fotoUrl: usoColetivo },
      { id: "simbolo", capa: "3. Símbolo", emoji: "✨", cor: "from-purple-500 to-fuchsia-700", conteudo: "SÍMBOLO é um objeto ou imagem que CARREGA um significado maior que ele mesmo. Uma cruz, uma menorá, uma lua, um cocar, um abadá branco — não são só objetos, são portais de significado.", exemplo: "Ex.: cruz cristã, estrela de Davi, crescente islâmico, roda dharma budista.", fotoUrl: sutras },
      { id: "texto", capa: "4. Texto", emoji: "📖", cor: "from-emerald-500 to-green-700", conteudo: "TEXTO SAGRADO é a palavra REGISTRADA da tradição — que preserva mitos, explica ritos, decifra símbolos e ensina como viver. Sozinho não basta; junto com os outros três forma o todo.", exemplo: "Ex.: Torá, Bíblia, Alcorão, Vedas, Sutras.", fotoUrl: biblia },
    ],
    falaFinal: "Mito, rito, símbolo, texto. As 4 linguagens do sagrado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "Vamos ver as 4 linguagens funcionando JUNTAS numa mesma tradição. Toque em cada balão.",
    instrucao: "Toque em cada balão pra ouvir",
    mapaUrl: usoColetivo,
    pontos: [
      { id: "mito-crista", x: 22, y: 30, emoji: "📜", cor: "from-amber-500 to-orange-700", titulo: "MITO — Natal cristão", texto: "A narrativa: Jesus nasce numa manjedoura em Belém, visitado por pastores e três reis magos, sob uma estrela guia. Não é 'jornal antigo' — é história-símbolo sobre o sagrado nascendo entre os pobres.", fotoUrl: biblia },
      { id: "rito-crista", x: 70, y: 30, emoji: "🕯️", cor: "from-sky-500 to-blue-700", titulo: "RITO — Missa do Galo", texto: "A cada 24 de dezembro à meia-noite, cristãos se reúnem numa cerimônia com leituras, cantos, presépio, comunhão. O gesto REPETIDO todo ano transforma um dia comum em ponto sagrado do calendário.", fotoUrl: usoColetivo },
      { id: "simbolo-crista", x: 30, y: 72, emoji: "✨", cor: "from-purple-500 to-fuchsia-700", titulo: "SÍMBOLO — Presépio, vela, estrela", texto: "Objetos usados no Natal cristão carregam sentido: o presépio evoca a manjedoura, a vela evoca a luz na escuridão, a estrela evoca a guia dos magos. Nenhum é 'só enfeite' — cada um lembra parte da história.", fotoUrl: torah },
      { id: "texto-crista", x: 76, y: 72, emoji: "📖", cor: "from-emerald-500 to-green-700", titulo: "TEXTO — Evangelhos de Lucas e Mateus", texto: "A narrativa do nascimento está registrada nos Evangelhos. Sem o texto, o mito se perderia. Sem o mito, o texto seria só palavras. Sem o rito e os símbolos, virava só história antiga. As 4 sustentam a tradição.", fotoUrl: biblia },
    ],
    falaFinal: "Uma só celebração — 4 linguagens agindo juntas.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas rápidas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "MITO religioso é:", fotoUrl: torah, cards: [
        { id: "narrativa", emoji: "📜", titulo: "Narrativa sagrada com verdade profunda", cor: "from-amber-500 to-orange-700" },
        { id: "mentira", emoji: "❌", titulo: "Uma mentira comprovada", cor: "from-red-500 to-rose-700" },
        { id: "piada", emoji: "😂", titulo: "Só uma piada antiga", cor: "from-slate-400 to-gray-600" },
      ], correta: "narrativa", feedbackAcerto: "Isso! Mito NÃO é mentira — carrega verdade em forma de imagem.", feedbackErro: "MITO religioso é narrativa sagrada com verdade profunda em forma de história. Não é mentira." },
      { id: "q2", pergunta: "Um RITO é:", fotoUrl: usoColetivo, cards: [
        { id: "gesto", emoji: "🕯️", titulo: "Gesto organizado repetido com sentido sagrado", cor: "from-sky-500 to-blue-700" },
        { id: "musica", emoji: "🎵", titulo: "Um estilo musical", cor: "from-slate-400 to-gray-600" },
        { id: "moda", emoji: "🎈", titulo: "Uma moda passageira", cor: "from-red-500 to-rose-700" },
      ], correta: "gesto", feedbackAcerto: "Perfeito! Rito é gesto carregado de sentido sagrado.", feedbackErro: "RITO é GESTO ORGANIZADO e REPETIDO — batismo, casamento, oração diária." },
      { id: "q3", pergunta: "As 4 linguagens (mito, rito, símbolo, texto):", fotoUrl: sutras, cards: [
        { id: "juntas", emoji: "🎭", titulo: "Trabalham JUNTAS numa tradição", cor: "from-emerald-500 to-green-700" },
        { id: "isoladas", emoji: "🚪", titulo: "Uma só basta, o resto é decoração", cor: "from-red-500 to-rose-700" },
        { id: "competem", emoji: "⚔️", titulo: "Competem entre si", cor: "from-slate-400 to-gray-600" },
      ], correta: "juntas", feedbackAcerto: "Isso! As 4 se sustentam mutuamente.", feedbackErro: "As 4 TRABALHAM JUNTAS — cada uma completa e sustenta as outras." },
    ],
    falaFinal: "Radar afinado.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "Toque em 5 estados brasileiros onde é comum ver as 4 linguagens JUNTAS em festas populares religiosas.",
    instrucao: "Acenda 5 estados de forte integração das 4 linguagens",
    missao: { tipo: "selecionar", siglas: ["MG", "BA", "PE", "MA", "PA"], pergunta: "Quais 5 estados têm festas populares que integram mitos, ritos, símbolos e textos religiosos?" },
    falaFinal: "MG (congados), BA (lavagem do Bonfim), PE (frevo religioso), MA (Bumba-meu-boi), PA (Círio de Nazaré). 4 linguagens em ação.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como as 4 linguagens se ATIVAM juntas numa celebração? Ordene.",
    instrucao: "Toque na ordem correta",
    pergunta: "Uma celebração completa:",
    paradas: [
      { id: "convocacao", emoji: "🔔", rotulo: "1. CONVOCAÇÃO da comunidade", descricao: "Sino, chamado, aviso: a comunidade sabe que vai acontecer algo sagrado." },
      { id: "leitura", emoji: "📖", rotulo: "2. TEXTO é lido em voz alta", descricao: "A palavra sagrada aparece — abre a celebração." },
      { id: "mito", emoji: "📜", rotulo: "3. MITO é lembrado", descricao: "A história fundadora daquele momento é recontada, cantada ou encenada." },
      { id: "rito", emoji: "🕯️", rotulo: "4. RITO é praticado", descricao: "Gestos organizados: acender velas, comer, beber, dançar, abraçar." },
      { id: "simbolo", emoji: "✨", rotulo: "5. SÍMBOLOS ficam à vista", descricao: "Cruz, vela, presépio, altar, cocar, atabaque — presentes o tempo todo." },
    ],
    ordemCerta: ["convocacao", "leitura", "mito", "rito", "simbolo"],
    feedbackAcerto: "Isso! Convocação → texto → mito → rito → símbolo. Fluxo típico.",
    feedbackErro: "É CONVOCAÇÃO → TEXTO lido → MITO lembrado → RITO praticado → SÍMBOLOS presentes.",
    falaFinal: "5 passos. As 4 linguagens ativas de uma vez.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Decifrador",
    subtitulo: "Página 6 — As 4 Linguagens",
    paragrafos: [
      { id: "p1", texto: "Uma tradição religiosa nunca vive de um só elemento. Ela é feita de 4 LINGUAGENS integradas: mitos, ritos, símbolos e textos.", chaves: ["linguagens", "integradas"] },
      { id: "p2", texto: "MITOS são narrativas sagradas com verdade profunda. RITOS são gestos organizados com sentido. SÍMBOLOS são objetos que carregam significado. TEXTOS são palavras registradas.", chaves: ["mitos", "textos"] },
      { id: "p3", texto: "As 4 se sustentam MUTUAMENTE. Um texto sem rito vira letra morta. Um símbolo sem mito é enfeite. Um rito sem sentido vira automatismo. Juntas, elas fazem a tradição viva.", chaves: ["mutuamente", "viva"] },
      { id: "p4", texto: "Isso vale pra TODAS as tradições — cristãs, judaicas, islâmicas, budistas, hindus, indígenas, afro-brasileiras. Cada uma monta sua combinação das 4 linguagens de um jeito próprio.", chaves: ["todas", "próprio"] },
    ],
    falaFinal: "Leu tudo?",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo CLASSIFICADOR DAS 4 LINGUAGENS! Ligue cada elemento à sua linguagem.",
    instrucao: "⏱️ Que linguagem é essa?",
    duracaoSegundos: 12,
    pecas: [
      { id: "mito", emoji: "📜", rotulo: "MITO (narrativa)" },
      { id: "rito", emoji: "🕯️", rotulo: "RITO (gesto)" },
      { id: "simbolo", emoji: "✨", rotulo: "SÍMBOLO (objeto)" },
      { id: "texto", emoji: "📖", rotulo: "TEXTO (palavra)" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "História de Nhanderu criando o mundo", emoji: "📜", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "Contada por pajés Guarani", emoji: "🪶", cor: "from-emerald-400 to-green-600" }, contexto: "Narrativa sagrada indígena.", pecaCertaId: "mito", feedbackAcerto: "Isso! É MITO.", feedbackErro: "É MITO — narrativa sagrada da criação." },
      { id: "r2", municipioA: { nome: "Batismo com água", emoji: "🕯️", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "Gesto repetido em toda igreja cristã", emoji: "✝️", cor: "from-indigo-400 to-blue-600" }, contexto: "Cerimônia de entrada na comunidade cristã.", pecaCertaId: "rito", feedbackAcerto: "Perfeito! É RITO.", feedbackErro: "É RITO — gesto organizado e repetido com sentido sagrado." },
      { id: "r3", municipioA: { nome: "Cruz cristã pendurada", emoji: "✨", cor: "from-purple-400 to-fuchsia-600" }, municipioB: { nome: "Estrela de Davi bordada", emoji: "🕎", cor: "from-violet-400 to-purple-600" }, contexto: "Objetos com significado além de si mesmos.", pecaCertaId: "simbolo", feedbackAcerto: "Isso! É SÍMBOLO.", feedbackErro: "É SÍMBOLO — objeto que carrega significado maior que ele mesmo." },
      { id: "r4", municipioA: { nome: "Evangelho lido em voz alta", emoji: "📖", cor: "from-emerald-400 to-green-600" }, municipioB: { nome: "Torá recitada na sinagoga", emoji: "🕎", cor: "from-teal-400 to-emerald-600" }, contexto: "Palavra registrada da tradição.", pecaCertaId: "texto", feedbackAcerto: "Perfeito! É TEXTO.", feedbackErro: "É TEXTO — palavra sagrada registrada e lida publicamente." },
      { id: "r5", municipioA: { nome: "Dança dos orixás no terreiro", emoji: "💃", cor: "from-red-400 to-rose-600" }, municipioB: { nome: "Roda repetida em cada festa", emoji: "🥁", cor: "from-orange-400 to-red-600" }, contexto: "Gesto coreografado sagrado.", pecaCertaId: "rito", feedbackAcerto: "Isso! É RITO.", feedbackErro: "É RITO — gesto coreografado sagrado do candomblé." },
      { id: "r6", municipioA: { nome: "Lua crescente islâmica", emoji: "🌙", cor: "from-emerald-400 to-teal-600" }, municipioB: { nome: "Menorá judaica de 9 velas", emoji: "🕎", cor: "from-amber-400 to-yellow-600" }, contexto: "Objetos-emblema das tradições.", pecaCertaId: "simbolo", feedbackAcerto: "Boa! É SÍMBOLO.", feedbackErro: "É SÍMBOLO — objeto que identifica e evoca a tradição." },
    ],
    falaFinal: "6 classificações certas! Você virou Classificador das 4 Linguagens.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as 4 linguagens se dividem em uma celebração típica.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "rito", rotulo: "RITO — o que se FAZ (~35%)", emoji: "🕯️", percentual: 35, cor: "#3b82f6", descricao: "Gestos, procissões, cânticos, ajoelhar, comer junto — o corpo em ação.", exemplos: ["🙏 Ajoelhar", "🕯️ Acender vela"] },
      { id: "texto", rotulo: "TEXTO — o que se DIZ (~30%)", emoji: "📖", percentual: 30, cor: "#10b981", descricao: "Leituras públicas, orações, cantos escritos — a palavra sonora.", exemplos: ["📖 Evangelho", "🎼 Salmo"] },
      { id: "mito", rotulo: "MITO — o que se LEMBRA (~20%)", emoji: "📜", percentual: 20, cor: "#f59e0b", descricao: "As narrativas fundadoras que dão sentido a tudo que se está fazendo.", exemplos: ["🌟 Nascimento", "🕊️ Ressurreição"] },
      { id: "simbolo", rotulo: "SÍMBOLO — o que se VÊ (~15%)", emoji: "✨", percentual: 15, cor: "#8b5cf6", descricao: "Cruz, altar, vestes, ícones — presentes o tempo todo, mesmo em silêncio.", exemplos: ["✝️ Cruz", "🕎 Menorá"] },
    ],
    falaFinal: "FAZ, DIZ, LEMBRA, VÊ. As 4 formas de participar do sagrado.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "MITO religioso é:", opcoes: [
        { id: "a", texto: "Uma mentira comprovada", correta: false },
        { id: "b", texto: "Narrativa sagrada com verdade profunda", correta: true },
        { id: "c", texto: "Só uma piada", correta: false },
      ], feedbackAcerto: "Isso! Mito carrega verdade em forma de imagem.", feedbackErro: "MITO é narrativa sagrada com verdade profunda — não é mentira." },
      { id: "av2", pergunta: "As 4 linguagens religiosas (mito, rito, símbolo, texto):", opcoes: [
        { id: "a", texto: "Uma só basta, o resto é decoração", correta: false },
        { id: "b", texto: "Trabalham juntas — nenhuma sustenta a tradição sozinha", correta: true },
        { id: "c", texto: "Competem entre si", correta: false },
      ], feedbackAcerto: "Perfeito! As 4 se sustentam mutuamente.", feedbackErro: "Trabalham JUNTAS. Sem rito, texto morre. Sem símbolo, mito somem. As 4 são necessárias." },
      { id: "av3", pergunta: "Um SÍMBOLO religioso é:", opcoes: [
        { id: "a", texto: "Só um enfeite bonito", correta: false },
        { id: "b", texto: "Objeto que carrega significado maior que ele mesmo", correta: true },
        { id: "c", texto: "Uma logomarca de empresa", correta: false },
      ], feedbackAcerto: "Isso! Cruz, menorá, lua, cocar — cada um evoca uma tradição inteira.", feedbackErro: "SÍMBOLO carrega SIGNIFICADO maior que ele mesmo. Não é enfeite nem logomarca." },
    ],
    selo: { nome: "Classificador das 4 Linguagens", subtitulo: "Insígnia da Integração", emoji: "🎭", cor: "from-red-400 to-rose-600" },
    falaFinal: "Insígnia conquistada! Você enxerga as 4 linguagens agindo juntas.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Classificador das 4 Linguagens" },
};

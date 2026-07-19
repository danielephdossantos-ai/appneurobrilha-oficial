import type { AulaGeoV1 } from "../../types";
import { url as sentido } from "@/assets/ensino-religioso-9ano/u5-sentido-vida.jpg.asset.json";
import { url as projeto } from "@/assets/ensino-religioso-9ano/u6-projetos-vida.jpg.asset.json";
import { url as cuidado } from "@/assets/ensino-religioso-9ano/u1-cuidado-vida.jpg.asset.json";

/**
 * Ensino Religioso · 9º Ano · Unidade 5 · Aula 01
 * "O Sentido da Vida" — EF09ER05
 */
export const aula01: AulaGeoV1 = {
  slug: "aula-01-sentido-vida",
  titulo: "O Sentido da Vida",
  iconeTrilha: "🌅",
  bncc: ["EF09ER05"],
  duracaoMin: 22,

  cena01_motivacao: {
    tipo: "mesaCartografo",
    instrucao: "Observe o horizonte aberto.",
    mapaUrl: sentido,
    imagemDestaqueUrl: projeto,
    aurora:
      "Curador, aos 14 anos essa pergunta já bateu na sua porta: PRA QUE SERVE MINHA VIDA? Cada tradição religiosa deu uma resposta forte. Cristianismo diz 'amar e servir'. Budismo diz 'iluminar-se e libertar do sofrimento'. Islamismo diz 'submeter-se à vontade de Allah'. Humanismo diz 'construir sentido junto'. Nenhuma é resposta pronta — cada uma é um caminho.",
    falaFinal: "Sentido não vem pronto. Vem de um caminho escolhido.",
  },

  cena02_previsao: {
    tipo: "votoExplorador",
    aurora: "Palpite: existe UM sentido da vida pra todos?",
    pergunta: "'Pra que servimos?' tem uma única resposta?",
    opcoes: [
      { id: "sim", titulo: "SIM, um sentido universal", subtitulo: "descoberto ou revelado", emoji: "☝️", cor: "from-red-400 to-rose-600" },
      { id: "nao", titulo: "Existem RESPOSTAS diferentes", subtitulo: "cada tradição propõe uma", emoji: "🌈", cor: "from-purple-400 to-fuchsia-600" },
    ],
    respostaCerta: "nao",
    feedbackAcerto: "Isso! Cada tradição religiosa e cada visão secular oferece uma resposta forte — não existe UMA universal aceita por todos.",
    feedbackErro: "Cada tradição propõe UMA resposta forte, mas não há consenso mundial. Ensino Religioso estuda essas propostas com respeito.",
    falaFinal: "Muitas propostas de sentido. Escolha da pessoa.",
  },

  cena03_vocabulario: {
    tipo: "cadernosCampo",
    aurora: "3 conceitos-chave.",
    instrucao: "Toque em cada caderno",
    cadernos: [
      { id: "sentido", capa: "1. Sentido", emoji: "🌅", cor: "from-orange-500 to-red-700", conteudo: "SENTIDO é a resposta que a pessoa dá pra pergunta 'por que estou aqui?'. Pode vir de tradição religiosa, filosofia, arte, causa política, relações — ou combinação.", exemplo: "Ex.: 'meu sentido é cuidar da minha filha e da comunidade'; 'meu sentido é fazer arte'; 'meu sentido é servir a Deus'.", fotoUrl: sentido },
      { id: "vocacao", capa: "2. Vocação", emoji: "📯", cor: "from-amber-500 to-orange-700", conteudo: "VOCAÇÃO (do latim 'vocare' = chamar) é o SENTIDO SENTIDO COMO CHAMADO — a pessoa sente que algo maior a convoca pra viver de certa forma.", exemplo: "Ex.: 'me sinto chamado a ser professor'; 'sinto vocação pra vida religiosa'; 'sinto que devo lutar por essa causa'.", fotoUrl: projeto },
      { id: "transcend", capa: "3. Transcendência", emoji: "✨", cor: "from-indigo-500 to-purple-700", conteudo: "TRANSCENDÊNCIA é aquilo que ULTRAPASSA o indivíduo — Deus, a humanidade, a natureza, uma causa, o futuro. Dar sentido é conectar-se com algo maior que si.", exemplo: "Ex.: dedicar-se à ciência, à família, aos pobres, a Deus, à comunidade — todos são formas de transcender-se.", fotoUrl: cuidado },
    ],
    falaFinal: "Sentido + vocação + transcendência = a linguagem do significado.",
  },

  cena04_leituraGuiada: {
    tipo: "narrarMapa",
    aurora: "6 grandes respostas ao 'pra que vivemos?'.",
    instrucao: "Toque em cada balão",
    mapaUrl: sentido,
    pontos: [
      { id: "cristao", x: 15, y: 20, emoji: "✝️", cor: "from-sky-500 to-blue-700", titulo: "Cristianismo: amar e servir", texto: "Sentido = amar a Deus, amar o próximo, servir aos pequenos. Vida é dom que se retribui em amor.", fotoUrl: cuidado },
      { id: "islam", x: 50, y: 20, emoji: "☪️", cor: "from-green-500 to-emerald-700", titulo: "Islamismo: submissão consciente", texto: "'Islam' significa 'submissão a Allah'. Sentido = alinhar a vida à vontade divina, servir aos irmãos.", fotoUrl: sentido },
      { id: "budista", x: 85, y: 20, emoji: "☸️", cor: "from-orange-500 to-red-700", titulo: "Budismo: iluminação", texto: "Sentido = despertar. Ver a natureza real das coisas, libertar-se do sofrimento e ajudar os outros a libertarem-se.", fotoUrl: sentido },
      { id: "afro", x: 20, y: 75, emoji: "🥁", cor: "from-amber-500 to-orange-700", titulo: "Afro-brasileira: axé", texto: "Sentido = alimentar o axé (força vital) da comunidade — através dos rituais, do respeito aos ancestrais, do cuidado coletivo.", fotoUrl: projeto },
      { id: "hindu", x: 50, y: 75, emoji: "🕉️", cor: "from-red-500 to-orange-700", titulo: "Hinduísmo: dharma", texto: "Sentido = seguir o dharma — o dever cósmico específico de cada pessoa segundo seu contexto e sua natureza.", fotoUrl: sentido },
      { id: "sec", x: 82, y: 75, emoji: "🌍", cor: "from-emerald-500 to-green-700", titulo: "Humanismo secular: construir junto", texto: "Sentido não vem pronto — a gente constrói junto, no relacionamento, na arte, no trabalho, na luta por justiça.", fotoUrl: projeto },
    ],
    falaFinal: "6 propostas fortes. Cada uma coerente por dentro.",
  },

  cena05_compreensao: {
    tipo: "quizRadar",
    aurora: "3 perguntas.",
    instrucao: "Toque no card certo",
    perguntas: [
      { id: "q1", pergunta: "DHARMA, no hinduísmo, se refere a:", fotoUrl: sentido, cards: [
        { id: "dever", emoji: "🕉️", titulo: "Dever cósmico próprio de cada pessoa", cor: "from-orange-500 to-red-700" },
        { id: "livro", emoji: "📖", titulo: "Livro sagrado único", cor: "from-slate-400 to-gray-600" },
        { id: "templo", emoji: "🛕", titulo: "Nome do templo hindu", cor: "from-red-500 to-rose-700" },
      ], correta: "dever", feedbackAcerto: "Isso! Dharma é o dever específico de cada um.", feedbackErro: "Dharma é o DEVER cósmico próprio de cada pessoa segundo contexto e natureza." },
      { id: "q2", pergunta: "ILUMINAÇÃO no budismo significa:", fotoUrl: sentido, cards: [
        { id: "des", emoji: "☸️", titulo: "Despertar — ver as coisas como realmente são", cor: "from-orange-500 to-red-700" },
        { id: "luz", emoji: "💡", titulo: "Ter muita luz no templo", cor: "from-slate-400 to-gray-600" },
        { id: "sab", emoji: "🎓", titulo: "Formar-se numa escola", cor: "from-red-500 to-rose-700" },
      ], correta: "des", feedbackAcerto: "Perfeito! Iluminação é DESPERTAR — ver a realidade sem ilusões.", feedbackErro: "É DESPERTAR — ver as coisas como são, sem ilusões e sem apego." },
      { id: "q3", pergunta: "Humanismo secular vê o sentido da vida como:", fotoUrl: projeto, cards: [
        { id: "cons", emoji: "🤝", titulo: "Construção coletiva — feita junto", cor: "from-emerald-500 to-green-700" },
        { id: "pronto", emoji: "🎁", titulo: "Presente pronto do céu", cor: "from-slate-400 to-gray-600" },
        { id: "azar", emoji: "🎲", titulo: "Coisa aleatória sem importância", cor: "from-red-500 to-rose-700" },
      ], correta: "cons", feedbackAcerto: "Isso! Humanismo constrói sentido em relação com outros.", feedbackErro: "É CONSTRUÇÃO COLETIVA — humanismo secular vê sentido como algo feito, não recebido." },
    ],
    falaFinal: "Sentido conhece 6 caminhos.",
  },

  cena06_personagensLugar: {
    tipo: "mapaBrasilInterativo",
    aurora: "No Brasil, os jovens buscam sentido de muitas formas. Acenda 5 estados com forte diversidade juvenil (religiosa e secular).",
    instrucao: "Acenda 5 estados",
    missao: { tipo: "selecionar", siglas: ["SP", "RJ", "DF", "BA", "RS"], pergunta: "5 estados com forte pluralidade de movimentos juvenis (religiosos, culturais, políticos)?" },
    falaFinal: "SP, RJ, DF, BA, RS — pastorais juvenis, coletivos culturais, movimentos secundaristas, terreiros jovens.",
  },

  cena07_sequencia: {
    tipo: "linhaEstrada",
    aurora: "Como uma pessoa CONSTRÓI seu sentido de vida ao longo da adolescência?",
    instrucao: "Ordene os 5 momentos",
    pergunta: "Do 'não sei' ao 'é isso':",
    paradas: [
      { id: "vazio", emoji: "❓", rotulo: "1. VAZIO / PERGUNTA", descricao: "'Pra que estou aqui? Pra que serve minha vida?' A pergunta aparece com força na adolescência." },
      { id: "explora", emoji: "🔎", rotulo: "2. EXPLORAÇÃO", descricao: "A pessoa conhece tradições, filosofias, causas, artes, comunidades. Testa possibilidades." },
      { id: "experi", emoji: "🌱", rotulo: "3. EXPERIÊNCIA", descricao: "Envolve-se em grupo religioso, movimento social, ONG, coletivo, arte, projeto — vive na prática." },
      { id: "reflete", emoji: "🤔", rotulo: "4. REFLEXÃO", descricao: "Pergunta: 'onde me senti mais eu mesmo? Onde fez sentido?'." },
      { id: "compromisso", emoji: "🧭", rotulo: "5. COMPROMISSO", descricao: "A pessoa se compromete com um caminho — mesmo sabendo que pode redecidir depois. Sentido consolida-se agindo." },
    ],
    ordemCerta: ["vazio", "explora", "experi", "reflete", "compromisso"],
    feedbackAcerto: "Perfeito! Vazio → exploração → experiência → reflexão → compromisso.",
    feedbackErro: "A ordem: VAZIO/pergunta, EXPLORAÇÃO, EXPERIÊNCIA, REFLEXÃO, COMPROMISSO.",
    falaFinal: "5 passos. Adolescência é a fase certa pra fazer.",
  },

  cena08_voceLe: {
    tipo: "voceLeSozinho",
    aurora: "Sua vez.",
    tituloLivro: "📔 Diário do Curador",
    subtitulo: "Página 5 — O sentido da vida",
    paragrafos: [
      { id: "p1", texto: "SENTIDO DA VIDA é a resposta pessoal pra pergunta 'por que estou aqui?'. Cada tradição religiosa e cada visão secular oferece propostas fortes — nenhuma dá a resposta pronta.", chaves: ["sentido", "resposta pessoal"] },
      { id: "p2", texto: "Cristianismo propõe AMAR E SERVIR. Islamismo propõe SUBMISSÃO CONSCIENTE. Budismo propõe ILUMINAR-SE. Hinduísmo propõe SEGUIR O DHARMA. Afro propõe ALIMENTAR O AXÉ. Humanismo propõe CONSTRUIR SENTIDO JUNTO.", chaves: ["seis propostas"] },
      { id: "p3", texto: "TRANSCENDÊNCIA é o comum: dar sentido significa conectar-se com algo MAIOR que si — Deus, humanidade, natureza, comunidade, uma causa.", chaves: ["transcendência", "algo maior"] },
      { id: "p4", texto: "Na adolescência, a pergunta bate forte. Ninguém constrói sentido só pensando: precisa explorar, experimentar, refletir e assumir compromisso. Sentido consolida-se AGINDO. Você pode redecidir — mas precisa começar a decidir.", chaves: ["explorar", "compromisso"] },
    ],
    falaFinal: "Leu tudo? Bora pro minijogo.",
  },

  cena09_minijogo: {
    tipo: "construtorMarcos",
    aurora: "Minijogo TRADIÇÃO → PROPOSTA! Cada fala mostra uma proposta de sentido. De qual tradição vem?",
    instrucao: "⏱️ De qual tradição vem essa proposta?",
    duracaoSegundos: 12,
    pecas: [
      { id: "cristao", emoji: "✝️", rotulo: "Cristianismo" },
      { id: "islam", emoji: "☪️", rotulo: "Islamismo" },
      { id: "budista", emoji: "☸️", rotulo: "Budismo" },
      { id: "hindu", emoji: "🕉️", rotulo: "Hinduísmo" },
      { id: "afro", emoji: "🥁", rotulo: "Afro-brasileira" },
      { id: "sec", emoji: "🌍", rotulo: "Humanismo secular" },
    ],
    rodadas: [
      { id: "r1", municipioA: { nome: "Igreja", emoji: "⛪", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "'Servi ao Cristo'", emoji: "✝️", cor: "from-blue-400 to-indigo-600" }, contexto: "'Minha vida faz sentido quando amo a Deus e sirvo o próximo — especialmente o menor.'", pecaCertaId: "cristao", feedbackAcerto: "Isso! Cristianismo — amar e servir.", feedbackErro: "É CRISTIANISMO — 'amar e servir' é o núcleo cristão." },
      { id: "r2", municipioA: { nome: "Mesquita", emoji: "🕌", cor: "from-green-400 to-emerald-600" }, municipioB: { nome: "'Insh'Allah'", emoji: "☪️", cor: "from-emerald-400 to-green-600" }, contexto: "'Minha vida faz sentido quando alinho minha vontade à vontade de Allah e sirvo aos irmãos da ummah.'", pecaCertaId: "islam", feedbackAcerto: "Perfeito! Islamismo — submissão consciente.", feedbackErro: "É ISLAMISMO — 'islam' significa submissão consciente." },
      { id: "r3", municipioA: { nome: "Templo", emoji: "☸️", cor: "from-orange-400 to-red-600" }, municipioB: { nome: "Meditação", emoji: "🧘", cor: "from-yellow-400 to-orange-600" }, contexto: "'Minha vida faz sentido quando desperto pra realidade, libertando-me do desejo e ajudando outros a se libertarem.'", pecaCertaId: "budista", feedbackAcerto: "Isso! Budismo — iluminação.", feedbackErro: "É BUDISMO — iluminação, despertar, fim do sofrimento." },
      { id: "r4", municipioA: { nome: "Aldeia hindu", emoji: "🛕", cor: "from-red-400 to-orange-600" }, municipioB: { nome: "'Meu dharma'", emoji: "🕉️", cor: "from-orange-400 to-red-600" }, contexto: "'Minha vida faz sentido quando cumpro o dever cósmico que me cabe — meu dharma específico.'", pecaCertaId: "hindu", feedbackAcerto: "Perfeito! Hinduísmo — seguir o dharma.", feedbackErro: "É HINDUÍSMO — cumprir o dharma próprio." },
      { id: "r5", municipioA: { nome: "Terreiro", emoji: "🥁", cor: "from-amber-400 to-orange-600" }, municipioB: { nome: "'Meu axé'", emoji: "🌿", cor: "from-orange-400 to-red-600" }, contexto: "'Minha vida faz sentido quando alimento o axé do meu povo — nos rituais, no respeito aos mais velhos, no cuidado coletivo.'", pecaCertaId: "afro", feedbackAcerto: "Isso! Afro — alimentar o axé.", feedbackErro: "É AFRO-BRASILEIRA — alimentar o axé da comunidade." },
      { id: "r6", municipioA: { nome: "Sem religião", emoji: "🌍", cor: "from-sky-400 to-blue-600" }, municipioB: { nome: "'Construo com quem amo'", emoji: "🤝", cor: "from-cyan-400 to-sky-600" }, contexto: "'Não recebi sentido pronto. Construo com as pessoas que amo, com meu trabalho e com as causas que abraço.'", pecaCertaId: "sec", feedbackAcerto: "Boa! Humanismo — construir sentido junto.", feedbackErro: "É HUMANISMO SECULAR — sentido construído em relação." },
    ],
    falaFinal: "6 tradições, 6 propostas. Você já sabe distinguir.",
  },

  cena10_revisao: {
    tipo: "pizzaMunicipio",
    aurora: "Pizza: como as pessoas encontram sentido HOJE.",
    instrucao: "Toque em cada fatia",
    fatias: [
      { id: "religioso", rotulo: "Fonte RELIGIOSA (~55%)", emoji: "🙏", percentual: 55, cor: "#f59e0b", descricao: "Sentido vem da fé — servir a Deus, seguir o caminho da tradição, participar da comunidade religiosa. Ainda a fonte mais comum no mundo.", exemplos: ["✝️ Amar e servir", "☪️ Submissão", "☸️ Iluminação"] },
      { id: "misto-sec", rotulo: "MISTO + SECULAR (~45%)", emoji: "🌍", percentual: 45, cor: "#10b981", descricao: "Combina fé com trabalho, arte, causas — ou constrói sentido totalmente sem religião: relações, autoconhecimento, luta política, criação.", exemplos: ["🕊️ Fé + causa", "🎨 Arte", "🤝 Relações"] },
    ],
    falaFinal: "3 fontes. Todas legítimas.",
  },

  cena11_avaliacao: {
    tipo: "seloAtlas",
    aurora: "3 perguntas finais pra conquistar a insígnia BUSCADOR DE SENTIDO.",
    instrucao: "Responda as 3",
    perguntas: [
      { id: "av1", pergunta: "SENTIDO DA VIDA é:", opcoes: [
        { id: "a", texto: "Fórmula única pra todos", correta: false },
        { id: "b", texto: "Resposta pessoal — cada tradição/visão oferece caminhos fortes", correta: true },
        { id: "c", texto: "Ilusão sem valor", correta: false },
      ], feedbackAcerto: "Isso! Resposta pessoal com muitos caminhos possíveis.", feedbackErro: "É RESPOSTA PESSOAL — muitas tradições oferecem caminhos fortes." },
      { id: "av2", pergunta: "TRANSCENDÊNCIA significa:", opcoes: [
        { id: "a", texto: "Apenas ficar em êxtase religioso", correta: false },
        { id: "b", texto: "Conectar-se a algo MAIOR que si — Deus, humanidade, natureza, causa", correta: true },
        { id: "c", texto: "Fugir do mundo real", correta: false },
      ], feedbackAcerto: "Perfeito! Transcender = ultrapassar-se em direção ao maior.", feedbackErro: "É CONECTAR-SE com algo maior — Deus, humanidade, natureza, comunidade, causa." },
      { id: "av3", pergunta: "Sentido de vida se consolida:", opcoes: [
        { id: "a", texto: "Só pensando, sem agir", correta: false },
        { id: "b", texto: "Explorando, experimentando, refletindo e se comprometendo", correta: true },
        { id: "c", texto: "Esperando que alguém revele", correta: false },
      ], feedbackAcerto: "Isso! Sentido consolida-se agindo.", feedbackErro: "Sentido se consolida AGINDO — exploração + experiência + reflexão + compromisso." },
    ],
    selo: { nome: "Buscador de Sentido", subtitulo: "Insígnia das 6 Propostas de Vida", emoji: "🌅", cor: "from-orange-400 to-red-600" },
    falaFinal: "Insígnia conquistada! Você já pode escolher seu caminho com consciência.",
  },

  recompensa: { xp: 350, moedas: 250, medalha: "Buscador de Sentido" },
};
